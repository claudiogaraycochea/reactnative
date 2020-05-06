import React from 'react';
import Demo from '../src/ui/Demo';
import renderer from 'react-test-renderer';

/*test('renders correctly', () => {

  // const wrapper = renderer.create(<Demo />).toJSON();
  // expect(tree).toMatchSnapshot();
  // expect(wrapper).find('H1').toHaveLength(1);
  //expect(tree.find('div').length).toBe(2);
  expect(wrapper.find('div').length).toBe(1);
});*/
/*
it('render div', () => {
  const wrapper = renderer.create(<Demo />).toJSON();
  console.log('wrapper ', wrapper);
  // expect(wrapper.find('div')).to.have.lengthOf(4)
  expect(wrapper.find('div').children()).to.have.lengthOf(4);
});*/



/* test('it calls start logout on button click', () => {
  const mockLogout = jest.fn();
  const wrapper = shallow(<Button startLogout={mockLogout}>Ok</Button>);
  wrapper.find('Button').prop('onClick')()
  expect(mockLogout).toHaveBeenCalled();
});*/

 /*it("'send message' button responds to click event", () => {
  const demoData = renderer.create(<Demo />).getInstance();
  // demoData.testing();
  wrapper.find('#buttonCheck').simulate('click');
});*/

it("'send message' button responds to click event", () => {
  //const demoData = renderer.create(<Demo />);
  const testRenderer = renderer.create(<Demo />);
  const demoData = testRenderer.root;
  // demoData.testing();
  //demoData.find('#buttonCheck').simulate('click');
  expect(testRenderer.root.findByType('button').props.onPress();
  // expect(testRenderer.root.find({id:"#buttonCheck"}).props.onPress();
  //expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
});

/*
describe("render <button>", () => {
  beforeEach(() => {
    container = wrapper.find("Button");
    containerProp = container.props();
  });

  it("should have a <button> with the properly text", () => {
    expect(container.text()).toEqual("Test");
  });
});
*/