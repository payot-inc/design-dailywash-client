import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions,TouchableHighlight, FlatList} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {Button} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Basket from '../components/basket';
import DummyData from './order/ServiceList.json';

const ItemBox = props => {

    const { name, description, userPrice, } = props.data;
    return(
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderBottomWidth:1,borderColor:'#e2e2e2',paddingVertical:15,paddingHorizontal:10,backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',flex:1,marginRight:20,}}>
                <View style={{flex:1,}}>
                    {props.data.eventTitle === null ? null : <Text style={{fontSize:12,color:'#d22828'}}>{'세일'}</Text>}
                    <Text style={{fontSize:18,}}>{name}</Text>
                    {description === null ? null : <Text style={{fontSize:12,color:'#888'}}>{description}</Text>}
                </View>
                <View>
                    <Text style={{textDecorationLine:'line-through',color:'#AAA',fontSize:12,textAlign:'right'}}>{Number(userPrice).toLocaleString()}원</Text>
                    <Text style={{color:'#d22828', fontWeight:'bold',fontSize:16,textAlign:'right'}}>{Number(userPrice).toLocaleString()}원</Text>
                </View>
            </View>
            <View style={{justifyContent:'center'}}>
                <TouchableHighlight style={{borderWidth:1,borderColor:'#c2c2c2',width:50,height:50,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
                    <Icon name="plus" size={32} color={'#c2c2c2'}></Icon>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const TabContainer = props => {    
    return(
        <View style={{flex:1,justifyContent:'space-between',backgroundColor:'#f8f8f8'}}>
            <FlatList
                data={props.data}
                renderItem={({item})=>(
                    <ItemBox data={item} />
                )}
                keyExtractor={item => item.index}
            />
        </View>

    )
}

  const initialLayout = { width: Dimensions.get('window').width };

  

  export default props => {   
    
       
    const DATA = [
        {   
            eventTitle:'겨울윈터세일',
            goodsName:'패딩',
            discription:'해당제품은 이용할 수 없습니다',
            defaultPrice:13400,
            salesPrice:9900,
            amount:1,
        },
        {   
            eventTitle:null,
            goodsName:'와이셔츠',
            discription:'와이셔츠는 실크는 제외됩니다',
            defaultPrice:13400,
            salesPrice:19800,
            amount:1,
        },
    ]

    const [services, setServices] = useState([], []);
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: '생활빨래' },
      { key: 'second', title: '상의' },
      { key: 'three', title: '하의' },
      { key: 'four', title: '기타' },
    ]);

    useEffect(() => setServices(DummyData), []);
  
    const renderScene = SceneMap({
      first: props => <TabContainer data={services.filter(({ category1 }) => category1 === '물빨래')} />,
      second: props => <TabContainer data={services.filter(({ category2 }) => category2 === '상의')} />,
      three: props => <TabContainer data={services.filter(({ category2 }) => category2 === '하의')} />,
      four: props => <TabContainer data={services.filter(({ category2 }) => category2 === '액세서리')} />,
    });

    const RenderTabBar = props => {
        return(
            <TabBar {...props}
                inactiveColor={'#999'}
                activeColor={'#396eee'}
                scrollEnabled={true}
                pressColor={'#e2e2e2'}
                tabStyle={{width:80}}
                indicatorStyle={{backgroundColor:'#396eee'}}    
                style={{backgroundColor:'#fff'}}
            />
        )

    }

    const [basketVisible , setBasketVisible] = useState(false)

    return(
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <TabView
                    navigationState={{index, routes}}
                    renderTabBar={RenderTabBar}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    swipeEnabled={true}
                />
            </View>
                

            <View style={{backgroundColor:'#fff',height:135,width:'100%',borderTopWidth:1,borderColor:'#e2e2e2'}}>
                <TouchableHighlight
                    underlayColor={'#fff'}
                    onPress={()=> setBasketVisible(true)}
                    style={{alignItems:'center',justifyContent:'center', zIndex:1,borderWidth:1,borderColor:'#e2e2e2',height:25,backgroundColor:'#e2e2e2'}}
                >
                    <Icon name="chevron-up" size={20}/>
                </TouchableHighlight>
                <View style={{flexDirection:'row',height:50,justifyContent:'space-between',paddingHorizontal:10,}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{marginRight:5}}>선택한상품</Text>
                        <Text style={{color:'#fff',width:20,height:20,justifyContent:'center',textAlign:'center',backgroundColor:'#d22828',borderRadius:10}}>2</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#d22828',fontWeight:'bold',fontSize:18}}>85,000</Text>
                        <Text style={{marginLeft:5}}>원</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal:10,}}>
                    <Button 
                        mode="contained" 
                        contentStyle={{height:50,backgroundColor:'#292929'}} 
                        style={{borderRadius:5}}
                        onPress={()=>props.navigation.navigate('payment')}
                    >선택완료</Button>
                </View>
            </View>

            <Basket 
                data={DATA}
                open={basketVisible}
                close={()=> setBasketVisible(false)}
                navigation={props.navigation}
            />

         </View>
    )
}

