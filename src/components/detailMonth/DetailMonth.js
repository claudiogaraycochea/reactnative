import React, { Component } from 'react'
import { Image, Text, ScrollView, View } from 'react-native'
import {
  Container,
  ItemWrapper,
  Col,
  Row,
  ButtonCircle,
  ButtonSimple,
  H3,
} from './../../ui/Theme'
import Assets from '../../assets/'
import { connect } from 'react-redux';
import styled from 'styled-components/native'

const DetailMonthWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  backgroundColor: #FFFFFF;
  borderWidth: 0;
  borderTopLeftRadius: 10;
  borderTopRightRadius: 10;
  box-shadow: 0px 0px 5px black;
`

class DetailMonth extends Component {

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
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
          <DetailMonthWrapper>
            <ScrollView
              showsHorizontalScrollIndicator={false}
            >
              {subscribers.map((subscriber) => {
                return (
                  <ItemWrapper key={subscriber.id}>
                    <Col col={15}>
                      <Image
                        resizeMode="contain"
                        style={{ width: 20, height: 20 }}
                        source={subscriber.iconStatus}
                      />
                    </Col>
                    <Col col={65}>
                      <Text
                        style={{
                          fontSize: '18'
                        }}
                      >{subscriber.name}</Text>
                    </Col>
                    <Col col={20} justify={'flex-end'}>
                      <Text
                        style={{
                          fontSize: '18',
                          fontWeight: 'bold'
                        }}
                      >€{subscriber.amount}</Text>
                    </Col>
                  </ItemWrapper>
                )
              })}
            </ScrollView>
          </DetailMonthWrapper>
      </View>
    )
  }
};

const mapStateToProps = (state ) => {
  return {
    subscribers: state.subscriberReducer.subscriberList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteSubscribers(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMonth);