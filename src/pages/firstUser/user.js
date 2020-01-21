import React, { useEffect, useState, createRef } from 'react';
import {View, Text, TextInput, TouchableHighlight, FlatList, Animated, Dimensions } from 'react-native';
import {Button, IconButton,}  from 'react-native-paper';
import lodash from 'lodash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props => {

  const spotData = lodash.range(10).map(() => 
    ({
      roadName:'부산광역시 북구 구남언덕로 15',
      numberAddress:'부산광역시 북구 구포동 923-19',
    }),
  );

  
  const lineScale = new Animated.Value(0);
  
  const lineHandle = () => {
    Animated.timing(lineScale, 
      {
        toValue: Dimensions.get('screen').width - (2 * 30),
        duration:500,
      }
    ).start();
  };

  const myRef = createRef();

  const node = () =>  myRef.current.focus();

  console.log(myRef);



  return(
    <View style={{flex:1,backgroundColor:'#F4F5F8',padding:30,paddingTop:0,position:'relative'}}>
      <View style={{flex:1,}}>
        <View style={{borderBottomWidth:1,borderColor:'#d2d2d2',flexDirection:'row'}}>
          <TextInput
            ref={myRef}
            style={{flex:1,height:50,paddingHorizontal:10}}
            placeholder="건물명, 도로명, 지번으로 검색하세요"
            onFocus={lineHandle}
            value="안녕"
          />
          <IconButton icon="magnify"/>
        </View>

        <Animated.View style={{width:lineScale,height:2,backgroundColor:'#03C1E8'}}/>

        <FlatList
          data={spotData}
          style={{marginTop:20,}}
          ListHeaderComponent={()=>
            <View>
              <Text>검색결과</Text>
            </View>
          }
          renderItem={({item}) =>
            <TouchableHighlight
              underlayColor={'#f2f2f2'}
              onPress={()=>{}}
            >
              <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderColor:'#e2e2e2',paddingVertical:15}}>
                <Icon name="map-marker" size={28} style={{width:40,}} color={'#03C1E8'}/>
                <View>
                  <Text style={{fontSize:16}}>{item.roadName}</Text>
                  <Text style={{fontSize:13,color:'#8a8a8a',marginTop:2}}>{item.numberAddress}</Text>
                </View>
              </View>
            </TouchableHighlight>
          }
          keyExtractor={item => item.index}
        />
      </View>
      <View style={{flexBasis:50}}>
        <Button 
          onPress={()=> props.navigation.navigate('user')}
          style={{backgroundColor:'#03C1E8',justifyContent:'center',elevation:0,borderRadius:25}}
          contentStyle={{height:50,}}
          labelStyle={{color:'#fff',fontSize:16,fontWeight:'bold',letterSpacing:-0.7}}
        >
          다음
        </Button>
      </View>
    </View>
  )
}