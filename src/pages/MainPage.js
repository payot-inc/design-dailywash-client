import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity, StatusBar, Image, TouchableHighlight,} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import faker from 'faker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Thema from '../assets/css/thema';
import MainVisual from '../components/mainVisual';
import MainVisualSecond from '../components/mainVisualSecond';


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
    ];


    return (
        
        <View style={styles.container}>

            <StatusBar backgroundColor={'#292929'}/>
            
            <ScrollView>

                <View style={{height:70,width:'100%',zIndex:9,flexDirection:'row',alignItems:'center',backgroundColor:'#396eee'}}>
                    <TouchableHighlight
                        onPress={() => {
                            props.navigation.dispatch(DrawerActions.openDrawer())
                        }}
                        underlayColor={'rgba(255,255,255,0.1)'}
                        style={{borderRadius:30}}
                    >
                        <View style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}>
                            <Icon name="menu" color={'#fff'} size={30}></Icon>
                        </View>
                    </TouchableHighlight>
                    <View>
                        <Image
                            source={require('../assets/img/logo.png')}
                            style={{width:140, resizeMode: 'contain'}}
                        />
                    </View>
                </View>
                

                <MainVisual />
 

                <View style={styles.visualBackground}>
                    {/* <Image source={require('../assets/img/wave_pattern.png')} resizeMode="repeat" style={{height:'100%',opacity:0.2}}/> */}
                </View>

                <View style={{paddingHorizontal:25,paddingBottom:30}}>

                    <View style={{flex:1,flexDirection:'row'}}>
            
                        <TouchableHighlight
                            onPress={()=> props.navigation.navigate('myOrder')}
                            style={{marginVertical:30,marginRight:5,backgroundColor:'#396EEE',borderRadius:10,padding:15,width:120,height:120, }}
                            underlayColor={'#3464D6'}
                        >  
                            <View style={{flex:1,justifyContent:'space-between',}}>
                                <View>
                                    <Text style={{letterSpacing:-0.7,fontSize:16,color:'#fff'}}>세탁내역</Text>
                                    <Text style={{letterSpacing:-0.7,fontSize:16,color:'#fff'}}>조회하기</Text>
                                </View>
                                <View style={{alignItems:'flex-end'}}>
                                    <Icon name="arrow-right" color="#fff" size={20}></Icon>
                                </View>
                            </View>
                        </TouchableHighlight>
            
                        <TouchableHighlight
                            onPress={()=> props.navigation.navigate('order')}
                            style={{flex:1,marginVertical:30,marginLeft:5,backgroundColor:'#111F44',borderRadius:10,padding:15,height:120}}
                            underlayColor={'#0D1834'}
                        >  
                            <View style={{flex:1,justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{letterSpacing:-0.7,fontSize:16,color:'#fff'}}>세탁 수거/배달</Text>
                                    <Text style={{letterSpacing:-0.7,fontSize:16,color:'#fff'}}>예약하기</Text>
                                </View>
                                <View style={{alignItems:'flex-end'}}>
                                    <Icon name="arrow-right" color="#fff" size={20}></Icon>
                                </View>
                            </View>
                        </TouchableHighlight>
   
                    </View>

                    

                    <View style={{flex:1,flexDirection:'row',backgroundColor:'#fff',padding:15,borderRadius:10,marginBottom:30,elevation:10}}>
                        <View style={{alignItems:'center',width:34,}}>
                            <Icon name="map-marker" style={{backgroundColor:'#396eee',width:34,height:34,borderRadius:17,textAlign:'center',lineHeight:34}} size={26} color={'#fff'}/>
                            <Text style={{fontSize:12,marginTop:5,color:'#396eee'}}>대표</Text>
                        </View>
                        <View style={{flex:1,paddingLeft:20}}>
                            <Text style={{fontSize:18,color:'#396eee',fontWeight:'bold'}}>우리집</Text>
                            <Text style={{marginTop:5,color:'#8a8a8a',lineHeight:19}}>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</Text>
                            <View style={{alignItems:'flex-end'}}>
                                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
                                    <Text style={{fontSize:12,color:'#396eee'}}>추가/변경하기</Text>
                                    <Icon name="chevron-right" color={'#396eee'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{borderWidth:0,borderColor:'#e2e2e2',borderRadius:10,backgroundColor:'#fff',elevation:10}}>
                        <View style={{justifyContent:'center',height:40,paddingHorizontal:15,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>우리동네 기사님</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row',padding:15}}>
                            <Image source={{uri:faker.image.avatar()}} style={{width:80,height:80,borderRadius:40}}/>
                            <View style={{flex:1,paddingLeft:20}}>
                                <Text style={{fontSize:18,fontWeight:'bold'}}>홍길동 기사님</Text>
                                <Text style={{marginTop:5,color:'#8a8a8a',fontSize:13}}>오늘도 열심히 달립니다</Text>
            
                                <Text style={{marginTop:10,fontSize:12}}>이번달 휴무 공지</Text>
                                <View style={{flexDirection:'row',marginTop:5,flex:1,}}>
                                    <Text style={{fontSize:12,color:'#d22828'}}>7일, 8일, 15일, 16일, 25일, 30일</Text>
                                   
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:50}}>
                        <TouchableHighlight
                            onPress={()=>{props.navigation.navigate('card')}}
                            underlayColor={'#fff'}
                            style={{flex:1}}
                        >
                            <View style={{alignItems:'center',flex:1}}>
                                <Icon name="credit-card-multiple" color={'#396eee'} size={32} style={{width:60,height:60,borderRadius:25,lineHeight:60,textAlign:'center',backgroundColor:'#f2f2f2'}}></Icon>
                                <Text style={{marginTop:10,fontSize:13}}>카드관리</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={()=>{props.navigation.navigate('coupon')}}
                            underlayColor={'#fff'}
                            style={{flex:1}}
                        >
                            <View style={{alignItems:'center',flex:1,borderRightWidth:1,borderLeftWidth:1,borderColor:'#e2e2e2'}}>
                                <Icon name="ticket-outline" color={'#396eee'} size={32} style={{width:60,height:60,borderRadius:25,lineHeight:60,textAlign:'center',backgroundColor:'#f2f2f2'}}></Icon>
                                <Text style={{marginTop:10,fontSize:13}}>나의 쿠폰</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={()=>{props.navigation.navigate('myOrder')}}
                            underlayColor={'#fff'}
                            style={{flex:1}}
                        >
                            <View style={{alignItems:'center',flex:1,}}>
                                <Icon name="file-document-box-outline" color={'#396eee'} size={32} style={{width:60,height:60,borderRadius:25,lineHeight:60,textAlign:'center',backgroundColor:'#f2f2f2'}}></Icon>
                                <Text style={{marginTop:10,fontSize:13}}>이용내역</Text>
                            </View>
                        </TouchableHighlight>
                    </View>


                    {/* <View style={{borderRadius:10,marginBottom:30,overflow:'hidden',elevation:10,backgroundColor:'#fff'}}>
                        <MainVisualSecond />
                    </View> */}

                    <View style={{flex:1,backgroundColor:'#fff',borderRadius:10,elevation:10,overflow:'hidden'}}>
                        <View style={{justifyContent:'space-between',height:40,paddingLeft:15,borderBottomWidth:1,borderColor:'#e2e2e2',flexDirection:'row',alignItems:'center',}}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>공지사항</Text>
                            <TouchableHighlight
                                onPress={()=> props.navigation.navigate('notice')}
                                style={{height:40,width:40,justifyContent:'center',alignItems:'center'}}
                                underlayColor={'#f2f2f2'}
                            >
                                <Icon name={'plus'} size={18} />
                            </TouchableHighlight>
                        </View>
                        <View style={{padding:15}}>
                            <TouchableHighlight
                                onPress={()=> {}}
                                underlayColor={'#f2f2f2'}
                                style={{marginBottom:5}}
                            >
                                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <Text>데일리세탁 오픈!</Text>
                                    <Text>03.24</Text>
                                </View>
                            </TouchableHighlight>
                            
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
    visualBackground:{
        position:'absolute',
        top:0,
        width:'100%',
        backgroundColor:'#396eee',
        height:240,
        marginBottom:150,
        zIndex:1,
        overflow:'hidden'
    },

    basicBorder:{
        borderWidth:1,
        borderColor:'#d2d2d2',
    }

})
