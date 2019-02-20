import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';

import backgroundImage from '../../../../media/images/poz_baloni1.png';
import redBallonImage from '../../../../media/images/redbubble.png';
import zvezdiceImage from '../../../../media/images/zvezdice.png';


class RazlikaZadatak1Screen1 extends Component {
   constructor(props) {
      super(props);
      Dimensions.addEventListener('change', this.updateStyles);
   }

   state = {
      viewMode: 'portrait'
   }

   componentWillUnmount() {
      Dimensions.removeEventListener('change', this.updateStyles);
   }

   updateStyles = dims => {
      this.setState({
         viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
      });
   }

   getTaskText = () => {
      return 'Milos je puknuo 5 baloncica. Pomogni Sari da pukne jedan vise od Milosa';
   }

   


   render() {
      let game = (
         <View style={[styles.gameContainer, 
            this.state.viewMode === 'portrait' ?
            styles.portraitGameContainer : styles.landscapeGameContainer]}
         >
            <View style={[styles.ballonContainer,
               this.state.viewMode === 'portrait' ?
               styles.portraitBallonContainer : styles.landscapeBallonContainer
               ]}
            >
               <Text>Baloni</Text>
               <Text>Baloni</Text>
               <Text>Baloni</Text>
            </View>
            <View style={this.state.viewMode === 'portrait' ?
               styles.portraitBallonContainer : styles.landscapeBallonContainer}
            >
               <Text>Baloni</Text>
               <Text>Baloni</Text>
               <Text>Baloni</Text>
            </View>
            
         </View>
      );
      return (
         <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImage}
         >
            <View>
               <Text style={{textAlign: 'center'}}>{this.getTaskText()}</Text>
            </View>
            {game}
         </ImageBackground>
      )
   }
}

const styles = StyleSheet.create({
   backgroundImage: {
      width: '100%',
      height: '100%',
      flex: 1,
   },
   gameContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly'
   },
   portraitGameContainer: {
      flexDirection: 'row'
   },
   landscapeGameContainer: {
      flexDirection: 'column'
   },
   ballonContainer: {
      
   },
   portraitBallonContainer: {
      flexDirection: 'column',
   },
   landscapeBallonContainer: {
      flexDirection: 'row'
   },
});




const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(RazlikaZadatak1Screen1)
