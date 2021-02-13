import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserInput from './UserInput'

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
           return(
             <li>Username: {user.username} - Hometown: {user.hometown}</li>) 
          })}
         <p></p> Number of Users: {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {

  return {
    users : state.users
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
