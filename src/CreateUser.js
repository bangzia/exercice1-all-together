import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: ''
  };

  addUser = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  };
  inputIsEmpty = () => {
    return this.state.value === '';
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}

CreateUser.propTypes = {
  onAddUser: PropTypes.func.isRequired
};

export default CreateUser;
