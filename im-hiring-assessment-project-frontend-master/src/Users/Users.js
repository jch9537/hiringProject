import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserProfile from './UserProfile';
import Todos from './Todos';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: null,
      todos: null
     }
  }
  getUsers = () => {
    fetch('https://koreanjson.com/users')
    .then(response => response.json())
    .then(users => this.setState({users}))
    .catch(error => console.log(error));
  }

  componentDidMount(){
      this.getUsers();
  }
  //list의 user와 profile의 투두갯수를 위해서 class로 바꿔야하나?고민하기
  render() { 
    const { users } = this.state;
    console.log('유저스 프롭스 :',this.props)
    return ( 
       <div> 
        <Switch>     
          <Route 
            path={`${this.props.match.path}/:id/Todos`} 
            render={(props) => <Todos {...props}/> } 
          />   
          <Route 
            path={`${this.props.match.path}/:id`} 
            render={(props) => users? <UserProfile users={users} {...props}/> : null}
          />
          <Route 
            path={this.props.match.path} 
            render={(props) => users? <UserList users={users} {...props}/> : null}
          />
        </Switch>
      </div>
     );
  }
}
 
export default Users;
