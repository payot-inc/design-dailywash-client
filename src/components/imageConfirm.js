import React from 'react';
import {View, Text, Modal, Image, TouchableHighlight,TouchableOpacity, Dimensions} from 'react-native';
import faker from 'faker';

export default props => {

    const screenWidth = Dimensions.get('window').width;

    return (

    <Modal
      visible={props.visible}
      transparent={true}
      animationType={'fade'}
      onRequestClose={props.close}
     >
      <View style={{flex:1,justifyContent:'center'}}>
          <View style={{zIndex:2,padding:40,}}>
              <View style={{backgroundColor:'#fff',borderRadius:0,overflow:'hidden',elevation:10,borderRadius:10}}>
                  <View style={{justifyContent:'center',alignItems:'center',paddingVertical:30}}>                   
                    <Image
                        style={{width:screenWidth ,height:180}}
                        source={props.img}
                        resizeMode={'contain'}
                    />  
                  </View>
                  <View style={{backgroundColor:'#fff'}}>
                      <View style={{padding:30,alignItems:'center',paddingTop:0,}}>
                        <Text style={{fontSize:18,textAlign:'center'}}>{props.title}</Text>
                        <Text style={{marginTop:10,color:'#9a9a9a',textAlign:'center'}}>{props.description}</Text>
                        {props.guide && <Text style={{marginTop:10,color:'#9a9a9a'}}>{props.guide}</Text>}
                      </View>
                      <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',borderTopWidth:1,borderColor:'#e2e2e2'}}>
                          <TouchableHighlight
                              onPress={props.close}
                              underlayColor={'#f2f2f2'}
                              style={{flex:1,alignItems:'center',height:60,justifyContent:'center'}}
                          >
                              <Text style={{color:'#494949',fontSize:16,}}>동의안함</Text>
                          </TouchableHighlight>
                          <TouchableHighlight 
                              onPress={() => { props.close(); props.goTo(); }}
                              style={{flex:1,alignItems:'center',height:60,justifyContent:'center'}}
                              underlayColor={'#f2f2f2'}
                          >
                              <Text style={{color:'#01a1dd',fontSize:16,fontWeight:'bold'}}>동의함</Text>
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
