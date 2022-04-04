"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _reactInspector = require("react-inspector");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sortObjectKeys = function sortObjectKeys(a, b) {
  if (a === 'themeName') return -2;
  if (b === 'themeName') return 2;
  if (a === 'palette') return -1;
  if (b === 'palette') return 1;
  return a.charCodeAt(0) - b.charCodeAt(0);
};

var Holder = (0, _styled["default"])('div')(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 1px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  label: PaletteHolder;\n  padding: 8px;\n"])));

var _default = function _default(_ref) {
  var theme = _ref.theme;
  return /*#__PURE__*/_react["default"].createElement(Holder, null, /*#__PURE__*/_react["default"].createElement(_reactInspector.ObjectInspector, {
    expandLevel: 1,
    expandPaths: "$.palette",
    sortObjectKeys: sortObjectKeys,
    data: theme
  }));
};

exports["default"] = _default;