import React from 'react';
import { Image, StyleSheet } from 'react-native';

import imgRedBallon from '../../media/images/redbubble.png';

const redBallon = props => {
   return (
      <Image source={imgRedBallon} style={styles.image} />
   );
}

const styles = StyleSheet.create({
   image: {
      height: 80,
      width: 80
    }
});

export default redBallon;
