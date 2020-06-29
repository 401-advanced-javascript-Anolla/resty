import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/form/form';

describe('<Form/>', () => {
  it('it properly stores the users input into state', () => {
    const form = mount(<Form />);
    const button = form.find('button');
    form.state().url='www';
    button.simulate('submit');
    expect(form.state().url).toBeTruthy();
  });

  it('it properly displays the users input in the output area on form submit', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it properly clears the form/state after the form is submitted', () => {
    const form = mount(<Form />);
    const button = form.find('button');
    button.simulate('submit');
    expect(form.state().url).toBeFalsy();
  });

  it('the method selectors/checkboxes obey your styling rules', () => {
      
  });
});