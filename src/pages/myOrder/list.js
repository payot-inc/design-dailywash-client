import React, {Component} from 'react';
import {View, Text, SectionList, Picker, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Lodash from 'lodash';
import Faker from 'faker/locale/ko';
import Moment from 'moment';
import numeral from 'numeral';
import SubHeader from '../../components/subHeader';


function orderInfo() {
  const count = Faker.random.number({min: 1, max: 2})
  return Lodash.range(count).map(index => ({
    deliveryState: '배송완료',
    goodsName: '생활빨래 80리터 외 3',
    avata: Faker.image.abstract(),
    amount: Faker.random.number({ min: 2000, max: 50000, precision: 1000 }),
    isCancel: Faker.random.boolean(),
  }));
}

function dateList(targetMonth, count) {
  return Lodash.chain()
    .range(count)
    .map(() => Faker.random.number({min: 1, max: 30}))
    .uniq()
    .map(day => {
      return {
        dataName: Moment(targetMonth).startOf('month').add(day - 1, 'day'),
        data: orderInfo(),
      };
    })
    .orderBy(['dataName'])
    .reverse()
    .value();
}

// const DATA = Lodash.range(12).map(index => {
//     const ramdomNum = Faker.random.number({min:1, max:10});
//     const randomMonth = Moment().startOf('year').add(index, 'month')
//     return {
//         month: randomMonth.format('MMM'),
//         dateList: dateList(randomMonth, ramdomNum),
//     }
// })

export default class MyOrderList extends React.Component {
  state = {
    selectMonth: Number(Moment().format('M')) - 1,
    list: Lodash.range(12).map(index => {
      const ramdomNum = Faker.random.number({min: 1, max: 5});
      const randomMonth = Moment().startOf('year').add(index, 'month');
      return {
        title: randomMonth.format('MMM'),
        dateList: dateList(randomMonth, ramdomNum),
      };
    }),

    dummyList: Lodash.range(5).map(index => {
      return {
        title: `${index + 1} 번째`,
        data: Lodash.range(4),
      };
    }),
  };

  render() {
    console.log('refresh');
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <SubHeader navigation={this.props.navigation} title={'이용내역'} />

        <View
          style={{
            height: 50,
            borderBottomWidth: 1,
            borderColor: '#d2d2d2',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Text style={{marginRight:10}}>타임라인</Text>
          <View>
          <Picker
            style={{height:50,width:100,}}
            mode={'dialog'}
            selectedValue={this.state.selectMonth}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({selectMonth: itemValue});
            }}>
            {Lodash.range(12).map(index => (
              <Picker.Item
                value={index}
                label={`${index + 1}월`} 
                style={{fontSize:12}}
              />
            ))}
          </Picker>
          </View>
        </View>

        <View style={{flex: 1, backgroundColor: '#F5F6F8',}}>
          <SectionList
            style={{paddingHorizontal:15}}
            sections={this.state.list[this.state.selectMonth].dateList}
            keyExtractor={(item, index) => index}
            renderSectionHeader={({section}, index) => (
              <Text style={{marginTop:20,marginBottom:15,fontSize:16}}>{section.dataName.format('D일')}</Text>
            )}
            renderItem={({item}) => (
                <TouchableHighlight
                    style={{marginBottom:15,borderRadius:10,}}
                    onPress={() => this.props.navigation.navigate('myOrderDetail', { item: item })}
                >
                    <View style={{borderWidth:1,borderRadius:10,minHeight:120,padding:15,borderColor:'#d2d2d2',backgroundColor:'#fff'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize:11,borderWidth:1,borderColor:'#21D1FF',paddingHorizontal:3,borderRadius:3,color:'#21D1FF'}}>배송완료</Text>
                            <Text style={{fontSize:12,color:'#9a9a9a'}}>2019.08.11 12:45</Text>
                        </View>
                        <Text style={{fontSize:16,marginTop:10,}}>{item.goodsName}</Text>
                        <Text style={{fontSize:18,fontWeight:'bold',marginTop:3}}>{numeral(item.amount).format('0,0')}원</Text>

                        {item.isCancel && 
                        <TouchableOpacity style={{marginTop:10}}>
                          <View style={{borderWidth:1,borderColor:'#d2d2d2',borderRadius:5,flexDirection:'row',justifyContent:'space-between',height:40,paddingHorizontal:10,alignItems:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{marginRight:5,color:'#9a9a9',fontSize:12}}>취소가능시간</Text>
                                <Text style={{color:'#1E1FE8',fontSize:12}}>29분 남음</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                              <Text style={{marginRight:5,fontSize:12}}>취소하기</Text>
                              <Icon name={'angle-right'} size={18} color={'#d2d2d2'}></Icon>
                            </View>
                          </View>
                        </TouchableOpacity> }
                    </View>
                </TouchableHighlight>
            )}
            ListEmptyComponent={()=>
                <View>
                    <Text>이용내역이 없습니다</Text>
                </View>
            }
        >

            </SectionList>
        </View>
      </View>
    );
  }
}
