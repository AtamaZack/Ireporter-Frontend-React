import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// action types
import {
  SIGNED_UP,
} from '../types';

import {  newUser } from './index';

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
    const signResponse = {
      "data": [
          {
              "message": "created user successfully",
              "user": "user added"
          }
      ],
      "status": 201
  }
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: signResponse
      });
    });

    const expectedAction =  [ { userData:
      { firstname: 'John',
        lastname: 'Doe',
        othernames: 'JohnDoe',
        email: 'john.doe@gmail.com',
        phoneNumber: '0775465746',
        username: 'John',
        password: 'Pa$$word123',
        isAdmin: 'false' },
     type: SIGNED_UP } ];

    const signupData = {
      "firstname": "John",
      "lastname": "Doe",
        "othernames": "JohnDoe",
        "email": "john.doe@gmail.com",
        "phoneNumber": "0775465746",
        "username": "John",
        "password": "Pa$$word123",
        "isAdmin": "false"
    }

    const store = mockStore({});
    return store
      .dispatch( newUser(signupData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });

})
