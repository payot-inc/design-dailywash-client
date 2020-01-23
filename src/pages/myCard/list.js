import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SubHeader from '../../components/subHeader'
import BaseStyles from '../../assets/css/thema';


const Data = [
    {
        cardName:'신한카드',
        cardNumber: '0801',
        cardDate:'2019년 2월 14일',
    },
    {
        cardName:'삼성카드',
        cardNumber: '8114',
        cardDate:'2019년 3월 15일',
    },
]


export default props => {

    const state = {
        cards: [
            {
                cardName:'신한카드',
                cardNumber: '0801',
                cardDate:'2019년 2월 14일',
            },
            {
                cardName:'삼성카드',
                cardNumber: '8114',
                cardDate:'2019년 3월 15일',
            },
        ],
    }

    
    const cardColors = ['#1E89E8','#5D21FF','#FF7700','#1E1FE8','#D20A0A'];

    const CardAlert = (index) => {Alert.alert(
        '카드삭제',
        '해당 카드를 삭제할까요?',
        [
            {text:'삭제', onPress: () => {
                // 원래 카드목록을 가져옴
                const list = state.cards;
                list.splice(index, 1);
                setState({ cards: list });
            }},
            {text:'취소'}
        ],
        {cancelable: false}
    )}

    return(
        <View style={{flex:1,backgroundColor:'#F5F6F8'}}>

            <SubHeader navigation={props.navigation} title={'카드관리'}/>

            <View style={{flex:1,paddingVertical:22.5}}>
                <View style={{flexDirection:'row',flexBasis:30,paddingHorizontal:25}}>
                    <Text style={{marginRight:10}}>등록된 카드</Text>
                    <Text style={{color:'#5D21FF',fontSize:16,fontWeight:'bold'}}>2</Text>
                </View>
                <View style={{flex:1,}}>
                    <FlatList
                        contentContainerStyle={{paddingHorizontal:25}}
                        data = {state.cards}
                        renderItem={({item, index}) => 
                            <View style={[styles.cardItem, BaseStyles.shadowBox]}>
                                <View style={{width:96,height:60,borderRadius:5,padding:7,backgroundColor:cardColors[Math.floor(((Math.random() * 10) % 5))],justifyContent:'space-between',}}>
                                    <Text style={{fontSize:12,color:'rgba(255,255,255,0.6)'}}>CARD</Text>
                                    <Text style={{textAlign:'right',color:'#fff',fontWeight:'bold',fontSize:16}}>{item.cardNumber}</Text>
                                </View>
                                <View style={{flex:1,marginLeft:15,}}>
                                    <Text style={{fontSize:16}}>{item.cardName}</Text>
                                    <Text style={{fontSize:12,color:'#9a9a9a',marginTop:3}}>등록일: {item.cardDate}</Text>
                                </View>
                                <View style={{flexBasis:40,alignItems:'center'}}>
                                    <TouchableOpacity
                                        onPress={() => CardAlert(index)}
                                    >
                                        <Icon name={'times-circle'} size={28} color={'#d2d2d2'}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.index}
                        ListEmptyComponent={
                            <View style={{height:120,justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10,borderStyle:'dashed',borderColor:'#d2d2d2',marginHorizontal:10}}>
                                <Text style={{fontSize:16}}>등록된 카드가 없습니다</Text>
                            </View>
                        }

                        ListFooterComponent = {
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('cardAdd', {
                                    appendCard: (cardName, cardNumber, cardDate) => {
                                        const insertCard = { cardName, cardNumber, cardDate };
                                        setState({ cards: [...state.cards, insertCard] });
                                    },
                                    name: '김용희',
                                })}
                                style={{marginTop:20}}
                            >
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',borderWidth:1,borderRadius:10,height:50,borderColor:'#292929'}}>
                                    <Icon name={'plus-circle'} size={18}></Icon>
                                    <Text style={{fontSize:16,marginLeft:10}}>카드 등록하기</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardItem:{
        height:90,
        borderRadius:10,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        marginVertical:5,
        flexDirection:'row',
        alignItems:'center',
    }
})