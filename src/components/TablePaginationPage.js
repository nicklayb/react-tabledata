import React from 'react';

class TablePaginationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(page) {
        this.props.changeHandler(page);
    }

    render() {
        return (
                <button currentPage={this.props.currentPage} className={this.props.currentPage == this.props.pageNumber - 1 ? 'active' : ''} onClick={this.handleClick.bind(this, this.props.pageNumber - 1)}>
                    <i>{this.props.pageNumber}</i>
                </button>
        );
    }
}
export default TablePaginationPage;
