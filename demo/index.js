import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabledata, Tableheader } from '../src/';
import '../style.css';

class Example extends Component {
    render() {
        let data = [{ 'id': 1, 'firstname': 'Lari', 'lastname': 'Leach', 'email': 'lleach0@google.es' },
        { 'id': 2, 'firstname': 'Teddie', 'lastname': 'Thorne', 'email': 'tthorne1@mayoclinic.com' },
        { 'id': 3, 'firstname': 'Kendall', 'lastname': 'Ossenna', 'email': 'kossenna2@canalblog.com' },
        { 'id': 4, 'firstname': 'Merv', 'lastname': 'Heffron', 'email': 'mheffron3@qq.com' },
        { 'id': 5, 'firstname': 'Stanwood', 'lastname': 'Boundy', 'email': 'sboundy4@nhs.uk' },
        { 'id': 6, 'firstname': 'Ikey', 'lastname': 'Laurenz', 'email': 'ilaurenz5@admin.ch' },
        { 'id': 7, 'firstname': 'Lilli', 'lastname': 'Peniello', 'email': 'lpeniello6@icq.com' },
        { 'id': 8, 'firstname': 'Anica', 'lastname': 'Brimham', 'email': 'abrimham7@pbs.org' },
        { 'id': 9, 'firstname': 'Frankie', 'lastname': 'Bremner', 'email': 'fbremner8@paginegialle.it' },
        { 'id': 10, 'firstname': 'Kristos', 'lastname': 'Verecker', 'email': 'kverecker9@yellowpages.com' },
        { 'id': 11, 'firstname': 'Olympe', 'lastname': 'Garred', 'email': 'ogarreda@google.co.uk' },
        { 'id': 12, 'firstname': 'Ellissa', 'lastname': 'Derrett', 'email': 'ederrettb@amazon.de' },
        { 'id': 13, 'firstname': 'Aguistin', 'lastname': 'Oolahan', 'email': 'aoolahanc@nba.com' },
        { 'id': 14, 'firstname': 'Emili', 'lastname': 'Lunny', 'email': 'elunnyd@blog.com' },
        { 'id': 15, 'firstname': 'Mikol', 'lastname': 'Scarrisbrick', 'email': 'mscarrisbricke@de.vu' },
        { 'id': 16, 'firstname': 'Boycey', 'lastname': 'Bockin', 'email': 'bbockinf@springer.com' },
        { 'id': 17, 'firstname': 'Ezechiel', 'lastname': 'Pinchin', 'email': 'epinching@dailymail.co.uk' },
        { 'id': 18, 'firstname': 'Flore', 'lastname': 'Chesterfield', 'email': 'fchesterfieldh@bizjournals.com' },
        { 'id': 19, 'firstname': 'Brnaby', 'lastname': 'Beentjes', 'email': 'bbeentjesi@state.gov' },
        { 'id': 20, 'firstname': 'Ronny', 'lastname': 'Gelderd', 'email': 'rgelderdj@hc360.com' }];
        return (
            <div>
                <Tabledata datas={data} rowsPerPage={8}>
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
