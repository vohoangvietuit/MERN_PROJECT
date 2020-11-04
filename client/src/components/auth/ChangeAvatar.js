import React, { Component } from 'react';
import UploadImage from '../for-me/UploadImage';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import { uploadUserAvatar } from '../../actions/authAction';

class ChangeAvatar extends Component {
  onChangeAvatar = fileImage => {
    this.props
      .uploadUserAvatar(fileImage)
      .then(res => {
        this.props.history.push('/profile');
        toast.success('Update successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2500
        });
      })
      .catch(err =>
        toast.error('Error can not update, try again', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2500
        })
      );
  };

  render() {
    return (
      <div className="change-avatar">
        <h1 className="display-5 text-center mb-5">Change avatar</h1>
        <UploadImage onChange={this.onChangeAvatar} />
        <ToastContainer />
      </div>
    );
  }
}

ChangeAvatar.propTypes = {
  uploadUserAvatar: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { uploadUserAvatar }
)(ChangeAvatar);
