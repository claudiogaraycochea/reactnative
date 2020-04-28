import React, { Component } from 'react'
import { Image } from 'react-native'
import { 
  Container,
  SubHeader,
  BoxWrapper,
  Row,
  H3,
  Text,
  Input,
  ButtonSimple,
  Theme
} from './../../../ui/Theme'
import Assets from '../../../assets'

class NewSubscriber extends Component {

  constructor(){
    super();
    this.state = {
    }
  }

  login = () => {
    this.props.navigation.navigate('SubscriberOverview')
  }

  render() {
    return (
      <Container>
        <SubHeader>
          <H3 color={Theme.color.PRIMARY}>New Subscription</H3>
        </SubHeader>
        <BoxWrapper>
          <Row>
            <Image
              resizeMode="contain"
              style={{ width: 68, height: 68 }}
              source={Assets.images.WATER}
            />
          </Row>
          <Row>
            <H3>Water</H3>
            <Text fontSize={Theme.fontSize.SMALL}>
              This service is provided monthly. Check how 
              <Text fontSize={Theme.fontSize.SMALL} color={Theme.color.PRIMARY}> economize water</Text>.
            </Text>
          </Row>
          <Row>
            <Input
              ref={(input) => { this.inputBagdeid = input; }}
              onChangeText={(badgeid) => this.setState({badgeid})}
              placeholder= '0,00'
            />
          </Row>
          <Row>
            <ButtonSimple
              onPress={this.login}
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

export default NewSubscriber