import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Spot from './spot';
import When from './when';
import Items from './items';
import Payment from './payment';
import Finish from './finish';

const orderStack = createStackNavigator(
  {
    spot: {
      screen: Spot,
    },
    when: {
      screen: When,
    },
    items:{
      screen:Items,
    },
    payment:{
      screen: Payment,
    },
    finish:{
      screen:Finish,
      navigationOptions:{
        header:null,
      }

    }
  },
  {
    initialRouteName: 'spot',

    defaultNavigationOptions: {
      headerShown: true,
      header: ({navigation}) => {
        const position = navigation.state.index;
        const title = ['어디에서 수거할까요?', '언제 수거할까요?','세탁 상품을 선택해주세요','세탁 상품을 선택해주세요','마지막으로 확인해주세요!'][position];
        const pageNumber = [position + 1];

        return (

        <View style={position === 2 || position === 3 ? {backgroundColor:'#fff'} : {backgroundColor:'#F5F6F8'}}>
            <View style={{height:120,borderBottomRightRadius:45,backgroundColor:'#396eee'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity
                    style={{width:50,height:50,alignItems:'center',justifyContent:'center'}}
                    onPress={()=>{
                        if (position === 0) { navigation.goBack() }
                        else {navigation.pop()}
                    }}
                >
                    <Icon name={'arrow-left'} color={'#fff'} size={18}></Icon>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=> navigation.navigate('main')}
                  style={{width:50,height:50,alignItems:'center',justifyContent:'center'}}
                >
                  <Icon name={'home'} color={'#fff'} size={18} />
                </TouchableOpacity>
              </View>
              <View style={{height:70,justifyContent:'flex-start',paddingHorizontal:15}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={{color:'#fff',marginRight:5,}}>STEP</Text>
                      <Text style={{color:'#fff',marginRight:5,fontWeight:'bold',fontSize:16}}>{pageNumber}</Text>
                      <Text style={{color:'rgba(255,255,255,0.6)'}}>/ 04</Text>
                  </View>
                  <Text style={{fontSize:21,color:'#fff'}}>
                    {title}
                  </Text>
              </View>
            </View>
        </View>
        );
      },
    },
  },
);

export default orderStack;
