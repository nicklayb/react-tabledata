import React from 'react';

const TablePaginationPage = ({ currentPage, pageNumber, changeHandler }) => {
    const handleClick = (page) => {
        changeHandler(page);
    };

    return (
            <button currentPage={currentPage} className={currentPage == pageNumber - 1 ? 'active' : ''} onClick={handleClick.bind(this, pageNumber - 1)}>
                {pageNumber}
            </button>
    );
};
export default TablePaginationPage;
