import Matter from 'matter-js';
import {getPipeSizePosPair} from '../../../utils/random';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Physics = (entities, {touches, time, dispatch}) => {
  let engine = entities.physics.engine;

  // Bird
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      Matter.Body.setVelocity(entities.Bird.body, {
        x: 0,
        y: -3,
      });
    });

  Matter.Engine.update(engine, time.delta);

  //Star
  // for (let i = 1; i <= 2; i++) {
  //   if (
  //     entities[`Star${i}`].body.bounds.max.x <= 50 &&
  //     !entities[`Star${i}`].point
  //   ) {
  //     entities[`Star${i}`].point = true;
  //     dispatch({type: 'star_point'});
  //   }

  //   if (entities[`Star${i}`].body.bounds.max.x <= 0) {
  //     const pipeSizePos = getPipeSizePosPair(windowWidth * 0.4);

  //     Matter.Body.setPosition(
  //       entities[`Star${i}`].body,
  //       pipeSizePos.pipeTop.pos,
  //     );
  //   }
  //   Matter.Body.translate(entities[`Star${i}`].body, {x: -3, y: 0});
  // }

  //Obstacle
  // for (let index = 1; index <= 2; index++) {
  //   if (
  //     entities[`ObstacleTop${index}`].body.bounds.max.x <= 50 &&
  //     !entities[`ObstacleTop${index}`].point
  //   ) {
  //     entities[`ObstacleTop${index}`].point = true;
  //     dispatch({type: 'new_point'});
  //   }

  //   if (entities[`ObstacleTop${index}`].body.bounds.max.x <= 0) {
  //     const pipeSizePos = getPipeSizePosPair(windowWidth * 0.9);

  //     Matter.Body.setPosition(
  //       entities[`ObstacleTop${index}`].body,
  //       pipeSizePos.pipeTop.pos,
  //     );
  //     Matter.Body.setPosition(
  //       entities[`ObstacleBottom${index}`].body,
  //       pipeSizePos.pipeBottom.pos,
  //     );

  //     entities[`ObstacleTop${index}`].point = false;
  //   }

  //   Matter.Body.translate(entities[`ObstacleTop${index}`].body, {x: -3, y: 0});
  //   Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {
  //     x: -3,
  //     y: 0,
  //   });
  // }

  //Role
  Matter.Events.on(engine, 'collisionStart', event => {
    var pairs = event.pairs;

    var objA = pairs[0].bodyA.label;
    var objB = pairs[0].bodyB.label;

    console.log(objA + ' -> ' + objB);

    if (
      objB === 'Star1' &&
      objB === 'Star2' &&
      objB === 'Star3' &&
      objB === 'Star4'
    ) {
      // dispatch({type: 'new_point'});
      console.log('collision Star');
    }

    // bat dau va cham
    // dispatch({type: 'game_over'});
    // dispatch({type: 'new_point'});
  });
  return entities;
};
export default Physics;
