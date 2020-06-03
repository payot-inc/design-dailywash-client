import React from 'react';
import {View, Text, Modal, Image, TouchableHighlight,TouchableOpacity} from 'react-native';
import faker from 'faker';

export default props => {

  return (

    <Modal
      visible={props.visible}
      transparent={true}
      animationType={'fade'}
      onRequestClose={props.close}
     >
      <View style={{flex:1,justifyContent:'center'}}>
          <View style={{zIndex:2,padding:40,}}>
              <View style={{backgroundColor:'#fff',borderRadius:10,overflow:'hidden',backgroundColor:'#fff',elevation:10}}>
                   <View style={{backgroundColor:'#fff'}}>
                      <View style={{padding:20}}>
                        <Text style={{fontSize:18}}>{props.title}</Text>
                        <Text style={{marginTop:10,color:'#9a9a9a'}}>{props.description}</Text>
                        {/* <Text style={[props.guide === '' ? {display:'none'} : {marginTop:10,color:'#9a9a9a'}]}>{props.guide}</Text> */}
                      </View>
                      <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',borderTopWidth:1,borderColor:'#e2e2e2'}}>
                          <TouchableOpacity
                              onPress={props.close}
                              style={{flex:1,alignItems:'center',height:50,justifyContent:'center'}}
                          >
                              <Text style={{color:'#494949'}}>취소</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              onPress={props.close}
                              style={{flex:1,alignItems:'center',height:50,justifyContent:'center'}}
                          >
                              <Text style={{color:'#01a1dd'}}>확인</Text>
                          </TouchableOpacity>
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

      </View>
    </Modal>
  )
}
