import React, {Component} from "react";

class User extends Component{
    // constructor(props){
    //     super(props);
    //     this.onDeleteClick = this.onDeleteClick.bind(this);//ondeleteclick fonksiyonunda gönderilen nesneye ulaşmak için constructor içerisinde bind işlemi yapmamız gerekiyor.
    // }
    // onDeleteClick(e){
    //     console.log(this);
    // }
    //Yukarıdaki bind işlemini yapmak istemiyorsak bunu arrow function olarak kullanmamız gerekiyor.
    // onDeleteClick = e => { 
    //     console.log(this);
    // }
    //Bir üçüncü yolda buton üstünde bind etmek. En hızlısı o gibi görünyor
     onDeleteClick(id, e){
        const {deleteUser} = this.props;
        deleteUser(id);
    }
    render(){
        const {id,name,email} = this.props;//Burada Users JS den gelen users propsunu sayfa içerisine alıyoruz.

        return(
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                {/* <td><button onClick={this.onDeleteClick} className="btn btn-danger">Delete</button></td> */}
                <td><button onClick={this.onDeleteClick.bind(this, id)} className="btn btn-danger">Delete</button></td>
            </tr>
        )
    }
}

export default User;