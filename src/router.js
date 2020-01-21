import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './pages/splash';
import Order from './pages/order/stack';
import DrawerNavigator from './pages/drawerNavigator';
import FirstUser from './pages/firstUser/firstUserStack'


const MainStoryBorad = createStackNavigator(
  {
    main: {
      screen:DrawerNavigator,
      navigationOptions: () => ({
        header: null,
      }),
    },
    order: {
      screen:Order,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'main',
  },
);

const AppSwitch = createSwitchNavigator(
  {
    home:MainStoryBorad,
    splash:Splash,
    firstUser:FirstUser,
  },
  {
    initialRouteName:'home',
  }
)

export default createAppContainer(AppSwitch);
