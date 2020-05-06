import React, { Component } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Assets from './../../assets/'
import styled from 'styled-components/native'

/* Mock */
const commingUpData = [
  {
    icon: Assets.images.GAS,
    time: 'In 9 days',
    amount: '10,20',
  },
  {
    icon: Assets.images.WATER,
    time: 'In 2 days',
    amount: '20,00',
  },
  {
    icon: Assets.images.INTERNET,
    time: 'In 5 days',
    amount: '12,20',
  },
  {
    icon: Assets.images.OIL,
    time: 'In 7 days',
    amount: '18,00',
  },
]


/* Styles & Wrappers */

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
  width: 140;
  height: 60;
  borderRadius: 10;
  marginLeft: 20;
`

const styles = {
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  time: {
    fontSize: 12,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold'
  }
}

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
        >
          {commingUpData.map((commingUp) => {
            return (
              <CommingUpBox>
                <Image
                  resizeMode="contain"
                  style={styles.icon}
                  source={commingUp.icon}
                />
                <View>
                  <Text style={styles.time}>{commingUp.time}</Text>
                  <Text style={styles.amount}>{`€${commingUp.amount}`}</Text>
                </View>
              </CommingUpBox>             
            )
          })}
        </ScrollView>
      </CommingUpWrapper>
    )
  }
};

export default CommingUp