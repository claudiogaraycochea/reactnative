import React, { Component } from 'react'
import { View, Button } from 'react-native'

class Demo extends Component {

  constructor(){
    super();
    this.state = {
    }
  }

  testing = () => {
    console.log('Boton ejecutado');
    return (1);
  }

  render() {
    return (
      <View>
        <Button id="buttonCheck" onPress={this.testingu} title="Test">Test</Button>
      </View>
    )
  }
}

export default Demo

