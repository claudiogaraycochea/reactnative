import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'react-native';
import Demo from '../src/ui/Demo';

configure({ adapter: new Adapter() });
/*
test('test onPress functionality', () => {
  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('Link on press invoked');
  const wrapper = shallow(<Button onPress={ onPressEvent } title='Test'>Test</Button>);
  // wrapper.find(Button).first().props.onPress;
  wrapper.find(Button).first().props.onPress;
  expect(onPressEvent.mock.calls.length).onPress;
});
*/
test('test onPress functionality', () => {
  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('Link on press invoked');
  const wrapper = shallow(<Demo />);
  // wrapper.find(Button).first().props.onPress;
  wrapper.find(Button).first().props.onPress;
  // expect(onPressEvent.mock.calls.length).onPress;
});