import React from 'react';
import { Text, StyleSheet } from 'react-native';

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
      color: 'blue',
      fontFamily: 'KalamBold'
   }
});

export default headerText;
