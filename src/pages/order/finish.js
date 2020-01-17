import React from 'react';
import {View,Text} from 'react-native';
import {Divider, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props =>{
  return(
    <View style={{flex:1,backgroundColor:'#03C1E8'}}>
      <View style={{marginTop:50,flex:1,backgroundColor:'#fff',borderTopRightRadius:30,padding:10,justifyContent:'center',alignItems:'center'}}>
        <View>
          <View style={{width:150,height:150,borderWidth:5,borderColor:'#03C1E8',borderRadius:75}}>
            <View style={{position:'absolute',top:-20,right:-20,}}>
              <Icon name="check-circle" size={60} color={'#03C1E8'}/>
            </View>
          </View>
        </View>
        <Divider style={{height:8,width:50,borderRadius:4,backgroundColor:'#e2e2e2',marginVertical:40,}}/>
        <View> 
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:26,letterSpacing:-0.7,lineHeight:36,}}><Text style={{color:'#03C1E8',fontWeight:'bold'}}>수거예약 및 결제</Text>가</Text>
            <Text style={{fontSize:26,letterSpacing:-0.7,lineHeight:36,}}>정상적으로 완료되었습니다</Text>
          </View>
          <View style={{alignItems:'center',marginTop:20,}}>
            <Text style={{color:'#9a9a9a'}}>해당 상품의 주문, 배송정보는 <Text style={{color:'#292929'}}>이용내역</Text>에서</Text>
            <Text style={{color:'#9a9a9a',marginTop:3,}}>다시 확인 할 수 있습니다</Text>
          </View>
        </View>

        <View style={{marginTop:50}}>
          <Button
            mode="contained"
            contentStyle={{height:50, backgroundColor:'#292929',paddingHorizontal:20}}
            style={{borderRadius:25,}}
            labelStyle={{color:'#fff'}}
            onPress={()=> props.navigation.navigate('main')}
          >메인으로 돌아가기</Button>
        </View>
      </View>
    </View>
  )
}