"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _addons = _interopRequireDefault(require("@storybook/addons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChannelStore = /*#__PURE__*/_createClass(function ChannelStore(_ref) {
  var _this = this;

  var EVENT_ID_INIT = _ref.EVENT_ID_INIT,
      EVENT_ID_DATA = _ref.EVENT_ID_DATA,
      EVENT_ID_BACK = _ref.EVENT_ID_BACK,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'store' : _ref$name,
      _ref$initData = _ref.initData,
      _initData = _ref$initData === void 0 ? {} : _ref$initData,
      _ref$isPanel = _ref.isPanel,
      isPanel = _ref$isPanel === void 0 ? false : _ref$isPanel;

  _classCallCheck(this, ChannelStore);

  _defineProperty(this, "onInitChannel", function (initData) {
    _this.store = initData;

    _this.subscriber(_this.store);
  });

  _defineProperty(this, "onDataChannel", function (updData) {
    _this.store = _objectSpread(_objectSpread({}, _this.store), updData);

    _this.subscriber(_this.store);
  });

  _defineProperty(this, "onData", function (subscriberFn) {
    _this.subscriber = subscriberFn;
  });

  _defineProperty(this, "onConnected", function (onConnectedFn) {
    _this.onConnectedFn = onConnectedFn;
  });

  _defineProperty(this, "send", function (data) {
    _this.store = _objectSpread(_objectSpread({}, _this.store), data);

    _this.emit(_this.store);

    _this.subscriber(_this.store);
  });

  _defineProperty(this, "sendInit", function (data) {
    _this.init(data);
  });

  _defineProperty(this, "disconnect", function () {
    _this.removeInit();

    _this.removeData();
  });

  this.store = _initData;
  this.name = name;

  this.subscriber = function () {};

  this.onConnectedFn = function () {};

  this.channel = _addons["default"].getChannel();

  this.connect = function () {
    _this.channel.on(EVENT_ID_INIT, _this.onInitChannel);

    _this.channel.on(isPanel ? EVENT_ID_DATA : EVENT_ID_BACK, _this.onDataChannel);

    _this.onConnectedFn();
  };

  this.emit = function (data) {
    return _this.channel.emit(isPanel ? EVENT_ID_BACK : EVENT_ID_DATA, data);
  };

  this.init = function (data) {
    return _this.channel.emit(EVENT_ID_INIT, data);
  };

  this.removeInit = function () {
    return _this.channel.removeListener(EVENT_ID_INIT, _this.onInitChannel);
  };

  this.removeData = function () {
    return _this.channel.removeListener(EVENT_ID_DATA, _this.onDataChannel);
  };
});

exports["default"] = ChannelStore;