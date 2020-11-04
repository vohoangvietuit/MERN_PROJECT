import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/home');
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <div className="text-center">
            <h2 className="display-3 mb-4">Nash Store</h2>
            <p className="lead">Welcome to NashTech private store</p>
            <p className="text-muted">
              To access store, you need to login/register your account
            </p>
            <hr />
            <Link to="/register" className="btn btn-lg btn-info mr-2">
              Register
            </Link>
            <Link to="/login" className="btn btn-lg btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Landing);
