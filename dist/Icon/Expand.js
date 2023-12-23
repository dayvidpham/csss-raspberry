"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expand = Expand;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Expand (resize) icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
function Expand(props) {
  const {
    className,
    style
  } = props;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: (0, _helpers.classList)(['mdb-icon', className || '']),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve",
    style: style
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "12,4 4,4 4,12 "
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "20,4 28,4 28,12 "
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "4,20 4,28 12,28 "
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "20,28 28,28 28,20 "
  }));
}