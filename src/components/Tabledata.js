import React, { Component } from 'react';

export default class Tabledata extends Component {
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
        let Row = this.getTag('tr');
        return (
            <Row key={rowIndex}>
                {cells}
            </Row>
        );
    }

    _renderCell(content) {
        return content;
    }

    prepareCells(row) {
        let Cell = this.getTag('td');
        return this.cells.map((value, index) => {
            let content = row[value.attribute];
            let renderMethod = (value.renderCell) ? value.renderCell : this._renderCell;
            return ((<Cell key={index}>{renderMethod(content, index, row)}</Cell>));
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

    getTag(tag) {
        return (this.props[tag]) ? this.props[tag] : tag;
    }

    renderHead() {
        let Row = this.getTag('tr');
        let Thead = this.getTag('thead');
        return (
            <Thead>
                <Row>
                    {this.props.children}
                </Row>
            </Thead>
        );
    }

    renderBody() {
        let Tbody = this.getTag('tbody');
        return (
            <Tbody>
                {this.renderRows()}
            </Tbody>
        );
    }

    render() {
        let Table = this.getTag('table');
        return (
            <Table id={this.props.id} className={this.props.className}>
                {this.renderHead()}
                {this.renderBody()}
            </Table>
        );
    }
}
