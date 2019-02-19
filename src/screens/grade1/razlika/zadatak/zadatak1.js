import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import HeaderText from '../../../../components/UI/texts/headerText';


export default class RazlikaZadatak1Screen1 extends Component {
   constructor(props) {
      super(props);
   }


   render() {
      return (
         <View>
            <HeaderText>Konacno na prvom zadatku</HeaderText>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   
});
