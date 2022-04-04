"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _SclToggle = _interopRequireDefault(require("../material-desktop/SclToggle"));

var _SclAvatar = _interopRequireDefault(require("../material-desktop/SclAvatar"));

var _ = require("../");

var _ThemePropItem = _interopRequireDefault(require("./ThemePropItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var propTypes = {
  settingsObj: _propTypes["default"].object.isRequired,
  settingsName: _propTypes["default"].string.isRequired,
  open: _propTypes["default"].func.isRequired,
  onThemeTableOverride: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func.isRequired
};
var contextTypes = {
  muiTheme: _propTypes["default"].object.isRequired
};

var ThemePropBlock = /*#__PURE__*/function (_React$Component) {
  _inherits(ThemePropBlock, _React$Component);

  var _super = _createSuper(ThemePropBlock);

  function ThemePropBlock(props) {
    var _this;

    _classCallCheck(this, ThemePropBlock);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this, props].concat(args));
    _this.state = {
      toolCollapsedList: {}
    };
    _this.needComponentUpdate = false;
    _this.valueHandler = _this.valueHandler.bind(_assertThisInitialized(_this));
    _this.onToolCollapse = _this.onToolCollapse.bind(_assertThisInitialized(_this));
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_this));
    _this.renderProp = _this.renderProp.bind(_assertThisInitialized(_this));
    _this.renderColl = _this.renderColl.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ThemePropBlock, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      var f = this.needComponentUpdate;
      this.needComponentUpdate = false;
      return f;
    }
  }, {
    key: "onToolCollapse",
    value: function onToolCollapse(val) {
      var _this2 = this;

      return function (isCol) {
        var toolCollapsedList = _this2.state.toolCollapsedList;
        toolCollapsedList[val] = isCol;
        _this2.needComponentUpdate = true;

        _this2.setState({
          toolCollapsedList: toolCollapsedList
        });
      };
    }
  }, {
    key: "onSelect",
    value: function onSelect(sel) {
      var select = {
        selectedTable: this.props.settingsName,
        selectedProp: '',
        selectedVal: ''
      };
      var fullSelect = Object.assign(select, sel);
      this.props.onSelect(fullSelect);
    }
  }, {
    key: "valueHandler",
    value: function valueHandler(propName) {
      var _this3 = this;

      return function (event) {
        _this3.needComponentUpdate = true;

        _this3.props.onThemeTableOverride(propName, event.target.value);
      };
    }
  }, {
    key: "renderProp",
    value: function renderProp(val, ind, isOpen, isHeader) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: "".concat(val).concat(ind)
      }, isOpen ? /*#__PURE__*/_react["default"].createElement(_ThemePropItem["default"], {
        val: val,
        ind: ind,
        settingsObj: this.props.settingsObj,
        valueHandler: this.valueHandler,
        isCollapsed: this.state.toolCollapsedList[val],
        onCollapsed: this.onToolCollapse(val),
        isOpen: isOpen || false,
        isHeader: isHeader || false,
        onSelect: this.onSelect
      }) : null);
    }
  }, {
    key: "renderColl",
    value: function renderColl() {
      var _this4 = this;

      var settingsObj = this.props.settingsObj;
      var keyList = Object.keys(settingsObj);
      var rowList = keyList.map(function (val, ind) {
        return _this4.renderProp(val, ind, _this4.props.open());
      });
      return /*#__PURE__*/_react["default"].createElement("div", null, this.renderProp("".concat(this.props.settingsName, "-header"), 0, this.props.open(), true), rowList);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          settingsName = _this$props.settingsName,
          open = _this$props.open;
      var onSelect = this.onSelect;

      var openThis = function openThis(f) {
        if (typeof f === 'undefined') return open();
        _this5.needComponentUpdate = true;
        open(f);
        return null;
      };

      return /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        style: {
          paddingLeft: 16,
          paddingRight: 4,
          paddingTop: 8,
          paddingBottom: 8,
          marginTop: 8
        }
      }, /*#__PURE__*/_react["default"].createElement(BlockHeader, {
        settingsName: settingsName,
        openThis: openThis,
        onSelect: onSelect
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          /* height: 16*/
        }
      }), this.renderColl());
    }
  }]);

  return ThemePropBlock;
}(_react["default"].Component);

exports["default"] = ThemePropBlock;
ThemePropBlock.propTypes = propTypes;
ThemePropBlock.contextTypes = contextTypes;

function BlockHeader(props, context) {
  var toggleHeadStyle = {
    color: context.muiTheme.palette.primary1Color,
    fontSize: context.muiTheme.flatButton.fontSize
  };

  var toggleOpen = function toggleOpen() {
    props.openThis(!props.openThis());
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_SclAvatar["default"], {
    onClick: props.onSelect,
    text: props.settingsName
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_SclToggle["default"], {
    label: "" // labelPosition="right"
    ,
    labelStyle: toggleHeadStyle,
    toggled: props.openThis() || false,
    onToggle: toggleOpen
  })));
}

BlockHeader.contextTypes = contextTypes;
BlockHeader.propTypes = {
  openThis: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func.isRequired,
  settingsName: _propTypes["default"].string.isRequired
};