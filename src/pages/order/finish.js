import React,{useEffect,useState} from 'react';
import {View,Text,Image,ScrollView, Dimensions,Animated} from 'react-native';
import {Divider, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props =>{

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return(
    <View style={{flex:1,padding:25,justifyContent:'center',alignItems:'center'}}>
      <View style={{alignItems:'center'}}>
        <Text style={{fontSize:32,letterSpacing:-1,fontWeight:'bold'}}>예약이 완료되었습니다</Text>
        <Text style={{color:'#888',marginTop:10}}>선택하신 <Text  style={{color:'#01a1dd'}}>2019년 2월 14일 오전</Text>에 세탁물을 수거합니다</Text>
      </View>


      <View style={{alignItems:'center',justifyContent:'center',marginVertical:25}}>
        <Image source={require('../../assets/img/finishImg.png')} resizeMode={'contain'} style={{width:screenWidth-25,height:240}}/>
      </View>

      <View style={{alignItems:'center',marginBottom:25,backgroundColor:'#f2f2f2',padding:20,borderRadius:5,}}>
        <Text style={{textAlign:'center',color:'#494949'}}>수거 후 검수시 세탁물의 오염 정도에 따라 <Text style={{color:'#d22828'}}>세탁비용이 추가발생</Text> 할 수 있으며 추가 발생된 금액은 <Text style={{color:'#d22828'}}>선택된 결제카드에 의해 자동 결제</Text>됩니다</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Button
          mode="contained"
          contentStyle={{backgroundColor:'#292929',height:45}}
          style={{elevation:0,width:200,width:150,height:45,overflow:'hidden',borderRadius:22.5}}
          labelStyle={{fontSize:16,letterSpacing:-0.4}}
          onPress={()=> props.navigation.navigate('main')}
        >메인으로</Button>      
      </View>
    </View>
  )
}