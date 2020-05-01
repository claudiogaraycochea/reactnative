import React, { Component } from 'react'
import { Image } from 'react-native'
import { 
  Container,
  SubHeader,
  BoxWrapper,
  Row,
  H3,
  Text,
  InputFormat,
  ButtonSimple,
  Theme
} from './../../../ui/Theme'
import { connect } from 'react-redux'
import { updateSubscriber } from '../../../actions/subscribers'
import { getSubcriberLib }  from '../../../libs/polaroo/PolarooLib'

class UpdateSubscriber extends Component {

  constructor(){
    super();
    this.state = {
      amount: null,
      id: null,
    }
  }

  componentWillMount() {
    const { id } = this.props.route.params
    const { subscribers } = this.props
    const subscriber = getSubcriberLib(subscribers, { id })
    this.setState({
      id,
      name: subscriber.name,
      icon: subscriber.icon,
      amount: subscriber.amount
    })
  }

  updateSubscriber = () => {
    const { id, amount } = this.state;
    this.props.update(id, amount);
    this.props.navigation.navigate('SubscriberOverview', { refresh:  Math.random() })
  }

  render() {
    const { name, icon, amount } = this.state;
    return (
      <Container>
        <SubHeader>
          <H3 color={Theme.color.PRIMARY}>Update Subscription</H3>
        </SubHeader>
        <BoxWrapper>
          <Row>
            <Image
              resizeMode="contain"
              style={{ width: 68, height: 68 }}
              source={icon}
            />
          </Row>
          <Row>
            <H3>{name}</H3>
            <Text fontSize={Theme.fontSize.SMALL}>
              This service is provided monthly. Check how 
              <Text fontSize={Theme.fontSize.SMALL} color={Theme.color.PRIMARY}> economize water</Text>.
            </Text>
          </Row>
          <Row>
            <InputFormat
              onChangeText={(amount) => this.setState({amount})}
              textAlign={'right'}
              keyboardType={'decimal-pad'}
              value={amount}
            />
          </Row>
          <Row>
            <ButtonSimple
              onPress={this.updateSubscriber}
              title="Accept"
            >
              Accept
            </ButtonSimple>
          </Row>
        </BoxWrapper>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subscribers: state.subscriberReducer.subscriberList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (id, amount) => dispatch(updateSubscriber(id, amount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSubscriber);