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
              <View style={{backgroundColor:'#fff',borderRadius:0,overflow:'hidden',backgroundColor:'#fff',elevation:10}}>
                  {/* <View style={{flexBasis:200,backgroundColor:'#e2e2e2'}}>
                      <Image
                          style={{width:'100%',height:200,backgroundColor:'#f2f2f2'}}
                          source={{uri:faker.image.abstract()}}
                      >
                      </Image>
                  </View> */}
                  <View style={{backgroundColor:'#fff'}}>
                      <View style={{padding:20}}>
                        <Text style={{fontSize:18}}>{props.title}</Text>
                        <Text style={{marginTop:10,color:'#9a9a9a'}}>{props.description}</Text>
                        {props.guide && <Text style={{marginTop:10,color:'#9a9a9a'}}>{props.guide}</Text>}
                      </View>
                      <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',borderTopWidth:1,borderColor:'#e2e2e2'}}>
                          <TouchableHighlight
                              onPress={props.close}
                              underlayColor={'#9a9a9a'}
                              style={{flex:1,alignItems:'center',backgroundColor:'#aaa',height:45,justifyContent:'center'}}
                          >
                              <Text style={{color:'#fff'}}>동의안함</Text>
                          </TouchableHighlight>
                          <TouchableHighlight 
                              onPress={() => { props.close(); props.goTo(); }}
                              style={{flex:1,alignItems:'center',backgroundColor:'#396EEE',height:45,justifyContent:'center'}}
                              underlayColor={'#3566DC'}
                          >
                              <Text style={{color:'#fff'}}>동의함</Text>
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

      </View>
    </Modal>
  )
}
