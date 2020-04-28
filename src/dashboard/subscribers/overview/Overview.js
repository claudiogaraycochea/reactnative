import React, { Component } from 'react'
import { Image } from 'react-native'
import {
  Container,
  ItemWrapper,
  Col,
  ButtonCircle,
  H3,
} from './../../../ui/Theme'
import Assets from '../../../assets'

const subscribers = [
  {
    id: '1',
    name: 'Water',
    amount: '0.0',
    icon: Assets.images.WATER,
  },
  {
    id: '2',
    name: 'Gas',
    amount: '12.0',
    icon: Assets.images.GAS,
  },
  {
    id: '3',
    name: 'Energy',
    amount: '20.0',
    icon: Assets.images.ENERGY,
  },
  {
    id: '4',
    name: 'Oil',
    amount: '15.0',
    icon: Assets.images.OIL,
  },
  {
    id: '5',
    name: 'Internet',
    amount: '20.0',
    icon: Assets.images.INTERNET,
  },
  {
    id: '6',
    name: 'Mobile',
    amount: '10.0',
    icon: Assets.images.MOBILE,
  },
  {
    id: '7',
    name: 'House Insurance',
    amount: '8.0',
    icon: Assets.images.HOUSE_INSURANCE,
  },
]

class SubscribersOverview extends Component {

  constructor(){
    super();
    this.state = {
    }
  }

  signUp = () => {
    this.props.navigation.navigate('NewSubscriber')
  }

  render() {
    return (
      <Container>
        {subscribers.map((subscriber) => {
          return (
            <ItemWrapper>
              <Col col={20}>
                <Image
                  resizeMode="contain"
                  style={{ width: 32, height: 32 }}
                  source={subscriber.icon}
                />
              </Col>
              <Col col={40}>
                <H3>{subscriber.name}</H3>
              </Col>
              <Col col={20}>
                <H3>€{subscriber.amount}</H3>
              </Col>
              <Col col={20} justify={'flex-end'}>
                <ButtonCircle
                  icon={Assets.images.PLUS}
                  onPress={this.signUp}
                />
              </Col>
            </ItemWrapper>
          )
        })}
      </Container>
    )
  }
};

export default SubscribersOverview;