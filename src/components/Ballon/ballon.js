import React, { Component } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Sound from 'react-native-sound';

import redBallonImage from '../../media/images/redbubble.png';
import blueBallonImage from '../../media/images/bluebubble.png';
import zvezdiceImage from '../../media/images/zvezdice.png';
import transparentImage from '../../media/images/transparent.png';


class ballon extends Component {
   constructor(props) {
      super(props);
   }

   state = {
      ballonPressed: false,
      source: this.props.color === 'red' ? redBallonImage : blueBallonImage
   };

   reset = () => {
      this.setState({
         ballonPressed: false,
         source: this.props.color === 'red' ? redBallonImage : blueBallonImage
      });
   }

   onBallonPress = () => {
      if (this.state.source == transparentImage) {
         return;
      }
      Sound.setCategory('Playback');
      let whoosh = new Sound('pop.mp3', Sound.MAIN_BUNDLE, (error) => {
         if (error) {
            console.log('failed to load the sound', error);
         } 
         else {
            whoosh.play();
            setTimeout(() => { }, 200);
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
      });      
   }



   render() {
      return (
         <TouchableWithoutFeedback onPress={this.onBallonPress}>
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

export default ballon;
