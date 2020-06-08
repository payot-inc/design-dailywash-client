import React,{useState, useEffect} from 'react';
import {View, Text,Dimensions,TouchableHighlight, TouchableOpacity,FlatList, StyleSheet} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Basket from '../../components/basket';
import DummyData from './ServiceList.json';
import ImageConfirm from '../../components/imageConfirm';
import Alert from '../../components/alert';

const ItemBox = props => {

    const { name, description, userPrice, } = props.data;
    

    return(
        <View 
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                borderBottomWidth:1,
                borderColor:'#e2e2e2',
                padding:20,
                backgroundColor:'#fff'
            }}>
        
            <View style={{flex:1,marginRight:20,}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:16,marginRight:5,}}>{name}</Text>
                    {/* <TouchableOpacity>
                        <Icon name="help-box" size={24} color={'#c2c2c2'}></Icon>
                    </TouchableOpacity> */}
                </View>
                {description === null ?  null : <Text style={{fontSize:14,color:'#888',marginTop:5}}>{description}</Text>}
                <Text style={{fontSize:16,marginTop:5,color:'#494949'}}>{Number(userPrice).toLocaleString()}원</Text>
            </View>
            <TouchableHighlight 
                style={{width:50,height:50,alignItems:'center',justifyContent:'center',borderRadius:25,borderWidth:1,borderColor:'#e2e2e2',backgroundColor:'#fff'}}
                underlayColor={'#f2f2f2'}
                onPress={()=>{}}
            >
                <Icon name="plus" size={32} color={'#01a1dd'}></Icon>
            </TouchableHighlight>
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
                ListHeaderComponent={()=>
                    <View style={{paddingHorizontal:20,paddingVertical:10,flexDirection:'row',alignItems:'center',backgroundColor:'#E4F2F8',borderBottomWidth:1,borderColor:'#e2e2e2'}}>
                        <Icon name="alert-circle" size={50} color={'#01a1dd'}></Icon>
                        <View style={{flex:1,marginLeft:10,}}>
                            <Text style={{fontSize:12}}>세탁물의 소재, 오염정도, 고가명품등에 따라 추가요금이 발생될 수 있습니다</Text>
                            <TouchableOpacity
                                style={{marginTop:3,flexDirection:'row',alignItems:'center'}}
                                onPress={()=>setAlertModal(true)}
                            >
                                <Text style={{fontSize:12,color:'#01a1dd',marginRight:2}}>이용불가품목 확인하기</Text>
                                <Icon name="chevron-right" size={16} color={'#01a1dd'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            />
        </View>

    )
}

  const initialLayout = { width: Dimensions.get('window').width };

  export default props => {     

    const [services, setServices] = useState([], []);
    const [index, setIndex] = React.useState(0);
    const [confirm, setConfirm] = useState(false);

    const [routes] = React.useState([
      { key: 'first', title: '생활빨래' },
      { key: 'second', title: '의류' },
      { key: 'three', title: '악세사리' },
      { key: 'four', title: '신발' },
      { key: 'five', title: '이불' },
    ]);

    useEffect(() => setServices(DummyData), []);
  
    const renderScene = SceneMap({
      first: props => <TabContainer data={services.filter(({ category1 }) => category1 === '생활빨래')} />,
      second: props => <TabContainer data={services.filter(({ category2 }) => category2 === '의류')} />,
      three: props => <TabContainer data={services.filter(({ category2 }) => category2 === '악세사리')} />,
      four: props => <TabContainer data={services.filter(({ category2 }) => category2 === '신발')} />,
      five: props => <TabContainer data={services.filter(({ category2 }) => category2 === '이불')} />,
    });

    const RenderTabBar = props => {
        return(
            <TabBar {...props}
                inactiveColor={'#999'}
                activeColor={'#01a1dd'}
                scrollEnabled={true}
                pressColor={'#e2e2e2'}
                tabStyle={{width:80}}
                indicatorStyle={{backgroundColor:'#01a1dd'}}    
                style={{backgroundColor:'#fff'}}
            />
        )

    }

    const [basketVisible , setBasketVisible] = useState(false)
    const [alertModal, setAlertModal] = useState(false);

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
                

            <View style={{backgroundColor:'#fff',width:'100%',borderTopWidth:1,borderColor:'#01a1dd',paddingTop:0,}}>
                <View style={{flexDirection:'row',height:40,justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,}}>
                    <Text style={{color:'#494949'}}>결제금액</Text>
                    <Text style={{fontSize:18,color:'#D20A61',fontWeight:'bold'}}>
                        85,000원
                    </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableHighlight
                        style={{flex:1,}}
                        onPress={()=> setBasketVisible(true)}
                        underlayColor={'#f2f2f2'}
                    >   
                        <View style={{height:50,flexDirection:'row',alignItems:'center',justifyContent:'center',borderTopWidth:1,borderColor:'#e2e2e2'}}>
                            <Icon name="basket" size={24} style={{marginRight:5,}} color={'#c2c2c2'}></Icon>
                            <Text style={{color:'#292929',fontSize:16}}>장바구니</Text>
                            <View style={{width:24,height:24,backgroundColor:'#D20A61',borderRadius:12,marginLeft:5,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:'#fff',fontSize:11,}}>01</Text>
                            </View>       
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        style={{flex:1}}
                        onPress={()=> setConfirm(true)}
                        underlayColor="#00B9FF"
                    >   
                        <View style={{height:50,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#01a1dd'}}>
                            <Text style={{color:'#fff',fontSize:16}}>주문하기</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

            <Basket 
                data={services}
                open={basketVisible}
                close={()=> setBasketVisible(false)}
                navigation={props.navigation}
            />

            <ImageConfirm
                goTo={() => props.navigation.navigate('payment')}
                title={'추가비용안내'}
                description={'세탁물의 오염 정도에 따라 세탁비용이 추가로 발생될 수 있으며, 발생된 추가금액은 선택한 결제카드에 의해 자동결제됩니다'}
                visible={confirm}
                close={()=>setConfirm(false)}
                img={require('../../assets/img/guide02.png')}
            />

            <Alert 
                open={alertModal} 
                close={()=>setAlertModal(false)}
            >
                <View style={[styles.section,{borderBottomWidth:0,marginBottom:0}]}>
                <View style={styles.sectionTitle}>
                  <Icon name="check-circle" size={24}/>
                  <Text style={styles.sectionTitleText}>이용 불가 품목 안내</Text>
                </View>
                <View style={styles.grayBox}>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>천연모피, 천연무스탕, 천연가죽 등 전문 세탁이 필요한 경우</Text>
                  </View>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>솜류(쿠션, 베개), 가방(에코백 제외), 장식이 많은 커튼</Text>
                  </View>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>양털 카펫 및 우레탄 카펫 등 변형이 쉬운 재질의 카펫</Text>
                  </View>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>드레스류(웨딩, 이브닝, 연주회 드레스 등)</Text>
                  </View>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>기름, 병원 관련 오염류 등 전문 세탁이 필요한 경우</Text>
                  </View>
                  <View style={styles.grayBoxListItem}>
                    <Icon name="check-box-outline" style={styles.itemIcon}></Icon>
                    <Text style={styles.grayBoxListItemText}>구두, 워커, 부츠, 어그부츠, 바닥이 나무 재질로 되어 있는 샌들, 이염이 우려되는 운동화</Text>
                  </View>
                  <View style={{backgroundColor:'#f2f2f2',borderRadius:5,padding:15,marginTop:20,}}>
                    <Text style={{marginBottom:5,fontSize:13,color:'#888'}}>- 맡기기 전 세탁 불가 품목을 꼭 확인해주세요.</Text>
                    <Text style={{marginBottom:5,fontSize:13,color:'#888'}}>- 주머니에 남겨진 소지품은 없는지 잘 확인해주세요.</Text>
                    <Text style={{fontSize:13,color:'#888'}}>- 전문가 검수 후 불가 품목 접수가 확인되면 해당 품목은 세탁이 진행되지 않고 개발 포장하여 보내드립니다.</Text>
                  </View>
                </View>
              </View>
            </Alert>
         </View>
    )
}

const styles = StyleSheet.create({

    sectionTitle:{
        flexDirection:'row',
        alignItems:'center',
    },
    sectionTitleText:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10
    },


    grayBox:{
        marginTop:20,
    },
    grayBoxListItem:{
        marginBottom:10,
        flexDirection:'row'
    },
    itemIcon:{
        fontSize:20,
        color:'#888'
    },
    grayBoxListItemText:{
        marginLeft:10,
        flex:1,
        lineHeight:20,
    }
})