import React , { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Onur Kahyaoglu",
          email: "onurkahyaoglu@gmail.com"
        },
        {
          id: 2,
          name: "Özgen Kahyaoglu",
          email: "onurkahyaoglu@gmail.com"
        },
        {
          id: 3,
          name: "Duru Kahyaoglu",
          email: "onurkahyaoglu@gmail.com"
        },
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser){
    let updatedUsers = this.state.users;

    updatedUsers.push(newUser);
    
    this.setState({
      users: updatedUsers
    })
  }

  deleteUser(id){
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(users => users.id !== id);
    this.setState({
      users: updatedUsers
    })
  }

  render(){
    return (
    <div className="container">
      <h4>User App</h4>
      <hr></hr>
      <AddUser addUser= {this.addUser} />
      <hr></hr>
      <Users deleteUser = {this.deleteUser} users = {this.state.users}></Users>
    </div>
      );
  }
}

export default App;
