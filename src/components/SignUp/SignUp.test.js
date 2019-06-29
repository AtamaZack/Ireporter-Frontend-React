import React from 'react';
import { shallow } from 'enzyme';

import { SignUp, mapStateToProps } from './index';


describe('<SignUp />', () => {
  let wrapper;
  const props = {
    signUp: jest.fn()
  };
  beforeEach(()=>{
    wrapper = shallow(<SignUp {...props}/>);
  })

  it('should render the signup component', () => {  
    expect(wrapper).toMatchSnapshot();
  }); 

  it('handle change', ()=>{
    const e = {
      target:{
        name:"firstname",
        value:"zack"
      }
    }
    wrapper.instance().handleChange(e);
    expect(wrapper.instance().state.firstname).toBe('zack');
  });

  it('handle submit', ()=>{
    wrapper.instance().handleSubmit({ preventDefault:jest.fn() });
    expect(props.signUp).toHaveBeenCalled();
  });

  it('mapStateToProps', ()=>{
    const initialState = { signupReducer:{user: {},}
    };
    expect(mapStateToProps(initialState)).toEqual({user: {}})

  });

  it('mapDispatchToProps', ()=>{

  });

});
