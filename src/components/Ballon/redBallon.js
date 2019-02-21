import React, { Component } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import redBallonImage from '../../media/images/redbubble.png';
import zvezdiceImage from '../../media/images/zvezdice.png';
import transparentImage from '../../media/images/transparent.png';


class redBallon extends Component {
   constructor(props) {
      super(props);
   }

   state = {
      ballonPressed: false,
      source: redBallonImage
   };

   reset = () => {
      this.setState({
         ballonPressed: false,
         source: redBallonImage
      });
   }

   ballonPressed = () => {
      if (this.state.source === redBallonImage){
         this.setState(prevState => {
            return {
               ...prevState,
               ballonPressed: true, 
               source: zvezdiceImage                       
            }
         }); 
         setTimeout(() => {
            this.setState(prevState => {
               return {
                  ...prevState,
                  source: transparentImage              
               }
            });
         }, 100);
         this.props.onPress();       
      }      
   }

   render(){
      return (
         <TouchableWithoutFeedback onPress={this.ballonPressed}>
            <Image source={this.state.source} style={styles.image} />
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
