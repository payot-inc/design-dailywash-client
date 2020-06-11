import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './pages/splash';
import Order from './pages/order/stack';
import DrawerNavigator from './pages/drawerNavigator';
import FirstUser from './pages/firstUser/firstUserStack'
import NoticeStack from './pages/notice/noticeStack';
import History from './pages/history';

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
    notice:{
      screen:NoticeStack,
      navigationOptions: () => ({
        header: null,
      }),
    },
    history:{
      screen:History,
      navigationOptions: () => ({
        header: null,
      }),
    }

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
    initialRouteName:'splash',
  }
)

export default createAppContainer(AppSwitch);
