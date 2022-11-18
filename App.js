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
import {Finger} from './src/components/Finger';
import entities from './src/entities';
import Physics from './src/systems';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screen/Home';
import FlappyDoge from './src/Screen/FlappyDoge';

const Stack = createNativeStackNavigator();

// const backgroundImage = require('./src/assets/nature.jpg');

export default function App() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  useEffect(() => {
    setRunning(false);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FlappyDoge"
          component={FlappyDoge}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={{flex: 1}}>
    //   <FastImage style={styles.imageBackground} source={backgroundImage} />

    //   <View
    //     style={{
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       flexDirection: 'column',
    //     }}>
    //     <TouchableOpacity
    //       style={{
    //         backgroundColor: 'black',
    //         paddingHorizontal: 30,
    //         paddingVertical: 10,
    //         margin: 20,
    //       }}
    //       onPress={() => {}}>
    //       <Text
    //         style={{
    //           fontWeight: 'bold',
    //           color: 'white',
    //           fontSize: 30,
    //         }}>
    //         Flappy Doge
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={{
    //         backgroundColor: 'black',
    //         paddingHorizontal: 30,
    //         paddingVertical: 10,
    //         margin: 20,
    //       }}
    //       onPress={() => {}}>
    //       <Text style={{fontWeight: 'bold', color: 'white', fontSize: 30}}>
    //         Space War
    //       </Text>
    //     </TouchableOpacity>
    //   </View>

    //   {/* <Text
    //     style={{
    //       textAlign: 'center',
    //       fontSize: 40,
    //       fontWeight: 'bold',
    //       margin: 20,
    //     }}>
    //     {currentPoints}
    //   </Text>
    //   <GameEngine
    //     ref={ref => {
    //       setGameEngine(ref);
    //     }}
    //     systems={[Physics]}
    //     entities={[entities()]}
    //     running={running}
    //     onEvent={e => {
    //       switch (e.type) {
    //         case 'game_over':
    //           setRunning(false);
    //           gameEngine.stop();
    //           break;
    //         case 'new_point':
    //           setCurrentPoints(currentPoints + 1);
    //           break;
    //         case 'star_point':
    //           setCurrentPoints(currentPoints + 1);
    //           break;
    //       }
    //     }}
    //     style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
    //     <StatusBar style="auto" hidden={true} />
    //   </GameEngine>

    //   {!running ? (
    //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //       <TouchableOpacity
    //         style={{
    //           backgroundColor: 'black',
    //           paddingHorizontal: 30,
    //           paddingVertical: 10,
    //         }}
    //         onPress={() => {
    //           setCurrentPoints(0);
    //           setRunning(true);
    //           gameEngine.swap(entities());
    //         }}>
    //         <Text style={{fontWeight: 'bold', color: 'white', fontSize: 30}}>
    //           START GAME
    //         </Text>
    //       </TouchableOpacity>
    //     </View>
    //   ) : null} */}
    // </View>
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
