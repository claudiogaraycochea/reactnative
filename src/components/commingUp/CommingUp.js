import React, { Component } from 'react'
import { Image, ScrollView, Dimensions, Text, View } from 'react-native'
import { Row, Col } from './../../ui/Theme'
import Assets from './../../assets/'
import styled from 'styled-components/native'

const CommingUpWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  backgroundColor: #234FA8;
  borderWidth: 0;
`

const CommingUpBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  backgroundColor: #FFFFFF;
  borderWidth: 0;
  width: 180;
  height: 60;
  borderRadius: 10;
  marginLeft: 20;
`

class CommingUp extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <CommingUpWrapper>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <CommingUpBox>
            <Image
              resizeMode="contain"
              style={{ width: 24, height: 24, marginRight: 10 }}
              source={Assets.images.GAS}
            />
            <View>
              <Text style={{ fontSize: '12' }}>In 9 days</Text>
              <Text style={{ fontSize: '16', fontWeight: 'bold' }}>$10,99</Text>
            </View>
          </CommingUpBox>
          <CommingUpBox>
            <Image
              resizeMode="contain"
              style={{ width: 24, height: 24, marginRight: 10 }}
              source={Assets.images.WATER}
            />
            <View>
              <Text style={{ fontSize: '12' }}>In 9 days</Text>
              <Text style={{ fontSize: '16', fontWeight: 'bold' }}>$12,50</Text>
            </View>
          </CommingUpBox>
          <CommingUpBox>
            <Image
              resizeMode="contain"
              style={{ width: 24, height: 24, marginRight: 10 }}
              source={Assets.images.WATER}
            />
            <View>
              <Text style={{ fontSize: '12' }}>In 9 days</Text>
              <Text style={{ fontSize: '16' }}>$12,50</Text>
            </View>
          </CommingUpBox>
        </ScrollView>
      </CommingUpWrapper>
    )
  }
};

export default CommingUp