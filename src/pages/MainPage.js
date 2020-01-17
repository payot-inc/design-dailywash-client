import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity, StatusBar, Image, TouchableHighlight } from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import { Divider } from 'react-native-paper';


import Icon from 'react-native-vector-icons/FontAwesome5';

import BaseStyles from '../assets/baseStyles';
import MainVisual from '../components/mainVisual';
import MainVisualSecond from '../components/mainVisualSecond';
import MainOrderState from '../components/mainOrderState';

export default props => {

    const cardData = [
        {
            name:'신한카드',
            number:'0811',
            date:'2019년 11월 21일'
        }, 
        {
            name:'삼성카드',
            number:'9392',
            date:'2019년 11월 29일'
        },    
    ]
    
  
    return (
        
        <View style={styles.container}>

            <StatusBar backgroundColor={'#292929'}/>
            
            <ScrollView>
                <View style={styles.head}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.dispatch(DrawerActions.openDrawer())
                        }}
                        activeOpacity={0.7}
                    >
                        <View style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}>
                            <Icon name="bars" color={'#fff'} size={20}></Icon>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Image
                            source={require('../assets/logo.png')}
                            style={{width:125, height:34,resizeMode: 'contain'}}
                        >
                        </Image> 
                    </View>
                </View>
                <View style={styles.visual}>
                    <MainVisual color={blue}/>
                </View>
                <View style={{paddingTop:20}}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {props.navigation.navigate('order')}}
                    >
                        <View style={
                        {
                            backgroundColor:'#fff',
                            height:80,
                            flexDirection:'row',
                            flex:1,
                            justifyContent:'space-between',

                        }}>
                            <View style={{flexBasis:80,justifyContent:'center',alignItems:'center'}}>
                                <Image
                                    source={require('../assets/orderIcon.png')}
                                    style={{height:50,resizeMode: 'contain'}}
                                >
                                </Image>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={{color:'#292929',fontSize:18,fontWeight:'bold',letterSpacing:-1}}>수거배달 신청하기</Text>
                                <Text style={{color:'#9a9a9a',marginTop:2}}>생활빨래에서부터 특수세탁까지</Text>
                            </View>
                            <View style={{flexBasis:40,alignItems:'center',justifyContent:'center'}}>
                                <Icon name={'angle-right'} color={'#292929'} size={24}></Icon>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <MainOrderState {...props} />

                <View style={{paddingHorizontal:10,paddingVertical:20}}>
                    <View style={[BaseStyles.shadowBox, {padding:30,backgroundColor:'#fff',alignItems:'center',borderRadius:10,marginBottom:20}]}>
                        <Text style={{fontSize:14,color:'#9a9a9a',marginBottom:10}}>등록된 수거배달 장소가 없습니다</Text>
                        <TouchableHighlight
                            underlayColor={'#f2f2f2'}
                            style={[styles.basicBorder,{height:40,lineHeight:40,paddingHorizontal:15,borderRadius:20,justifyContent:'center',alignItems:'center'}]}
                            onPress={()=> props.navigation.navigate('addressAdd')}
                        >
                            <Text>
                                장소등록하로 가기
                            </Text>
                        </TouchableHighlight>
                    </View>


                    <View style={[BaseStyles.shadowBox, {backgroundColor:'#fff',alignItems:'center',borderRadius:10,marginBottom:20,overflow:'hidden'}]}>
                        <MainVisualSecond />
                    </View>


                    <View style={[BaseStyles.shadowBox, {flex:1,backgroundColor:'#fff',borderRadius:10}]}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center',height:40,paddingHorizontal:10,}}>
                            <Text style={{fontSize:16}}>등록된 결제카드</Text>
                            <TouchableHighlight
                                onPress={()=> props.navigation.navigate('cardAdd')}
                                underlayColor={'#f2f2f2'}
                                style={{paddingHorizontal:5,height:20,borderRadius:3}}
                            >
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{marginRight:5}}>카드추가</Text>
                                    <Icon name={'plus-circle'}></Icon>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <Divider style={{height:1,backgroundColor:'#e2e2e2'}}/>
                        <View style={{flex:1,padding:10,}}>
                        {cardData.map((item) => (
                            <View style={{flexDirection:'row',marginVertical:5,alignItems:'center'}}>
                                <View>
                                    <View style={{borderRadius:5,width:90,height:55,justifyContent:'space-between',backgroundColor:'#1E89E8',padding:6,}}>
                                        <Text style={{fontSize:11,color:'#fff'}}>CARD</Text>
                                        <Text style={{textAlign:'right',color:'#fff'}}>{item.number}</Text>
                                    </View>
                                </View>
                                <View style={{paddingHorizontal:15,}}>
                                    <Text style={{fontSize:16}}>{item.name}</Text>
                                    <Text style={{fontSize:12,color:'#9a9a9a',marginTop:3,}}>등록일: {item.date}</Text>
                                </View>
                            </View>
                        ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
        
    );
  
}

const blue = '#21d1ff';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f6f8'
    },
    head:{
        position:'absolute', 
        top:0,
        left:0,
        height:60,
        width:'100%',
        zIndex:9,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.05)'
    },
    visual:{
        height:400,
        backgroundColor:'#000',
        borderBottomRightRadius:45,
        justifyContent:'center',
        alignItems:'center',
        zIndex:2,
        overflow:'hidden',
    },

    basicBorder:{
        borderWidth:1,
        borderColor:'#d2d2d2',
    }

})
