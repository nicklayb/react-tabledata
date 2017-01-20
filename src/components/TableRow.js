import React, {Component} from 'react'

export default class TableRow extends Component{
    render() {
        const values = Object.values(this.props.data);
        const cells = [];
        values.forEach((cell, index) => {
            cells.push(<td className={this.props.tdClasses} key={index}>{cell}</td>);
        });
        return (
            <tr className={this.props.trClasses}>
                {cells}
            </tr>
        )
    }
}
