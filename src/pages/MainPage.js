import React,{useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar, Image, TouchableHighlight, TouchableOpacity, Dimensions, Animated, } from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainVisual from '../components/mainVisual';
import Carousel from 'react-native-snap-carousel';

export default props => {

    const guideData = [
        {
            text1:'데일리세탁',
            text2:'이용방법',
        },
        {
            text1:'예약 후',
            text2:'세탁물 맡기는 방법',           
        },
    ]


    const sliderWidth = Dimensions.get('window').width;
  
    // useEffect(()=> { 
    //     Animated.timing(headLine, {
    //         toValue:150,
    //         duration:1000,
    //     }).start()
    // }, []);

    const [headerLineVisible, setHeaderLineVisible] = useState(false);

    return (
        
        <View 
            style={styles.container}
        >

            <StatusBar backgroundColor={'#292929'}/>
            <View style={[styles.header]}>
                { headerLineVisible ? <View  style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', position:'absolute',bottom:0,left:0, zIndex:99 }} /> : null }
                <TouchableHighlight
                    onPress={() => {
                        props.navigation.dispatch(DrawerActions.openDrawer())
                    }}
                    underlayColor={'rgba(255,255,255,0.1)'}
                    style={{borderRadius:0,width:60,}}
                >
                    <View style={styles.drawerBtn}>
                        <Icon name="menu" color={'#494949'} size={30}></Icon>
                    </View>
                </TouchableHighlight>
                <View style={{flex:1,alignItems:'center'}}>
                    {/* <Text style={{fontSize:20,fontWeight:'bold',color:'#494949'}}></Text> */}
                    <Image source={require('../assets/img/logo.png')} style={{width:80,height:31,resizeMode:'stretch'}}/>
                </View>
                <TouchableHighlight
                    onPress={() => {props.navigation.navigate('history')}}
                    underlayColor={'rgba(255,255,255,0.1)'}
                    style={{borderRadius:0,width:60}}
                >
                    <View style={styles.drawerBtn}>
                        <View style={{width:5,height:5,position:'absolute',right:15,top:15,backgroundColor:'#D20A61',justifyContent:'center',alignItems:'center',borderRadius:2.5}}/>
                            <Icon name="bell-outline" color={'#494949'} size={30}></Icon>
                    </View>
                </TouchableHighlight>
            </View>

            <ScrollView
                onScroll={({ nativeEvent }) => {
                    if (nativeEvent.contentOffset.y > 0 && headerLineVisible !== true) {
                        setHeaderLineVisible(true);
                    } else {
                        setHeaderLineVisible(false);
                    }
                }}
            >
                <View style={styles.orderBtnWrap}>
                    <TouchableHighlight
                        onPress={()=>{props.navigation.navigate('order')}}
                        underlayColor={'#E4F2F8'}
                        style={{width:200,height:60,borderTopLeftRadius:30,borderBottomLeftRadius:30,backgroundColor:'#fff',zIndex:10}}
                    >
                        <View style={styles.orderStart}>
                            <View style={{
                                borderRadius:20,
                                width:40,height:40,
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor:'#01a1dd',
                                marginLeft:10,
                            }}>
                                <Icon name="arrow-right" color="#fff" size={20}></Icon>
                            </View>
                            <Text style={{fontSize:18,fontWeight:'bold',color:'#494949',marginLeft:10}}>세탁 예약하기</Text>
                            
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.mainVisual}>
                    <View style={styles.mainVisualInner}>
                        <MainVisual></MainVisual>
                    </View>
                </View>

                
                <View style={styles.inner}>
                    <View style={styles.stateMessage}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{alignItems:'center',borderRightWidth:1,borderColor:'#e2e2e2',paddingRight:15,}}>                                
                                <Text style={{color:'#292929',fontSize:22,fontWeight:'bold'}}>05.19</Text>
                                <Text style={{fontSize:14,color:'#888'}}>알림</Text>
                            </View>
                            <Text style={{fontSize:16,flex:1,marginLeft:15,}}>최근 주문건은 현재 <Text style={styles.textPoint}>배송중</Text>입니다</Text>
                        </View>
                    </View>

                    <View style={styles.quickBtns}>
                        <View style={[styles.quickBtnWrap,{marginRight:5}]}>
                            
                            <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                                <Icon name="calendar-text-outline" size={32} color={'#d2d2d2'}></Icon>
                                <View style={{flex:1,marginLeft:10,alignItems:'flex-end'}}>
                                    <View style={styles.designBar} />
                                    <Text style={{fontSize:16}}>주문내역</Text>
                                    <Text style={{color:'#D20A61',fontSize:20,fontWeight:'bold',marginTop:5,}}>0건</Text>
                                </View>
                            </View>
                            
                            <View style={{alignItems:'center',marginTop:30,}}>
                                <TouchableHighlight 
                                    style={[styles.quickBtn, {borderColor:'#494949'}]} 
                                    onPress={()=>{props.navigation.navigate('myOrder')}}
                                    underlayColor={'#f2f2f2'}
                                >
                                    <View style={styles.quickBtnInner}>
                                        <Text style={{color:'#494949'}}>바로가기</Text>
                                        <Icon name="chevron-right" size={18} color={'#494949'}></Icon>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>

                        <View style={[styles.quickBtnWrap,{marginLeft:5}]}>
                            <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                                <Icon name="alpha-c-circle-outline" size={32} color={'#d2d2d2'}></Icon>
                                <View style={{flex:1,marginLeft:10,alignItems:'flex-end'}}>
                                    <View style={styles.designBar} />
                                    <Text style={{fontSize:16}}>나의쿠폰</Text>
                                    <Text style={{color:'#D20A61',fontSize:20,fontWeight:'bold',marginTop:5,}}>0개</Text>
                                </View>
                            </View>
                           
                            <View style={{alignItems:'center',marginTop:30}}>
                                <TouchableHighlight
                                    style={[styles.quickBtn, {borderColor:'#494949'}]}
                                    onPress={()=>{props.navigation.navigate('coupon')}}
                                    underlayColor={'#f2f2f2'}
                                >
                                    <View style={styles.quickBtnInner}>
                                        <Text style={{color:'#494949'}}>쿠폰확인</Text>
                                        <Icon name="chevron-right" size={18} color={'#494949'}></Icon>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.notice]}>
                        <View style={styles.noticeTitle}>
                            <Text style={styles.noticeTitleText}>공지사항</Text>
                        </View>
                        <View style={styles.noticeList}>
                            <View style={styles.noticeItem}>
                                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                    <Icon name="alpha-n-box" size={20} color={'#D20A61'} style={{marginRight:5,}}></Icon>
                                    <Text style={styles.noticeItemText}>서버점검 안내</Text>
                                </View>
                                <Text style={styles.noticeItemDate}>
                                    20.05.19
                                </Text>
                            </View>
                            <View style={styles.noticeItem}>
                                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                    <Icon name="alpha-n-box" size={20} color={'#D20A61'} style={{marginRight:5,}}></Icon>
                                    <Text style={styles.noticeItemText}>서버점검 안내</Text>
                                </View>
                                <Text style={styles.noticeItemDate}>
                                    20.05.19
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={{paddingVertical:20}}>
                    <View style={{paddingHorizontal:20,}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>데일리세탁 가이드</Text>
                        <Text style={{fontSize:12,color:'#888',marginTop:3}}>간편한 세탁예약시스템 직접 사용해보세요</Text>
                    </View>
                    
                    <View style={{marginVertical:20}}>
                        <Carousel
                            layout={'default'}
                            layoutCardOffset={0}
                            data={guideData}
                            itemWidth={240}
                            sliderWidth={sliderWidth}
                            inactiveSlideScale={1}
                            activeSlideAlignment={'start'}
                            loop={true}
                            zIndex={1}
                            autoplayDelay={5000}
                            autoplayInterval={5000}
                            autoplay={true}
                            renderItem={({item, index})=>
                                <TouchableOpacity 
                                    style={{height:120,backgroundColor:'#fff',marginLeft:20,borderRadius:5,alignItems:'flex-start',justifyContent:'flex-start',overflow:'hidden',borderWidth:2,borderColor:'#01a1dd'}}
                                    onPress={()=>props.navigation.navigate('guide')}
                                >
                                    <View style={{padding:20,}}>
                                        <View style={{width:10,height:3,borderRadius:1.5,backgroundColor:'#01a1dd'}}></View>
                                        <Text style={{color:'#01a1dd',fontSize:18,fontWeight:'bold',zIndex:2,marginTop:10}}>{item.text1}</Text>
                                        <Text style={{color:'#494949',fontSize:18,fontWeight:'bold',zIndex:2}}>{item.text2}</Text>
                                    </View>

                                </TouchableOpacity>
                            }

                        />

                    </View>

                    <View style={[styles.inner,{backgroundColor:'#fff',marginTop:20,}]}>
                        <TouchableOpacity 
                            onPress={()=>{}}
                            style={{borderRadius:5,flexDirection:'row',backgroundColor:'#F9E000',justifyContent:'center',alignItems:'center',height:50,}}
                        >
                    
                            <Icon name={'chat-processing'} color={'#3B1C1C'} size={24} />
                            <Text style={{marginLeft:5,}}>그래도 궁금증이 해결이 안되셨나요?</Text>
                    
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            
        </View>
        
    );
  
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    mainVisual:{
        height:500,
        backgroundColor:'#01a1dd',
        borderWidth:0,
    },
    mainVisualInner:{
        backgroundColor:'#fff',
        height:450,
        overflow:'visible',
        zIndex:1,
        elevation:5,
    },

    header:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:60,
        position:'relative'
    },

    drawerBtn:{
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        zIndex:10
    },

    orderBtnWrap:{
        position:'absolute',
        right:0,
        top:420,
        height:50,
        zIndex:1,
    },

    orderStart:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        fontFamily:'SCDream',
        width:200,
        height:60,
        borderRadius:0,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        borderWidth:2,
        borderColor:'#01a1dd',
        backgroundColor:'#fff',
        borderRightWidth:0,
        elevation:10,
    },

    inner:{
        paddingHorizontal:20,
        paddingBottom:30,
        backgroundColor:'#01a1dd'
    },

    designBar:{
        width:30,
        height:4,
        borderRadius:2,
        backgroundColor:'#e2e2e2',
        marginBottom:10,
    },
    
    stateMessage:{
        backgroundColor:'#fff',
        padding:20,
        borderRadius:5,
        elevation:10,
    },

    textPoint:{
        color:'#D20A61'
    },

    quickBtns:{
        flexDirection:'row',
        marginTop:10,
    },

    quickBtnWrap:{
        flex:1,
        padding:20,
        backgroundColor:'#fff',
        borderRadius:5,
        elevation:10,
    },

    quickBtn:{
        width:100,
        borderRadius:15,
        paddingHorizontal:15,
        backgroundColor:'#f2f2f2',
        
    },

    quickBtnInner:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:30,
    },

    notice:{
        marginTop:10,
        backgroundColor:'#fff',
        borderRadius:5,
        padding:20,
        elevation:10,
    },

    noticeTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    noticeTitleText:{
        fontSize:16,
        color:'#292929',
        fontWeight:'bold'
    },
    noticeList:{
        marginTop:10,
    },
    noticeItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:30,
    },

    noticeItemTitle:{
        fontSize:14,
        flex:1,
        color:'#292929'
    },
    noticeItemDate:{
        fontSize:14,
        color:'#888',
        marginTop:5,
        width:80,
        textAlign:'right'
    }
    
 
})
