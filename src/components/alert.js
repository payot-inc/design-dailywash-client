import React from 'react';
import {View, Text, Modal, TouchableOpacity,TouchableHighlight } from 'react-native';

export default props => {
  return(
    <Modal
      visible={props.open}
      transparent={true}
      animationType={'fade'}
      onRequestClose={props.close}
    >
      <View style={{flex:1,justifyContent:'center'}}>
          <View style={{zIndex:2,padding:40,}}>
              <View style={{backgroundColor:'#fff',borderRadius:10,overflow:'hidden',backgroundColor:'#fff',elevation:10,}}>
                <View style={{padding:20,alignItems:'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold'}}>{props.title}</Text>
                  <Text style={{marginTop:10,color:'#888'}}>{props.description}</Text>
                </View>
                <View style={{alignItems:'center',borderTopWidth:1,borderColor:'#e2e2e2',width:'100%'}}>
                    <TouchableHighlight
                      underlayColor={'#f2f2f2'}
                      onPress={props.close}
                      style={{height:50,width:'100%',justifyContent:'center',alignItems:'center'}}
                    >
                      <Text>확인</Text>
                    </TouchableHighlight>
                </View>
              </View>
          </View>
      </View>

      <TouchableOpacity
          onPress={props.close}
          activeOpacity={1}
          style={{flex:1,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',zIndex:1,width:'100%',height:'100%'}}
      >
      </TouchableOpacity>
    </Modal>
  )
}