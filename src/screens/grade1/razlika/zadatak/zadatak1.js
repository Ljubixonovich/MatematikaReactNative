import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ImageBackground, Dimensions, Button } from 'react-native';

import Ballon from '../../../../components/Ballon/redBallon';
import backgroundImage from '../../../../media/images/poz_baloni1.png';
import redBallonImage from '../../../../media/images/redbubble.png';
import zvezdiceImage from '../../../../media/images/zvezdice.png';
import transparentImage from '../../../../media/images/transparent.png';


class RazlikaZadatak1Screen1 extends Component {
   constructor(props) {
      super(props);
      Dimensions.addEventListener('change', this.updateStyles);
   }

   state = {
      viewMode: 'portrait',
      ballon1: {
         source: redBallonImage
      },
      ballon2: {
         source: redBallonImage
      },
      ballon3: {
         source: redBallonImage
      },
      ballon4: {
         source: redBallonImage
      },
      ballon5: {
         source: redBallonImage
      },
      ballon6: {
         source: redBallonImage
      },
      
   }

   componentWillUnmount() {
      Dimensions.removeEventListener('change', this.updateStyles);
   }

   updateStyles = dims => {
      this.setState(prevState => {
         return {
            ballons: {
               ...prevState.ballons                            
            },
            viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
         }
      });
   }

   getTaskText = () => {
      return 'Milos je puknuo 5 baloncica. Pomogni Sari da pukne jedan vise od Milosa';
   }

   imageClick = () => {    
      this.setState(prevState => {
         return {
            ...prevState,
            ballon1: {
               source: zvezdiceImage
            }            
         }
      });
      setTimeout(() => {
         this.setState(prevState => {
            return {
               ...prevState,
               ballon1: {
                  source: transparentImage
               }               
            }
         });
      }, 200);
      
   }


   render() {
      let game = (
         <View style={[styles.gameContainer, 
            this.state.viewMode === 'portrait' ?
            {flexDirection: 'row'} : {flexDirection: 'column'}]}
         >
            <View style={[styles.ballonContainer,
               this.state.viewMode === 'portrait' ?
               {flexDirection: 'column', marginLeft: 50} : 
               {flexDirection: 'row', marginTop: 30}]}
            >
               <Ballon source={this.state.ballon1.source} onPress={this.imageClick}/>
               <Ballon source={this.state.ballon2.source} onPress={this.imageClick}/>
               <Ballon source={this.state.ballon3.source} onPress={this.imageClick}/>
            </View>
            <View style={[styles.ballonContainer,
               this.state.viewMode === 'portrait' ?
               {flexDirection: 'column', marginRight: 50} : 
               {flexDirection: 'row', marginBottom: 30}]}
            >
               <Ballon source={this.state.ballon4.source} onPress={this.imageClick}/>
               <Ballon source={this.state.ballon5.source} onPress={this.imageClick}/>
               <Ballon source={this.state.ballon6.source} onPress={this.imageClick}/>
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
      );
   }
}

const styles = StyleSheet.create({
   backgroundImage: {
      width: '100%',
      height: '100%',
   },
   gameContainer: {
      flex: 1,
   },
   ballonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly'
   },
});



const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(RazlikaZadatak1Screen1)
