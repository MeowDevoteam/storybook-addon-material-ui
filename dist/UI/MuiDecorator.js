"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/material/styles");

var _WithChannel = _interopRequireDefault(require("../adk/WithChannel"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var currentTheme = function currentTheme(data) {
  try {
    var theme = data.themes[data.themeInd];
    return (0, _styles.createTheme)(theme);
  } catch (err) {
    return (0, _styles.createTheme)({});
  }
}; // eslint-disable-next-line react/prop-types


var MuiDecorator = function MuiDecorator(_ref) {
  var data = _ref.data,
      story = _ref.story;
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledEngineProvider, {
    injectFirst: true
  }, /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: currentTheme(data)
  }, /*#__PURE__*/_react["default"].createElement("div", null, story)));
};

var _default = (0, _WithChannel["default"])({
  EVENT_ID_INIT: _config.EVENT_ID_INIT,
  EVENT_ID_DATA: _config.EVENT_ID_DATA,
  EVENT_ID_BACK: _config.EVENT_ID_BACK
})(MuiDecorator);

exports["default"] = _default;