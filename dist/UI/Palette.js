"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styles = require("@mui/material/styles");

var _colorPicker = _interopRequireDefault(require("@usulpro/color-picker"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PaletteHolder = (0, _styled["default"])('div')(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 1px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  color: ", ";\n  label: PaletteHolder;\n  padding: 8px;\n  position: relative;\n"])), function (props) {
  return props.dark ? 'hsl(0, 0%, 44%)' : 'hsl(0, 0%, 90%)';
}, function (props) {
  return props.dark ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 44%)';
});
var PickerOverlap = (0, _styled["default"])('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: hsl(0, 0%, 0%, 0.8);\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var PickerHolder = (0, _styled["default"])('div')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 70%;\n  max-width: 500px;\n  min-width: 250px;\n  background-color: hsl(0, 0%, 50%);\n"])));
var ColorInput = (0, _styled["default"])('div')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-left: 2px;\n  margin-top: 8px;\n  color: hsl(0, 0%, 30%);\n  & input {\n    margin-right: 4px;\n  }\n"])));

var Palette = /*#__PURE__*/function (_React$Component) {
  _inherits(Palette, _React$Component);

  var _super = _createSuper(Palette);

  function Palette() {
    var _this;

    _classCallCheck(this, Palette);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isPickerOpen: false,
      editColor: '',
      palette: _this.props.theme.palette,
      path: []
    });

    _defineProperty(_assertThisInitialized(_this), "prevColor", '');

    _defineProperty(_assertThisInitialized(_this), "onChange", function () {
      // eslint-disable-next-line react/prop-types
      _this.props.onChangePalette(_this.state.palette);
    });

    _defineProperty(_assertThisInitialized(_this), "setPath", function (path, isPickerOpen) {
      return function () {
        var palette = _this.state.palette;

        _this.setState({
          path: path,
          editColor: (0, _styles.createTheme)({
            palette: palette
          }).palette[path[0]][path[1]],
          isPickerOpen: isPickerOpen
        }, function () {
          _this.prevColor = _this.state.editColor;
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "updPalette", function (ev, cb) {
      var _this$state = _this.state,
          path = _this$state.path,
          palette = _this$state.palette;
      var editColor = ev.target.value || _this.prevColor;

      var newPalette = _objectSpread(_objectSpread({}, palette), {}, _defineProperty({}, path[0], _objectSpread(_objectSpread({}, palette[path[0]]), {}, _defineProperty({}, path[1], editColor))));

      _this.setState({
        editColor: editColor,
        palette: newPalette
      }, cb);
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (ev) {
      _this.updPalette(ev, function () {
        _this.onChange();

        _this.setState({
          isPickerOpen: false
        });

        _this.prevColor = _this.state.editColor;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onReset", function (ev) {
      _this.updPalette(ev, function () {
        _this.onChange();

        _this.setState({
          isPickerOpen: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onHover", function (ev) {
      _this.updPalette(ev, function () {
        _this.onChange();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderColorInput", function () {
      return /*#__PURE__*/_react["default"].createElement(ColorInput, null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        onChange: _this.updPalette,
        value: _this.state.editColor
      }), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: _this.onChange
      }, "ok"));
    });

    _defineProperty(_assertThisInitialized(_this), "renderColorSet", function (colorSet, name, isDark) {
      var main = colorSet.main,
          light = colorSet.light,
          dark = colorSet.dark,
          contrastText = colorSet.contrastText;
      var Plate = (0, _styled["default"])('div')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      display: flex;\n      justify-content: space-between;\n      height: 20px;\n      margin: 2px;\n      margin-bottom: ", ";\n      margin-top: ", ";\n    "])), function (props) {
        return props.up ? '0px' : '2px';
      }, function (props) {
        return !props.up ? '0px' : '2px';
      });
      var ColorBox = (0, _styled["default"])('div')(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      width: 1px;\n      flex-grow: 1;\n      border: 1px solid ", ";\n      border: ", ";\n      cursor: ", ";\n    "])), function (props) {
        return props.color || 'rgba(0, 0, 0, 0.1)';
      }, isDark ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 44%)', function (props) {
        return props.color ? '' : 'none';
      }, function (props) {
        return props.color ? 'pointer' : 'text';
      });
      var ColorName = (0, _styled["default"])('div')(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      background-color: rgba(0, 0, 0, 0.1);\n      width: 80px;\n      padding-left: 4px;\n    "])));
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Plate, {
        up: true
      }, /*#__PURE__*/_react["default"].createElement(ColorName, null, name), /*#__PURE__*/_react["default"].createElement(ColorBox, {
        color: light,
        onClick: _this.setPath([name, 'light'], true)
      }), /*#__PURE__*/_react["default"].createElement(ColorBox, {
        color: main,
        onClick: _this.setPath([name, 'main'], true)
      }), /*#__PURE__*/_react["default"].createElement(ColorBox, {
        color: dark,
        onClick: _this.setPath([name, 'dark'], true)
      }), /*#__PURE__*/_react["default"].createElement(ColorBox, {
        color: contrastText,
        onClick: _this.setPath([name, 'contrastText'], true)
      })), /*#__PURE__*/_react["default"].createElement(Plate, null, /*#__PURE__*/_react["default"].createElement(ColorName, null), /*#__PURE__*/_react["default"].createElement(ColorBox, {
        onClick: _this.setPath([name, 'light'])
      }, "light: ".concat(light)), /*#__PURE__*/_react["default"].createElement(ColorBox, {
        onClick: _this.setPath([name, 'main'])
      }, "main: ".concat(main)), /*#__PURE__*/_react["default"].createElement(ColorBox, {
        onClick: _this.setPath([name, 'dark'])
      }, "dark: ".concat(dark)), /*#__PURE__*/_react["default"].createElement(ColorBox, {
        onClick: _this.setPath([name, 'contrastText'])
      }, "contrastText: ".concat(contrastText))));
    });

    return _this;
  }

  _createClass(Palette, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _createTheme = (0, _styles.createTheme)({
        palette: this.state.palette
      }),
          palette = _createTheme.palette;

      var colorSet = function colorSet(name) {
        return _this2.renderColorSet(palette[name], name, _this2.state.palette.mode === 'dark');
      };

      return /*#__PURE__*/_react["default"].createElement(PaletteHolder, {
        dark: this.state.palette.mode === 'dark'
      }, colorSet('primary'), colorSet('secondary'), colorSet('error'), this.renderColorInput(), this.state.isPickerOpen && /*#__PURE__*/_react["default"].createElement(PickerOverlap, null, /*#__PURE__*/_react["default"].createElement(PickerHolder, null, /*#__PURE__*/_react["default"].createElement(_colorPicker["default"], {
        initColor: this.prevColor,
        onSubmit: this.onSubmit,
        onSelect: this.onHover,
        onHover: this.onHover,
        onReset: this.onReset
      }))));
    }
  }]);

  return Palette;
}(_react["default"].Component);

exports["default"] = Palette;

_defineProperty(Palette, "propTypes", {
  // eslint-disable-next-line react/require-default-props
  theme: _propTypes["default"].shape()
});