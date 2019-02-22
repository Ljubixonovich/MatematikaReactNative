import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';

import Btn from '../../.././../components/UI/buttons/ButtonWithBackground';
import Ballon from '../../../../components/Ballon/ballon';
import backgroundImage from '../../../../media/images/poz_baloni1.png';
import menuImage from '../../../../media/images/menu.png';


class RazlikaZadatak1Screen1 extends Component {
   static navigatorButtons = {
      rightButtons: [
         {
            //titile: 'menu',
            id: 'menu',
            buttonColor: 'orange',
            icon: menuImage
         }
      ]
   };
   static navigatorStyle = {
      // navBarBackgroundColor: 'gold'
   };

   constructor(props) {
      super(props);
      Dimensions.addEventListener('change', this.updateStyles);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
   }

   onNavigatorEvent(event) {
      if (event.type == 'NavBarButtonPress') {
         if (event.id == 'menu') {
            alert('Meni Opcije');
         }
      }
   }

   componentWillMount() {
      this.init();
   }

   componentWillUnmount() {
      Dimensions.removeEventListener('change', this.updateStyles);
   }

   init = () => {
      this.setState({
         viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
         ballonClickedCount: 0,
      });
   };

   resetGame = () => {
      this.init();
      this.refToBall1.reset();
      this.refToBall2.reset();
      this.refToBall3.reset();
      this.refToBall4.reset();
      this.refToBall5.reset();
      this.refToBall6.reset();
      this.refToBall7.reset();
      this.refToBall8.reset();
      this.refToBall9.reset();
      this.refToBall10.reset();
      this.refToBall11.reset();
      this.refToBall12.reset();
   };

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

   imageClick = () => {
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
            { flexDirection: 'row' } : { flexDirection: 'column' }]}
         >
            <View style={[styles.ballonContainer,
            this.state.viewMode === 'portrait' ?
               { flexDirection: 'column' } :
               { flexDirection: 'row' }]}
            >
               <Ballon color='red'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall1 = ref)}
               />
               <Ballon color='red'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall2 = ref)}
               />
               <Ballon color='red'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall3 = ref)}
               />
               <Ballon color='red'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall4 = ref)}
               />
            </View>
            <View style={[styles.ballonContainer,
            this.state.viewMode === 'portrait' ?
               { flexDirection: 'column' } :
               { flexDirection: 'row' }]}
            >
               <Ballon color='blue'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall5 = ref)}
               />
               <Ballon color='blue'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall6 = ref)}
               />
               <Ballon color='blue'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall7 = ref)}
               />
               <Ballon color='blue'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall8 = ref)}
               />
            </View>
            <View style={[styles.ballonContainer,
            this.state.viewMode === 'portrait' ?
               { flexDirection: 'column' } :
               { flexDirection: 'row' }]}
            >
               <Ballon color='red'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall9 = ref)}
               />
               <Ballon color='red'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall10 = ref)}
               />
               <Ballon color='red'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall11 = ref)}
               />
               <Ballon color='red'
                  onPress={this.imageClick}
                  ref={ref => (this.refToBall12 = ref)}
               />
            </View>

         </View>
      );
      return (
         <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImage}
         >
            <View>
               <Text style={{ textAlign: 'center' }}>{this.getTaskText()}</Text>
            </View>
            <View style={[{ flex: 1 },
            this.state.viewMode === 'portrait' ?
               null :
               { flexDirection: 'row-reverse' }
            ]}>
               <View style={this.state.viewMode === 'portrait' ?
                  { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' } :
                  { flexDirection: 'column-reverse', justifyContent: 'space-around', alignItems: 'center' }
               }>
                  <Btn color='blue' textColor='#fff' onPress={this.resetGame}>Reset</Btn>
                  <Text>Scoore: {this.state.ballonClickedCount}</Text>
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
