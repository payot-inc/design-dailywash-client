import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/FontAwesome5';

import MainPage from './MainPage';
import Coupon from './coupon';
import MyCard from './myCard/stack';
import MyAddress from './myAddress/stack';
import MyOrder from './myOrder/stack';
import CustomDrawer from '../components/customDrawer';

export default DrawerNavigator = createDrawerNavigator(
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
