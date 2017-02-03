import { Component } from 'react';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.cells = [];
        this.setupCells();
    }

    setupCells() {
        this.props.children.forEach((value) => {
            let cell = {};
            cell.attribute = (value.props.attribute) ? value.props.attribute : null;
            cell.renderCell = (value.props.renderCell) ? value.props.renderCell : this._renderCell;
            this.cells.push(cell);
        });
    }

    _renderRow(cells, rowIndex) {
        return (
            <tr key={rowIndex}>
                {cells}
            </tr>
        );
    }

    _renderCell(content) {
        return content;
    }

    prepareCells(row) {
        return this.cells.map((value, index) => {
            let content = row[value.attribute];
            let renderMethod = (value.renderCell) ? value.renderCell : this._renderCell;
            return ((<td key={index}>{renderMethod(content, index, row)}</td>));
        });
    }

    renderRows() {
        return this.props.datas.map((row, rowIndex) => {
            let cells = this.prepareCells(row);
            if (this.props.renderRow) {
                return this.props.renderRow(cells, rowIndex);
            }
            return this._renderRow(cells, rowIndex);
        });
    }

    renderHead() {
        return (
            <thead>
                <tr>
                    {this.props.children}
                </tr>
            </thead>
        );
    }
    renderBody() {
        return (
            <tbody>
                {this.renderRows()}
            </tbody>
        );
    }

    render() {
        return (
            <table id={this.props.id} className={this.props.className}>
                {this.renderHead()}
                {this.renderBody()}
            </table>
        );
    }
}
