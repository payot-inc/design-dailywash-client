import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView, Dimensions, TouchableOpacity,TextInput, Modal, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageConfirm from '../../components/imageConfirm';
import faker from 'faker';

export default props => {

    const DateSelect = [
        {
            on:true,
            date:'내일',
            dateText:'',
        },
        {
            on:false,
            date:'25일',
            dateText:'화요일'
        },
        {
            on:false,
            date:'26일',
            dateText:'목요일'
        },
        {
            on:false,
            date:'27일',
            dateText:'금요일'
        },
    ]

    const itemSelectHandle = {

    }

    const [modalVisible, setModalVisible] = useState(false);
    const sliderWidth = Dimensions.get('window').width;

    return(
        <View style={{flex:1,backgroundColor:'#F5F6F8'}}>

            <ImageConfirm
                goTo={()=> props.navigation.navigate('priceTable')}
                visible={modalVisible}
                close={()=> setModalVisible(false)}
                title={'수거/배달 안내'}
                img={require('../../assets/img/guide01.png')}
                description={'주문이 많을 경우 세탁물 수거 및 배달이 다소 지연될 수 있습니다'}
            />

            <ScrollView
                contentContainerStyle={{paddingVertical:15,paddingHorizontal:25}}
            >
                <View style={{marginBottom:40}}>
                    <View style={{marginBottom:15}}>
                        <Text style={{fontSize:16}}>수거날짜 선택</Text>
                        <Text style={{fontSize:13,color:'#9a9a9a',marginTop:5}}>희망하시는 수거날짜를 선택해주세요</Text>
                    </View>
                    <Carousel
                        data={DateSelect}
                        itemWidth={90}
                        sliderWidth={sliderWidth}
                        activeSlideAlignment={'start'}
                        containerCustomStyle={{}}
                        slideStyle={{marginRight:10}}
                        inactiveSlideScale={1}
                        layoutCardOffset={10}
                        renderItem={({item, index})=>
                            <TouchableOpacity 
                                 style={item.on === true ? styles.selectOn : styles.selectOff} 
                            >
                                <Text style={{fontSize:20}}>{item.date}</Text>
                                {item.dateText === '' ? null : <Text style={{fontSize:12,}}>{item.dateText}</Text>}
                            </TouchableOpacity>
                        }
                    />
                </View>


                <View style={{marginBottom:40}}>
                    <View style={{marginBottom:15}}>
                        <Text style={{fontSize:16}}>수거시간 선택</Text>
                        <Text style={{fontSize:13,color:'#9a9a9a',marginTop:5}}>주문량에 따라 수거시간이 변경될 수 있습니다</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity 
                            style={[styles.selectOff,{marginRight:5}]}
                        >
                            <Image source={require('../../assets/img/morning.png')} resizeMode={'contain'} style={{width:'100%',height:120}}/>
                            <View style={{marginTop:5}}>
                                <Text style={{color:'#396EEE',textAlign:'center'}}>
                                    오전
                                </Text>
                                <Text style={{textAlign:'center'}}>
                                    08:00 ~ 11:00
                                </Text>
                            </View>
                        </TouchableOpacity>
                    
                        <TouchableOpacity
                            style={[styles.selectOff,{marginLeft:5}]}
                        >
                            <Image source={require('../../assets/img/evening.png')} resizeMode={'contain'} style={{width:'100%',height:120}}/>
                            <View style={{marginTop:5}}>
                                <Text style={{color:'#E33A16',textAlign:'center'}}>
                                    오후
                                </Text>
                                <Text style={{textAlign:'center'}}>
                                    15:00 ~ 17:00
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginBottom:40}}>
                    <View style={{marginBottom:15}}>
                        <Text style={{fontSize:16}}>수거방식 선택</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity
                            style={[styles.selectOff,{marginRight:5}]}
                        >
                            <Image source={require('../../assets/img/service01.png')} resizeMode={'contain'} style={{width:'100%',height:120}}/>
                            <View style={{marginTop:20}}>
                                <Text style={{textAlign:'center'}}>
                                    만나서 드릴게요
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.selectOff,{marginLeft:5}]}
                        >
                            <Image source={require('../../assets/img/service02.png')} resizeMode={'contain'} style={{width:'100%',height:120}}/>
                            <View style={{marginTop:20}}>
                                <Text style={{textAlign:'center'}}>
                                    집앞에 둘게요
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{}}>
                    <View style={{marginBottom:15}}>
                        <Text style={{fontSize:16}}>요청사항</Text>
                    </View>
                    <TextInput
                        multiline
                        numberOfLines={5}
                        style={{borderWidth:1,borderRadius:10,borderColor:'#d2d2d2',padding:10,textAlignVertical:'top',backgroundColor:'#fff'}}
                        placeholder={'필요하신 사항을 입력해주세요'}
                        maxLength={50}
                    >
                    </TextInput>
                </View>   
            </ScrollView>

            <View style={{borderTopWidth:1,paddingHorizontal:10,paddingVertical:10,borderColor:'#d2d2d2',backgroundColor:'#fff'}}>
                <TouchableHighlight
                    onPress={() => {setModalVisible(true)}}
                    style={{height:45,backgroundColor:'#292929',borderRadius:5,alignItems:'center',justifyContent:'center',}}
                >
                    <Text style={{color:'#fff'}}>다음으로</Text>
                </TouchableHighlight>
            </View>
            
        </View>

    )
    
}

const styles = StyleSheet.create({
    selectOff:{
        flex:1,padding:15,borderWidth:1,borderColor:'#e2e2e2',borderRadius:10,backgroundColor:'#fff',
        justifyContent:'center',alignItems:'center'
    },
    selectOn:{
        flex:1,padding:15,borderWidth:1,borderColor:'#396EEE',borderRadius:10,backgroundColor:'#fff',
        justifyContent:'center',alignItems:'center'
    }
})