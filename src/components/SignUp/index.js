// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Componenets
import NavBar from '../NavBar';
import { newUser } from '../../store/actions/signupAction';

class SignUp extends Component {
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
    const { firstname, lastname, othernames, email, phoneNumber, username, password, isAdmin } = this.state;
    return (
      <div>
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text"
          name="firstname"
          placeholder="first name"
          value={firstname}
          onChange={this.handleChange}
          required
          />
          <input
          type="text"
          name="lastname"
          placeholder="last name"
          value={lastname}
          onChange={this.handleChange}
          required
          />
          <input
          type="text"
          name="othernames"
          placeholder="other names"
          value={othernames}
          onChange={this.handleChange}
          required
          />
          <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          required
          />
          <input
          type="text"
          name="phoneNumber"
          placeholder="phone number"
          value={phoneNumber}
          onChange={this.handleChange}
          required
          />
          <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={this.handleChange}
          required
          />
          <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={this.handleChange}
          required
          />
          <button
            className=""
            type="submit"
            name="signUp"
          >
          Sign Up
        </button>
        </form>
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
