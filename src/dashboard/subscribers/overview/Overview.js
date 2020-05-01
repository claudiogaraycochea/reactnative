import React, { Component } from 'react'
import { Image } from 'react-native'
import {
  Container,
  ItemWrapper,
  Col,
  ButtonCircle,
  ButtonSimple,
  H3,
} from './../../../ui/Theme'
import Assets from '../../../assets'
import { connect } from 'react-redux';

class SubscribersOverview extends Component {

  constructor(){
    super();
    this.state = {
    }
  }

  updateSubscriber = (id) => {
    this.props.navigation.navigate('UpdateSubscriber', { id })
  }

  addSubscriber = () => {
    this.props.navigation.navigate('AddSubscriber')
  }

  render() {
    const { subscribers } = this.props;
    return (
      <Container>
        {subscribers.map((subscriber) => {
          return (
            <ItemWrapper key={subscriber.id}>
              <Col col={15}>
                <Image
                  resizeMode="contain"
                  style={{ width: 32, height: 32 }}
                  source={subscriber.icon}
                />
              </Col>
              <Col col={45}>
                <H3>{subscriber.name}</H3>
              </Col>
              <Col col={20}>
                <H3>€{subscriber.amount}</H3>
              </Col>
              <Col col={20} justify={'flex-end'}>
                <ButtonCircle
                  icon={Assets.images.PLUS}
                  onPress={()=>this.updateSubscriber(subscriber.id)}
                />
              </Col>
            </ItemWrapper>
          )
        })}
        <ItemWrapper style={{justifyContent: 'center'}}>
          <ButtonSimple
            icon={Assets.images.PLUS}
            onPress={()=>this.addSubscriber()}
            title='Add Subscription'
          >
            Add Subscriber
          </ButtonSimple>    
        </ItemWrapper>
      </Container>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    subscribers: state.subscriberReducer.subscriberList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteSubscribers(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribersOverview);