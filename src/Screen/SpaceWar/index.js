import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {GameEngine} from 'react-native-game-engine';
import entities from './entities/index';
import Physics from '../FlappyDoge/systems';
import FloorSpace from './components/FloorSpace';

const backgroundImage = require('../../assets/space.jpg');

export default function SpaceWar() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  useEffect(() => {
    setRunning(false);
  }, []);
  return (
    <View style={{flex: 1}}>
      <FastImage style={styles.imageBackground} source={backgroundImage} />

      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: 'bold',
          paddingTop: 60,
        }}>
        {currentPoints}
      </Text>
      <GameEngine
        entities={entities()}
        style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        <StatusBar style="auto" hidden={true} />
      </GameEngine>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  imageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
