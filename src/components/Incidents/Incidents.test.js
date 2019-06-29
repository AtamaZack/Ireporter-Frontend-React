import React from 'react';
import { shallow } from 'enzyme';
import { AllRedflags , mapStateToProps} from './index';

describe('<AllRedflags />', () => {
  let wrapper;
  const props = {
    getAllRedflags: jest.fn()
  };
  beforeEach(()=>{
    wrapper = shallow(<AllRedflags {...props}/>);
  })

  it('should render the all redflags component', () => {  
    expect(wrapper).toMatchSnapshot();
  }); 



  it('mapStateToProps', ()=>{
    const initialState = { redflagsReducer:{redflags: []}
    };
    expect(mapStateToProps(initialState)).toEqual({redflags: []})

  });
});

