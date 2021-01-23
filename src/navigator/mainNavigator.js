import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial195526Navigator from '../features/Tutorial195526/navigator';
import NotificationList195498Navigator from '../features/NotificationList195498/navigator';
import Settings195497Navigator from '../features/Settings195497/navigator';
import Settings195489Navigator from '../features/Settings195489/navigator';
import UserProfile195487Navigator from '../features/UserProfile195487/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial195526: { screen: Tutorial195526Navigator },
NotificationList195498: { screen: NotificationList195498Navigator },
Settings195497: { screen: Settings195497Navigator },
Settings195489: { screen: Settings195489Navigator },
UserProfile195487: { screen: UserProfile195487Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
