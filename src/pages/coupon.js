import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SubHeader from '../components/subHeader'
import BaseStyles from '../assets/css/thema';


const Data = [
    {
        couponTitle: '신규오픈 행사쿠폰',
        date:'2019-12-12',
        price:3000,
        category:'이불'
    },
    {
        couponTitle: '추석기념 세탁세일',
        date:'2019-12-12',
        price:5000,
        category:'전체'
    },
    {
        couponTitle: '추석기념 세탁세일',
        date:'2019-12-12',
        price:5000,
        category:'전체'
    },
    {
        couponTitle: '추석기념 세탁세일',
        date:'2019-12-12',
        price:5000,
        category:'전체'
    },
]

export default class Coupon extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#F5F6F8'}}>
                <SubHeader title={'나의 쿠폰'} navigation={this.props.navigation}/>
                <View style={{flex:1,}}>
                    <View style={{padding:25}}>
                        <Text style={{marginBottom:10,}}>쿠폰번호 입력</Text>
                        <View style={{flexDirection:'row',}}>
                            <TextInput 
                                style={[BaseStyles.inputBox, {flex:1,backgroundColor:'#fff'}]}
                                placeholder={'예) EX245DAG1'}
                            />
                            <TouchableHighlight
                                style={{width:80,height:40,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#292929',marginLeft:10,}}
                            >
                                <Text style={{color:'#fff'}}>등록</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginBottom:15,paddingHorizontal:25}}>
                        <Text style={{marginRight:10}}>나의 쿠폰수</Text>
                        <Text style={{color:'#5D21FF',fontSize:16,fontWeight:'bold'}}>2</Text>
                    </View>
                    <FlatList
                        data={Data}
                        contentContainerStyle={{paddingHorizontal:25}}
                        renderItem={({item}) => 
                            <View style={{flex:1,flexDirection:'row',height:130,marginBottom:15,}}>
                                <View style={{borderRadius:10,flexBasis:70,backgroundColor:'#5D21FF',justifyContent:'center',alignItems:'center',}}>
                                    <Text style={{color:'rgba(255,255,255,0.4)', transform: [{ rotate: '-90deg' }], fontSize:16,fontWeight:'bold',}}>COUPON</Text>
                                </View>
                                <View style={{padding:15,borderRadius:10,borderWidth:1,borderColor:'#d2d2d2',backgroundColor:'#fff',flex:1}}>                                     
                                    <Text style={{fontSize:18}}>{item.couponTitle}</Text>
                                    <Text style={{color:'#9a9a9a',marginTop:3}}>{item.category} 카테고리 할인</Text>
                                    <Text style={{fontSize:11,marginTop:3}}>{item.date} 까지</Text>
                                    <Text style={{fontSize:24,fontWeight:'bold',textAlign:'right',color:'#5D21FF'}}>{item.price} 원</Text>     
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.index}
                    >

                    </FlatList>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    couponList:{

    }
})