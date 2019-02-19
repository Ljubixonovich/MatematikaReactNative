import React from 'react';
import {
   TouchableOpacity,
   TouchableNativeFeedback,
   Text,
   View,
   StyleSheet,
   Platform
} from 'react-native';

const buttonWithBackground = props => {
   const content = (
      <View style={[
         styles.button,
         { backgroundColor: props.color },
         props.disabled ? styles.disabled : null
      ]}>
         <Text style={[
            { textAlign: 'center', fontSize: 20, color: props.textColor },
            props.disabled ? styles.disabledText : null]}
            adjustsFontSizeToFit={true}
         >{props.children}
         </Text>
      </View>
   );

   if (props.disabled) {
      return content;
   }
   if (Platform.OS === 'android') {
      return (
         <TouchableNativeFeedback onPress={props.onPress}>
            {content}
         </TouchableNativeFeedback>
      );
   }

   return (
      <TouchableOpacity onPress={props.onPress}>
         {content}
      </TouchableOpacity>
   );

};

const styles = StyleSheet.create({
   button: {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      margin: 5,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'black',
      opacity: 0.8,
      justifyContent: 'center',
      alignItems: 'center'
   },
   disabled: {
      backgroundColor: '#eee',
      borderColor: '#aaa'
   },
   disabledText: {
      color: '#aaa',
   }
});

export default buttonWithBackground;