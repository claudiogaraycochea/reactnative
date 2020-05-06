import React from 'react'
import { TouchableOpacity, Image, TextInput } from 'react-native'
import styled from 'styled-components/native'

/* Constants */
export const Theme = {
  color: {
    PRIMARY: '#00D774',
    SECONDARY: '#30485F',
    TEXTCOLOR: '#30485F',
    GREEN: '#00C49F',
    BLUE: '#3570ED',
  },
  fontSize: {
    SMALL: '16',
    MEDIUM: '20',
    LARGE: '30',
  }
}

/* Containers */
export const Container = (props) => {
  return (
    <ContainerView
      style={{
        backgroundColor: '#FFFFFF',
      }}
      >
      <ContainerScroll
        style={{
          flex: 1,
          padding: 0,
          paddingTop: 0,
        }}>
        {props.children}
      </ContainerScroll>
    </ContainerView>
  );
}

const ContainerScroll = styled.ScrollView`
  padding: 0 0;
  padding-bottom: 0%;
`;

const ContainerView = styled.View`
  flex: 1;
  width: 100%;
  color: red;
`;

export const ContainerFix = (props) => {
  return (
    <ContainerView
      style={{
        backgroundColor: '#FFFFFF',
      }}
      >
        {props.children}
    </ContainerView>
  );
}

export const Row = styled.View`
  margin-left: 20;
  margin-right: 20;
  margin-bottom: 20;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Col = styled.View`
  display: flex;
  flex-direction: row;
  borderWidth: 0;
  borderColor: red;
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  width: ${props => props.col}%;
`;

export const ItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  borderBottomWidth: 1;
  borderColor: #EBF0F1;
`;

export const BoxWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px 20px 20px;
  margin: 10px 20px;
  borderRadius: 10px;
  borderWidth: 1;
  borderColor: #EBF0F1;
`;

export const SubHeader = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 0;
`;

/* Text */
export const Text = styled.Text`
  fontSize: ${props => props.fontSize ? props.fontSize : '20'};
  text-align: center;
  color: ${props => props.color ? props.color : Theme.color.TEXTCOLOR};
`;

export const H1 = styled.Text`
  fontSize: 40px;
  font-weight: bold;
  color: ${props => props.color ? props.color : Theme.color.TEXTCOLOR};
`;

export const H2 = styled.Text`
  fontSize: ${props => props.fontSize ? props.fontSize : '30'};
  padding-bottom: 5;
  font-weight: bold;
  color: ${props => props.color ? props.color : Theme.color.TEXTCOLOR};
`;

export const H3 = styled.Text`
  color: ${props => props.color ? props.color : Theme.color.TEXTCOLOR};
  fontSize: 22px;
  font-weight: bold;
`;

/* Input */
export const InputFormat = (props) => {
  const styleInputDecimal = {
    backgroundColor: '#FFFFFF',
    color: Theme.color.TEXTCOLOR,
    padding: 10,
    width: 200,
    fontSize: 30,
    borderWidth: 2,
    borderColor: '#EBF0F1',
    borderRadius: 5,
  }

  return (
    <TextInput
      style={styleInputDecimal}
      textAlign={props.textAlign}
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

/* Buttons */
const colors = {
  accent: '#eeeeee',
  highlight: '#0072bf',
  contrast: '#222222',
};

const Label = styled.Text`
  color: ${props => !props.outline ? colors.contrast : colors.accent};
  font-weight: 700;
  align-self: center;
  fontSize: 16px;
  padding: 10px;
`

const ButtonContainer = styled.TouchableHighlight`
  backgroundColor: ${props => props.outline ? colors.contrast : colors.accent};
  padding: 2% 5%;
  borderColor: ${colors.accent};
  borderRadius: 5;
  marginBottom: 10;
  alignSelf: center;
`

export const Button = (props) => {
  return (
    <ButtonContainer
        onPress={props.onPress}
        style={props.style}
        underlayColor={colors.highlight}>
      <Label>
        {props.children}
      </Label>
    </ButtonContainer>
  );
};
/* / Button */

/* ButtonCircle */
const colorsCircle = {
  accent: '#527bbe',
  highlight: '#4c89ec',
  contrast: '#FFF',
};

export const ButtonCircle = (props) => {
  return (
    <TouchableOpacity
      disabled={props.readOnly}
      style={{
          borderWidth: 2,
          borderColor: Theme.color.TEXTCOLOR,
          alignItems: 'center',
          justifyContent: 'center',
          width: 42,
          height: 42,
          backgroundColor: '#ffffff',
          borderRadius: 100,
        }}
        outline
        onPress= {props.onPress}
        underlayColor= {colorsCircle.highlight}
      >
      <Image
          source={props.icon}
          style={{
            resizeMode: 'cover',
            width: 32,
            height: 32
            }}/>
    </TouchableOpacity>
  );
};

/* ButtonIcon */
const colorsIcon = {
  accent: '#527bbe',
  highlight: '#4c89ec',
  contrast: '#FFF',
};

export const ButtonIcon = (props) => {
  return (
    <TouchableOpacity
      disabled={props.readOnly}
      style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 48,
          height: 48,
        }}
        outline
        onPress= {props.onPress}
        underlayColor= {colorsIcon.highlight}
      >
      <Image
          source={props.icon}
          style={{
            resizeMode: 'cover',
            width: 32,
            height: 32
            }}/>
    </TouchableOpacity>
  );
};

/* ButtonSimple */
export const ButtonSimple = (props) => {
  return (
    <TouchableOpacity
      style={{
          alignItems:'center',
          justifyContent:'center',
          borderRadius: 1,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: Theme.color.SECONDARY,
          borderRadius: 50,
        }}
        onPress={props.onPress}
      >
      <Text 
        style={{
          marginLeft: 0,
          color: '#ffffff',
          fontWeight: "bold",
          fontSize: 18,
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >{props.children}</Text>
    </TouchableOpacity>
  );
};
