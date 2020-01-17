import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import MyAddressList from './list';
import AddressAdd from './add';

const MyAddressStack = createStackNavigator(
  {
    myAddressList: {
      screen: MyAddressList,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },

    addressAdd: {
      screen: AddressAdd,
      navigationOptions: () => ({
        title: '주소지 추가하기',
        headerStyle: {
          backgroundColor: '#F5F6F8',
          elevation: 0,
          height: 60,
        },
      }),
    },
   
  },
  {
    initialRouteName: 'myAddressList',
  },
);

export default MyAddressStack;
