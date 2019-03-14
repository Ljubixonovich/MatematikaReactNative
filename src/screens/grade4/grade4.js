import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

export default class GradeScreen4 extends Component {   
   constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
   }

   componentDidMount() {
      Icons.getImageSource('md-more', 30).then((sources) => {
         this.props.navigator.setButtons({
            rightButtons: [
               { 
                  id: 'menu', 
                  component: 'Matematika.PopupMenu', 
                  passProps: {
                     actions: ['asd', 'qwe'],
                     onPress: this.menuHandler
                  }
               }
            ]
        });        
     });
   }

   onNavigatorEvent(event) {
      if (event.type == 'NavBarButtonPress') {
         if (event.id == 'menu') {
           // alert('Meni Opcije');
         }
      }
   }

   lj0 = () => {
      alert('lj 0');
   }

   lj1 = () => {
      alert('lj 1');
   } 

   menuHandler = (a, b) => {
      // a = 'itemSelected';
      // b = 0;
      if (b === 0) {
         this.lj0();
      } else {
         this.lj1();
      }
   }


   render() {
      return (
         <View>
            <Text>4. Razred</Text>
         </View>
      );
   }
}
