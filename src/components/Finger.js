import Matter from 'matter-js';
import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';

const RADIUS = 20;

// const Finger = props => {
//     const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
//     const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

//   const xBody = props.body.position[0] - RADIUS / 2;
//   const yBody = props.body.position[1] - RADIUS / 2;

//   return <View style={[styles.finger, {left: xBody, top: yBody}]} />;
// };

// const styles = StyleSheet.create({
//   finger: {
//     borderColor: '#CCC',
//     borderWidth: 4,
//     borderRadius: RADIUS * 2,
//     width: RADIUS * 2,
//     height: RADIUS * 2,
//     backgroundColor: 'pink',
//     position: 'absolute',
//   },
// });

// export default Finger;

class Finger extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return <View style={[styles.finger, {left: x, top: y}]} />;
  }
}

const styles = StyleSheet.create({
  finger: {
    borderColor: '#CCC',
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: 'pink',
    position: 'absolute',
  },
});

export {Finger};
