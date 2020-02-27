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

    const [modalVisible, setModalVisible] = useState(false);
    const sliderWidth = Dimensions.get('window').width;

    return(
        <View style={{flex:1,backgroundColor:'#F5F6F8'}}>

            <ImageConfirm
                goTo={()=> props.navigation.navigate('priceTable')}
                visible={modalVisible}
                close={()=> setModalVisible(false)}
                title={'수거/배달 안내'}
                description={'주문이 많을 경우 세탁물 수거 및 배달이 다소 지연될 수 있습니다'}
            />

            <ScrollView
                contentContainerStyle={{paddingVertical:15,paddingHorizontal:25}}
            >
                <View style={{marginBottom:20}}>
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
                                style={[
                                    {
                                        borderWidth:2,
                                        borderRadius:10,
                                        height:70,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        backgroundColor:'#fff'
                                    },
                                    item.on === true ? {borderColor:'#396eee'} : {borderColor:'#d2d2d2'}
                                ]}
                            >
                                <Text style={{fontSize:20}}>{item.date}</Text>
                                {item.dateText === '' ? null : <Text style={{fontSize:12,}}>{item.dateText}</Text>}
                            </TouchableOpacity>
                        }
                    />
                </View>


                <View style={{marginBottom:20}}>
                    <View style={{marginBottom:15}}>
                        <Text style={{fontSize:16}}>수거시간 선택</Text>
                        <Text style={{fontSize:13,color:'#9a9a9a',marginTop:5}}>주문량에 따라 수거시간이 변경될 수 있습니다</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity 
                            style={[styles.selectBox,{marginRight:5,height:90}]}
                        >
                            <Icon name={'check-circle'} size={24} color={'#d2d2d2'}></Icon>
                            <View style={{marginTop:5}}>
                                <Text>
                                    오전
                                </Text>
                                <Text>
                                    08:00 ~ 11:00
                                </Text>
                            </View>
                            </TouchableOpacity>
                    
                        <TouchableOpacity
                            style={[styles.selectBox,{marginLeft:5,height:90}]}
                        >
                            <Icon name={'check-circle'} size={24} color={'#d2d2d2'}></Icon>
                            <View style={{marginTop:5}}>
                                <Text>
                                    오후
                                </Text>
                                <Text>
                                    15:00 ~ 17:00
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginBottom:20}}>
                    <View style={{marginBottom:15}}>
                        <Text style={{fontSize:16}}>수거방식 선택</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity 
                            style={[styles.selectBox,{marginRight:5}]}
                        >
                            
                            <Icon name={'check-circle'} size={24} color={'#d2d2d2'}></Icon>
                            <Text style={{marginTop:5}}>
                                직접만남
                            </Text>
                            
                            </TouchableOpacity>
                    
                        <TouchableOpacity
                            style={[styles.selectBox,{marginLeft:5}]}
                        >
                            <Icon name={'check-circle'} size={24} color={'#d2d2d2'}></Icon>
                            <Text style={{marginTop:5}}>
                                안만나요
                            </Text>
                            
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
    selectBox:{
        flex:1,
        borderWidth:1,
        borderColor:'#d2d2d2',
        borderRadius:10,
        justifyContent:'space-between',
        padding:15,
        backgroundColor:'#fff'
    }
})