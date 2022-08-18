import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers";
import React, {Component} from "react";
import User from "./User";

class Users extends Component{

    render(){
        const {users} = this.props;//Burada App JS den gelen users propsunu sayfa içerisine alıyoruz.


        return(
          <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            const {id,name,email} = user;
                            return <User 
                                key = {id}
                                id = {id}
                                name = {name}
                                email = {email}
                            /> // Burada bu sayfa içerisindeki AppJS den gelen users nesnesini dönerek her birini UserJS e yolluyoruz
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Users;