"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _ui_package = require("../Utils/ui_package");

var _WithChannel = _interopRequireDefault(require("../adk/WithChannel"));

var _config = require("../config");

var _FullTheme = _interopRequireDefault(require("./FullTheme"));

var _Overridings = _interopRequireDefault(require("./Overridings"));

var _Palette = _interopRequireDefault(require("./Palette"));

var _templateObject;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var genNameList = function genNameList(themesAppliedList) {
  return themesAppliedList.map(function (val, ind) {
    return val.themeName || "Theme ".concat(ind + 1);
  });
};

var FlexBlock = (0, _styled["default"])('div')(function (props) {
  return {
    minWidth: 160,
    padding: 16,
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'space-between',
    flexGrow: props.main ? 1 : 0
  };
});
var ModeSection = (0, _styled["default"])('div')(function (props) {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: props.left ? 'center' : 'stretch',
    // height: 1,
    flexGrow: props.left ? 0 : 1,
    padding: props.left ? 2 : 0,
    marginRight: props.left ? 0 : 8,
    border: '1px solid rgba(0, 0, 0, 0.15)',
    borderRight: props.left ? 'none' : null,
    borderLeft: props.left ? null : 'none',
    backgroundColor: props.left ? 'rgba(0, 0, 0, 0.04)' : 'rgba(0, 0, 0, 0.01)',
    overflow: 'auto'
  };
});
var RadioButton = (0, _styled["default"])('button')(function (props) {
  return {
    minWidth: 8,
    minHeight: 8,
    padding: 4,
    backgroundColor: props.active ? 'rgba(255, 255, 255, 0.99)' : 'rgba(255, 255, 255, 0.9)',
    border: props.active ? '1px solid rgba(0, 0, 0, 0.5)' : '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: 2,
    outline: 'none',
    margin: 4,
    // fontFamily:
    //   '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif', // eslint-disable-line
    cursor: 'pointer',
    fontSize: 9,
    fontWeight: 500,
    textDecoration: 'none',
    color: props.active ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.8)',
    '&:hover': {
      backgroundColor: 'white',
      border: '1px solid rgba(0, 0, 0, 0.5)'
    },
    '&[disabled]': {
      border: '1px solid rgba(0, 0, 0, 0.1)',
      color: 'rgba(0, 0, 0, 0.4)',
      cursor: 'default'
    }
  };
});
var CMTButton = (0, _styled["default"])('div')(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  border: 1px solid #c5c5c5;\n  background-color: #f7f7f7;\n  border-radius: 2px;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1)\n  }\n"])));
var MODS_LIST = [{
  title: 'Palette',
  id: 'palette',
  label: 'P'
}, {
  title: 'Overridings',
  id: 'overridings',
  label: 'O'
}, {
  title: 'Spacing',
  id: 'spacing',
  label: 'S',
  disabled: true
}, {
  title: 'Typography',
  id: 'typography',
  label: 'T',
  disabled: true
}, {
  title: 'Full',
  id: 'full',
  label: 'F'
}];

var AddonPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(AddonPanel, _React$Component);

  var _super = _createSuper(AddonPanel);

  function AddonPanel() {
    var _this;

    _classCallCheck(this, AddonPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.defautThemeInd,
      isThemeEditing: false,
      isThemeValid: true,
      theme: _this.props.themeJSON,
      currentMode: MODS_LIST[0].id
    });

    _defineProperty(_assertThisInitialized(_this), "setMode", function (currentMode) {
      return function () {
        return _this.setState({
          currentMode: currentMode
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      _this.setState({
        value: value
      }, _this.props.onThemeSelect(value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleThemeChange", function (ev) {
      return _this.setState({
        theme: ev.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangePalette", function (palette) {
      var _this$props$data = _this.props.data,
          themeInd = _this$props$data.themeInd,
          themes = _this$props$data.themes;
      themes[themeInd].palette = palette;

      _this.props.sendData({
        themes: themes
      });
    });

    return _this;
  }

  _createClass(AddonPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      var currentMode = this.state.currentMode;
      if (!data) return 'Waiting for theme';
      var themes = data.themes;
      var theme;

      try {
        theme = themes[data.themeInd];
      } catch (err) {
        return 'Error...';
      }

      var themeStr = JSON.stringify(theme);
      var styleArea = {
        width: '100%',
        // height: '100%',
        outlineColor: this.props.isThemeInvalid ? '#cc5858' : '#26acd8',
        flexGrow: 1
      };
      var buttonStyle = {
        height: 34,
        width: 34,
        fontSize: 10,
        fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
        marginBottom: 4
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between' // flexWrap: 'wrap'
          // backgroundColor: 'brown', // this.context.muiTheme.palette.canvasColor,

        }
      }, /*#__PURE__*/_react["default"].createElement(FlexBlock, {
        style: {
          minWidth: 160,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginLeft: -4
        }
      }, /*#__PURE__*/_react["default"].createElement(_ui_package.Dropdown, {
        selected: data.themeInd,
        title: "Current Theme",
        list: genNameList(themes),
        onSelect: function onSelect(themeInd) {
          return _this2.props.sendData({
            themeInd: themeInd
          });
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          //                    width: '100%',
          minHeight: 60,
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: -4,
          marginBottom: -8,
          flexDirection: 'column'
        }
      }, /*#__PURE__*/_react["default"].createElement(CMTButton, null, /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "library_add",
        title: "Clone Theme",
        label: "Clone Theme"
      }, "Clone Theme"), /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "highlight_off",
        title: "Clear Theme",
        label: "Clear Theme"
      }), /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "get_app",
        title: "Download Theme",
        label: "Download Theme"
      })))), /*#__PURE__*/_react["default"].createElement(FlexBlock, {
        direction: "row",
        main: true
      }, /*#__PURE__*/_react["default"].createElement(ModeSection, {
        left: true
      }, MODS_LIST.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(RadioButton, {
          key: item.id,
          title: item.title,
          disabled: item.disabled,
          active: item.id === _this2.state.currentMode,
          onClick: _this2.setMode(item.id)
        }, item.label);
      })), /*#__PURE__*/_react["default"].createElement(ModeSection, null, currentMode === 'palette' && /*#__PURE__*/_react["default"].createElement(_Palette["default"], {
        theme: theme,
        onChangePalette: this.onChangePalette,
        key: "#".concat(data.themeInd, "@").concat(theme.themeName)
      }), currentMode === 'overridings' && /*#__PURE__*/_react["default"].createElement(_Overridings["default"], {
        theme: theme
      }), currentMode === 'full' && /*#__PURE__*/_react["default"].createElement(_FullTheme["default"], {
        theme: theme
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 130,
          padding: '16px 8px 16px 0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/_react["default"].createElement(_ui_package.Paper, {
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          paddingTop: 16,
          paddingBottom: 16
        }
      }, /*#__PURE__*/_react["default"].createElement(_ui_package.Link, {
        icon: "announcement",
        title: "Material-UI V3",
        label: "Material-UI V3",
        href: "https://app.qpointsurvey.com/s.aspx?c=F2VOSpTXOlnHHqMaZKSSV5a1ylaCDoRfhut3oNCox34~"
      }), /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          textDecoration: 'none',
          margin: 'auto',
          textAlign: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://app.qpointsurvey.com/s.aspx?c=F2VOSpTXOlnHHqMaZKSSV5a1ylaCDoRfhut3oNCox34~",
        target: "_blank",
        rel: "noopener noreferrer"
      }, '> HERE <'))), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          marginBottom: -8
        }
      }, /*#__PURE__*/_react["default"].createElement(_ui_package.Link, {
        icon: "pageview",
        title: "Documentation",
        label: "Documentation",
        href: "https://github.com/sm-react/storybook-addon-material-ui"
      }), /*#__PURE__*/_react["default"].createElement(_ui_package.Link, {
        icon: "help_outline",
        title: "ask for help",
        label: "Help",
        href: this.props.issuesLink
      }))));
    }
  }]);

  return AddonPanel;
}(_react["default"].Component);

var _default = (0, _WithChannel["default"])({
  EVENT_ID_INIT: _config.EVENT_ID_INIT,
  EVENT_ID_DATA: _config.EVENT_ID_DATA,
  EVENT_ID_BACK: _config.EVENT_ID_BACK
})(AddonPanel);

exports["default"] = _default;