// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Componenets
import NavBar from '../NavBar';
// import { newUser } from '../../store/actions/loginAction';

class SignUp extends Component {
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
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
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
          >
          Loginç
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
