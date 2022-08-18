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
  }
  render(){
    return (
    <div className="container">
      <h4>User App</h4>
      <hr></hr>
      <AddUser></AddUser>
      <hr></hr>
      <Users users = {this.state.users}></Users>
    </div>
      );
  }
}

export default App;
