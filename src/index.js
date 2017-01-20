import React, {Component} from 'react';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';

export default class Tabledata extends Component{
    render() {
        return (
            <table id={this.props.id}>
                <TableHead thClasses={this.props.thClasses} trClasses={this.props.trClasses} theadClasses={this.props.theadClasses} headers={this.props.headers}/>
                <TableBody thClasses={this.props.tdClasses} trClasses={this.props.trClasses} theadClasses={this.props.tbodyClasses} data={this.props.data}/>
            </table>
        )
    }
}
