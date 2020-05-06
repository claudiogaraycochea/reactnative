import React, { Component } from 'react'
import { Image, Text, ScrollView } from 'react-native'
import {
  ItemWrapper,
  Col,
} from './../../ui/Theme'
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
  marginLeft: 20;
  marginRight: 20;
`

const styles = {
  diamonds: {
    width: 20,
    height: 20,
  },
  name: {
    fontSize: 18,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  }
}

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
                    style={styles.diamonds}
                    source={subscriber.iconStatus}
                  />
                </Col>
                <Col col={65}>
                  <Text style={styles.name}>{subscriber.name}</Text>
                </Col>
                <Col col={20} justify={'flex-end'}>
                  <Text style={styles.amount}>€{subscriber.amount}</Text>
                </Col>
              </ItemWrapper>
            )
          })}
        </ScrollView>
      </DetailMonthWrapper>
    )
  }
};

const mapStateToProps = (state ) => {
  return {
    subscribers: state.subscriberReducer.subscriberList
  }
}

export default connect(mapStateToProps, null)(DetailMonth);