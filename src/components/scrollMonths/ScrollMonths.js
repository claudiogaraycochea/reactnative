import React, { Component } from 'react'
import { Image, ScrollView, Dimensions, Text, View } from 'react-native'
import { H2 } from './../../ui/Theme'
import Assets from './../../assets/'
import styled from 'styled-components/native'

const HeroWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  backgroundColor: #234FA8;
  borderWidth: 0;
`

const HeroBox = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  borderRadius: 10;
  marginLeft: 20;
  marginBottom: 20;
`

class ScrollMonths extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 9) / 16)-60;
    let imageWidth = dimensions.width-40;
    return (
      <HeroWrapper>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <HeroBox
            style={{ 
              backgroundColor: '#3570ED',
              height: imageHeight,
              width: imageWidth 
            }}
          >
            <Image
              source={Assets.images.BG_WAVE}
              style={{
                height: 200,
                width: 100,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  flex: 1,
                  width: null,
                  height: null,
                  borderRadius: 10,
                  resizeMode: 'container'
                }}/>
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: '18px' }}>THIS MONTH’S SPEND</Text>
            </View>
            <View>
              <H2 style={{ color: '#FFFFFF'}}>€203</H2>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: '#022D42',
                right: 0,
                left: 0,
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
              }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: '16px' }}>You’ve spent $124 less than last month</Text>
            </View>
          </HeroBox>
          <HeroBox
            style={{ 
              backgroundColor: '#00DB8C',
              height: imageHeight,
              width: imageWidth 
            }}
          >
            <Image
              source={Assets.images.BG_WAVE}
              style={{
                height: 200,
                width: 100,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  flex: 1,
                  width: null,
                  height: null,
                  borderRadius: 10,
                  resizeMode: 'container'
                }}/>
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: '18px' }}>THIS MONTH’S SPEND</Text>
            </View>
            <View>
              <H2 style={{ color: '#FFFFFF'}}>€203</H2>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: '#022D42',
                right: 0,
                left: 0,
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
              }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: '16px' }}>You’ve spent $124 less than last month</Text>
            </View>
          </HeroBox>
          <HeroBox
            style={{ 
              backgroundColor: '#00DB8C',
              height: imageHeight,
              width: imageWidth 
            }}
          >
            <Image
              source={Assets.images.BG_WAVE}
              style={{
                height: 200,
                width: 100,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  flex: 1,
                  width: null,
                  height: null,
                  borderRadius: 10,
                  resizeMode: 'container'
                }}/>
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: '18px' }}>THIS MONTH’S SPEND</Text>
            </View>
            <View>
              <H2 style={{ color: '#FFFFFF'}}>€203</H2>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: '#022D42',
                right: 0,
                left: 0,
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
              }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: '16px' }}>You’ve spent $124 less than last month</Text>
            </View>
          </HeroBox>
        </ScrollView>
      </HeroWrapper>
    )
  }
};

export default ScrollMonths