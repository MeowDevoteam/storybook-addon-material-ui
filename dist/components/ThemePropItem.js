"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tab = _interopRequireDefault(require("@mui/material/Tab"));

var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));

var _Slide = _interopRequireDefault(require("@mui/material/Slide"));

var _colorPicker = _interopRequireDefault(require("@usulpro/color-picker"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  val: _propTypes["default"].string.isRequired,
  ind: _propTypes["default"].number.isRequired,
  settingsObj: _propTypes["default"].object.isRequired,
  valueHandler: _propTypes["default"].func.isRequired,
  isCollapsed: _propTypes["default"].bool.isRequired,
  onCollapsed: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func.isRequired,
  isOpen: _propTypes["default"].bool.isRequired,
  isHeader: _propTypes["default"].bool.isRequired
};
var defaultProps = {
  val: 'val',
  ind: 7,
  settingsObj: {},
  valueHandler: function valueHandler() {},
  isCollapsed: true,
  isOpen: true,
  isHeader: true
};
var contextTypes = {
  muiTheme: _propTypes["default"].object.isRequired
};

var ThemePropItem = /*#__PURE__*/function (_React$Component) {
  _inherits(ThemePropItem, _React$Component);

  var _super = _createSuper(ThemePropItem);

  function ThemePropItem(props) {
    var _this;

    _classCallCheck(this, ThemePropItem);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this, props].concat(args));
    _this.onToolTogle = _this.onToolTogle.bind(_assertThisInitialized(_this));
    _this.renderProp = _this.renderProp.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ThemePropItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return true; // future: shouldComponentUpdate
      //        const val = this.props.val;
      //        const shouldCollapsed = (nextProps.isCollapsed !== this.props.isCollapsed);
      //        const shouldOpen = (nextProps.isOpen !== this.props.isOpen);
      //        const shouldsettingsObj = (nextProps.settingsObj[val] !== this.props.settingsObj[val]);
      //        const shouldUpdate = (shouldCollapsed || shouldOpen || shouldsettingsObj);
      //        if (shouldUpdate) {
      //            console.log(
      //      `shouldUpdate: ${val} ${shouldCollapsed} ${shouldOpen} ${shouldsettingsObj}`
      //      );
      //        }
      //        return shouldUpdate;
    }
  }, {
    key: "onToolTogle",
    value: function onToolTogle() {
      this.props.onCollapsed(!this.props.isCollapsed);
    }
  }, {
    key: "renderProp",
    value: function renderProp(isNotHeader) {
      var palette = this.context.muiTheme.palette;
      var _this$props = this.props,
          ind = _this$props.ind,
          val = _this$props.val,
          valueHandler = _this$props.valueHandler,
          isCollapsed = _this$props.isCollapsed,
          isOpen = _this$props.isOpen,
          onSelect = _this$props.onSelect;
      var settingsObj = this.props.settingsObj || {
        isNotHeader: isNotHeader
      };
      var onToolTogle = this.onToolTogle;
      var styleHR = {
        borderBottom: "solid ".concat(palette.borderColor, " 1px")
      };
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(PropItem, {
        ind: ind,
        val: val,
        settingsObj: settingsObj,
        valueHandler: valueHandler,
        isNotHeader: isNotHeader,
        onToolTogle: onToolTogle,
        isOpen: isOpen,
        onSelect: onSelect
      }), /*#__PURE__*/_react["default"].createElement(PropToolPicker, {
        isCollapsed: isCollapsed,
        onToolTogle: onToolTogle,
        settingsObj: isNotHeader ? settingsObj[val] : '',
        valueHandler: valueHandler(val)
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: isOpen ? 1 : 0,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: styleHR
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, this.renderProp(!this.props.isHeader));
    }
  }]);

  return ThemePropItem;
}(_react["default"].Component);

exports["default"] = ThemePropItem;
ThemePropItem.propTypes = propTypes;
ThemePropItem.defaultProps = defaultProps;
ThemePropItem.contextTypes = contextTypes;

function PropItem(props, context) {
  var palette = context.muiTheme.palette;
  var settingsObj = props.settingsObj,
      val = props.val,
      ind = props.ind,
      valueHandler = props.valueHandler,
      isNotHeader = props.isNotHeader;
  var color = typeof settingsObj[val] === 'string' ? settingsObj[val] : '';

  var onSelect = function onSelect() {
    var select = {
      selectedProp: val,
      selectedVal: "'".concat(settingsObj[val], "'")
    };
    props.onSelect(select);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_.CSS_CLASS, "-prop-item"),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      paddingRight: 4,
      paddingTop: isNotHeader ? 4 : 16,
      fontSize: 12,
      //            height: isOpen ? 24 : 0,
      transition: 'all 100ms ease 0ms',
      overflow: 'hidden',
      color: isNotHeader ? '' : palette.secondaryTextColor
    },
    onClick: onSelect
  }, /*#__PURE__*/_react["default"].createElement(PropHeader, {
    val: val,
    ind: ind,
    isNotHeader: isNotHeader
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_.CSS_CLASS, "-prop-value"),
    style: {
      width: 'auto',
      flexShrink: 1,
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(PropInput, {
    valueHandler: valueHandler(val) || null,
    settingsObj: settingsObj[val] || '',
    isNotHeader: isNotHeader
  }), /*#__PURE__*/_react["default"].createElement(PropTool, {
    color: color,
    onTool: props.onToolTogle,
    isNotHeader: isNotHeader
  })));
}

PropItem.propTypes = {
  settingsObj: _propTypes["default"].shape().isRequired,
  val: _propTypes["default"].string.isRequired,
  ind: _propTypes["default"].number.isRequired,
  onToolTogle: _propTypes["default"].func.isRequired,
  onSelect: _propTypes["default"].func.isRequired,
  valueHandler: _propTypes["default"].func.isRequired,
  //    isOpen: PropTypes.bool.isRequired,
  isNotHeader: _propTypes["default"].bool.isRequired
};
PropItem.contextTypes = contextTypes;

function PropHeader(props, context) {
  var ind = props.ind,
      val = props.val,
      isNotHeader = props.isNotHeader;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_.CSS_CLASS, "-prop-header"),
    title: val,
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      overflowX: 'hidden',
      flexShrink: 2,
      flexGrow: 10,
      width: 90
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: context.muiTheme.palette.secondaryTextColor
    }
  }, isNotHeader ? ind + 1 : '#'), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginLeft: 16,
      marginRight: 16,
      minWidth: 100,
      textAlign: 'left',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, isNotHeader ? val : 'Prop Name')));
}

PropHeader.propTypes = {
  val: _propTypes["default"].string.isRequired,
  ind: _propTypes["default"].number.isRequired,
  isNotHeader: _propTypes["default"].bool.isRequired
};
PropHeader.contextTypes = contextTypes;

function PropInput(props, context) {
  var palette = context.muiTheme.palette;
  var valueHandler = props.valueHandler,
      settingsObj = props.settingsObj,
      isNotHeader = props.isNotHeader;
  var isInt = settingsObj === parseInt(settingsObj, 10);
  var strStyle = {
    width: isInt ? 40 : 'auto',
    textAlign: isInt ? 'right' : 'left'
  };
  return isNotHeader ? /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    onChange: valueHandler,
    value: settingsObj,
    title: settingsObj,
    style: _objectSpread({
      border: 'none',
      fontStyle: 'italic',
      padding: 2,
      backgroundColor: palette.canvasColor,
      color: palette.primary2Color
    }, strStyle)
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      border: 'none',
      minWidth: 162,
      padding: 2
    }, strStyle)
  }, "Prop Value");
}

PropInput.propTypes = {
  settingsObj: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  valueHandler: _propTypes["default"].func.isRequired,
  isNotHeader: _propTypes["default"].bool.isRequired
};
PropInput.contextTypes = contextTypes;

function PropTool(props, context) {
  var palette = context.muiTheme.palette;
  var isNotHeader = props.isNotHeader;
  var blockStyle = {
    width: 16,
    height: 16,
    marginLeft: 4,
    border: "solid 1px ".concat(palette.borderColor),
    backgroundColor: isNotHeader ? props.color : 'rgba(0, 0, 0, 0)',
    cursor: isNotHeader ? 'pointer' : ''
  };
  var toolProps = {
    style: blockStyle,
    title: isNotHeader ? props.color : 'view',
    onClick: isNotHeader ? props.onTool : null
  };
  return /*#__PURE__*/_react["default"].createElement("div", toolProps);
}

PropTool.propTypes = {
  isNotHeader: _propTypes["default"].bool.isRequired,
  color: _propTypes["default"].string.isRequired,
  onTool: _propTypes["default"].func.isRequired
};
PropTool.contextTypes = contextTypes;

function PropToolPicker(props, context) {
  var settingsObj = props.settingsObj,
      valueHandler = props.valueHandler,
      onToolTogle = props.onToolTogle;
  var initColor = "".concat(settingsObj);
  var style = {
    height: props.isCollapsed ? 0 : 200,
    transition: 'height 300ms ease 0ms',
    overflow: 'hidden'
  };

  var onSubmit = function onSubmit(event) {
    valueHandler(event);
    onToolTogle();
  }; // fixme: check onReset


  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      border: 'solid 1px grey'
    }
  }, /*#__PURE__*/_react["default"].createElement(_colorPicker["default"], {
    initColor: initColor,
    onSubmit: onSubmit,
    onSelect: valueHandler,
    onHover: valueHandler,
    onReset: onSubmit
  })));
}

PropToolPicker.propTypes = {
  settingsObj: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  isCollapsed: _propTypes["default"].bool.isRequired,
  valueHandler: _propTypes["default"].func.isRequired,
  onToolTogle: _propTypes["default"].func.isRequired
};
PropToolPicker.contextTypes = contextTypes; // future: we will use when all components be ready

function PropToolPickerFull(props, context) {
  var settingsObj = props.settingsObj,
      valueHandler = props.valueHandler,
      onToolTogle = props.onToolTogle;
  var initColor = "".concat(settingsObj);
  var style = {
    height: props.isCollapsed ? 0 : 200,
    transition: 'height 300ms ease 0ms',
    overflow: 'hidden'
  };
  var tabStyle = {
    height: 16,
    marginTop: -12,
    fontSize: 12
  };

  var onSubmit = function onSubmit(event) {
    valueHandler(event);
    onToolTogle();
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
    tabItemContainerStyle: {
      height: 24
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Color",
    style: tabStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      border: 'solid 1px grey'
    }
  }, /*#__PURE__*/_react["default"].createElement(_colorPicker["default"], {
    initColor: initColor,
    onSubmit: onSubmit,
    onSelect: valueHandler,
    onReset: onSubmit
  }))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Number",
    style: tabStyle
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Tab Two"), /*#__PURE__*/_react["default"].createElement("p", null, "This is another example tab."))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "String",
    "data-route": "/home",
    onActive: null,
    style: tabStyle
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Tab Three"), /*#__PURE__*/_react["default"].createElement("p", null, "This is a third example tab."))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Palette",
    style: tabStyle
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Tab Two"), /*#__PURE__*/_react["default"].createElement("p", null, "This is another example tab."), /*#__PURE__*/_react["default"].createElement(_Slide["default"], {
    name: "slider0",
    defaultValue: 0.5
  }))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Icon",
    style: tabStyle
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Tab Two"), /*#__PURE__*/_react["default"].createElement("p", null, "This is another example tab."), /*#__PURE__*/_react["default"].createElement(_Slide["default"], {
    name: "slider0",
    defaultValue: 0.5
  })))));
}

PropToolPickerFull.propTypes = {
  settingsObj: _propTypes["default"].shape().isRequired,
  isCollapsed: _propTypes["default"].bool.isRequired,
  valueHandler: _propTypes["default"].func.isRequired,
  onToolTogle: _propTypes["default"].func.isRequired
};
PropToolPickerFull.contextTypes = contextTypes;