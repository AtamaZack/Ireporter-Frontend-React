// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import { defaultImagePath } from '../../utils';

// Componenets
import NavBar from '../NavBar';
import { login } from '../../store/actions/loginAction';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const userLoginData = {
      email,
      password
    };

    const { loginUser } = this.props;
    loginUser(userLoginData);
  }

  render() {
    const { email, password } = this.state;
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
            name="email"
            placeholder="email"
            value={email}
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
                name="login"
                >
                Login
              </button>
              <a href="/">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ loginReducer: user }) => (user);

export const mapDispatchToProps = dispatch => ({
  loginUser(userLoginData) { dispatch(login(userLoginData)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
