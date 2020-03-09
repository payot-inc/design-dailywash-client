import React,{useState, setState} from 'react';
import {View, Text, ScrollView, Dimensions, TouchableHighlight,FlatList, Modal,  TouchableOpacity,} from 'react-native';
import {Button, Divider,Checkbox, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Carousel from 'react-native-snap-carousel';

import Loading from '../../components/loading';
import AgrmtModal from '../../components/agrmtModal';


const CardItem = ({item, index, cardHandle}) => {

  return(
    <TouchableHighlight
      onPress={() => cardHandle(index)}
      style={{overflow:'hidden',borderRadius:10,}}
    >
      <View style={[{height:110,width:200,justifyContent:'space-around',padding:10,flexDirection:'row'}, item.active ? {backgroundColor:'#1E1FE8'} : {backgroundColor:'#888'}]}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',}}>
          <View style={{flex:1,}}>
            {item.active === true ? <Icon name="check-circle-outline" color={'#FFCC00'} size={24} style={{marginBottom:5}}/> : null }
            <Text style={{fontSize:14,color:'#fff'}}>{item.cardName}</Text>
            <Text style={{color:'#c2c2c2',fontSize:12,marginTop:3,}}>{item.name}</Text>
          </View>
          <View style={{justifyContent:'flex-end',width:80}}>
            <Text style={{fontSize:24,textAlign:'right',color:'#fff'}}>{item.cardLastNumber}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const CouponModal = props => {

  const couponData = [
    {
      couponName:'첫회원 가입쿠폰',
      salePrice:2000,
      fromDate:'2월 14일까지'
    },
    {
      couponName:'봄맞이 세일쿠폰',
      salePrice:2000,
      fromDate:'2월 14일까지'
    },
    {
      couponName:'봄맞이 세일쿠폰',
      salePrice:2000,
      fromDate:'2월 14일까지'
    },
    {
      couponName:'봄맞이 세일쿠폰',
      salePrice:2000,
      fromDate:'2월 14일까지'
    },
    {
      couponName:'봄맞이 세일쿠폰',
      salePrice:2000,
      fromDate:'2월 14일까지'
    },
  ]

 return(
  <Modal
    visible={props.visible}
    transparent={true}
    animationType={'fade'}
    onRequestClose={props.close}
  >
    <View style={{flex:1,justifyContent:'center'}}>
      <View style={{zIndex:2,padding:40,}}>
          <View style={{backgroundColor:'#fff',borderRadius:0,overflow:'hidden',backgroundColor:'#fff',borderRadius:10,maxHeight:400}}>
            <View style={{height:40,paddingHorizontal:15,justifyContent:'center',borderBottomWidth:1,borderColor:'#e2e2e2',backgroundColor:'#396EEE'}}>
              <Text style={{color:'#fff'}}>쿠폰선택</Text>
            </View>
            <FlatList
              data={couponData}
              renderItem={({item})=>
                <TouchableOpacity
                  onPress={props.close}
                >
                  <View style={{padding:15,borderBottomWidth:1,borderColor:'#e2e2e2',flexDirection:'row',}}>
                    <View style={{flex:1}}>
                      <Text style={{fontSize:14}}>{item.couponName}</Text>
                      <Text style={{fontSize:18,color:'#d22828',fontWeight:'bold'}}>{item.salePrice} 원</Text>
                      <Text style={{fontSize:12,textAlign:'right',color:'#888'}}>{item.fromDate}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              }
            />
          </View>
      </View>
    </View>

    <TouchableOpacity
      onPress={props.close}
      activeOpacity={1}
      style={{flex:1,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',zIndex:1,width:'100%',height:'100%'}}
    >
    </TouchableOpacity>

  </Modal>
 )
}

export default props =>{

  const sliderWidth = Dimensions.get('window').width;

  const cardData = [
    {
      active:true,
      cardName:'신한카드',
      name:'러브카드',
      cardLastNumber:'9972',
    },
    {
      active:false,
      cardName:'부산은행',
      name:'부산은행 체크카드',
      cardLastNumber:'3825',
    }
  ];
  
  const [cards, setCards] = useState(cardData);

  const cardHandle = index => {
    const cardItems = cards.map((item, i) => {
      item.active = index === i;
      return item;
    });
    setCards(cardItems);
  }

  const agrmtList = [
    {
      active:false,
      description: () => {
        return(
            <TouchableHighlight onPress={()=> setAgrmtModal(true)} underlayColor={'#f2f2f2'} style={{borderRadius:5}}>
              <Text style={{flex:1,lineHeight:20}}> <Text style={{color:'#006FFF', textDecorationLine:'underline'}}>서비스정책 </Text>(세탁정책, 보상정책, 유실물처리방침)에 대한 동의</Text>
            </TouchableHighlight>
        )
      }
    },
    {
      active:false,
      description: () => {
        return(
            <TouchableHighlight onPress={()=>console.log('true')} underlayColor={'#f2f2f2'} style={{borderRadius:5}}>
              <Text style={{flex:1,lineHeight:20}}> <Text style={{color:'#006FFF', textDecorationLine:'underline'}}>개인정보 취급방침</Text>에 대한 동의</Text>
            </TouchableHighlight>            
        )
      }
    },
    {
      active:false,
      description: () => {
        return(
            <TouchableHighlight onPress={()=>console.log('true')} underlayColor={'#f2f2f2'} style={{borderRadius:5}}>
              <Text style={{flex:1,lineHeight:20}}><Text style={{color:'#006FFF', textDecorationLine:'underline'}}>생체정보</Text>사용에 대한 동의</Text>
            </TouchableHighlight>
        )
      }
    },
  ]

  const [agrmtModal, setAgrmtModal] = useState(false)
  const [checks, setChecks] = useState(agrmtList);
  const [couponList, setCouponList] = useState(false)

  const checkHandle = index => {
    const baseChecks = [...checks]
    baseChecks[index].active = !checks[index].active
    setChecks(baseChecks);
  }

  const AgrmtItem = ({item, index}) => {
    return(
      <View style={{flexDirection:'row',alignItems:'center', flex:1,borderWidth:1,borderColor:'#e2e2e2',borderRadius:5,marginBottom:5}}>
        <View style={{overflow:'hidden',paddingHorizontal:10,}}>
          <TouchableHighlight underlayColor={'#fff'} onPress={()=> checkHandle(index)}>
            {item.active === true ? <Icon name="check-circle" size={32} color={'#006FFF'}/> : <Icon name="check-circle" size={32} color={'#e2e2e2'}/> }
          </TouchableHighlight>
        </View>
        <View style={{borderLeftWidth:1,borderColor:'#e2e2e2',flex:1,padding:10,}}>
          {item.description()}
        </View>
      </View>
    )
  }

 

  return(
    <View style={{flex:1,}}>
      <ScrollView contentContainerStyle={{paddingVertical:20,}}>

        <Loading/>

        <View style={{paddingHorizontal:25,marginBottom:40}}>
          <Text style={{marginBottom:10,}}>수거/배달장소</Text>
          <View style={{borderWidth:1,borderRadius:5,borderColor:'#e2e2e2',marginBottom:40}}>
            <View style={{paddingHorizontal:15,height:40,justifyContent:'center',backgroundColor:'#f2f2f2'}}>
              <Text>우리집</Text>
            </View>
            <View style={{padding:15,borderTopWidth:1,borderColor:'#e2e2e2',}}>
              <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                <Text style={{width:80,color:'#9a9a9a'}}>주소지</Text>
                <Text style={{flex:1,lineHeight:20}}>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center',marginTop:6,}}>
                <Text style={{width:80,color:'#9a9a9a'}}>전화번호</Text>
                <Text style={{flex:1,lineHeight:20}}>010-0000-0000</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center',marginTop:6,}}>
                <Text style={{width:80,color:'#9a9a9a'}}>공동출입문</Text>
                <Text style={{flex:1,lineHeight:20}}> #1023</Text>
              </View>
            </View>
          </View>

    
          <Text style={{marginBottom:10,}}>선택한 상품</Text>
          <View style={{borderWidth:1,borderColor:'#e2e2e2',borderRadius:5,marginBottom:40}}>
            <View style={{padding:15}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{flex:1,}}>패딩</Text>
                <Text style={{flexBasis:50,textAlign:'center'}}>1</Text>
                <Text style={{flexBasis:80,textAlign:'right'}}>8,000원</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                <Text style={{flex:1,}}>와이셔츠</Text>
                <Text style={{flexBasis:50,textAlign:'center'}}>2</Text>
                <Text style={{flexBasis:80,textAlign:'right'}}>6,000원</Text>
              </View>
            </View>
          </View>

          <Text style={{marginBottom:10}}>쿠폰할인</Text>
          <TouchableOpacity
            onPress={()=> setCouponList(true)}
            style={{borderWidth:1,borderColor:'#e2e2e2',flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:40,borderRadius:5,paddingHorizontal:15}}
          >
            <Text>쿠폰선택</Text>
            <Icon name={'arrow-right'}/>
          </TouchableOpacity>

          <CouponModal visible={couponList} close={()=>setCouponList(false)} />

          <Text style={{marginBottom:10,marginTop:40}}>최종 결제정보</Text>
          <View style={{borderWidth:1,borderColor:'#e2e2e2',borderRadius:5,padding:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text>상품금액</Text>
              <Text>21,400 원</Text>
            </View>
            <View style={{marginTop:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text>할인금액</Text>
                <Text>- 6,000 원</Text>
              </View>
              <View style={{marginTop:10,marginLeft:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5,paddingVertical:2,backgroundColor:'#FBF2F2',marginBottom:8,borderRadius:3}}>
                  <Text style={{fontSize:12,color:'#888'}}>쿠폰할인</Text>
                  <Text style={{fontSize:12,color:'#d22828'}}>3,000원</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5,paddingVertical:2,backgroundColor:'#FBF2F2',marginBottom:8,borderRadius:3}}>
                  <Text style={{fontSize:12,color:'#888'}}>이벤트할인</Text>
                  <Text style={{fontSize:12,color:'#d22828'}}>3,000원</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <Text>수거/배송비</Text>
              <Text>0 원</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
              <Text>결제금액</Text>
              <Text><Text style={{fontSize:18,fontWeight:'bold'}}>18,840</Text>원</Text>
            </View>
          </View>


          <View style={{marginTop:15}}>
            <Text style={{fontSize:12}}>※ 수거 후 검수시 세탁물의 오염 정도에 따라 세탁비용이 추가발생 할 수 있으며 <Text style={{color:'#d22828'}}>추가 발생된 금액은 선택된 결제카드에 의해 자동 결제됩니다</Text></Text>
          </View>
        </View>


          {/* <View style={{paddingHorizontal:10,marginBottom:30}}>
            <Text style={{marginBottom:10,}}>쿠폰사용</Text>
            <View style={{borderWidth:1,borderRadius:5,borderColor:'#e2e2e2',padding:15}}>
              <Button mode="outlined" labelStyle={{color:'#292929',letterSpacing:-0.7}}>
                쿠폰을 선택해주세요
              </Button>
            </View>
          </View> */}


         <View style={{marginBottom:40,overflow:'hidden'}}>
           <Text style={{marginBottom:10,paddingHorizontal:25}}>결제카드 선택</Text>
            <View style={{backgroundColor:'#f2f2f2',paddingVertical:15}}>
              <Carousel
                data={cards}
                itemWidth={200}
                sliderWidth={sliderWidth}
                activeSlideAlignment={'start'}
                containerCustomStyle={{paddingLeft:25}}
                slideStyle={{marginRight:10}}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                layoutCardOffset={10}
                renderItem={({item, index})=> 
                  <CardItem item={item} index={index} cardHandle={cardHandle}/>
                }
              />
            </View>
         </View>

         <View style={{paddingHorizontal:25}}>

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
              <Text style={{marginBottom:10,}}>이용약관 동의</Text>
            </View>
            
            <View style={{borderWidth:1,borderColor:'#e2e2e2',borderRadius:5,marginBottom:40}}>
              <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderColor:'#e2e2e2',paddingVertical:10}}>
                  <Checkbox/>
                  <Text style={{fontWeight:'bold'}}>약관 전체동의</Text>
              </View>
              <View style={{paddingVertical:10,}}>
                <View style={{flex:1,justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingVertical:5}}>
                  <Checkbox/>
                  <Text style={{flex:1,paddingRight:15}}>서비스 정책(세탁정책, 보상정책, 유실물 처리방침)에 대한 동의</Text>
                  <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                    <Icon name="call-made" size={20} color={'#888'}/>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingVertical:5}}>
                  <Checkbox/>
                  <Text style={{flex:1,paddingRight:15}}>개인정보 취급방침에 대한 동의</Text>
                  <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                    <Icon name="call-made" size={20} color={'#888'}/>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingVertical:5}}>
                  <Checkbox/>
                  <Text style={{flex:1,paddingRight:15}}>생체정보 사용에 대한 동의</Text>
                  <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                    <Icon name="call-made" size={20} color={'#888'}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            

            <View>
              <Text style={{marginBottom:10,}}>주의사항</Text>
              <Text style={{marginBottom:10,color:'#9a9a9a',lineHeight:20}}>최소 주문금액은 14,900원 입니다 세탁비가 14,900원 미만이라도 14,900원이 청구됩니다</Text>
              <Text style={{marginBottom:10,color:'#9a9a9a',lineHeight:20}}>예약시간 1시간 전까지 취소 변경이 가능합니다 이후에는 취소 수수료 3천원이 발생합니다</Text>
              <Text style={{marginBottom:10,color:'#9a9a9a',lineHeight:20}}>케어라벨이 없거나, 세탁표기법상 드라이클리닝 및 물세탁이 모두 금지된 제품은 전문가가 소재와 상태를확인 후 세탁합니다. 다만, 이 때 세탁 결과에 대해서는 책임을 지지 않으니 유의해 주십시오</Text>
            </View>

            <Button
              mode="contained"
              icon="check"
              disabled={false}
              contentStyle={{height:50,}}
              labelStyle={{fontSize:16,fontWeight:'bold',letterSpacing:-0.7}}
              style={{marginTop:30,backgroundColor:'#d22828'}}
              onPress={()=>props.navigation.navigate('finish')}
            >
               예약완료하기
            </Button>
         </View>

         <AgrmtModal visible={agrmtModal} close={()=> setAgrmtModal(false)}/>
      </ScrollView>

      
               
    </View>
  )
}