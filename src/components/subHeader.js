import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props => {   

    return(
        <View style={{backgroundColor:'#292929',flexDirection:'row',height:65}}>
            <TouchableOpacity
                onPress={()=> props.navigation.goBack(null)}   
            >   
                <View style={{width:60,height:65,justifyContent:'center',alignItems:'center'}}>
                    <Icon name={'arrow-left'} color={'#fff'} size={24}></Icon>
                </View>
            </TouchableOpacity>
            <Text style={{color:'#fff',lineHeight:65,height:65,fontSize:18}}>
                {props.title}
            </Text>
        </View>
    )
    
}