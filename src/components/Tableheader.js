import React, { Component } from 'react';

export default class Tableheader extends Component {
    render() {
        return (
            <th className={this.props.className}>{this.props.children}</th>
        );
    }
}
