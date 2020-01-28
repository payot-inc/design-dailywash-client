import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const visualData = [
  {
    text: '슬라이드1',
  },
  {
    text: '슬라이드2',
  },
  {
    text: '슬라이드3',
  },
];

const sliderWidth = Dimensions.get('window').width;

export default class MainVisualSecond extends React.Component {
  state = {
    activeSlide: 0,
  };

  render() {
    return (
      <View style={{height:150}}>
        <Carousel
          layout={'default'}
          layoutCardOffset={'10'}
          data={visualData}
          itemWidth={sliderWidth-50}
          sliderWidth={sliderWidth-50}
          inactiveSlideScale={1}
          loop={true}
          autoplayDelay={5000}
          autoplayInterval={5000}
          autoplay={true}
          activeAnimationOptions={''}
          renderItem={({item, index}) => (
            <View
              style={{
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#396eee',
              }}>
              <Text style={{fontSize: 24, color: '#292929'}}>{item.text}</Text>
            </View>
          )}
          onSnapToItem={index => this.setState({activeSlide: index})}
        />

        <Pagination
          dotsLength={visualData.length}
          activeDotIndex={this.state.activeSlide}
          containerStyle={{
            position: 'absolute',
            zIndex: 99,
            right: 10,
            top: -10,
          }}
          dotStyle={{
            width: 8,
            height: 8,
            marginHorizontal: -3,
            borderRadius: 3.5,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
}
