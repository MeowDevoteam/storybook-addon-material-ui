"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStore = exports.createStore = void 0;

var _ChannelStore = _interopRequireDefault(require("./ChannelStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var panelStore;

var createStore = function createStore(EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK) {
  panelStore = new _ChannelStore["default"](EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK);
  return panelStore;
};

exports.createStore = createStore;

var getStore = function getStore() {
  return panelStore;
};

exports.getStore = getStore;