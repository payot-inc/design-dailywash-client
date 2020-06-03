import React,{useEffect,useState} from 'react';
import {View,Text,Image,ScrollView, Dimensions,Animated} from 'react-native';
import {Divider, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props =>{

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return(
    <View style={{flex:1,padding:25,justifyContent:'center',alignItems:'center'}}>
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Icon name="check-circle" size={55} style={{marginBottom:20,color:'#01a1dd'}}></Icon>
        <Text style={{fontSize:28,letterSpacing:-1,fontWeight:'bold'}}>세탁물 수거 주문 결제 완료</Text>
        <Text style={{color:'#888',marginTop:10,textAlign:'center'}}>선택하신 <Text  style={{color:'#01a1dd'}}>2019년 2월 14일 오전</Text>에 세탁물을 수거합니다</Text>
      </View>

      <View style={{alignItems:'center',marginTop:20,backgroundColor:'#f2f2f2',padding:15,borderRadius:5,}}>
        <Text style={{textAlign:'center',color:'#494949'}}>세탁물품 수거가 가능토록 문앞에 세탁품을 놓아주세요</Text>
      </View>


      <View style={{alignItems:'center',justifyContent:'center',marginVertical:50}}>
        <Image source={require('../../assets/img/finish-img.png')} resizeMode={'contain'} style={{height:200}}/>
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