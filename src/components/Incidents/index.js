// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// styling
import './Incidents.scss';

import { defaultImagePath } from '../../utils';

// Componenets
import NavBar from '../NavBar';
import { getAllRedflags } from '../../store/actions/incidentActions';

export class AllRedflags extends Component {
  componentDidMount() {
    const { getAllRedflags } = this.props;
    getAllRedflags();
  }  

  render() {
    const { redflags } = this.props;
    const articlesList = redflags.map(redflag => (
      <div key={redflag.id} className="redflagCard" align="left">
        <p>{redflag.title}</p>
        <img src={`${defaultImagePath}/bribe.jpg`} />
        <p>{redflag.comment}</p>
      </div>
      ));
    return (
      <div>
        <NavBar />
        <div align="center">
          <div className="mainCanvas">
            {articlesList}
          </div>
        </div>
      </div>
    );
  }
}



AllRedflags.propTypes = {
  getAllRedflags: PropTypes.func.isRequired,
  redflags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    createdBy: PropTypes.number.isRequired,
    createdOn: PropTypes.string.isRequired,
    lastModified: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }
))
}


AllRedflags.defaultProps = {
  redflags: []
};

export const mapStateToProps = state => state.redflagsReducer;

export const mapDispatchToProps = dispatch => bindActionCreators({
  getAllRedflags: getAllRedflags,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllRedflags);
