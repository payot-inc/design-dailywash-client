import React, { Component, useState } from 'react';
import {View, Text, Dimensions, Image, Animated, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export default props => {

    const [activeSlide, setActiveSlide] = useState(0);
    
    const mainVisualData = [
        {
            
            text1:'어느 동네 사세요?',
            text2:'빠르고 쉽게 우리동네 세탁전문가를 만나보세요!',
            image:require('../assets/img/main-visual01.png'),
        },
        {
            text1:'빨래가 많이 쌓였나요?',
            text2:'오늘은 빨래하기 좋은 날이에요',
            image:require('../assets/img/main-visual02.png'),
        }
    ]
    

    const sliderWidth = Dimensions.get('window').width;


    return(
        <View>
            <View style={{
                marginHorizontal:20,
                overflow:'hidden',
                position:'relative',zIndex:2
            }}>
                <Carousel
                    layout={'default'}
                    layoutCardOffset={0}
                    data={mainVisualData}
                    itemWidth={sliderWidth-20}
                    sliderWidth={sliderWidth-20}
                    inactiveSlideScale={1}
                    loop={true}
                    zIndex={1}
                    autoplayDelay={5000}
                    autoplayInterval={5000}
                    autoplay={true}
                    renderItem={({item, index})=>
                        <View style={{height:400,zIndex:1}}>
                            <View style={styles.visualText}>
                                <Text style={{color:'#292929',fontSize:24,fontWeight:'bold'}}>{item.text1}</Text>
                                <Text style={{color:'#888',fontSize:16,marginTop:5}}>{item.text2}</Text>
                            </View>
                            <View style={{height:320,alignItems:'center'}}>
                                <Image source={item.image} resizeMode="contain" style={{width:'100%',height:'100%'}}/>
                            </View>
                        </View>
                    }
                    onSnapToItem={
                        (index) => setActiveSlide(index)
                    } 
                />

                <Pagination 
                    dotsLength={mainVisualData.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{
                        position:'absolute',
                        top:80,
                        left:-20,
                        width:'100%',
                        justifyContent:'flex-start',
                        zIndex:2,
                    }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor:'#01a1dd'
                    }}
                    inactiveDotStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />


            
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    visualText:{
        paddingTop:20,
    },
})