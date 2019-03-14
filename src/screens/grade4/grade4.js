import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

export default class GradeScreen4 extends Component {   
   constructor(props) {
      super(props);
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

   handlerPopup0 = () => {
      alert('popup 0');
   }

   handlerPopup1 = () => {
      alert('popup 1');
   } 

   menuHandler = (a, b) => {
      // a = 'itemSelected';
      // b = 0;
      if (b === 0) {
         this.handlerPopup0();
      } else {
         this.handlerPopup1();
      }
   };


   render() {
      return (
         <View>
            <Text>4. Razred</Text>
         </View>
      );
   }
}
