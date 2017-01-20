import React, {Component} from 'react'
import TableRow from './TableRow';

export default class TableBody extends Component{
    render() {
        const rows = [];
        this.props.data.forEach((row, index) => {
            rows.push(<TableRow trClasses={this.props.trClasses} tdClasses={this.props.tdClasses} key={index} data={row}/>);
        })
        return (
            <tbody className={this.props.tbodyClasses}>
                {rows}
            </tbody>
        )
    }
}
