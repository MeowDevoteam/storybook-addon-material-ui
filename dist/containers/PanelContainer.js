"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@mui/material/styles");

var beauti = _interopRequireWildcard(require("js-beautify"));

var _AddonPanel = _interopRequireDefault(require("../components/AddonPanel"));

var _WithChannel = _interopRequireDefault(require("../adk/WithChannel"));

var _config = require("../config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var _global = global,
    document = _global.document,
    window = _global.window;
var logger = console;
var lightBaseTheme = (0, _styles.createTheme)();
var PROGRESS_STATUS = {
  'button-clone': 'soon',
  // todo: [] button_clone
  'button-download': 'done',
  // todo: [x] button_download
  'button-clean': 'soon',
  // todo: [] button_clean
  'textarea-edit': 'done',
  // todo: [x] textarea-edit
  'textarea-update': 'done' // todo: [x] textarea-update

};

var progressInfo = function progressInfo() {
  var keys = Object.keys(PROGRESS_STATUS);
  logger.group('PROGRESS_STATUS:');
  keys.forEach(function (val) {
    if (PROGRESS_STATUS[val] === 'done') {
      logger.info("".concat(val, ": ").concat(PROGRESS_STATUS[val]));
      return;
    }

    logger.warn("".concat(val, ": ").concat(PROGRESS_STATUS[val]));
  });
  logger.groupEnd('PROGRESS_STATUS:');
};

var genNameList = function genNameList(themesAppliedList) {
  return themesAppliedList.map(function (val, ind) {
    return val.themeName || "Theme ".concat(ind + 1);
  });
};

var PanelContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(PanelContainer, _React$Component);

  var _super = _createSuper(PanelContainer);

  function PanelContainer(props) {
    var _this;

    _classCallCheck(this, PanelContainer);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this, props].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onInitChannel", function (initData) {
      // const _themesNameList = genNameList(initData.themesAppliedList);
      var themesNameList = genNameList(initData);

      var queryData = _this.queryFetch();

      _this.setState(_objectSpread(_objectSpread({
        themesAppliedList: initData
      }, queryData), {}, {
        themesNameList: themesNameList,
        isReady: true
      }));

      console.log('TCL: PanelContainer -> initData', initData);
    });

    _defineProperty(_assertThisInitialized(_this), "onDataChannel", function (stateData) {
      //        const stateData = JSON.parse(strData);
      var themesNameList = genNameList(stateData.themesAppliedList);
      _this.isChannelData = true; // note: this state received by channel, don't need to send back

      _this.setState(_objectSpread(_objectSpread({}, stateData), {}, {
        themesNameList: themesNameList
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "onThemeSelect", function (ind) {
      _this.setState({
        themeInd: ind
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeTheme", function (str) {
      // const str = event.target.value;
      try {
        var newTheme = JSON.parse(str);
        var themesAppliedList = _this.state.themesAppliedList;
        themesAppliedList[_this.state.themeInd] = newTheme;

        _this.setState({
          themesAppliedList: themesAppliedList,
          isThemeInvalid: false,
          themeString: str
        });
      } catch (e) {
        _this.setState({
          isThemeInvalid: true,
          themeString: str
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onThemeEditing", function (isFocus) {
      return function () {
        var themeString = _this.getCurrentTheme(1);

        _this.setState({
          isThemeEditing: isFocus,
          themeString: themeString
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleSideBar", function (f) {
      _this.setState({
        isSideBarOpen: f
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDnLoadTheme", function () {
      var uri = "data:application/json;charset=utf-8;base64,\n".concat(window.btoa(_this.getCurrentTheme(4)));
      var fileName = _this.state.themesAppliedList[_this.state.themeInd].themeFile || 'theme.json';
      var downloadTheme = document.createElement('a');
      downloadTheme.href = uri;
      downloadTheme.download = fileName;
      document.body.appendChild(downloadTheme);
      downloadTheme.click();
      document.body.removeChild(downloadTheme);
    });

    _defineProperty(_assertThisInitialized(_this), "onCloneTheme", function () {
      progressInfo(_assertThisInitialized(_this));
      return null; //        const themesAppliedList = this.state.themesAppliedList;
      //        const newTheme = Object.assign({}, themesAppliedList[this.state.themeInd]); // fixme:  deeper
      //        newTheme.themeName = `${themesAppliedList[this.state.themeInd].themeName} clone`;
      //        newTheme.themeFile = `${themesAppliedList[this.state.themeInd].themeFile}.clone`;
      //        const newAppliedList = themesAppliedList.slice(0, this.state.themeInd + 1)
      //            .concat(newTheme, themesAppliedList.slice(this.state.themeInd + 1));
      //        const themesNameList = genNameList(newAppliedList);
      //        logger.log(themesNameList);
      //        this.setState({ themesAppliedList: newAppliedList, themesNameList });
    });

    _defineProperty(_assertThisInitialized(_this), "onCleanTheme", function () {
      progressInfo(_assertThisInitialized(_this));
      return null; //        const themesAppliedList = this.state.themesAppliedList;
      //        const newTheme = {};
      //        newTheme.themeName = themesAppliedList[this.state.themeInd].themeName;
      //        newTheme.themeFile = themesAppliedList[this.state.themeInd].themeFile;
      //        themesAppliedList[this.state.themeInd] = newTheme;
      //        const themesNameList = genNameList(themesAppliedList);
      //        this.setState({ themesAppliedList, themesNameList });
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentTheme", function () {
      var indent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      return beauti.js_beautify(JSON.stringify(_this.state.themesAppliedList[_this.state.themeInd]), {
        indent_size: indent,
        indent_char: ' ',
        eol: '\n',
        end_with_newline: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "dataChannelSend", function () {
      if (_this.isChannelData) return false; // this.props.channel.emit(EVENT_ID_BACK, data);

      try {
        var theme = _this.state.themesRenderedList[_this.state.themeInd];

        _this.props.store.send(theme);

        return true;
      } catch (err) {
        return false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "queryFetch", function () {
      var themeInd = _this.props.api.getQueryParam('theme-ind');

      var isSideBarOpen = _this.props.api.getQueryParam('theme-sidebar');

      var isFullTheme = _this.props.api.getQueryParam('theme-full');

      var data = JSON.parse(JSON.stringify({
        themeInd: themeInd,
        isSideBarOpen: isSideBarOpen,
        isFullTheme: isFullTheme
      }));
      var keys = Object.keys(data);
      keys.forEach(function (val) {
        data[val] = JSON.parse(data[val]);
      });
      return data;
    });

    _defineProperty(_assertThisInitialized(_this), "querySet", function (state) {
      if (state.isReady) {
        var themeInd = state.themeInd,
            isSideBarOpen = state.isSideBarOpen,
            isFullTheme = state.isFullTheme;
        var queryParams = {
          'theme-ind': themeInd,
          'theme-sidebar': isSideBarOpen,
          'theme-full': isFullTheme
        };

        _this.props.api.setQueryParams(queryParams);
      }
    });

    _this.state = {
      isReady: false,
      isThemeInvalid: false,
      isThemeEditing: false,
      themeString: '',
      themeInd: 0
    };
    _this.isChannelData = false; // future: get from state with own theme ind

    _this.muiTheme = lightBaseTheme;
    return _this;
  }

  _createClass(PanelContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.props.channel.on(EVENT_ID_INIT, this.onInitChannel);
      // this.props.channel.on(EVENT_ID_DATA, this.onDataChannel);
      this.props.store.connect();
      this.props.store.onData(this.onInitChannel);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      //        if (!this.isChannelData) this.props.channel.emit(EVENT_ID_DATA, nextState);
      this.querySet(this.state);
      this.dataChannelSend(this.state);
      this.isChannelData = false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.disconnect(); // this.props.channel.removeListener(EVENT_ID_INIT, this.onInitChannel);
      // this.props.channel.removeListener(EVENT_ID_DATA, this.onDataChannel);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.isReady ? /*#__PURE__*/_react["default"].createElement(_styles.StyledEngineProvider, {
        injectFirst: true
      }, /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
        theme: this.muiTheme
      }, /*#__PURE__*/_react["default"].createElement(_AddonPanel["default"], {
        themesNameList: this.state.themesNameList,
        defautThemeInd: this.state.themeInd,
        isSideBarOpen: this.state.isSideBarOpen,
        onThemeSelect: this.onThemeSelect,
        onToggleSideBar: this.onToggleSideBar,
        themeJSON: this.state.isThemeInvalid || this.state.isThemeEditing ? this.state.themeString : this.getCurrentTheme(1),
        isThemeInvalid: this.state.isThemeInvalid,
        onThemeEditing: this.onThemeEditing,
        onChangeTheme: this.onChangeTheme,
        onDnLoadTheme: this.onDnLoadTheme,
        onCloneTheme: this.onCloneTheme,
        onCleanTheme: this.onCleanTheme
      }))) : /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          padding: 16,
          fontFamily: '"San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
          color: 'rgb(68, 68, 68)'
        }
      }, "waiting for muiTheme decorator...");
    }
  }]);

  return PanelContainer;
}(_react["default"].Component);

_defineProperty(PanelContainer, "propTypes", {
  store: _propTypes["default"].shape().isRequired,
  api: _propTypes["default"].shape().isRequired
});

var _default = (0, _WithChannel["default"])({
  EVENT_ID_INIT: _config.EVENT_ID_INIT,
  EVENT_ID_DATA: _config.EVENT_ID_DATA,
  EVENT_ID_BACK: _config.EVENT_ID_BACK
})(PanelContainer);

exports["default"] = _default;