import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView, Dimensions, TouchableOpacity,TextInput, Modal, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OrderFirstGuide from '../../components/orderFirstGuide';
import faker from 'faker';

export default props => {

    const dayTable = [
        {
            state:false,
            day:'24일',
            dayText:'월요일',
        },
        {
            state:false,
            day:'25일',
            dayText:'화요일'
        },
        {
            state:false,
            day:'26일',
            dayText:'수요일'
        },
        {
            state:false,
            day:'27일',
            dayText:'목요일'
        },
    ]

    const [dayItem, setDayItem] = useState(dayTable);

    const daySelectHandle = index => {
        const baseData = [...dayTable];
        baseData[index].state = !dayItem[index].state
        setDayItem(baseData);
    }

    const [modalVisible, setModalVisible] = useState(false);
    const sliderWidth = Dimensions.get('window').width;

    return(
        <View style={{flex:1,}}>

            <OrderFirstGuide
                goTo={()=> props.navigation.navigate('priceTable')}
                visible={modalVisible}
                close={()=> setModalVisible(false)}
                title={'수거/배달 안내'}
                img={require('../../assets/img/guide01-02.png')}
                description={'주문이 많을 경우 세탁물 수거 및 배달이 다소 지연될 수 있습니다'}
            />

            <ScrollView
                contentContainerStyle={{}}
            >
                <View style={{borderBottomWidth:1,borderColor:'#e2e2e2',paddingVertical:30,backgroundColor:'#f2f2f2'}}>
                    <View style={{marginBottom:30,alignItems:'center'}}>
                        <Text style={{fontSize:16}}>수거날짜 선택</Text>
                        <Text style={{fontSize:13,color:'#888',marginTop:5}}>희망하시는 수거날짜를 선택해주세요</Text>
                    </View>
                    <Carousel
                        data={dayTable}
                        itemWidth={110}
                        sliderWidth={sliderWidth}
                        activeSlideAlignment={'start'}
                        containerCustomStyle={{paddingLeft:30,}}
                        slideStyle={{marginRight:10}}
                        inactiveSlideScale={1}
                        layoutCardOffset={10}
                        renderItem={({item, index}) => 
                            <TouchableOpacity 
                                onPress={()=> daySelectHandle(index)}
                            >
                                <View style={[item.state ? styles.dayActive : styles.dayItem ]}>
                                    <Text style={item.state ? styles.dayActiveNumber : styles.dayItemNumber}>{item.day}</Text>
                                    <Text style={item.state ? styles.dayActiveText : styles.dayItemText}>{item.dayText}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>

                <View style={styles.inner}>

                    <View style={{marginBottom:40}}>
                        <View style={{marginBottom:15}}>
                            <Text style={{fontSize:16}}>담당기사</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#e2e2e2',padding:15,backgroundColor:'#fff',borderRadius:5}}>
                            <Image source={{uri:faker.image.avatar()}} style={{width:70,height:70,borderRadius:5}}/>
                            <View style={{marginLeft:15}}>
                                <Text style={{fontSize:16}}>박수민<Text style={{fontSize:12,color:'#888'}}>(베르나딘)</Text></Text>
                                <Text style={{marginTop:5}}>010-8525-0000</Text>
                                <Text style={{marginTop:5,fontSize:12,color:'#888'}}>오늘도 즐거운 하루되세요!</Text>
                            </View>
                        </View>
                    </View>
                    

                    <View style={{marginBottom:40,}}>
                        <View style={{marginBottom:15}}>
                            <Text style={{fontSize:16}}>수거시간 선택</Text>
                            <Text style={{fontSize:13,color:'#9a9a9a',marginTop:5}}>주문량에 따라 수거시간이 변경될 수 있습니다</Text>
                        </View>
                        <View>
                            <TouchableOpacity 
                                style={[{borderWidth:1,borderColor:'#01a1dd',borderRadius:5},styles.activeBar]}
                            >
                                <View style={{height:40,flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                                    <Icon name="check-circle" size={20} color={'#01a1dd'} style={styles.activeIcon}></Icon>
                                    <Text style={{marginLeft:10,}}>
                                        오전 08:00 ~ 11:00
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        
                            <TouchableOpacity 
                                style={[{borderWidth:1,borderColor:'#e2e2e2',marginTop:10,borderRadius:5}]}
                            >
                                <View style={{height:40,flexDirection:'row',alignItems:'center',paddingHorizontal:10,}}>
                                    <Icon name="check-circle" size={20} color={'#c2c2c2'} ></Icon>
                                    <Text style={{marginLeft:10,}}>
                                        오후 15:00 ~ 17:00
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginBottom:40,}}>
                        <View style={{marginBottom:15}}>
                            <Text style={{fontSize:16}}>수거방식 선택</Text>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity 
                                style={[{borderWidth:1,borderColor:'#01a1dd',borderRadius:5}]}
                            >
                                <View style={{height:40,flexDirection:'row',alignItems:'center',paddingHorizontal:10,}}>
                                    <Icon name="check-circle" size={20} color={'#01a1dd'} ></Icon>
                                    <Text style={{marginLeft:10,}}>
                                        문 앞에 둘게요 비대면 수거 부탁드려요
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={[{borderWidth:1,borderColor:'#e2e2e2',borderRadius:5,marginTop:10}]}
                            >
                                <View style={{height:40,flexDirection:'row',alignItems:'center',paddingHorizontal:10,}}>
                                    <Icon name="check-circle" size={20} color={'#c2c2c2'} ></Icon>
                                    <Text style={{marginLeft:10,}}>
                                        직접 만나서 드릴게요
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginBottom:50,}}>
                        <View style={{marginBottom:15}}>
                            <Text style={{fontSize:16}}>요청사항</Text>
                        </View>
                        <TextInput
                            multiline
                            numberOfLines={5}
                            style={{borderWidth:1,borderColor:'#d2d2d2',padding:10,textAlignVertical:'top',backgroundColor:'#fff',borderRadius:5}}
                            placeholder={'필요하신 사항을 입력해주세요'}
                            maxLength={50}
                        >
                        </TextInput>
                    </View>
                </View> 
            </ScrollView>

        
            <TouchableHighlight
                onPress={() => {setModalVisible(true)}}
                style={{height:50,backgroundColor:'#01a1dd',alignItems:'center',justifyContent:'center',}}
                underlayColor="#00B9FF"
            >
                <Text style={{color:'#fff',fontSize:16}}>다음으로</Text>
            </TouchableHighlight>
           
        </View>

    )
    
}

const styles = StyleSheet.create({
    inner:{
        padding:20
    },

    dayItem:{
        borderWidth:1,
        borderColor:'#e2e2e2',
        backgroundColor:'#fff',
        borderRadius:5,
        height:80,
        padding:10,
        justifyContent:'space-between'
    },
    dayActive:{
        borderWidth:0,
        borderColor:'#e2e2e2',
        backgroundColor:'#01a1dd',
        borderRadius:5,
        height:80,
        padding:10,
        justifyContent:'space-between'
    },
    dayItemNumber:{
        fontSize:18,
        color:'#494949'
    },
    dayActiveNumber:{
        fontSize:18,
        color:'#fff'
    },
    dayItemText:{
        fontSize:14,
        textAlign:'right',
        color:'#494949'
    },
    dayActiveText:{
        fontSize:14,
        textAlign:'right',
        color:'#fff'
    },

})