'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.cells = [];
        _this.setupCells();
        return _this;
    }

    _createClass(Table, [{
        key: 'setupCells',
        value: function setupCells() {
            var _this2 = this;

            this.props.children.forEach(function (value) {
                var cell = {};
                cell.attribute = value.props.attribute ? value.props.attribute : null;
                cell.renderCell = value.props.renderCell ? value.props.renderCell : _this2._renderCell;
                _this2.cells.push(cell);
            });
        }
    }, {
        key: '_renderRow',
        value: function _renderRow(cells, rowIndex) {
            return React.createElement(
                'tr',
                { key: rowIndex },
                cells
            );
        }
    }, {
        key: '_renderCell',
        value: function _renderCell(content) {
            return content;
        }
    }, {
        key: 'prepareCells',
        value: function prepareCells(row) {
            var _this3 = this;

            return this.cells.map(function (value, index) {
                var content = row[value.attribute];
                var renderMethod = value.renderCell ? value.renderCell : _this3._renderCell;
                return React.createElement(
                    'td',
                    { key: index },
                    renderMethod(content, index, row)
                );
            });
        }
    }, {
        key: 'renderRows',
        value: function renderRows() {
            var _this4 = this;

            return this.props.datas.map(function (row, rowIndex) {
                var cells = _this4.prepareCells(row);
                if (_this4.props.renderRow) {
                    return _this4.props.renderRow(cells, rowIndex);
                }
                return _this4._renderRow(cells, rowIndex);
            });
        }
    }, {
        key: 'renderHead',
        value: function renderHead() {
            return React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    this.props.children
                )
            );
        }
    }, {
        key: 'renderBody',
        value: function renderBody() {
            return React.createElement(
                'tbody',
                null,
                this.renderRows()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'table',
                { id: this.props.id, className: this.props.className },
                this.renderHead(),
                this.renderBody()
            );
        }
    }]);

    return Table;
}(_react.Component);

exports.default = Table;