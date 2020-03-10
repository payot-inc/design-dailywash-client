import React, {useState, setState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight,FlatList,TouchableOpacity, Modal, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import faker from 'faker';
import Alert from '../../components/alert';

export default props => {

    const data = [
        {
            selectState:false,
            addressName:'우리집',
            address:'부산시 북구 구남언덕로 15',
            doorInfo:'#4561'
        },
        {
            selectState:false,
            addressName:'회사',
            address:'부산광역시 금정구 부산대학로 63번길 201호',
            doorInfo:'없음'
        },
    ]

    

    const [spot, setSpot] = useState(data);

    const spotSelectHanble = index => {
        const baseData = [...data];
        baseData[index].selectState = !spot[index].selectState
        setSpot(baseData);
    }

    const [alert, setAlert] = useState(false);

    return(
        <View style={{backgroundColor:'#F5F6F8',flex:1,}}>

            <Alert open={alert} close={()=>setAlert(false)} title={'경고'} description={'해당 지역은 서비스 불가지역입니다'}/>
            
            <FlatList
                data={spot}
                ListHeaderComponent={({item})=>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginRight:5,}}>등록된 주소지</Text>
                        <Text style={{color:'#5D21FF'}}>2</Text>
                    </View>
                }
                contentOffset={{y:-50}}
                ListHeaderComponentStyle={{marginBottom:10}}
                renderItem={({item, index})=>
                
                    <TouchableHighlight
                        underlayColor={'#f2f2f2'}
                        onPress={() => spotSelectHanble(index)}
                    >
                        <View style={item.selectState ? styles.selectedOn : styles.selectedOff}>
                            <View style={{flexBasis:60,alignItems:'center'}}>
                                <Icon name={'check-circle'} size={30} color={item.selectState ?'#396eee' : '#d2d2d2'}/> 
                            </View>
                            <View style={{flex:1,}}>
                                <Text style={{marginBottom:5,fontSize:16}}>{item.addressName}</Text>
                                <Text style={{color:'#9a9a9a'}}>{item.address}</Text>
                                <View style={{flexDirection:'row',marginTop:5,}}>
                                    <Text style={{marginRight:5,}}>공동출입문 정보</Text>
                                    <Text style={{color:'#9a9a9a'}}>{item.doorInfo}</Text>
                                </View>
                            </View>
                            <View style={{flexBasis:50,alignItems:'center'}}>
                                <TouchableOpacity onPress={() => setAlert(true)}>
                                    <Icon name={'close'} size={24} color={'#d2d2d2'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableHighlight>
                    
                }
                ListFooterComponent={({item})=>
                    <TouchableOpacity
                    onPress={() => props.navigation.navigate('addressAdd')}
                    >
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',borderWidth:1,borderRadius:5,height:50,borderColor:'#d2d2d2'}}>
                            <Icon name={'plus-circle'} size={18}></Icon>
                            <Text style={{fontSize:16,marginLeft:10}}>주소지 추가하기</Text>
                        </View>
                    </TouchableOpacity>
                }
                ListFooterComponentStyle={{marginTop:20,}}
                keyExtractor={item => item.index}
                ItemSeparatorComponent={(item)=>
                    <View style={{height:15,}}>
                    </View>
                }
                contentContainerStyle={{paddingHorizontal:25, paddingVertical:15}}
            />

            <View style={{borderTopWidth:1,paddingHorizontal:10,paddingVertical:10,borderColor:'#d2d2d2',backgroundColor:'#fff'}}>
                <TouchableHighlight
                    onPress={()=> props.navigation.navigate('when')}
                    style={{height:45,backgroundColor:'#292929',borderRadius:5,alignItems:'center',justifyContent:'center'}}
                >
                    <Text style={{color:'#fff'}}>다음으로</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
    
}


const styles = StyleSheet.create({
    selectedOn:{borderWidth:1,borderRadius:10,flexDirection:'row',paddingVertical:15,borderColor:'#396eee',backgroundColor:'#fff'},
    selectedOff:{borderWidth:1,borderRadius:10,flexDirection:'row',paddingVertical:15,borderColor:'#d2d2d2',backgroundColor:'#fff'}
})

