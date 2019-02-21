import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ImageBackground, Dimensions, Button } from 'react-native';

import Btn from '../../.././../components/UI/buttons/ButtonWithBackground';
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

   resetGame = () => {
      this.setState({
         viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
         ballonClickedCount: 0,
      });
      
   };

   componentWillMount() {
      this.resetGame();
   }

   componentWillUnmount() {
      Dimensions.removeEventListener('change', this.updateStyles);
   }

   updateStyles = dims => {
      this.setState(prevState => {
         return {
            ...prevState,
            viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
         }
      });
   }

   getTaskText = () => {
      return 'Milos je puknuo 5 baloncica. Pomogni Sari da pukne jedan vise od Milosa';
   }

   imageClick = (id) => { 
      this.setState(prevState => {
         return {
            ...prevState,
            ballonClickedCount: prevState.ballonClickedCount + 1         
         }      
      });
   }




   render() {
      let game = (
         <View style={[styles.gameContainer, 
            this.state.viewMode === 'portrait' ?
            {flexDirection: 'row'} : {flexDirection: 'column'}]}
         >
            <View style={[styles.ballonContainer,
               this.state.viewMode === 'portrait' ?
               {flexDirection: 'column'} : 
               {flexDirection: 'row'}]}
            >
               <Ballon onPress={() => this.imageClick(1)} ref={ref => this.lj = ref} />
               <Ballon onPress={() => this.imageClick(2)}/>
               <Ballon onPress={() => this.imageClick(3)}/>
               <Ballon onPress={() => this.imageClick(4)}/>
            </View>
            <View style={[styles.ballonContainer,
               this.state.viewMode === 'portrait' ?
               {flexDirection: 'column'} : 
               {flexDirection: 'row'}]}
            >
               <Ballon onPress={() => this.imageClick(5)}/>
               <Ballon onPress={() => this.imageClick(6)}/>
               <Ballon onPress={() => this.imageClick(7)}/>
               <Ballon onPress={() => this.imageClick(8)}/>
            </View>
            <View style={[styles.ballonContainer,
               this.state.viewMode === 'portrait' ?
               {flexDirection: 'column'} : 
               {flexDirection: 'row'}]}
            >               
               <Ballon onPress={() => this.imageClick(9)}/>
               <Ballon onPress={() => this.imageClick(10)}/>
               <Ballon onPress={() => this.imageClick(11)}/>
               <Ballon onPress={() => this.imageClick(12)}/>
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
            <View style={[{flex: 1}, 
               this.state.viewMode === 'portrait' ?
               null :
               {flexDirection: 'row-reverse'}
            ]}>
               <View style={this.state.viewMode === 'portrait' ? 
                  {flexDirection: 'row', justifyContent:'space-around', alignItems:'center'} : 
                  {flexDirection: 'column', justifyContent:'space-around', alignItems:'center'}
               }>  
                  <Text>Scoore: {this.state.ballonClickedCount}</Text>             
                  <Btn color='blue' textColor='#fff' onPress={this.resetGame}>Reset</Btn>                  
               </View>
               {game}
            </View>
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
