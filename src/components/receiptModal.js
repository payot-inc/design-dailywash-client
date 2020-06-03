import React,{useState} from 'react';
import {View, Text, Modal,TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props => {

  const data = [
    {
      itemName:'생활빨래',
      amount:1,
      price:19800,
    },
    {
      itemName:'와이셔츠',
      amount:3,
      price:4500,
    },
    {
      itemName:'정장바지',
      amount:1,
      price:3900,
    },
    {
      itemName:'니트',
      amount:3,
      price:4900,
    },
    {
      itemName:'블라우스',
      amount:3,
      price:7800,
    },
  ]

 return (
    <Modal 
      visible={props.visible}
      animationType="fade"
      onRequestClose={props.close}
      transparent={true}
    >
      <View style={{padding:20,flex:1,justifyContent:'center'}}>
        <View style={{backgroundColor:'#fff',elevation:10,borderRadius:10,position:'relative',paddingVertical:20,zIndex:2,maxHeight:'100%'}}>
          <View style={{paddingHorizontal:20,}}>
            <TouchableOpacity
              onPress={props.close}
              style={{position:'absolute',right:20,top:0,width:30,height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#f2f2f2',zIndex:99,borderRadius:5}}
            >
              <Icon name="close" size={30} color={'#d2d2d2'}></Icon>
            </TouchableOpacity>

            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image source={require('../assets/img/logo_v_blue.png')} style={{resizeMode:'contain',height:100}}/>
              <Text style={{marginTop:10,fontSize:12,color:'#888',textAlign:'center'}}>데일리세탁 부산 금정구</Text>
            </View>

            <View style={{flexDirection:'row',borderTopWidth:1,borderBottomWidth:1,paddingVertical:10,marginVertical:20,borderColor:'#e2e2e2'}}>
              <View style={{flex:1,justifyContent:'space-between',borderRightWidth:1,paddingRight:10,borderColor:'#e2e2e2'}}>
                <Text style={{fontSize:11,color:'#888'}}>RECEIPT NO:</Text>
                <Text style={{textAlign:'right',marginTop:5,fontSize:13,}}> 0809</Text>
              </View>
              <View style={{flex:1,justifyContent:'space-between',marginHorizontal:10}}>
                <Text style={{fontSize:11,color:'#888'}}>DATE:</Text>
                <Text style={{textAlign:'right',marginTop:5,fontSize:13,}}>12/06/2020</Text>
              </View>
              <View style={{flex:1,justifyContent:'space-between',borderLeftWidth:1,paddingLeft:10,borderColor:'#e2e2e2'}}>
                <Text style={{fontSize:11,color:'#888'}}>STAFF:</Text>
                <Text style={{textAlign:'right',marginTop:5,fontSize:13,}}>김지민</Text>
              </View>
            </View>
          </View>

          <FlatList 
            data={data}
            contentContainerStyle={{
              paddingHorizontal:20,
            }}
            renderItem={({item}) => (
              <View style={{flexDirection:'row',marginBottom:10}}>
                <Text style={{flex:1,}}>{item.itemName}</Text>
                <Text style={{width:30,textAlign:'center'}}>{item.amount}</Text>
                <Text style={{width:80,textAlign:'right'}}>{item.price}</Text>
              </View>
            )}
            keyExtractor={ (index) => {index}}
          />

          <View style={{paddingHorizontal:20,}}>
            <View style={{marginBottom:10,borderTopWidth:1,borderColor:'#e2e2e2',marginTop:20,paddingTop:15,}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{flex:1,}}>주문금액</Text>
                <Text style={{flexBasis:80,textAlign:'right',fontWeight:'bold'}}>21,800</Text>
              </View>
            </View> 

            <Text style={{textAlign:'center',fontSize:11,color:'#ccc',marginTop:20,}}>THANK YOU</Text>

          </View>
        </View>
      </View>

      <View style={{position:'absolute',top:0,left:0,backgroundColor:'#000',zIndex:1,width:'100%',height:'100%',opacity:0.7}}/>
      
    </Modal>
  )
}