import React, { Component } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';


class redBallon extends Component {
   constructor(props) {
      super(props);
   }

   render(){
      return (
         <TouchableWithoutFeedback onPress={this.props.onPress}>
            <Image source={this.props.source} style={styles.image} />
         </TouchableWithoutFeedback>
      );
   }
}

const styles = StyleSheet.create({
   image: {
      height: 80,
      width: 80
    }
});

export default redBallon;
