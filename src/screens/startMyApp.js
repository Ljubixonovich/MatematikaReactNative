import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { fonts } from '../assets/index';


const startMyApp = () => {
   Promise.all([
      Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
   ]).then(sources => {
      Navigation.startSingleScreenApp({
         screen:
         {
            screen: 'Matematika.WelcomeScreen',
            title: 'Matematika',
            icon: sources[0]
         },
         drawer: {
            left: {
               screen: 'Matematika.SideDrawer'
            }
         },
         appStyle: {
            navBarTitleTextCentered: true,
            navBarTextFontFamily: fonts.bold
         }
      });
   });

};

export default startMyApp;
