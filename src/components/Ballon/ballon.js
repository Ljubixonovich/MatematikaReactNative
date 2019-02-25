import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const ballon = props => {
   return (
      <TouchableWithoutFeedback onPress={props.onBallonPress}>
         <Image source={props.source} style={styles.image} />
      </TouchableWithoutFeedback>
   );   
}

const styles = StyleSheet.create({
   image: {
      height: 80,
      width: 80,
      margin: 10
   }
});

export default ballon;
