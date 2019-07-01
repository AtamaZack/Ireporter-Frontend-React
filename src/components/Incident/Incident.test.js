import React from 'react';
import { shallow } from 'enzyme';
import { Incident , mapStateToProps} from './index';

describe('<Incident />', () => {
  let wrapper;
  const props = {
    createRedflag: jest.fn()
  };
  beforeEach(()=>{
    wrapper = shallow(<Incident {...props}/>);
  })

  it('should render the incident component', () => {  
    expect(wrapper).toMatchSnapshot();
  }); 

  it('handle change', ()=>{
    const e = {
      target:{
        name:"title",
        value:"redflag title"
      }
    }
    wrapper.instance().handleChange(e);
    expect(wrapper.instance().state.title).toBe('redflag title');
  });

  it('handle submit', ()=>{
    wrapper.instance().handleSubmit({ preventDefault:jest.fn() });
    expect(props.createRedflag).toHaveBeenCalled();
  });

  it('mapStateToProps', ()=>{
    const initialState = { incidentReducer:{redflag: {}}
    };
    expect(mapStateToProps(initialState)).toEqual({redflag: {}})

  });
});

