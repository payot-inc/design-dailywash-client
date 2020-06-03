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
          <View style={{zIndex:2,padding:30,}}>
            <View style={{backgroundColor:'#fff',borderRadius:0,overflow:'hidden',elevation:10,borderRadius:10}}>
              <View style={{padding:20,}}>
                <Text style={{fontSize:18,textAlign:'left'}}>{props.title}</Text>
                <View style={{justifyContent:'center',alignItems:'center',paddingVertical:20,}}>                   
                  <Image
                      style={{width:screenWidth ,height:180}}
                      source={props.img}
                      resizeMode={'contain'}
                  />  
                </View>
 
                <Text style={{marginTop:10,color:'#494949',textAlign:'left',lineHeight:21,}}>{props.description}</Text>
                {props.guide && <Text style={{marginTop:10,color:'#9a9a9a'}}>{props.guide}</Text>}
              

                <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:20,}}>

                </View>
                <View>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:5,}}>
                    <Text style={{color:'#888',fontSize:12}}>수거날짜</Text>
                    <Text style={{fontSize:12}}>30일(수요일)</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:5,}}>
                    <Text style={{color:'#888',fontSize:12}}>수거시간</Text>
                    <Text style={{fontSize:12}}>오전 08:00 ~ 11:00</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{color:'#888',fontSize:12}}>수거방식</Text>
                    <Text style={{fontSize:12}}>비대면수거</Text>
                  </View>
                </View>
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
