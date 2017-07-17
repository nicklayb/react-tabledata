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

    const renderPrevious = (paginations) => {
        paginations.push(<button key='0' onClick={handleClick.bind(this, props.currentPage - 1)}><i>{'<'}</i></button>);
    };

    const renderNext = (paginations) => {
        paginations.push(<button onClick={handleClick.bind(this, props.currentPage + 1)} key={props.pageCount + 1}><i>{'>'}</i></button>);
    };

    const renderLeftSidePagination = (current, paginations) => {
        paginations.push(<TablePaginationPage currentPage={props.currentPage} key={current} pageNumber= {current} changeHandler={handleClick.bind(this, current - 1)}/>);
    };

    const renderMiddleSidePagination = (current, paginations) => {
        if (current - 2 != 1 && current - 3 != 1) {
            paginations.push('...');
        }
        if (current === props.pageCount && props.pageCount > 3) {
            paginations.push(<TablePaginationPage currentPage={props.currentPage} key={current - 2} pageNumber= {current - 2} changeHandler={handleClick.bind(this, current - 3)}/>);
        }
        paginations.push(<TablePaginationPage currentPage={props.currentPage} key={current - 1} pageNumber= {current - 1} changeHandler={handleClick.bind(this, current - 2)}/>);
    };

    const renderRightSidePagination = (current, paginations) => {
        paginations.push(<TablePaginationPage currentPage={props.currentPage} key={current + 1} pageNumber= {current + 1} changeHandler={handleClick.bind(this, current)}/>);
        if (current == 1 && props.pageCount > 3) {
            paginations.push(<TablePaginationPage currentPage={props.currentPage} key={current + 2}pageNumber= {current + 2} changeHandler={handleClick.bind(this, current + 1)}/>);
        }
        if (current + 1 != props.pageCount - 1 && current + 2 != props.pageCount - 1) {
            paginations.push('...');
        }
    };

    const renderPagination = () => {
        let paginations = [];
        let current = props.currentPage + 1;
        let allPages = props.pageCount;
        if (!hasPages()) {
            return;
        }

        if (current > 1) {
            renderPrevious(paginations);
        }
        paginations.push(<TablePaginationPage currentPage={props.currentPage} key='1' pageNumber= {1} changeHandler={handleClick.bind(this, 0)}/>);

        if (current > 2) {
            renderMiddleSidePagination(current, paginations);
        }
        if (current != 1 && current != allPages) {
            renderLeftSidePagination(current, paginations);
        }
        if (current < allPages - 1) {
            renderRightSidePagination(current, paginations);
        }
        paginations.push(<TablePaginationPage currentPage={props.currentPage} key={allPages} pageNumber= {allPages} changeHandler={handleClick.bind(this, allPages - 1)}/>);
        if (current < allPages)
            renderNext(paginations);

        return paginations;
    };

    return (
        <div className="table-pagination">
            {renderPagination()}
        </div>
    );
}; export default TablePagination;
