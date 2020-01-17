import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

import MainPage from './pages/MainPage';
import Order from './pages/order/stack';
import Coupon from './pages/coupon';
import MyCard from './pages/myCard/stack';
import MyAddress from './pages/myAddress/stack';
import MyOrder from './pages/myOrder/stack';
import CustomDrawer from './components/customDrawer';

const DrawerNavigator = createDrawerNavigator(
  {
    main: {
      screen: MainPage,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>메인으로</Text>
        ),
        drawerIcon: () => (
          <Icon name={'home'}  size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    card: {
      screen: MyCard,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>결제카드 관리</Text>
        ),
        drawerIcon: () => (
          <Icon name={'credit-card'}  size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    coupon: {
      screen: Coupon,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>나의 쿠폰</Text>
        ),
        drawerIcon: () => (
          <Icon name={'ticket-alt'} size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    myAddress: {
      screen: MyAddress,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>수거/배달 장소관리</Text>
        ),
        drawerIcon: () => (
          <Icon name={'map-marker-alt'} size={18} color={'#9a9a9a'}/>
        )
      }),
    },
    myOrder: {
      screen: MyOrder,
      navigationOptions: () => ({
        drawerLabel: () => (
          <Text style={{fontSize:15}}>이용내역</Text>
        ),
        drawerIcon: () => (
          <Icon name={'list'} size={18} color={'#9a9a9a'}/>
        )
      }),
    },
  },

  {
    initialRouteName: 'main',
    drawerType: 'slide',
    overlayColor:'rgba(0,0,0,0.8)',
    contentComponent: CustomDrawer,
    contentOptions:{
      activeBackgroundColor:'#fff',
      activeTintColor:'#292929',
      itemsContainerStyle:{
        paddingVertical:15,
      },
      itemStyle:{
        height:50,
        alignItems:'center'
      }
    }
  },
);



const mainStoryBorad = createStackNavigator(
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

export default createAppContainer(mainStoryBorad);
