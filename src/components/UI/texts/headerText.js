import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { colors, fonts } from '../../../assets/index';

const headerText = props => {
   return (
      <Text {...props} 
         style={[
            styles.headerText,
            props.style
      ]}>
         {props.children}
      </Text>
     );  
}

const styles = StyleSheet.create({
   headerText: {
      fontSize: 28,
      textAlign: 'center',
      color: colors.blue,
      fontFamily: fonts.bold
   }
});

export default headerText;
