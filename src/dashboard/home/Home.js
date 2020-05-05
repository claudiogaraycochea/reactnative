import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { ContainerFix, Row } from './../../ui/Theme'
import { connect } from 'react-redux'
import ScrollMonths from '../../components/scrollMonths/ScrollMonths'
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
    let dimensions = Dimensions.get("window");
    let imageHeight = (dimensions.height-158)/2;
    let imageWidth = dimensions.width-40;
    return (
      <ContainerFix>
        <View 
          style={{
            backgroundColor: '#234FA8',
            height: (imageHeight)+42,
            borderColor: 'blue',
            borderWidth: 0,
            display: 'fix',
          }}
        >
            <ScrollMonths />
          
            <CommingUp />
        </View>
        <View
          style={{
            borderColor: 'blue',
            borderWidth: 0,
            height: imageHeight,
            position: "relative",
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

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteSubscribers(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);