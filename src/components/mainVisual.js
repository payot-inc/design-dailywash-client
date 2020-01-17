import React, { Component } from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
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
            <>
                <Carousel
                    layout={'default'}
                    data={mainVisualData}
                    itemWidth={sliderWidth}
                    sliderWidth={sliderWidth}
                    inactiveSlideScale={1}
                    loop={true}
                    autoplayDelay={5000}
                    autoplayInterval={5000}
                    autoplay={true}
                    renderItem={({item, index})=>
                        <View style={{borderRadius:10,height:400,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/main01.png')} style={{width:'100%',height:'100%'}}/>
                        </View>
                    }
                    onSnapToItem={(index) => this.setState({activeSlide:index})}              
                />

                <Pagination 
                    dotsLength={mainVisualData.length}
                    activeDotIndex={this.state.activeSlide}
                    containerStyle={{position:'absolute',bottom:0}}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)'
                    }}
                    inactiveDotStyle={{
                        // Define styles for inactive dots here
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                
            </>
        );

    }
}
