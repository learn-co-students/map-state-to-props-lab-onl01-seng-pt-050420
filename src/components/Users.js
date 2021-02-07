import React, { Component } from 'react';
// add any needed imports here. import { connect } from 'react-redux'; 
import {connect} from 'react-redux'; 
class Users extends Component {

  render() { 

    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */} 
          {/* In addition, display the total number of users curently in the store */} 
          {this.props.users.map(user => <li
            key={user.userName + user.hometown}>{user.userName} from {user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here   

// const mapStateToProps = (state) => {
//   return { users: state.users, primaryUser: state.users[0] };
// } 

const mapStateToProps = (state) => {
  return { users: state.users, primaryUser: state.users[0] };
}


export const ConnectedUsers = connect(mapStateToProps)(Users); 


//export default connect()(Users);
