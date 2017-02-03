# react-tabledata

###### By Nicolas Boisvert :: nicklay@me.com

### A react component for displaying data in a table. Yup. Simple as that

The major purposes of this project is to be able to have an async tabledata for displaying data in a fully customizable way. Try it out [right here](https://github.com/nicklayb/react-tabledata-async) and improve it as much as you can!

## Installation

I recommand a npm installation by :
```
npm install --save react-tabledata
```

## Examples

This is a concrete example of how you can use it to display an array of object

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabledata, Tableheader } from '../src/';

class Example extends Component {
    render() {
        let data = [
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
```

### Tabledata

The `Tabledata` component is the table container. It requires at least a `datas` attribute matching your datas. Once you'll set the state the table will be updated automatically. You also may specify a `renderRow` attribute with an arrow function that returns the render for every rows. If you want to add classes to the `<table>` tag, just pass in a `className` attribute.

### Tableheader

The `Tableheader` matches all the `<th>` tags you'll want. If you want it to display the value of an object attribute, you pass in the `attribute` attribute. In the example, you can see that with have 3 `Tableheader` with attribute and 2 computed header. You can also pass in an attribute `renderCell` that will render each cell of the header.

## Conclusion

Thank you for using, testing and improving it and feel free to contact me for any question.

Ending joke :
> If you can't understand recursivity, read this sentence again.
