"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SclToggle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Switch = _interopRequireDefault(require("@mui/material/Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultProps = {
  scale: 0.7
};
var propTypes = {
  scale: _propTypes["default"].number
};

function SclToggle(props) {
  var style = {
    transform: "scale(".concat(props.scale, ")")
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], props));
}

SclToggle.defaultProps = defaultProps;
SclToggle.propTypes = propTypes;