import React,{useState} from 'react';
import {View, Text, TextInput, Animated} from 'react-native';
import { IconButton } from 'react-native-paper';

export default () => {

  const [activeColor, setActiveColor] = useState('#e2e2e2')

  const activeHandle = () => {
    setActiveColor('#03C1E8');
  }

  return(
    <View style={{flex:1,backgroundColor:'#F4F5F8',paddingHorizontal:10,position:'relative'}}>
      <View style={{marginBottom:30,}}>
        <Text style={{fontSize:24,fontWeight:'bold'}}>장소등록</Text>
        <Text style={{fontSize:14,color:'#9a9a9a',marginTop:5}}>수거배달을 위한 장소를 등록해주세요</Text>
      </View>
      <View style={{flexDirection:'row',position:'relative'}}>
        <TextInput
          style={{borderBottomWidth:1,borderColor:activeColor, width:'100%'}}
          onFocus={activeHandle}
        />
        <IconButton
          icon="magnify"
          onPress={()=>{}}
          style={{position:'absolute',right:0,top:0}}
          color={activeColor}
        />
      </View>
    </View>
  )
}