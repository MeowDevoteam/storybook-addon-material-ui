"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.muiTheme = muiTheme;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/material/styles");

var _config = require("./config");

var _MuiDecorator = _interopRequireDefault(require("./UI/MuiDecorator"));

var _decorator = require("./adk/decorator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var lightBaseTheme = (0, _styles.createTheme)({
  typography: {}
});
var darkBaseTheme = (0, _styles.createTheme)({
  palette: {
    mode: 'dark'
  },
  typography: {}
});
lightBaseTheme.themeName = 'Light Theme';
darkBaseTheme.themeName = 'Dark Theme';

function muiTheme(themes) {
  var store = (0, _decorator.createStore)(_config.EVENT_ID_INIT, _config.EVENT_ID_DATA, _config.EVENT_ID_BACK, 'iframe');
  var themesInitList = [lightBaseTheme, darkBaseTheme];

  if (themes) {
    if (Array.isArray(themes)) {
      themesInitList = themes;
      themesInitList.forEach(function (val, ind) {
        if (typeof val === 'string') {
          /* note: unsupported names goes as lightBaseTheme
          if (val === lightBaseTheme.themeName) {
              themesInitList[ind] = lightBaseTheme;
          }
          */
          if (val === darkBaseTheme.themeName) {
            themesInitList[ind] = darkBaseTheme;
          } else {
            themesInitList[ind] = lightBaseTheme;
          }
        }
      });
    } else {
      themesInitList = [themes];
    }
  }

  store.onConnected(function () {
    return store.sendInit({
      themes: themesInitList,
      themeInd: 0
    });
  });
  return function (story) {
    var storyItem = story();
    return /*#__PURE__*/_react["default"].createElement(_MuiDecorator["default"], {
      story: storyItem,
      initData: {
        themes: themesInitList,
        themeInd: 0
      }
    });
  };
}