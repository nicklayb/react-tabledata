import React, { Component } from 'react';
import TablePagination from './TablePagination';
import Slice from 'lodash/slice';

const DEFAULT_ROWS_PER_PAGE = 10;

export default class Tabledata extends Component {
    constructor(props) {
        super(props);
        this._rowsToDisplay = this.props.rowsPerPage ? this.props.rowsPerPage : DEFAULT_ROWS_PER_PAGE;
        this._datas = (Array.isArray(this.props.datas)) ? this.props.datas : this.props.datas[Object.keys(this.props.datas)[0]];
        this.cells = [];
        this.setupCells();
        this.state = {
            page: 0
        };
        this.handlePageChange = this.handlePageChange.bind(this);
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

    requiresPagination() {
        return this._datas.length > this._rowsToDisplay;
    }

    pageCount() {
        return Math.ceil(this._datas.length / this._rowsToDisplay);
    }

    getPaginatedData() {
        const start = this.getPaginationStart();
        return Slice(this._datas, start, start + this._rowsToDisplay);
    }

    getPaginationStart() {
        return (this.state.page * this._rowsToDisplay);
    }

    handlePageChange(page) {
        this.setState({
            page: page
        });
    }

    renderRows() {
        return this.getPaginatedData().map((row, rowIndex) => {
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

    renderPagination() {
        if (this.requiresPagination()) {
            return <TablePagination currentPage={this.state.page} pageCount= {this.pageCount()} changeHandler={this.handlePageChange}/>;
        }
    }

    render() {
        let Table = this.getTag('table');
        return (
            <div className="table-data-wrapper">
            <Table id={this.props.id} className={this.props.className}>
                {this.renderHead()}
                {this.renderBody()}
            </Table>
            {this.renderPagination()}
        </div>
        );
    }
}
