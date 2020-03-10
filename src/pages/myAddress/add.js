import React,{Component} from 'react';
import {View, Text, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Thema from '../../assets/css/thema';

export default class AddressAdd extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#F5F6F8'}}>
                <View style={{flex:1,backgroundColor:'#fff'}}>
                    <ScrollView
                        contentContainerStyle={{paddingHorizontal:25,paddingVertical:30,}}
                    >
                        <View style={{marginBottom:30}}>
                            <Text style={{fontSize:16,marginBottom:10,}}>장소이름</Text>
                            <TextInput style={[Thema.inputBox,{flex:1,paddingHorizontal:10}]}  placeholder={'장소이름을 입력해주세요'}></TextInput>
                        </View>

                        <View style={{marginBottom:30}}>
                            <Text style={{fontSize:16,marginBottom:10,}}>주소입력</Text>
                            <View style={{flexDirection:'row'}}>
                                <TextInput style={[Thema.inputBox,{flex:1,paddingHorizontal:10}]}></TextInput>
                                <TouchableHighlight style={{marginLeft:10,}}>
                                    <View style={{width:60,height:40,backgroundColor:'#292929',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{color:'#fff'}}>찾기</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <TextInput style={[Thema.inputBox,{flex:1,marginTop:15,paddingHorizontal:10}]}  placeholder={'상세주소 입력'}></TextInput>
                        </View>

                        <View>
                            <Text style={{fontSize:16,marginBottom:10,}}>공동현관 출입정보</Text>
                            <TouchableHighlight>
                                <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#e2e2e2',paddingVertical:15,}}>
                                    <View style={{flexBasis:40}}>
                                        <Icon name={'check-circle'} size={24} color={'#006FFF'}></Icon>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:18}}>공동현관 출입가능</Text>
                                        <Text style={{color:'#9a9a9a',marginTop:5}}>출입에 제한이 없습니다</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight>
                                <View style={{flexDirection:'row', paddingVertical:15,}}>
                                    <View style={{flexBasis:40}}>
                                        <Icon name={'check-circle'} size={24} color={'#c2c2c2'}></Icon>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:18}}>공동현관 출입불가능</Text>
                                        <Text style={{color:'#9a9a9a',marginTop:5}}>출입방법을 입력해주세요</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TextInput style={[Thema.inputBox,{flex:1,marginTop:10,paddingHorizontal:10}]} placeholder={'예: 현관문 비밀번호 #1324'}></TextInput>
                        </View>

                        <TouchableHighlight style={{height:45,backgroundColor:'#292929',borderRadius:5,alignItems:'center',justifyContent:'center',marginTop:30}}>
                            <Text style={{color:'#fff',fontSize:16}}>추가하기</Text>
                        </TouchableHighlight>

                    </ScrollView>
                </View>

                
            </View>
        );
    }
}