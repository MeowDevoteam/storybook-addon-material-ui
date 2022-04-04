"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui_package = require("../Utils/ui_package");

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

var propTypes = {
  themesNameList: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  defautThemeInd: _propTypes["default"].number.isRequired,
  onThemeSelect: _propTypes["default"].func.isRequired,
  onToggleSideBar: _propTypes["default"].func.isRequired,
  isSideBarOpen: _propTypes["default"].bool.isRequired,
  isThemeInvalid: _propTypes["default"].bool.isRequired,
  themeJSON: _propTypes["default"].string.isRequired,
  onChangeTheme: _propTypes["default"].func.isRequired,
  onThemeEditing: _propTypes["default"].func.isRequired,
  onCloneTheme: _propTypes["default"].func.isRequired,
  onDnLoadTheme: _propTypes["default"].func.isRequired,
  onCleanTheme: _propTypes["default"].func.isRequired,
  issuesLink: _propTypes["default"].string
};
var defaultProps = {
  themesNameList: ['BaseLight', 'BaseDark'],
  defautThemeInd: 0,
  onThemeSelect: function onThemeSelect() {},
  onToggleSideBar: function onToggleSideBar() {},
  isSideBarOpen: false,
  onCloneTheme: function onCloneTheme() {},
  onDnLoadTheme: function onDnLoadTheme() {},
  onCleanTheme: function onCleanTheme() {},
  issuesLink: 'https://github.com/sm-react/storybook-addon-material-ui/issues/new'
};
var contextTypes = {
  muiTheme: _propTypes["default"].object
};

var AddonPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(AddonPanel, _React$Component);

  var _super = _createSuper(AddonPanel);

  function AddonPanel(props) {
    var _this;

    _classCallCheck(this, AddonPanel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleThemeChange", function (ev) {
      return _this.setState({
        theme: ev.target.value
      });
    });

    _this.state = {
      value: props.defautThemeInd,
      isThemeEditing: false,
      isThemeValid: true,
      theme: props.themeJSON
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddonPanel, [{
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      }, this.props.onThemeSelect(value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap' // backgroundColor: 'brown', // this.context.muiTheme.palette.canvasColor,

        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
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
        selected: this.state.value,
        title: "Current Theme",
        list: this.props.themesNameList,
        onSelect: this.handleChange
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
      }, /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "library_add",
        title: "Clone Theme",
        label: "Clone Theme",
        onClick: this.props.onCloneTheme
      }), /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "highlight_off",
        title: "Clear Theme",
        label: "Clear Theme",
        onClick: this.props.onCleanTheme
      }), /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "get_app",
        title: "Download Theme",
        label: "Download Theme",
        onClick: this.props.onDnLoadTheme
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 200,
          minWidth: 150,
          flexGrow: 1,
          paddingLeft: 16,
          display: 'flex',
          flexDirection: 'row'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          paddingTop: 16,
          display: 'flex',
          flexDirection: 'column'
        }
      }, /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "bookmark_border",
        title: "Palette",
        label: "Pal",
        compact: true,
        disabled: true
      }), /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "bookmark_border",
        title: "Typography",
        label: "Typ",
        compact: true,
        disabled: true
      }), /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "bookmark_border",
        title: "Spacing",
        label: "Spc",
        compact: true,
        disabled: true
      }), /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "bookmark_border",
        title: "Theme overrides",
        label: "Ove",
        compact: true,
        disabled: true
      }), /*#__PURE__*/_react["default"].createElement(_ui_package.Button, {
        icon: "bookmark_border",
        title: "Full Theme",
        label: "Thm",
        compact: true
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: '100%',
          // flexGrow: 1,
          padding: 16,
          paddingLeft: 4,
          display: 'flex',
          flexDirection: 'column'
        }
      }, /*#__PURE__*/_react["default"].createElement("textarea", {
        style: styleArea,
        value: this.state.theme,
        onChange: this.handleThemeChange,
        onFocus: this.props.onThemeEditing(true),
        onBlur: this.props.onThemeEditing(false)
      }), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick() {
          return _this2.props.onChangeTheme(_this2.state.theme);
        }
      }, "Apply"))), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 130,
          padding: '16px 8px 16px 0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/_react["default"].createElement(_ui_package.Paper, {
        style: {
          backgroundColor: 'lightgoldenrodyellow',
          paddingTop: 16,
          paddingBottom: 16
        }
      }, /*#__PURE__*/_react["default"].createElement(_ui_package.Link, {
        icon: "announcement",
        title: "Material-UI V1 support announcement",
        label: "Material-UI V1 support announcement",
        href: "https://app.qpointsurvey.com/s.aspx?c=F2VOSpTXOlnHHqMaZKSSV5a1ylaCDoRfhut3oNCox34~"
      }), /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          margin: 4,
          textAlign: 'center',
          fontStyle: 'italic',
          fontSize: 11
        }
      }, "Vote for the most useful features"), /*#__PURE__*/_react["default"].createElement("p", {
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

exports["default"] = AddonPanel;
AddonPanel.propTypes = propTypes;
AddonPanel.defaultProps = defaultProps;
AddonPanel.contextTypes = contextTypes;