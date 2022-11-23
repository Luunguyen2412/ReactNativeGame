import Matter from 'matter-js';
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import Obstacle from '../components/Obstacle';

import {Dimensions} from 'react-native';
import {getPipeSizePosPair} from '../../../utils/random';
import Star from '../components/Star';
import Finger from '../components/Finger';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default restart => {
  let engine = Matter.Engine.create({
    enableSleeping: false,
    gravity: {x: 0, y: 0},
  });

  let world = engine.world;

  // engine.gravity.y = 0.5;
  // engine.gravity.x = 0;

  world.gravity.y = 0.4;
  // world.gravity.x = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9);
  return {
    physics: {engine, world},

    Bird: Bird(world, 'green', {x: 280, y: 200}, {height: 25, width: 25}),

    Star1: Star(world, 'Star1', {x: 100, y: 400}, {height: 25, width: 25}),
    Star2: Star(world, 'Star2', {x: 200, y: 400}, {height: 25, width: 25}),
    Star3: Star(world, 'Star3', {x: 300, y: 400}, {height: 25, width: 25}),
    Star4: Star(world, 'Star4', {x: 150, y: 500}, {height: 25, width: 25}),
    Star5: Star(world, 'Star5', {x: 250, y: 500}, {height: 25, width: 25}),
    Star6: Star(world, 'Star6', {x: 350, y: 500}, {height: 25, width: 25}),
    Star7: Star(world, 'Star7', {x: 100, y: 600}, {height: 25, width: 25}),
    Star8: Star(world, 'Star8', {x: 200, y: 600}, {height: 25, width: 25}),
    Star9: Star(world, 'Star9', {x: 300, y: 600}, {height: 25, width: 25}),
    Star10: Star(world, 'Star10', {x: 350, y: 700}, {height: 25, width: 25}),
    Star11: Star(world, 'Star11', {x: 250, y: 700}, {height: 25, width: 25}),
    Star12: Star(world, 'Star12', {x: 150, y: 700}, {height: 25, width: 25}),

    // Star1: Star(world, 'Star2', {x: 50, y: 600}, {height: 20, width: 20}),

    // Star1: Star(
    //   world,
    //   'Star1',
    //   pipeSizePosB.pipeTop.pos,
    //   pipeSizePosB.pipeTop.size,
    // ),

    // Star2: Star(
    //   world,
    //   'Star2',
    //   pipeSizePosA.pipeTop.pos,
    //   pipeSizePosA.pipeTop.size,
    // ),

    // ObstacleTop1: Obstacle(
    //   world,
    //   'ObstacleTop1',
    //   'white',
    //   pipeSizePosA.pipeTop.pos,
    //   pipeSizePosA.pipeTop.size,
    // ),
    // ObstacleBottom1: Obstacle(
    //   world,
    //   'ObstacleBottom1',
    //   'white',
    //   pipeSizePosA.pipeBottom.pos,
    //   pipeSizePosA.pipeBottom.size,
    // ),

    // ObstacleTop2: Obstacle(
    //   world,
    //   'ObstacleTop2',
    //   'white',
    //   pipeSizePosB.pipeTop.pos,
    //   pipeSizePosB.pipeTop.size,
    // ),
    // ObstacleBottom2: Obstacle(
    //   world,
    //   'ObstacleBottom2',
    //   'white',
    //   pipeSizePosB.pipeBottom.pos,
    //   pipeSizePosB.pipeBottom.size,
    // ),

    FloorBottom: Floor(
      world,
      'powderblue',
      {x: windowWidth / 2, y: windowHeight},
      {height: 100, width: windowWidth},
    ),

    FloorRight: Floor(
      world,
      'powderblue',
      {x: windowWidth, y: windowHeight / 2},
      {height: windowHeight, width: 50},
    ),

    FloorLeft: Floor(
      world,
      'powderblue',
      {x: windowWidth / 24, y: windowHeight / 2},
      {height: windowHeight, width: 50},
    ),

    FloorTop: Floor(
      world,
      'powderblue',
      {x: windowWidth / 2, y: windowHeight / 30},
      {height: 50, width: windowWidth},
    ),
  };
};
