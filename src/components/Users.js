import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          Users:
          {this.props.users.map(user => {
            return (
            <li key={user.id}>
              User: {user.username}
              {", "}
              Hometown: {user.hometown}
            </li>)
          })}
          <br/>
          Total Users: {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
