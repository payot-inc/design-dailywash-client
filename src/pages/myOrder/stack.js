import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import MyOrderList from './list';
import MyOrderDetail from './detail';

const MyOrderStack = createStackNavigator(
  {
    myOrderList: {
      screen: MyOrderList,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    myOrderDetail: {
      screen: MyOrderDetail,
      navigationOptions: () => ({
        title: '이용내역 상세보기',
        headerStyle: {
          backgroundColor: '#F5F6F8',
          elevation: 0,
          height: 60,
        },
      }),
    },

  },
  {
    initialRouteName: 'myOrderList',
  },
);

export default MyOrderStack;
