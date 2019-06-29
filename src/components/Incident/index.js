// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import { defaultImagePath } from '../../utils';

// Componenets
import NavBar from '../NavBar';
import { newIncident } from '../../store/actions/incidentActions';

class Incident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      comment: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, comment } = this.state;
    const incidentDate = {
      title,
      comment
    };

    const { createRedflag } = this.props;
    createRedflag(incidentDate);
  }

  render() {
    const { title, comment } = this.state;
    return (
      <div>
        <NavBar />
        <div align="center">
          <br />
          <br />
          <br />
          <form onSubmit={this.handleSubmit} className="inputForm">
            <input
            className="inputForm__inputField" 
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
            required
            />
            <textarea
            className="inputForm__inputField" 
            type="text"
            name="comment"
            placeholder="Comment"
            value={comment}
            onChange={this.handleChange}
            required
            />
            <div align="left" className="Buttons">
              <button
                className="inputForm__Button"
                type="submit"
                name="report"
                >
                Report
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



Incident.propTypes = {
  createRedflag: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ incidentReducer: incident }) => (incident);

export const mapDispatchToProps = dispatch => ({
  createRedflag(incidentData) { dispatch(newIncident(incidentData)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Incident);
