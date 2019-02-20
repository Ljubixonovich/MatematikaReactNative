import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';

import HeaderText from '../../../../components/UI/texts/headerText';
import backgroundImage from '../../../../media/images/poz_baloni1.png';


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
      let taskText = this.getTaskText();
      return (
         <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImage}
            resizeMode='cover'   
         >
            <View>
               <Text style={{textAlign: 'center'}}>{taskText}</Text>
            </View>
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
});




const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(RazlikaZadatak1Screen1)
