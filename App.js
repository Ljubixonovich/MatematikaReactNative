import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import startMyApp from './src/screens/startMyApp';
import WelcomeScreen from './src/screens/welcome/welcome';
import SideDrawer from './src/screens/sideDrawer/sideDrawer';
import GradeScreen1 from './src/screens/grade1/grade1';
import GradeScreen2 from './src/screens/grade2/grade2';


const store = configureStore();

Navigation.registerComponent('Matematika.WelcomeScreen', () => WelcomeScreen, store, Provider);
Navigation.registerComponent('Matematika.SideDrawer', () => SideDrawer, store, Provider);
Navigation.registerComponent('Matematika.GradeScreen1', () => GradeScreen1, store, Provider);
Navigation.registerComponent('Matematika.GradeScreen2', () => GradeScreen2, store, Provider);


startMyApp();
