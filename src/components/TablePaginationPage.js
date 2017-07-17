import React from 'react';

const TablePaginationPage = (props) => {
    const handleClick = (page) => {
        props.changeHandler(page);
    };

    return (
            <button currentPage={props.currentPage} className={props.currentPage == props.pageNumber - 1 ? 'active' : ''} onClick={handleClick.bind(this, props.pageNumber - 1)}>
                <i>{props.pageNumber}</i>
            </button>
    );
};
export default TablePaginationPage;
