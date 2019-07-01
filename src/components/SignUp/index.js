// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styling
import './SignUp.scss';


import { defaultImagePath } from '../../utils';

// Componenets
import NavBar from '../NavBar';
import { newUser } from '../../store/actions/signupAction';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      othernames: '',
      email: '',
      phoneNumber: '',
      username: '',
      password: '',
      isAdmin: 'false'
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, othernames, email, phoneNumber, username, password, isAdmin } = this.state;
    const userData = {
      firstname,
      lastname,
      othernames,
      email,
      phoneNumber,
      username,
      password,
      isAdmin
    };

    const { signUp } = this.props;
    signUp(userData);
  }

  render() {
    const { firstname, lastname, othernames, email, phoneNumber, username, password } = this.state;
    return (
      <div>
        <NavBar />
        <div align="center">
          <img className="banner" src={`${defaultImagePath}/banner.png`} />
          <form onSubmit={this.handleSubmit} className="inputForm">
            <p className="errorsPanel" id="errors"></p>
            <input
            className="inputForm__inputField" 
            type="text"
            name="firstname"
            placeholder="first name"
            value={firstname}
            onChange={this.handleChange}
            required
            />
            <input
            className="inputForm__inputField" 
            type="text"
            name="lastname"
            placeholder="last name"
            value={lastname}
            onChange={this.handleChange}
            required
            />
            <input
            className="inputForm__inputField" 
            type="text"
            name="othernames"
            placeholder="other names"
            value={othernames}
            onChange={this.handleChange}
            required
            />
            <input
            className="inputForm__inputField" 
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
            required
            />
            <input
            className="inputForm__inputField" 
            type="text"
            name="phoneNumber"
            placeholder="phone number"
            value={phoneNumber}
            onChange={this.handleChange}
            required
            />
            <input
            className="inputForm__inputField" 
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
            required
            />
            <input
            className="inputForm__inputField" 
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
            required
            />
            <div align="left" className="Buttons">
              <button
                className="inputForm__Button"
                type="submit"
                name="signUp"
                >
                Sign Up
              </button>
              <a href="/login">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ signupReducer: user }) => (user);

export const mapDispatchToProps = dispatch => ({
  signUp(userData) { dispatch(newUser(userData)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
