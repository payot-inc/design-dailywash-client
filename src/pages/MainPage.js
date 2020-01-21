import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity, StatusBar, Image, TouchableHighlight, Animated} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import { Divider, Button } from 'react-native-paper';
import faker from 'faker';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BaseStyles from '../assets/baseStyles';
import MainVisual from '../components/mainVisual';
import MainVisualSecond from '../components/mainVisualSecond';
import MainOrderState from '../components/mainOrderState';
import { Easing } from 'react-native-reanimated';

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

    const [Rotate] = useState(new Animated.Value(0));

    React.useEffect(()=>{
        Animated.timing(
        Rotate,
        {
            toValue:200,
            duration:50000,
            
        }
        ).start();
    },[Rotate])
  
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
                            <Icon name="menu" color={'#fff'} size={30}></Icon>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Image
                            source={require('../assets/logo.png')}
                            style={{width:140, resizeMode: 'contain'}}
                        >
                        </Image> 
                    </View>
                </View>

                <View style={styles.visual}>
                    <MainVisual />
        
                </View>

                <View style={{flex:1,paddingHorizontal:10,paddingBottom:20,justifyContent:'center',alignItems:'center'}}>

                    <TouchableHighlight
                        onPress={()=> props.navigation.navigate('order')}
                        style={{width:'100%',borderRadius:10,backgroundColor:'#292929'}}
                        underlayColor={'#393939'}
                    >  
                        <View style={{
                            width:'100%',
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                            height:54,
                            borderRadius:10,
                            overflow:'hidden'
                        }}>
                            <Icon name="truck-fast" size={24} color={'#fff'} />
                            <Text style={{letterSpacing:-0.7,fontSize:18,marginLeft:10,color:'#fff'}}>수거배달 신청하기</Text>
                        </View>
                    </TouchableHighlight>

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
                        <View style={{flex:1,padding:10}}>
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

const blue = '#0087FF';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    head:{
        position:'absolute', 
        top:0,
        left:0,
        height:70,
        width:'100%',
        zIndex:9,
        flexDirection:'row',
        alignItems:'center',
        //backgroundColor:'rgba(0,0,0,0.05)'
    },
    visual:{
        position:'relative',
        backgroundColor:'#03C1E8',
        height:300,
        marginBottom:150,
    },

    basicBorder:{
        borderWidth:1,
        borderColor:'#d2d2d2',
    }

})
