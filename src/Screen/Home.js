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

const backgroundImage = require('../assets/nature.jpg');

export default function Home({navigation}) {
  return (
    <View style={{flex: 1}}>
      <FastImage style={styles.imageBackground} source={backgroundImage} />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 30,
            paddingVertical: 10,
            margin: 20,
          }}
          onPress={() => navigation.navigate('FlappyDoge')}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 30,
            }}>
            Flappy Doge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 30,
            paddingVertical: 10,
            margin: 20,
          }}
          onPress={() => {}}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 30}}>
            Space War
          </Text>
        </TouchableOpacity>
      </View>
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
