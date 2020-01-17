import React,{useState} from 'react';
import {View, Text, Modal, FlatList, Alert, TouchableHighlight} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default props => {

  return (
    <Modal 
      animationType="slide"
      visible={props.open}
      transparent={false}
      style={{flex:1,justifyContent:'space-between'}}
      onRequestClose={props.close}
      
    >
      <Appbar style={{backgroundColor:'#03C1E8'}}>
        <Appbar.BackAction color="#fff" onPress={props.close}/>
        <Appbar.Content title="장바구니" color="#fff"/>
        <Appbar.Action 
          icon="delete-outline"
          color="#fff"
          onPress={()=>(Alert.alert('전체삭제','장바구니에 있는 모든 상품을 삭제합니다',[
            {text:'네'},
            {text:'아니오'}
          ]))}
        />
      </Appbar>
      
      <View style={{flex:1,padding:10,}}>
        
        <FlatList
          data={props.data}
          keyExtractor={item => item.index}
          ListHeaderComponent={()=>
            <View style={{marginBottom:10}}>
              <Text>상품 2</Text>
            </View>
          }
          renderItem={({item})=> 
            <View style={{borderWidth:1,borderColor:'#e2e2e2',borderRadius:5,padding:10,marginBottom:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                <View>
                  <Text>{item.goodsName}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={{color:'#8a8a8a'}}>{item.defaultPrice}</Text>
                  <Text style={{marginHorizontal:10,color:'#c2c2c2'}}>X</Text>
                  <Text style={{color:'#03C1E8',fontWeight:'bold'}}>{item.amount}개</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>13,400원</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <TouchableHighlight style={{width:36,height:36,borderRadius:18,borderWidth:1,borderColor:'#d2d2d2',justifyContent:'center',alignItems:'center',marginLeft:5}}
                    underlayColor={'#f2f2f2'}
                  >
                    <Icon name="minus" size={18}/>
                  </TouchableHighlight>
                  <TouchableHighlight style={{width:36,height:36,borderRadius:18,borderWidth:1,borderColor:'#d2d2d2',justifyContent:'center',alignItems:'center',marginLeft:5}}
                    underlayColor={'#f2f2f2'}
                  >
                    <Icon name="plus" size={18}/>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={{width:36,height:36,borderRadius:18,borderWidth:1,borderColor:'#d2d2d2',justifyContent:'center',alignItems:'center',marginLeft:5}}
                  >
                    <Icon name="delete-outline" size={18}/>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          }
        />
      </View>
      <View style={{height:120,padding:10}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',height:50}}>
          <Text style={{color:'#9a9a9a'}}>장바구니 합계</Text>
          <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
            <Text style={{color:'#d22828',fontWeight:'bold',fontSize:18}}>42,200</Text>
            <Text>원</Text>
          </View>
          
        </View>
        <Button
          mode="contained"
          contentStyle={{backgroundColor:'#292929', height:50,}}
          labelStyle={{color:'#fff'}}
          style={{borderRadius:5}}
          onPress={()=> props.navigation.navigate('payment'), props.close}
        >주문하기</Button>
      </View>
    </Modal>
 
)}