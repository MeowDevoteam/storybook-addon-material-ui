"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.CheckBox = CheckBox;
exports.Dropdown = Dropdown;
exports.Link = Link;
exports.Paper = Paper;
exports.Tag = Tag;
exports.Toggle = Toggle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import images from './svg_package';
var images = {};
var iconStyle = {
  width: 18,
  opacity: 0.6,
  marginRight: 8
};
var buttonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  border: 'none',
  outline: 'none',
  padding: 0,
  margin: 4,
  display: 'flex',
  alignItems: 'center',
  fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
  // eslint-disable-line
  cursor: 'pointer',
  fontSize: 12,
  textDecoration: 'none',
  color: 'black'
};

var selectStyle = _objectSpread(_objectSpread({}, buttonStyle), {}, {
  border: '#d9d9d9 1px solid',
  borderRadius: 2,
  backgroundColor: '#e8e8e8',
  padding: 2,
  boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
  fontSize: 14,
  width: '100%'
});

var optionsStyle = {
  backgroundColor: '#fcfcfc',
  height: 50 //    border: '#2e63ac 4px solid',

};

function Button(_ref) {
  var icon = _ref.icon,
      label = _ref.label,
      title = _ref.title,
      onClick = _ref.onClick,
      compact = _ref.compact,
      disabled = _ref.disabled;
  // const iconStyleAply = iconStyle;
  var iconOverride = !label || compact ? {
    margin: 0
  } : {}; // if (!label || compact) iconStyleAply.margin = 0;

  return /*#__PURE__*/_react["default"].createElement("button", {
    style: _objectSpread(_objectSpread({}, buttonStyle), disabled && {
      opacity: 0.5
    }),
    title: title,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: images[icon],
    alt: images[icon],
    style: _objectSpread(_objectSpread({}, iconStyle), iconOverride)
  }), !compact && label || '');
}

Button.propTypes = {
  icon: _propTypes["default"].string,
  label: _propTypes["default"].string,
  title: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};

function Link(_ref2) {
  var icon = _ref2.icon,
      label = _ref2.label,
      title = _ref2.title,
      href = _ref2.href;
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    style: buttonStyle,
    title: title,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: images[icon],
    alt: images[icon],
    style: iconStyle
  }), label);
}

Link.propTypes = {
  icon: _propTypes["default"].string,
  label: _propTypes["default"].string,
  title: _propTypes["default"].string,
  href: _propTypes["default"].string
};
Button.propTypes = {
  icon: _propTypes["default"].string,
  label: _propTypes["default"].string,
  title: _propTypes["default"].string
};

function CheckBox(_ref3) {
  var checked = _ref3.checked,
      label = _ref3.label,
      title = _ref3.title,
      onToggle = _ref3.onToggle;

  var toggle = function toggle() {
    return onToggle(!checked);
  };

  var selectTitle = function selectTitle(is) {
    return is ? title[1] : title[0];
  };

  var titleString = typeof title === 'string' ? title : selectTitle(checked);
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: buttonStyle,
    title: titleString,
    onClick: toggle
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: checked ? images.check_box : images.check_box_outline_blank,
    alt: "check",
    style: iconStyle
  }), label);
}

CheckBox.propTypes = {
  checked: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  onToggle: _propTypes["default"].func
};

function Toggle(_ref4) {
  var checked = _ref4.checked,
      label = _ref4.label,
      title = _ref4.title,
      onToggle = _ref4.onToggle;

  var toggle = function toggle() {
    return onToggle(!checked);
  };

  var selectTitle = function selectTitle(is) {
    return is ? title[1] : title[0];
  };

  var titleString = typeof title === 'string' ? title : selectTitle(checked);
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: _objectSpread(_objectSpread({}, buttonStyle), {}, {
      margin: 0
    }),
    title: titleString,
    onClick: toggle
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: checked ? images.toggle_on : images.toggle_off,
    alt: "check",
    style: _objectSpread(_objectSpread({}, iconStyle), {}, {
      width: 26,
      marginRight: 4,
      opacity: checked ? 0.7 : 0.6
    })
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      height: 18
    }
  }, label));
}

Toggle.propTypes = {
  checked: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  onToggle: _propTypes["default"].func
};

function Dropdown(_ref5) {
  var selected = _ref5.selected,
      list = _ref5.list,
      title = _ref5.title,
      onSelect = _ref5.onSelect;
  var options = list.map(function (val, ind) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: ind,
      key: "".concat(ind, "@").concat(list[ind]),
      style: optionsStyle
    }, val);
  });

  var select = function select(event) {
    return onSelect(parseInt(event.target.value, 10));
  };

  return /*#__PURE__*/_react["default"].createElement("select", {
    value: selected,
    onChange: select,
    style: selectStyle,
    title: title
  }, options);
}

Dropdown.propTypes = {
  selected: _propTypes["default"].number,
  title: _propTypes["default"].string,
  list: _propTypes["default"].arrayOf(_propTypes["default"].string),
  onSelect: _propTypes["default"].func
};
var paperStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 6px',
  // padding: '8px 8px 8px 16px',
  borderRadius: 2,
  boxSizing: 'border-box',
  fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
  // eslint-disable-line
  fontSize: 12,
  marginBottom: 10
};

function Paper(_ref6) {
  var children = _ref6.children,
      style = _ref6.style;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, paperStyle), style)
  }, children);
}

Paper.propTypes = {
  children: _propTypes["default"].node,
  style: _propTypes["default"].shape()
};
var tagStyle = {
  backgroundColor: 'rgb(224, 224, 224)',
  border: 'black',
  borderRadius: 11,
  display: 'flex',
  alignItems: 'center',
  fontSize: 11,
  cursor: 'pointer'
};
var avaStyle = {
  width: 22,
  height: 22,
  borderRadius: 11,
  backgroundColor: 'rgb(188, 188, 188)',
  color: '#efefef',
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
};

function Tag(_ref7) {
  var label = _ref7.label,
      onClick = _ref7.onClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: tagStyle,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: avaStyle
  }, /*#__PURE__*/_react["default"].createElement("span", null, label[0] || '!')), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      margin: '0px 12px 0px 6px',
      height: 17
    }
  }, label));
}

Paper.propTypes = {
  label: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};