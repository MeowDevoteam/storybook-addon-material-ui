"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _ContentCopy = _interopRequireDefault(require("@mui/icons-material/ContentCopy"));

var _SwitchCamera = _interopRequireDefault(require("@mui/icons-material/SwitchCamera"));

var _SclToggle = _interopRequireDefault(require("../material-desktop/SclToggle"));

var _SvgButton = _interopRequireDefault(require("../material-desktop/SvgButton"));

var _ = require("../");

var _ThemePropBlock = _interopRequireDefault(require("./ThemePropBlock"));

var _Utils = require("../Utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var BAR_WIDTH = 400;
var propTypes = {
  open: _propTypes["default"].bool.isRequired,
  themeName: _propTypes["default"].string.isRequired,
  theme: _propTypes["default"].object.isRequired,
  muiTheme: _propTypes["default"].object.isRequired,
  fullTheme: _propTypes["default"].func.isRequired,
  shouldComponentUpdate: _propTypes["default"].bool.isRequired,
  shouldShowData: _propTypes["default"].bool.isRequired
};

var ThemeSideBar = /*#__PURE__*/function (_React$Component) {
  _inherits(ThemeSideBar, _React$Component);

  var _super = _createSuper(ThemeSideBar);

  function ThemeSideBar(props) {
    var _this;

    _classCallCheck(this, ThemeSideBar);

    _this = _super.call(this, props);
    _this.state = {
      selectedTable: '',
      selectedProp: '',
      selectedVal: '',
      isSelectedStyleObj: true
    };
    _this.clipString = _this.clipString.bind(_assertThisInitialized(_this));
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_this));
    _this.onSwitchStyleObj = _this.onSwitchStyleObj.bind(_assertThisInitialized(_this));
    _this.onCopy = _this.onCopy.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ThemeSideBar, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // fixme shouldComponentUpdate - remove
      return nextProps.shouldComponentUpdate;
    }
  }, {
    key: "onSelect",
    value: function onSelect(sel) {
      this.setState(sel);
    }
  }, {
    key: "onSwitchStyleObj",
    value: function onSwitchStyleObj() {
      var isObj = this.state.isSelectedStyleObj;
      this.setState({
        isSelectedStyleObj: !isObj
      });
    }
  }, {
    key: "onCopy",
    value: function onCopy() {
      var text = this.clipString();
      (0, _Utils.copyToClipboardThis)(text);
    }
  }, {
    key: "clipString",
    value: function clipString() {
      var table = this.state.selectedTable;
      var prop = this.state.selectedProp;
      var val = this.state.selectedVal;
      var isObj = this.state.isSelectedStyleObj;
      var strTbl = table;
      var strVal = isObj ? "".concat(prop, ": ").concat(val, ",") : "".concat(table, ".").concat(prop, " = ").concat(val, ";");
      return prop ? strVal : strTbl;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var palette = this.context.muiTheme.palette;
      var styleHR = {
        borderBottom: "solid ".concat(palette.borderColor, " 1px")
      };
      var blockStyle = {
        width: 21,
        height: 21,
        marginLeft: 4,
        border: "solid 1px ".concat(palette.borderColor),
        backgroundColor: 'rgba(0, 0, 0, 0)',
        cursor: 'pointer'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_.CSS_CLASS, "-theme_sidebar-content"),
        style: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          paddingLeft: 3,
          paddingBottom: 6
        }
      }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        style: {
          paddingLeft: 16,
          paddingRight: 8,
          paddingTop: 8
        }
      }, /*#__PURE__*/_react["default"].createElement("h3", {
        style: {
          margin: 0,
          marginBottom: 4,
          color: palette.secondaryTextColor,
          fontSize: 16
        }
      }, "".concat(this.props.themeName, " properties")), /*#__PURE__*/_react["default"].createElement("div", {
        style: styleHR
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginTop: 8,
          display: 'flex',
          alignItems: 'center',
          fontSize: 14,
          color: palette.secondaryTextColor
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          color: !this.props.fullTheme() ? palette.textColor : ''
        }
      }, "Theme Settings"), /*#__PURE__*/_react["default"].createElement(_SclToggle["default"], {
        label: "" // labelPosition="right"
        ,
        labelStyle: this.toggleHeadStyle,
        toggled: this.props.fullTheme(),
        onToggle: function onToggle() {
          return _this2.props.fullTheme(!_this2.props.fullTheme());
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          color: this.props.fullTheme() ? palette.textColor : ''
        }
      }, "Full Settings")), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          paddingBottom: 8,
          paddingRight: 8
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginTop: 8,
          //                      paddingBottom: 8,
          //                        padding: 2,
          width: '100%',
          height: 24,
          display: 'flex',
          alignItems: 'center',
          border: '1px grey solid',
          borderColor: palette.borderColor,
          backgroundColor: 'rgba(128, 128, 128, 0.1)'
        }
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        onChange: null,
        value: this.clipString(),
        title: 'click to copy to clipboard',
        disabled: true,
        style: {
          width: '100%',
          padding: 2,
          margin: 0,
          border: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: palette.secondaryTextColor,
          cursor: 'text'
        }
      }), /*#__PURE__*/_react["default"].createElement(_SvgButton["default"], {
        icon: /*#__PURE__*/_react["default"].createElement(_ContentCopy["default"], null),
        tooltip: "Copy to clipboard",
        width: 48,
        onTouchTap: this.onCopy
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 4
        }
      }), /*#__PURE__*/_react["default"].createElement(_SvgButton["default"], {
        icon: /*#__PURE__*/_react["default"].createElement(_SwitchCamera["default"], null),
        tooltip: "switch style",
        width: 48,
        onTouchTap: this.onSwitchStyleObj
      }))))), this.props.shouldShowData ? themesList(this.props.fullTheme() ? this.props.muiTheme : this.props.theme, this.props, this.onSelect) : null);
    }
  }, {
    key: "render",
    value: function render() {
      //        const barWidth = this.props.open ? BAR_WIDTH : 0; // fixme BAR_WIDTH
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_.CSS_CLASS, "-theme_sidebar"),
        style: {
          width: '100%',
          height: '100%'
        }
      }, this.props.open ? this.renderContent() : null);
    }
  }]);

  return ThemeSideBar;
}(_react["default"].Component);

exports["default"] = ThemeSideBar;
ThemeSideBar.propTypes = propTypes;
ThemeSideBar.contextTypes = {
  muiTheme: _propTypes["default"].object.isRequired
};

function forTable(tableTame, objListFunc) {
  return function (val) {
    var objList = objListFunc();
    var obj = objList[tableTame];

    if (val == undefined) {
      return obj;
    }

    objList[tableTame] = val;
    objListFunc(objList);
    return val;
  };
}

function themesList(themeObj, _props, onSelect) {
  var onThemeTableOverride = function onThemeTableOverride(tableName) {
    return function (propName, value) {
      var overTheme = {};

      if (tableName === 'miscellaneous') {
        overTheme[propName] = value;

        _props.onThemeOverride(overTheme);

        return;
      }

      overTheme[tableName] = {};
      overTheme[tableName][propName] = value;

      _props.onThemeOverride(overTheme);
    };
  };

  var themePropTable = function themePropTable(tableName, table) {
    return /*#__PURE__*/_react["default"].createElement(_ThemePropBlock["default"], {
      key: tableName,
      settingsObj: table,
      settingsName: tableName,
      open: forTable(tableName, _props.collapseList),
      override: forTable(tableName, _props.themesOverrideList),
      onThemeTableOverride: onThemeTableOverride(tableName),
      onSelect: onSelect
    });
  };

  var keyList = Object.keys(themeObj);
  var strList = {};
  keyList.forEach(function (val) {
    if (typeof themeObj[val] === 'string') {
      strList[val] = themeObj[val];
    }
  });
  var strListNode = themePropTable('miscellaneous', strList);
  var paletteList = themeObj.palette ? themePropTable('palette', themeObj.palette) : /*#__PURE__*/_react["default"].createElement("div", null, " ", 'No palette here', " ");
  var tablesListObj = keyList.map(function (val) {
    if (_typeof(themeObj[val]) === 'object' && val !== 'palette') {
      return themePropTable(val, themeObj[val]);
    }

    return null;
  });
  var scrollStyle = {
    height: '100%',
    overflowY: 'scroll'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_.CSS_CLASS, "-theme_sidebar-tables"),
    style: {
      height: 100,
      flexGrow: 1,
      flexShrink: 1
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_.CSS_CLASS, "-theme_sidebar-tables-scroll"),
    style: scrollStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingLeft: 3,
      paddingRight: 12
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: 'rgba(128, 128, 128, 0.04)'
    }
  }, paletteList, tablesListObj, strListNode, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: 16
    }
  })))));
}