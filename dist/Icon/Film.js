"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Film = Film;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Photographic film icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
function Film(props) {
  const {
    className,
    style
  } = props;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: (0, _helpers.classList)(['mdb-icon', 'mdb-icon-film', className || '']),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve",
    style: style
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M30.7,1.3H32V0H0v1.3h1.3c0.7,0,1.3,0.6,1.3,1.3V4c0,0.7-0.6,1.3-1.3,1.3H0v1.3h0.7C1.4,6.7,2,7.3,2,8v16 c0,0.7-0.6,1.3-1.3,1.3H0v1.3h1.3c0.7,0,1.3,0.6,1.3,1.3v1.3c0,0.7-0.6,1.3-1.3,1.3H0V32h32v-1.3h-1.3c-0.7,0-1.3-0.6-1.3-1.3V28 c0-0.7,0.6-1.3,1.3-1.3H32v-1.3h-0.7c-0.7,0-1.3-0.6-1.3-1.3V8c0-0.7,0.6-1.3,1.3-1.3H32V5.3h-1.3c-0.7,0-1.3-0.6-1.3-1.3V2.7 C29.3,1.9,29.9,1.3,30.7,1.3z M21.3,2.7c0-0.7,0.6-1.3,1.3-1.3h2.7c0.7,0,1.3,0.6,1.3,1.3V4c0,0.7-0.6,1.3-1.3,1.3h-2.7 c-0.7,0-1.3-0.6-1.3-1.3V2.7z M13.3,2.7c0-0.7,0.6-1.3,1.3-1.3h2.7c0.7,0,1.3,0.6,1.3,1.3V4c0,0.7-0.6,1.3-1.3,1.3h-2.7 c-0.7,0-1.3-0.6-1.3-1.3C13.3,4,13.3,2.7,13.3,2.7z M5.3,2.7c0-0.7,0.6-1.3,1.3-1.3h2.7c0.7,0,1.3,0.6,1.3,1.3V4 c0,0.7-0.6,1.3-1.3,1.3H6.7C5.9,5.3,5.3,4.7,5.3,4V2.7z M10.7,29.3c0,0.7-0.6,1.3-1.3,1.3H6.7c-0.7,0-1.3-0.6-1.3-1.3V28 c0-0.7,0.6-1.3,1.3-1.3h2.7c0.7,0,1.3,0.6,1.3,1.3V29.3z M18.7,29.3c0,0.7-0.6,1.3-1.3,1.3h-2.7c-0.7,0-1.3-0.6-1.3-1.3V28 c0-0.7,0.6-1.3,1.3-1.3h2.7c0.7,0,1.3,0.6,1.3,1.3V29.3z M26.7,29.3c0,0.7-0.6,1.3-1.3,1.3h-2.7c-0.7,0-1.3-0.6-1.3-1.3V28 c0-0.7,0.6-1.3,1.3-1.3h2.7c0.7,0,1.3,0.6,1.3,1.3V29.3z M4,25.3c-0.7,0-1.3-0.6-1.3-1.3V8c0-0.7,0.6-1.3,1.3-1.3h24 c0.7,0,1.3,0.6,1.3,1.3v16c0,0.7-0.6,1.3-1.3,1.3H4z"
  }));
}