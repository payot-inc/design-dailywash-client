import React,{useState} from 'react';
import {View, Text, Modal} from 'react-native';
import {ActivityIndicator} from 'react-native-paper'

export default () => {

  setTimeout(() => { setLoading(false) }, 1500);

  const [loading, setLoading] = useState(true); 

  return (
    <Modal 
      visible={loading}
      transparent={true}
    >
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#rgba(0,0,0,0.8)'}}>
        <ActivityIndicator animating={true} color={'#fff'}  size={34}/>
      </View>
    </Modal>
  )
}