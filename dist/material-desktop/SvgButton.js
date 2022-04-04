"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

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
  iconScale: _propTypes["default"].number.isRequired,
  icon: _propTypes["default"].element.isRequired,
  tooltip: _propTypes["default"].string,
  width: _propTypes["default"].number,
  onTouchTap: _propTypes["default"].func
};
var defaultProps = {
  iconScale: 0.8,
  tooltipPosition: 'top-center',
  width: 32,
  tooltip: '',
  onTouchTap: function onTouchTap() {}
}; // const contextTypes = {
//     muiTheme: PropTypes.object.isRequired,
// };

var SvgButton = /*#__PURE__*/function (_React$Component) {
  _inherits(SvgButton, _React$Component);

  var _super = _createSuper(SvgButton);

  function SvgButton(props, context) {
    var _this;

    _classCallCheck(this, SvgButton);

    _this = _super.call(this, props, context);
    _this.scaleProp = {
      style: {
        transform: "scale(".concat(props.iconScale, ")"),
        width: 24,
        margin: '0 auto'
      }
    };
    _this.butnProp = {
      style: {
        marginLeft: (24 - props.width) / 2,
        width: props.width,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden'
      },
      title: props.tooltip,
      onClick: props.onClick
    };
    return _this;
  }

  _createClass(SvgButton, [{
    key: "render",
    value: function render() {
      var icon = /*#__PURE__*/_react["default"].cloneElement(this.props.icon, {// color: this.context.muiTheme.palette.secondaryTextColor,
      });

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 24
        }
      }, /*#__PURE__*/_react["default"].createElement("div", this.butnProp, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 48
        }
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        tooltip: null,
        style: {
          padding: 0
        },
        size: "large"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", this.scaleProp, icon))))));
    }
  }]);

  return SvgButton;
}(_react["default"].Component);

exports["default"] = SvgButton;
SvgButton.propTypes = propTypes;
SvgButton.defaultProps = defaultProps; // SvgButton.contextTypes = contextTypes;