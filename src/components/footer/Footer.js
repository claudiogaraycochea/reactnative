import React, { Component } from 'react'
import styled from 'styled-components/native'
import { ButtonIcon } from './../../ui/Theme'
import Assets from '../../assets'

export const FooterWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  borderTopWidth: 1;
  borderColor: #EBF0F1;
`

class Footer extends Component {

  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <FooterWrapper>
        <ButtonIcon
          icon={Assets.images.HOME}
          onPress={() => null}
        />
        <ButtonIcon
          icon={Assets.images.CALENDAR}
          onPress={() => null}
        />
        <ButtonIcon
          icon={Assets.images.DISCOUNT}
          onPress={() => null}
        />
        <ButtonIcon
          icon={Assets.images.SETTINGS}
          onPress={() => null}
        />
      </FooterWrapper>
    )
  }
}

export default Footer