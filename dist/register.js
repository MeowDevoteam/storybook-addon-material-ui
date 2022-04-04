"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _AddonPanel = _interopRequireDefault(require("./UI/AddonPanel"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_addons["default"].register(_config.ADDON_ID, function (api) {
  _addons["default"].addPanel(_config.PANEL_ID, {
    title: 'Material-UI',
    render: function render() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          active = _ref.active,
          key = _ref.key;

      return /*#__PURE__*/_react["default"].createElement(_AddonPanel["default"], {
        key: key,
        api: api,
        active: active,
        panel: true,
        pointName: "addon panel"
      });
    }
  });
});