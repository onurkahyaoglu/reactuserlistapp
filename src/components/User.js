import React, {Component} from "react";

class User extends Component{
    render(){
        const {id,name,email} = this.props;//Burada Users JS den gelen users propsunu sayfa içerisine alıyoruz.

        return(
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td><button onClick={this.onDeleteClick} className="btn btn-danger">Delete</button></td>
            </tr>
        )
    }
}

export default User;