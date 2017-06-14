import React from 'react';
import TablePaginationPage from './TablePaginationPage';

class TablePagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previousDisabled: true,
            nextDisabled: false,
        };
    }

    handleClick(page) {
        if (page >= 0 && page < this.props.pageCount) {
            this.props.changeHandler(page);
        }
        this.props.currentPage === 0 ? this.setState({ previousDisabled: true }) : this.setState({ previousDisabled: false });
        this.props.currentPage == this.props.pageCount - 2 ? this.setState({ nextDisabled: true }) : this.setState({ nextDisabled: false });
    }

    renderPagination() {
        let paginations = [];
        let current = this.props.currentPage + 1;
        let allPages = this.props.pageCount;
        if (allPages == 0) {
            return;
        }

        if (current > 1) {
            paginations.push(<button disabled={this.props.currentPage === 0 ? this.state.previousDisabled : ''} key='0' onClick={this.handleClick.bind(this, this.props.currentPage - 1)}><i>{'<'}</i></button>);
        }
        paginations.push(<TablePaginationPage currentPage={this.props.currentPage} key='1' pageNumber= {1} changeHandler={this.handleClick.bind(this, 0)}/>);
        if (current > 2) {
            if (current - 2 != 1 && current - 3 != 1) {
                paginations.push('...');
            }
            if (current === allPages && allPages > 3) {
                paginations.push(<TablePaginationPage currentPage={this.props.currentPage} key={current - 2} pageNumber= {current - 2} changeHandler={this.handleClick.bind(this, current - 3)}/>);
            }
            paginations.push(<TablePaginationPage currentPage={this.props.currentPage} key={current - 1} pageNumber= {current - 1} changeHandler={this.handleClick.bind(this, current - 2)}/>);
        }
        if (current != 1 && current != allPages) {
            paginations.push(<TablePaginationPage currentPage={this.props.currentPage} key={current} pageNumber= {current} changeHandler={this.handleClick.bind(this, current - 1)}/>);
        }
        if (current < allPages - 1) {
            paginations.push(<TablePaginationPage currentPage={this.props.currentPage} key={current + 1} pageNumber= {current + 1} changeHandler={this.handleClick.bind(this, current)}/>);
            if (current == 1 && allPages > 3) {
                paginations.push(<TablePaginationPage currentPage={this.props.currentPage} key={current + 2}pageNumber= {current + 2} changeHandler={this.handleClick.bind(this, current + 1)}/>);
            }
            if (current + 1 != allPages - 1 && current + 2 != allPages - 1) {
                paginations.push('...');
            }
        }
        paginations.push(<TablePaginationPage currentPage={this.props.currentPage} key={allPages} pageNumber= {allPages} changeHandler={this.handleClick.bind(this, allPages - 1)}/>);
        if (current < allPages)
            paginations.push(<button onClick={this.handleClick.bind(this, this.props.currentPage + 1)} key={allPages + 1} disabled={this.state.nextDisabled}><i>{'>'}</i></button>);
        return paginations;
    }

    render() {
        return (
            <div className="table-pagination">
                {this.renderPagination()}
            </div>
        );
    }
}
export default TablePagination;
