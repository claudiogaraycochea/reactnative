import React, { Component } from 'react'
import { Image, ScrollView, Dimensions, Text, View } from 'react-native'
import { Theme } from './../../ui/Theme'
import Assets from './../../assets/'
import styled from 'styled-components/native'

/* Mock */

const monthsSubscriptions = [
  {
    id: '1',
    title: 'This Month\'s Spend',
    amount: '204',
    message: 'You’ve spent $124 less than last month',
    color: Theme.color.BLUE,
  },
  {
    id: '2',
    title: 'June\'s Spend',
    amount: '200',
    message: 'You’ve spent $120 less than last month',
    color: Theme.color.GREEN,
  }
]

/* Styles & Wrappers */

const HeroWrapper = styled.View`
  display: flex;
`

const HeroBox = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  borderRadius: 10;
  marginLeft: 20;
  marginRight: 20;
  marginBottom: 20;
`

const styles = {
  bgHeroBox : {
    width: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: null,
    height: null,
    borderRadius: 10,
    resizeMode: 'container'    
  },
  heroBoxBottom: {
    backgroundColor: '#022D42',
    height: 40,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBoxText:{
    title: {
      fontSize: 20,
      color: '#FFFFFF',
    },
    amount: {
      color: '#FFFFFF',
      fontSize: '32px',
      fontWeight: 'bold',
    },
    bottom: {
      color: '#FFFFFF',
      fontSize: '14px',
    }
  }
}

class HeroMonths extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    let dimensions = Dimensions.get('window');
    let imageHeight = Math.round((dimensions.width * 9) / 16)-60;
    let imageWidth = dimensions.width-40;

    return (
      <HeroWrapper>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          {monthsSubscriptions.map((monthSubscription) => {
            return (
              <HeroBox
                key={monthSubscription.id}
                style={{ 
                  backgroundColor: monthSubscription.color,
                  height: imageHeight,
                  width: imageWidth 
                }}
              >
                <Image
                  source={Assets.images.BG_WAVE}
                  style={styles.bgHeroBox}
                />
                <View>
                  <Text style={styles.heroBoxText.title} >{monthSubscription.title}</Text>
                </View>
                <View>
                  <Text style={styles.heroBoxText.amount}>{`€${monthSubscription.amount}`}</Text>
                </View>
                <View style={styles.heroBoxBottom}>
                  <Text style={styles.heroBoxText.bottom}>{monthSubscription.message}</Text>
                </View>
              </HeroBox>
            )
          })}
        </ScrollView>
      </HeroWrapper>
    )
  }
};

export default HeroMonths