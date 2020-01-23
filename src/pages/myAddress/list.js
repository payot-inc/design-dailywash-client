import React,{Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SubHeader from '../../components/subHeader';
import BaseStyles from '../../assets/css/thema';



export default props => {

    const Data = [
        {
            favorite:true,
            addressTitle:'우리집',
            address: '부산광역시 구남언덕로 15 3층',
            doorPW:'#1338',
        },
        {
            favorite:false,
            addressTitle:'회사',
            address: '부산광역시 금정구 부산대학로 63번길 2, 과학기술연구동 201호',
            doorPW:'#1338',
        }
    ]
    
    return(
        <View style={{flex:1, backgroundColor:'#F5F6F8'}}>

            <SubHeader navigation={props.navigation} title={'수거/배달 장소관리'}/>

            <View style={{flex:1,paddingTop:22.5}}>
                <View style={{flexDirection:'row',flexBasis:30,paddingHorizontal:25}}>
                    <Text style={{marginRight:10}}>등록된 주소지</Text>
                    <Text style={{color:'#5D21FF',fontSize:16,fontWeight:'bold'}}>2</Text>
                </View>
                <View style={{flex:1,}}>
                    <FlatList
                        data = {Data}
                        contentContainerStyle={{paddingHorizontal:25}}
                        renderItem={({item, index}) => 
                            <View style={[BaseStyles.shadowBox, styles.addressCard,{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between'}]}>
                                <View style={{flex:1,}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        {(item.favorite) ? <Text style={{fontSize:11,borderRadius:3,borderWidth:1,borderColor:'#03C1E8',color:'#03C1E8',paddingHorizontal:2,marginRight:5,}}>대표</Text> : <Text></Text> }
                                        <Text style={{fontSize:16}}>{item.addressTitle}</Text>                
                                    </View>
                                    <Text style={{fontSize:14,marginTop:5,color:'#9a9a9a'}}>{item.address}</Text>
                                    <View style={{flexDirection:'row',marginTop:5}}>
                                        <Text style={{fontSize:14,marginRight:5}}>공동출입문:</Text>
                                        <Text style={{fontSize:14,color:'#9a9a9a'}}> {item.doorPW}</Text>
                                    </View>
                                </View>
                                <View style={{flexBasis:40,alignItems:'center'}}>

                                    <TouchableOpacity onPress={() => showMenu(index)} style={{width:40,alignItems:'flex-end'}}>
                                        <Icon name={'ellipsis-v'} size={18} color={'#c2c2c2'}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.index}
                        ListEmptyComponent={
                            <View style={{height:120,justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:10,borderStyle:'dashed',borderColor:'#d2d2d2',marginHorizontal:10}}>
                                <Text style={{fontSize:16}}>등록된 주소지가 없습니다</Text>
                            </View>
                        }

                        ListFooterComponent = {
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('addressAdd')}
                                style={{marginTop:20}}
                            >
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',borderWidth:1,borderRadius:10,height:50,borderColor:'#292929'}}>
                                    <Icon name={'plus-circle'} size={18}></Icon>
                                    <Text style={{fontSize:16,marginLeft:10}}>주소지 추가하기</Text>
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
    addressCard:{
        borderRadius:10,
        marginVertical:5,
        backgroundColor:'#fff',
        padding:15,
    }
})