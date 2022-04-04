"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@mui/material/styles");

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

// future: [x] remove ThemeToolbar
// import ThemeSideBar from '../components/ThemeSideBar';
// const stringify = require('json-stringify-safe');
var propTypes = {
  themesAppliedListInit: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  story: _propTypes["default"].shape().isRequired,
  onChangeState: _propTypes["default"].func.isRequired,
  onThemeOverride: _propTypes["default"].func.isRequired,
  // themeListRender: PropTypes.func.isRequired,
  initState: _propTypes["default"].shape().isRequired,
  // channel: PropTypes.object.isRequired
  store: _propTypes["default"].shape().isRequired
};

var MuiTheme = /*#__PURE__*/function (_React$Component) {
  _inherits(MuiTheme, _React$Component);

  var _super = _createSuper(MuiTheme);

  function MuiTheme(props, context) {
    var _this;

    _classCallCheck(this, MuiTheme);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "onChannel", function (theme) {
      _this.setState({
        currentTheme: theme
      });
    });

    _this.state = props.initState;
    _this.state.themesAppliedList = props.themesAppliedListInit;
    _this.state.currentTheme = {}; // this.state.muiTheme = createTheme(props.themesAppliedListInit[props.initState.themeInd]); // Not working yet

    _this.state.muiTheme = (0, _styles.createTheme)();
    _this.state.isMount = false;
    _this.isChannelData = false;
    _this.UpdateList = {};
    _this.changeTheme = _this.changeTheme.bind(_assertThisInitialized(_this));
    _this.onChannel = _this.onChannel.bind(_assertThisInitialized(_this));
    _this.openSideBar = _this.openSideBar.bind(_assertThisInitialized(_this));
    _this.onThemeOverride = _this.onThemeOverride.bind(_assertThisInitialized(_this));
    _this.subState = _this.subState.bind(_assertThisInitialized(_this));
    _this.wouldComponentUpdate = _this.wouldComponentUpdate.bind(_assertThisInitialized(_this));
    _this.needComponentUpdate = _this.needComponentUpdate.bind(_assertThisInitialized(_this)); // this.dataChannelSend = this.dataChannelSend.bind(this);

    return _this;
  }

  _createClass(MuiTheme, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.props.channel.on(EVENT_ID_BACK, this.onChannel);
      // if (!this.state.isMount) {
      //   setTimeout(() => {
      //     this.needComponentUpdate('ThemeSideBar');
      //     this.setState({ isMount: true });
      //   }, 1);
      // }
      this.props.store.onData(this.onChannel);
      this.props.store.connect();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return true; // fixme: shouldComponentUpdate
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.onChangeState(this.state); // this.dataChannelSend(this.state);

      this.isChannelData = false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // this.props.channel.removeListener(EVENT_ID_BACK, this.onChannel);
      this.store.disconnect();
    }
  }, {
    key: "onThemeOverride",
    value: function onThemeOverride() {
      var _this2 = this;

      var propsThemeOverFunc = this.props.onThemeOverride(this.state.themeInd);
      return function (overTheme) {
        var themesAppliedList = propsThemeOverFunc(overTheme);

        _this2.needComponentUpdate('ThemeSideBar');

        _this2.setState({
          themesAppliedList: themesAppliedList
        });
      };
    }
  }, {
    key: "changeTheme",
    value: function changeTheme(ind) {
      this.needComponentUpdate('ThemeSideBar');
      this.setState({
        // muiTheme: createTheme(this.state.themesAppliedList[ind]),
        muiTheme: (0, _styles.createTheme)(),
        themeInd: ind
      });
    }
  }, {
    key: "openSideBar",
    value: function openSideBar(f) {
      this.needComponentUpdate('ThemeSideBar');
      this.setState({
        isSideBarOpen: f
      });
    }
  }, {
    key: "subState",
    value: function subState(componentName, prop) {
      var _this3 = this;

      return function (val) {
        if (val == undefined) {
          return _this3.state[prop];
        }

        var subState = {};
        subState[prop] = val;

        _this3.setState(subState);

        _this3.needComponentUpdate(componentName);

        return val;
      };
    }
  }, {
    key: "wouldComponentUpdate",
    value: function wouldComponentUpdate(componentName) {
      if (this.UpdateList[componentName] == undefined) {
        this.UpdateList[componentName] = false;
      }

      var upd = this.UpdateList[componentName];
      this.UpdateList[componentName] = false;
      return upd;
    }
  }, {
    key: "needComponentUpdate",
    value: function needComponentUpdate(componentName) {
      this.UpdateList[componentName] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var theme = (0, _styles.createTheme)(this.state.currentTheme);
      return /*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement("div", null, this.props.story));
    }
  }]);

  return MuiTheme;
}(_react["default"].Component);

exports["default"] = MuiTheme;
MuiTheme.propTypes = propTypes;