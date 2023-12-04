"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cross;
var _react = _interopRequireDefault(require("react"));
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Cross(props) {
  const {
    className
  } = props;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: `mdb-icon ${className || ''}`,
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve"
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "28",
    y2: "28"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "28",
    y1: "4",
    x2: "4",
    y2: "28"
  }));
}