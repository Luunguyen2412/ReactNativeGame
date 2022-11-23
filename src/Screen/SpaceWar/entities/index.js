import Matter from 'matter-js';

import {Dimensions} from 'react-native';
import {getPipeSizePosPair} from '../../../utils/random';

import FloorSpace from '../components/FloorSpace';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default restart => {
  let engine = Matter.Engine.create({
    enableSleeping: false,
  });

  let world = engine.world;

  engine.gravity.y = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9);
  return {
    physics: {engine, world},

    Floor: FloorSpace(
      world,
      'gray',
      {x: windowWidth / 2, y: windowHeight},
      {height: 100, width: windowWidth},
    ),
  };
};
