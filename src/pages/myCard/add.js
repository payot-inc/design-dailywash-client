import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableHighlight} from 'react-native';
import moment from 'moment';

import BaseStyles from '../../assets/css/thema';

export default class CardAdd extends React.Component{
    state = {
        cardName: '',
        lastCardNumber: '',
        cardDate: moment().format('YYYY년 MM월 DD일'),
    }

    render(){
        const cardAppend = this.props.navigation.getParam('appendCard', null);

        return(
            <View style={{flex:1,backgroundColor:'#F5F6F8',paddingTop:10,}}>
                <View style={{flex:1,backgroundColor:'#fff',borderTopEndRadius:45,elevation:15}}>
                    <ScrollView 
                        contentContainerStyle={{paddingHorizontal:25,paddingVertical:30}}
                    >
                        <View style={{marginBottom:20}}>
                            <Text style={{marginBottom:8,}}>카드명</Text>
                            <TextInput
                                style={[BaseStyles.inputBox,]}
                                onChangeText={(text) => this.setState({ cardName: text })}
                            />
                        </View>
                        <View style={{marginBottom:20}}>
                            <Text style={{marginBottom:8,}}>카드명</Text>
                            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                                <TextInput
                                    style={[BaseStyles.inputBox,{flex:1,marginRight:5}]}
                                />
                                <TextInput
                                    style={[BaseStyles.inputBox,{flex:1,marginRight:5}]}
                                />
                                <TextInput
                                    style={[BaseStyles.inputBox,{flex:1,marginRight:5}]}
                                />
                                <TextInput
                                    style={[BaseStyles.inputBox,{flex:1,}]}
                                />
                            </View>
                        </View>
                        <View style={{marginBottom:20}}>
                            <Text style={{marginBottom:8,}}>유효기간</Text>
                            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                <TextInput
                                    style={[BaseStyles.inputBox,{flexBasis:70,marginRight:5,}]}
                                />
                                <Text style={{color:'#aaa'}}>월</Text>
                                <TextInput
                                    style={[BaseStyles.inputBox,{flexBasis:70,marginRight:5,marginLeft:10}]}
                                />
                                <Text style={{color:'#aaa'}}>년</Text>
                            </View>
                        </View>
                        <View style={{marginBottom:20}}>
                            <Text style={{marginBottom:8,}}>카드고유번호 확인(CVC)</Text>
                            <TextInput
                                style={[BaseStyles.inputBox,]}
                            />
                            <Text style={{marginTop:10,color:'#aaa',fontSize:12}}>카드뒷면 서명란에 표기된 번호 중 가장 뒤 3자리</Text>
                        </View>
                        <View>
                            <Text style={{marginBottom:8}}>카드 비밀번호 확인(앞 2자리)</Text>
                            <TextInput
                                style={[BaseStyles.inputBox,]}
                            />
                        </View>

                        <TouchableHighlight style={{height:45,backgroundColor:'#292929',borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:30,}}
                            onPress={() => {
                                // 카드 추가
                                const cardName = this.state.cardName;
                                cardAppend(cardName, '1111', '2019년 12월 4일');
                                // 카드등록이 완료되었다면 뒤로가기
                                this.props.navigation.goBack();
                            }}>
                            <Text style={{color:'#fff',fontSize:16}}>추가하기</Text>
                        </TouchableHighlight>
                    </ScrollView>                   
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})