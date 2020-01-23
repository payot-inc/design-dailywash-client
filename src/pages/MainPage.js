import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity, StatusBar, Image, TouchableHighlight, Animated} from 'react-native';
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
                            source={require('../assets/img/logo.png')}
                            style={{width:140, resizeMode: 'contain'}}
                        >
                        </Image> 
                    </View>
                </View>

                <MainVisual />

                <View style={styles.visualBackground}>
                    {/* <Image source={require('../assets/img/wave_pattern.png')} resizeMode="repeat" style={{height:'100%',opacity:0.2}}/> */}
                </View>

                <View style={{paddingHorizontal:25,paddingBottom:30}}>

                    <TouchableHighlight
                        onPress={()=> props.navigation.navigate('order')}
                        style={{width:'100%',borderRadius:10,backgroundColor:'#172959',marginTop:30,marginBottom:30,elevation:10}}
                        underlayColor={'#111F44'}
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
                            <Text style={{letterSpacing:-0.7,fontSize:18,marginLeft:10,color:'#fff',fontWeight:'bold'}}>세탁하기</Text>
                        </View>
                    </TouchableHighlight>

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
                        <View style={{alignItems:'center',flex:1}}>
                            <Icon name="credit-card-multiple" size={32} style={{width:60,height:60,borderRadius:25,lineHeight:60,textAlign:'center',backgroundColor:'#f2f2f2'}}></Icon>
                            <Text style={{marginTop:10,fontSize:13}}>카드관리</Text>
                        </View>
                            <View style={{alignItems:'center',flex:1,borderRightWidth:1,borderLeftWidth:1,borderColor:'#e2e2e2'}}>
                            <Icon name="ticket-outline" size={32} style={{width:60,height:60,borderRadius:25,lineHeight:60,textAlign:'center',backgroundColor:'#f2f2f2'}}></Icon>
                            <Text style={{marginTop:10,fontSize:13}}>나의 쿠폰</Text>
                        </View>
                        <View style={{alignItems:'center',flex:1,}}>
                            <Icon name="file-document-box-outline" size={32} style={{width:60,height:60,borderRadius:25,lineHeight:60,textAlign:'center',backgroundColor:'#f2f2f2'}}></Icon>
                            <Text style={{marginTop:10,fontSize:13}}>이용내역</Text>
                        </View>

                    </View>


                    <View style={{borderRadius:10,marginBottom:30,overflow:'hidden',elevation:10}}>
                        <MainVisualSecond />
                    </View>

                    <View style={{flex:1,backgroundColor:'#fff',borderRadius:10,elevation:10}}>
                        <View style={{justifyContent:'center',height:40,paddingHorizontal:15,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>공지사항</Text>
                        </View>
                        <View style={{padding:15}}>
                            <TouchableHighlight
                                onPress={()=>{}}
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
    head:{
        height:70,
        width:'100%',
        zIndex:9,
        flexDirection:'row',
        alignItems:'center',
        //backgroundColor:'rgba(0,0,0,0.05)'
    },
    visualBackground:{
        position:'absolute',
        top:0,
        width:'100%',
        backgroundColor:'#396eee',
        height:360,
        marginBottom:150,
        zIndex:1,
        overflow:'hidden'
    },

    basicBorder:{
        borderWidth:1,
        borderColor:'#d2d2d2',
    }

})
