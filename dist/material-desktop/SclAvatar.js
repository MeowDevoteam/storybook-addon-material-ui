"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SclAvatar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Chip = _interopRequireDefault(require("@mui/material/Chip"));

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultProps = {
  scale: 0.8,
  text: 'dummy text'
};
var propTypes = {
  scale: _propTypes["default"].number,
  text: _propTypes["default"].string
};

function SclAvatar(props) {
  var style = {
    transform: "scale(".concat(props.scale, ")"),
    transformOrigin: 'left' //        left: -95 * (1 - props.scale) / 2,
    //        position: 'absolute',

  };
  var chipProps = Object.assign({}, props);
  delete chipProps.text;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], chipProps, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null, props.text[0].toUpperCase()), props.text)));
}

SclAvatar.defaultProps = defaultProps;
SclAvatar.propTypes = propTypes;