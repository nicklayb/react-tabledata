import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Tabledata from '../src'
import '../style.css'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email:'',
            data: [
                {firstname:'Nicolas', lastname:'Boisvert', email:'nicklay@me.com'},
                {firstname:'Etienne', lastname:'Lacoursiere', email:'elacoursiere@caqtus.io'},
                {firstname:'Anthony', lastname:'Jean', email:'ajean@caqtus.io'},
            ],
            headers: ['Prenom', 'Nom', 'Courriel']
        }
    }
    handleSetFirstname(event) {
        this.setState({firstname: event.target.value});
    }
    handleSetEmail(event) {
        this.setState({email: event.target.value});
    }
    handleSetLastname(event) {
        this.setState({lastname: event.target.value});
    }
    storeUser() {
        var obj = {
            firstname: this.state.firstname,
            email: this.state.email,
            lastname: this.state.lastname,
        },
        data = this.state.data;
        data.push(obj);
        this.setState({
            data: data
        });
    }
    render() {
        return (
            <div>
                <input onChange={this.handleSetFirstname.bind(this)} value={this.state.firstname}/>
                <input onChange={this.handleSetEmail.bind(this)} value={this.state.email}/>
                <input onChange={this.handleSetLastname.bind(this)} value={this.state.lastname}/>
                <button onClick={this.storeUser.bind(this)}>Save</button>
                <Tabledata data={this.state.data} headers={this.state.headers} />
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <Layout/>,
        document.querySelector('#react-app')
    )
})
