import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabledata, Tableheader } from '../src/';
import '../style.css';

class Example extends Component {
    render() {
        let data = [
            { id: 1, firstname: 'John', lastname: 'Doe', email: 'jdoe@internet.com' },
            { id: 2, firstname: 'Johnny', lastname: 'Doewy', email: 'jdoewy@internet.com' },
            { id: 3, firstname: 'Johanne', lastname: 'Doewesse', email: 'jdoewesse@internet.com' },
            { id: 1, firstname: 'John', lastname: 'Doe', email: 'jdoe@internet.com' },
            { id: 2, firstname: 'Johnny', lastname: 'Doewy', email: 'jdoewy@internet.com' },
            { id: 3, firstname: 'Johanne', lastname: 'Doewesse', email: 'jdoewesse@internet.com' },
            { id: 1, firstname: 'John', lastname: 'Doe', email: 'jdoe@internet.com' },
            { id: 2, firstname: 'Johnny', lastname: 'Doewy', email: 'jdoewy@internet.com' },
            { id: 3, firstname: 'Johanne', lastname: 'Doewesse', email: 'jdoewesse@internet.com' },
            { id: 1, firstname: 'John', lastname: 'Doe', email: 'jdoe@internet.com' },
            { id: 2, firstname: 'Johnny', lastname: 'Doewy', email: 'jdoewy@internet.com' },
            { id: 3, firstname: 'Johanne', lastname: 'Doewesse', email: 'jdoewesse@internet.com' },
            { id: 1, firstname: 'John', lastname: 'Doe', email: 'jdoe@internet.com' },
            { id: 2, firstname: 'Johnny', lastname: 'Doewy', email: 'jdoewy@internet.com' },
            { id: 3, firstname: 'Johanne', lastname: 'Doewesse', email: 'jdoewesse@internet.com' },
            { id: 1, firstname: 'John', lastname: 'Doe', email: 'jdoe@internet.com' },
            { id: 2, firstname: 'Johnny', lastname: 'Doewy', email: 'jdoewy@internet.com' },
            { id: 3, firstname: 'Johanne', lastname: 'Doewesse', email: 'jdoewesse@internet.com' },
            { id: 1, firstname: 'John', lastname: 'Doe', email: 'jdoe@internet.com' },
            { id: 2, firstname: 'Johnny', lastname: 'Doewy', email: 'jdoewy@internet.com' },
            { id: 3, firstname: 'Johanne', lastname: 'Doewesse', email: 'jdoewesse@internet.com' },
            { id: 1, firstname: 'John', lastname: 'Doe', email: 'jdoe@internet.com' },
            { id: 2, firstname: 'Johnny', lastname: 'Doewy', email: 'jdoewy@internet.com' },
            { id: 3, firstname: 'Johanne', lastname: 'Doewesse', email: 'jdoewesse@internet.com' },
        ];
        return (
            <div>
                <Tabledata datas={data}>
                    <Tableheader attribute={'firstname'}>Firstname</Tableheader>
                    <Tableheader attribute={'lastname'}>Lastname</Tableheader>
                    <Tableheader renderCell={(_content, _index, row) => (row.firstname + ' ' + row.lastname)}>Fullname</Tableheader>
                    <Tableheader attribute={'email'}>Email</Tableheader>
                    <Tableheader renderCell={(_content, _index, row) => (<button>{row.id}</button>)}>Btn</Tableheader>
                </Tabledata>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Example/>,
        document.querySelector('#react-app')
    );
});
