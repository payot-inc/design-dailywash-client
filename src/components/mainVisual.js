import React, { Component } from 'react';
import {View, Text, Dimensions, Image, Animated} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import faker from 'faker';


const mainVisualData = [
    {
        text:'슬라이드1',
        image:'../assets/main01.png',
    },
    {
        text:'슬라이드2',
        image:'../assets/main01.png',
    }
]
   

const sliderWidth = Dimensions.get('window').width;


export default class MainVisual extends React.Component {

    state = {
        activeSlide:0,
    }

    render(){
        return(
 
            <View style={{
                zIndex:10,
                marginHorizontal:15,
                elevation:10,
                backgroundColor:'#f2f2f2',
                borderRadius:10,
                overflow:'hidden'
            }}>
                <Carousel
                    layout={'default'}
                    layoutCardOffset={'18'}
                    data={mainVisualData}
                    itemWidth={sliderWidth-30}
                    sliderWidth={sliderWidth-30}
                    inactiveSlideScale={1}
                    loop={true}
                    autoplayDelay={5000}
                    autoplayInterval={5000}
                    autoplay={true}
                    renderItem={({item, index})=>
                        <View style={{height:360,alignItems:'center',justifyContent:'center',overflow:'hidden',backgroundColor:'#f2f2f2',}}>
                            <Image source={require('../assets/img/main01.png')} resizeMode="center" style={{height:'100%'}}/>
                        </View>
                    }
                    onSnapToItem={(index) => this.setState({activeSlide:index})} 
                />

                <Pagination 
                    dotsLength={mainVisualData.length}
                    activeDotIndex={this.state.activeSlide}
                    containerStyle={{position:'absolute',bottom:0,width:'100%'}}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }}
                    inactiveDotStyle={{
                        // Define styles for inactive dots here
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                
            </View>
        );

    }
}
