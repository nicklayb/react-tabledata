import React, {Component} from 'react'

export default class TableHead extends Component{
    render() {
        const headerCells = [];
        this.props.headers.forEach((header, index) => {
            headerCells.push(<th className={this.props.thClasses} key={index}>{header}</th>)
        });
        return (
            <thead className={this.props.theadClasses}>
                <tr className={this.props.trClasses}>
                    {headerCells}
                </tr>
            </thead>
        )
    }
}
