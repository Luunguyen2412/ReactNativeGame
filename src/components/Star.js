import Matter from 'matter-js';
import React from 'react';
import {Animated, View} from 'react-native';

const BirdIcon = require('../assets/calm.png');

const Star = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <View
      style={{
        backgroundColor: 'yellow',
        position: 'absolute',
        borderRadius: 40,
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};

export default (world, label, pos, size) => {
  const initialStar = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {label, isStatic: true, isSensor: false},
  );

  initialStar.restitution = 2;
  // // turns off collisions
  // initialStar.collisionFilter = {
  //   group: -1,
  //   category: 2,
  //   mask: 0,
  // };

  Matter.World.add(world, initialStar);

  return {
    body: initialStar,
    pos,
    renderer: <Star />,
  };
};
