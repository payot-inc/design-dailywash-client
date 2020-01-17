import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableHighlight  } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Cards from './list';
import CardAdd from './add';

const MyCardStack = createStackNavigator(
  {
    cards: {
      screen: Cards,
      navigationOptions: {
        header:null,
      }
    },
    
    cardAdd: {
      screen: CardAdd,
      navigationOptions: props => ({
        title: '카드등록',       
        headerStyle: {
          backgroundColor: '#F5F6F8',
          elevation: 0,
          height: 60,
        },
      }),
    },    
  },
  {
    initialRouteName: 'cards',
    
  },
);

export default MyCardStack;
