import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import { ContainerFix } from './../../ui/Theme'
import { connect } from 'react-redux'

/* Components */
import HeroMonths from '../../components/heroMonths/HeroMonths'
import CommingUp from '../../components/commingUp/CommingUp'
import DetailMonth from '../../components/detailMonth/DetailMonth'

class Home extends Component {
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
    let dimensions = Dimensions.get('window');
    let imageHeight = (dimensions.height-158)/2;

    return (
      <ContainerFix>
        <View 
          style={{
            backgroundColor: '#234FA8',
            height: (imageHeight)+42,
          }}
        >
          <HeroMonths />
          <CommingUp />
        </View>
        <View
          style={{
            height: imageHeight,
            position: 'relative',
            top: -40,
          }}
        >
          <DetailMonth />
        </View>
      </ContainerFix>
    )
  }
};

const mapStateToProps = (state ) => {
  return {
    subscribers: state.subscriberReducer.subscriberList
  }
}

export default connect(mapStateToProps, null)(Home);