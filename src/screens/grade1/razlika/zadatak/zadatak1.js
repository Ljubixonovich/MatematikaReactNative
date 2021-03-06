import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ImageBackground, Dimensions, FlatList } from 'react-native';
import Sound from 'react-native-sound';
import Icons from 'react-native-vector-icons/Ionicons';

import { colors } from '../../../../assets/index';
import { substractQuest1, addQuest1 } from '../../../../quests/textual1Level';
import Btn from '../../.././../components/UI/buttons/ButtonWithBackground';
import Ballon from '../../../../components/Ballon/ballon';
import backgroundImage from '../../../../assets/images/poz_baloni1.png';

import blueBallonImage from '../../../../assets/images/bluebubble.png';
import zvezdiceImage from '../../../../assets/images/zvezdice.png';
import transparentImage from '../../../../assets/images/transparent.png';


class RazlikaZadatak1Screen1 extends Component {
   componentDidMount() {
         Icons.getImageSource('md-more', 30).then((sources) => {
         this.props.navigator.setButtons({
            rightButtons: [
               { 
                  id: 'menu', 
                  component: 'Matematika.PopupMenu', 
                  passProps: {
                     actions: ['tekst zadatka', 'pomoc'],
                     onPress: this.menuHandler
                  }
               }
            ]
        });
        alert(this.state.taskText);        
     });
   }

   constructor(props) {
      super(props);
      Dimensions.addEventListener('change', this.updateStyles);
   } 

   componentWillMount() {
      this.init();
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

   init = () => {
      let numbersOfBallons = 12;      
      let ballons = [];
      for (let index = 0; index < numbersOfBallons; index++) {
         ballons.push({id: index + 1, source: blueBallonImage});         
      }
      // let task = addQuest1();
      let task = substractQuest1();
      this.setState({
         viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
         ballonClickedCount: 0,
         ballons: ballons,
         taskText: task.taskText,
         helpText: task.helpText,
         correctResult: task.correctResult         
      });      
   };

   reset = () => {
      this.init();
      setTimeout(() => {
         alert(this.state.taskText);
      }, 1);      
   }

   menuHandler = (a, b) => {
      if (b === 0) {
         alert(this.state.taskText);
      } else {
         alert(this.state.helpText);
      }      
   };
   
   checkForCorrectResult = () => {
      // let ballonsStillALive = this.state.ballons.length - this.state.ballonClickedCount;
      // alert(ballonsStillALive);

      // if (ballonsStillALive < this.state.correctResult) {
      //    return;
      // } else if (this.ballonsStillALive === this.state.correctResult) {
      //    alert('Bravo !!!');
      // } else {
      //    alert('Not correct. Please, try again.');
      // }

      if (this.state.ballonClickedCount < this.state.correctResult) {
         return;
      } else if (this.state.ballonClickedCount === this.state.correctResult) {
         alert('Bravo !!!');
         setTimeout(() => {
            this.init();
            alert(this.state.taskText);
         }, 2500);
      } else {
         alert('Not correct. Please, try again.');
      }
   } 
   
   popBallonSound = new Sound('pop.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
         console.log('failed to load the sound', error);
      } else {
         console.log('success callback');
      }
   }); 

   taskTimeout = 0;
   
   ballonClickHandler = (id, index) => {  
      let ballon = this.state.ballons.find(b => b.id === id);    
      if (ballon.source === transparentImage) {
         return;
      }
      clearTimeout(this.taskTimeout);
      this.taskTimeout = setTimeout(() => {
         this.checkForCorrectResult();
      }, 3000);
      this.popBallonSound.play();
      ballon.source = zvezdiceImage;
      let newBallons = [...this.state.ballons];
      newBallons[index] = ballon;      
      this.setState(prevState => {
         return {
            ...prevState,
            ballonClickedCount: prevState.ballonClickedCount + 1,
            ballons: newBallons
         }
      });
      setTimeout(() => {
         ballon.source = transparentImage;
         newBallons[index] = ballon;
         this.setState(prevState => {
            return {
               ...prevState,
               ballons: newBallons
            }
         });
      }, 70); 
   }

   render() {
      return (
         <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImage}
         >
            <View style={[{ flex: 1 },
            this.state.viewMode === 'portrait' ?
               null :
               { flexDirection: 'row-reverse' }
            ]}>
               <View style={this.state.viewMode === 'portrait' ?
                  { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' } :
                  { flexDirection: 'column-reverse', justifyContent: 'space-around', alignItems: 'center' }
               }>
                  <Btn color={colors.blue} textColor={colors.white} onPress={this.reset}>Reset</Btn>
                  <Text>Scoore: {this.state.ballonClickedCount}</Text>
               </View>
               <View style={styles.gameContainer}>
                  <FlatList style={{}}
                     data={this.state.ballons}
                     numColumns={this.state.viewMode === 'portrait' ? 3 : 4}
                     key={this.state.viewMode}
                     renderItem={(b, index) => ( 
                        <Ballon source={b.item.source}
                           onBallonPress={this.ballonClickHandler.bind(this, b.item.id, index)} 
                        />
                     )}
                     keyExtractor={(item) => item.id}
                  />
               </View>               
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
      alignItems: 'center',
      justifyContent: 'center'
   },
});


const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RazlikaZadatak1Screen1)
