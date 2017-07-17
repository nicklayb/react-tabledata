import React from 'react';
import TablePaginationPage from './TablePaginationPage';

const TablePagination = (props) => {
    const handleClick = (page) => {
        if (page >= 0 && page < props.pageCount) {
            props.changeHandler(page);
        }
    };

    const hasPages = () => {
        return props.pageCount > 0;
    };

    const renderPrevious = () => {
        return <button key='0' onClick={handleClick.bind(this, props.currentPage - 1)}><i>{'<'}</i></button>;
    };

    const renderNext = () => {
        return <button onClick={handleClick.bind(this, props.currentPage + 1)} key={props.pageCount + 1}><i>{'>'}</i></button>;
    };

    const renderLeftSidePagination = (current) => {
        if (current != 1 && current != props.pageCount) {
            return <TablePaginationPage currentPage={props.currentPage} key={current} pageNumber= {current} changeHandler={handleClick.bind(this, current - 1)}/>;
        }
    };

    const renderMiddleSidePagination = (current) => {
        let paginations = [];
        if (current > 2) {
            if (current - 2 != 1 && current - 2 != 1) {
                paginations.push('...');
            }
            if (current === props.pageCount && props.pageCount > 3) {
                paginations.push(<TablePaginationPage currentPage={props.currentPage} key={current - 2} pageNumber= {current - 2} changeHandler={handleClick.bind(this, current - 3)}/>);
            }
            paginations.push(<TablePaginationPage currentPage={props.currentPage} key={current - 1} pageNumber= {current - 1} changeHandler={handleClick.bind(this, current - 2)}/>);
        }
        return paginations;
    };

    const renderRightSidePagination = (current) => {
        let paginations = [];
        if (current < props.pageCount - 1) {
            paginations.push(<TablePaginationPage currentPage={props.currentPage} key={current + 1} pageNumber= {current + 1} changeHandler={handleClick.bind(this, current)}/>);
            if (current == 1 && props.pageCount > 3) {
                paginations.push(<TablePaginationPage currentPage={props.currentPage} key={current + 2}pageNumber= {current + 2} changeHandler={handleClick.bind(this, current + 1)}/>);
            }
            if (current + 1 != props.pageCount - 1 && current + 2 != props.pageCount) {
                paginations.push('...');
            }
        }
        return paginations;
    };

    const renderPagination = () => {
        let paginations = [];
        let current = props.currentPage + 1;

        if (hasPages()) {
            if (current > 1)
                paginations.push(renderPrevious());

            paginations.push(<TablePaginationPage currentPage={props.currentPage} key='1' pageNumber= {1} changeHandler={handleClick.bind(this, 0)}/>);
            paginations.push(renderMiddleSidePagination(current));
            paginations.push(renderLeftSidePagination(current));
            paginations.push(renderRightSidePagination(current));
            paginations.push(<TablePaginationPage currentPage={props.currentPage} key={props.pageCount} pageNumber= {props.pageCount} changeHandler={handleClick.bind(this, props.pageCount - 1)}/>);

            if (current < props.pageCount)
                paginations.push(renderNext());
        }
        return paginations;
    };

    return (
        <div className="table-pagination">
        {renderPagination()}
        </div>
    );
}; export default TablePagination;
