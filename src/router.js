import React from 'react';
import {View, Text, TouchableHighlight,Image} from 'react-native';
import {createAppContainer, createSwitchNavigator, DrawerActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Splash from './pages/splash';
import Order from './pages/order/stack';
import DrawerNavigator from './pages/drawerNavigator';
import FirstUser from './pages/firstUser/firstUserStack'
import NoticeStack from './pages/notice/noticeStack';
import PriceTable from './pages/priceTable';

const MainStoryBorad = createStackNavigator(
  {
    main: {
      screen:DrawerNavigator,
      navigationOptions: props => ({
        header: props =>
        <View style={{height:70,width:'100%',zIndex:9,flexDirection:'row',alignItems:'center',backgroundColor:'#396eee'}}>
          <TouchableHighlight
              onPress={() => {
                  props.navigation.dispatch(DrawerActions.openDrawer())
              }}
              activeOpacity={0.7}
          >
              <View style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="menu" color={'#fff'} size={30}></Icon>
              </View>
          </TouchableHighlight>
          <View>
              <Image
                  source={require('./assets/img/logo.png')}
                  style={{width:140, resizeMode: 'contain'}}
              />
          </View>
        </View>
        ,

        headerStyle:{elevation:0,}
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
    priceTable:{
      screen:PriceTable,
      navigationOptions: ()=> ({
        title:'세탁 예상금액 조회'
      })
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
    initialRouteName:'home',
  }
)

export default createAppContainer(AppSwitch);
