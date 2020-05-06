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
import { addSubscriber } from '../../../actions/subscribers'
import Assets from '../../../assets/'

class AddSubscriber extends Component {

  constructor(){
    super();
    this.state = {
      name: null,
      amount: null,
      icon: null,
    }
  }

  componentWillMount() {
    this.setState({
      icon: Assets.images.SERVICES
    })
  }

  addSubscriber = () => {
    const { name, amount, icon } = this.state;
    const newSubscriber = {
      name,
      amount,
      icon,
    };
    this.props.add(newSubscriber);
    this.props.navigation.navigate('Home', { refresh:  Math.random() })
  }

  render() {
    const { name, icon, amount } = this.state;
    return (
      <Container>
        <SubHeader>
          <H3 color={Theme.color.PRIMARY}>Add Subscriber</H3>
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
              onChangeText={(name) => this.setState({name})}
              value={name}
            />
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
              onPress={this.addSubscriber}
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
    add: (newSubscriber) => dispatch(addSubscriber(newSubscriber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubscriber);