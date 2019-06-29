import React from 'react';
import { shallow } from 'enzyme';
import { Login , mapStateToProps} from './index';

describe('<Login />', () => {
  let wrapper;
  const props = {
    loginUser: jest.fn()
  };
  beforeEach(()=>{
    wrapper = shallow(<Login {...props}/>);
  })

  it('should render the signup component', () => {  
    expect(wrapper).toMatchSnapshot();
  }); 

  it('handle change', ()=>{
    const e = {
      target:{
        name:"email",
        value:"zack@test.com"
      }
    }
    wrapper.instance().handleChange(e);
    expect(wrapper.instance().state.email).toBe('zack@test.com');
  });

  it('handle submit', ()=>{
    wrapper.instance().handleSubmit({ preventDefault:jest.fn() });
    expect(props.loginUser).toHaveBeenCalled();
  });

  it('mapStateToProps', ()=>{
    const initialState = { loginReducer:{user: {},}
    };
    expect(mapStateToProps(initialState)).toEqual({user: {}})

  });
});

