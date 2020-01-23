import React from 'react';
import { Dimensions, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';



export default props => {

    const carouselData = [
        {
            state:'수거완료',
            title:'생활빨래 80리터 외 3',
            date:'2019.08.11 12:45',
            counter:'1시간 33분 남음',
        },
        {
            state:'배송중',
            title:'와이셔츠 외 3',
            date:'2019.08.11 12:45',
            counter:'1시간 33분 남음',
        },
        {
            state:'배송중',
            title:'와이셔츠 외 3',
            date:'2019.08.11 12:45',
            counter:'1시간 33분 남음',
        },
    ]
    
    const sliderWidth = Dimensions.get('window').width;

    return(
        <View style={{backgroundColor:'#f2f2f2',paddingVertical:20,}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:16,marginRight:10,}}>최근 주문내역</Text>
    <Text style={{height:16,lineHeight:16,borderRadius:8,backgroundColor:'#fff',color:'#396eee',paddingHorizontal:10,fontWeight:'bold'}}>{carouselData.length}</Text>
                </View>
                <TouchableOpacity onPress={()=> props.navigation.navigate('myOrder')}>
                    <Text>전체보기</Text>
                </TouchableOpacity>
            </View>

            <Carousel
                data={carouselData}
                itemWidth={290}
                sliderWidth={sliderWidth}
                activeSlideAlignment={'start'}
                containerCustomStyle={{paddingLeft:20,paddingTop:15,}}
                slideStyle={{marginRight:15}}
                inactiveSlideScale={1}
                layoutCardOffset={30}
                renderItem={({item, index})=>
                    <View style={{
                        borderRadius:10,
                        backgroundColor:'#fff',
                        height:180,
                        borderWidth:1,
                        borderColor:'#e2e2e2',
                        justifyContent:'space-between',
                        overflow:'hidden',
                    }}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:1,borderColor:'#e2e2e2',height:40,paddingHorizontal:10}}>
                            <Text style={{fontSize:12,borderWidth:1,borderRadius:3,paddingHorizontal:3,color:'#396eee',borderColor:'#396eee',letterSpacing:-1}}>{item.state}</Text>
                            <Text style={{fontSize:12,color:'#9a9a9a'}}>{item.date}</Text>
                        </View>
                        <View style={{flex:1,justifyContent:'center',paddingHorizontal:10}}>
                            <Text style={{fontSize:16,}}>{item.title}</Text>
                            <Text style={{marginTop:3,textAlign:'right',fontWeight:'bold'}}>39,600원</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,backgroundColor:'#f2f2f2',padding:5,borderRadius:3}}>
                                <Text style={{color:'#9a9a9a',fontSize:12,marginRight:10}}>취소가능시간</Text>
                                <Text style={{color:'#d22828',fontSize:12,}}>{item.counter}</Text>
                            </View>           
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-around',borderTopWidth:1,borderTopColor:'#e2e2e2',backgroundColor:'#fff'}}>
                            <TouchableHighlight 
                                onPress={()=> props.navigation.navigate('myOrderDetail')}
                                style={{flex:1,alignItems:'center',justifyContent:'center',height:40}}>
                                <Text style={{color:'#292929'}}>상세보기</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center',height:40}}>
                                <Text style={{color:'#292929'}}>취소하기</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                }
            />
        </View>
    )

}