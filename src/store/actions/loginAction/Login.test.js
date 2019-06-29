import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// action types
import {
  LOGIN,
} from '../types';

import { login } from './index';

const middlewires = [thunk];
const mockStore = configureStore(middlewires);

describe('login action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should succesfully login user', () => {
    const loginResponse = {
      access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZXhwIjoxNTYxODA2OTU2fQ.PezfGjEcPxiKEkentb8FqsrhsS8XvFtdAGmJ8ZVdbMA",
      message: "login successfull",
      status: 200
    }
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: loginResponse
      });
    });

    const expectedAction = [ { userData: { email: 'john.doe@gmail.com', password: 'Pa$$word123' },
    type: 'LOGIN' } ]
    const loginData = {
      email: "john.doe@gmail.com",
      password: "Pa$$word123"
    };

    const store = mockStore({});
    return store
      .dispatch(login(loginData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });

})
