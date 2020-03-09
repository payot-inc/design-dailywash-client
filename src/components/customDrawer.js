import React, {Component} from 'react';
import {View, Text, BackHandler, Image} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import { TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import faker from 'faker/locale/ko';


const CustomDrawer = props => {
    return(
        <View> 
            <View style={{backgroundColor:'#FFCC00',flexDirection:'row',alignItems:'center',height:120}}>
                <View style={{width:120,alignItems:'center'}}>
                    <Image source={{uri:faker.image.avatar()}} style={{width:70,height:70,borderRadius:35}}/>
                </View>
                <View style={{flex:1,}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>차경진</Text>
                    <Text style={{fontSize:12}}>카카오톡 연동 중</Text>
                </View>
            </View>

            <View>
                <DrawerItems {...props}
                    style={{backgroundColor:'#fff'}}
                />
            </View>
        </View>
    );
}

export default CustomDrawer;