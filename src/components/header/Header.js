import React, { Component } from 'react'
import { Image } from 'react-native'
import { ButtonIcon } from './../../ui/Theme'
import Assets from '../../assets'
import styled from 'styled-components/native'

const HeadWrapper = styled.View`
  margin-top: 20;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  borderBottomWidth: 1;
  backgroundColor: #234FA8;
  borderColor: #EBF0F1;
`

class Header extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <HeadWrapper>
        <ButtonIcon
          icon={Assets.images.MENU}
          onPress={() => null}
        />
        <Image
          resizeMode="contain"
          style={{ height: 32, width: 200 }}
          source={Assets.images.LOGO}
        />
        <ButtonIcon
          icon={Assets.images.USER}
          onPress={() => null}
        />
      </HeadWrapper>
    )
  }
};

export default Header