import React,{useState} from 'react';
import {View, Text, Modal} from 'react-native';
import {Appbar} from 'react-native-paper';



export default props => {
 return (
    <Modal 
      visible={props.visible}
      animationType="slide"
      onRequestClose={props.close}
    >
      <Appbar style={{backgroundColor:'#f2f2f2'}}>
        <Appbar.BackAction onPress={props.close}/>
        <Appbar.Content title="개인정보 취급방침"/>
      </Appbar>
      <View style={{padding:10,}}>
        <Text>개인정보 취급방침 내용</Text>
      </View>
    </Modal>
  )
}