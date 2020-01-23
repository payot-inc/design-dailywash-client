import React,{useState} from 'react';
import {View, Text, ScrollView, Image, TouchableHighlight, Linking, Modal, StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Timeline from 'react-native-timeline-flatlist';
import Icon from 'react-native-vector-icons/FontAwesome5';
import faker from 'faker';

export default props => {

    const state = {
        seletedIndex: 0,
        goodsItem:[
            {name:'생활빨래 80리터', amount:1,  price:15000},
            {name:'패딩점퍼', amount:1,  price:7000},
            {name:'와이셔츠', amount:3,  price:9000},
        ]
    }

    const orderTimeLine = [
        {date:'2019-11-23' ,time:'09:45', title:'수거예약완료', description: '예약이 완료되었습니다'},
        {time:'11:16', title:'세탁물 수거완료', description: '기사님께서 세탁물을 수거하였습니다', image:faker.image.abstract(),},
        {date:'24일', time:'16:00', title:'세탁완료&배송시작', description: '배송을 시작합니다'},
        {time:'17:56', title:'배송완료', description: '배송이 완료되었습니다', image:faker.image.abstract(),},
    ]


    const data = props.navigation.getParam('item', {});

    const screen = {
        width:Dimensions.get('window').width,
    }

    const [modalVisible, setModalVisible] = useState(false)

    const modalHandle = {
        modalOpen: () => setModalVisible(true),
        modalClose: () => setModalVisible(false)
    }

    return(
        
        <View style={{flex:1,backgroundColor:'#F5F6F8',paddingTop:10,}}>
            <View style={{flex:1,backgroundColor:'#fff',borderTopEndRadius:45,elevation:15,overflow:'hidden'}}>

                <ScrollView 
                    contentContainerStyle={{paddingHorizontal:25,paddingVertical:30,}}
                    alwaysBounceHorizontal={false}
                    alwaysBounceVertical={true}
                >
                    <View style={{marginBottom:30,}}>
                        <Text style={{marginBottom:10,fontSize:16}}>주문현황</Text>
                        <View style={{flexDirection:'row',borderWidth:1,borderColor:'#e2e2e2',borderRadius:10,overflow:'hidden',position:'relative',padding:10,alignItems:'center'}}>
                            <View style={{flexBasis:90,justifyContent:'flex-start',alignItems:'center'}}>
                                <Image 
                                    style={{width:90,height:90,borderRadius:45,zIndex:3}}
                                    source={{uri:faker.image.avatar()}}
                                />
                            </View>
                            <View style={{flex:1,zIndex:2}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <View style={{paddingHorizontal:20}}>
                                        <Text style={{color:'#292929',fontSize:18,fontWeight:'bold'}}>박수민</Text>
                                        <Text style={{color:'#898989',fontSize:12,}}>(헌옷장수)</Text>
                                        <Text style={{color:'#9a9a9a',marginTop:10}}>휴무일: 매주 수요일입니다</Text>
                                    </View>
                                    <View style={{position:'absolute',right:0,top:-10}}>
                                        <TouchableHighlight
                                            onPress={() => Linking.openURL('tel://01083102486')}
                                            style={{height:34,width:34,justifyContent:'center',alignItems:'center',borderRadius:17,backgroundColor:'#0DC244'}}
                                        >
                                            <Icon name={'phone'} size={18} color={'#fff'} style={{transform: [{ rotate: '90deg' }]}}></Icon>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                             </View>
                        </View>
                    </View>

  
                    <Timeline
                        data={orderTimeLine}
                        lineWidth={1}
                        lineColor={'#396eee'}
                        circleColor={'#396eee'}
                        circleSize={12}
                        renderTime={ item => 
                            <View style={{width:60}}>
                            {item.date ? <Text style={styles.date}>{item.date}</Text> : null}
                            <Text style={styles.time}>{item.time}</Text>
                            </View>
                        }
                        detailContainerStyle={{
                            backgroundColor:'#fff',
                            borderRadius:5,
                            marginBottom:10,
                            paddingHorizontal:10,
                            backgroundColor:'#f8f8f8'
                        }}
                        renderDetail={ item =>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                            {item.image ?
                                <TouchableOpacity
                                    onPress={modalHandle.modalOpen}
                                >
                                    <Image source={{uri: item.image}} style={styles.image}/> 
                                </TouchableOpacity>

                                : null
                            }
                                <View>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.description}>{item.description}</Text>
                                </View>
                            </View> 
                        }
                    />

                    <Divider style={{height:1,backgroundColor:'#e2e2e2',marginVertical:30,}}/>

                    <View>
                        <View style={{flex:1,}}>
                            <View>
                                <Text style={{marginBottom:15,color:'#9a9a9a'}}>수거/배달 장소</Text>
                                <View style={{backgroundColor:'#f8f8f8',padding:10,borderRadius:5}}>
                                    <Text style={{marginBottom:5,}}>우리집</Text>
                                    <Text style={{fontSize:13,color:'#9a9a9a'}}>부산광역시 금정구 부산대학로 63번길 2</Text>
                                    <Text style={{fontSize:13,color:'#9a9a9a'}}>과학기술연구동 201호</Text>
                                </View>
                            </View>

                            <Divider style={{height:1,backgroundColor:'#e2e2e2',marginVertical:20,}}/>

                            <View>
                                <Text style={{marginBottom:15,color:'#9a9a9a'}}>선택정보</Text>
                                <View style={{backgroundColor:'#f8f8f8',padding:10,borderRadius:5}}>
                                    <View style={{flexDirection:'row',marginVertical:5,justifyContent:'space-between'}}>
                                        <Text style={{fontSize:13,marginRight:10}}>선택한 수거날짜</Text>
                                        <Text style={{color:'#9a9a9a',fontSize:13}}>2019년 12월 24일</Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginVertical:5,justifyContent:'space-between'}}>
                                        <Text style={{fontSize:13,marginRight:10}}>선택한 수거시간</Text>
                                        <Text style={{color:'#9a9a9a',fontSize:13}}>오후 08:00~11:00</Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginVertical:5,justifyContent:'space-between'}}>
                                        <Text style={{fontSize:13,marginRight:10}}>대면수거여부</Text>
                                        <Text style={{color:'#9a9a9a',fontSize:13}}>직접만남</Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginVertical:5,justifyContent:'space-between'}}>
                                        <Text style={{fontSize:13,marginRight:10}}>기타요청사항</Text>
                                        <Text style={{color:'#9a9a9a',fontSize:13}}>-</Text>
                                    </View>
                                </View>
                            </View>

                            <Divider style={{height:1,backgroundColor:'#e2e2e2',marginVertical:20,}}/>

                            <View style={{}}>
                                <Text style={{marginBottom:15,color:'#9a9a9a'}}>상품정보</Text>
                                <View style={{backgroundColor:'#f8f8f8',padding:10,borderRadius:5}}>
                                    {state.goodsItem.map((item) => (
                                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,}}>
                                            <Text style={{flex:1}}>{item.name}</Text>
                                            <Text style={{flexBasis:40,textAlign:'center'}}>{item.amount}</Text>
                                            <Text style={{flexBasis:80,textAlign:'right'}}>{item.price} 원</Text>
                                        </View>
                                    
                                    ))}
                                </View>
                            </View>

                            <Divider style={{height:1,backgroundColor:'#e2e2e2',marginVertical:20,}}/>

                            <View>
                                <Text style={{marginBottom:15,color:'#9a9a9a'}}>할인금액</Text>
                                <View style={{backgroundColor:'#f8f8f8',padding:10,borderRadius:5}}>
                                    <View style={{flexDirection:'row',marginVertical:5,justifyContent:'space-between'}}>
                                        <Text style={{fontSize:13,marginRight:10}}>쿠폰할인</Text>
                                        <Text style={{color:'#9a9a9a',fontSize:13}}>-3,000 원</Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginVertical:5,justifyContent:'space-between'}}>
                                        <Text style={{fontSize:13,marginRight:10}}>이벤트할인</Text>
                                        <Text style={{color:'#9a9a9a',fontSize:13}}>-3,000 원</Text>
                                    </View>
                                </View>
                            </View>

                            <Divider style={{height:1,backgroundColor:'#e2e2e2',marginVertical:20,}}/>

                            <View>
                                <Text style={{marginBottom:15,color:'#9a9a9a'}}>결제정보</Text>
                                <View style={{backgroundColor:'#f8f8f8',padding:10,borderRadius:5}}>
                                    <View style={{flexDirection:'row',marginVertical:5,justifyContent:'space-between'}}>
                                        <Text style={{fontSize:13,marginRight:10}}>결제금액</Text>
                                        <Text style={{color:'#d22828',fontSize:18}}>32,800 원</Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginVertical:5,justifyContent:'space-between'}}>
                                        <Text style={{fontSize:13,marginRight:10}}>결제수단</Text>
                                        <Text style={{color:'#9a9a9a',fontSize:13}}>신한카드(0811)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
            >
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#e2e2e2',width:screen.width-60,height:screen.width-60,borderRadius:10,overflow:'hidden',zIndex:2}}>
                        <Image source={{uri:faker.image.abstract()}} style={{width:screen.width,height:screen.width}}/>
                        <IconButton
                            style={{position:'absolute',right:5,top:5,backgroundColor:'#292929'}}
                            onPress={modalHandle.modalClose}
                            icon="close"
                            size={24}
                            color={'#fff'}
                        />
                    </View>
                    <TouchableHighlight 
                        onPress={modalHandle.modalClose}
                        style={{position:'absolute',width:'100%',height:'100%',top:0,zIndex:1}}                    
                    >
                        <View style={{backgroundColor:'rgba(0,0,0,0.7)',flex:1,}}/>
                    </TouchableHighlight>          
                </View>
         
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    date:{
        fontSize:10,color:'#292929',marginBottom:3
    },
    time:{
        fontSize:14,color:'#292929',borderWidth:1,textAlign:'center',borderRadius:3,borderColor:'#396eee'
    },
    image:{
        width:50,height:50,borderRadius:50,marginRight:10
    },
    title:{
        fontSize:16,
    },
    description:{
        fontSize:12,color:'#898989'
    }
})