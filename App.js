import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import startMyApp from './src/screens/startMyApp';
import WelcomeScreen from './src/screens/welcome/welcome';
import SideDrawer from './src/screens/sideDrawer/sideDrawer';
import GradeScreen1 from './src/screens/grade1/grade1';
import GradeScreen2 from './src/screens/grade2/grade2';
import GradeScreen3 from './src/screens/grade3/grade3';
import GradeScreen4 from './src/screens/grade4/grade4';

import NepoznatBrojScreen1 from './src/screens/grade1/nepoznatBroj/nepoznatBroj1';
import NovacScreen1 from './src/screens/grade1/novac/novac';
import RazlikaScreen1 from './src/screens/grade1/razlika/razlika';


const store = configureStore();

Navigation.registerComponent('Matematika.WelcomeScreen', () => WelcomeScreen, store, Provider);
Navigation.registerComponent('Matematika.SideDrawer', () => SideDrawer, store, Provider);
Navigation.registerComponent('Matematika.GradeScreen1', () => GradeScreen1, store, Provider);
Navigation.registerComponent('Matematika.NepoznatBrojScreen1', () => NepoznatBrojScreen1, store, Provider);
Navigation.registerComponent('Matematika.NovacScreen1', () => NovacScreen1, store, Provider);
Navigation.registerComponent('Matematika.RazlikaScreen1', () => RazlikaScreen1, store, Provider);

Navigation.registerComponent('Matematika.GradeScreen2', () => GradeScreen2, store, Provider);
Navigation.registerComponent('Matematika.GradeScreen3', () => GradeScreen3, store, Provider);
Navigation.registerComponent('Matematika.GradeScreen4', () => GradeScreen4, store, Provider);


startMyApp();
