import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class UserOption extends React.Component{
    render(){
        return(
            <>
                <View style={{flexDirection:'row',alignItems:'center',height:60,backgroundColor:'#292929',borderBottomRightRadius:45}}>
                    <TouchableOpacity 
                        style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}
                    >
                        <Icon name={'arrow-left'} color={'#fff'} size={18}></Icon>
                    </TouchableOpacity>
                    <Text style={{color:'#fff',fontSize:18}}>설정</Text>
                </View>
            </>
        );
    }
}