"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(function () {
  var __defProp = Object.defineProperty;

  var __export = function __export(target, all) {
    for (var name in all) {
      __defProp(target, name, {
        get: all[name],
        enumerable: true
      });
    }
  }; // ../../node_modules/@codemirror/tooltip/dist/index.js


  var dist_exports = {};

  __export(dist_exports, {
    closeHoverTooltips: function closeHoverTooltips() {
      return _closeHoverTooltips;
    },
    getTooltip: function getTooltip() {
      return _getTooltip;
    },
    hasHoverTooltips: function hasHoverTooltips() {
      return _hasHoverTooltips;
    },
    hoverTooltip: function hoverTooltip() {
      return _hoverTooltip;
    },
    repositionTooltips: function repositionTooltips() {
      return _repositionTooltips;
    },
    showTooltip: function showTooltip() {
      return _showTooltip;
    },
    tooltips: function tooltips() {
      return _tooltips;
    }
  }); // ../../node_modules/@codemirror/text/dist/index.js


  var extend = /* @__PURE__ */"lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(function (s) {
    return s ? parseInt(s, 36) : 1;
  });

  for (var _i = 1; _i < extend.length; _i++) {
    extend[_i] += extend[_i - 1];
  }

  function isExtendingChar(code) {
    for (var _i2 = 1; _i2 < extend.length; _i2 += 2) {
      if (extend[_i2] > code) return extend[_i2 - 1] <= code;
    }

    return false;
  }

  function isRegionalIndicator(code) {
    return code >= 127462 && code <= 127487;
  }

  var ZWJ = 8205;

  function findClusterBreak(str, pos) {
    var forward = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var includeExtending = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return (forward ? nextClusterBreak : prevClusterBreak)(str, pos, includeExtending);
  }

  function nextClusterBreak(str, pos, includeExtending) {
    if (pos == str.length) return pos;
    if (pos && surrogateLow(str.charCodeAt(pos)) && surrogateHigh(str.charCodeAt(pos - 1))) pos--;
    var prev = codePointAt(str, pos);
    pos += codePointSize(prev);

    while (pos < str.length) {
      var next = codePointAt(str, pos);

      if (prev == ZWJ || next == ZWJ || includeExtending && isExtendingChar(next)) {
        pos += codePointSize(next);
        prev = next;
      } else if (isRegionalIndicator(next)) {
        var countBefore = 0,
            _i3 = pos - 2;

        while (_i3 >= 0 && isRegionalIndicator(codePointAt(str, _i3))) {
          countBefore++;
          _i3 -= 2;
        }

        if (countBefore % 2 == 0) break;else pos += 2;
      } else {
        break;
      }
    }

    return pos;
  }

  function prevClusterBreak(str, pos, includeExtending) {
    while (pos > 0) {
      var found = nextClusterBreak(str, pos - 2, includeExtending);
      if (found < pos) return found;
      pos--;
    }

    return 0;
  }

  function surrogateLow(ch) {
    return ch >= 56320 && ch < 57344;
  }

  function surrogateHigh(ch) {
    return ch >= 55296 && ch < 56320;
  }

  function codePointAt(str, pos) {
    var code0 = str.charCodeAt(pos);
    if (!surrogateHigh(code0) || pos + 1 == str.length) return code0;
    var code1 = str.charCodeAt(pos + 1);
    if (!surrogateLow(code1)) return code0;
    return (code0 - 55296 << 10) + (code1 - 56320) + 65536;
  }

  function codePointSize(code) {
    return code < 65536 ? 1 : 2;
  }

  function findColumn(string, col, tabSize, strict) {
    for (var _i4 = 0, n = 0;;) {
      if (n >= col) return _i4;
      if (_i4 == string.length) break;
      n += string.charCodeAt(_i4) == 9 ? tabSize - n % tabSize : 1;
      _i4 = findClusterBreak(string, _i4);
    }

    return strict === true ? -1 : string.length;
  }

  var Text = /*#__PURE__*/function () {
    function Text() {
      _classCallCheck(this, Text);
    }

    _createClass(Text, [{
      key: "lineAt",
      value: function lineAt(pos) {
        if (pos < 0 || pos > this.length) throw new RangeError("Invalid position ".concat(pos, " in document of length ").concat(this.length));
        return this.lineInner(pos, false, 1, 0);
      }
    }, {
      key: "line",
      value: function line(n) {
        if (n < 1 || n > this.lines) throw new RangeError("Invalid line number ".concat(n, " in ").concat(this.lines, "-line document"));
        return this.lineInner(n, true, 1, 0);
      }
    }, {
      key: "replace",
      value: function replace(from, to, text) {
        var parts = [];
        this.decompose(0, from, parts, 2);
        if (text.length) text.decompose(0, text.length, parts, 1 | 2);
        this.decompose(to, this.length, parts, 1);
        return TextNode.from(parts, this.length - (to - from) + text.length);
      }
    }, {
      key: "append",
      value: function append(other) {
        return this.replace(this.length, this.length, other);
      }
    }, {
      key: "slice",
      value: function slice(from) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;
        var parts = [];
        this.decompose(from, to, parts, 0);
        return TextNode.from(parts, to - from);
      }
    }, {
      key: "eq",
      value: function eq(other) {
        if (other == this) return true;
        if (other.length != this.length || other.lines != this.lines) return false;
        var start = this.scanIdentical(other, 1),
            end = this.length - this.scanIdentical(other, -1);
        var a = new RawTextCursor(this),
            b = new RawTextCursor(other);

        for (var skip = start, pos = start;;) {
          a.next(skip);
          b.next(skip);
          skip = 0;
          if (a.lineBreak != b.lineBreak || a.done != b.done || a.value != b.value) return false;
          pos += a.value.length;
          if (a.done || pos >= end) return true;
        }
      }
    }, {
      key: "iter",
      value: function iter() {
        var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        return new RawTextCursor(this, dir);
      }
    }, {
      key: "iterRange",
      value: function iterRange(from) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;
        return new PartialTextCursor(this, from, to);
      }
    }, {
      key: "iterLines",
      value: function iterLines(from, to) {
        var inner;

        if (from == null) {
          inner = this.iter();
        } else {
          if (to == null) to = this.lines + 1;
          var start = this.line(from).from;
          inner = this.iterRange(start, Math.max(start, to == this.lines + 1 ? this.length : to <= 1 ? 0 : this.line(to - 1).to));
        }

        return new LineCursor(inner);
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.sliceString(0);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var lines = [];
        this.flatten(lines);
        return lines;
      }
    }], [{
      key: "of",
      value: function of(text) {
        if (text.length == 0) throw new RangeError("A document must have at least one line");
        if (text.length == 1 && !text[0]) return Text.empty;
        return text.length <= 32 ? new TextLeaf(text) : TextNode.from(TextLeaf.split(text, []));
      }
    }]);

    return Text;
  }();

  var TextLeaf = /*#__PURE__*/function (_Text) {
    _inherits(TextLeaf, _Text);

    var _super = _createSuper(TextLeaf);

    function TextLeaf(text) {
      var _this;

      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : textLength(text);

      _classCallCheck(this, TextLeaf);

      _this = _super.call(this);
      _this.text = text;
      _this.length = length;
      return _this;
    }

    _createClass(TextLeaf, [{
      key: "lines",
      get: function get() {
        return this.text.length;
      }
    }, {
      key: "children",
      get: function get() {
        return null;
      }
    }, {
      key: "lineInner",
      value: function lineInner(target, isLine, line, offset) {
        for (var _i5 = 0;; _i5++) {
          var string = this.text[_i5],
              end = offset + string.length;
          if ((isLine ? line : end) >= target) return new Line(offset, end, line, string);
          offset = end + 1;
          line++;
        }
      }
    }, {
      key: "decompose",
      value: function decompose(from, to, target, open) {
        var text = from <= 0 && to >= this.length ? this : new TextLeaf(sliceText(this.text, from, to), Math.min(to, this.length) - Math.max(0, from));

        if (open & 1) {
          var prev = target.pop();
          var joined = appendText(text.text, prev.text.slice(), 0, text.length);

          if (joined.length <= 32) {
            target.push(new TextLeaf(joined, prev.length + text.length));
          } else {
            var mid = joined.length >> 1;
            target.push(new TextLeaf(joined.slice(0, mid)), new TextLeaf(joined.slice(mid)));
          }
        } else {
          target.push(text);
        }
      }
    }, {
      key: "replace",
      value: function replace(from, to, text) {
        if (!(text instanceof TextLeaf)) return _get(_getPrototypeOf(TextLeaf.prototype), "replace", this).call(this, from, to, text);
        var lines = appendText(this.text, appendText(text.text, sliceText(this.text, 0, from)), to);
        var newLen = this.length + text.length - (to - from);
        if (lines.length <= 32) return new TextLeaf(lines, newLen);
        return TextNode.from(TextLeaf.split(lines, []), newLen);
      }
    }, {
      key: "sliceString",
      value: function sliceString(from) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;
        var lineSep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "\n";
        var result = "";

        for (var pos = 0, _i6 = 0; pos <= to && _i6 < this.text.length; _i6++) {
          var line = this.text[_i6],
              end = pos + line.length;
          if (pos > from && _i6) result += lineSep;
          if (from < end && to > pos) result += line.slice(Math.max(0, from - pos), to - pos);
          pos = end + 1;
        }

        return result;
      }
    }, {
      key: "flatten",
      value: function flatten(target) {
        var _iterator = _createForOfIteratorHelper(this.text),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var line = _step.value;
            target.push(line);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "scanIdentical",
      value: function scanIdentical() {
        return 0;
      }
    }], [{
      key: "split",
      value: function split(text, target) {
        var part = [],
            len = -1;

        var _iterator2 = _createForOfIteratorHelper(text),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var line = _step2.value;
            part.push(line);
            len += line.length + 1;

            if (part.length == 32) {
              target.push(new TextLeaf(part, len));
              part = [];
              len = -1;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (len > -1) target.push(new TextLeaf(part, len));
        return target;
      }
    }]);

    return TextLeaf;
  }(Text);

  var TextNode = /*#__PURE__*/function (_Text2) {
    _inherits(TextNode, _Text2);

    var _super2 = _createSuper(TextNode);

    function TextNode(children, length) {
      var _this2;

      _classCallCheck(this, TextNode);

      _this2 = _super2.call(this);
      _this2.children = children;
      _this2.length = length;
      _this2.lines = 0;

      var _iterator3 = _createForOfIteratorHelper(children),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var child = _step3.value;
          _this2.lines += child.lines;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return _this2;
    }

    _createClass(TextNode, [{
      key: "lineInner",
      value: function lineInner(target, isLine, line, offset) {
        for (var _i7 = 0;; _i7++) {
          var child = this.children[_i7],
              end = offset + child.length,
              endLine = line + child.lines - 1;
          if ((isLine ? endLine : end) >= target) return child.lineInner(target, isLine, line, offset);
          offset = end + 1;
          line = endLine + 1;
        }
      }
    }, {
      key: "decompose",
      value: function decompose(from, to, target, open) {
        for (var _i8 = 0, pos = 0; pos <= to && _i8 < this.children.length; _i8++) {
          var child = this.children[_i8],
              end = pos + child.length;

          if (from <= end && to >= pos) {
            var childOpen = open & ((pos <= from ? 1 : 0) | (end >= to ? 2 : 0));
            if (pos >= from && end <= to && !childOpen) target.push(child);else child.decompose(from - pos, to - pos, target, childOpen);
          }

          pos = end + 1;
        }
      }
    }, {
      key: "replace",
      value: function replace(from, to, text) {
        if (text.lines < this.lines) for (var _i9 = 0, pos = 0; _i9 < this.children.length; _i9++) {
          var child = this.children[_i9],
              end = pos + child.length;

          if (from >= pos && to <= end) {
            var updated = child.replace(from - pos, to - pos, text);
            var totalLines = this.lines - child.lines + updated.lines;

            if (updated.lines < totalLines >> 5 - 1 && updated.lines > totalLines >> 5 + 1) {
              var copy = this.children.slice();
              copy[_i9] = updated;
              return new TextNode(copy, this.length - (to - from) + text.length);
            }

            return _get(_getPrototypeOf(TextNode.prototype), "replace", this).call(this, pos, end, updated);
          }

          pos = end + 1;
        }
        return _get(_getPrototypeOf(TextNode.prototype), "replace", this).call(this, from, to, text);
      }
    }, {
      key: "sliceString",
      value: function sliceString(from) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;
        var lineSep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "\n";
        var result = "";

        for (var _i10 = 0, pos = 0; _i10 < this.children.length && pos <= to; _i10++) {
          var child = this.children[_i10],
              end = pos + child.length;
          if (pos > from && _i10) result += lineSep;
          if (from < end && to > pos) result += child.sliceString(from - pos, to - pos, lineSep);
          pos = end + 1;
        }

        return result;
      }
    }, {
      key: "flatten",
      value: function flatten(target) {
        var _iterator4 = _createForOfIteratorHelper(this.children),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var child = _step4.value;
            child.flatten(target);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }, {
      key: "scanIdentical",
      value: function scanIdentical(other, dir) {
        if (!(other instanceof TextNode)) return 0;
        var length = 0;

        var _ref = dir > 0 ? [0, 0, this.children.length, other.children.length] : [this.children.length - 1, other.children.length - 1, -1, -1],
            _ref2 = _slicedToArray(_ref, 4),
            iA = _ref2[0],
            iB = _ref2[1],
            eA = _ref2[2],
            eB = _ref2[3];

        for (;; iA += dir, iB += dir) {
          if (iA == eA || iB == eB) return length;
          var chA = this.children[iA],
              chB = other.children[iB];
          if (chA != chB) return length + chA.scanIdentical(chB, dir);
          length += chA.length + 1;
        }
      }
    }], [{
      key: "from",
      value: function from(children) {
        var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : children.reduce(function (l, ch) {
          return l + ch.length + 1;
        }, -1);
        var lines = 0;

        var _iterator5 = _createForOfIteratorHelper(children),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _ch = _step5.value;
            lines += _ch.lines;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        if (lines < 32) {
          var flat = [];

          var _iterator6 = _createForOfIteratorHelper(children),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var ch = _step6.value;
              ch.flatten(flat);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          return new TextLeaf(flat, length);
        }

        var chunk = Math.max(32, lines >> 5),
            maxChunk = chunk << 1,
            minChunk = chunk >> 1;
        var chunked = [],
            currentLines = 0,
            currentLen = -1,
            currentChunk = [];

        function add(child) {
          var last;

          if (child.lines > maxChunk && child instanceof TextNode) {
            var _iterator7 = _createForOfIteratorHelper(child.children),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var node = _step7.value;
                add(node);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          } else if (child.lines > minChunk && (currentLines > minChunk || !currentLines)) {
            flush();
            chunked.push(child);
          } else if (child instanceof TextLeaf && currentLines && (last = currentChunk[currentChunk.length - 1]) instanceof TextLeaf && child.lines + last.lines <= 32) {
            currentLines += child.lines;
            currentLen += child.length + 1;
            currentChunk[currentChunk.length - 1] = new TextLeaf(last.text.concat(child.text), last.length + 1 + child.length);
          } else {
            if (currentLines + child.lines > chunk) flush();
            currentLines += child.lines;
            currentLen += child.length + 1;
            currentChunk.push(child);
          }
        }

        function flush() {
          if (currentLines == 0) return;
          chunked.push(currentChunk.length == 1 ? currentChunk[0] : TextNode.from(currentChunk, currentLen));
          currentLen = -1;
          currentLines = currentChunk.length = 0;
        }

        var _iterator8 = _createForOfIteratorHelper(children),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var child = _step8.value;
            add(child);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        flush();
        return chunked.length == 1 ? chunked[0] : new TextNode(chunked, length);
      }
    }]);

    return TextNode;
  }(Text);

  Text.empty = /* @__PURE__ */new TextLeaf([""], 0);

  function textLength(text) {
    var length = -1;

    var _iterator9 = _createForOfIteratorHelper(text),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var line = _step9.value;
        length += line.length + 1;
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    return length;
  }

  function appendText(text, target) {
    var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var to = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1e9;

    for (var pos = 0, _i11 = 0, first = true; _i11 < text.length && pos <= to; _i11++) {
      var line = text[_i11],
          end = pos + line.length;

      if (end >= from) {
        if (end > to) line = line.slice(0, to - pos);
        if (pos < from) line = line.slice(from - pos);

        if (first) {
          target[target.length - 1] += line;
          first = false;
        } else target.push(line);
      }

      pos = end + 1;
    }

    return target;
  }

  function sliceText(text, from, to) {
    return appendText(text, [""], from, to);
  }

  var RawTextCursor = /*#__PURE__*/function () {
    function RawTextCursor(text) {
      var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      _classCallCheck(this, RawTextCursor);

      this.dir = dir;
      this.done = false;
      this.lineBreak = false;
      this.value = "";
      this.nodes = [text];
      this.offsets = [dir > 0 ? 1 : (text instanceof TextLeaf ? text.text.length : text.children.length) << 1];
    }

    _createClass(RawTextCursor, [{
      key: "nextInner",
      value: function nextInner(skip, dir) {
        this.done = this.lineBreak = false;

        for (;;) {
          var last = this.nodes.length - 1;
          var top2 = this.nodes[last],
              offsetValue = this.offsets[last],
              offset = offsetValue >> 1;
          var size = top2 instanceof TextLeaf ? top2.text.length : top2.children.length;

          if (offset == (dir > 0 ? size : 0)) {
            if (last == 0) {
              this.done = true;
              this.value = "";
              return this;
            }

            if (dir > 0) this.offsets[last - 1]++;
            this.nodes.pop();
            this.offsets.pop();
          } else if ((offsetValue & 1) == (dir > 0 ? 0 : 1)) {
            this.offsets[last] += dir;

            if (skip == 0) {
              this.lineBreak = true;
              this.value = "\n";
              return this;
            }

            skip--;
          } else if (top2 instanceof TextLeaf) {
            var next = top2.text[offset + (dir < 0 ? -1 : 0)];
            this.offsets[last] += dir;

            if (next.length > Math.max(0, skip)) {
              this.value = skip == 0 ? next : dir > 0 ? next.slice(skip) : next.slice(0, next.length - skip);
              return this;
            }

            skip -= next.length;
          } else {
            var _next = top2.children[offset + (dir < 0 ? -1 : 0)];

            if (skip > _next.length) {
              skip -= _next.length;
              this.offsets[last] += dir;
            } else {
              if (dir < 0) this.offsets[last]--;
              this.nodes.push(_next);
              this.offsets.push(dir > 0 ? 1 : (_next instanceof TextLeaf ? _next.text.length : _next.children.length) << 1);
            }
          }
        }
      }
    }, {
      key: "next",
      value: function next() {
        var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        if (skip < 0) {
          this.nextInner(-skip, -this.dir);
          skip = this.value.length;
        }

        return this.nextInner(skip, this.dir);
      }
    }]);

    return RawTextCursor;
  }();

  var PartialTextCursor = /*#__PURE__*/function () {
    function PartialTextCursor(text, start, end) {
      _classCallCheck(this, PartialTextCursor);

      this.value = "";
      this.done = false;
      this.cursor = new RawTextCursor(text, start > end ? -1 : 1);
      this.pos = start > end ? text.length : 0;
      this.from = Math.min(start, end);
      this.to = Math.max(start, end);
    }

    _createClass(PartialTextCursor, [{
      key: "nextInner",
      value: function nextInner(skip, dir) {
        if (dir < 0 ? this.pos <= this.from : this.pos >= this.to) {
          this.value = "";
          this.done = true;
          return this;
        }

        skip += Math.max(0, dir < 0 ? this.pos - this.to : this.from - this.pos);
        var limit = dir < 0 ? this.pos - this.from : this.to - this.pos;
        if (skip > limit) skip = limit;
        limit -= skip;

        var _this$cursor$next = this.cursor.next(skip),
            value = _this$cursor$next.value;

        this.pos += (value.length + skip) * dir;
        this.value = value.length <= limit ? value : dir < 0 ? value.slice(value.length - limit) : value.slice(0, limit);
        this.done = !this.value;
        return this;
      }
    }, {
      key: "next",
      value: function next() {
        var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (skip < 0) skip = Math.max(skip, this.from - this.pos);else if (skip > 0) skip = Math.min(skip, this.to - this.pos);
        return this.nextInner(skip, this.cursor.dir);
      }
    }, {
      key: "lineBreak",
      get: function get() {
        return this.cursor.lineBreak && this.value != "";
      }
    }]);

    return PartialTextCursor;
  }();

  var LineCursor = /*#__PURE__*/function () {
    function LineCursor(inner) {
      _classCallCheck(this, LineCursor);

      this.inner = inner;
      this.afterBreak = true;
      this.value = "";
      this.done = false;
    }

    _createClass(LineCursor, [{
      key: "next",
      value: function next() {
        var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var _this$inner$next = this.inner.next(skip),
            done = _this$inner$next.done,
            lineBreak = _this$inner$next.lineBreak,
            value = _this$inner$next.value;

        if (done) {
          this.done = true;
          this.value = "";
        } else if (lineBreak) {
          if (this.afterBreak) {
            this.value = "";
          } else {
            this.afterBreak = true;
            this.next();
          }
        } else {
          this.value = value;
          this.afterBreak = false;
        }

        return this;
      }
    }, {
      key: "lineBreak",
      get: function get() {
        return false;
      }
    }]);

    return LineCursor;
  }();

  if (typeof Symbol != "undefined") {
    Text.prototype[Symbol.iterator] = function () {
      return this.iter();
    };

    RawTextCursor.prototype[Symbol.iterator] = PartialTextCursor.prototype[Symbol.iterator] = LineCursor.prototype[Symbol.iterator] = function () {
      return this;
    };
  }

  var Line = /*#__PURE__*/function () {
    function Line(from, to, number, text) {
      _classCallCheck(this, Line);

      this.from = from;
      this.to = to;
      this.number = number;
      this.text = text;
    }

    _createClass(Line, [{
      key: "length",
      get: function get() {
        return this.to - this.from;
      }
    }]);

    return Line;
  }(); // ../../node_modules/@codemirror/state/dist/index.js


  var DefaultSplit = /\r\n?|\n/;

  var MapMode = /* @__PURE__ */function (MapMode2) {
    MapMode2[MapMode2["Simple"] = 0] = "Simple";
    MapMode2[MapMode2["TrackDel"] = 1] = "TrackDel";
    MapMode2[MapMode2["TrackBefore"] = 2] = "TrackBefore";
    MapMode2[MapMode2["TrackAfter"] = 3] = "TrackAfter";
    return MapMode2;
  }(MapMode || (MapMode = {}));

  var ChangeDesc = /*#__PURE__*/function () {
    function ChangeDesc(sections) {
      _classCallCheck(this, ChangeDesc);

      this.sections = sections;
    }

    _createClass(ChangeDesc, [{
      key: "length",
      get: function get() {
        var result = 0;

        for (var _i12 = 0; _i12 < this.sections.length; _i12 += 2) {
          result += this.sections[_i12];
        }

        return result;
      }
    }, {
      key: "newLength",
      get: function get() {
        var result = 0;

        for (var _i13 = 0; _i13 < this.sections.length; _i13 += 2) {
          var ins = this.sections[_i13 + 1];
          result += ins < 0 ? this.sections[_i13] : ins;
        }

        return result;
      }
    }, {
      key: "empty",
      get: function get() {
        return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
      }
    }, {
      key: "iterGaps",
      value: function iterGaps(f) {
        for (var _i14 = 0, posA = 0, posB = 0; _i14 < this.sections.length;) {
          var len = this.sections[_i14++],
              ins = this.sections[_i14++];

          if (ins < 0) {
            f(posA, posB, len);
            posB += len;
          } else {
            posB += ins;
          }

          posA += len;
        }
      }
    }, {
      key: "iterChangedRanges",
      value: function iterChangedRanges(f) {
        var individual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _iterChanges(this, f, individual);
      }
    }, {
      key: "invertedDesc",
      get: function get() {
        var sections = [];

        for (var _i15 = 0; _i15 < this.sections.length;) {
          var len = this.sections[_i15++],
              ins = this.sections[_i15++];
          if (ins < 0) sections.push(len, ins);else sections.push(ins, len);
        }

        return new ChangeDesc(sections);
      }
    }, {
      key: "composeDesc",
      value: function composeDesc(other) {
        return this.empty ? other : other.empty ? this : composeSets(this, other);
      }
    }, {
      key: "mapDesc",
      value: function mapDesc(other) {
        var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return other.empty ? this : mapSet(this, other, before);
      }
    }, {
      key: "mapPos",
      value: function mapPos(pos) {
        var assoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MapMode.Simple;
        var posA = 0,
            posB = 0;

        for (var _i16 = 0; _i16 < this.sections.length;) {
          var len = this.sections[_i16++],
              ins = this.sections[_i16++],
              endA = posA + len;

          if (ins < 0) {
            if (endA > pos) return posB + (pos - posA);
            posB += len;
          } else {
            if (mode != MapMode.Simple && endA >= pos && (mode == MapMode.TrackDel && posA < pos && endA > pos || mode == MapMode.TrackBefore && posA < pos || mode == MapMode.TrackAfter && endA > pos)) return null;
            if (endA > pos || endA == pos && assoc < 0 && !len) return pos == posA || assoc < 0 ? posB : posB + ins;
            posB += ins;
          }

          posA = endA;
        }

        if (pos > posA) throw new RangeError("Position ".concat(pos, " is out of range for changeset of length ").concat(posA));
        return posB;
      }
    }, {
      key: "touchesRange",
      value: function touchesRange(from) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;

        for (var _i17 = 0, pos = 0; _i17 < this.sections.length && pos <= to;) {
          var len = this.sections[_i17++],
              ins = this.sections[_i17++],
              end = pos + len;
          if (ins >= 0 && pos <= to && end >= from) return pos < from && end > to ? "cover" : true;
          pos = end;
        }

        return false;
      }
    }, {
      key: "toString",
      value: function toString() {
        var result = "";

        for (var _i18 = 0; _i18 < this.sections.length;) {
          var len = this.sections[_i18++],
              ins = this.sections[_i18++];
          result += (result ? " " : "") + len + (ins >= 0 ? ":" + ins : "");
        }

        return result;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.sections;
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        if (!Array.isArray(json) || json.length % 2 || json.some(function (a) {
          return typeof a != "number";
        })) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new ChangeDesc(json);
      }
    }]);

    return ChangeDesc;
  }();

  var ChangeSet = /*#__PURE__*/function (_ChangeDesc) {
    _inherits(ChangeSet, _ChangeDesc);

    var _super3 = _createSuper(ChangeSet);

    function ChangeSet(sections, inserted) {
      var _this3;

      _classCallCheck(this, ChangeSet);

      _this3 = _super3.call(this, sections);
      _this3.inserted = inserted;
      return _this3;
    }

    _createClass(ChangeSet, [{
      key: "apply",
      value: function apply(doc2) {
        if (this.length != doc2.length) throw new RangeError("Applying change set to a document with the wrong length");

        _iterChanges(this, function (fromA, toA, fromB, _toB, text) {
          return doc2 = doc2.replace(fromB, fromB + (toA - fromA), text);
        }, false);

        return doc2;
      }
    }, {
      key: "mapDesc",
      value: function mapDesc(other) {
        var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return mapSet(this, other, before, true);
      }
    }, {
      key: "invert",
      value: function invert(doc2) {
        var sections = this.sections.slice(),
            inserted = [];

        for (var _i19 = 0, pos = 0; _i19 < sections.length; _i19 += 2) {
          var len = sections[_i19],
              ins = sections[_i19 + 1];

          if (ins >= 0) {
            sections[_i19] = ins;
            sections[_i19 + 1] = len;
            var index = _i19 >> 1;

            while (inserted.length < index) {
              inserted.push(Text.empty);
            }

            inserted.push(len ? doc2.slice(pos, pos + len) : Text.empty);
          }

          pos += len;
        }

        return new ChangeSet(sections, inserted);
      }
    }, {
      key: "compose",
      value: function compose(other) {
        return this.empty ? other : other.empty ? this : composeSets(this, other, true);
      }
    }, {
      key: "map",
      value: function map(other) {
        var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return other.empty ? this : mapSet(this, other, before, true);
      }
    }, {
      key: "iterChanges",
      value: function iterChanges(f) {
        var individual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _iterChanges(this, f, individual);
      }
    }, {
      key: "desc",
      get: function get() {
        return new ChangeDesc(this.sections);
      }
    }, {
      key: "filter",
      value: function filter(ranges) {
        var resultSections = [],
            resultInserted = [],
            filteredSections = [];
        var iter = new SectionIter(this);

        done: for (var _i20 = 0, pos = 0;;) {
          var next = _i20 == ranges.length ? 1e9 : ranges[_i20++];

          while (pos < next || pos == next && iter.len == 0) {
            if (iter.done) break done;
            var len = Math.min(iter.len, next - pos);
            addSection(filteredSections, len, -1);
            var ins = iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0;
            addSection(resultSections, len, ins);
            if (ins > 0) addInsert(resultInserted, resultSections, iter.text);
            iter.forward(len);
            pos += len;
          }

          var end = ranges[_i20++];

          while (pos < end) {
            if (iter.done) break done;

            var _len = Math.min(iter.len, end - pos);

            addSection(resultSections, _len, -1);
            addSection(filteredSections, _len, iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0);
            iter.forward(_len);
            pos += _len;
          }
        }

        return {
          changes: new ChangeSet(resultSections, resultInserted),
          filtered: new ChangeDesc(filteredSections)
        };
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var parts = [];

        for (var _i21 = 0; _i21 < this.sections.length; _i21 += 2) {
          var len = this.sections[_i21],
              ins = this.sections[_i21 + 1];
          if (ins < 0) parts.push(len);else if (ins == 0) parts.push([len]);else parts.push([len].concat(this.inserted[_i21 >> 1].toJSON()));
        }

        return parts;
      }
    }], [{
      key: "of",
      value: function of(changes, length, lineSep) {
        var sections = [],
            inserted = [],
            pos = 0;
        var total = null;

        function flush() {
          var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          if (!force && !sections.length) return;
          if (pos < length) addSection(sections, length - pos, -1);
          var set = new ChangeSet(sections, inserted);
          total = total ? total.compose(set.map(total)) : set;
          sections = [];
          inserted = [];
          pos = 0;
        }

        function process(spec) {
          if (Array.isArray(spec)) {
            var _iterator10 = _createForOfIteratorHelper(spec),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var sub = _step10.value;
                process(sub);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          } else if (spec instanceof ChangeSet) {
            if (spec.length != length) throw new RangeError("Mismatched change set length (got ".concat(spec.length, ", expected ").concat(length, ")"));
            flush();
            total = total ? total.compose(spec.map(total)) : spec;
          } else {
            var from = spec.from,
                _spec$to = spec.to,
                to = _spec$to === void 0 ? from : _spec$to,
                insert2 = spec.insert;
            if (from > to || from < 0 || to > length) throw new RangeError("Invalid change range ".concat(from, " to ").concat(to, " (in doc of length ").concat(length, ")"));
            var insText = !insert2 ? Text.empty : typeof insert2 == "string" ? Text.of(insert2.split(lineSep || DefaultSplit)) : insert2;
            var insLen = insText.length;
            if (from == to && insLen == 0) return;
            if (from < pos) flush();
            if (from > pos) addSection(sections, from - pos, -1);
            addSection(sections, to - from, insLen);
            addInsert(inserted, sections, insText);
            pos = to;
          }
        }

        process(changes);
        flush(!total);
        return total;
      }
    }, {
      key: "empty",
      value: function empty(length) {
        return new ChangeSet(length ? [length, -1] : [], []);
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        if (!Array.isArray(json)) throw new RangeError("Invalid JSON representation of ChangeSet");
        var sections = [],
            inserted = [];

        for (var _i22 = 0; _i22 < json.length; _i22++) {
          var part = json[_i22];

          if (typeof part == "number") {
            sections.push(part, -1);
          } else if (!Array.isArray(part) || typeof part[0] != "number" || part.some(function (e, i2) {
            return i2 && typeof e != "string";
          })) {
            throw new RangeError("Invalid JSON representation of ChangeSet");
          } else if (part.length == 1) {
            sections.push(part[0], 0);
          } else {
            while (inserted.length < _i22) {
              inserted.push(Text.empty);
            }

            inserted[_i22] = Text.of(part.slice(1));
            sections.push(part[0], inserted[_i22].length);
          }
        }

        return new ChangeSet(sections, inserted);
      }
    }]);

    return ChangeSet;
  }(ChangeDesc);

  function addSection(sections, len, ins) {
    var forceJoin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (len == 0 && ins <= 0) return;
    var last = sections.length - 2;
    if (last >= 0 && ins <= 0 && ins == sections[last + 1]) sections[last] += len;else if (len == 0 && sections[last] == 0) sections[last + 1] += ins;else if (forceJoin) {
      sections[last] += len;
      sections[last + 1] += ins;
    } else sections.push(len, ins);
  }

  function addInsert(values, sections, value) {
    if (value.length == 0) return;
    var index = sections.length - 2 >> 1;

    if (index < values.length) {
      values[values.length - 1] = values[values.length - 1].append(value);
    } else {
      while (values.length < index) {
        values.push(Text.empty);
      }

      values.push(value);
    }
  }

  function _iterChanges(desc, f, individual) {
    var inserted = desc.inserted;

    for (var posA = 0, posB = 0, _i23 = 0; _i23 < desc.sections.length;) {
      var len = desc.sections[_i23++],
          ins = desc.sections[_i23++];

      if (ins < 0) {
        posA += len;
        posB += len;
      } else {
        var endA = posA,
            endB = posB,
            _text = Text.empty;

        for (;;) {
          endA += len;
          endB += ins;
          if (ins && inserted) _text = _text.append(inserted[_i23 - 2 >> 1]);
          if (individual || _i23 == desc.sections.length || desc.sections[_i23 + 1] < 0) break;
          len = desc.sections[_i23++];
          ins = desc.sections[_i23++];
        }

        f(posA, endA, posB, endB, _text);
        posA = endA;
        posB = endB;
      }
    }
  }

  function mapSet(setA, setB, before) {
    var mkSet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var sections = [],
        insert2 = mkSet ? [] : null;
    var a = new SectionIter(setA),
        b = new SectionIter(setB);

    for (var posA = 0, posB = 0;;) {
      if (a.ins == -1) {
        posA += a.len;
        a.next();
      } else if (b.ins == -1 && posB < posA) {
        var skip = Math.min(b.len, posA - posB);
        b.forward(skip);
        addSection(sections, skip, -1);
        posB += skip;
      } else if (b.ins >= 0 && (a.done || posB < posA || posB == posA && (b.len < a.len || b.len == a.len && !before))) {
        addSection(sections, b.ins, -1);

        while (posA > posB && !a.done && posA + a.len < posB + b.len) {
          posA += a.len;
          a.next();
        }

        posB += b.len;
        b.next();
      } else if (a.ins >= 0) {
        var len = 0,
            end = posA + a.len;

        for (;;) {
          if (b.ins >= 0 && posB > posA && posB + b.len < end) {
            len += b.ins;
            posB += b.len;
            b.next();
          } else if (b.ins == -1 && posB < end) {
            var _skip = Math.min(b.len, end - posB);

            len += _skip;
            b.forward(_skip);
            posB += _skip;
          } else {
            break;
          }
        }

        addSection(sections, len, a.ins);
        if (insert2) addInsert(insert2, sections, a.text);
        posA = end;
        a.next();
      } else if (a.done && b.done) {
        return insert2 ? new ChangeSet(sections, insert2) : new ChangeDesc(sections);
      } else {
        throw new Error("Mismatched change set lengths");
      }
    }
  }

  function composeSets(setA, setB) {
    var mkSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var sections = [];
    var insert2 = mkSet ? [] : null;
    var a = new SectionIter(setA),
        b = new SectionIter(setB);

    for (var open = false;;) {
      if (a.done && b.done) {
        return insert2 ? new ChangeSet(sections, insert2) : new ChangeDesc(sections);
      } else if (a.ins == 0) {
        addSection(sections, a.len, 0, open);
        a.next();
      } else if (b.len == 0 && !b.done) {
        addSection(sections, 0, b.ins, open);
        if (insert2) addInsert(insert2, sections, b.text);
        b.next();
      } else if (a.done || b.done) {
        throw new Error("Mismatched change set lengths");
      } else {
        var len = Math.min(a.len2, b.len),
            sectionLen = sections.length;

        if (a.ins == -1) {
          var insB = b.ins == -1 ? -1 : b.off ? 0 : b.ins;
          addSection(sections, len, insB, open);
          if (insert2 && insB) addInsert(insert2, sections, b.text);
        } else if (b.ins == -1) {
          addSection(sections, a.off ? 0 : a.len, len, open);
          if (insert2) addInsert(insert2, sections, a.textBit(len));
        } else {
          addSection(sections, a.off ? 0 : a.len, b.off ? 0 : b.ins, open);
          if (insert2 && !b.off) addInsert(insert2, sections, b.text);
        }

        open = (a.ins > len || b.ins >= 0 && b.len > len) && (open || sections.length > sectionLen);
        a.forward2(len);
        b.forward(len);
      }
    }
  }

  var SectionIter = /*#__PURE__*/function () {
    function SectionIter(set) {
      _classCallCheck(this, SectionIter);

      this.set = set;
      this.i = 0;
      this.next();
    }

    _createClass(SectionIter, [{
      key: "next",
      value: function next() {
        var sections = this.set.sections;

        if (this.i < sections.length) {
          this.len = sections[this.i++];
          this.ins = sections[this.i++];
        } else {
          this.len = 0;
          this.ins = -2;
        }

        this.off = 0;
      }
    }, {
      key: "done",
      get: function get() {
        return this.ins == -2;
      }
    }, {
      key: "len2",
      get: function get() {
        return this.ins < 0 ? this.len : this.ins;
      }
    }, {
      key: "text",
      get: function get() {
        var inserted = this.set.inserted,
            index = this.i - 2 >> 1;
        return index >= inserted.length ? Text.empty : inserted[index];
      }
    }, {
      key: "textBit",
      value: function textBit(len) {
        var inserted = this.set.inserted,
            index = this.i - 2 >> 1;
        return index >= inserted.length && !len ? Text.empty : inserted[index].slice(this.off, len == null ? void 0 : this.off + len);
      }
    }, {
      key: "forward",
      value: function forward(len) {
        if (len == this.len) this.next();else {
          this.len -= len;
          this.off += len;
        }
      }
    }, {
      key: "forward2",
      value: function forward2(len) {
        if (this.ins == -1) this.forward(len);else if (len == this.ins) this.next();else {
          this.ins -= len;
          this.off += len;
        }
      }
    }]);

    return SectionIter;
  }();

  var SelectionRange = /*#__PURE__*/function () {
    function SelectionRange(from, to, flags) {
      _classCallCheck(this, SelectionRange);

      this.from = from;
      this.to = to;
      this.flags = flags;
    }

    _createClass(SelectionRange, [{
      key: "anchor",
      get: function get() {
        return this.flags & 16 ? this.to : this.from;
      }
    }, {
      key: "head",
      get: function get() {
        return this.flags & 16 ? this.from : this.to;
      }
    }, {
      key: "empty",
      get: function get() {
        return this.from == this.to;
      }
    }, {
      key: "assoc",
      get: function get() {
        return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
      }
    }, {
      key: "bidiLevel",
      get: function get() {
        var level = this.flags & 3;
        return level == 3 ? null : level;
      }
    }, {
      key: "goalColumn",
      get: function get() {
        var value = this.flags >> 5;
        return value == 33554431 ? void 0 : value;
      }
    }, {
      key: "map",
      value: function map(change) {
        var assoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        var from = change.mapPos(this.from, assoc),
            to = change.mapPos(this.to, assoc);
        return from == this.from && to == this.to ? this : new SelectionRange(from, to, this.flags);
      }
    }, {
      key: "extend",
      value: function extend(from) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
        if (from <= this.anchor && to >= this.anchor) return EditorSelection.range(from, to);
        var head = Math.abs(from - this.anchor) > Math.abs(to - this.anchor) ? from : to;
        return EditorSelection.range(this.anchor, head);
      }
    }, {
      key: "eq",
      value: function eq(other) {
        return this.anchor == other.anchor && this.head == other.head;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        };
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        if (!json || typeof json.anchor != "number" || typeof json.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
        return EditorSelection.range(json.anchor, json.head);
      }
    }]);

    return SelectionRange;
  }();

  var EditorSelection = /*#__PURE__*/function () {
    function EditorSelection(ranges) {
      var mainIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, EditorSelection);

      this.ranges = ranges;
      this.mainIndex = mainIndex;
    }

    _createClass(EditorSelection, [{
      key: "map",
      value: function map(change) {
        var assoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        if (change.empty) return this;
        return EditorSelection.create(this.ranges.map(function (r) {
          return r.map(change, assoc);
        }), this.mainIndex);
      }
    }, {
      key: "eq",
      value: function eq(other) {
        if (this.ranges.length != other.ranges.length || this.mainIndex != other.mainIndex) return false;

        for (var _i24 = 0; _i24 < this.ranges.length; _i24++) {
          if (!this.ranges[_i24].eq(other.ranges[_i24])) return false;
        }

        return true;
      }
    }, {
      key: "main",
      get: function get() {
        return this.ranges[this.mainIndex];
      }
    }, {
      key: "asSingle",
      value: function asSingle() {
        return this.ranges.length == 1 ? this : new EditorSelection([this.main]);
      }
    }, {
      key: "addRange",
      value: function addRange(range) {
        var main = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return EditorSelection.create([range].concat(this.ranges), main ? 0 : this.mainIndex + 1);
      }
    }, {
      key: "replaceRange",
      value: function replaceRange(range) {
        var which = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.mainIndex;
        var ranges = this.ranges.slice();
        ranges[which] = range;
        return EditorSelection.create(ranges, this.mainIndex);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          ranges: this.ranges.map(function (r) {
            return r.toJSON();
          }),
          main: this.mainIndex
        };
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        if (!json || !Array.isArray(json.ranges) || typeof json.main != "number" || json.main >= json.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new EditorSelection(json.ranges.map(function (r) {
          return SelectionRange.fromJSON(r);
        }), json.main);
      }
    }, {
      key: "single",
      value: function single(anchor) {
        var head = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : anchor;
        return new EditorSelection([EditorSelection.range(anchor, head)], 0);
      }
    }, {
      key: "create",
      value: function create(ranges) {
        var mainIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (ranges.length == 0) throw new RangeError("A selection needs at least one range");

        for (var pos = 0, _i25 = 0; _i25 < ranges.length; _i25++) {
          var range = ranges[_i25];
          if (range.empty ? range.from <= pos : range.from < pos) return normalized(ranges.slice(), mainIndex);
          pos = range.to;
        }

        return new EditorSelection(ranges, mainIndex);
      }
    }, {
      key: "cursor",
      value: function cursor(pos) {
        var assoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var bidiLevel = arguments.length > 2 ? arguments[2] : undefined;
        var goalColumn = arguments.length > 3 ? arguments[3] : undefined;
        return new SelectionRange(pos, pos, (assoc == 0 ? 0 : assoc < 0 ? 4 : 8) | (bidiLevel == null ? 3 : Math.min(2, bidiLevel)) | (goalColumn !== null && goalColumn !== void 0 ? goalColumn : 33554431) << 5);
      }
    }, {
      key: "range",
      value: function range(anchor, head, goalColumn) {
        var goal = (goalColumn !== null && goalColumn !== void 0 ? goalColumn : 33554431) << 5;
        return head < anchor ? new SelectionRange(head, anchor, 16 | goal) : new SelectionRange(anchor, head, goal);
      }
    }]);

    return EditorSelection;
  }();

  function normalized(ranges) {
    var mainIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var main = ranges[mainIndex];
    ranges.sort(function (a, b) {
      return a.from - b.from;
    });
    mainIndex = ranges.indexOf(main);

    for (var _i26 = 1; _i26 < ranges.length; _i26++) {
      var range = ranges[_i26],
          prev = ranges[_i26 - 1];

      if (range.empty ? range.from <= prev.to : range.from < prev.to) {
        var from = prev.from,
            to = Math.max(range.to, prev.to);
        if (_i26 <= mainIndex) mainIndex--;
        ranges.splice(--_i26, 2, range.anchor > range.head ? EditorSelection.range(to, from) : EditorSelection.range(from, to));
      }
    }

    return new EditorSelection(ranges, mainIndex);
  }

  function checkSelection(selection, docLength) {
    var _iterator11 = _createForOfIteratorHelper(selection.ranges),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var range = _step11.value;
        if (range.to > docLength) throw new RangeError("Selection points outside of document");
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }

  var nextID = 0;

  var Facet = /*#__PURE__*/function () {
    function Facet(combine, compareInput, compare2, isStatic, extensions) {
      _classCallCheck(this, Facet);

      this.combine = combine;
      this.compareInput = compareInput;
      this.compare = compare2;
      this.isStatic = isStatic;
      this.extensions = extensions;
      this.id = nextID++;
      this["default"] = combine([]);
    }

    _createClass(Facet, [{
      key: "of",
      value: function of(value) {
        return new FacetProvider([], this, 0, value);
      }
    }, {
      key: "compute",
      value: function compute(deps, get) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new FacetProvider(deps, this, 1, get);
      }
    }, {
      key: "computeN",
      value: function computeN(deps, get) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new FacetProvider(deps, this, 2, get);
      }
    }, {
      key: "from",
      value: function from(field, get) {
        if (!get) get = function get(x) {
          return x;
        };
        return this.compute([field], function (state) {
          return get(state.field(field));
        });
      }
    }], [{
      key: "define",
      value: function define() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return new Facet(config.combine || function (a) {
          return a;
        }, config.compareInput || function (a, b) {
          return a === b;
        }, config.compare || (!config.combine ? sameArray : function (a, b) {
          return a === b;
        }), !!config["static"], config.enables);
      }
    }]);

    return Facet;
  }();

  function sameArray(a, b) {
    return a == b || a.length == b.length && a.every(function (e, i) {
      return e === b[i];
    });
  }

  var FacetProvider = /*#__PURE__*/function () {
    function FacetProvider(dependencies, facet, type, value) {
      _classCallCheck(this, FacetProvider);

      this.dependencies = dependencies;
      this.facet = facet;
      this.type = type;
      this.value = value;
      this.id = nextID++;
    }

    _createClass(FacetProvider, [{
      key: "dynamicSlot",
      value: function dynamicSlot(addresses) {
        var _a;

        var getter = this.value;
        var compare2 = this.facet.compareInput;
        var idx = addresses[this.id] >> 1,
            multi = this.type == 2;
        var depDoc = false,
            depSel = false,
            depAddrs = [];

        var _iterator12 = _createForOfIteratorHelper(this.dependencies),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var dep = _step12.value;
            if (dep == "doc") depDoc = true;else if (dep == "selection") depSel = true;else if ((((_a = addresses[dep.id]) !== null && _a !== void 0 ? _a : 1) & 1) == 0) depAddrs.push(addresses[dep.id]);
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }

        return function (state, tr) {
          var oldVal = state.values[idx];

          if (oldVal === Uninitialized) {
            state.values[idx] = getter(state);
            return 1;
          }

          if (tr) {
            var depChanged = depDoc && tr.docChanged || depSel && (tr.docChanged || tr.selection) || depAddrs.some(function (addr) {
              return (ensureAddr(state, addr) & 1) > 0;
            });

            if (depChanged) {
              var newVal = getter(state);

              if (multi ? !compareArray(newVal, oldVal, compare2) : !compare2(newVal, oldVal)) {
                state.values[idx] = newVal;
                return 1;
              }
            }
          }

          return 0;
        };
      }
    }]);

    return FacetProvider;
  }();

  function compareArray(a, b, compare2) {
    if (a.length != b.length) return false;

    for (var _i27 = 0; _i27 < a.length; _i27++) {
      if (!compare2(a[_i27], b[_i27])) return false;
    }

    return true;
  }

  function dynamicFacetSlot(addresses, facet, providers) {
    var providerAddrs = providers.map(function (p) {
      return addresses[p.id];
    });
    var providerTypes = providers.map(function (p) {
      return p.type;
    });
    var dynamic = providerAddrs.filter(function (p) {
      return !(p & 1);
    });
    var idx = addresses[facet.id] >> 1;
    return function (state, tr) {
      var oldVal = state.values[idx],
          changed = oldVal === Uninitialized || !tr;

      var _iterator13 = _createForOfIteratorHelper(dynamic),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var dynAddr = _step13.value;
          if (ensureAddr(state, dynAddr) & 1) changed = true;
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      if (!changed) return 0;
      var values = [];

      for (var _i28 = 0; _i28 < providerAddrs.length; _i28++) {
        var value2 = getAddr(state, providerAddrs[_i28]);

        if (providerTypes[_i28] == 2) {
          var _iterator14 = _createForOfIteratorHelper(value2),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var val = _step14.value;
              values.push(val);
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
        } else values.push(value2);
      }

      var value = facet.combine(values);
      if (facet.compare(value, oldVal)) return 0;
      state.values[idx] = value;
      return 1;
    };
  }

  var initField = /* @__PURE__ */Facet.define({
    "static": true
  });

  var StateField = /*#__PURE__*/function () {
    function StateField(id, createF, updateF, compareF, spec) {
      _classCallCheck(this, StateField);

      this.id = id;
      this.createF = createF;
      this.updateF = updateF;
      this.compareF = compareF;
      this.spec = spec;
      this.provides = void 0;
    }

    _createClass(StateField, [{
      key: "create",
      value: function create(state) {
        var _this4 = this;

        var init = state.facet(initField).find(function (i) {
          return i.field == _this4;
        });
        return ((init === null || init === void 0 ? void 0 : init.create) || this.createF)(state);
      }
    }, {
      key: "slot",
      value: function slot(addresses) {
        var _this5 = this;

        var idx = addresses[this.id] >> 1;
        return function (state, tr) {
          var oldVal = state.values[idx];

          if (oldVal === Uninitialized) {
            state.values[idx] = _this5.create(state);
            return 1;
          }

          if (tr) {
            var value = _this5.updateF(oldVal, tr);

            if (!_this5.compareF(oldVal, value)) {
              state.values[idx] = value;
              return 1;
            }
          }

          return 0;
        };
      }
    }, {
      key: "init",
      value: function init(create) {
        return [this, initField.of({
          field: this,
          create: create
        })];
      }
    }, {
      key: "extension",
      get: function get() {
        return this;
      }
    }], [{
      key: "define",
      value: function define(config) {
        var field = new StateField(nextID++, config.create, config.update, config.compare || function (a, b) {
          return a === b;
        }, config);
        if (config.provide) field.provides = config.provide(field);
        return field;
      }
    }]);

    return StateField;
  }();

  var Prec_ = {
    lowest: 4,
    low: 3,
    "default": 2,
    high: 1,
    highest: 0
  };

  function prec(value) {
    return function (ext) {
      return new PrecExtension(ext, value);
    };
  }

  var Prec = {
    lowest: /* @__PURE__ */prec(Prec_.lowest),
    low: /* @__PURE__ */prec(Prec_.low),
    "default": /* @__PURE__ */prec(Prec_["default"]),
    high: /* @__PURE__ */prec(Prec_.high),
    highest: /* @__PURE__ */prec(Prec_.highest),
    fallback: /* @__PURE__ */prec(Prec_.lowest),
    extend: /* @__PURE__ */prec(Prec_.high),
    override: /* @__PURE__ */prec(Prec_.highest)
  };

  var PrecExtension = /*#__PURE__*/_createClass(function PrecExtension(inner, prec2) {
    _classCallCheck(this, PrecExtension);

    this.inner = inner;
    this.prec = prec2;
  });

  var Compartment = /*#__PURE__*/function () {
    function Compartment() {
      _classCallCheck(this, Compartment);
    }

    _createClass(Compartment, [{
      key: "of",
      value: function of(ext) {
        return new CompartmentInstance(this, ext);
      }
    }, {
      key: "reconfigure",
      value: function reconfigure(content) {
        return Compartment.reconfigure.of({
          compartment: this,
          extension: content
        });
      }
    }, {
      key: "get",
      value: function get(state) {
        return state.config.compartments.get(this);
      }
    }]);

    return Compartment;
  }();

  var CompartmentInstance = /*#__PURE__*/_createClass(function CompartmentInstance(compartment, inner) {
    _classCallCheck(this, CompartmentInstance);

    this.compartment = compartment;
    this.inner = inner;
  });

  var Configuration = /*#__PURE__*/function () {
    function Configuration(base2, compartments, dynamicSlots, address, staticValues) {
      _classCallCheck(this, Configuration);

      this.base = base2;
      this.compartments = compartments;
      this.dynamicSlots = dynamicSlots;
      this.address = address;
      this.staticValues = staticValues;
      this.statusTemplate = [];

      while (this.statusTemplate.length < dynamicSlots.length) {
        this.statusTemplate.push(0);
      }
    }

    _createClass(Configuration, [{
      key: "staticFacet",
      value: function staticFacet(facet) {
        var addr = this.address[facet.id];
        return addr == null ? facet["default"] : this.staticValues[addr >> 1];
      }
    }], [{
      key: "resolve",
      value: function resolve(base2, compartments, oldState) {
        var fields = [];
        var facets = /* @__PURE__ */Object.create(null);
        var newCompartments = /* @__PURE__ */new Map();

        var _iterator15 = _createForOfIteratorHelper(flatten(base2, compartments, newCompartments)),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var ext = _step15.value;
            if (ext instanceof StateField) fields.push(ext);else (facets[ext.facet.id] || (facets[ext.facet.id] = [])).push(ext);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }

        var address = /* @__PURE__ */Object.create(null);
        var staticValues = [];
        var dynamicSlots = [];

        var _loop = function _loop() {
          var field = _fields[_i29];
          address[field.id] = dynamicSlots.length << 1;
          dynamicSlots.push(function (a) {
            return field.slot(a);
          });
        };

        for (var _i29 = 0, _fields = fields; _i29 < _fields.length; _i29++) {
          _loop();
        }

        var _loop2 = function _loop2(id) {
          var providers = facets[id],
              facet = providers[0].facet;

          if (providers.every(function (p) {
            return p.type == 0;
          })) {
            address[facet.id] = staticValues.length << 1 | 1;
            var value = facet.combine(providers.map(function (p) {
              return p.value;
            }));
            var oldAddr = oldState ? oldState.config.address[facet.id] : null;

            if (oldAddr != null) {
              var oldVal = getAddr(oldState, oldAddr);
              if (facet.compare(value, oldVal)) value = oldVal;
            }

            staticValues.push(value);
          } else {
            var _iterator16 = _createForOfIteratorHelper(providers),
                _step16;

            try {
              var _loop3 = function _loop3() {
                var p = _step16.value;

                if (p.type == 0) {
                  address[p.id] = staticValues.length << 1 | 1;
                  staticValues.push(p.value);
                } else {
                  address[p.id] = dynamicSlots.length << 1;
                  dynamicSlots.push(function (a) {
                    return p.dynamicSlot(a);
                  });
                }
              };

              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                _loop3();
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            address[facet.id] = dynamicSlots.length << 1;
            dynamicSlots.push(function (a) {
              return dynamicFacetSlot(a, facet, providers);
            });
          }
        };

        for (var id in facets) {
          _loop2(id);
        }

        return new Configuration(base2, newCompartments, dynamicSlots.map(function (f) {
          return f(address);
        }), address, staticValues);
      }
    }]);

    return Configuration;
  }();

  function flatten(extension, compartments, newCompartments) {
    var result = [[], [], [], [], []];
    var seen = /* @__PURE__ */new Map();

    function inner(ext, prec2) {
      var known = seen.get(ext);

      if (known != null) {
        if (known >= prec2) return;
        var found = result[known].indexOf(ext);
        if (found > -1) result[known].splice(found, 1);
        if (ext instanceof CompartmentInstance) newCompartments["delete"](ext.compartment);
      }

      seen.set(ext, prec2);

      if (Array.isArray(ext)) {
        var _iterator17 = _createForOfIteratorHelper(ext),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var e = _step17.value;
            inner(e, prec2);
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      } else if (ext instanceof CompartmentInstance) {
        if (newCompartments.has(ext.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
        var content = compartments.get(ext.compartment) || ext.inner;
        newCompartments.set(ext.compartment, content);
        inner(content, prec2);
      } else if (ext instanceof PrecExtension) {
        inner(ext.inner, ext.prec);
      } else if (ext instanceof StateField) {
        result[prec2].push(ext);
        if (ext.provides) inner(ext.provides, prec2);
      } else if (ext instanceof FacetProvider) {
        result[prec2].push(ext);
        if (ext.facet.extensions) inner(ext.facet.extensions, prec2);
      } else {
        var _content = ext.extension;
        if (!_content) throw new Error("Unrecognized extension value in extension set (".concat(ext, "). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks."));
        inner(_content, prec2);
      }
    }

    inner(extension, Prec_["default"]);
    return result.reduce(function (a, b) {
      return a.concat(b);
    });
  }

  var Uninitialized = {};

  function ensureAddr(state, addr) {
    if (addr & 1) return 2;
    var idx = addr >> 1;
    var status = state.status[idx];
    if (status == 4) throw new Error("Cyclic dependency between fields and/or facets");
    if (status & 2) return status;
    state.status[idx] = 4;
    var changed = state.config.dynamicSlots[idx](state, state.applying);
    return state.status[idx] = 2 | changed;
  }

  function getAddr(state, addr) {
    return addr & 1 ? state.config.staticValues[addr >> 1] : state.values[addr >> 1];
  }

  var languageData = /* @__PURE__ */Facet.define();
  var allowMultipleSelections = /* @__PURE__ */Facet.define({
    combine: function combine(values) {
      return values.some(function (v) {
        return v;
      });
    },
    "static": true
  });
  var lineSeparator = /* @__PURE__ */Facet.define({
    combine: function combine(values) {
      return values.length ? values[0] : void 0;
    },
    "static": true
  });
  var changeFilter = /* @__PURE__ */Facet.define();
  var transactionFilter = /* @__PURE__ */Facet.define();
  var transactionExtender = /* @__PURE__ */Facet.define();
  var readOnly = /* @__PURE__ */Facet.define({
    combine: function combine(values) {
      return values.length ? values[0] : false;
    }
  });

  var Annotation = /*#__PURE__*/function () {
    function Annotation(type, value) {
      _classCallCheck(this, Annotation);

      this.type = type;
      this.value = value;
    }

    _createClass(Annotation, null, [{
      key: "define",
      value: function define() {
        return new AnnotationType();
      }
    }]);

    return Annotation;
  }();

  var AnnotationType = /*#__PURE__*/function () {
    function AnnotationType() {
      _classCallCheck(this, AnnotationType);
    }

    _createClass(AnnotationType, [{
      key: "of",
      value: function of(value) {
        return new Annotation(this, value);
      }
    }]);

    return AnnotationType;
  }();

  var StateEffectType = /*#__PURE__*/function () {
    function StateEffectType(map) {
      _classCallCheck(this, StateEffectType);

      this.map = map;
    }

    _createClass(StateEffectType, [{
      key: "of",
      value: function of(value) {
        return new StateEffect(this, value);
      }
    }]);

    return StateEffectType;
  }();

  var StateEffect = /*#__PURE__*/function () {
    function StateEffect(type, value) {
      _classCallCheck(this, StateEffect);

      this.type = type;
      this.value = value;
    }

    _createClass(StateEffect, [{
      key: "map",
      value: function map(mapping) {
        var mapped = this.type.map(this.value, mapping);
        return mapped === void 0 ? void 0 : mapped == this.value ? this : new StateEffect(this.type, mapped);
      }
    }, {
      key: "is",
      value: function is(type) {
        return this.type == type;
      }
    }], [{
      key: "define",
      value: function define() {
        var spec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return new StateEffectType(spec.map || function (v) {
          return v;
        });
      }
    }, {
      key: "mapEffects",
      value: function mapEffects(effects, mapping) {
        if (!effects.length) return effects;
        var result = [];

        var _iterator18 = _createForOfIteratorHelper(effects),
            _step18;

        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var effect = _step18.value;
            var mapped = effect.map(mapping);
            if (mapped) result.push(mapped);
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }

        return result;
      }
    }]);

    return StateEffect;
  }();

  StateEffect.reconfigure = /* @__PURE__ */StateEffect.define();
  StateEffect.appendConfig = /* @__PURE__ */StateEffect.define();

  var Transaction = /*#__PURE__*/function () {
    function Transaction(startState, changes, selection, effects, annotations, scrollIntoView) {
      _classCallCheck(this, Transaction);

      this.startState = startState;
      this.changes = changes;
      this.selection = selection;
      this.effects = effects;
      this.annotations = annotations;
      this.scrollIntoView = scrollIntoView;
      this._doc = null;
      this._state = null;
      if (selection) checkSelection(selection, changes.newLength);
      if (!annotations.some(function (a) {
        return a.type == Transaction.time;
      })) this.annotations = annotations.concat(Transaction.time.of(Date.now()));
    }

    _createClass(Transaction, [{
      key: "newDoc",
      get: function get() {
        return this._doc || (this._doc = this.changes.apply(this.startState.doc));
      }
    }, {
      key: "newSelection",
      get: function get() {
        return this.selection || this.startState.selection.map(this.changes);
      }
    }, {
      key: "state",
      get: function get() {
        if (!this._state) this.startState.applyTransaction(this);
        return this._state;
      }
    }, {
      key: "annotation",
      value: function annotation(type) {
        var _iterator19 = _createForOfIteratorHelper(this.annotations),
            _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var ann = _step19.value;
            if (ann.type == type) return ann.value;
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }

        return void 0;
      }
    }, {
      key: "docChanged",
      get: function get() {
        return !this.changes.empty;
      }
    }, {
      key: "reconfigured",
      get: function get() {
        return this.startState.config != this.state.config;
      }
    }, {
      key: "isUserEvent",
      value: function isUserEvent(event) {
        var e = this.annotation(Transaction.userEvent);
        return !!(e && (e == event || e.length > event.length && e.slice(0, event.length) == event && e[event.length] == "."));
      }
    }]);

    return Transaction;
  }();

  Transaction.time = /* @__PURE__ */Annotation.define();
  Transaction.userEvent = /* @__PURE__ */Annotation.define();
  Transaction.addToHistory = /* @__PURE__ */Annotation.define();
  Transaction.remote = /* @__PURE__ */Annotation.define();

  function joinRanges(a, b) {
    var result = [];

    for (var iA = 0, iB = 0;;) {
      var from = void 0,
          to = void 0;

      if (iA < a.length && (iB == b.length || b[iB] >= a[iA])) {
        from = a[iA++];
        to = a[iA++];
      } else if (iB < b.length) {
        from = b[iB++];
        to = b[iB++];
      } else return result;

      if (!result.length || result[result.length - 1] < from) result.push(from, to);else if (result[result.length - 1] < to) result[result.length - 1] = to;
    }
  }

  function mergeTransaction(a, b, sequential) {
    var _a;

    var mapForA, mapForB, changes;

    if (sequential) {
      mapForA = b.changes;
      mapForB = ChangeSet.empty(b.changes.length);
      changes = a.changes.compose(b.changes);
    } else {
      mapForA = b.changes.map(a.changes);
      mapForB = a.changes.mapDesc(b.changes, true);
      changes = a.changes.compose(mapForA);
    }

    return {
      changes: changes,
      selection: b.selection ? b.selection.map(mapForB) : (_a = a.selection) === null || _a === void 0 ? void 0 : _a.map(mapForA),
      effects: StateEffect.mapEffects(a.effects, mapForA).concat(StateEffect.mapEffects(b.effects, mapForB)),
      annotations: a.annotations.length ? a.annotations.concat(b.annotations) : b.annotations,
      scrollIntoView: a.scrollIntoView || b.scrollIntoView
    };
  }

  function resolveTransactionInner(state, spec, docSize) {
    var sel = spec.selection,
        annotations = asArray(spec.annotations);
    if (spec.userEvent) annotations = annotations.concat(Transaction.userEvent.of(spec.userEvent));
    return {
      changes: spec.changes instanceof ChangeSet ? spec.changes : ChangeSet.of(spec.changes || [], docSize, state.facet(lineSeparator)),
      selection: sel && (sel instanceof EditorSelection ? sel : EditorSelection.single(sel.anchor, sel.head)),
      effects: asArray(spec.effects),
      annotations: annotations,
      scrollIntoView: !!spec.scrollIntoView
    };
  }

  function resolveTransaction(state, specs, filter) {
    var s = resolveTransactionInner(state, specs.length ? specs[0] : {}, state.doc.length);
    if (specs.length && specs[0].filter === false) filter = false;

    for (var _i30 = 1; _i30 < specs.length; _i30++) {
      if (specs[_i30].filter === false) filter = false;
      var seq = !!specs[_i30].sequential;
      s = mergeTransaction(s, resolveTransactionInner(state, specs[_i30], seq ? s.changes.newLength : state.doc.length), seq);
    }

    var tr = new Transaction(state, s.changes, s.selection, s.effects, s.annotations, s.scrollIntoView);
    return extendTransaction(filter ? filterTransaction(tr) : tr);
  }

  function filterTransaction(tr) {
    var state = tr.startState;
    var result = true;

    var _iterator20 = _createForOfIteratorHelper(state.facet(changeFilter)),
        _step20;

    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var filter = _step20.value;
        var value = filter(tr);

        if (value === false) {
          result = false;
          break;
        }

        if (Array.isArray(value)) result = result === true ? value : joinRanges(result, value);
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }

    if (result !== true) {
      var changes, back;

      if (result === false) {
        back = tr.changes.invertedDesc;
        changes = ChangeSet.empty(state.doc.length);
      } else {
        var filtered = tr.changes.filter(result);
        changes = filtered.changes;
        back = filtered.filtered.invertedDesc;
      }

      tr = new Transaction(state, changes, tr.selection && tr.selection.map(back), StateEffect.mapEffects(tr.effects, back), tr.annotations, tr.scrollIntoView);
    }

    var filters = state.facet(transactionFilter);

    for (var _i31 = filters.length - 1; _i31 >= 0; _i31--) {
      var _filtered = filters[_i31](tr);

      if (_filtered instanceof Transaction) tr = _filtered;else if (Array.isArray(_filtered) && _filtered.length == 1 && _filtered[0] instanceof Transaction) tr = _filtered[0];else tr = resolveTransaction(state, asArray(_filtered), false);
    }

    return tr;
  }

  function extendTransaction(tr) {
    var state = tr.startState,
        extenders = state.facet(transactionExtender),
        spec = tr;

    for (var _i32 = extenders.length - 1; _i32 >= 0; _i32--) {
      var extension = extenders[_i32](tr);

      if (extension && Object.keys(extension).length) spec = mergeTransaction(tr, resolveTransactionInner(state, extension, tr.changes.newLength), true);
    }

    return spec == tr ? tr : new Transaction(state, tr.changes, tr.selection, spec.effects, spec.annotations, spec.scrollIntoView);
  }

  var none = [];

  function asArray(value) {
    return value == null ? none : Array.isArray(value) ? value : [value];
  }

  var CharCategory = /* @__PURE__ */function (CharCategory2) {
    CharCategory2[CharCategory2["Word"] = 0] = "Word";
    CharCategory2[CharCategory2["Space"] = 1] = "Space";
    CharCategory2[CharCategory2["Other"] = 2] = "Other";
    return CharCategory2;
  }(CharCategory || (CharCategory = {}));

  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  var wordChar;

  try {
    wordChar = /* @__PURE__ */new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
  } catch (_) {}

  function hasWordChar(str) {
    if (wordChar) return wordChar.test(str);

    for (var _i33 = 0; _i33 < str.length; _i33++) {
      var ch = str[_i33];
      if (/\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))) return true;
    }

    return false;
  }

  function makeCategorizer(wordChars) {
    return function (_char) {
      if (!/\S/.test(_char)) return CharCategory.Space;
      if (hasWordChar(_char)) return CharCategory.Word;

      for (var _i34 = 0; _i34 < wordChars.length; _i34++) {
        if (_char.indexOf(wordChars[_i34]) > -1) return CharCategory.Word;
      }

      return CharCategory.Other;
    };
  }

  var EditorState = /*#__PURE__*/function () {
    function EditorState(config, doc2, selection, values) {
      var tr = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      _classCallCheck(this, EditorState);

      this.config = config;
      this.doc = doc2;
      this.selection = selection;
      this.values = values;
      this.applying = null;
      this.status = config.statusTemplate.slice();
      this.applying = tr;
      if (tr) tr._state = this;

      for (var _i35 = 0; _i35 < this.config.dynamicSlots.length; _i35++) {
        ensureAddr(this, _i35 << 1);
      }

      this.applying = null;
    }

    _createClass(EditorState, [{
      key: "field",
      value: function field(_field) {
        var require2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var addr = this.config.address[_field.id];

        if (addr == null) {
          if (require2) throw new RangeError("Field is not present in this state");
          return void 0;
        }

        ensureAddr(this, addr);
        return getAddr(this, addr);
      }
    }, {
      key: "update",
      value: function update() {
        for (var _len2 = arguments.length, specs = new Array(_len2), _key = 0; _key < _len2; _key++) {
          specs[_key] = arguments[_key];
        }

        return resolveTransaction(this, specs, true);
      }
    }, {
      key: "applyTransaction",
      value: function applyTransaction(tr) {
        var conf = this.config,
            _conf = conf,
            base2 = _conf.base,
            compartments = _conf.compartments;

        var _iterator21 = _createForOfIteratorHelper(tr.effects),
            _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var effect = _step21.value;

            if (effect.is(Compartment.reconfigure)) {
              if (conf) {
                compartments = /* @__PURE__ */new Map();
                conf.compartments.forEach(function (val, key) {
                  return compartments.set(key, val);
                });
                conf = null;
              }

              compartments.set(effect.value.compartment, effect.value.extension);
            } else if (effect.is(StateEffect.reconfigure)) {
              conf = null;
              base2 = effect.value;
            } else if (effect.is(StateEffect.appendConfig)) {
              conf = null;
              base2 = asArray(base2).concat(effect.value);
            }
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }

        var startValues;

        if (!conf) {
          conf = Configuration.resolve(base2, compartments, this);
          var updatedValues = conf.dynamicSlots.map(function (_) {
            return Uninitialized;
          });

          for (var id in conf.address) {
            var cur = conf.address[id],
                prev = this.config.address[id];
            if (prev != null && (cur & 1) == 0) updatedValues[cur >> 1] = getAddr(this, prev);
          }

          var intermediateState = new EditorState(conf, this.doc, this.selection, updatedValues, null);
          startValues = intermediateState.values;
        } else {
          startValues = tr.startState.values.slice();
        }

        new EditorState(conf, tr.newDoc, tr.newSelection, startValues, tr);
      }
    }, {
      key: "replaceSelection",
      value: function replaceSelection(text) {
        if (typeof text == "string") text = this.toText(text);
        return this.changeByRange(function (range) {
          return {
            changes: {
              from: range.from,
              to: range.to,
              insert: text
            },
            range: EditorSelection.cursor(range.from + text.length)
          };
        });
      }
    }, {
      key: "changeByRange",
      value: function changeByRange(f) {
        var sel = this.selection;
        var result1 = f(sel.ranges[0]);
        var changes = this.changes(result1.changes),
            ranges = [result1.range];
        var effects = asArray(result1.effects);

        for (var _i36 = 1; _i36 < sel.ranges.length; _i36++) {
          var result = f(sel.ranges[_i36]);
          var newChanges = this.changes(result.changes),
              newMapped = newChanges.map(changes);

          for (var j = 0; j < _i36; j++) {
            ranges[j] = ranges[j].map(newMapped);
          }

          var mapBy = changes.mapDesc(newChanges, true);
          ranges.push(result.range.map(mapBy));
          changes = changes.compose(newMapped);
          effects = StateEffect.mapEffects(effects, newMapped).concat(StateEffect.mapEffects(asArray(result.effects), mapBy));
        }

        return {
          changes: changes,
          selection: EditorSelection.create(ranges, sel.mainIndex),
          effects: effects
        };
      }
    }, {
      key: "changes",
      value: function changes() {
        var spec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        if (spec instanceof ChangeSet) return spec;
        return ChangeSet.of(spec, this.doc.length, this.facet(EditorState.lineSeparator));
      }
    }, {
      key: "toText",
      value: function toText(string) {
        return Text.of(string.split(this.facet(EditorState.lineSeparator) || DefaultSplit));
      }
    }, {
      key: "sliceDoc",
      value: function sliceDoc() {
        var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.doc.length;
        return this.doc.sliceString(from, to, this.lineBreak);
      }
    }, {
      key: "facet",
      value: function facet(_facet) {
        var addr = this.config.address[_facet.id];
        if (addr == null) return _facet["default"];
        ensureAddr(this, addr);
        return getAddr(this, addr);
      }
    }, {
      key: "toJSON",
      value: function toJSON(fields) {
        var result = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (fields) for (var prop in fields) {
          var value = fields[prop];
          if (value instanceof StateField) result[prop] = value.spec.toJSON(this.field(fields[prop]), this);
        }
        return result;
      }
    }, {
      key: "tabSize",
      get: function get() {
        return this.facet(EditorState.tabSize);
      }
    }, {
      key: "lineBreak",
      get: function get() {
        return this.facet(EditorState.lineSeparator) || "\n";
      }
    }, {
      key: "readOnly",
      get: function get() {
        return this.facet(readOnly);
      }
    }, {
      key: "phrase",
      value: function phrase(_phrase) {
        var _iterator22 = _createForOfIteratorHelper(this.facet(EditorState.phrases)),
            _step22;

        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var map = _step22.value;
            if (Object.prototype.hasOwnProperty.call(map, _phrase)) return map[_phrase];
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }

        return _phrase;
      }
    }, {
      key: "languageDataAt",
      value: function languageDataAt(name, pos) {
        var side = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        var values = [];

        var _iterator23 = _createForOfIteratorHelper(this.facet(languageData)),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var provider = _step23.value;

            var _iterator24 = _createForOfIteratorHelper(provider(this, pos, side)),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var result = _step24.value;
                if (Object.prototype.hasOwnProperty.call(result, name)) values.push(result[name]);
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }

        return values;
      }
    }, {
      key: "charCategorizer",
      value: function charCategorizer(at) {
        return makeCategorizer(this.languageDataAt("wordChars", at).join(""));
      }
    }, {
      key: "wordAt",
      value: function wordAt(pos) {
        var _this$doc$lineAt = this.doc.lineAt(pos),
            text = _this$doc$lineAt.text,
            from = _this$doc$lineAt.from,
            length = _this$doc$lineAt.length;

        var cat = this.charCategorizer(pos);
        var start = pos - from,
            end = pos - from;

        while (start > 0) {
          var prev = findClusterBreak(text, start, false);
          if (cat(text.slice(prev, start)) != CharCategory.Word) break;
          start = prev;
        }

        while (end < length) {
          var next = findClusterBreak(text, end);
          if (cat(text.slice(end, next)) != CharCategory.Word) break;
          end = next;
        }

        return start == end ? null : EditorSelection.range(start + from, end + from);
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var fields = arguments.length > 2 ? arguments[2] : undefined;
        if (!json || typeof json.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
        var fieldInit = [];

        if (fields) {
          var _loop4 = function _loop4(prop) {
            var field = fields[prop],
                value = json[prop];
            fieldInit.push(field.init(function (state) {
              return field.spec.fromJSON(value, state);
            }));
          };

          for (var prop in fields) {
            _loop4(prop);
          }
        }

        return EditorState.create({
          doc: json.doc,
          selection: EditorSelection.fromJSON(json.selection),
          extensions: config.extensions ? fieldInit.concat([config.extensions]) : fieldInit
        });
      }
    }, {
      key: "create",
      value: function create() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var configuration = Configuration.resolve(config.extensions || [], /* @__PURE__ */new Map());
        var doc2 = config.doc instanceof Text ? config.doc : Text.of((config.doc || "").split(configuration.staticFacet(EditorState.lineSeparator) || DefaultSplit));
        var selection = !config.selection ? EditorSelection.single(0) : config.selection instanceof EditorSelection ? config.selection : EditorSelection.single(config.selection.anchor, config.selection.head);
        checkSelection(selection, doc2.length);
        if (!configuration.staticFacet(allowMultipleSelections)) selection = selection.asSingle();
        return new EditorState(configuration, doc2, selection, configuration.dynamicSlots.map(function (_) {
          return Uninitialized;
        }));
      }
    }]);

    return EditorState;
  }();

  EditorState.allowMultipleSelections = allowMultipleSelections;
  EditorState.tabSize = /* @__PURE__ */Facet.define({
    combine: function combine(values) {
      return values.length ? values[0] : 4;
    }
  });
  EditorState.lineSeparator = lineSeparator;
  EditorState.readOnly = readOnly;
  EditorState.phrases = /* @__PURE__ */Facet.define();
  EditorState.languageData = languageData;
  EditorState.changeFilter = changeFilter;
  EditorState.transactionFilter = transactionFilter;
  EditorState.transactionExtender = transactionExtender;
  Compartment.reconfigure = /* @__PURE__ */StateEffect.define(); // ../../node_modules/style-mod/src/style-mod.js

  var C = "\u037C";
  var COUNT = typeof Symbol == "undefined" ? "__" + C : Symbol["for"](C);
  var SET = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet");
  var top = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {};

  var StyleModule = /*#__PURE__*/function () {
    function StyleModule(spec, options) {
      _classCallCheck(this, StyleModule);

      this.rules = [];

      var _ref3 = options || {},
          finish = _ref3.finish;

      function splitSelector(selector) {
        return /^@/.test(selector) ? [selector] : selector.split(/,\s*/);
      }

      function render(selectors, spec2, target, isKeyframes) {
        var local = [],
            isAt = /^@(\w+)\b/.exec(selectors[0]),
            keyframes = isAt && isAt[1] == "keyframes";
        if (isAt && spec2 == null) return target.push(selectors[0] + ";");

        for (var prop in spec2) {
          var value = spec2[prop];

          if (/&/.test(prop)) {
            render(prop.split(/,\s*/).map(function (part) {
              return selectors.map(function (sel) {
                return part.replace(/&/, sel);
              });
            }).reduce(function (a, b) {
              return a.concat(b);
            }), value, target);
          } else if (value && _typeof(value) == "object") {
            if (!isAt) throw new RangeError("The value of a property (" + prop + ") should be a primitive value.");
            render(splitSelector(prop), value, local, keyframes);
          } else if (value != null) {
            local.push(prop.replace(/_.*/, "").replace(/[A-Z]/g, function (l) {
              return "-" + l.toLowerCase();
            }) + ": " + value + ";");
          }
        }

        if (local.length || keyframes) {
          target.push((finish && !isAt && !isKeyframes ? selectors.map(finish) : selectors).join(", ") + " {" + local.join(" ") + "}");
        }
      }

      for (var prop in spec) {
        render(splitSelector(prop), spec[prop], this.rules);
      }
    }

    _createClass(StyleModule, [{
      key: "getRules",
      value: function getRules() {
        return this.rules.join("\n");
      }
    }], [{
      key: "newName",
      value: function newName() {
        var id = top[COUNT] || 1;
        top[COUNT] = id + 1;
        return C + id.toString(36);
      }
    }, {
      key: "mount",
      value: function mount(root, modules) {
        (root[SET] || new StyleSet(root)).mount(Array.isArray(modules) ? modules : [modules]);
      }
    }]);

    return StyleModule;
  }();

  var adoptedSet = null;

  var StyleSet = /*#__PURE__*/function () {
    function StyleSet(root) {
      _classCallCheck(this, StyleSet);

      if (!root.head && root.adoptedStyleSheets && typeof CSSStyleSheet != "undefined") {
        if (adoptedSet) {
          root.adoptedStyleSheets = [adoptedSet.sheet].concat(root.adoptedStyleSheets);
          return root[SET] = adoptedSet;
        }

        this.sheet = new CSSStyleSheet();
        root.adoptedStyleSheets = [this.sheet].concat(root.adoptedStyleSheets);
        adoptedSet = this;
      } else {
        this.styleTag = (root.ownerDocument || root).createElement("style");
        var target = root.head || root;
        target.insertBefore(this.styleTag, target.firstChild);
      }

      this.modules = [];
      root[SET] = this;
    }

    _createClass(StyleSet, [{
      key: "mount",
      value: function mount(modules) {
        var sheet = this.sheet;
        var pos = 0,
            j = 0;

        for (var _i37 = 0; _i37 < modules.length; _i37++) {
          var mod = modules[_i37],
              index = this.modules.indexOf(mod);

          if (index < j && index > -1) {
            this.modules.splice(index, 1);
            j--;
            index = -1;
          }

          if (index == -1) {
            this.modules.splice(j++, 0, mod);
            if (sheet) for (var k = 0; k < mod.rules.length; k++) {
              sheet.insertRule(mod.rules[k], pos++);
            }
          } else {
            while (j < index) {
              pos += this.modules[j++].rules.length;
            }

            pos += mod.rules.length;
            j++;
          }
        }

        if (!sheet) {
          var _text2 = "";

          for (var _i38 = 0; _i38 < this.modules.length; _i38++) {
            _text2 += this.modules[_i38].getRules() + "\n";
          }

          this.styleTag.textContent = _text2;
        }
      }
    }]);

    return StyleSet;
  }(); // ../../node_modules/@codemirror/rangeset/dist/index.js


  var RangeValue = /*#__PURE__*/function () {
    function RangeValue() {
      _classCallCheck(this, RangeValue);
    }

    _createClass(RangeValue, [{
      key: "eq",
      value: function eq(other) {
        return this == other;
      }
    }, {
      key: "range",
      value: function range(from) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
        return new Range(from, to, this);
      }
    }]);

    return RangeValue;
  }();

  RangeValue.prototype.startSide = RangeValue.prototype.endSide = 0;
  RangeValue.prototype.point = false;
  RangeValue.prototype.mapMode = MapMode.TrackDel;

  var Range = /*#__PURE__*/_createClass(function Range(from, to, value) {
    _classCallCheck(this, Range);

    this.from = from;
    this.to = to;
    this.value = value;
  });

  function cmpRange(a, b) {
    return a.from - b.from || a.value.startSide - b.value.startSide;
  }

  var Chunk = /*#__PURE__*/function () {
    function Chunk(from, to, value, maxPoint) {
      _classCallCheck(this, Chunk);

      this.from = from;
      this.to = to;
      this.value = value;
      this.maxPoint = maxPoint;
    }

    _createClass(Chunk, [{
      key: "length",
      get: function get() {
        return this.to[this.to.length - 1];
      }
    }, {
      key: "findIndex",
      value: function findIndex(pos, side, end) {
        var startAt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var arr = end ? this.to : this.from;

        for (var lo = startAt, hi = arr.length;;) {
          if (lo == hi) return lo;
          var mid = lo + hi >> 1;
          var diff = arr[mid] - pos || (end ? this.value[mid].endSide : this.value[mid].startSide) - side;
          if (mid == lo) return diff >= 0 ? lo : hi;
          if (diff >= 0) hi = mid;else lo = mid + 1;
        }
      }
    }, {
      key: "between",
      value: function between(offset, from, to, f) {
        for (var _i39 = this.findIndex(from, -1e9, true), e = this.findIndex(to, 1e9, false, _i39); _i39 < e; _i39++) {
          if (f(this.from[_i39] + offset, this.to[_i39] + offset, this.value[_i39]) === false) return false;
        }
      }
    }, {
      key: "map",
      value: function map(offset, changes) {
        var value = [],
            from = [],
            to = [],
            newPos = -1,
            maxPoint = -1;

        for (var _i40 = 0; _i40 < this.value.length; _i40++) {
          var val = this.value[_i40],
              curFrom = this.from[_i40] + offset,
              curTo = this.to[_i40] + offset,
              newFrom = void 0,
              newTo = void 0;

          if (curFrom == curTo) {
            var mapped = changes.mapPos(curFrom, val.startSide, val.mapMode);
            if (mapped == null) continue;
            newFrom = newTo = mapped;

            if (val.startSide != val.endSide) {
              newTo = changes.mapPos(curFrom, val.endSide);
              if (newTo < newFrom) continue;
            }
          } else {
            newFrom = changes.mapPos(curFrom, val.startSide);
            newTo = changes.mapPos(curTo, val.endSide);
            if (newFrom > newTo || newFrom == newTo && val.startSide > 0 && val.endSide <= 0) continue;
          }

          if ((newTo - newFrom || val.endSide - val.startSide) < 0) continue;
          if (newPos < 0) newPos = newFrom;
          if (val.point) maxPoint = Math.max(maxPoint, newTo - newFrom);
          value.push(val);
          from.push(newFrom - newPos);
          to.push(newTo - newPos);
        }

        return {
          mapped: value.length ? new Chunk(from, to, value, maxPoint) : null,
          pos: newPos
        };
      }
    }]);

    return Chunk;
  }();

  var RangeSet = /*#__PURE__*/function () {
    function RangeSet(chunkPos, chunk) {
      var nextLayer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : RangeSet.empty;
      var maxPoint = arguments.length > 3 ? arguments[3] : undefined;

      _classCallCheck(this, RangeSet);

      this.chunkPos = chunkPos;
      this.chunk = chunk;
      this.nextLayer = nextLayer;
      this.maxPoint = maxPoint;
    }

    _createClass(RangeSet, [{
      key: "length",
      get: function get() {
        var last = this.chunk.length - 1;
        return last < 0 ? 0 : Math.max(this.chunkEnd(last), this.nextLayer.length);
      }
    }, {
      key: "size",
      get: function get() {
        if (this.isEmpty) return 0;
        var size = this.nextLayer.size;

        var _iterator25 = _createForOfIteratorHelper(this.chunk),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var chunk = _step25.value;
            size += chunk.value.length;
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }

        return size;
      }
    }, {
      key: "chunkEnd",
      value: function chunkEnd(index) {
        return this.chunkPos[index] + this.chunk[index].length;
      }
    }, {
      key: "update",
      value: function update(updateSpec) {
        var _updateSpec$add = updateSpec.add,
            add = _updateSpec$add === void 0 ? [] : _updateSpec$add,
            _updateSpec$sort = updateSpec.sort,
            sort = _updateSpec$sort === void 0 ? false : _updateSpec$sort,
            _updateSpec$filterFro = updateSpec.filterFrom,
            filterFrom = _updateSpec$filterFro === void 0 ? 0 : _updateSpec$filterFro,
            _updateSpec$filterTo = updateSpec.filterTo,
            filterTo = _updateSpec$filterTo === void 0 ? this.length : _updateSpec$filterTo;
        var filter = updateSpec.filter;
        if (add.length == 0 && !filter) return this;
        if (sort) add.slice().sort(cmpRange);
        if (this.isEmpty) return add.length ? RangeSet.of(add) : this;
        var cur = new LayerCursor(this, null, -1)["goto"](0),
            i = 0,
            spill = [];
        var builder = new RangeSetBuilder();

        while (cur.value || i < add.length) {
          if (i < add.length && (cur.from - add[i].from || cur.startSide - add[i].value.startSide) >= 0) {
            var range = add[i++];
            if (!builder.addInner(range.from, range.to, range.value)) spill.push(range);
          } else if (cur.rangeIndex == 1 && cur.chunkIndex < this.chunk.length && (i == add.length || this.chunkEnd(cur.chunkIndex) < add[i].from) && (!filter || filterFrom > this.chunkEnd(cur.chunkIndex) || filterTo < this.chunkPos[cur.chunkIndex]) && builder.addChunk(this.chunkPos[cur.chunkIndex], this.chunk[cur.chunkIndex])) {
            cur.nextChunk();
          } else {
            if (!filter || filterFrom > cur.to || filterTo < cur.from || filter(cur.from, cur.to, cur.value)) {
              if (!builder.addInner(cur.from, cur.to, cur.value)) spill.push(new Range(cur.from, cur.to, cur.value));
            }

            cur.next();
          }
        }

        return builder.finishInner(this.nextLayer.isEmpty && !spill.length ? RangeSet.empty : this.nextLayer.update({
          add: spill,
          filter: filter,
          filterFrom: filterFrom,
          filterTo: filterTo
        }));
      }
    }, {
      key: "map",
      value: function map(changes) {
        if (changes.length == 0 || this.isEmpty) return this;
        var chunks = [],
            chunkPos = [],
            maxPoint = -1;

        for (var _i41 = 0; _i41 < this.chunk.length; _i41++) {
          var start = this.chunkPos[_i41],
              chunk = this.chunk[_i41];
          var touch = changes.touchesRange(start, start + chunk.length);

          if (touch === false) {
            maxPoint = Math.max(maxPoint, chunk.maxPoint);
            chunks.push(chunk);
            chunkPos.push(changes.mapPos(start));
          } else if (touch === true) {
            var _chunk$map = chunk.map(start, changes),
                mapped = _chunk$map.mapped,
                pos = _chunk$map.pos;

            if (mapped) {
              maxPoint = Math.max(maxPoint, mapped.maxPoint);
              chunks.push(mapped);
              chunkPos.push(pos);
            }
          }
        }

        var next = this.nextLayer.map(changes);
        return chunks.length == 0 ? next : new RangeSet(chunkPos, chunks, next, maxPoint);
      }
    }, {
      key: "between",
      value: function between(from, to, f) {
        if (this.isEmpty) return;

        for (var _i42 = 0; _i42 < this.chunk.length; _i42++) {
          var start = this.chunkPos[_i42],
              chunk = this.chunk[_i42];
          if (to >= start && from <= start + chunk.length && chunk.between(start, from - start, to - start, f) === false) return;
        }

        this.nextLayer.between(from, to, f);
      }
    }, {
      key: "iter",
      value: function iter() {
        var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return HeapCursor.from([this])["goto"](from);
      }
    }, {
      key: "isEmpty",
      get: function get() {
        return this.nextLayer == this;
      }
    }], [{
      key: "iter",
      value: function iter(sets) {
        var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return HeapCursor.from(sets)["goto"](from);
      }
    }, {
      key: "compare",
      value: function compare(oldSets, newSets, textDiff, comparator) {
        var minPointSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
        var a = oldSets.filter(function (set) {
          return set.maxPoint > 0 || !set.isEmpty && set.maxPoint >= minPointSize;
        });
        var b = newSets.filter(function (set) {
          return set.maxPoint > 0 || !set.isEmpty && set.maxPoint >= minPointSize;
        });
        var sharedChunks = findSharedChunks(a, b, textDiff);
        var sideA = new SpanCursor(a, sharedChunks, minPointSize);
        var sideB = new SpanCursor(b, sharedChunks, minPointSize);
        textDiff.iterGaps(function (fromA, fromB, length) {
          return _compare(sideA, fromA, sideB, fromB, length, comparator);
        });
        if (textDiff.empty && textDiff.length == 0) _compare(sideA, 0, sideB, 0, 0, comparator);
      }
    }, {
      key: "eq",
      value: function eq(oldSets, newSets) {
        var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var to = arguments.length > 3 ? arguments[3] : undefined;
        if (to == null) to = 1e9;
        var a = oldSets.filter(function (set) {
          return !set.isEmpty && newSets.indexOf(set) < 0;
        });
        var b = newSets.filter(function (set) {
          return !set.isEmpty && oldSets.indexOf(set) < 0;
        });
        if (a.length != b.length) return false;
        if (!a.length) return true;
        var sharedChunks = findSharedChunks(a, b);
        var sideA = new SpanCursor(a, sharedChunks, 0)["goto"](from),
            sideB = new SpanCursor(b, sharedChunks, 0)["goto"](from);

        for (;;) {
          if (sideA.to != sideB.to || !sameValues(sideA.active, sideB.active) || sideA.point && (!sideB.point || !sideA.point.eq(sideB.point))) return false;
          if (sideA.to > to) return true;
          sideA.next();
          sideB.next();
        }
      }
    }, {
      key: "spans",
      value: function spans(sets, from, to, iterator) {
        var minPointSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;

        var _a;

        var cursor = new SpanCursor(sets, null, minPointSize, (_a = iterator.filterPoint) === null || _a === void 0 ? void 0 : _a.bind(iterator))["goto"](from),
            pos = from;
        var open = cursor.openStart;

        for (;;) {
          var curTo = Math.min(cursor.to, to);

          if (cursor.point) {
            iterator.point(pos, curTo, cursor.point, cursor.activeForPoint(cursor.to), open);
            open = cursor.openEnd(curTo) + (cursor.to > curTo ? 1 : 0);
          } else if (curTo > pos) {
            iterator.span(pos, curTo, cursor.active, open);
            open = cursor.openEnd(curTo);
          }

          if (cursor.to > to) break;
          pos = cursor.to;
          cursor.next();
        }

        return open;
      }
    }, {
      key: "of",
      value: function of(ranges) {
        var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var build = new RangeSetBuilder();

        var _iterator26 = _createForOfIteratorHelper(ranges instanceof Range ? [ranges] : sort ? lazySort(ranges) : ranges),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var range = _step26.value;
            build.add(range.from, range.to, range.value);
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }

        return build.finish();
      }
    }]);

    return RangeSet;
  }();

  RangeSet.empty = /* @__PURE__ */new RangeSet([], [], null, -1);

  function lazySort(ranges) {
    if (ranges.length > 1) for (var prev = ranges[0], _i43 = 1; _i43 < ranges.length; _i43++) {
      var cur = ranges[_i43];
      if (cmpRange(prev, cur) > 0) return ranges.slice().sort(cmpRange);
      prev = cur;
    }
    return ranges;
  }

  RangeSet.empty.nextLayer = RangeSet.empty;

  var RangeSetBuilder = /*#__PURE__*/function () {
    function RangeSetBuilder() {
      _classCallCheck(this, RangeSetBuilder);

      this.chunks = [];
      this.chunkPos = [];
      this.chunkStart = -1;
      this.last = null;
      this.lastFrom = -1e9;
      this.lastTo = -1e9;
      this.from = [];
      this.to = [];
      this.value = [];
      this.maxPoint = -1;
      this.setMaxPoint = -1;
      this.nextLayer = null;
    }

    _createClass(RangeSetBuilder, [{
      key: "finishChunk",
      value: function finishChunk(newArrays) {
        this.chunks.push(new Chunk(this.from, this.to, this.value, this.maxPoint));
        this.chunkPos.push(this.chunkStart);
        this.chunkStart = -1;
        this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
        this.maxPoint = -1;

        if (newArrays) {
          this.from = [];
          this.to = [];
          this.value = [];
        }
      }
    }, {
      key: "add",
      value: function add(from, to, value) {
        if (!this.addInner(from, to, value)) (this.nextLayer || (this.nextLayer = new RangeSetBuilder())).add(from, to, value);
      }
    }, {
      key: "addInner",
      value: function addInner(from, to, value) {
        var diff = from - this.lastTo || value.startSide - this.last.endSide;
        if (diff <= 0 && (from - this.lastFrom || value.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        if (diff < 0) return false;
        if (this.from.length == 250) this.finishChunk(true);
        if (this.chunkStart < 0) this.chunkStart = from;
        this.from.push(from - this.chunkStart);
        this.to.push(to - this.chunkStart);
        this.last = value;
        this.lastFrom = from;
        this.lastTo = to;
        this.value.push(value);
        if (value.point) this.maxPoint = Math.max(this.maxPoint, to - from);
        return true;
      }
    }, {
      key: "addChunk",
      value: function addChunk(from, chunk) {
        if ((from - this.lastTo || chunk.value[0].startSide - this.last.endSide) < 0) return false;
        if (this.from.length) this.finishChunk(true);
        this.setMaxPoint = Math.max(this.setMaxPoint, chunk.maxPoint);
        this.chunks.push(chunk);
        this.chunkPos.push(from);
        var last = chunk.value.length - 1;
        this.last = chunk.value[last];
        this.lastFrom = chunk.from[last] + from;
        this.lastTo = chunk.to[last] + from;
        return true;
      }
    }, {
      key: "finish",
      value: function finish() {
        return this.finishInner(RangeSet.empty);
      }
    }, {
      key: "finishInner",
      value: function finishInner(next) {
        if (this.from.length) this.finishChunk(false);
        if (this.chunks.length == 0) return next;
        var result = new RangeSet(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(next) : next, this.setMaxPoint);
        this.from = null;
        return result;
      }
    }]);

    return RangeSetBuilder;
  }();

  function findSharedChunks(a, b, textDiff) {
    var inA = /* @__PURE__ */new Map();

    var _iterator27 = _createForOfIteratorHelper(a),
        _step27;

    try {
      for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
        var set = _step27.value;

        for (var _i44 = 0; _i44 < set.chunk.length; _i44++) {
          if (set.chunk[_i44].maxPoint <= 0) inA.set(set.chunk[_i44], set.chunkPos[_i44]);
        }
      }
    } catch (err) {
      _iterator27.e(err);
    } finally {
      _iterator27.f();
    }

    var shared = /* @__PURE__ */new Set();

    var _iterator28 = _createForOfIteratorHelper(b),
        _step28;

    try {
      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
        var _set = _step28.value;

        for (var _i45 = 0; _i45 < _set.chunk.length; _i45++) {
          var known = inA.get(_set.chunk[_i45]);
          if (known != null && (textDiff ? textDiff.mapPos(known) : known) == _set.chunkPos[_i45] && !(textDiff === null || textDiff === void 0 ? void 0 : textDiff.touchesRange(known, known + _set.chunk[_i45].length))) shared.add(_set.chunk[_i45]);
        }
      }
    } catch (err) {
      _iterator28.e(err);
    } finally {
      _iterator28.f();
    }

    return shared;
  }

  var LayerCursor = /*#__PURE__*/function () {
    function LayerCursor(layer, skip, minPoint) {
      var rank = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      _classCallCheck(this, LayerCursor);

      this.layer = layer;
      this.skip = skip;
      this.minPoint = minPoint;
      this.rank = rank;
    }

    _createClass(LayerCursor, [{
      key: "startSide",
      get: function get() {
        return this.value ? this.value.startSide : 0;
      }
    }, {
      key: "endSide",
      get: function get() {
        return this.value ? this.value.endSide : 0;
      }
    }, {
      key: "goto",
      value: function goto(pos) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1e9;
        this.chunkIndex = this.rangeIndex = 0;
        this.gotoInner(pos, side, false);
        return this;
      }
    }, {
      key: "gotoInner",
      value: function gotoInner(pos, side, forward) {
        while (this.chunkIndex < this.layer.chunk.length) {
          var next = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(next) || this.layer.chunkEnd(this.chunkIndex) < pos || next.maxPoint < this.minPoint)) break;
          this.chunkIndex++;
          forward = false;
        }

        if (this.chunkIndex < this.layer.chunk.length) {
          var rangeIndex = this.layer.chunk[this.chunkIndex].findIndex(pos - this.layer.chunkPos[this.chunkIndex], side, true);
          if (!forward || this.rangeIndex < rangeIndex) this.setRangeIndex(rangeIndex);
        }

        this.next();
      }
    }, {
      key: "forward",
      value: function forward(pos, side) {
        if ((this.to - pos || this.endSide - side) < 0) this.gotoInner(pos, side, true);
      }
    }, {
      key: "next",
      value: function next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9;
            this.value = null;
            break;
          } else {
            var chunkPos = this.layer.chunkPos[this.chunkIndex],
                chunk = this.layer.chunk[this.chunkIndex];
            var from = chunkPos + chunk.from[this.rangeIndex];
            this.from = from;
            this.to = chunkPos + chunk.to[this.rangeIndex];
            this.value = chunk.value[this.rangeIndex];
            this.setRangeIndex(this.rangeIndex + 1);
            if (this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
          }
        }
      }
    }, {
      key: "setRangeIndex",
      value: function setRangeIndex(index) {
        if (index == this.layer.chunk[this.chunkIndex].value.length) {
          this.chunkIndex++;

          if (this.skip) {
            while (this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex])) {
              this.chunkIndex++;
            }
          }

          this.rangeIndex = 0;
        } else {
          this.rangeIndex = index;
        }
      }
    }, {
      key: "nextChunk",
      value: function nextChunk() {
        this.chunkIndex++;
        this.rangeIndex = 0;
        this.next();
      }
    }, {
      key: "compare",
      value: function compare(other) {
        return this.from - other.from || this.startSide - other.startSide || this.to - other.to || this.endSide - other.endSide;
      }
    }]);

    return LayerCursor;
  }();

  var HeapCursor = /*#__PURE__*/function () {
    function HeapCursor(heap) {
      _classCallCheck(this, HeapCursor);

      this.heap = heap;
    }

    _createClass(HeapCursor, [{
      key: "startSide",
      get: function get() {
        return this.value ? this.value.startSide : 0;
      }
    }, {
      key: "goto",
      value: function goto(pos) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1e9;

        var _iterator29 = _createForOfIteratorHelper(this.heap),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var cur = _step29.value;
            cur["goto"](pos, side);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }

        for (var _i46 = this.heap.length >> 1; _i46 >= 0; _i46--) {
          heapBubble(this.heap, _i46);
        }

        this.next();
        return this;
      }
    }, {
      key: "forward",
      value: function forward(pos, side) {
        var _iterator30 = _createForOfIteratorHelper(this.heap),
            _step30;

        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var cur = _step30.value;
            cur.forward(pos, side);
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }

        for (var _i47 = this.heap.length >> 1; _i47 >= 0; _i47--) {
          heapBubble(this.heap, _i47);
        }

        if ((this.to - pos || this.value.endSide - side) < 0) this.next();
      }
    }, {
      key: "next",
      value: function next() {
        if (this.heap.length == 0) {
          this.from = this.to = 1e9;
          this.value = null;
          this.rank = -1;
        } else {
          var top2 = this.heap[0];
          this.from = top2.from;
          this.to = top2.to;
          this.value = top2.value;
          this.rank = top2.rank;
          if (top2.value) top2.next();
          heapBubble(this.heap, 0);
        }
      }
    }], [{
      key: "from",
      value: function from(sets) {
        var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var minPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        var heap = [];

        for (var _i48 = 0; _i48 < sets.length; _i48++) {
          for (var cur = sets[_i48]; !cur.isEmpty; cur = cur.nextLayer) {
            if (cur.maxPoint >= minPoint) heap.push(new LayerCursor(cur, skip, minPoint, _i48));
          }
        }

        return heap.length == 1 ? heap[0] : new HeapCursor(heap);
      }
    }]);

    return HeapCursor;
  }();

  function heapBubble(heap, index) {
    for (var cur = heap[index];;) {
      var childIndex = (index << 1) + 1;
      if (childIndex >= heap.length) break;
      var child = heap[childIndex];

      if (childIndex + 1 < heap.length && child.compare(heap[childIndex + 1]) >= 0) {
        child = heap[childIndex + 1];
        childIndex++;
      }

      if (cur.compare(child) < 0) break;
      heap[childIndex] = cur;
      heap[index] = child;
      index = childIndex;
    }
  }

  var SpanCursor = /*#__PURE__*/function () {
    function SpanCursor(sets, skip, minPoint) {
      var filterPoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
        return true;
      };

      _classCallCheck(this, SpanCursor);

      this.minPoint = minPoint;
      this.filterPoint = filterPoint;
      this.active = [];
      this.activeTo = [];
      this.activeRank = [];
      this.minActive = -1;
      this.point = null;
      this.pointFrom = 0;
      this.pointRank = 0;
      this.to = -1e9;
      this.endSide = 0;
      this.openStart = -1;
      this.cursor = HeapCursor.from(sets, skip, minPoint);
    }

    _createClass(SpanCursor, [{
      key: "goto",
      value: function goto(pos) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1e9;
        this.cursor["goto"](pos, side);
        this.active.length = this.activeTo.length = this.activeRank.length = 0;
        this.minActive = -1;
        this.to = pos;
        this.endSide = side;
        this.openStart = -1;
        this.next();
        return this;
      }
    }, {
      key: "forward",
      value: function forward(pos, side) {
        while (this.minActive > -1 && (this.activeTo[this.minActive] - pos || this.active[this.minActive].endSide - side) < 0) {
          this.removeActive(this.minActive);
        }

        this.cursor.forward(pos, side);
      }
    }, {
      key: "removeActive",
      value: function removeActive(index) {
        remove(this.active, index);
        remove(this.activeTo, index);
        remove(this.activeRank, index);
        this.minActive = findMinIndex(this.active, this.activeTo);
      }
    }, {
      key: "addActive",
      value: function addActive(trackOpen) {
        var i = 0,
            _this$cursor = this.cursor,
            value = _this$cursor.value,
            to = _this$cursor.to,
            rank = _this$cursor.rank;

        while (i < this.activeRank.length && this.activeRank[i] <= rank) {
          i++;
        }

        insert(this.active, i, value);
        insert(this.activeTo, i, to);
        insert(this.activeRank, i, rank);
        if (trackOpen) insert(trackOpen, i, this.cursor.from);
        this.minActive = findMinIndex(this.active, this.activeTo);
      }
    }, {
      key: "next",
      value: function next() {
        var from = this.to,
            wasPoint = this.point;
        this.point = null;
        var trackOpen = this.openStart < 0 ? [] : null,
            trackExtra = 0;

        for (;;) {
          var a = this.minActive;

          if (a > -1 && (this.activeTo[a] - this.cursor.from || this.active[a].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[a] > from) {
              this.to = this.activeTo[a];
              this.endSide = this.active[a].endSide;
              break;
            }

            this.removeActive(a);
            if (trackOpen) remove(trackOpen, a);
          } else if (!this.cursor.value) {
            this.to = this.endSide = 1e9;
            break;
          } else if (this.cursor.from > from) {
            this.to = this.cursor.from;
            this.endSide = this.cursor.startSide;
            break;
          } else {
            var nextVal = this.cursor.value;

            if (!nextVal.point) {
              this.addActive(trackOpen);
              this.cursor.next();
            } else if (wasPoint && this.cursor.to == this.to && this.cursor.from < this.cursor.to) {
              this.cursor.next();
            } else if (!this.filterPoint(this.cursor.from, this.cursor.to, this.cursor.value, this.cursor.rank)) {
              this.cursor.next();
            } else {
              this.point = nextVal;
              this.pointFrom = this.cursor.from;
              this.pointRank = this.cursor.rank;
              this.to = this.cursor.to;
              this.endSide = nextVal.endSide;
              if (this.cursor.from < from) trackExtra = 1;
              this.cursor.next();
              if (this.to > from) this.forward(this.to, this.endSide);
              break;
            }
          }
        }

        if (trackOpen) {
          var openStart = 0;

          while (openStart < trackOpen.length && trackOpen[openStart] < from) {
            openStart++;
          }

          this.openStart = openStart + trackExtra;
        }
      }
    }, {
      key: "activeForPoint",
      value: function activeForPoint(to) {
        if (!this.active.length) return this.active;
        var active = [];

        for (var _i49 = this.active.length - 1; _i49 >= 0; _i49--) {
          if (this.activeRank[_i49] < this.pointRank) break;
          if (this.activeTo[_i49] > to || this.activeTo[_i49] == to && this.active[_i49].endSide >= this.point.endSide) active.push(this.active[_i49]);
        }

        return active.reverse();
      }
    }, {
      key: "openEnd",
      value: function openEnd(to) {
        var open = 0;

        for (var _i50 = this.activeTo.length - 1; _i50 >= 0 && this.activeTo[_i50] > to; _i50--) {
          open++;
        }

        return open;
      }
    }]);

    return SpanCursor;
  }();

  function _compare(a, startA, b, startB, length, comparator) {
    a["goto"](startA);
    b["goto"](startB);
    var endB = startB + length;
    var pos = startB,
        dPos = startB - startA;

    for (;;) {
      var diff = a.to + dPos - b.to || a.endSide - b.endSide;
      var end = diff < 0 ? a.to + dPos : b.to,
          clipEnd = Math.min(end, endB);

      if (a.point || b.point) {
        if (!(a.point && b.point && (a.point == b.point || a.point.eq(b.point)) && sameValues(a.activeForPoint(a.to + dPos), b.activeForPoint(b.to)))) comparator.comparePoint(pos, clipEnd, a.point, b.point);
      } else {
        if (clipEnd > pos && !sameValues(a.active, b.active)) comparator.compareRange(pos, clipEnd, a.active, b.active);
      }

      if (end > endB) break;
      pos = end;
      if (diff <= 0) a.next();
      if (diff >= 0) b.next();
    }
  }

  function sameValues(a, b) {
    if (a.length != b.length) return false;

    for (var _i51 = 0; _i51 < a.length; _i51++) {
      if (a[_i51] != b[_i51] && !a[_i51].eq(b[_i51])) return false;
    }

    return true;
  }

  function remove(array, index) {
    for (var _i52 = index, e = array.length - 1; _i52 < e; _i52++) {
      array[_i52] = array[_i52 + 1];
    }

    array.pop();
  }

  function insert(array, index, value) {
    for (var _i53 = array.length - 1; _i53 >= index; _i53--) {
      array[_i53 + 1] = array[_i53];
    }

    array[index] = value;
  }

  function findMinIndex(value, array) {
    var found = -1,
        foundPos = 1e9;

    for (var _i54 = 0; _i54 < array.length; _i54++) {
      if ((array[_i54] - foundPos || value[_i54].endSide - value[found].endSide) < 0) {
        found = _i54;
        foundPos = array[_i54];
      }
    }

    return found;
  } // ../../node_modules/w3c-keyname/index.es.js


  var base = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
    229: "q"
  };
  var shift = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"',
    229: "Q"
  };
  var chrome = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);
  var safari = typeof navigator != "undefined" && /Apple Computer/.test(navigator.vendor);
  var gecko = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);
  var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
  var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
  var brokenModifierNames = chrome && (mac || +chrome[1] < 57) || gecko && mac;

  for (i = 0; i < 10; i++) {
    base[48 + i] = base[96 + i] = String(i);
  }

  var i;

  for (i = 1; i <= 24; i++) {
    base[i + 111] = "F" + i;
  }

  var i;

  for (i = 65; i <= 90; i++) {
    base[i] = String.fromCharCode(i + 32);
    shift[i] = String.fromCharCode(i);
  }

  var i;

  for (code in base) {
    if (!shift.hasOwnProperty(code)) shift[code] = base[code];
  }

  var code; // ../../node_modules/@codemirror/view/dist/index.js

  function getSelection(root) {
    var target;

    if (root.nodeType == 11) {
      target = root.getSelection ? root : root.ownerDocument;
    } else {
      target = root;
    }

    return target.getSelection();
  }

  function contains(dom, node) {
    return node ? dom.contains(node.nodeType != 1 ? node.parentNode : node) : false;
  }

  function deepActiveElement() {
    var elt = document.activeElement;

    while (elt && elt.shadowRoot) {
      elt = elt.shadowRoot.activeElement;
    }

    return elt;
  }

  function hasSelection(dom, selection) {
    if (!selection.anchorNode) return false;

    try {
      return contains(dom, selection.anchorNode);
    } catch (_) {
      return false;
    }
  }

  function clientRectsFor(dom) {
    if (dom.nodeType == 3) return textRange(dom, 0, dom.nodeValue.length).getClientRects();else if (dom.nodeType == 1) return dom.getClientRects();else return [];
  }

  function isEquivalentPosition(node, off, targetNode, targetOff) {
    return targetNode ? scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1) : false;
  }

  function domIndex(node) {
    for (var index = 0;; index++) {
      node = node.previousSibling;
      if (!node) return index;
    }
  }

  function scanFor(node, off, targetNode, targetOff, dir) {
    for (;;) {
      if (node == targetNode && off == targetOff) return true;

      if (off == (dir < 0 ? 0 : maxOffset(node))) {
        if (node.nodeName == "DIV") return false;
        var parent = node.parentNode;
        if (!parent || parent.nodeType != 1) return false;
        off = domIndex(node) + (dir < 0 ? 0 : 1);
        node = parent;
      } else if (node.nodeType == 1) {
        node = node.childNodes[off + (dir < 0 ? -1 : 0)];
        if (node.nodeType == 1 && node.contentEditable == "false") return false;
        off = dir < 0 ? maxOffset(node) : 0;
      } else {
        return false;
      }
    }
  }

  function maxOffset(node) {
    return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
  }

  var Rect0 = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };

  function flattenRect(rect, left) {
    var x = left ? rect.left : rect.right;
    return {
      left: x,
      right: x,
      top: rect.top,
      bottom: rect.bottom
    };
  }

  function windowRect(win) {
    return {
      left: 0,
      right: win.innerWidth,
      top: 0,
      bottom: win.innerHeight
    };
  }

  var ScrollSpace = 5;

  function scrollRectIntoView(dom, rect, side, center) {
    var doc2 = dom.ownerDocument,
        win = doc2.defaultView;

    for (var cur = dom; cur;) {
      if (cur.nodeType == 1) {
        var bounding = void 0,
            top2 = cur == doc2.body;

        if (top2) {
          bounding = windowRect(win);
        } else {
          if (cur.scrollHeight <= cur.clientHeight && cur.scrollWidth <= cur.clientWidth) {
            cur = cur.parentNode;
            continue;
          }

          var rect2 = cur.getBoundingClientRect();
          bounding = {
            left: rect2.left,
            right: rect2.left + cur.clientWidth,
            top: rect2.top,
            bottom: rect2.top + cur.clientHeight
          };
        }

        var moveX = 0,
            moveY = 0;

        if (center) {
          var rectHeight = rect.bottom - rect.top,
              boundingHeight = bounding.bottom - bounding.top;
          var targetTop = void 0;
          if (rectHeight <= boundingHeight) targetTop = rect.top + rectHeight / 2 - boundingHeight / 2;else if (side < 0) targetTop = rect.top - ScrollSpace;else targetTop = rect.bottom + ScrollSpace - boundingHeight;
          moveY = targetTop - bounding.top;
          if (Math.abs(moveY) <= 1) moveY = 0;
        } else if (rect.top < bounding.top) {
          moveY = -(bounding.top - rect.top + ScrollSpace);
          if (side > 0 && rect.bottom > bounding.bottom + moveY) moveY = rect.bottom - bounding.bottom + moveY + ScrollSpace;
        } else if (rect.bottom > bounding.bottom) {
          moveY = rect.bottom - bounding.bottom + ScrollSpace;
          if (side < 0 && rect.top - moveY < bounding.top) moveY = -(bounding.top + moveY - rect.top + ScrollSpace);
        }

        if (rect.left < bounding.left) {
          moveX = -(bounding.left - rect.left + ScrollSpace);
          if (side > 0 && rect.right > bounding.right + moveX) moveX = rect.right - bounding.right + moveX + ScrollSpace;
        } else if (rect.right > bounding.right) {
          moveX = rect.right - bounding.right + ScrollSpace;
          if (side < 0 && rect.left < bounding.left + moveX) moveX = -(bounding.left + moveX - rect.left + ScrollSpace);
        }

        if (moveX || moveY) {
          if (top2) {
            win.scrollBy(moveX, moveY);
          } else {
            if (moveY) {
              var start = cur.scrollTop;
              cur.scrollTop += moveY;
              moveY = cur.scrollTop - start;
            }

            if (moveX) {
              var _start = cur.scrollLeft;
              cur.scrollLeft += moveX;
              moveX = cur.scrollLeft - _start;
            }

            rect = {
              left: rect.left - moveX,
              top: rect.top - moveY,
              right: rect.right - moveX,
              bottom: rect.bottom - moveY
            };
          }
        }

        if (top2) break;
        cur = cur.assignedSlot || cur.parentNode;
        center = false;
      } else if (cur.nodeType == 11) {
        cur = cur.host;
      } else {
        break;
      }
    }
  }

  var DOMSelection = /*#__PURE__*/function () {
    function DOMSelection() {
      _classCallCheck(this, DOMSelection);

      this.anchorNode = null;
      this.anchorOffset = 0;
      this.focusNode = null;
      this.focusOffset = 0;
    }

    _createClass(DOMSelection, [{
      key: "eq",
      value: function eq(domSel) {
        return this.anchorNode == domSel.anchorNode && this.anchorOffset == domSel.anchorOffset && this.focusNode == domSel.focusNode && this.focusOffset == domSel.focusOffset;
      }
    }, {
      key: "set",
      value: function set(domSel) {
        this.anchorNode = domSel.anchorNode;
        this.anchorOffset = domSel.anchorOffset;
        this.focusNode = domSel.focusNode;
        this.focusOffset = domSel.focusOffset;
      }
    }]);

    return DOMSelection;
  }();

  var preventScrollSupported = null;

  function focusPreventScroll(dom) {
    if (dom.setActive) return dom.setActive();
    if (preventScrollSupported) return dom.focus(preventScrollSupported);
    var stack = [];

    for (var cur = dom; cur; cur = cur.parentNode) {
      stack.push(cur, cur.scrollTop, cur.scrollLeft);
      if (cur == cur.ownerDocument) break;
    }

    dom.focus(preventScrollSupported == null ? Object.defineProperties({}, {
      preventScroll: {
        get: function get() {
          preventScrollSupported = {
            preventScroll: true
          };
          return true;
        },
        configurable: true,
        enumerable: true
      }
    }) : void 0);

    if (!preventScrollSupported) {
      preventScrollSupported = false;

      for (var _i55 = 0; _i55 < stack.length;) {
        var elt = stack[_i55++],
            top2 = stack[_i55++],
            left = stack[_i55++];
        if (elt.scrollTop != top2) elt.scrollTop = top2;
        if (elt.scrollLeft != left) elt.scrollLeft = left;
      }
    }
  }

  var scratchRange;

  function textRange(node, from) {
    var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : from;
    var range = scratchRange || (scratchRange = document.createRange());
    range.setEnd(node, to);
    range.setStart(node, from);
    return range;
  }

  function dispatchKey(elt, name, code) {
    var options = {
      key: name,
      code: name,
      keyCode: code,
      which: code,
      cancelable: true
    };
    var down = new KeyboardEvent("keydown", options);
    down.synthetic = true;
    elt.dispatchEvent(down);
    var up = new KeyboardEvent("keyup", options);
    up.synthetic = true;
    elt.dispatchEvent(up);
    return down.defaultPrevented || up.defaultPrevented;
  }

  function getRoot(node) {
    while (node) {
      if (node && (node.nodeType == 9 || node.nodeType == 11 && node.host)) return node;
      node = node.assignedSlot || node.parentNode;
    }

    return null;
  }

  var DOMPos = /*#__PURE__*/function () {
    function DOMPos(node, offset) {
      var precise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      _classCallCheck(this, DOMPos);

      this.node = node;
      this.offset = offset;
      this.precise = precise;
    }

    _createClass(DOMPos, null, [{
      key: "before",
      value: function before(dom, precise) {
        return new DOMPos(dom.parentNode, domIndex(dom), precise);
      }
    }, {
      key: "after",
      value: function after(dom, precise) {
        return new DOMPos(dom.parentNode, domIndex(dom) + 1, precise);
      }
    }]);

    return DOMPos;
  }();

  var none$3 = [];

  var ContentView = /*#__PURE__*/function () {
    function ContentView() {
      _classCallCheck(this, ContentView);

      this.parent = null;
      this.dom = null;
      this.dirty = 2;
    }

    _createClass(ContentView, [{
      key: "editorView",
      get: function get() {
        if (!this.parent) throw new Error("Accessing view in orphan content view");
        return this.parent.editorView;
      }
    }, {
      key: "overrideDOMText",
      get: function get() {
        return null;
      }
    }, {
      key: "posAtStart",
      get: function get() {
        return this.parent ? this.parent.posBefore(this) : 0;
      }
    }, {
      key: "posAtEnd",
      get: function get() {
        return this.posAtStart + this.length;
      }
    }, {
      key: "posBefore",
      value: function posBefore(view) {
        var pos = this.posAtStart;

        var _iterator31 = _createForOfIteratorHelper(this.children),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var child = _step31.value;
            if (child == view) return pos;
            pos += child.length + child.breakAfter;
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }

        throw new RangeError("Invalid child in posBefore");
      }
    }, {
      key: "posAfter",
      value: function posAfter(view) {
        return this.posBefore(view) + view.length;
      }
    }, {
      key: "coordsAt",
      value: function coordsAt(_pos, _side) {
        return null;
      }
    }, {
      key: "sync",
      value: function sync(track) {
        var _a;

        if (this.dirty & 2) {
          var parent = this.dom;
          var pos = parent.firstChild;

          var _iterator32 = _createForOfIteratorHelper(this.children),
              _step32;

          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
              var child = _step32.value;

              if (child.dirty) {
                if (!child.dom && pos && !((_a = ContentView.get(pos)) === null || _a === void 0 ? void 0 : _a.parent)) child.reuseDOM(pos);
                child.sync(track);
                child.dirty = 0;
              }

              if (track && !track.written && track.node == parent && pos != child.dom) track.written = true;

              if (child.dom.parentNode == parent) {
                while (pos && pos != child.dom) {
                  pos = rm(pos);
                }

                pos = child.dom.nextSibling;
              } else {
                parent.insertBefore(child.dom, pos);
              }
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }

          if (pos && track && track.node == parent) track.written = true;

          while (pos) {
            pos = rm(pos);
          }
        } else if (this.dirty & 1) {
          var _iterator33 = _createForOfIteratorHelper(this.children),
              _step33;

          try {
            for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
              var _child = _step33.value;

              if (_child.dirty) {
                _child.sync(track);

                _child.dirty = 0;
              }
            }
          } catch (err) {
            _iterator33.e(err);
          } finally {
            _iterator33.f();
          }
        }
      }
    }, {
      key: "reuseDOM",
      value: function reuseDOM(_dom) {
        return false;
      }
    }, {
      key: "localPosFromDOM",
      value: function localPosFromDOM(node, offset) {
        var after;

        if (node == this.dom) {
          after = this.dom.childNodes[offset];
        } else {
          var bias = maxOffset(node) == 0 ? 0 : offset == 0 ? -1 : 1;

          for (;;) {
            var parent = node.parentNode;
            if (parent == this.dom) break;

            if (bias == 0 && parent.firstChild != parent.lastChild) {
              if (node == parent.firstChild) bias = -1;else bias = 1;
            }

            node = parent;
          }

          if (bias < 0) after = node;else after = node.nextSibling;
        }

        if (after == this.dom.firstChild) return 0;

        while (after && !ContentView.get(after)) {
          after = after.nextSibling;
        }

        if (!after) return this.length;

        for (var _i56 = 0, pos = 0;; _i56++) {
          var child = this.children[_i56];
          if (child.dom == after) return pos;
          pos += child.length + child.breakAfter;
        }
      }
    }, {
      key: "domBoundsAround",
      value: function domBoundsAround(from, to) {
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var fromI = -1,
            fromStart = -1,
            toI = -1,
            toEnd = -1;

        for (var _i57 = 0, pos = offset, prevEnd = offset; _i57 < this.children.length; _i57++) {
          var child = this.children[_i57],
              end = pos + child.length;
          if (pos < from && end > to) return child.domBoundsAround(from, to, pos);

          if (end >= from && fromI == -1) {
            fromI = _i57;
            fromStart = pos;
          }

          if (pos > to && child.dom.parentNode == this.dom) {
            toI = _i57;
            toEnd = prevEnd;
            break;
          }

          prevEnd = end;
          pos = end + child.breakAfter;
        }

        return {
          from: fromStart,
          to: toEnd < 0 ? offset + this.length : toEnd,
          startDOM: (fromI ? this.children[fromI - 1].dom.nextSibling : null) || this.dom.firstChild,
          endDOM: toI < this.children.length && toI >= 0 ? this.children[toI].dom : null
        };
      }
    }, {
      key: "markDirty",
      value: function markDirty() {
        var andParent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.dirty |= 2;
        this.markParentsDirty(andParent);
      }
    }, {
      key: "markParentsDirty",
      value: function markParentsDirty(childList) {
        for (var parent = this.parent; parent; parent = parent.parent) {
          if (childList) parent.dirty |= 2;
          if (parent.dirty & 1) return;
          parent.dirty |= 1;
          childList = false;
        }
      }
    }, {
      key: "setParent",
      value: function setParent(parent) {
        if (this.parent != parent) {
          this.parent = parent;
          if (this.dirty) this.markParentsDirty(true);
        }
      }
    }, {
      key: "setDOM",
      value: function setDOM(dom) {
        if (this.dom) this.dom.cmView = null;
        this.dom = dom;
        dom.cmView = this;
      }
    }, {
      key: "rootView",
      get: function get() {
        for (var v = this;;) {
          var parent = v.parent;
          if (!parent) return v;
          v = parent;
        }
      }
    }, {
      key: "replaceChildren",
      value: function replaceChildren(from, to) {
        var _this$children;

        var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : none$3;
        this.markDirty();

        for (var _i58 = from; _i58 < to; _i58++) {
          var child = this.children[_i58];
          if (child.parent == this) child.parent = null;
        }

        (_this$children = this.children).splice.apply(_this$children, [from, to - from].concat(_toConsumableArray(children)));

        for (var _i59 = 0; _i59 < children.length; _i59++) {
          children[_i59].setParent(this);
        }
      }
    }, {
      key: "ignoreMutation",
      value: function ignoreMutation(_rec) {
        return false;
      }
    }, {
      key: "ignoreEvent",
      value: function ignoreEvent(_event) {
        return false;
      }
    }, {
      key: "childCursor",
      value: function childCursor() {
        var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.length;
        return new ChildCursor(this.children, pos, this.children.length);
      }
    }, {
      key: "childPos",
      value: function childPos(pos) {
        var bias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return this.childCursor().findPos(pos, bias);
      }
    }, {
      key: "toString",
      value: function toString() {
        var name = this.constructor.name.replace("View", "");
        return name + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (name == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
      }
    }, {
      key: "isEditable",
      get: function get() {
        return true;
      }
    }], [{
      key: "get",
      value: function get(node) {
        return node.cmView;
      }
    }]);

    return ContentView;
  }();

  ContentView.prototype.breakAfter = 0;

  function rm(dom) {
    var next = dom.nextSibling;
    dom.parentNode.removeChild(dom);
    return next;
  }

  var ChildCursor = /*#__PURE__*/function () {
    function ChildCursor(children, pos, i) {
      _classCallCheck(this, ChildCursor);

      this.children = children;
      this.pos = pos;
      this.i = i;
      this.off = 0;
    }

    _createClass(ChildCursor, [{
      key: "findPos",
      value: function findPos(pos) {
        var bias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        for (;;) {
          if (pos > this.pos || pos == this.pos && (bias > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) {
            this.off = pos - this.pos;
            return this;
          }

          var next = this.children[--this.i];
          this.pos -= next.length + next.breakAfter;
        }
      }
    }]);

    return ChildCursor;
  }();

  var _ref4 = typeof navigator != "undefined" ? [navigator, document] : [{
    userAgent: "",
    vendor: "",
    platform: ""
  }, {
    documentElement: {
      style: {}
    }
  }],
      _ref5 = _slicedToArray(_ref4, 2),
      nav = _ref5[0],
      doc = _ref5[1];

  var ie_edge = /* @__PURE__ */ /Edge\/(\d+)/.exec(nav.userAgent);
  var ie_upto10 = /* @__PURE__ */ /MSIE \d/.test(nav.userAgent);
  var ie_11up = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav.userAgent);
  var ie2 = !!(ie_upto10 || ie_11up || ie_edge);
  var gecko2 = !ie2 && /* @__PURE__ */ /gecko\/(\d+)/i.test(nav.userAgent);
  var chrome2 = !ie2 && /* @__PURE__ */ /Chrome\/(\d+)/.exec(nav.userAgent);
  var webkit = ("webkitFontSmoothing" in doc.documentElement.style);
  var safari2 = !ie2 && /* @__PURE__ */ /Apple Computer/.test(nav.vendor);
  var ios = safari2 && ( /* @__PURE__ */ /Mobile\/\w+/.test(nav.userAgent) || nav.maxTouchPoints > 2);
  var browser = {
    mac: ios || /* @__PURE__ */ /Mac/.test(nav.platform),
    windows: /* @__PURE__ */ /Win/.test(nav.platform),
    linux: /* @__PURE__ */ /Linux|X11/.test(nav.platform),
    ie: ie2,
    ie_version: ie_upto10 ? doc.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0,
    gecko: gecko2,
    gecko_version: gecko2 ? +( /* @__PURE__ */ /Firefox\/(\d+)/.exec(nav.userAgent) || [0, 0])[1] : 0,
    chrome: !!chrome2,
    chrome_version: chrome2 ? +chrome2[1] : 0,
    ios: ios,
    android: /* @__PURE__ */ /Android\b/.test(nav.userAgent),
    webkit: webkit,
    safari: safari2,
    webkit_version: webkit ? +( /* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
    tabSize: doc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
  };
  var none$2 = [];

  var InlineView = /*#__PURE__*/function (_ContentView) {
    _inherits(InlineView, _ContentView);

    var _super4 = _createSuper(InlineView);

    function InlineView() {
      _classCallCheck(this, InlineView);

      return _super4.apply(this, arguments);
    }

    _createClass(InlineView, [{
      key: "become",
      value: function become(_other) {
        return false;
      }
    }, {
      key: "getSide",
      value: function getSide() {
        return 0;
      }
    }]);

    return InlineView;
  }(ContentView);

  InlineView.prototype.children = none$2;
  var MaxJoinLen = 256;

  var TextView = /*#__PURE__*/function (_InlineView) {
    _inherits(TextView, _InlineView);

    var _super5 = _createSuper(TextView);

    function TextView(text) {
      var _this6;

      _classCallCheck(this, TextView);

      _this6 = _super5.call(this);
      _this6.text = text;
      return _this6;
    }

    _createClass(TextView, [{
      key: "length",
      get: function get() {
        return this.text.length;
      }
    }, {
      key: "createDOM",
      value: function createDOM(textDOM) {
        this.setDOM(textDOM || document.createTextNode(this.text));
      }
    }, {
      key: "sync",
      value: function sync(track) {
        if (!this.dom) this.createDOM();

        if (this.dom.nodeValue != this.text) {
          if (track && track.node == this.dom) track.written = true;
          this.dom.nodeValue = this.text;
        }
      }
    }, {
      key: "reuseDOM",
      value: function reuseDOM(dom) {
        if (dom.nodeType != 3) return false;
        this.createDOM(dom);
        return true;
      }
    }, {
      key: "merge",
      value: function merge(from, to, source) {
        if (source && (!(source instanceof TextView) || this.length - (to - from) + source.length > MaxJoinLen)) return false;
        this.text = this.text.slice(0, from) + (source ? source.text : "") + this.text.slice(to);
        this.markDirty();
        return true;
      }
    }, {
      key: "slice",
      value: function slice(from) {
        var result = new TextView(this.text.slice(from));
        this.text = this.text.slice(0, from);
        return result;
      }
    }, {
      key: "localPosFromDOM",
      value: function localPosFromDOM(node, offset) {
        return node == this.dom ? offset : offset ? this.text.length : 0;
      }
    }, {
      key: "domAtPos",
      value: function domAtPos(pos) {
        return new DOMPos(this.dom, pos);
      }
    }, {
      key: "domBoundsAround",
      value: function domBoundsAround(_from, _to, offset) {
        return {
          from: offset,
          to: offset + this.length,
          startDOM: this.dom,
          endDOM: this.dom.nextSibling
        };
      }
    }, {
      key: "coordsAt",
      value: function coordsAt(pos, side) {
        return textCoords(this.dom, pos, side);
      }
    }]);

    return TextView;
  }(InlineView);

  var MarkView = /*#__PURE__*/function (_InlineView2) {
    _inherits(MarkView, _InlineView2);

    var _super6 = _createSuper(MarkView);

    function MarkView(mark) {
      var _this7;

      var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, MarkView);

      _this7 = _super6.call(this);
      _this7.mark = mark;
      _this7.children = children;
      _this7.length = length;

      var _iterator34 = _createForOfIteratorHelper(children),
          _step34;

      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var ch = _step34.value;
          ch.setParent(_assertThisInitialized(_this7));
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }

      return _this7;
    }

    _createClass(MarkView, [{
      key: "createDOM",
      value: function createDOM() {
        var dom = document.createElement(this.mark.tagName);
        if (this.mark["class"]) dom.className = this.mark["class"];
        if (this.mark.attrs) for (var name in this.mark.attrs) {
          dom.setAttribute(name, this.mark.attrs[name]);
        }
        this.setDOM(dom);
      }
    }, {
      key: "sync",
      value: function sync(track) {
        if (!this.dom || this.dirty & 4) this.createDOM();

        _get(_getPrototypeOf(MarkView.prototype), "sync", this).call(this, track);
      }
    }, {
      key: "merge",
      value: function merge(from, to, source, openStart, openEnd) {
        if (source && (!(source instanceof MarkView && source.mark.eq(this.mark)) || from && openStart <= 0 || to < this.length && openEnd <= 0)) return false;
        mergeInlineChildren(this, from, to, source ? source.children : none$2, openStart - 1, openEnd - 1);
        this.markDirty();
        return true;
      }
    }, {
      key: "slice",
      value: function slice(from) {
        var result = [],
            off = 0,
            detachFrom = -1,
            i = 0;

        var _iterator35 = _createForOfIteratorHelper(this.children),
            _step35;

        try {
          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
            var elt = _step35.value;
            var end = off + elt.length;
            if (end > from) result.push(off < from ? elt.slice(from - off) : elt);
            if (detachFrom < 0 && off >= from) detachFrom = i;
            off = end;
            i++;
          }
        } catch (err) {
          _iterator35.e(err);
        } finally {
          _iterator35.f();
        }

        var length = this.length - from;
        this.length = from;
        if (detachFrom > -1) this.replaceChildren(detachFrom, this.children.length);
        return new MarkView(this.mark, result, length);
      }
    }, {
      key: "domAtPos",
      value: function domAtPos(pos) {
        return inlineDOMAtPos(this.dom, this.children, pos);
      }
    }, {
      key: "coordsAt",
      value: function coordsAt(pos, side) {
        return coordsInChildren(this, pos, side);
      }
    }]);

    return MarkView;
  }(InlineView);

  function textCoords(text, pos, side) {
    var length = text.nodeValue.length;
    if (pos > length) pos = length;
    var from = pos,
        to = pos,
        flatten2 = 0;

    if (pos == 0 && side < 0 || pos == length && side >= 0) {
      if (!(browser.chrome || browser.gecko)) {
        if (pos) {
          from--;
          flatten2 = 1;
        } else {
          to++;
          flatten2 = -1;
        }
      }
    } else {
      if (side < 0) from--;else to++;
    }

    var rects = textRange(text, from, to).getClientRects();
    if (!rects.length) return Rect0;
    var rect = rects[(flatten2 ? flatten2 < 0 : side >= 0) ? 0 : rects.length - 1];
    if (browser.safari && !flatten2 && rect.width == 0) rect = Array.prototype.find.call(rects, function (r) {
      return r.width;
    }) || rect;
    return flatten2 ? flattenRect(rect, flatten2 < 0) : rect;
  }

  var WidgetView = /*#__PURE__*/function (_InlineView3) {
    _inherits(WidgetView, _InlineView3);

    var _super7 = _createSuper(WidgetView);

    function WidgetView(widget, length, side) {
      var _this8;

      _classCallCheck(this, WidgetView);

      _this8 = _super7.call(this);
      _this8.widget = widget;
      _this8.length = length;
      _this8.side = side;
      return _this8;
    }

    _createClass(WidgetView, [{
      key: "slice",
      value: function slice(from) {
        var result = WidgetView.create(this.widget, this.length - from, this.side);
        this.length -= from;
        return result;
      }
    }, {
      key: "sync",
      value: function sync() {
        if (!this.dom || !this.widget.updateDOM(this.dom)) {
          this.setDOM(this.widget.toDOM(this.editorView));
          this.dom.contentEditable = "false";
        }
      }
    }, {
      key: "getSide",
      value: function getSide() {
        return this.side;
      }
    }, {
      key: "merge",
      value: function merge(from, to, source, openStart, openEnd) {
        if (source && (!(source instanceof WidgetView) || !this.widget.compare(source.widget) || from > 0 && openStart <= 0 || to < this.length && openEnd <= 0)) return false;
        this.length = from + (source ? source.length : 0) + (this.length - to);
        return true;
      }
    }, {
      key: "become",
      value: function become(other) {
        if (other.length == this.length && other instanceof WidgetView && other.side == this.side) {
          if (this.widget.constructor == other.widget.constructor) {
            if (!this.widget.eq(other.widget)) this.markDirty(true);
            this.widget = other.widget;
            return true;
          }
        }

        return false;
      }
    }, {
      key: "ignoreMutation",
      value: function ignoreMutation() {
        return true;
      }
    }, {
      key: "ignoreEvent",
      value: function ignoreEvent(event) {
        return this.widget.ignoreEvent(event);
      }
    }, {
      key: "overrideDOMText",
      get: function get() {
        if (this.length == 0) return Text.empty;
        var top2 = this;

        while (top2.parent) {
          top2 = top2.parent;
        }

        var view = top2.editorView,
            text = view && view.state.doc,
            start = this.posAtStart;
        return text ? text.slice(start, start + this.length) : Text.empty;
      }
    }, {
      key: "domAtPos",
      value: function domAtPos(pos) {
        return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
      }
    }, {
      key: "domBoundsAround",
      value: function domBoundsAround() {
        return null;
      }
    }, {
      key: "coordsAt",
      value: function coordsAt(pos, side) {
        var rects = this.dom.getClientRects(),
            rect = null;
        if (!rects.length) return Rect0;

        for (var _i60 = pos > 0 ? rects.length - 1 : 0;; _i60 += pos > 0 ? -1 : 1) {
          rect = rects[_i60];
          if (pos > 0 ? _i60 == 0 : _i60 == rects.length - 1 || rect.top < rect.bottom) break;
        }

        return pos == 0 && side > 0 || pos == this.length && side <= 0 ? rect : flattenRect(rect, pos == 0);
      }
    }, {
      key: "isEditable",
      get: function get() {
        return false;
      }
    }], [{
      key: "create",
      value: function create(widget, length, side) {
        return new (widget.customView || WidgetView)(widget, length, side);
      }
    }]);

    return WidgetView;
  }(InlineView);

  var CompositionView = /*#__PURE__*/function (_WidgetView) {
    _inherits(CompositionView, _WidgetView);

    var _super8 = _createSuper(CompositionView);

    function CompositionView() {
      _classCallCheck(this, CompositionView);

      return _super8.apply(this, arguments);
    }

    _createClass(CompositionView, [{
      key: "domAtPos",
      value: function domAtPos(pos) {
        return new DOMPos(this.widget.text, pos);
      }
    }, {
      key: "sync",
      value: function sync() {
        if (!this.dom) this.setDOM(this.widget.toDOM());
      }
    }, {
      key: "localPosFromDOM",
      value: function localPosFromDOM(node, offset) {
        return !offset ? 0 : node.nodeType == 3 ? Math.min(offset, this.length) : this.length;
      }
    }, {
      key: "ignoreMutation",
      value: function ignoreMutation() {
        return false;
      }
    }, {
      key: "overrideDOMText",
      get: function get() {
        return null;
      }
    }, {
      key: "coordsAt",
      value: function coordsAt(pos, side) {
        return textCoords(this.widget.text, pos, side);
      }
    }, {
      key: "isEditable",
      get: function get() {
        return true;
      }
    }]);

    return CompositionView;
  }(WidgetView);

  var WidgetBufferView = /*#__PURE__*/function (_InlineView4) {
    _inherits(WidgetBufferView, _InlineView4);

    var _super9 = _createSuper(WidgetBufferView);

    function WidgetBufferView(side) {
      var _this9;

      _classCallCheck(this, WidgetBufferView);

      _this9 = _super9.call(this);
      _this9.side = side;
      return _this9;
    }

    _createClass(WidgetBufferView, [{
      key: "length",
      get: function get() {
        return 0;
      }
    }, {
      key: "merge",
      value: function merge() {
        return false;
      }
    }, {
      key: "become",
      value: function become(other) {
        return other instanceof WidgetBufferView && other.side == this.side;
      }
    }, {
      key: "slice",
      value: function slice() {
        return new WidgetBufferView(this.side);
      }
    }, {
      key: "sync",
      value: function sync() {
        if (!this.dom) this.setDOM(document.createTextNode("\u200B"));else if (this.dirty && this.dom.nodeValue != "\u200B") this.dom.nodeValue = "\u200B";
      }
    }, {
      key: "getSide",
      value: function getSide() {
        return this.side;
      }
    }, {
      key: "domAtPos",
      value: function domAtPos(pos) {
        return DOMPos.before(this.dom);
      }
    }, {
      key: "domBoundsAround",
      value: function domBoundsAround() {
        return null;
      }
    }, {
      key: "coordsAt",
      value: function coordsAt(pos) {
        var rects = clientRectsFor(this.dom);
        return rects[rects.length - 1];
      }
    }, {
      key: "overrideDOMText",
      get: function get() {
        return Text.of([this.dom.nodeValue.replace(/\u200b/g, "")]);
      }
    }]);

    return WidgetBufferView;
  }(InlineView);

  function mergeInlineChildren(parent, from, to, elts, openStart, openEnd) {
    var cur = parent.childCursor();

    var _cur$findPos = cur.findPos(to, 1),
        toI = _cur$findPos.i,
        toOff = _cur$findPos.off;

    var _cur$findPos2 = cur.findPos(from, -1),
        fromI = _cur$findPos2.i,
        fromOff = _cur$findPos2.off;

    var dLen = from - to;

    var _iterator36 = _createForOfIteratorHelper(elts),
        _step36;

    try {
      for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
        var view = _step36.value;
        dLen += view.length;
      }
    } catch (err) {
      _iterator36.e(err);
    } finally {
      _iterator36.f();
    }

    parent.length += dLen;
    var children = parent.children;

    if (fromI == toI && fromOff) {
      var start = children[fromI];
      if (elts.length == 1 && start.merge(fromOff, toOff, elts[0], openStart, openEnd)) return;

      if (elts.length == 0) {
        start.merge(fromOff, toOff, null, openStart, openEnd);
        return;
      }

      var after = start.slice(toOff);
      if (after.merge(0, 0, elts[elts.length - 1], 0, openEnd)) elts[elts.length - 1] = after;else elts.push(after);
      toI++;
      openEnd = toOff = 0;
    }

    if (toOff) {
      var end = children[toI];

      if (elts.length && end.merge(0, toOff, elts[elts.length - 1], 0, openEnd)) {
        elts.pop();
        openEnd = elts.length ? 0 : openStart;
      } else {
        end.merge(0, toOff, null, 0, 0);
      }
    } else if (toI < children.length && elts.length && children[toI].merge(0, 0, elts[elts.length - 1], 0, openEnd)) {
      elts.pop();
      openEnd = elts.length ? 0 : openStart;
    }

    if (fromOff) {
      var _start2 = children[fromI];

      if (elts.length && _start2.merge(fromOff, _start2.length, elts[0], openStart, 0)) {
        elts.shift();
        openStart = elts.length ? 0 : openEnd;
      } else {
        _start2.merge(fromOff, _start2.length, null, 0, 0);
      }

      fromI++;
    } else if (fromI && elts.length) {
      var _end = children[fromI - 1];

      if (_end.merge(_end.length, _end.length, elts[0], openStart, 0)) {
        elts.shift();
        openStart = elts.length ? 0 : openEnd;
      }
    }

    while (fromI < toI && elts.length && children[toI - 1].become(elts[elts.length - 1])) {
      elts.pop();
      toI--;
      openEnd = elts.length ? 0 : openStart;
    }

    while (fromI < toI && elts.length && children[fromI].become(elts[0])) {
      elts.shift();
      fromI++;
      openStart = elts.length ? 0 : openEnd;
    }

    if (!elts.length && fromI && toI < children.length && children[toI].merge(0, 0, children[fromI - 1], openStart, openEnd)) fromI--;
    if (elts.length || fromI != toI) parent.replaceChildren(fromI, toI, elts);
  }

  function inlineDOMAtPos(dom, children, pos) {
    var i = 0;

    for (var off = 0; i < children.length; i++) {
      var child = children[i],
          end = off + child.length;
      if (end == off && child.getSide() <= 0) continue;
      if (pos > off && pos < end && child.dom.parentNode == dom) return child.domAtPos(pos - off);
      if (pos <= off) break;
      off = end;
    }

    for (; i > 0; i--) {
      var before = children[i - 1].dom;
      if (before.parentNode == dom) return DOMPos.after(before);
    }

    return new DOMPos(dom, 0);
  }

  function joinInlineInto(parent, view, open) {
    var last,
        children = parent.children;

    if (open > 0 && view instanceof MarkView && children.length && (last = children[children.length - 1]) instanceof MarkView && last.mark.eq(view.mark)) {
      joinInlineInto(last, view.children[0], open - 1);
    } else {
      children.push(view);
      view.setParent(parent);
    }

    parent.length += view.length;
  }

  function coordsInChildren(view, pos, side) {
    for (var off = 0, _i61 = 0; _i61 < view.children.length; _i61++) {
      var child = view.children[_i61],
          end = off + child.length,
          next = void 0;

      if ((side <= 0 || end == view.length || child.getSide() > 0 ? end >= pos : end > pos) && (pos < end || _i61 + 1 == view.children.length || (next = view.children[_i61 + 1]).length || next.getSide() > 0)) {
        var flatten2 = 0;

        if (end == off) {
          if (child.getSide() <= 0) continue;
          flatten2 = side = -child.getSide();
        }

        var rect = child.coordsAt(pos - off, side);
        return flatten2 && rect ? flattenRect(rect, side < 0) : rect;
      }

      off = end;
    }

    var last = view.dom.lastChild;
    if (!last) return view.dom.getBoundingClientRect();
    var rects = clientRectsFor(last);
    return rects[rects.length - 1];
  }

  function combineAttrs(source, target) {
    for (var name in source) {
      if (name == "class" && target["class"]) target["class"] += " " + source["class"];else if (name == "style" && target.style) target.style += ";" + source.style;else target[name] = source[name];
    }

    return target;
  }

  function attrsEq(a, b) {
    if (a == b) return true;
    if (!a || !b) return false;
    var keysA = Object.keys(a),
        keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;

    for (var _i62 = 0, _keysA = keysA; _i62 < _keysA.length; _i62++) {
      var key = _keysA[_i62];
      if (keysB.indexOf(key) == -1 || a[key] !== b[key]) return false;
    }

    return true;
  }

  function _updateAttrs(dom, prev, attrs) {
    if (prev) {
      for (var name in prev) {
        if (!(attrs && name in attrs)) dom.removeAttribute(name);
      }
    }

    if (attrs) {
      for (var _name in attrs) {
        if (!(prev && prev[_name] == attrs[_name])) dom.setAttribute(_name, attrs[_name]);
      }
    }
  }

  var WidgetType = /*#__PURE__*/function () {
    function WidgetType() {
      _classCallCheck(this, WidgetType);
    }

    _createClass(WidgetType, [{
      key: "eq",
      value: function eq(_widget) {
        return false;
      }
    }, {
      key: "updateDOM",
      value: function updateDOM(_dom) {
        return false;
      }
    }, {
      key: "compare",
      value: function compare(other) {
        return this == other || this.constructor == other.constructor && this.eq(other);
      }
    }, {
      key: "estimatedHeight",
      get: function get() {
        return -1;
      }
    }, {
      key: "ignoreEvent",
      value: function ignoreEvent(_event) {
        return true;
      }
    }, {
      key: "customView",
      get: function get() {
        return null;
      }
    }]);

    return WidgetType;
  }();

  var BlockType = /* @__PURE__ */function (BlockType2) {
    BlockType2[BlockType2["Text"] = 0] = "Text";
    BlockType2[BlockType2["WidgetBefore"] = 1] = "WidgetBefore";
    BlockType2[BlockType2["WidgetAfter"] = 2] = "WidgetAfter";
    BlockType2[BlockType2["WidgetRange"] = 3] = "WidgetRange";
    return BlockType2;
  }(BlockType || (BlockType = {}));

  var Decoration = /*#__PURE__*/function (_RangeValue) {
    _inherits(Decoration, _RangeValue);

    var _super10 = _createSuper(Decoration);

    function Decoration(startSide, endSide, widget, spec) {
      var _this10;

      _classCallCheck(this, Decoration);

      _this10 = _super10.call(this);
      _this10.startSide = startSide;
      _this10.endSide = endSide;
      _this10.widget = widget;
      _this10.spec = spec;
      return _this10;
    }

    _createClass(Decoration, [{
      key: "heightRelevant",
      get: function get() {
        return false;
      }
    }, {
      key: "hasHeight",
      value: function hasHeight() {
        return this.widget ? this.widget.estimatedHeight > -1 : false;
      }
    }], [{
      key: "mark",
      value: function mark(spec) {
        return new MarkDecoration(spec);
      }
    }, {
      key: "widget",
      value: function widget(spec) {
        var side = spec.side || 0;
        return new PointDecoration(spec, side, side, !!spec.block, spec.widget || null, false);
      }
    }, {
      key: "replace",
      value: function replace(spec) {
        var block = !!spec.block;

        var _getInclusive = getInclusive(spec, block),
            start = _getInclusive.start,
            end = _getInclusive.end;

        var startSide = 1e8 * (start ? -1 : 1) * (block ? 2 : 1);
        var endSide = 1e8 * (end ? 1 : -1) * (block ? 2 : 1);
        return new PointDecoration(spec, startSide, endSide, block, spec.widget || null, true);
      }
    }, {
      key: "line",
      value: function line(spec) {
        return new LineDecoration(spec);
      }
    }, {
      key: "set",
      value: function set(of) {
        var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return RangeSet.of(of, sort);
      }
    }]);

    return Decoration;
  }(RangeValue);

  Decoration.none = RangeSet.empty;

  var MarkDecoration = /*#__PURE__*/function (_Decoration) {
    _inherits(MarkDecoration, _Decoration);

    var _super11 = _createSuper(MarkDecoration);

    function MarkDecoration(spec) {
      var _this11;

      _classCallCheck(this, MarkDecoration);

      var _getInclusive2 = getInclusive(spec),
          start = _getInclusive2.start,
          end = _getInclusive2.end;

      _this11 = _super11.call(this, 1e8 * (start ? -1 : 1), 1e8 * (end ? 1 : -1), null, spec);
      _this11.tagName = spec.tagName || "span";
      _this11["class"] = spec["class"] || "";
      _this11.attrs = spec.attributes || null;
      return _this11;
    }

    _createClass(MarkDecoration, [{
      key: "eq",
      value: function eq(other) {
        return this == other || other instanceof MarkDecoration && this.tagName == other.tagName && this["class"] == other["class"] && attrsEq(this.attrs, other.attrs);
      }
    }, {
      key: "range",
      value: function range(from) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
        if (from >= to) throw new RangeError("Mark decorations may not be empty");
        return _get(_getPrototypeOf(MarkDecoration.prototype), "range", this).call(this, from, to);
      }
    }]);

    return MarkDecoration;
  }(Decoration);

  MarkDecoration.prototype.point = false;

  var LineDecoration = /*#__PURE__*/function (_Decoration2) {
    _inherits(LineDecoration, _Decoration2);

    var _super12 = _createSuper(LineDecoration);

    function LineDecoration(spec) {
      _classCallCheck(this, LineDecoration);

      return _super12.call(this, -1e8, -1e8, null, spec);
    }

    _createClass(LineDecoration, [{
      key: "eq",
      value: function eq(other) {
        return other instanceof LineDecoration && attrsEq(this.spec.attributes, other.spec.attributes);
      }
    }, {
      key: "range",
      value: function range(from) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
        if (to != from) throw new RangeError("Line decoration ranges must be zero-length");
        return _get(_getPrototypeOf(LineDecoration.prototype), "range", this).call(this, from, to);
      }
    }]);

    return LineDecoration;
  }(Decoration);

  LineDecoration.prototype.mapMode = MapMode.TrackBefore;
  LineDecoration.prototype.point = true;

  var PointDecoration = /*#__PURE__*/function (_Decoration3) {
    _inherits(PointDecoration, _Decoration3);

    var _super13 = _createSuper(PointDecoration);

    function PointDecoration(spec, startSide, endSide, block, widget, isReplace) {
      var _this12;

      _classCallCheck(this, PointDecoration);

      _this12 = _super13.call(this, startSide, endSide, widget, spec);
      _this12.block = block;
      _this12.isReplace = isReplace;
      _this12.mapMode = !block ? MapMode.TrackDel : startSide < 0 ? MapMode.TrackBefore : MapMode.TrackAfter;
      return _this12;
    }

    _createClass(PointDecoration, [{
      key: "type",
      get: function get() {
        return this.startSide < this.endSide ? BlockType.WidgetRange : this.startSide < 0 ? BlockType.WidgetBefore : BlockType.WidgetAfter;
      }
    }, {
      key: "heightRelevant",
      get: function get() {
        return this.block || !!this.widget && this.widget.estimatedHeight >= 5;
      }
    }, {
      key: "eq",
      value: function eq(other) {
        return other instanceof PointDecoration && widgetsEq(this.widget, other.widget) && this.block == other.block && this.startSide == other.startSide && this.endSide == other.endSide;
      }
    }, {
      key: "range",
      value: function range(from) {
        var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
        if (this.isReplace && (from > to || from == to && this.startSide > 0 && this.endSide < 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && to != from) throw new RangeError("Widget decorations can only have zero-length ranges");
        return _get(_getPrototypeOf(PointDecoration.prototype), "range", this).call(this, from, to);
      }
    }]);

    return PointDecoration;
  }(Decoration);

  PointDecoration.prototype.point = true;

  function getInclusive(spec) {
    var block = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var start = spec.inclusiveStart,
        end = spec.inclusiveEnd;
    if (start == null) start = spec.inclusive;
    if (end == null) end = spec.inclusive;
    return {
      start: start !== null && start !== void 0 ? start : block,
      end: end !== null && end !== void 0 ? end : block
    };
  }

  function widgetsEq(a, b) {
    return a == b || !!(a && b && a.compare(b));
  }

  function addRange(from, to, ranges) {
    var margin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var last = ranges.length - 1;
    if (last >= 0 && ranges[last] + margin > from) ranges[last] = Math.max(ranges[last], to);else ranges.push(from, to);
  }

  var LineView = /*#__PURE__*/function (_ContentView2) {
    _inherits(LineView, _ContentView2);

    var _super14 = _createSuper(LineView);

    function LineView() {
      var _this13;

      _classCallCheck(this, LineView);

      _this13 = _super14.apply(this, arguments);
      _this13.children = [];
      _this13.length = 0;
      _this13.prevAttrs = void 0;
      _this13.attrs = null;
      _this13.breakAfter = 0;
      return _this13;
    }

    _createClass(LineView, [{
      key: "merge",
      value: function merge(from, to, source, takeDeco, openStart, openEnd) {
        if (source) {
          if (!(source instanceof LineView)) return false;
          if (!this.dom) source.transferDOM(this);
        }

        if (takeDeco) this.setDeco(source ? source.attrs : null);
        mergeInlineChildren(this, from, to, source ? source.children : none$1, openStart, openEnd);
        return true;
      }
    }, {
      key: "split",
      value: function split(at) {
        var end = new LineView();
        end.breakAfter = this.breakAfter;
        if (this.length == 0) return end;

        var _this$childPos = this.childPos(at),
            i = _this$childPos.i,
            off = _this$childPos.off;

        if (off) {
          end.append(this.children[i].slice(off), 0);
          this.children[i].merge(off, this.children[i].length, null, 0, 0);
          i++;
        }

        for (var j = i; j < this.children.length; j++) {
          end.append(this.children[j], 0);
        }

        while (i > 0 && this.children[i - 1].length == 0) {
          this.children[i - 1].parent = null;
          i--;
        }

        this.children.length = i;
        this.markDirty();
        this.length = at;
        return end;
      }
    }, {
      key: "transferDOM",
      value: function transferDOM(other) {
        if (!this.dom) return;
        other.setDOM(this.dom);
        other.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs;
        this.prevAttrs = void 0;
        this.dom = null;
      }
    }, {
      key: "setDeco",
      value: function setDeco(attrs) {
        if (!attrsEq(this.attrs, attrs)) {
          if (this.dom) {
            this.prevAttrs = this.attrs;
            this.markDirty();
          }

          this.attrs = attrs;
        }
      }
    }, {
      key: "append",
      value: function append(child, openStart) {
        joinInlineInto(this, child, openStart);
      }
    }, {
      key: "addLineDeco",
      value: function addLineDeco(deco) {
        var attrs = deco.spec.attributes,
            cls = deco.spec["class"];
        if (attrs) this.attrs = combineAttrs(attrs, this.attrs || {});
        if (cls) this.attrs = combineAttrs(attrs, {
          "class": cls
        });
      }
    }, {
      key: "domAtPos",
      value: function domAtPos(pos) {
        return inlineDOMAtPos(this.dom, this.children, pos);
      }
    }, {
      key: "sync",
      value: function sync(track) {
        var _a;

        if (!this.dom || this.dirty & 4) {
          this.setDOM(document.createElement("div"));
          this.dom.className = "cm-line";
          this.prevAttrs = this.attrs ? null : void 0;
        }

        if (this.prevAttrs !== void 0) {
          _updateAttrs(this.dom, this.prevAttrs, this.attrs);

          this.dom.classList.add("cm-line");
          this.prevAttrs = void 0;
        }

        _get(_getPrototypeOf(LineView.prototype), "sync", this).call(this, track);

        var last = this.dom.lastChild;

        while (last && ContentView.get(last) instanceof MarkView) {
          last = last.lastChild;
        }

        if (!last || last.nodeName != "BR" && ((_a = ContentView.get(last)) === null || _a === void 0 ? void 0 : _a.isEditable) == false && (!browser.ios || !this.children.some(function (ch) {
          return ch instanceof TextView;
        }))) {
          var hack = document.createElement("BR");
          hack.cmIgnore = true;
          this.dom.appendChild(hack);
        }
      }
    }, {
      key: "measureTextSize",
      value: function measureTextSize() {
        if (this.children.length == 0 || this.length > 20) return null;
        var totalWidth = 0;

        var _iterator37 = _createForOfIteratorHelper(this.children),
            _step37;

        try {
          for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
            var child = _step37.value;
            if (!(child instanceof TextView)) return null;
            var rects = clientRectsFor(child.dom);
            if (rects.length != 1) return null;
            totalWidth += rects[0].width;
          }
        } catch (err) {
          _iterator37.e(err);
        } finally {
          _iterator37.f();
        }

        return {
          lineHeight: this.dom.getBoundingClientRect().height,
          charWidth: totalWidth / this.length
        };
      }
    }, {
      key: "coordsAt",
      value: function coordsAt(pos, side) {
        return coordsInChildren(this, pos, side);
      }
    }, {
      key: "match",
      value: function match(_other) {
        return false;
      }
    }, {
      key: "type",
      get: function get() {
        return BlockType.Text;
      }
    }], [{
      key: "find",
      value: function find(docView, pos) {
        for (var _i63 = 0, off = 0;; _i63++) {
          var block = docView.children[_i63],
              end = off + block.length;

          if (end >= pos) {
            if (block instanceof LineView) return block;
            if (block.length) return null;
          }

          off = end + block.breakAfter;
        }
      }
    }]);

    return LineView;
  }(ContentView);

  var none$1 = [];

  var BlockWidgetView = /*#__PURE__*/function (_ContentView3) {
    _inherits(BlockWidgetView, _ContentView3);

    var _super15 = _createSuper(BlockWidgetView);

    function BlockWidgetView(widget, length, type) {
      var _this14;

      _classCallCheck(this, BlockWidgetView);

      _this14 = _super15.call(this);
      _this14.widget = widget;
      _this14.length = length;
      _this14.type = type;
      _this14.breakAfter = 0;
      return _this14;
    }

    _createClass(BlockWidgetView, [{
      key: "merge",
      value: function merge(from, to, source, _takeDeco, openStart, openEnd) {
        if (source && (!(source instanceof BlockWidgetView) || !this.widget.compare(source.widget) || from > 0 && openStart <= 0 || to < this.length && openEnd <= 0)) return false;
        this.length = from + (source ? source.length : 0) + (this.length - to);
        return true;
      }
    }, {
      key: "domAtPos",
      value: function domAtPos(pos) {
        return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
      }
    }, {
      key: "split",
      value: function split(at) {
        var len = this.length - at;
        this.length = at;
        var end = new BlockWidgetView(this.widget, len, this.type);
        end.breakAfter = this.breakAfter;
        return end;
      }
    }, {
      key: "children",
      get: function get() {
        return none$1;
      }
    }, {
      key: "sync",
      value: function sync() {
        if (!this.dom || !this.widget.updateDOM(this.dom)) {
          this.setDOM(this.widget.toDOM(this.editorView));
          this.dom.contentEditable = "false";
        }
      }
    }, {
      key: "overrideDOMText",
      get: function get() {
        return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Text.empty;
      }
    }, {
      key: "domBoundsAround",
      value: function domBoundsAround() {
        return null;
      }
    }, {
      key: "match",
      value: function match(other) {
        if (other instanceof BlockWidgetView && other.type == this.type && other.widget.constructor == this.widget.constructor) {
          if (!other.widget.eq(this.widget)) this.markDirty(true);
          this.widget = other.widget;
          this.length = other.length;
          this.breakAfter = other.breakAfter;
          return true;
        }

        return false;
      }
    }, {
      key: "ignoreMutation",
      value: function ignoreMutation() {
        return true;
      }
    }, {
      key: "ignoreEvent",
      value: function ignoreEvent(event) {
        return this.widget.ignoreEvent(event);
      }
    }]);

    return BlockWidgetView;
  }(ContentView);

  var ContentBuilder = /*#__PURE__*/function () {
    function ContentBuilder(doc2, pos, end) {
      _classCallCheck(this, ContentBuilder);

      this.doc = doc2;
      this.pos = pos;
      this.end = end;
      this.content = [];
      this.curLine = null;
      this.breakAtStart = 0;
      this.pendingBuffer = 0;
      this.atCursorPos = true;
      this.openStart = -1;
      this.openEnd = -1;
      this.text = "";
      this.textOff = 0;
      this.cursor = doc2.iter();
      this.skip = pos;
    }

    _createClass(ContentBuilder, [{
      key: "posCovered",
      value: function posCovered() {
        if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
        var last = this.content[this.content.length - 1];
        return !last.breakAfter && !(last instanceof BlockWidgetView && last.type == BlockType.WidgetBefore);
      }
    }, {
      key: "getLine",
      value: function getLine() {
        if (!this.curLine) {
          this.content.push(this.curLine = new LineView());
          this.atCursorPos = true;
        }

        return this.curLine;
      }
    }, {
      key: "flushBuffer",
      value: function flushBuffer(active) {
        if (this.pendingBuffer) {
          this.curLine.append(wrapMarks(new WidgetBufferView(-1), active), active.length);
          this.pendingBuffer = 0;
        }
      }
    }, {
      key: "addBlockWidget",
      value: function addBlockWidget(view) {
        this.flushBuffer([]);
        this.curLine = null;
        this.content.push(view);
      }
    }, {
      key: "finish",
      value: function finish(openEnd) {
        if (!openEnd) this.flushBuffer([]);else this.pendingBuffer = 0;
        if (!this.posCovered()) this.getLine();
      }
    }, {
      key: "buildText",
      value: function buildText(length, active, openStart) {
        while (length > 0) {
          if (this.textOff == this.text.length) {
            var _this$cursor$next2 = this.cursor.next(this.skip),
                value = _this$cursor$next2.value,
                lineBreak = _this$cursor$next2.lineBreak,
                done = _this$cursor$next2.done;

            this.skip = 0;
            if (done) throw new Error("Ran out of text content when drawing inline views");

            if (lineBreak) {
              if (!this.posCovered()) this.getLine();
              if (this.content.length) this.content[this.content.length - 1].breakAfter = 1;else this.breakAtStart = 1;
              this.flushBuffer([]);
              this.curLine = null;
              length--;
              continue;
            } else {
              this.text = value;
              this.textOff = 0;
            }
          }

          var take = Math.min(this.text.length - this.textOff, length, 512);
          this.flushBuffer(active);
          this.getLine().append(wrapMarks(new TextView(this.text.slice(this.textOff, this.textOff + take)), active), openStart);
          this.atCursorPos = true;
          this.textOff += take;
          length -= take;
          openStart = 0;
        }
      }
    }, {
      key: "span",
      value: function span(from, to, active, openStart) {
        this.buildText(to - from, active, openStart);
        this.pos = to;
        if (this.openStart < 0) this.openStart = openStart;
      }
    }, {
      key: "point",
      value: function point(from, to, deco, active, openStart) {
        var len = to - from;

        if (deco instanceof PointDecoration) {
          if (deco.block) {
            var type = deco.type;
            if (type == BlockType.WidgetAfter && !this.posCovered()) this.getLine();
            this.addBlockWidget(new BlockWidgetView(deco.widget || new NullWidget("div"), len, type));
          } else {
            var view = WidgetView.create(deco.widget || new NullWidget("span"), len, deco.startSide);
            var cursorBefore = this.atCursorPos && !view.isEditable && openStart <= active.length && (from < to || deco.startSide > 0);
            var cursorAfter = !view.isEditable && (from < to || deco.startSide <= 0);
            var line = this.getLine();
            if (this.pendingBuffer == 2 && !cursorBefore) this.pendingBuffer = 0;
            this.flushBuffer(active);

            if (cursorBefore) {
              line.append(wrapMarks(new WidgetBufferView(1), active), openStart);
              openStart = active.length + Math.max(0, openStart - active.length);
            }

            line.append(wrapMarks(view, active), openStart);
            this.atCursorPos = cursorAfter;
            this.pendingBuffer = !cursorAfter ? 0 : from < to ? 1 : 2;
          }
        } else if (this.doc.lineAt(this.pos).from == this.pos) {
          this.getLine().addLineDeco(deco);
        }

        if (len) {
          if (this.textOff + len <= this.text.length) {
            this.textOff += len;
          } else {
            this.skip += len - (this.text.length - this.textOff);
            this.text = "";
            this.textOff = 0;
          }

          this.pos = to;
        }

        if (this.openStart < 0) this.openStart = openStart;
      }
    }], [{
      key: "build",
      value: function build(text, from, to, decorations2) {
        var builder = new ContentBuilder(text, from, to);
        builder.openEnd = RangeSet.spans(decorations2, from, to, builder);
        if (builder.openStart < 0) builder.openStart = builder.openEnd;
        builder.finish(builder.openEnd);
        return builder;
      }
    }]);

    return ContentBuilder;
  }();

  function wrapMarks(view, active) {
    var _iterator38 = _createForOfIteratorHelper(active),
        _step38;

    try {
      for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
        var mark = _step38.value;
        view = new MarkView(mark, [view], view.length);
      }
    } catch (err) {
      _iterator38.e(err);
    } finally {
      _iterator38.f();
    }

    return view;
  }

  var NullWidget = /*#__PURE__*/function (_WidgetType) {
    _inherits(NullWidget, _WidgetType);

    var _super16 = _createSuper(NullWidget);

    function NullWidget(tag) {
      var _this15;

      _classCallCheck(this, NullWidget);

      _this15 = _super16.call(this);
      _this15.tag = tag;
      return _this15;
    }

    _createClass(NullWidget, [{
      key: "eq",
      value: function eq(other) {
        return other.tag == this.tag;
      }
    }, {
      key: "toDOM",
      value: function toDOM() {
        return document.createElement(this.tag);
      }
    }, {
      key: "updateDOM",
      value: function updateDOM(elt) {
        return elt.nodeName.toLowerCase() == this.tag;
      }
    }]);

    return NullWidget;
  }(WidgetType);

  var none2 = [];
  var clickAddsSelectionRange = /* @__PURE__ */Facet.define();
  var dragMovesSelection$1 = /* @__PURE__ */Facet.define();
  var mouseSelectionStyle = /* @__PURE__ */Facet.define();
  var exceptionSink = /* @__PURE__ */Facet.define();
  var updateListener = /* @__PURE__ */Facet.define();
  var inputHandler = /* @__PURE__ */Facet.define();
  var scrollTo = /* @__PURE__ */StateEffect.define({
    map: function map(range, changes) {
      return range.map(changes);
    }
  });
  var centerOn = /* @__PURE__ */StateEffect.define({
    map: function map(range, changes) {
      return range.map(changes);
    }
  });

  function logException(state, exception, context) {
    var handler = state.facet(exceptionSink);
    if (handler.length) handler[0](exception);else if (window.onerror) window.onerror(String(exception), context, void 0, void 0, exception);else if (context) console.error(context + ":", exception);else console.error(exception);
  }

  var editable = /* @__PURE__ */Facet.define({
    combine: function combine(values) {
      return values.length ? values[0] : true;
    }
  });

  var PluginFieldProvider = /*#__PURE__*/_createClass(function PluginFieldProvider(field, get) {
    _classCallCheck(this, PluginFieldProvider);

    this.field = field;
    this.get = get;
  });

  var PluginField = /*#__PURE__*/function () {
    function PluginField() {
      _classCallCheck(this, PluginField);
    }

    _createClass(PluginField, [{
      key: "from",
      value: function from(get) {
        return new PluginFieldProvider(this, get);
      }
    }], [{
      key: "define",
      value: function define() {
        return new PluginField();
      }
    }]);

    return PluginField;
  }();

  PluginField.decorations = /* @__PURE__ */PluginField.define();
  PluginField.atomicRanges = /* @__PURE__ */PluginField.define();
  PluginField.scrollMargins = /* @__PURE__ */PluginField.define();
  var nextPluginID = 0;
  var viewPlugin = /* @__PURE__ */Facet.define();

  var ViewPlugin = /*#__PURE__*/function () {
    function ViewPlugin(id, create, fields) {
      _classCallCheck(this, ViewPlugin);

      this.id = id;
      this.create = create;
      this.fields = fields;
      this.extension = viewPlugin.of(this);
    }

    _createClass(ViewPlugin, null, [{
      key: "define",
      value: function define(create, spec) {
        var _ref6 = spec || {},
            eventHandlers = _ref6.eventHandlers,
            provide = _ref6.provide,
            decorations2 = _ref6.decorations;

        var fields = [];

        if (provide) {
          var _iterator39 = _createForOfIteratorHelper(Array.isArray(provide) ? provide : [provide]),
              _step39;

          try {
            for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
              var provider = _step39.value;
              fields.push(provider);
            }
          } catch (err) {
            _iterator39.e(err);
          } finally {
            _iterator39.f();
          }
        }

        if (eventHandlers) fields.push(domEventHandlers.from(function (value) {
          return {
            plugin: value,
            handlers: eventHandlers
          };
        }));
        if (decorations2) fields.push(PluginField.decorations.from(decorations2));
        return new ViewPlugin(nextPluginID++, create, fields);
      }
    }, {
      key: "fromClass",
      value: function fromClass(cls, spec) {
        return ViewPlugin.define(function (view) {
          return new cls(view);
        }, spec);
      }
    }]);

    return ViewPlugin;
  }();

  var domEventHandlers = /* @__PURE__ */PluginField.define();

  var PluginInstance = /*#__PURE__*/function () {
    function PluginInstance(spec) {
      _classCallCheck(this, PluginInstance);

      this.spec = spec;
      this.mustUpdate = null;
      this.value = null;
    }

    _createClass(PluginInstance, [{
      key: "takeField",
      value: function takeField(type, target) {
        var _iterator40 = _createForOfIteratorHelper(this.spec.fields),
            _step40;

        try {
          for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
            var _step40$value = _step40.value,
                field = _step40$value.field,
                get = _step40$value.get;
            if (field == type) target.push(get(this.value));
          }
        } catch (err) {
          _iterator40.e(err);
        } finally {
          _iterator40.f();
        }
      }
    }, {
      key: "update",
      value: function update(view) {
        if (!this.value) {
          try {
            this.value = this.spec.create(view);
          } catch (e) {
            logException(view.state, e, "CodeMirror plugin crashed");
            return PluginInstance.dummy;
          }
        } else if (this.mustUpdate) {
          var update = this.mustUpdate;
          this.mustUpdate = null;
          if (!this.value.update) return this;

          try {
            this.value.update(update);
          } catch (e) {
            logException(update.state, e, "CodeMirror plugin crashed");
            if (this.value.destroy) try {
              this.value.destroy();
            } catch (_) {}
            return PluginInstance.dummy;
          }
        }

        return this;
      }
    }, {
      key: "destroy",
      value: function destroy(view) {
        var _a;

        if ((_a = this.value) === null || _a === void 0 ? void 0 : _a.destroy) {
          try {
            this.value.destroy();
          } catch (e) {
            logException(view.state, e, "CodeMirror plugin crashed");
          }
        }
      }
    }]);

    return PluginInstance;
  }();

  PluginInstance.dummy = /* @__PURE__ */new PluginInstance( /* @__PURE__ */ViewPlugin.define(function () {
    return {};
  }));
  var editorAttributes = /* @__PURE__ */Facet.define({
    combine: function combine(values) {
      return values.reduce(function (a, b) {
        return combineAttrs(b, a);
      }, {});
    }
  });
  var contentAttributes = /* @__PURE__ */Facet.define({
    combine: function combine(values) {
      return values.reduce(function (a, b) {
        return combineAttrs(b, a);
      }, {});
    }
  });
  var decorations = /* @__PURE__ */Facet.define();
  var styleModule = /* @__PURE__ */Facet.define();

  var ChangedRange = /*#__PURE__*/function () {
    function ChangedRange(fromA, toA, fromB, toB) {
      _classCallCheck(this, ChangedRange);

      this.fromA = fromA;
      this.toA = toA;
      this.fromB = fromB;
      this.toB = toB;
    }

    _createClass(ChangedRange, [{
      key: "join",
      value: function join(other) {
        return new ChangedRange(Math.min(this.fromA, other.fromA), Math.max(this.toA, other.toA), Math.min(this.fromB, other.fromB), Math.max(this.toB, other.toB));
      }
    }, {
      key: "addToSet",
      value: function addToSet(set) {
        var i = set.length,
            me = this;

        for (; i > 0; i--) {
          var range = set[i - 1];
          if (range.fromA > me.toA) continue;
          if (range.toA < me.fromA) break;
          me = me.join(range);
          set.splice(i - 1, 1);
        }

        set.splice(i, 0, me);
        return set;
      }
    }], [{
      key: "extendWithRanges",
      value: function extendWithRanges(diff, ranges) {
        if (ranges.length == 0) return diff;
        var result = [];

        for (var dI = 0, rI = 0, posA = 0, posB = 0;; dI++) {
          var next = dI == diff.length ? null : diff[dI],
              off = posA - posB;
          var end = next ? next.fromB : 1e9;

          while (rI < ranges.length && ranges[rI] < end) {
            var from = ranges[rI],
                to = ranges[rI + 1];
            var fromB = Math.max(posB, from),
                toB = Math.min(end, to);
            if (fromB <= toB) new ChangedRange(fromB + off, toB + off, fromB, toB).addToSet(result);
            if (to > end) break;else rI += 2;
          }

          if (!next) return result;
          new ChangedRange(next.fromA, next.toA, next.fromB, next.toB).addToSet(result);
          posA = next.toA;
          posB = next.toB;
        }
      }
    }]);

    return ChangedRange;
  }();

  var ViewUpdate = /*#__PURE__*/function () {
    function ViewUpdate(view, state) {
      var transactions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : none2;

      _classCallCheck(this, ViewUpdate);

      this.view = view;
      this.state = state;
      this.transactions = transactions;
      this.flags = 0;
      this.startState = view.state;
      this.changes = ChangeSet.empty(this.startState.doc.length);

      var _iterator41 = _createForOfIteratorHelper(transactions),
          _step41;

      try {
        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
          var tr = _step41.value;
          this.changes = this.changes.compose(tr.changes);
        }
      } catch (err) {
        _iterator41.e(err);
      } finally {
        _iterator41.f();
      }

      var changedRanges = [];
      this.changes.iterChangedRanges(function (fromA, toA, fromB, toB) {
        return changedRanges.push(new ChangedRange(fromA, toA, fromB, toB));
      });
      this.changedRanges = changedRanges;
      var focus = view.hasFocus;

      if (focus != view.inputState.notifiedFocused) {
        view.inputState.notifiedFocused = focus;
        this.flags |= 1;
      }

      if (this.docChanged) this.flags |= 2;
    }

    _createClass(ViewUpdate, [{
      key: "viewportChanged",
      get: function get() {
        return (this.flags & 4) > 0;
      }
    }, {
      key: "heightChanged",
      get: function get() {
        return (this.flags & 2) > 0;
      }
    }, {
      key: "geometryChanged",
      get: function get() {
        return this.docChanged || (this.flags & (8 | 2)) > 0;
      }
    }, {
      key: "focusChanged",
      get: function get() {
        return (this.flags & 1) > 0;
      }
    }, {
      key: "docChanged",
      get: function get() {
        return this.transactions.some(function (tr) {
          return tr.docChanged;
        });
      }
    }, {
      key: "selectionSet",
      get: function get() {
        return this.transactions.some(function (tr) {
          return tr.selection;
        });
      }
    }, {
      key: "empty",
      get: function get() {
        return this.flags == 0 && this.transactions.length == 0;
      }
    }]);

    return ViewUpdate;
  }();

  var DocView = /*#__PURE__*/function (_ContentView4) {
    _inherits(DocView, _ContentView4);

    var _super17 = _createSuper(DocView);

    function DocView(view) {
      var _this16;

      _classCallCheck(this, DocView);

      _this16 = _super17.call(this);
      _this16.view = view;
      _this16.compositionDeco = Decoration.none;
      _this16.decorations = [];
      _this16.minWidth = 0;
      _this16.minWidthFrom = 0;
      _this16.minWidthTo = 0;
      _this16.impreciseAnchor = null;
      _this16.impreciseHead = null;

      _this16.setDOM(view.contentDOM);

      _this16.children = [new LineView()];

      _this16.children[0].setParent(_assertThisInitialized(_this16));

      _this16.updateInner([new ChangedRange(0, 0, 0, view.state.doc.length)], _this16.updateDeco(), 0);

      return _this16;
    }

    _createClass(DocView, [{
      key: "root",
      get: function get() {
        return this.view.root;
      }
    }, {
      key: "editorView",
      get: function get() {
        return this.view;
      }
    }, {
      key: "length",
      get: function get() {
        return this.view.state.doc.length;
      }
    }, {
      key: "update",
      value: function update(_update) {
        var _this17 = this;

        var changedRanges = _update.changedRanges;

        if (this.minWidth > 0 && changedRanges.length) {
          if (!changedRanges.every(function (_ref7) {
            var fromA = _ref7.fromA,
                toA = _ref7.toA;
            return toA < _this17.minWidthFrom || fromA > _this17.minWidthTo;
          })) {
            this.minWidth = 0;
          } else {
            this.minWidthFrom = _update.changes.mapPos(this.minWidthFrom, 1);
            this.minWidthTo = _update.changes.mapPos(this.minWidthTo, 1);
          }
        }

        if (this.view.inputState.composing < 0) this.compositionDeco = Decoration.none;else if (_update.transactions.length) this.compositionDeco = computeCompositionDeco(this.view, _update.changes);
        var forceSelection = (browser.ie || browser.chrome) && !this.compositionDeco.size && _update && _update.state.doc.lines != _update.startState.doc.lines;
        var prevDeco = this.decorations,
            deco = this.updateDeco();
        var decoDiff = findChangedDeco(prevDeco, deco, _update.changes);
        changedRanges = ChangedRange.extendWithRanges(changedRanges, decoDiff);

        var pointerSel = _update.transactions.some(function (tr) {
          return tr.isUserEvent("select.pointer");
        });

        if (this.dirty == 0 && changedRanges.length == 0 && !(_update.flags & 4) && _update.state.selection.main.from >= this.view.viewport.from && _update.state.selection.main.to <= this.view.viewport.to) {
          this.updateSelection(forceSelection, pointerSel);
          return false;
        } else {
          this.updateInner(changedRanges, deco, _update.startState.doc.length, forceSelection, pointerSel);
          return true;
        }
      }
    }, {
      key: "reset",
      value: function reset(sel) {
        var _this18 = this;

        if (this.dirty) {
          this.view.observer.ignore(function () {
            return _this18.view.docView.sync();
          });
          this.dirty = 0;
        }

        if (sel) this.updateSelection();
      }
    }, {
      key: "updateInner",
      value: function updateInner(changes, deco, oldLength) {
        var _this19 = this;

        var forceSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var pointerSel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        this.updateChildren(changes, deco, oldLength);
        var observer = this.view.observer;
        observer.ignore(function () {
          _this19.dom.style.height = _this19.view.viewState.domHeight + "px";
          _this19.dom.style.minWidth = _this19.minWidth ? _this19.minWidth + "px" : "";
          var track = browser.chrome || browser.ios ? {
            node: observer.selectionRange.focusNode,
            written: false
          } : void 0;

          _this19.sync(track);

          _this19.dirty = 0;
          if (track && (track.written || observer.selectionRange.focusNode != track.node)) forceSelection = true;

          _this19.updateSelection(forceSelection, pointerSel);

          _this19.dom.style.height = "";
        });
        var gaps = [];

        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) {
          var _iterator42 = _createForOfIteratorHelper(this.children),
              _step42;

          try {
            for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
              var child = _step42.value;
              if (child instanceof BlockWidgetView && child.widget instanceof BlockGapWidget) gaps.push(child.dom);
            }
          } catch (err) {
            _iterator42.e(err);
          } finally {
            _iterator42.f();
          }
        }

        observer.updateGaps(gaps);
      }
    }, {
      key: "updateChildren",
      value: function updateChildren(changes, deco, oldLength) {
        var cursor = this.childCursor(oldLength);

        for (var _i64 = changes.length - 1;; _i64--) {
          var next = _i64 >= 0 ? changes[_i64] : null;
          if (!next) break;
          var fromA = next.fromA,
              toA = next.toA,
              fromB = next.fromB,
              toB = next.toB;

          var _ContentBuilder$build = ContentBuilder.build(this.view.state.doc, fromB, toB, deco),
              content = _ContentBuilder$build.content,
              breakAtStart = _ContentBuilder$build.breakAtStart,
              openStart = _ContentBuilder$build.openStart,
              openEnd = _ContentBuilder$build.openEnd;

          var _cursor$findPos = cursor.findPos(toA, 1),
              toI = _cursor$findPos.i,
              toOff = _cursor$findPos.off;

          var _cursor$findPos2 = cursor.findPos(fromA, -1),
              fromI = _cursor$findPos2.i,
              fromOff = _cursor$findPos2.off;

          this.replaceRange(fromI, fromOff, toI, toOff, content, breakAtStart, openStart, openEnd);
        }
      }
    }, {
      key: "replaceRange",
      value: function replaceRange(fromI, fromOff, toI, toOff, content, breakAtStart, openStart, openEnd) {
        var before = this.children[fromI],
            last = content.length ? content[content.length - 1] : null;
        var breakAtEnd = last ? last.breakAfter : breakAtStart;
        if (fromI == toI && !breakAtStart && !breakAtEnd && content.length < 2 && before.merge(fromOff, toOff, content.length ? last : null, fromOff == 0, openStart, openEnd)) return;
        var after = this.children[toI];

        if (toOff < after.length) {
          if (fromI == toI) {
            after = after.split(toOff);
            toOff = 0;
          }

          if (!breakAtEnd && last && after.merge(0, toOff, last, true, 0, openEnd)) {
            content[content.length - 1] = after;
          } else {
            if (toOff) after.merge(0, toOff, null, false, 0, openEnd);
            content.push(after);
          }
        } else if (after.breakAfter) {
          if (last) last.breakAfter = 1;else breakAtStart = 1;
        }

        toI++;
        before.breakAfter = breakAtStart;

        if (fromOff > 0) {
          if (!breakAtStart && content.length && before.merge(fromOff, before.length, content[0], false, openStart, 0)) {
            before.breakAfter = content.shift().breakAfter;
          } else if (fromOff < before.length || before.children.length && before.children[before.children.length - 1].length == 0) {
            before.merge(fromOff, before.length, null, false, openStart, 0);
          }

          fromI++;
        }

        while (fromI < toI && content.length) {
          if (this.children[toI - 1].match(content[content.length - 1])) toI--, content.pop();else if (this.children[fromI].match(content[0])) fromI++, content.shift();else break;
        }

        if (fromI < toI || content.length) this.replaceChildren(fromI, toI, content);
      }
    }, {
      key: "updateSelection",
      value: function updateSelection() {
        var _this20 = this;

        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var fromPointer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (!(fromPointer || this.mayControlSelection()) || browser.ios && this.view.inputState.rapidCompositionStart) return;
        var main = this.view.state.selection.main;
        var anchor = this.domAtPos(main.anchor);
        var head = main.empty ? anchor : this.domAtPos(main.head);

        if (browser.gecko && main.empty && betweenUneditable(anchor)) {
          var dummy = document.createTextNode("");
          this.view.observer.ignore(function () {
            return anchor.node.insertBefore(dummy, anchor.node.childNodes[anchor.offset] || null);
          });
          anchor = head = new DOMPos(dummy, 0);
          force = true;
        }

        var domSel = this.view.observer.selectionRange;

        if (force || !domSel.focusNode || !isEquivalentPosition(anchor.node, anchor.offset, domSel.anchorNode, domSel.anchorOffset) || !isEquivalentPosition(head.node, head.offset, domSel.focusNode, domSel.focusOffset)) {
          this.view.observer.ignore(function () {
            if (browser.android && browser.chrome && _this20.dom.contains(domSel.focusNode) && inUneditable(domSel.focusNode, _this20.dom)) {
              _this20.dom.blur();

              _this20.dom.focus({
                preventScroll: true
              });
            }

            var rawSel = getSelection(_this20.root);

            if (main.empty) {
              if (browser.gecko) {
                var nextTo = nextToUneditable(anchor.node, anchor.offset);

                if (nextTo && nextTo != (1 | 2)) {
                  var _text3 = nearbyTextNode(anchor.node, anchor.offset, nextTo == 1 ? 1 : -1);

                  if (_text3) anchor = new DOMPos(_text3, nextTo == 1 ? 0 : _text3.nodeValue.length);
                }
              }

              rawSel.collapse(anchor.node, anchor.offset);
              if (main.bidiLevel != null && domSel.cursorBidiLevel != null) domSel.cursorBidiLevel = main.bidiLevel;
            } else if (rawSel.extend) {
              rawSel.collapse(anchor.node, anchor.offset);
              rawSel.extend(head.node, head.offset);
            } else {
              var range = document.createRange();

              if (main.anchor > main.head) {
                var _ref8 = [head, anchor];
                anchor = _ref8[0];
                head = _ref8[1];
              }

              range.setEnd(head.node, head.offset);
              range.setStart(anchor.node, anchor.offset);
              rawSel.removeAllRanges();
              rawSel.addRange(range);
            }
          });
          this.view.observer.setSelectionRange(anchor, head);
        }

        this.impreciseAnchor = anchor.precise ? null : new DOMPos(domSel.anchorNode, domSel.anchorOffset);
        this.impreciseHead = head.precise ? null : new DOMPos(domSel.focusNode, domSel.focusOffset);
      }
    }, {
      key: "enforceCursorAssoc",
      value: function enforceCursorAssoc() {
        if (this.view.composing) return;
        var cursor = this.view.state.selection.main;
        var sel = getSelection(this.root);
        if (!cursor.empty || !cursor.assoc || !sel.modify) return;
        var line = LineView.find(this, cursor.head);
        if (!line) return;
        var lineStart = line.posAtStart;
        if (cursor.head == lineStart || cursor.head == lineStart + line.length) return;
        var before = this.coordsAt(cursor.head, -1),
            after = this.coordsAt(cursor.head, 1);
        if (!before || !after || before.bottom > after.top) return;
        var dom = this.domAtPos(cursor.head + cursor.assoc);
        sel.collapse(dom.node, dom.offset);
        sel.modify("move", cursor.assoc < 0 ? "forward" : "backward", "lineboundary");
      }
    }, {
      key: "mayControlSelection",
      value: function mayControlSelection() {
        return this.view.state.facet(editable) ? this.root.activeElement == this.dom : hasSelection(this.dom, this.view.observer.selectionRange);
      }
    }, {
      key: "nearest",
      value: function nearest(dom) {
        for (var cur = dom; cur;) {
          var domView = ContentView.get(cur);
          if (domView && domView.rootView == this) return domView;
          cur = cur.parentNode;
        }

        return null;
      }
    }, {
      key: "posFromDOM",
      value: function posFromDOM(node, offset) {
        var view = this.nearest(node);
        if (!view) throw new RangeError("Trying to find position for a DOM position outside of the document");
        return view.localPosFromDOM(node, offset) + view.posAtStart;
      }
    }, {
      key: "domAtPos",
      value: function domAtPos(pos) {
        var _this$childCursor$fin = this.childCursor().findPos(pos, -1),
            i = _this$childCursor$fin.i,
            off = _this$childCursor$fin.off;

        for (; i < this.children.length - 1;) {
          var child = this.children[i];
          if (off < child.length || child instanceof LineView) break;
          i++;
          off = 0;
        }

        return this.children[i].domAtPos(off);
      }
    }, {
      key: "coordsAt",
      value: function coordsAt(pos, side) {
        for (var off = this.length, _i65 = this.children.length - 1;; _i65--) {
          var child = this.children[_i65],
              start = off - child.breakAfter - child.length;
          if (pos > start || pos == start && child.type != BlockType.WidgetBefore && child.type != BlockType.WidgetAfter && (!_i65 || side == 2 || this.children[_i65 - 1].breakAfter || this.children[_i65 - 1].type == BlockType.WidgetBefore && side > -2)) return child.coordsAt(pos - start, side);
          off = start;
        }
      }
    }, {
      key: "measureVisibleLineHeights",
      value: function measureVisibleLineHeights() {
        var result = [],
            _this$view$viewState$ = this.view.viewState.viewport,
            from = _this$view$viewState$.from,
            to = _this$view$viewState$.to;
        var minWidth = Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;

        for (var pos = 0, _i66 = 0; _i66 < this.children.length; _i66++) {
          var child = this.children[_i66],
              end = pos + child.length;
          if (end > to) break;

          if (pos >= from) {
            result.push(child.dom.getBoundingClientRect().height);
            var width = child.dom.scrollWidth;

            if (width > minWidth) {
              this.minWidth = minWidth = width;
              this.minWidthFrom = pos;
              this.minWidthTo = end;
            }
          }

          pos = end + child.breakAfter;
        }

        return result;
      }
    }, {
      key: "measureTextSize",
      value: function measureTextSize() {
        var _this21 = this;

        var _iterator43 = _createForOfIteratorHelper(this.children),
            _step43;

        try {
          for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
            var child = _step43.value;

            if (child instanceof LineView) {
              var measure = child.measureTextSize();
              if (measure) return measure;
            }
          }
        } catch (err) {
          _iterator43.e(err);
        } finally {
          _iterator43.f();
        }

        var dummy = document.createElement("div"),
            lineHeight,
            charWidth;
        dummy.className = "cm-line";
        dummy.textContent = "abc def ghi jkl mno pqr stu";
        this.view.observer.ignore(function () {
          _this21.dom.appendChild(dummy);

          var rect = clientRectsFor(dummy.firstChild)[0];
          lineHeight = dummy.getBoundingClientRect().height;
          charWidth = rect ? rect.width / 27 : 7;
          dummy.remove();
        });
        return {
          lineHeight: lineHeight,
          charWidth: charWidth
        };
      }
    }, {
      key: "childCursor",
      value: function childCursor() {
        var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.length;
        var i = this.children.length;
        if (i) pos -= this.children[--i].length;
        return new ChildCursor(this.children, pos, i);
      }
    }, {
      key: "computeBlockGapDeco",
      value: function computeBlockGapDeco() {
        var deco = [],
            vs = this.view.viewState;

        for (var pos = 0, _i67 = 0;; _i67++) {
          var next = _i67 == vs.viewports.length ? null : vs.viewports[_i67];
          var end = next ? next.from - 1 : this.length;

          if (end > pos) {
            var height = vs.lineAt(end, 0).bottom - vs.lineAt(pos, 0).top;
            deco.push(Decoration.replace({
              widget: new BlockGapWidget(height),
              block: true,
              inclusive: true
            }).range(pos, end));
          }

          if (!next) break;
          pos = next.to + 1;
        }

        return Decoration.set(deco);
      }
    }, {
      key: "updateDeco",
      value: function updateDeco() {
        return this.decorations = [].concat(_toConsumableArray(this.view.pluginField(PluginField.decorations)), _toConsumableArray(this.view.state.facet(decorations)), [this.compositionDeco, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]);
      }
    }, {
      key: "scrollIntoView",
      value: function scrollIntoView(_ref9) {
        var range = _ref9.range,
            center = _ref9.center;
        var rect = this.coordsAt(range.head, range.empty ? range.assoc : range.head > range.anchor ? -1 : 1),
            other;
        if (!rect) return;
        if (!range.empty && (other = this.coordsAt(range.anchor, range.anchor > range.head ? -1 : 1))) rect = {
          left: Math.min(rect.left, other.left),
          top: Math.min(rect.top, other.top),
          right: Math.max(rect.right, other.right),
          bottom: Math.max(rect.bottom, other.bottom)
        };
        var mLeft = 0,
            mRight = 0,
            mTop = 0,
            mBottom = 0;

        var _iterator44 = _createForOfIteratorHelper(this.view.pluginField(PluginField.scrollMargins)),
            _step44;

        try {
          for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
            var margins = _step44.value;

            if (margins) {
              var left = margins.left,
                  right = margins.right,
                  top2 = margins.top,
                  bottom = margins.bottom;
              if (left != null) mLeft = Math.max(mLeft, left);
              if (right != null) mRight = Math.max(mRight, right);
              if (top2 != null) mTop = Math.max(mTop, top2);
              if (bottom != null) mBottom = Math.max(mBottom, bottom);
            }
          }
        } catch (err) {
          _iterator44.e(err);
        } finally {
          _iterator44.f();
        }

        scrollRectIntoView(this.view.scrollDOM, {
          left: rect.left - mLeft,
          top: rect.top - mTop,
          right: rect.right + mRight,
          bottom: rect.bottom + mBottom
        }, range.head < range.anchor ? -1 : 1, center);
      }
    }]);

    return DocView;
  }(ContentView);

  function betweenUneditable(pos) {
    return pos.node.nodeType == 1 && pos.node.firstChild && (pos.offset == 0 || pos.node.childNodes[pos.offset - 1].contentEditable == "false") && (pos.offset == pos.node.childNodes.length || pos.node.childNodes[pos.offset].contentEditable == "false");
  }

  var BlockGapWidget = /*#__PURE__*/function (_WidgetType2) {
    _inherits(BlockGapWidget, _WidgetType2);

    var _super18 = _createSuper(BlockGapWidget);

    function BlockGapWidget(height) {
      var _this22;

      _classCallCheck(this, BlockGapWidget);

      _this22 = _super18.call(this);
      _this22.height = height;
      return _this22;
    }

    _createClass(BlockGapWidget, [{
      key: "toDOM",
      value: function toDOM() {
        var elt = document.createElement("div");
        this.updateDOM(elt);
        return elt;
      }
    }, {
      key: "eq",
      value: function eq(other) {
        return other.height == this.height;
      }
    }, {
      key: "updateDOM",
      value: function updateDOM(elt) {
        elt.style.height = this.height + "px";
        return true;
      }
    }, {
      key: "estimatedHeight",
      get: function get() {
        return this.height;
      }
    }]);

    return BlockGapWidget;
  }(WidgetType);

  function computeCompositionDeco(view, changes) {
    var sel = view.observer.selectionRange;
    var textNode = sel.focusNode && nearbyTextNode(sel.focusNode, sel.focusOffset, 0);
    if (!textNode) return Decoration.none;
    var cView = view.docView.nearest(textNode);
    var from,
        to,
        topNode = textNode;

    if (cView instanceof InlineView) {
      while (cView.parent instanceof InlineView) {
        cView = cView.parent;
      }

      from = cView.posAtStart;
      to = from + cView.length;
      topNode = cView.dom;
    } else if (cView instanceof LineView) {
      while (topNode.parentNode != cView.dom) {
        topNode = topNode.parentNode;
      }

      var prev = topNode.previousSibling;

      while (prev && !ContentView.get(prev)) {
        prev = prev.previousSibling;
      }

      from = to = prev ? ContentView.get(prev).posAtEnd : cView.posAtStart;
    } else {
      return Decoration.none;
    }

    var newFrom = changes.mapPos(from, 1),
        newTo = Math.max(newFrom, changes.mapPos(to, -1));
    var text = textNode.nodeValue,
        state = view.state;

    if (newTo - newFrom < text.length) {
      if (state.sliceDoc(newFrom, Math.min(state.doc.length, newFrom + text.length)) == text) newTo = newFrom + text.length;else if (state.sliceDoc(Math.max(0, newTo - text.length), newTo) == text) newFrom = newTo - text.length;else return Decoration.none;
    } else if (state.sliceDoc(newFrom, newTo) != text) {
      return Decoration.none;
    }

    return Decoration.set(Decoration.replace({
      widget: new CompositionWidget(topNode, textNode)
    }).range(newFrom, newTo));
  }

  var CompositionWidget = /*#__PURE__*/function (_WidgetType3) {
    _inherits(CompositionWidget, _WidgetType3);

    var _super19 = _createSuper(CompositionWidget);

    function CompositionWidget(top2, text) {
      var _this23;

      _classCallCheck(this, CompositionWidget);

      _this23 = _super19.call(this);
      _this23.top = top2;
      _this23.text = text;
      return _this23;
    }

    _createClass(CompositionWidget, [{
      key: "eq",
      value: function eq(other) {
        return this.top == other.top && this.text == other.text;
      }
    }, {
      key: "toDOM",
      value: function toDOM() {
        return this.top;
      }
    }, {
      key: "ignoreEvent",
      value: function ignoreEvent() {
        return false;
      }
    }, {
      key: "customView",
      get: function get() {
        return CompositionView;
      }
    }]);

    return CompositionWidget;
  }(WidgetType);

  function nearbyTextNode(node, offset, side) {
    for (;;) {
      if (node.nodeType == 3) return node;

      if (node.nodeType == 1 && offset > 0 && side <= 0) {
        node = node.childNodes[offset - 1];
        offset = maxOffset(node);
      } else if (node.nodeType == 1 && offset < node.childNodes.length && side >= 0) {
        node = node.childNodes[offset];
        offset = 0;
      } else {
        return null;
      }
    }
  }

  function nextToUneditable(node, offset) {
    if (node.nodeType != 1) return 0;
    return (offset && node.childNodes[offset - 1].contentEditable == "false" ? 1 : 0) | (offset < node.childNodes.length && node.childNodes[offset].contentEditable == "false" ? 2 : 0);
  }

  var DecorationComparator$1 = /*#__PURE__*/function () {
    function DecorationComparator$1() {
      _classCallCheck(this, DecorationComparator$1);

      this.changes = [];
    }

    _createClass(DecorationComparator$1, [{
      key: "compareRange",
      value: function compareRange(from, to) {
        addRange(from, to, this.changes);
      }
    }, {
      key: "comparePoint",
      value: function comparePoint(from, to) {
        addRange(from, to, this.changes);
      }
    }]);

    return DecorationComparator$1;
  }();

  function findChangedDeco(a, b, diff) {
    var comp = new DecorationComparator$1();
    RangeSet.compare(a, b, diff, comp);
    return comp.changes;
  }

  function inUneditable(node, inside2) {
    for (var cur = node; cur && cur != inside2; cur = cur.assignedSlot || cur.parentNode) {
      if (cur.nodeType == 1 && cur.contentEditable == "false") {
        return true;
      }
    }

    return false;
  }

  var Direction = /* @__PURE__ */function (Direction2) {
    Direction2[Direction2["LTR"] = 0] = "LTR";
    Direction2[Direction2["RTL"] = 1] = "RTL";
    return Direction2;
  }(Direction || (Direction = {}));

  var LTR = Direction.LTR;
  var RTL = Direction.RTL;

  function dec(str) {
    var result = [];

    for (var _i68 = 0; _i68 < str.length; _i68++) {
      result.push(1 << +str[_i68]);
    }

    return result;
  }

  var LowTypes = /* @__PURE__ */dec("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008");
  var ArabicTypes = /* @__PURE__ */dec("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");
  var Brackets = /* @__PURE__ */Object.create(null);
  var BracketStack = [];

  for (var _i69 = 0, _arr2 = ["()", "[]", "{}"]; _i69 < _arr2.length; _i69++) {
    var p = _arr2[_i69];
    var l = /* @__PURE__ */p.charCodeAt(0),
        r = /* @__PURE__ */p.charCodeAt(1);
    Brackets[l] = r;
    Brackets[r] = -l;
  }

  function charType(ch) {
    return ch <= 247 ? LowTypes[ch] : 1424 <= ch && ch <= 1524 ? 2 : 1536 <= ch && ch <= 1785 ? ArabicTypes[ch - 1536] : 1774 <= ch && ch <= 2220 ? 4 : 8192 <= ch && ch <= 8203 ? 256 : ch == 8204 ? 256 : 1;
  }

  var BidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;

  var BidiSpan = /*#__PURE__*/function () {
    function BidiSpan(from, to, level) {
      _classCallCheck(this, BidiSpan);

      this.from = from;
      this.to = to;
      this.level = level;
    }

    _createClass(BidiSpan, [{
      key: "dir",
      get: function get() {
        return this.level % 2 ? RTL : LTR;
      }
    }, {
      key: "side",
      value: function side(end, dir) {
        return this.dir == dir == end ? this.to : this.from;
      }
    }], [{
      key: "find",
      value: function find(order, index, level, assoc) {
        var maybe = -1;

        for (var _i70 = 0; _i70 < order.length; _i70++) {
          var span = order[_i70];

          if (span.from <= index && span.to >= index) {
            if (span.level == level) return _i70;
            if (maybe < 0 || (assoc != 0 ? assoc < 0 ? span.from < index : span.to > index : order[maybe].level > span.level)) maybe = _i70;
          }
        }

        if (maybe < 0) throw new RangeError("Index out of range");
        return maybe;
      }
    }]);

    return BidiSpan;
  }();

  var types = [];

  function computeOrder(line, direction) {
    var len = line.length,
        outerType = direction == LTR ? 1 : 2,
        oppositeType = direction == LTR ? 2 : 1;
    if (!line || outerType == 1 && !BidiRE.test(line)) return trivialOrder(len);

    for (var _i71 = 0, prev = outerType, prevStrong = outerType; _i71 < len; _i71++) {
      var type = charType(line.charCodeAt(_i71));
      if (type == 512) type = prev;else if (type == 8 && prevStrong == 4) type = 16;
      types[_i71] = type == 4 ? 2 : type;
      if (type & 7) prevStrong = type;
      prev = type;
    }

    for (var _i72 = 0, _prev = outerType, _prevStrong = outerType; _i72 < len; _i72++) {
      var _type2 = types[_i72];

      if (_type2 == 128) {
        if (_i72 < len - 1 && _prev == types[_i72 + 1] && _prev & 24) _type2 = types[_i72] = _prev;else types[_i72] = 256;
      } else if (_type2 == 64) {
        var end = _i72 + 1;

        while (end < len && types[end] == 64) {
          end++;
        }

        var replace = _i72 && _prev == 8 || end < len && types[end] == 8 ? _prevStrong == 1 ? 1 : 8 : 256;

        for (var j = _i72; j < end; j++) {
          types[j] = replace;
        }

        _i72 = end - 1;
      } else if (_type2 == 8 && _prevStrong == 1) {
        types[_i72] = 1;
      }

      _prev = _type2;
      if (_type2 & 7) _prevStrong = _type2;
    }

    for (var _i73 = 0, sI = 0, context = 0, ch, br, _type3; _i73 < len; _i73++) {
      if (br = Brackets[ch = line.charCodeAt(_i73)]) {
        if (br < 0) {
          for (var sJ = sI - 3; sJ >= 0; sJ -= 3) {
            if (BracketStack[sJ + 1] == -br) {
              var flags = BracketStack[sJ + 2];
              var type2 = flags & 2 ? outerType : !(flags & 4) ? 0 : flags & 1 ? oppositeType : outerType;
              if (type2) types[_i73] = types[BracketStack[sJ]] = type2;
              sI = sJ;
              break;
            }
          }
        } else if (BracketStack.length == 189) {
          break;
        } else {
          BracketStack[sI++] = _i73;
          BracketStack[sI++] = ch;
          BracketStack[sI++] = context;
        }
      } else if ((_type3 = types[_i73]) == 2 || _type3 == 1) {
        var embed = _type3 == outerType;
        context = embed ? 0 : 1;

        for (var _sJ = sI - 3; _sJ >= 0; _sJ -= 3) {
          var cur = BracketStack[_sJ + 2];
          if (cur & 2) break;

          if (embed) {
            BracketStack[_sJ + 2] |= 2;
          } else {
            if (cur & 4) break;
            BracketStack[_sJ + 2] |= 4;
          }
        }
      }
    }

    for (var _i74 = 0; _i74 < len; _i74++) {
      if (types[_i74] == 256) {
        var _end2 = _i74 + 1;

        while (_end2 < len && types[_end2] == 256) {
          _end2++;
        }

        var beforeL = (_i74 ? types[_i74 - 1] : outerType) == 1;
        var afterL = (_end2 < len ? types[_end2] : outerType) == 1;

        var _replace = beforeL == afterL ? beforeL ? 1 : 2 : outerType;

        for (var _j = _i74; _j < _end2; _j++) {
          types[_j] = _replace;
        }

        _i74 = _end2 - 1;
      }
    }

    var order = [];

    if (outerType == 1) {
      for (var _i75 = 0; _i75 < len;) {
        var start = _i75,
            rtl = types[_i75++] != 1;

        while (_i75 < len && rtl == (types[_i75] != 1)) {
          _i75++;
        }

        if (rtl) {
          for (var _j2 = _i75; _j2 > start;) {
            var _end3 = _j2,
                _l = types[--_j2] != 2;

            while (_j2 > start && _l == (types[_j2 - 1] != 2)) {
              _j2--;
            }

            order.push(new BidiSpan(_j2, _end3, _l ? 2 : 1));
          }
        } else {
          order.push(new BidiSpan(start, _i75, 0));
        }
      }
    } else {
      for (var _i76 = 0; _i76 < len;) {
        var _start3 = _i76,
            _rtl = types[_i76++] == 2;

        while (_i76 < len && _rtl == (types[_i76] == 2)) {
          _i76++;
        }

        order.push(new BidiSpan(_start3, _i76, _rtl ? 1 : 2));
      }
    }

    return order;
  }

  function trivialOrder(length) {
    return [new BidiSpan(0, length, 0)];
  }

  var movedOver = "";

  function moveVisually(line, order, dir, start, forward) {
    var _a;

    var startIndex = start.head - line.from,
        spanI = -1;

    if (startIndex == 0) {
      if (!forward || !line.length) return null;

      if (order[0].level != dir) {
        startIndex = order[0].side(false, dir);
        spanI = 0;
      }
    } else if (startIndex == line.length) {
      if (forward) return null;
      var last = order[order.length - 1];

      if (last.level != dir) {
        startIndex = last.side(true, dir);
        spanI = order.length - 1;
      }
    }

    if (spanI < 0) spanI = BidiSpan.find(order, startIndex, (_a = start.bidiLevel) !== null && _a !== void 0 ? _a : -1, start.assoc);
    var span = order[spanI];

    if (startIndex == span.side(forward, dir)) {
      span = order[spanI += forward ? 1 : -1];
      startIndex = span.side(!forward, dir);
    }

    var indexForward = forward == (span.dir == dir);
    var nextIndex = findClusterBreak(line.text, startIndex, indexForward);
    movedOver = line.text.slice(Math.min(startIndex, nextIndex), Math.max(startIndex, nextIndex));
    if (nextIndex != span.side(forward, dir)) return EditorSelection.cursor(nextIndex + line.from, indexForward ? -1 : 1, span.level);
    var nextSpan = spanI == (forward ? order.length - 1 : 0) ? null : order[spanI + (forward ? 1 : -1)];
    if (!nextSpan && span.level != dir) return EditorSelection.cursor(forward ? line.to : line.from, forward ? -1 : 1, dir);
    if (nextSpan && nextSpan.level < span.level) return EditorSelection.cursor(nextSpan.side(!forward, dir) + line.from, forward ? 1 : -1, nextSpan.level);
    return EditorSelection.cursor(nextIndex + line.from, forward ? -1 : 1, span.level);
  }

  function groupAt(state, pos) {
    var bias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var categorize = state.charCategorizer(pos);
    var line = state.doc.lineAt(pos),
        linePos = pos - line.from;
    if (line.length == 0) return EditorSelection.cursor(pos);
    if (linePos == 0) bias = 1;else if (linePos == line.length) bias = -1;
    var from = linePos,
        to = linePos;
    if (bias < 0) from = findClusterBreak(line.text, linePos, false);else to = findClusterBreak(line.text, linePos);
    var cat = categorize(line.text.slice(from, to));

    while (from > 0) {
      var prev = findClusterBreak(line.text, from, false);
      if (categorize(line.text.slice(prev, from)) != cat) break;
      from = prev;
    }

    while (to < line.length) {
      var next = findClusterBreak(line.text, to);
      if (categorize(line.text.slice(to, next)) != cat) break;
      to = next;
    }

    return EditorSelection.range(from + line.from, to + line.from);
  }

  function getdx(x, rect) {
    return rect.left > x ? rect.left - x : Math.max(0, x - rect.right);
  }

  function getdy(y, rect) {
    return rect.top > y ? rect.top - y : Math.max(0, y - rect.bottom);
  }

  function yOverlap(a, b) {
    return a.top < b.bottom - 1 && a.bottom > b.top + 1;
  }

  function upTop(rect, top2) {
    return top2 < rect.top ? {
      top: top2,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom
    } : rect;
  }

  function upBot(rect, bottom) {
    return bottom > rect.bottom ? {
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: bottom
    } : rect;
  }

  function domPosAtCoords(parent, x, y) {
    var closest, closestRect, closestX, closestY;
    var above, below, aboveRect, belowRect;

    for (var child = parent.firstChild; child; child = child.nextSibling) {
      var rects = clientRectsFor(child);

      for (var _i77 = 0; _i77 < rects.length; _i77++) {
        var rect = rects[_i77];
        if (closestRect && yOverlap(closestRect, rect)) rect = upTop(upBot(rect, closestRect.bottom), closestRect.top);
        var dx = getdx(x, rect),
            dy = getdy(y, rect);
        if (dx == 0 && dy == 0) return child.nodeType == 3 ? domPosInText(child, x, y) : domPosAtCoords(child, x, y);

        if (!closest || closestY > dy || closestY == dy && closestX > dx) {
          closest = child;
          closestRect = rect;
          closestX = dx;
          closestY = dy;
        }

        if (dx == 0) {
          if (y > rect.bottom && (!aboveRect || aboveRect.bottom < rect.bottom)) {
            above = child;
            aboveRect = rect;
          } else if (y < rect.top && (!belowRect || belowRect.top > rect.top)) {
            below = child;
            belowRect = rect;
          }
        } else if (aboveRect && yOverlap(aboveRect, rect)) {
          aboveRect = upBot(aboveRect, rect.bottom);
        } else if (belowRect && yOverlap(belowRect, rect)) {
          belowRect = upTop(belowRect, rect.top);
        }
      }
    }

    if (aboveRect && aboveRect.bottom >= y) {
      closest = above;
      closestRect = aboveRect;
    } else if (belowRect && belowRect.top <= y) {
      closest = below;
      closestRect = belowRect;
    }

    if (!closest) return {
      node: parent,
      offset: 0
    };
    var clipX = Math.max(closestRect.left, Math.min(closestRect.right, x));
    if (closest.nodeType == 3) return domPosInText(closest, clipX, y);
    if (!closestX && closest.contentEditable == "true") return domPosAtCoords(closest, clipX, y);
    var offset = Array.prototype.indexOf.call(parent.childNodes, closest) + (x >= (closestRect.left + closestRect.right) / 2 ? 1 : 0);
    return {
      node: parent,
      offset: offset
    };
  }

  function domPosInText(node, x, y) {
    var len = node.nodeValue.length;
    var closestOffset = -1,
        closestDY = 1e9,
        generalSide = 0;

    for (var _i78 = 0; _i78 < len; _i78++) {
      var rects = textRange(node, _i78, _i78 + 1).getClientRects();

      for (var j = 0; j < rects.length; j++) {
        var rect = rects[j];
        if (rect.top == rect.bottom) continue;
        if (!generalSide) generalSide = x - rect.left;
        var dy = (rect.top > y ? rect.top - y : y - rect.bottom) - 1;

        if (rect.left - 1 <= x && rect.right + 1 >= x && dy < closestDY) {
          var right = x >= (rect.left + rect.right) / 2,
              after = right;

          if (browser.chrome || browser.gecko) {
            var rectBefore = textRange(node, _i78).getBoundingClientRect();
            if (rectBefore.left == rect.right) after = !right;
          }

          if (dy <= 0) return {
            node: node,
            offset: _i78 + (after ? 1 : 0)
          };
          closestOffset = _i78 + (after ? 1 : 0);
          closestDY = dy;
        }
      }
    }

    return {
      node: node,
      offset: closestOffset > -1 ? closestOffset : generalSide > 0 ? node.nodeValue.length : 0
    };
  }

  function _posAtCoords(view, _ref10, precise) {
    var x = _ref10.x,
        y = _ref10.y;
    var bias = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;

    var _a;

    var content = view.contentDOM.getBoundingClientRect(),
        block;
    var halfLine = view.defaultLineHeight / 2;

    for (var bounced = false;;) {
      block = view.blockAtHeight(y, content.top);

      if (block.top > y || block.bottom < y) {
        bias = block.top > y ? -1 : 1;
        y = Math.min(block.bottom - halfLine, Math.max(block.top + halfLine, y));
        if (bounced) return precise ? null : 0;else bounced = true;
      }

      if (block.type == BlockType.Text) break;
      y = bias > 0 ? block.bottom + halfLine : block.top - halfLine;
    }

    var lineStart = block.from;
    x = Math.max(content.left + 1, Math.min(content.right - 1, x));
    if (lineStart < view.viewport.from) return view.viewport.from == 0 ? 0 : posAtCoordsImprecise(view, content, block, x, y);
    if (lineStart > view.viewport.to) return view.viewport.to == view.state.doc.length ? view.state.doc.length : posAtCoordsImprecise(view, content, block, x, y);
    var doc2 = view.dom.ownerDocument;
    var element = (view.root.elementFromPoint ? view.root : doc2).elementFromPoint(x, y);
    var node,
        offset = -1;

    if (element && view.contentDOM.contains(element) && ((_a = view.docView.nearest(element)) === null || _a === void 0 ? void 0 : _a.isEditable) != false) {
      if (doc2.caretPositionFromPoint) {
        var pos = doc2.caretPositionFromPoint(x, y);

        if (pos) {
          node = pos.offsetNode;
          offset = pos.offset;
        }
      } else if (doc2.caretRangeFromPoint) {
        var range = doc2.caretRangeFromPoint(x, y);

        if (range) {
          node = range.startContainer;
          offset = range.startOffset;
          if (browser.safari && isSuspiciousCaretResult(node, offset, x)) node = void 0;
        }
      }
    }

    if (!node || !view.docView.dom.contains(node)) {
      var line = LineView.find(view.docView, lineStart);

      var _domPosAtCoords = domPosAtCoords(line.dom, x, y);

      node = _domPosAtCoords.node;
      offset = _domPosAtCoords.offset;
    }

    return view.docView.posFromDOM(node, offset);
  }

  function posAtCoordsImprecise(view, contentRect, block, x, y) {
    var into = Math.round((x - contentRect.left) * view.defaultCharacterWidth);

    if (view.lineWrapping && block.height > view.defaultLineHeight * 1.5) {
      var line = Math.floor((y - block.top) / view.defaultLineHeight);
      into += line * view.viewState.heightOracle.lineLength;
    }

    var content = view.state.sliceDoc(block.from, block.to);
    return block.from + findColumn(content, into, view.state.tabSize);
  }

  function isSuspiciousCaretResult(node, offset, x) {
    var len;
    if (node.nodeType != 3 || offset != (len = node.nodeValue.length)) return false;

    for (var next = node.nextSibling; next; next = next.nextSibling) {
      if (next.nodeType != 1 || next.nodeName != "BR") return false;
    }

    return textRange(node, len - 1, len).getBoundingClientRect().left > x;
  }

  function _moveToLineBoundary(view, start, forward, includeWrap) {
    var line = view.state.doc.lineAt(start.head);
    var coords = !includeWrap || !view.lineWrapping ? null : view.coordsAtPos(start.assoc < 0 && start.head > line.from ? start.head - 1 : start.head);

    if (coords) {
      var editorRect = view.dom.getBoundingClientRect();
      var pos = view.posAtCoords({
        x: forward == (view.textDirection == Direction.LTR) ? editorRect.right - 1 : editorRect.left + 1,
        y: (coords.top + coords.bottom) / 2
      });
      if (pos != null) return EditorSelection.cursor(pos, forward ? -1 : 1);
    }

    var lineView = LineView.find(view.docView, start.head);
    var end = lineView ? forward ? lineView.posAtEnd : lineView.posAtStart : forward ? line.to : line.from;
    return EditorSelection.cursor(end, forward ? -1 : 1);
  }

  function _moveByChar(view, start, forward, by) {
    var line = view.state.doc.lineAt(start.head),
        spans = view.bidiSpans(line);

    for (var cur = start, check = null;;) {
      var next = moveVisually(line, spans, view.textDirection, cur, forward),
          _char2 = movedOver;

      if (!next) {
        if (line.number == (forward ? view.state.doc.lines : 1)) return cur;
        _char2 = "\n";
        line = view.state.doc.line(line.number + (forward ? 1 : -1));
        spans = view.bidiSpans(line);
        next = EditorSelection.cursor(forward ? line.from : line.to);
      }

      if (!check) {
        if (!by) return next;
        check = by(_char2);
      } else if (!check(_char2)) {
        return cur;
      }

      cur = next;
    }
  }

  function byGroup(view, pos, start) {
    var categorize = view.state.charCategorizer(pos);
    var cat = categorize(start);
    return function (next) {
      var nextCat = categorize(next);
      if (cat == CharCategory.Space) cat = nextCat;
      return cat == nextCat;
    };
  }

  function _moveVertically(view, start, forward, distance) {
    var startPos = start.head,
        dir = forward ? 1 : -1;
    if (startPos == (forward ? view.state.doc.length : 0)) return EditorSelection.cursor(startPos);
    var goal = start.goalColumn,
        startY;
    var rect = view.contentDOM.getBoundingClientRect();
    var startCoords = view.coordsAtPos(startPos);

    if (startCoords) {
      if (goal == null) goal = startCoords.left - rect.left;
      startY = dir < 0 ? startCoords.top : startCoords.bottom;
    } else {
      var line = view.viewState.lineAt(startPos, view.dom.getBoundingClientRect().top);
      if (goal == null) goal = Math.min(rect.right - rect.left, view.defaultCharacterWidth * (startPos - line.from));
      startY = dir < 0 ? line.top : line.bottom;
    }

    var resolvedGoal = rect.left + goal;
    var dist = distance !== null && distance !== void 0 ? distance : view.defaultLineHeight >> 1;

    for (var extra = 0;; extra += 10) {
      var curY = startY + (dist + extra) * dir;

      var pos = _posAtCoords(view, {
        x: resolvedGoal,
        y: curY
      }, false, dir);

      if (curY < rect.top || curY > rect.bottom || (dir < 0 ? pos < startPos : pos > startPos)) return EditorSelection.cursor(pos, void 0, void 0, goal);
    }
  }

  function skipAtoms(view, oldPos, pos) {
    var atoms = view.pluginField(PluginField.atomicRanges);

    for (;;) {
      var moved = false;

      var _iterator45 = _createForOfIteratorHelper(atoms),
          _step45;

      try {
        for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
          var set = _step45.value;
          set.between(pos.from - 1, pos.from + 1, function (from, to, value) {
            if (pos.from > from && pos.from < to) {
              pos = oldPos.from > pos.from ? EditorSelection.cursor(from, 1) : EditorSelection.cursor(to, -1);
              moved = true;
            }
          });
        }
      } catch (err) {
        _iterator45.e(err);
      } finally {
        _iterator45.f();
      }

      if (!moved) return pos;
    }
  }

  var InputState = /*#__PURE__*/function () {
    function InputState(view) {
      var _this24 = this;

      _classCallCheck(this, InputState);

      this.lastKeyCode = 0;
      this.lastKeyTime = 0;
      this.pendingAndroidKey = void 0;
      this.pendingIOSKey = void 0;
      this.lastSelectionOrigin = null;
      this.lastSelectionTime = 0;
      this.lastEscPress = 0;
      this.lastContextMenu = 0;
      this.scrollHandlers = [];
      this.registeredEvents = [];
      this.customHandlers = [];
      this.composing = -1;
      this.compositionFirstChange = null;
      this.compositionEndedAt = 0;
      this.rapidCompositionStart = false;
      this.mouseSelection = null;

      var _loop5 = function _loop5(type) {
        var handler = handlers[type];
        view.contentDOM.addEventListener(type, function (event) {
          if (type == "keydown" && _this24.keydown(view, event)) return;
          if (!eventBelongsToEditor(view, event) || _this24.ignoreDuringComposition(event)) return;
          if (_this24.mustFlushObserver(event)) view.observer.forceFlush();
          if (_this24.runCustomHandlers(type, view, event)) event.preventDefault();else handler(view, event);
        });

        _this24.registeredEvents.push(type);
      };

      for (var type in handlers) {
        _loop5(type);
      }

      this.notifiedFocused = view.hasFocus;
      this.ensureHandlers(view);
      if (browser.safari) view.contentDOM.addEventListener("input", function () {
        return null;
      });
    }

    _createClass(InputState, [{
      key: "setSelectionOrigin",
      value: function setSelectionOrigin(origin) {
        this.lastSelectionOrigin = origin;
        this.lastSelectionTime = Date.now();
      }
    }, {
      key: "ensureHandlers",
      value: function ensureHandlers(view) {
        var _this25 = this;

        var handlers2 = this.customHandlers = view.pluginField(domEventHandlers);

        var _iterator46 = _createForOfIteratorHelper(handlers2),
            _step46;

        try {
          for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
            var set = _step46.value;

            var _loop6 = function _loop6(type) {
              if (_this25.registeredEvents.indexOf(type) < 0 && type != "scroll") {
                _this25.registeredEvents.push(type);

                view.contentDOM.addEventListener(type, function (event) {
                  if (!eventBelongsToEditor(view, event)) return;
                  if (_this25.runCustomHandlers(type, view, event)) event.preventDefault();
                });
              }
            };

            for (var type in set.handlers) {
              _loop6(type);
            }
          }
        } catch (err) {
          _iterator46.e(err);
        } finally {
          _iterator46.f();
        }
      }
    }, {
      key: "runCustomHandlers",
      value: function runCustomHandlers(type, view, event) {
        var _iterator47 = _createForOfIteratorHelper(this.customHandlers),
            _step47;

        try {
          for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
            var set = _step47.value;
            var handler = set.handlers[type],
                handled = false;

            if (handler) {
              try {
                handled = handler.call(set.plugin, event, view);
              } catch (e) {
                logException(view.state, e);
              }

              if (handled || event.defaultPrevented) {
                if (browser.android && type == "keydown" && event.keyCode == 13) view.observer.flushSoon();
                return true;
              }
            }
          }
        } catch (err) {
          _iterator47.e(err);
        } finally {
          _iterator47.f();
        }

        return false;
      }
    }, {
      key: "runScrollHandlers",
      value: function runScrollHandlers(view, event) {
        var _iterator48 = _createForOfIteratorHelper(this.customHandlers),
            _step48;

        try {
          for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
            var set = _step48.value;
            var handler = set.handlers.scroll;

            if (handler) {
              try {
                handler.call(set.plugin, event, view);
              } catch (e) {
                logException(view.state, e);
              }
            }
          }
        } catch (err) {
          _iterator48.e(err);
        } finally {
          _iterator48.f();
        }
      }
    }, {
      key: "keydown",
      value: function keydown(view, event) {
        var _this26 = this;

        this.lastKeyCode = event.keyCode;
        this.lastKeyTime = Date.now();
        if (this.screenKeyEvent(view, event)) return true;
        var pending;

        if (browser.ios && (pending = PendingKeys.find(function (key) {
          return key.keyCode == event.keyCode;
        })) && !(event.ctrlKey || event.altKey || event.metaKey) && !event.synthetic) {
          this.pendingIOSKey = pending;
          setTimeout(function () {
            return _this26.flushIOSKey(view);
          }, 250);
          return true;
        }

        return false;
      }
    }, {
      key: "flushIOSKey",
      value: function flushIOSKey(view) {
        var key = this.pendingIOSKey;
        if (!key) return false;
        this.pendingIOSKey = void 0;
        return dispatchKey(view.contentDOM, key.key, key.keyCode);
      }
    }, {
      key: "setPendingAndroidKey",
      value: function setPendingAndroidKey(view, pending) {
        var _this27 = this;

        this.pendingAndroidKey = pending;
        requestAnimationFrame(function () {
          var key = _this27.pendingAndroidKey;
          if (!key) return;
          _this27.pendingAndroidKey = void 0;
          view.observer.processRecords();
          var startState = view.state;
          dispatchKey(view.contentDOM, key.key, key.keyCode);
          if (view.state == startState) view.docView.reset(true);
        });
      }
    }, {
      key: "ignoreDuringComposition",
      value: function ignoreDuringComposition(event) {
        if (!/^key/.test(event.type)) return false;
        if (this.composing > 0) return true;

        if (browser.safari && Date.now() - this.compositionEndedAt < 500) {
          this.compositionEndedAt = 0;
          return true;
        }

        return false;
      }
    }, {
      key: "screenKeyEvent",
      value: function screenKeyEvent(view, event) {
        var protectedTab = event.keyCode == 9 && Date.now() < this.lastEscPress + 2e3;
        if (event.keyCode == 27) this.lastEscPress = Date.now();else if (modifierCodes.indexOf(event.keyCode) < 0) this.lastEscPress = 0;
        return protectedTab;
      }
    }, {
      key: "mustFlushObserver",
      value: function mustFlushObserver(event) {
        return event.type == "keydown" && event.keyCode != 229 || event.type == "compositionend" && !browser.ios;
      }
    }, {
      key: "startMouseSelection",
      value: function startMouseSelection(view, event, style) {
        if (this.mouseSelection) this.mouseSelection.destroy();
        this.mouseSelection = new MouseSelection(this, view, event, style);
      }
    }, {
      key: "update",
      value: function update(_update2) {
        if (this.mouseSelection) this.mouseSelection.update(_update2);
        if (_update2.transactions.length) this.lastKeyCode = this.lastSelectionTime = 0;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.mouseSelection) this.mouseSelection.destroy();
      }
    }]);

    return InputState;
  }();

  var PendingKeys = [{
    key: "Backspace",
    keyCode: 8,
    inputType: "deleteContentBackward"
  }, {
    key: "Enter",
    keyCode: 13,
    inputType: "insertParagraph"
  }, {
    key: "Delete",
    keyCode: 46,
    inputType: "deleteContentForward"
  }];
  var modifierCodes = [16, 17, 18, 20, 91, 92, 224, 225];

  var MouseSelection = /*#__PURE__*/function () {
    function MouseSelection(inputState, view, startEvent, style) {
      _classCallCheck(this, MouseSelection);

      this.inputState = inputState;
      this.view = view;
      this.style = style;
      this.lastEvent = startEvent;
      var doc2 = view.contentDOM.ownerDocument;
      doc2.addEventListener("mousemove", this.move = this.move.bind(this));
      doc2.addEventListener("mouseup", this.up = this.up.bind(this));
      this.extend = startEvent.shiftKey;
      this.multiple = view.state.facet(EditorState.allowMultipleSelections) && addsSelectionRange(view, startEvent);
      this.dragMove = dragMovesSelection(view, startEvent);
      this.dragging = isInPrimarySelection(view, startEvent) ? null : false;

      if (this.dragging === false) {
        startEvent.preventDefault();
        this.select(startEvent);
      }
    }

    _createClass(MouseSelection, [{
      key: "move",
      value: function move(event) {
        if (event.buttons == 0) return this.destroy();
        if (this.dragging !== false) return;
        this.select(this.lastEvent = event);
      }
    }, {
      key: "up",
      value: function up(event) {
        if (this.dragging == null) this.select(this.lastEvent);
        if (!this.dragging) event.preventDefault();
        this.destroy();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var doc2 = this.view.contentDOM.ownerDocument;
        doc2.removeEventListener("mousemove", this.move);
        doc2.removeEventListener("mouseup", this.up);
        this.inputState.mouseSelection = null;
      }
    }, {
      key: "select",
      value: function select(event) {
        var selection = this.style.get(event, this.extend, this.multiple);
        if (!selection.eq(this.view.state.selection) || selection.main.assoc != this.view.state.selection.main.assoc) this.view.dispatch({
          selection: selection,
          userEvent: "select.pointer",
          scrollIntoView: true
        });
      }
    }, {
      key: "update",
      value: function update(_update3) {
        var _this28 = this;

        if (_update3.docChanged && this.dragging) this.dragging = this.dragging.map(_update3.changes);
        if (this.style.update(_update3)) setTimeout(function () {
          return _this28.select(_this28.lastEvent);
        }, 20);
      }
    }]);

    return MouseSelection;
  }();

  function addsSelectionRange(view, event) {
    var facet = view.state.facet(clickAddsSelectionRange);
    return facet.length ? facet[0](event) : browser.mac ? event.metaKey : event.ctrlKey;
  }

  function dragMovesSelection(view, event) {
    var facet = view.state.facet(dragMovesSelection$1);
    return facet.length ? facet[0](event) : browser.mac ? !event.altKey : !event.ctrlKey;
  }

  function isInPrimarySelection(view, event) {
    var main = view.state.selection.main;
    if (main.empty) return false;
    var sel = getSelection(view.root);
    if (sel.rangeCount == 0) return true;
    var rects = sel.getRangeAt(0).getClientRects();

    for (var _i79 = 0; _i79 < rects.length; _i79++) {
      var rect = rects[_i79];
      if (rect.left <= event.clientX && rect.right >= event.clientX && rect.top <= event.clientY && rect.bottom >= event.clientY) return true;
    }

    return false;
  }

  function eventBelongsToEditor(view, event) {
    if (!event.bubbles) return true;
    if (event.defaultPrevented) return false;

    for (var node = event.target, cView; node != view.contentDOM; node = node.parentNode) {
      if (!node || node.nodeType == 11 || (cView = ContentView.get(node)) && cView.ignoreEvent(event)) return false;
    }

    return true;
  }

  var handlers = /* @__PURE__ */Object.create(null);
  var brokenClipboardAPI = browser.ie && browser.ie_version < 15 || browser.ios && browser.webkit_version < 604;

  function capturePaste(view) {
    var parent = view.dom.parentNode;
    if (!parent) return;
    var target = parent.appendChild(document.createElement("textarea"));
    target.style.cssText = "position: fixed; left: -10000px; top: 10px";
    target.focus();
    setTimeout(function () {
      view.focus();
      target.remove();
      doPaste(view, target.value);
    }, 50);
  }

  function doPaste(view, input) {
    var state = view.state,
        changes,
        i = 1,
        text = state.toText(input);
    var byLine = text.lines == state.selection.ranges.length;
    var linewise = lastLinewiseCopy != null && state.selection.ranges.every(function (r) {
      return r.empty;
    }) && lastLinewiseCopy == text.toString();

    if (linewise) {
      var lastLine = -1;
      changes = state.changeByRange(function (range) {
        var line = state.doc.lineAt(range.from);
        if (line.from == lastLine) return {
          range: range
        };
        lastLine = line.from;
        var insert2 = state.toText((byLine ? text.line(i++).text : input) + state.lineBreak);
        return {
          changes: {
            from: line.from,
            insert: insert2
          },
          range: EditorSelection.cursor(range.from + insert2.length)
        };
      });
    } else if (byLine) {
      changes = state.changeByRange(function (range) {
        var line = text.line(i++);
        return {
          changes: {
            from: range.from,
            to: range.to,
            insert: line.text
          },
          range: EditorSelection.cursor(range.from + line.length)
        };
      });
    } else {
      changes = state.replaceSelection(text);
    }

    view.dispatch(changes, {
      userEvent: "input.paste",
      scrollIntoView: true
    });
  }

  handlers.keydown = function (view, event) {
    view.inputState.setSelectionOrigin("select");
  };

  var lastTouch = 0;

  handlers.touchstart = function (view, e) {
    lastTouch = Date.now();
    view.inputState.setSelectionOrigin("select.pointer");
  };

  handlers.touchmove = function (view) {
    view.inputState.setSelectionOrigin("select.pointer");
  };

  handlers.mousedown = function (view, event) {
    view.observer.flush();
    if (lastTouch > Date.now() - 2e3) return;
    var style = null;

    var _iterator49 = _createForOfIteratorHelper(view.state.facet(mouseSelectionStyle)),
        _step49;

    try {
      for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
        var makeStyle = _step49.value;
        style = makeStyle(view, event);
        if (style) break;
      }
    } catch (err) {
      _iterator49.e(err);
    } finally {
      _iterator49.f();
    }

    if (!style && event.button == 0) style = basicMouseSelection(view, event);

    if (style) {
      if (view.root.activeElement != view.contentDOM) view.observer.ignore(function () {
        return focusPreventScroll(view.contentDOM);
      });
      view.inputState.startMouseSelection(view, event, style);
    }
  };

  function rangeForClick(view, pos, bias, type) {
    if (type == 1) {
      return EditorSelection.cursor(pos, bias);
    } else if (type == 2) {
      return groupAt(view.state, pos, bias);
    } else {
      var visual = LineView.find(view.docView, pos),
          line = view.state.doc.lineAt(visual ? visual.posAtEnd : pos);
      var from = visual ? visual.posAtStart : line.from,
          to = visual ? visual.posAtEnd : line.to;
      if (to < view.state.doc.length && to == line.to) to++;
      return EditorSelection.range(from, to);
    }
  }

  var insideY = function insideY(y, rect) {
    return y >= rect.top && y <= rect.bottom;
  };

  var inside = function inside(x, y, rect) {
    return insideY(y, rect) && x >= rect.left && x <= rect.right;
  };

  function findPositionSide(view, pos, x, y) {
    var line = LineView.find(view.docView, pos);
    if (!line) return 1;
    var off = pos - line.posAtStart;
    if (off == 0) return 1;
    if (off == line.length) return -1;
    var before = line.coordsAt(off, -1);
    if (before && inside(x, y, before)) return -1;
    var after = line.coordsAt(off, 1);
    if (after && inside(x, y, after)) return 1;
    return before && insideY(y, before) ? -1 : 1;
  }

  function queryPos(view, event) {
    var pos = view.posAtCoords({
      x: event.clientX,
      y: event.clientY
    }, false);
    return {
      pos: pos,
      bias: findPositionSide(view, pos, event.clientX, event.clientY)
    };
  }

  var BadMouseDetail = browser.ie && browser.ie_version <= 11;
  var lastMouseDown = null;
  var lastMouseDownCount = 0;
  var lastMouseDownTime = 0;

  function getClickType(event) {
    if (!BadMouseDetail) return event.detail;
    var last = lastMouseDown,
        lastTime = lastMouseDownTime;
    lastMouseDown = event;
    lastMouseDownTime = Date.now();
    return lastMouseDownCount = !last || lastTime > Date.now() - 400 && Math.abs(last.clientX - event.clientX) < 2 && Math.abs(last.clientY - event.clientY) < 2 ? (lastMouseDownCount + 1) % 3 : 1;
  }

  function basicMouseSelection(view, event) {
    var start = queryPos(view, event),
        type = getClickType(event);
    var startSel = view.state.selection;
    var last = start,
        lastEvent = event;
    return {
      update: function update(_update4) {
        if (_update4.changes) {
          if (start) start.pos = _update4.changes.mapPos(start.pos);
          startSel = startSel.map(_update4.changes);
          lastEvent = null;
        }
      },
      get: function get(event2, extend2, multiple) {
        var cur;
        if (lastEvent && event2.clientX == lastEvent.clientX && event2.clientY == lastEvent.clientY) cur = last;else {
          cur = last = queryPos(view, event2);
          lastEvent = event2;
        }
        if (!cur || !start) return startSel;
        var range = rangeForClick(view, cur.pos, cur.bias, type);

        if (start.pos != cur.pos && !extend2) {
          var startRange = rangeForClick(view, start.pos, start.bias, type);
          var from = Math.min(startRange.from, range.from),
              to = Math.max(startRange.to, range.to);
          range = from < range.from ? EditorSelection.range(from, to) : EditorSelection.range(to, from);
        }

        if (extend2) return startSel.replaceRange(startSel.main.extend(range.from, range.to));else if (multiple) return startSel.addRange(range);else return EditorSelection.create([range]);
      }
    };
  }

  handlers.dragstart = function (view, event) {
    var main = view.state.selection.main;
    var mouseSelection = view.inputState.mouseSelection;
    if (mouseSelection) mouseSelection.dragging = main;

    if (event.dataTransfer) {
      event.dataTransfer.setData("Text", view.state.sliceDoc(main.from, main.to));
      event.dataTransfer.effectAllowed = "copyMove";
    }
  };

  function dropText(view, event, text, direct) {
    var dropPos = view.posAtCoords({
      x: event.clientX,
      y: event.clientY
    });
    if (dropPos == null || !text) return;
    event.preventDefault();
    var mouseSelection = view.inputState.mouseSelection;
    var del = direct && mouseSelection && mouseSelection.dragging && mouseSelection.dragMove ? {
      from: mouseSelection.dragging.from,
      to: mouseSelection.dragging.to
    } : null;
    var ins = {
      from: dropPos,
      insert: text
    };
    var changes = view.state.changes(del ? [del, ins] : ins);
    view.focus();
    view.dispatch({
      changes: changes,
      selection: {
        anchor: changes.mapPos(dropPos, -1),
        head: changes.mapPos(dropPos, 1)
      },
      userEvent: del ? "move.drop" : "input.drop"
    });
  }

  handlers.drop = function (view, event) {
    if (!event.dataTransfer) return;
    if (view.state.readOnly) return event.preventDefault();
    var files = event.dataTransfer.files;

    if (files && files.length) {
      (function () {
        event.preventDefault();
        var text = Array(files.length),
            read = 0;

        var finishFile = function finishFile() {
          if (++read == files.length) dropText(view, event, text.filter(function (s) {
            return s != null;
          }).join(view.state.lineBreak), false);
        };

        var _loop7 = function _loop7(_i80) {
          var reader = new FileReader();
          reader.onerror = finishFile;

          reader.onload = function () {
            if (!/[\x00-\x08\x0e-\x1f]{2}/.test(reader.result)) text[_i80] = reader.result;
            finishFile();
          };

          reader.readAsText(files[_i80]);
        };

        for (var _i80 = 0; _i80 < files.length; _i80++) {
          _loop7(_i80);
        }
      })();
    } else {
      dropText(view, event, event.dataTransfer.getData("Text"), true);
    }
  };

  handlers.paste = function (view, event) {
    if (view.state.readOnly) return event.preventDefault();
    view.observer.flush();
    var data = brokenClipboardAPI ? null : event.clipboardData;

    if (data) {
      doPaste(view, data.getData("text/plain"));
      event.preventDefault();
    } else {
      capturePaste(view);
    }
  };

  function captureCopy(view, text) {
    var parent = view.dom.parentNode;
    if (!parent) return;
    var target = parent.appendChild(document.createElement("textarea"));
    target.style.cssText = "position: fixed; left: -10000px; top: 10px";
    target.value = text;
    target.focus();
    target.selectionEnd = text.length;
    target.selectionStart = 0;
    setTimeout(function () {
      target.remove();
      view.focus();
    }, 50);
  }

  function copiedRange(state) {
    var content = [],
        ranges = [],
        linewise = false;

    var _iterator50 = _createForOfIteratorHelper(state.selection.ranges),
        _step50;

    try {
      for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
        var range = _step50.value;

        if (!range.empty) {
          content.push(state.sliceDoc(range.from, range.to));
          ranges.push(range);
        }
      }
    } catch (err) {
      _iterator50.e(err);
    } finally {
      _iterator50.f();
    }

    if (!content.length) {
      var upto = -1;

      var _iterator51 = _createForOfIteratorHelper(state.selection.ranges),
          _step51;

      try {
        for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
          var from = _step51.value.from;
          var line = state.doc.lineAt(from);

          if (line.number > upto) {
            content.push(line.text);
            ranges.push({
              from: line.from,
              to: Math.min(state.doc.length, line.to + 1)
            });
          }

          upto = line.number;
        }
      } catch (err) {
        _iterator51.e(err);
      } finally {
        _iterator51.f();
      }

      linewise = true;
    }

    return {
      text: content.join(state.lineBreak),
      ranges: ranges,
      linewise: linewise
    };
  }

  var lastLinewiseCopy = null;

  handlers.copy = handlers.cut = function (view, event) {
    var _copiedRange = copiedRange(view.state),
        text = _copiedRange.text,
        ranges = _copiedRange.ranges,
        linewise = _copiedRange.linewise;

    if (!text && !linewise) return;
    lastLinewiseCopy = linewise ? text : null;
    var data = brokenClipboardAPI ? null : event.clipboardData;

    if (data) {
      event.preventDefault();
      data.clearData();
      data.setData("text/plain", text);
    } else {
      captureCopy(view, text);
    }

    if (event.type == "cut" && !view.state.readOnly) view.dispatch({
      changes: ranges,
      scrollIntoView: true,
      userEvent: "delete.cut"
    });
  };

  handlers.focus = handlers.blur = function (view) {
    setTimeout(function () {
      if (view.hasFocus != view.inputState.notifiedFocused) view.update([]);
    }, 10);
  };

  handlers.beforeprint = function (view) {
    view.viewState.printing = true;
    view.requestMeasure();
    setTimeout(function () {
      view.viewState.printing = false;
      view.requestMeasure();
    }, 2e3);
  };

  function forceClearComposition(view, rapid) {
    if (view.docView.compositionDeco.size) {
      view.inputState.rapidCompositionStart = rapid;

      try {
        view.update([]);
      } finally {
        view.inputState.rapidCompositionStart = false;
      }
    }
  }

  handlers.compositionstart = handlers.compositionupdate = function (view) {
    if (view.inputState.compositionFirstChange == null) view.inputState.compositionFirstChange = true;

    if (view.inputState.composing < 0) {
      if (view.docView.compositionDeco.size) {
        view.observer.flush();
        forceClearComposition(view, true);
      }

      view.inputState.composing = 0;
    }
  };

  handlers.compositionend = function (view) {
    view.inputState.composing = -1;
    view.inputState.compositionEndedAt = Date.now();
    view.inputState.compositionFirstChange = null;
    setTimeout(function () {
      if (view.inputState.composing < 0) forceClearComposition(view, false);
    }, 50);
  };

  handlers.contextmenu = function (view) {
    view.inputState.lastContextMenu = Date.now();
  };

  handlers.beforeinput = function (view, event) {
    var _a;

    var pending;

    if (browser.chrome && browser.android && (pending = PendingKeys.find(function (key) {
      return key.inputType == event.inputType;
    }))) {
      view.inputState.setPendingAndroidKey(view, pending);

      if (pending.key == "Backspace" || pending.key == "Delete") {
        var startViewHeight = ((_a = window.visualViewport) === null || _a === void 0 ? void 0 : _a.height) || 0;
        setTimeout(function () {
          var _a2;

          if ((((_a2 = window.visualViewport) === null || _a2 === void 0 ? void 0 : _a2.height) || 0) > startViewHeight + 10 && view.hasFocus) {
            view.contentDOM.blur();
            view.focus();
          }
        }, 100);
      }
    }
  };

  var wrappingWhiteSpace = ["pre-wrap", "normal", "pre-line"];

  var HeightOracle = /*#__PURE__*/function () {
    function HeightOracle() {
      _classCallCheck(this, HeightOracle);

      this.doc = Text.empty;
      this.lineWrapping = false;
      this.direction = Direction.LTR;
      this.heightSamples = {};
      this.lineHeight = 14;
      this.charWidth = 7;
      this.lineLength = 30;
      this.heightChanged = false;
    }

    _createClass(HeightOracle, [{
      key: "heightForGap",
      value: function heightForGap(from, to) {
        var lines = this.doc.lineAt(to).number - this.doc.lineAt(from).number + 1;
        if (this.lineWrapping) lines += Math.ceil((to - from - lines * this.lineLength * 0.5) / this.lineLength);
        return this.lineHeight * lines;
      }
    }, {
      key: "heightForLine",
      value: function heightForLine(length) {
        if (!this.lineWrapping) return this.lineHeight;
        var lines = 1 + Math.max(0, Math.ceil((length - this.lineLength) / (this.lineLength - 5)));
        return lines * this.lineHeight;
      }
    }, {
      key: "setDoc",
      value: function setDoc(doc2) {
        this.doc = doc2;
        return this;
      }
    }, {
      key: "mustRefresh",
      value: function mustRefresh(lineHeights, whiteSpace, direction) {
        var newHeight = false;

        for (var _i81 = 0; _i81 < lineHeights.length; _i81++) {
          var h = lineHeights[_i81];

          if (h < 0) {
            _i81++;
          } else if (!this.heightSamples[Math.floor(h * 10)]) {
            newHeight = true;
            this.heightSamples[Math.floor(h * 10)] = true;
          }
        }

        return newHeight || wrappingWhiteSpace.indexOf(whiteSpace) > -1 != this.lineWrapping || this.direction != direction;
      }
    }, {
      key: "refresh",
      value: function refresh(whiteSpace, direction, lineHeight, charWidth, lineLength, knownHeights) {
        var lineWrapping = wrappingWhiteSpace.indexOf(whiteSpace) > -1;
        var changed = Math.round(lineHeight) != Math.round(this.lineHeight) || this.lineWrapping != lineWrapping || this.direction != direction;
        this.lineWrapping = lineWrapping;
        this.direction = direction;
        this.lineHeight = lineHeight;
        this.charWidth = charWidth;
        this.lineLength = lineLength;

        if (changed) {
          this.heightSamples = {};

          for (var _i82 = 0; _i82 < knownHeights.length; _i82++) {
            var h = knownHeights[_i82];
            if (h < 0) _i82++;else this.heightSamples[Math.floor(h * 10)] = true;
          }
        }

        return changed;
      }
    }]);

    return HeightOracle;
  }();

  var MeasuredHeights = /*#__PURE__*/function () {
    function MeasuredHeights(from, heights) {
      _classCallCheck(this, MeasuredHeights);

      this.from = from;
      this.heights = heights;
      this.index = 0;
    }

    _createClass(MeasuredHeights, [{
      key: "more",
      get: function get() {
        return this.index < this.heights.length;
      }
    }]);

    return MeasuredHeights;
  }();

  var BlockInfo = /*#__PURE__*/function () {
    function BlockInfo(from, length, top2, height, type) {
      _classCallCheck(this, BlockInfo);

      this.from = from;
      this.length = length;
      this.top = top2;
      this.height = height;
      this.type = type;
    }

    _createClass(BlockInfo, [{
      key: "to",
      get: function get() {
        return this.from + this.length;
      }
    }, {
      key: "bottom",
      get: function get() {
        return this.top + this.height;
      }
    }, {
      key: "join",
      value: function join(other) {
        var detail = (Array.isArray(this.type) ? this.type : [this]).concat(Array.isArray(other.type) ? other.type : [other]);
        return new BlockInfo(this.from, this.length + other.length, this.top, this.height + other.height, detail);
      }
    }]);

    return BlockInfo;
  }();

  var QueryType = /* @__PURE__ */function (QueryType2) {
    QueryType2[QueryType2["ByPos"] = 0] = "ByPos";
    QueryType2[QueryType2["ByHeight"] = 1] = "ByHeight";
    QueryType2[QueryType2["ByPosNoHeight"] = 2] = "ByPosNoHeight";
    return QueryType2;
  }(QueryType || (QueryType = {}));

  var Epsilon = 1e-4;

  var HeightMap = /*#__PURE__*/function () {
    function HeightMap(length, height) {
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

      _classCallCheck(this, HeightMap);

      this.length = length;
      this.height = height;
      this.flags = flags;
    }

    _createClass(HeightMap, [{
      key: "outdated",
      get: function get() {
        return (this.flags & 2) > 0;
      },
      set: function set(value) {
        this.flags = (value ? 2 : 0) | this.flags & ~2;
      }
    }, {
      key: "setHeight",
      value: function setHeight(oracle, height) {
        if (this.height != height) {
          if (Math.abs(this.height - height) > Epsilon) oracle.heightChanged = true;
          this.height = height;
        }
      }
    }, {
      key: "replace",
      value: function replace(_from, _to, nodes) {
        return HeightMap.of(nodes);
      }
    }, {
      key: "decomposeLeft",
      value: function decomposeLeft(_to, result) {
        result.push(this);
      }
    }, {
      key: "decomposeRight",
      value: function decomposeRight(_from, result) {
        result.push(this);
      }
    }, {
      key: "applyChanges",
      value: function applyChanges(decorations2, oldDoc, oracle, changes) {
        var me = this;

        for (var _i83 = changes.length - 1; _i83 >= 0; _i83--) {
          var _changes$_i = changes[_i83],
              fromA = _changes$_i.fromA,
              toA = _changes$_i.toA,
              fromB = _changes$_i.fromB,
              toB = _changes$_i.toB;
          var start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
          var end = start.to >= toA ? start : me.lineAt(toA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
          toB += end.to - toA;
          toA = end.to;

          while (_i83 > 0 && start.from <= changes[_i83 - 1].toA) {
            fromA = changes[_i83 - 1].fromA;
            fromB = changes[_i83 - 1].fromB;
            _i83--;
            if (fromA < start.from) start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
          }

          fromB += start.from - fromA;
          fromA = start.from;
          var nodes = NodeBuilder.build(oracle, decorations2, fromB, toB);
          me = me.replace(fromA, toA, nodes);
        }

        return me.updateHeight(oracle, 0);
      }
    }], [{
      key: "empty",
      value: function empty() {
        return new HeightMapText(0, 0);
      }
    }, {
      key: "of",
      value: function of(nodes) {
        if (nodes.length == 1) return nodes[0];
        var i = 0,
            j = nodes.length,
            before = 0,
            after = 0;

        for (;;) {
          if (i == j) {
            if (before > after * 2) {
              var split = nodes[i - 1];
              if (split["break"]) nodes.splice(--i, 1, split.left, null, split.right);else nodes.splice(--i, 1, split.left, split.right);
              j += 1 + split["break"];
              before -= split.size;
            } else if (after > before * 2) {
              var _split = nodes[j];
              if (_split["break"]) nodes.splice(j, 1, _split.left, null, _split.right);else nodes.splice(j, 1, _split.left, _split.right);
              j += 2 + _split["break"];
              after -= _split.size;
            } else {
              break;
            }
          } else if (before < after) {
            var next = nodes[i++];
            if (next) before += next.size;
          } else {
            var _next2 = nodes[--j];
            if (_next2) after += _next2.size;
          }
        }

        var brk = 0;

        if (nodes[i - 1] == null) {
          brk = 1;
          i--;
        } else if (nodes[i] == null) {
          brk = 1;
          j++;
        }

        return new HeightMapBranch(HeightMap.of(nodes.slice(0, i)), brk, HeightMap.of(nodes.slice(j)));
      }
    }]);

    return HeightMap;
  }();

  HeightMap.prototype.size = 1;

  var HeightMapBlock = /*#__PURE__*/function (_HeightMap) {
    _inherits(HeightMapBlock, _HeightMap);

    var _super20 = _createSuper(HeightMapBlock);

    function HeightMapBlock(length, height, type) {
      var _this29;

      _classCallCheck(this, HeightMapBlock);

      _this29 = _super20.call(this, length, height);
      _this29.type = type;
      return _this29;
    }

    _createClass(HeightMapBlock, [{
      key: "blockAt",
      value: function blockAt(_height, _doc, top2, offset) {
        return new BlockInfo(offset, this.length, top2, this.height, this.type);
      }
    }, {
      key: "lineAt",
      value: function lineAt(_value, _type, doc2, top2, offset) {
        return this.blockAt(0, doc2, top2, offset);
      }
    }, {
      key: "forEachLine",
      value: function forEachLine(_from, _to, doc2, top2, offset, f) {
        f(this.blockAt(0, doc2, top2, offset));
      }
    }, {
      key: "updateHeight",
      value: function updateHeight(oracle) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var _force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var measured = arguments.length > 3 ? arguments[3] : undefined;
        if (measured && measured.from <= offset && measured.more) this.setHeight(oracle, measured.heights[measured.index++]);
        this.outdated = false;
        return this;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "block(".concat(this.length, ")");
      }
    }]);

    return HeightMapBlock;
  }(HeightMap);

  var HeightMapText = /*#__PURE__*/function (_HeightMapBlock) {
    _inherits(HeightMapText, _HeightMapBlock);

    var _super21 = _createSuper(HeightMapText);

    function HeightMapText(length, height) {
      var _this30;

      _classCallCheck(this, HeightMapText);

      _this30 = _super21.call(this, length, height, BlockType.Text);
      _this30.collapsed = 0;
      _this30.widgetHeight = 0;
      return _this30;
    }

    _createClass(HeightMapText, [{
      key: "replace",
      value: function replace(_from, _to, nodes) {
        var node = nodes[0];

        if (nodes.length == 1 && (node instanceof HeightMapText || node instanceof HeightMapGap && node.flags & 4) && Math.abs(this.length - node.length) < 10) {
          if (node instanceof HeightMapGap) node = new HeightMapText(node.length, this.height);else node.height = this.height;
          if (!this.outdated) node.outdated = false;
          return node;
        } else {
          return HeightMap.of(nodes);
        }
      }
    }, {
      key: "updateHeight",
      value: function updateHeight(oracle) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var measured = arguments.length > 3 ? arguments[3] : undefined;
        if (measured && measured.from <= offset && measured.more) this.setHeight(oracle, measured.heights[measured.index++]);else if (force || this.outdated) this.setHeight(oracle, Math.max(this.widgetHeight, oracle.heightForLine(this.length - this.collapsed)));
        this.outdated = false;
        return this;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "line(".concat(this.length).concat(this.collapsed ? -this.collapsed : "").concat(this.widgetHeight ? ":" + this.widgetHeight : "", ")");
      }
    }]);

    return HeightMapText;
  }(HeightMapBlock);

  var HeightMapGap = /*#__PURE__*/function (_HeightMap2) {
    _inherits(HeightMapGap, _HeightMap2);

    var _super22 = _createSuper(HeightMapGap);

    function HeightMapGap(length) {
      _classCallCheck(this, HeightMapGap);

      return _super22.call(this, length, 0);
    }

    _createClass(HeightMapGap, [{
      key: "lines",
      value: function lines(doc2, offset) {
        var firstLine = doc2.lineAt(offset).number,
            lastLine = doc2.lineAt(offset + this.length).number;
        return {
          firstLine: firstLine,
          lastLine: lastLine,
          lineHeight: this.height / (lastLine - firstLine + 1)
        };
      }
    }, {
      key: "blockAt",
      value: function blockAt(height, doc2, top2, offset) {
        var _this$lines = this.lines(doc2, offset),
            firstLine = _this$lines.firstLine,
            lastLine = _this$lines.lastLine,
            lineHeight = _this$lines.lineHeight;

        var line = Math.max(0, Math.min(lastLine - firstLine, Math.floor((height - top2) / lineHeight)));

        var _doc2$line = doc2.line(firstLine + line),
            from = _doc2$line.from,
            length = _doc2$line.length;

        return new BlockInfo(from, length, top2 + lineHeight * line, lineHeight, BlockType.Text);
      }
    }, {
      key: "lineAt",
      value: function lineAt(value, type, doc2, top2, offset) {
        if (type == QueryType.ByHeight) return this.blockAt(value, doc2, top2, offset);

        if (type == QueryType.ByPosNoHeight) {
          var _doc2$lineAt = doc2.lineAt(value),
              from2 = _doc2$lineAt.from,
              to = _doc2$lineAt.to;

          return new BlockInfo(from2, to - from2, 0, 0, BlockType.Text);
        }

        var _this$lines2 = this.lines(doc2, offset),
            firstLine = _this$lines2.firstLine,
            lineHeight = _this$lines2.lineHeight;

        var _doc2$lineAt2 = doc2.lineAt(value),
            from = _doc2$lineAt2.from,
            length = _doc2$lineAt2.length,
            number = _doc2$lineAt2.number;

        return new BlockInfo(from, length, top2 + lineHeight * (number - firstLine), lineHeight, BlockType.Text);
      }
    }, {
      key: "forEachLine",
      value: function forEachLine(from, to, doc2, top2, offset, f) {
        var _this$lines3 = this.lines(doc2, offset),
            firstLine = _this$lines3.firstLine,
            lineHeight = _this$lines3.lineHeight;

        for (var pos = Math.max(from, offset), end = Math.min(offset + this.length, to); pos <= end;) {
          var line = doc2.lineAt(pos);
          if (pos == from) top2 += lineHeight * (line.number - firstLine);
          f(new BlockInfo(line.from, line.length, top2, lineHeight, BlockType.Text));
          top2 += lineHeight;
          pos = line.to + 1;
        }
      }
    }, {
      key: "replace",
      value: function replace(from, to, nodes) {
        var after = this.length - to;

        if (after > 0) {
          var last = nodes[nodes.length - 1];
          if (last instanceof HeightMapGap) nodes[nodes.length - 1] = new HeightMapGap(last.length + after);else nodes.push(null, new HeightMapGap(after - 1));
        }

        if (from > 0) {
          var first = nodes[0];
          if (first instanceof HeightMapGap) nodes[0] = new HeightMapGap(from + first.length);else nodes.unshift(new HeightMapGap(from - 1), null);
        }

        return HeightMap.of(nodes);
      }
    }, {
      key: "decomposeLeft",
      value: function decomposeLeft(to, result) {
        result.push(new HeightMapGap(to - 1), null);
      }
    }, {
      key: "decomposeRight",
      value: function decomposeRight(from, result) {
        result.push(null, new HeightMapGap(this.length - from - 1));
      }
    }, {
      key: "updateHeight",
      value: function updateHeight(oracle) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var measured = arguments.length > 3 ? arguments[3] : undefined;
        var end = offset + this.length;

        if (measured && measured.from <= offset + this.length && measured.more) {
          var nodes = [],
              pos = Math.max(offset, measured.from);
          if (measured.from > offset) nodes.push(new HeightMapGap(measured.from - offset - 1).updateHeight(oracle, offset));

          while (pos <= end && measured.more) {
            var len = oracle.doc.lineAt(pos).length;
            if (nodes.length) nodes.push(null);
            var line = new HeightMapText(len, measured.heights[measured.index++]);
            line.outdated = false;
            nodes.push(line);
            pos += len + 1;
          }

          if (pos <= end) nodes.push(null, new HeightMapGap(end - pos).updateHeight(oracle, pos));
          oracle.heightChanged = true;
          return HeightMap.of(nodes);
        } else if (force || this.outdated) {
          this.setHeight(oracle, oracle.heightForGap(offset, offset + this.length));
          this.outdated = false;
        }

        return this;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "gap(".concat(this.length, ")");
      }
    }]);

    return HeightMapGap;
  }(HeightMap);

  var HeightMapBranch = /*#__PURE__*/function (_HeightMap3) {
    _inherits(HeightMapBranch, _HeightMap3);

    var _super23 = _createSuper(HeightMapBranch);

    function HeightMapBranch(left, brk, right) {
      var _this31;

      _classCallCheck(this, HeightMapBranch);

      _this31 = _super23.call(this, left.length + brk + right.length, left.height + right.height, brk | (left.outdated || right.outdated ? 2 : 0));
      _this31.left = left;
      _this31.right = right;
      _this31.size = left.size + right.size;
      return _this31;
    }

    _createClass(HeightMapBranch, [{
      key: "break",
      get: function get() {
        return this.flags & 1;
      }
    }, {
      key: "blockAt",
      value: function blockAt(height, doc2, top2, offset) {
        var mid = top2 + this.left.height;
        return height < mid || this.right.height == 0 ? this.left.blockAt(height, doc2, top2, offset) : this.right.blockAt(height, doc2, mid, offset + this.left.length + this["break"]);
      }
    }, {
      key: "lineAt",
      value: function lineAt(value, type, doc2, top2, offset) {
        var rightTop = top2 + this.left.height,
            rightOffset = offset + this.left.length + this["break"];
        var left = type == QueryType.ByHeight ? value < rightTop || this.right.height == 0 : value < rightOffset;
        var base2 = left ? this.left.lineAt(value, type, doc2, top2, offset) : this.right.lineAt(value, type, doc2, rightTop, rightOffset);
        if (this["break"] || (left ? base2.to < rightOffset : base2.from > rightOffset)) return base2;
        var subQuery = type == QueryType.ByPosNoHeight ? QueryType.ByPosNoHeight : QueryType.ByPos;
        if (left) return base2.join(this.right.lineAt(rightOffset, subQuery, doc2, rightTop, rightOffset));else return this.left.lineAt(rightOffset, subQuery, doc2, top2, offset).join(base2);
      }
    }, {
      key: "forEachLine",
      value: function forEachLine(from, to, doc2, top2, offset, f) {
        var rightTop = top2 + this.left.height,
            rightOffset = offset + this.left.length + this["break"];

        if (this["break"]) {
          if (from < rightOffset) this.left.forEachLine(from, to, doc2, top2, offset, f);
          if (to >= rightOffset) this.right.forEachLine(from, to, doc2, rightTop, rightOffset, f);
        } else {
          var mid = this.lineAt(rightOffset, QueryType.ByPos, doc2, top2, offset);
          if (from < mid.from) this.left.forEachLine(from, mid.from - 1, doc2, top2, offset, f);
          if (mid.to >= from && mid.from <= to) f(mid);
          if (to > mid.to) this.right.forEachLine(mid.to + 1, to, doc2, rightTop, rightOffset, f);
        }
      }
    }, {
      key: "replace",
      value: function replace(from, to, nodes) {
        var rightStart = this.left.length + this["break"];
        if (to < rightStart) return this.balanced(this.left.replace(from, to, nodes), this.right);
        if (from > this.left.length) return this.balanced(this.left, this.right.replace(from - rightStart, to - rightStart, nodes));
        var result = [];
        if (from > 0) this.decomposeLeft(from, result);
        var left = result.length;

        var _iterator52 = _createForOfIteratorHelper(nodes),
            _step52;

        try {
          for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
            var node = _step52.value;
            result.push(node);
          }
        } catch (err) {
          _iterator52.e(err);
        } finally {
          _iterator52.f();
        }

        if (from > 0) mergeGaps(result, left - 1);

        if (to < this.length) {
          var right = result.length;
          this.decomposeRight(to, result);
          mergeGaps(result, right);
        }

        return HeightMap.of(result);
      }
    }, {
      key: "decomposeLeft",
      value: function decomposeLeft(to, result) {
        var left = this.left.length;
        if (to <= left) return this.left.decomposeLeft(to, result);
        result.push(this.left);

        if (this["break"]) {
          left++;
          if (to >= left) result.push(null);
        }

        if (to > left) this.right.decomposeLeft(to - left, result);
      }
    }, {
      key: "decomposeRight",
      value: function decomposeRight(from, result) {
        var left = this.left.length,
            right = left + this["break"];
        if (from >= right) return this.right.decomposeRight(from - right, result);
        if (from < left) this.left.decomposeRight(from, result);
        if (this["break"] && from < right) result.push(null);
        result.push(this.right);
      }
    }, {
      key: "balanced",
      value: function balanced(left, right) {
        if (left.size > 2 * right.size || right.size > 2 * left.size) return HeightMap.of(this["break"] ? [left, null, right] : [left, right]);
        this.left = left;
        this.right = right;
        this.height = left.height + right.height;
        this.outdated = left.outdated || right.outdated;
        this.size = left.size + right.size;
        this.length = left.length + this["break"] + right.length;
        return this;
      }
    }, {
      key: "updateHeight",
      value: function updateHeight(oracle) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var measured = arguments.length > 3 ? arguments[3] : undefined;
        var left = this.left,
            right = this.right,
            rightStart = offset + left.length + this["break"],
            rebalance = null;
        if (measured && measured.from <= offset + left.length && measured.more) rebalance = left = left.updateHeight(oracle, offset, force, measured);else left.updateHeight(oracle, offset, force);
        if (measured && measured.from <= rightStart + right.length && measured.more) rebalance = right = right.updateHeight(oracle, rightStart, force, measured);else right.updateHeight(oracle, rightStart, force);
        if (rebalance) return this.balanced(left, right);
        this.height = this.left.height + this.right.height;
        this.outdated = false;
        return this;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.left + (this["break"] ? " " : "-") + this.right;
      }
    }]);

    return HeightMapBranch;
  }(HeightMap);

  function mergeGaps(nodes, around) {
    var before, after;
    if (nodes[around] == null && (before = nodes[around - 1]) instanceof HeightMapGap && (after = nodes[around + 1]) instanceof HeightMapGap) nodes.splice(around - 1, 3, new HeightMapGap(before.length + 1 + after.length));
  }

  var relevantWidgetHeight = 5;

  var NodeBuilder = /*#__PURE__*/function () {
    function NodeBuilder(pos, oracle) {
      _classCallCheck(this, NodeBuilder);

      this.pos = pos;
      this.oracle = oracle;
      this.nodes = [];
      this.lineStart = -1;
      this.lineEnd = -1;
      this.covering = null;
      this.writtenTo = pos;
    }

    _createClass(NodeBuilder, [{
      key: "isCovered",
      get: function get() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
      }
    }, {
      key: "span",
      value: function span(_from, to) {
        if (this.lineStart > -1) {
          var end = Math.min(to, this.lineEnd),
              last = this.nodes[this.nodes.length - 1];
          if (last instanceof HeightMapText) last.length += end - this.pos;else if (end > this.pos || !this.isCovered) this.nodes.push(new HeightMapText(end - this.pos, -1));
          this.writtenTo = end;

          if (to > end) {
            this.nodes.push(null);
            this.writtenTo++;
            this.lineStart = -1;
          }
        }

        this.pos = to;
      }
    }, {
      key: "point",
      value: function point(from, to, deco) {
        if (from < to || deco.heightRelevant) {
          var height = deco.widget ? Math.max(0, deco.widget.estimatedHeight) : 0;
          var len = to - from;

          if (deco.block) {
            this.addBlock(new HeightMapBlock(len, height, deco.type));
          } else if (len || height >= relevantWidgetHeight) {
            this.addLineDeco(height, len);
          }
        } else if (to > from) {
          this.span(from, to);
        }

        if (this.lineEnd > -1 && this.lineEnd < this.pos) this.lineEnd = this.oracle.doc.lineAt(this.pos).to;
      }
    }, {
      key: "enterLine",
      value: function enterLine() {
        if (this.lineStart > -1) return;

        var _this$oracle$doc$line = this.oracle.doc.lineAt(this.pos),
            from = _this$oracle$doc$line.from,
            to = _this$oracle$doc$line.to;

        this.lineStart = from;
        this.lineEnd = to;

        if (this.writtenTo < from) {
          if (this.writtenTo < from - 1 || this.nodes[this.nodes.length - 1] == null) this.nodes.push(this.blankContent(this.writtenTo, from - 1));
          this.nodes.push(null);
        }

        if (this.pos > from) this.nodes.push(new HeightMapText(this.pos - from, -1));
        this.writtenTo = this.pos;
      }
    }, {
      key: "blankContent",
      value: function blankContent(from, to) {
        var gap = new HeightMapGap(to - from);
        if (this.oracle.doc.lineAt(from).to == to) gap.flags |= 4;
        return gap;
      }
    }, {
      key: "ensureLine",
      value: function ensureLine() {
        this.enterLine();
        var last = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (last instanceof HeightMapText) return last;
        var line = new HeightMapText(0, -1);
        this.nodes.push(line);
        return line;
      }
    }, {
      key: "addBlock",
      value: function addBlock(block) {
        this.enterLine();
        if (block.type == BlockType.WidgetAfter && !this.isCovered) this.ensureLine();
        this.nodes.push(block);
        this.writtenTo = this.pos = this.pos + block.length;
        if (block.type != BlockType.WidgetBefore) this.covering = block;
      }
    }, {
      key: "addLineDeco",
      value: function addLineDeco(height, length) {
        var line = this.ensureLine();
        line.length += length;
        line.collapsed += length;
        line.widgetHeight = Math.max(line.widgetHeight, height);
        this.writtenTo = this.pos = this.pos + length;
      }
    }, {
      key: "finish",
      value: function finish(from) {
        var last = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
        if (this.lineStart > -1 && !(last instanceof HeightMapText) && !this.isCovered) this.nodes.push(new HeightMapText(0, -1));else if (this.writtenTo < this.pos || last == null) this.nodes.push(this.blankContent(this.writtenTo, this.pos));
        var pos = from;

        var _iterator53 = _createForOfIteratorHelper(this.nodes),
            _step53;

        try {
          for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
            var node = _step53.value;
            if (node instanceof HeightMapText) node.updateHeight(this.oracle, pos);
            pos += node ? node.length : 1;
          }
        } catch (err) {
          _iterator53.e(err);
        } finally {
          _iterator53.f();
        }

        return this.nodes;
      }
    }], [{
      key: "build",
      value: function build(oracle, decorations2, from, to) {
        var builder = new NodeBuilder(from, oracle);
        RangeSet.spans(decorations2, from, to, builder, 0);
        return builder.finish(from);
      }
    }]);

    return NodeBuilder;
  }();

  function heightRelevantDecoChanges(a, b, diff) {
    var comp = new DecorationComparator();
    RangeSet.compare(a, b, diff, comp, 0);
    return comp.changes;
  }

  var DecorationComparator = /*#__PURE__*/function () {
    function DecorationComparator() {
      _classCallCheck(this, DecorationComparator);

      this.changes = [];
    }

    _createClass(DecorationComparator, [{
      key: "compareRange",
      value: function compareRange() {}
    }, {
      key: "comparePoint",
      value: function comparePoint(from, to, a, b) {
        if (from < to || a && a.heightRelevant || b && b.heightRelevant) addRange(from, to, this.changes, 5);
      }
    }]);

    return DecorationComparator;
  }();

  function visiblePixelRange(dom, paddingTop) {
    var rect = dom.getBoundingClientRect();
    var left = Math.max(0, rect.left),
        right = Math.min(innerWidth, rect.right);
    var top2 = Math.max(0, rect.top),
        bottom = Math.min(innerHeight, rect.bottom);
    var body = dom.ownerDocument.body;

    for (var parent = dom.parentNode; parent && parent != body;) {
      if (parent.nodeType == 1) {
        var elt = parent;
        var style = window.getComputedStyle(elt);

        if ((elt.scrollHeight > elt.clientHeight || elt.scrollWidth > elt.clientWidth) && style.overflow != "visible") {
          var parentRect = elt.getBoundingClientRect();
          left = Math.max(left, parentRect.left);
          right = Math.min(right, parentRect.right);
          top2 = Math.max(top2, parentRect.top);
          bottom = Math.min(bottom, parentRect.bottom);
        }

        parent = style.position == "absolute" || style.position == "fixed" ? elt.offsetParent : elt.parentNode;
      } else if (parent.nodeType == 11) {
        parent = parent.host;
      } else {
        break;
      }
    }

    return {
      left: left - rect.left,
      right: right - rect.left,
      top: top2 - (rect.top + paddingTop),
      bottom: bottom - (rect.top + paddingTop)
    };
  }

  var LineGap = /*#__PURE__*/function () {
    function LineGap(from, to, size) {
      _classCallCheck(this, LineGap);

      this.from = from;
      this.to = to;
      this.size = size;
    }

    _createClass(LineGap, [{
      key: "draw",
      value: function draw(wrapping) {
        return Decoration.replace({
          widget: new LineGapWidget(this.size, wrapping)
        }).range(this.from, this.to);
      }
    }], [{
      key: "same",
      value: function same(a, b) {
        if (a.length != b.length) return false;

        for (var _i84 = 0; _i84 < a.length; _i84++) {
          var gA = a[_i84],
              gB = b[_i84];
          if (gA.from != gB.from || gA.to != gB.to || gA.size != gB.size) return false;
        }

        return true;
      }
    }]);

    return LineGap;
  }();

  var LineGapWidget = /*#__PURE__*/function (_WidgetType4) {
    _inherits(LineGapWidget, _WidgetType4);

    var _super24 = _createSuper(LineGapWidget);

    function LineGapWidget(size, vertical) {
      var _this32;

      _classCallCheck(this, LineGapWidget);

      _this32 = _super24.call(this);
      _this32.size = size;
      _this32.vertical = vertical;
      return _this32;
    }

    _createClass(LineGapWidget, [{
      key: "eq",
      value: function eq(other) {
        return other.size == this.size && other.vertical == this.vertical;
      }
    }, {
      key: "toDOM",
      value: function toDOM() {
        var elt = document.createElement("div");

        if (this.vertical) {
          elt.style.height = this.size + "px";
        } else {
          elt.style.width = this.size + "px";
          elt.style.height = "2px";
          elt.style.display = "inline-block";
        }

        return elt;
      }
    }, {
      key: "estimatedHeight",
      get: function get() {
        return this.vertical ? this.size : -1;
      }
    }]);

    return LineGapWidget;
  }(WidgetType);

  var ScrollTarget = /*#__PURE__*/function () {
    function ScrollTarget(range) {
      var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, ScrollTarget);

      this.range = range;
      this.center = center;
    }

    _createClass(ScrollTarget, [{
      key: "map",
      value: function map(changes) {
        return changes.empty ? this : new ScrollTarget(this.range.map(changes), this.center);
      }
    }]);

    return ScrollTarget;
  }();

  var ViewState = /*#__PURE__*/function () {
    function ViewState(state) {
      _classCallCheck(this, ViewState);

      this.state = state;
      this.pixelViewport = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: 0
      };
      this.inView = true;
      this.paddingTop = 0;
      this.paddingBottom = 0;
      this.contentWidth = 0;
      this.heightOracle = new HeightOracle();
      this.scaler = IdScaler;
      this.scrollTarget = null;
      this.printing = false;
      this.visibleRanges = [];
      this.mustEnforceCursorAssoc = false;
      this.heightMap = HeightMap.empty().applyChanges(state.facet(decorations), Text.empty, this.heightOracle.setDoc(state.doc), [new ChangedRange(0, 0, 0, state.doc.length)]);
      this.viewport = this.getViewport(0, null);
      this.updateForViewport();
      this.lineGaps = this.ensureLineGaps([]);
      this.lineGapDeco = Decoration.set(this.lineGaps.map(function (gap) {
        return gap.draw(false);
      }));
      this.computeVisibleRanges();
    }

    _createClass(ViewState, [{
      key: "updateForViewport",
      value: function updateForViewport() {
        var _this33 = this;

        var viewports = [this.viewport],
            main = this.state.selection.main;

        var _loop8 = function _loop8(_i85) {
          var pos = _i85 ? main.head : main.anchor;

          if (!viewports.some(function (_ref11) {
            var from = _ref11.from,
                to = _ref11.to;
            return pos >= from && pos <= to;
          })) {
            var _this33$lineAt = _this33.lineAt(pos, 0),
                from = _this33$lineAt.from,
                to = _this33$lineAt.to;

            viewports.push(new Viewport(from, to));
          }
        };

        for (var _i85 = 0; _i85 <= 1; _i85++) {
          _loop8(_i85);
        }

        this.viewports = viewports.sort(function (a, b) {
          return a.from - b.from;
        });
        this.scaler = this.heightMap.height <= 7e6 ? IdScaler : new BigScaler(this.heightOracle.doc, this.heightMap, this.viewports);
      }
    }, {
      key: "update",
      value: function update(_update5) {
        var scrollTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var prev = this.state;
        this.state = _update5.state;
        var newDeco = this.state.facet(decorations);
        var contentChanges = _update5.changedRanges;
        var heightChanges = ChangedRange.extendWithRanges(contentChanges, heightRelevantDecoChanges(_update5.startState.facet(decorations), newDeco, _update5 ? _update5.changes : ChangeSet.empty(this.state.doc.length)));
        var prevHeight = this.heightMap.height;
        this.heightMap = this.heightMap.applyChanges(newDeco, prev.doc, this.heightOracle.setDoc(this.state.doc), heightChanges);
        if (this.heightMap.height != prevHeight) _update5.flags |= 2;
        var viewport = heightChanges.length ? this.mapViewport(this.viewport, _update5.changes) : this.viewport;
        if (scrollTarget && (scrollTarget.range.head < viewport.from || scrollTarget.range.head > viewport.to) || !this.viewportIsAppropriate(viewport)) viewport = this.getViewport(0, scrollTarget);
        this.viewport = viewport;
        this.updateForViewport();
        if (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, _update5.changes)));
        _update5.flags |= this.computeVisibleRanges();
        if (scrollTarget) this.scrollTarget = scrollTarget;
        if (!this.mustEnforceCursorAssoc && _update5.selectionSet && _update5.view.lineWrapping && _update5.state.selection.main.empty && _update5.state.selection.main.assoc) this.mustEnforceCursorAssoc = true;
      }
    }, {
      key: "measure",
      value: function measure(docView, repeated) {
        var dom = docView.dom,
            whiteSpace = "",
            direction = Direction.LTR;
        var result = 0;

        if (!repeated) {
          var style = window.getComputedStyle(dom);
          whiteSpace = style.whiteSpace, direction = style.direction == "rtl" ? Direction.RTL : Direction.LTR;
          var paddingTop = parseInt(style.paddingTop) || 0,
              paddingBottom = parseInt(style.paddingBottom) || 0;

          if (this.paddingTop != paddingTop || this.paddingBottom != paddingBottom) {
            result |= 8;
            this.paddingTop = paddingTop;
            this.paddingBottom = paddingBottom;
          }
        }

        var pixelViewport = this.printing ? {
          top: -1e8,
          bottom: 1e8,
          left: -1e8,
          right: 1e8
        } : visiblePixelRange(dom, this.paddingTop);
        var dTop = pixelViewport.top - this.pixelViewport.top,
            dBottom = pixelViewport.bottom - this.pixelViewport.bottom;
        this.pixelViewport = pixelViewport;
        this.inView = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (!this.inView) return 0;
        var lineHeights = docView.measureVisibleLineHeights();
        var refresh = false,
            bias = 0,
            oracle = this.heightOracle;

        if (!repeated) {
          var contentWidth = docView.dom.clientWidth;

          if (oracle.mustRefresh(lineHeights, whiteSpace, direction) || oracle.lineWrapping && Math.abs(contentWidth - this.contentWidth) > oracle.charWidth) {
            var _docView$measureTextS = docView.measureTextSize(),
                lineHeight = _docView$measureTextS.lineHeight,
                charWidth = _docView$measureTextS.charWidth;

            refresh = oracle.refresh(whiteSpace, direction, lineHeight, charWidth, contentWidth / charWidth, lineHeights);

            if (refresh) {
              docView.minWidth = 0;
              result |= 8;
            }
          }

          if (this.contentWidth != contentWidth) {
            this.contentWidth = contentWidth;
            result |= 8;
          }

          if (dTop > 0 && dBottom > 0) bias = Math.max(dTop, dBottom);else if (dTop < 0 && dBottom < 0) bias = Math.min(dTop, dBottom);
        }

        oracle.heightChanged = false;
        this.heightMap = this.heightMap.updateHeight(oracle, 0, refresh, new MeasuredHeights(this.viewport.from, lineHeights));
        if (oracle.heightChanged) result |= 2;
        if (!this.viewportIsAppropriate(this.viewport, bias) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to)) this.viewport = this.getViewport(bias, this.scrollTarget);
        this.updateForViewport();
        if (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) this.updateLineGaps(this.ensureLineGaps(refresh ? [] : this.lineGaps));
        result |= this.computeVisibleRanges();

        if (this.mustEnforceCursorAssoc) {
          this.mustEnforceCursorAssoc = false;
          docView.enforceCursorAssoc();
        }

        return result;
      }
    }, {
      key: "visibleTop",
      get: function get() {
        return this.scaler.fromDOM(this.pixelViewport.top, 0);
      }
    }, {
      key: "visibleBottom",
      get: function get() {
        return this.scaler.fromDOM(this.pixelViewport.bottom, 0);
      }
    }, {
      key: "getViewport",
      value: function getViewport(bias, scrollTarget) {
        var marginTop = 0.5 - Math.max(-0.5, Math.min(0.5, bias / 1e3 / 2));
        var map = this.heightMap,
            doc2 = this.state.doc,
            visibleTop = this.visibleTop,
            visibleBottom = this.visibleBottom;
        var viewport = new Viewport(map.lineAt(visibleTop - marginTop * 1e3, QueryType.ByHeight, doc2, 0, 0).from, map.lineAt(visibleBottom + (1 - marginTop) * 1e3, QueryType.ByHeight, doc2, 0, 0).to);

        if (scrollTarget) {
          var head = scrollTarget.range.head,
              viewHeight = visibleBottom - visibleTop;

          if (head < viewport.from || head > viewport.to) {
            var block = map.lineAt(head, QueryType.ByPos, doc2, 0, 0),
                topPos;
            if (scrollTarget.center) topPos = (block.top + block.bottom) / 2 - viewHeight / 2;else if (head < viewport.from) topPos = block.top;else topPos = block.bottom - viewHeight;
            viewport = new Viewport(map.lineAt(topPos - 1e3 / 2, QueryType.ByHeight, doc2, 0, 0).from, map.lineAt(topPos + viewHeight + 1e3 / 2, QueryType.ByHeight, doc2, 0, 0).to);
          }
        }

        return viewport;
      }
    }, {
      key: "mapViewport",
      value: function mapViewport(viewport, changes) {
        var from = changes.mapPos(viewport.from, -1),
            to = changes.mapPos(viewport.to, 1);
        return new Viewport(this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0).to);
      }
    }, {
      key: "viewportIsAppropriate",
      value: function viewportIsAppropriate(_ref12) {
        var from = _ref12.from,
            to = _ref12.to;
        var bias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var _this$heightMap$lineA = this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0),
            top2 = _this$heightMap$lineA.top;

        var _this$heightMap$lineA2 = this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0),
            bottom = _this$heightMap$lineA2.bottom;

        var visibleTop = this.visibleTop,
            visibleBottom = this.visibleBottom;
        return (from == 0 || top2 <= visibleTop - Math.max(10, Math.min(-bias, 250))) && (to == this.state.doc.length || bottom >= visibleBottom + Math.max(10, Math.min(bias, 250))) && top2 > visibleTop - 2 * 1e3 && bottom < visibleBottom + 2 * 1e3;
      }
    }, {
      key: "mapLineGaps",
      value: function mapLineGaps(gaps, changes) {
        if (!gaps.length || changes.empty) return gaps;
        var mapped = [];

        var _iterator54 = _createForOfIteratorHelper(gaps),
            _step54;

        try {
          for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
            var gap = _step54.value;
            if (!changes.touchesRange(gap.from, gap.to)) mapped.push(new LineGap(changes.mapPos(gap.from), changes.mapPos(gap.to), gap.size));
          }
        } catch (err) {
          _iterator54.e(err);
        } finally {
          _iterator54.f();
        }

        return mapped;
      }
    }, {
      key: "ensureLineGaps",
      value: function ensureLineGaps(current) {
        var _this34 = this;

        var gaps = [];
        if (this.heightOracle.direction != Direction.LTR) return gaps;
        this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, function (line) {
          if (line.length < 4e3) return;
          var structure = lineStructure(line.from, line.to, _this34.state);
          if (structure.total < 4e3) return;
          var viewFrom, viewTo;

          if (_this34.heightOracle.lineWrapping) {
            var marginHeight = 2e3 / _this34.heightOracle.lineLength * _this34.heightOracle.lineHeight;
            viewFrom = findPosition(structure, (_this34.visibleTop - line.top - marginHeight) / line.height);
            viewTo = findPosition(structure, (_this34.visibleBottom - line.top + marginHeight) / line.height);
          } else {
            var totalWidth = structure.total * _this34.heightOracle.charWidth;
            var marginWidth = 2e3 * _this34.heightOracle.charWidth;
            viewFrom = findPosition(structure, (_this34.pixelViewport.left - marginWidth) / totalWidth);
            viewTo = findPosition(structure, (_this34.pixelViewport.right + marginWidth) / totalWidth);
          }

          var outside = [];
          if (viewFrom > line.from) outside.push({
            from: line.from,
            to: viewFrom
          });
          if (viewTo < line.to) outside.push({
            from: viewTo,
            to: line.to
          });
          var sel = _this34.state.selection.main;
          if (sel.from >= line.from && sel.from <= line.to) cutRange(outside, sel.from - 10, sel.from + 10);
          if (!sel.empty && sel.to >= line.from && sel.to <= line.to) cutRange(outside, sel.to - 10, sel.to + 10);

          var _loop9 = function _loop9() {
            var _outside$_i = _outside[_i86],
                from = _outside$_i.from,
                to = _outside$_i.to;

            if (to - from > 1e3) {
              gaps.push(find(current, function (gap) {
                return gap.from >= line.from && gap.to <= line.to && Math.abs(gap.from - from) < 1e3 && Math.abs(gap.to - to) < 1e3;
              }) || new LineGap(from, to, _this34.gapSize(line, from, to, structure)));
            }
          };

          for (var _i86 = 0, _outside = outside; _i86 < _outside.length; _i86++) {
            _loop9();
          }
        });
        return gaps;
      }
    }, {
      key: "gapSize",
      value: function gapSize(line, from, to, structure) {
        var fraction = findFraction(structure, to) - findFraction(structure, from);

        if (this.heightOracle.lineWrapping) {
          return line.height * fraction;
        } else {
          return structure.total * this.heightOracle.charWidth * fraction;
        }
      }
    }, {
      key: "updateLineGaps",
      value: function updateLineGaps(gaps) {
        var _this35 = this;

        if (!LineGap.same(gaps, this.lineGaps)) {
          this.lineGaps = gaps;
          this.lineGapDeco = Decoration.set(gaps.map(function (gap) {
            return gap.draw(_this35.heightOracle.lineWrapping);
          }));
        }
      }
    }, {
      key: "computeVisibleRanges",
      value: function computeVisibleRanges() {
        var deco = this.state.facet(decorations);
        if (this.lineGaps.length) deco = deco.concat(this.lineGapDeco);
        var ranges = [];
        RangeSet.spans(deco, this.viewport.from, this.viewport.to, {
          span: function span(from, to) {
            ranges.push({
              from: from,
              to: to
            });
          },
          point: function point() {}
        }, 20);
        var changed = ranges.length != this.visibleRanges.length || this.visibleRanges.some(function (r, i) {
          return r.from != ranges[i].from || r.to != ranges[i].to;
        });
        this.visibleRanges = ranges;
        return changed ? 4 : 0;
      }
    }, {
      key: "lineAt",
      value: function lineAt(pos, editorTop) {
        editorTop += this.paddingTop;
        return scaleBlock(this.heightMap.lineAt(pos, QueryType.ByPos, this.state.doc, editorTop, 0), this.scaler, editorTop);
      }
    }, {
      key: "lineAtHeight",
      value: function lineAtHeight(height, editorTop) {
        editorTop += this.paddingTop;
        return scaleBlock(this.heightMap.lineAt(this.scaler.fromDOM(height, editorTop), QueryType.ByHeight, this.state.doc, editorTop, 0), this.scaler, editorTop);
      }
    }, {
      key: "blockAtHeight",
      value: function blockAtHeight(height, editorTop) {
        editorTop += this.paddingTop;
        return scaleBlock(this.heightMap.blockAt(this.scaler.fromDOM(height, editorTop), this.state.doc, editorTop, 0), this.scaler, editorTop);
      }
    }, {
      key: "forEachLine",
      value: function forEachLine(from, to, f, editorTop) {
        var _this36 = this;

        editorTop += this.paddingTop;
        return this.heightMap.forEachLine(from, to, this.state.doc, editorTop, 0, this.scaler.scale == 1 ? f : function (b) {
          return f(scaleBlock(b, _this36.scaler, editorTop));
        });
      }
    }, {
      key: "contentHeight",
      get: function get() {
        return this.domHeight + this.paddingTop + this.paddingBottom;
      }
    }, {
      key: "domHeight",
      get: function get() {
        return this.scaler.toDOM(this.heightMap.height, this.paddingTop);
      }
    }]);

    return ViewState;
  }();

  var Viewport = /*#__PURE__*/_createClass(function Viewport(from, to) {
    _classCallCheck(this, Viewport);

    this.from = from;
    this.to = to;
  });

  function lineStructure(from, to, state) {
    var ranges = [],
        pos = from,
        total = 0;
    RangeSet.spans(state.facet(decorations), from, to, {
      span: function span() {},
      point: function point(from2, to2) {
        if (from2 > pos) {
          ranges.push({
            from: pos,
            to: from2
          });
          total += from2 - pos;
        }

        pos = to2;
      }
    }, 20);

    if (pos < to) {
      ranges.push({
        from: pos,
        to: to
      });
      total += to - pos;
    }

    return {
      total: total,
      ranges: ranges
    };
  }

  function findPosition(_ref13, ratio) {
    var total = _ref13.total,
        ranges = _ref13.ranges;
    if (ratio <= 0) return ranges[0].from;
    if (ratio >= 1) return ranges[ranges.length - 1].to;
    var dist = Math.floor(total * ratio);

    for (var _i87 = 0;; _i87++) {
      var _ranges$_i = ranges[_i87],
          from = _ranges$_i.from,
          to = _ranges$_i.to,
          size = to - from;
      if (dist <= size) return from + dist;
      dist -= size;
    }
  }

  function findFraction(structure, pos) {
    var counted = 0;

    var _iterator55 = _createForOfIteratorHelper(structure.ranges),
        _step55;

    try {
      for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
        var _step55$value = _step55.value,
            from = _step55$value.from,
            to = _step55$value.to;

        if (pos <= to) {
          counted += pos - from;
          break;
        }

        counted += to - from;
      }
    } catch (err) {
      _iterator55.e(err);
    } finally {
      _iterator55.f();
    }

    return counted / structure.total;
  }

  function cutRange(ranges, from, to) {
    for (var _i88 = 0; _i88 < ranges.length; _i88++) {
      var _r = ranges[_i88];

      if (_r.from < to && _r.to > from) {
        var pieces = [];
        if (_r.from < from) pieces.push({
          from: _r.from,
          to: from
        });
        if (_r.to > to) pieces.push({
          from: to,
          to: _r.to
        });
        ranges.splice.apply(ranges, [_i88, 1].concat(pieces));
        _i88 += pieces.length - 1;
      }
    }
  }

  function find(array, f) {
    var _iterator56 = _createForOfIteratorHelper(array),
        _step56;

    try {
      for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
        var val = _step56.value;
        if (f(val)) return val;
      }
    } catch (err) {
      _iterator56.e(err);
    } finally {
      _iterator56.f();
    }

    return void 0;
  }

  var IdScaler = {
    toDOM: function toDOM(n) {
      return n;
    },
    fromDOM: function fromDOM(n) {
      return n;
    },
    scale: 1
  };

  var BigScaler = /*#__PURE__*/function () {
    function BigScaler(doc2, heightMap, viewports) {
      _classCallCheck(this, BigScaler);

      var vpHeight = 0,
          base2 = 0,
          domBase = 0;
      this.viewports = viewports.map(function (_ref14) {
        var from = _ref14.from,
            to = _ref14.to;
        var top2 = heightMap.lineAt(from, QueryType.ByPos, doc2, 0, 0).top;
        var bottom = heightMap.lineAt(to, QueryType.ByPos, doc2, 0, 0).bottom;
        vpHeight += bottom - top2;
        return {
          from: from,
          to: to,
          top: top2,
          bottom: bottom,
          domTop: 0,
          domBottom: 0
        };
      });
      this.scale = (7e6 - vpHeight) / (heightMap.height - vpHeight);

      var _iterator57 = _createForOfIteratorHelper(this.viewports),
          _step57;

      try {
        for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
          var obj = _step57.value;
          obj.domTop = domBase + (obj.top - base2) * this.scale;
          domBase = obj.domBottom = obj.domTop + (obj.bottom - obj.top);
          base2 = obj.bottom;
        }
      } catch (err) {
        _iterator57.e(err);
      } finally {
        _iterator57.f();
      }
    }

    _createClass(BigScaler, [{
      key: "toDOM",
      value: function toDOM(n, top2) {
        n -= top2;

        for (var _i89 = 0, base2 = 0, domBase = 0;; _i89++) {
          var vp = _i89 < this.viewports.length ? this.viewports[_i89] : null;
          if (!vp || n < vp.top) return domBase + (n - base2) * this.scale + top2;
          if (n <= vp.bottom) return vp.domTop + (n - vp.top) + top2;
          base2 = vp.bottom;
          domBase = vp.domBottom;
        }
      }
    }, {
      key: "fromDOM",
      value: function fromDOM(n, top2) {
        n -= top2;

        for (var _i90 = 0, base2 = 0, domBase = 0;; _i90++) {
          var vp = _i90 < this.viewports.length ? this.viewports[_i90] : null;
          if (!vp || n < vp.domTop) return base2 + (n - domBase) / this.scale + top2;
          if (n <= vp.domBottom) return vp.top + (n - vp.domTop) + top2;
          base2 = vp.bottom;
          domBase = vp.domBottom;
        }
      }
    }]);

    return BigScaler;
  }();

  function scaleBlock(block, scaler, top2) {
    if (scaler.scale == 1) return block;
    var bTop = scaler.toDOM(block.top, top2),
        bBottom = scaler.toDOM(block.bottom, top2);
    return new BlockInfo(block.from, block.length, bTop, bBottom - bTop, Array.isArray(block.type) ? block.type.map(function (b) {
      return scaleBlock(b, scaler, top2);
    }) : block.type);
  }

  var _theme = /* @__PURE__ */Facet.define({
    combine: function combine(strs) {
      return strs.join(" ");
    }
  });

  var darkTheme = /* @__PURE__ */Facet.define({
    combine: function combine(values) {
      return values.indexOf(true) > -1;
    }
  });
  var baseThemeID = /* @__PURE__ */StyleModule.newName();
  var baseLightID = /* @__PURE__ */StyleModule.newName();
  var baseDarkID = /* @__PURE__ */StyleModule.newName();
  var lightDarkIDs = {
    "&light": "." + baseLightID,
    "&dark": "." + baseDarkID
  };

  function buildTheme(main, spec, scopes) {
    return new StyleModule(spec, {
      finish: function finish(sel) {
        return /&/.test(sel) ? sel.replace(/&\w*/, function (m) {
          if (m == "&") return main;
          if (!scopes || !scopes[m]) throw new RangeError("Unsupported selector: ".concat(m));
          return scopes[m];
        }) : main + " " + sel;
      }
    });
  }

  var baseTheme = /* @__PURE__ */buildTheme("." + baseThemeID, {
    "&.cm-editor": {
      position: "relative !important",
      boxSizing: "border-box",
      "&.cm-focused": {
        outline: "1px dotted #212121"
      },
      display: "flex !important",
      flexDirection: "column"
    },
    ".cm-scroller": {
      display: "flex !important",
      alignItems: "flex-start !important",
      fontFamily: "monospace",
      lineHeight: 1.4,
      height: "100%",
      overflowX: "auto",
      position: "relative",
      zIndex: 0
    },
    ".cm-content": {
      margin: 0,
      flexGrow: 2,
      minHeight: "100%",
      display: "block",
      whiteSpace: "pre",
      wordWrap: "normal",
      boxSizing: "border-box",
      padding: "4px 0",
      outline: "none",
      "&[contenteditable=true]": {
        WebkitUserModify: "read-write-plaintext-only"
      }
    },
    ".cm-lineWrapping": {
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      overflowWrap: "anywhere"
    },
    "&light .cm-content": {
      caretColor: "black"
    },
    "&dark .cm-content": {
      caretColor: "white"
    },
    ".cm-line": {
      display: "block",
      padding: "0 2px 0 4px"
    },
    ".cm-selectionLayer": {
      zIndex: -1,
      contain: "size style"
    },
    ".cm-selectionBackground": {
      position: "absolute"
    },
    "&light .cm-selectionBackground": {
      background: "#d9d9d9"
    },
    "&dark .cm-selectionBackground": {
      background: "#222"
    },
    "&light.cm-focused .cm-selectionBackground": {
      background: "#d7d4f0"
    },
    "&dark.cm-focused .cm-selectionBackground": {
      background: "#233"
    },
    ".cm-cursorLayer": {
      zIndex: 100,
      contain: "size style",
      pointerEvents: "none"
    },
    "&.cm-focused .cm-cursorLayer": {
      animation: "steps(1) cm-blink 1.2s infinite"
    },
    "@keyframes cm-blink": {
      "0%": {},
      "50%": {
        visibility: "hidden"
      },
      "100%": {}
    },
    "@keyframes cm-blink2": {
      "0%": {},
      "50%": {
        visibility: "hidden"
      },
      "100%": {}
    },
    ".cm-cursor": {
      position: "absolute",
      borderLeft: "1.2px solid black",
      marginLeft: "-0.6px",
      pointerEvents: "none",
      display: "none"
    },
    "&dark .cm-cursor": {
      borderLeftColor: "#444"
    },
    "&.cm-focused .cm-cursor": {
      display: "block"
    },
    "&light .cm-activeLine": {
      backgroundColor: "#f3f9ff"
    },
    "&dark .cm-activeLine": {
      backgroundColor: "#223039"
    },
    "&light .cm-specialChar": {
      color: "red"
    },
    "&dark .cm-specialChar": {
      color: "#f78"
    },
    ".cm-tab": {
      display: "inline-block",
      overflow: "hidden",
      verticalAlign: "bottom"
    },
    ".cm-placeholder": {
      color: "#888",
      display: "inline-block"
    },
    ".cm-button": {
      verticalAlign: "middle",
      color: "inherit",
      fontSize: "70%",
      padding: ".2em 1em",
      borderRadius: "3px"
    },
    "&light .cm-button": {
      backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
      border: "1px solid #888",
      "&:active": {
        backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
      }
    },
    "&dark .cm-button": {
      backgroundImage: "linear-gradient(#393939, #111)",
      border: "1px solid #888",
      "&:active": {
        backgroundImage: "linear-gradient(#111, #333)"
      }
    },
    ".cm-textfield": {
      verticalAlign: "middle",
      color: "inherit",
      fontSize: "70%",
      border: "1px solid silver",
      padding: ".2em .5em"
    },
    "&light .cm-textfield": {
      backgroundColor: "white"
    },
    "&dark .cm-textfield": {
      border: "1px solid #555",
      backgroundColor: "inherit"
    }
  }, lightDarkIDs);
  var observeOptions = {
    childList: true,
    characterData: true,
    subtree: true,
    attributes: true,
    characterDataOldValue: true
  };
  var useCharData = browser.ie && browser.ie_version <= 11;

  var DOMObserver = /*#__PURE__*/function () {
    function DOMObserver(view, onChange, onScrollChanged) {
      var _this37 = this;

      _classCallCheck(this, DOMObserver);

      this.view = view;
      this.onChange = onChange;
      this.onScrollChanged = onScrollChanged;
      this.active = false;
      this.ignoreSelection = new DOMSelection();
      this.delayedFlush = -1;
      this.queue = [];
      this.lastFlush = 0;
      this.scrollTargets = [];
      this.intersection = null;
      this.intersecting = false;
      this.gapIntersection = null;
      this.gaps = [];
      this._selectionRange = null;
      this.parentCheck = -1;
      this.dom = view.contentDOM;
      this.observer = new MutationObserver(function (mutations) {
        var _iterator58 = _createForOfIteratorHelper(mutations),
            _step58;

        try {
          for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
            var mut = _step58.value;

            _this37.queue.push(mut);
          }
        } catch (err) {
          _iterator58.e(err);
        } finally {
          _iterator58.f();
        }

        _this37._selectionRange = null;
        if ((browser.ie && browser.ie_version <= 11 || browser.ios && view.composing) && mutations.some(function (m) {
          return m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length;
        })) _this37.flushSoon();else _this37.flush();
      });
      if (useCharData) this.onCharData = function (event) {
        _this37.queue.push({
          target: event.target,
          type: "characterData",
          oldValue: event.prevValue
        });

        _this37.flushSoon();
      };
      this.onSelectionChange = this.onSelectionChange.bind(this);
      this.start();
      this.onScroll = this.onScroll.bind(this);
      window.addEventListener("scroll", this.onScroll);

      if (typeof IntersectionObserver == "function") {
        this.intersection = new IntersectionObserver(function (entries) {
          if (_this37.parentCheck < 0) _this37.parentCheck = setTimeout(_this37.listenForScroll.bind(_this37), 1e3);

          if (entries.length > 0 && entries[entries.length - 1].intersectionRatio > 0 != _this37.intersecting) {
            _this37.intersecting = !_this37.intersecting;
            if (_this37.intersecting != _this37.view.inView) _this37.onScrollChanged(document.createEvent("Event"));
          }
        }, {});
        this.intersection.observe(this.dom);
        this.gapIntersection = new IntersectionObserver(function (entries) {
          if (entries.length > 0 && entries[entries.length - 1].intersectionRatio > 0) _this37.onScrollChanged(document.createEvent("Event"));
        }, {});
      }

      this.listenForScroll();
    }

    _createClass(DOMObserver, [{
      key: "onScroll",
      value: function onScroll(e) {
        if (this.intersecting) this.flush();
        this.onScrollChanged(e);
      }
    }, {
      key: "updateGaps",
      value: function updateGaps(gaps) {
        if (this.gapIntersection && (gaps.length != this.gaps.length || this.gaps.some(function (g, i) {
          return g != gaps[i];
        }))) {
          this.gapIntersection.disconnect();

          var _iterator59 = _createForOfIteratorHelper(gaps),
              _step59;

          try {
            for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
              var gap = _step59.value;
              this.gapIntersection.observe(gap);
            }
          } catch (err) {
            _iterator59.e(err);
          } finally {
            _iterator59.f();
          }

          this.gaps = gaps;
        }
      }
    }, {
      key: "onSelectionChange",
      value: function onSelectionChange(event) {
        if (this.lastFlush < Date.now() - 50) this._selectionRange = null;
        var view = this.view,
            sel = this.selectionRange;
        if (view.state.facet(editable) ? view.root.activeElement != this.dom : !hasSelection(view.dom, sel)) return;
        var context = sel.anchorNode && view.docView.nearest(sel.anchorNode);
        if (context && context.ignoreEvent(event)) return;
        if (browser.ie && browser.ie_version <= 11 && !view.state.selection.main.empty && sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset)) this.flushSoon();else this.flush();
      }
    }, {
      key: "selectionRange",
      get: function get() {
        if (!this._selectionRange) {
          var root = this.view.root,
              sel = getSelection(root);
          if (browser.safari && root.nodeType == 11 && deepActiveElement() == this.view.contentDOM) sel = safariSelectionRangeHack(this.view) || sel;
          this._selectionRange = sel;
        }

        return this._selectionRange;
      }
    }, {
      key: "setSelectionRange",
      value: function setSelectionRange(anchor, head) {
        var _a;

        if (!((_a = this._selectionRange) === null || _a === void 0 ? void 0 : _a.type)) this._selectionRange = {
          anchorNode: anchor.node,
          anchorOffset: anchor.offset,
          focusNode: head.node,
          focusOffset: head.offset
        };
      }
    }, {
      key: "listenForScroll",
      value: function listenForScroll() {
        this.parentCheck = -1;
        var i = 0,
            changed = null;

        for (var dom = this.dom; dom;) {
          if (dom.nodeType == 1) {
            if (!changed && i < this.scrollTargets.length && this.scrollTargets[i] == dom) i++;else if (!changed) changed = this.scrollTargets.slice(0, i);
            if (changed) changed.push(dom);
            dom = dom.assignedSlot || dom.parentNode;
          } else if (dom.nodeType == 11) {
            dom = dom.host;
          } else {
            break;
          }
        }

        if (i < this.scrollTargets.length && !changed) changed = this.scrollTargets.slice(0, i);

        if (changed) {
          var _iterator60 = _createForOfIteratorHelper(this.scrollTargets),
              _step60;

          try {
            for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
              var _dom2 = _step60.value;

              _dom2.removeEventListener("scroll", this.onScroll);
            }
          } catch (err) {
            _iterator60.e(err);
          } finally {
            _iterator60.f();
          }

          var _iterator61 = _createForOfIteratorHelper(this.scrollTargets = changed),
              _step61;

          try {
            for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
              var _dom3 = _step61.value;

              _dom3.addEventListener("scroll", this.onScroll);
            }
          } catch (err) {
            _iterator61.e(err);
          } finally {
            _iterator61.f();
          }
        }
      }
    }, {
      key: "ignore",
      value: function ignore(f) {
        if (!this.active) return f();

        try {
          this.stop();
          return f();
        } finally {
          this.start();
          this.clear();
        }
      }
    }, {
      key: "start",
      value: function start() {
        if (this.active) return;
        this.observer.observe(this.dom, observeOptions);
        this.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
        if (useCharData) this.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
        this.active = true;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (!this.active) return;
        this.active = false;
        this.observer.disconnect();
        this.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
        if (useCharData) this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
      }
    }, {
      key: "clearSelection",
      value: function clearSelection() {
        this.ignoreSelection.set(this.selectionRange);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.observer.takeRecords();
        this.queue.length = 0;
        this.clearSelection();
      }
    }, {
      key: "flushSoon",
      value: function flushSoon() {
        var _this38 = this;

        if (this.delayedFlush < 0) this.delayedFlush = window.setTimeout(function () {
          _this38.delayedFlush = -1;

          _this38.flush();
        }, 20);
      }
    }, {
      key: "forceFlush",
      value: function forceFlush() {
        if (this.delayedFlush >= 0) {
          window.clearTimeout(this.delayedFlush);
          this.delayedFlush = -1;
          this.flush();
        }
      }
    }, {
      key: "processRecords",
      value: function processRecords() {
        var records = this.queue;

        var _iterator62 = _createForOfIteratorHelper(this.observer.takeRecords()),
            _step62;

        try {
          for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
            var mut = _step62.value;
            records.push(mut);
          }
        } catch (err) {
          _iterator62.e(err);
        } finally {
          _iterator62.f();
        }

        if (records.length) this.queue = [];
        var from = -1,
            to = -1,
            typeOver = false;

        var _iterator63 = _createForOfIteratorHelper(records),
            _step63;

        try {
          for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
            var record = _step63.value;
            var range = this.readMutation(record);
            if (!range) continue;
            if (range.typeOver) typeOver = true;

            if (from == -1) {
              from = range.from;
              to = range.to;
            } else {
              from = Math.min(range.from, from);
              to = Math.max(range.to, to);
            }
          }
        } catch (err) {
          _iterator63.e(err);
        } finally {
          _iterator63.f();
        }

        return {
          from: from,
          to: to,
          typeOver: typeOver
        };
      }
    }, {
      key: "flush",
      value: function flush() {
        if (this.delayedFlush >= 0 || this.view.inputState.pendingAndroidKey) return;
        this.lastFlush = Date.now();

        var _this$processRecords = this.processRecords(),
            from = _this$processRecords.from,
            to = _this$processRecords.to,
            typeOver = _this$processRecords.typeOver;

        var selection = this.selectionRange;
        var newSel = !this.ignoreSelection.eq(selection) && hasSelection(this.dom, selection);
        if (from < 0 && !newSel) return;
        var startState = this.view.state;
        this.onChange(from, to, typeOver);
        if (this.view.state == startState) this.view.docView.reset(newSel);
        this.clearSelection();
      }
    }, {
      key: "readMutation",
      value: function readMutation(rec) {
        var cView = this.view.docView.nearest(rec.target);
        if (!cView || cView.ignoreMutation(rec)) return null;
        cView.markDirty(rec.type == "attributes");
        if (rec.type == "attributes") cView.dirty |= 4;

        if (rec.type == "childList") {
          var childBefore = findChild(cView, rec.previousSibling || rec.target.previousSibling, -1);
          var childAfter = findChild(cView, rec.nextSibling || rec.target.nextSibling, 1);
          return {
            from: childBefore ? cView.posAfter(childBefore) : cView.posAtStart,
            to: childAfter ? cView.posBefore(childAfter) : cView.posAtEnd,
            typeOver: false
          };
        } else if (rec.type == "characterData") {
          return {
            from: cView.posAtStart,
            to: cView.posAtEnd,
            typeOver: rec.target.nodeValue == rec.oldValue
          };
        } else {
          return null;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.stop();
        if (this.intersection) this.intersection.disconnect();
        if (this.gapIntersection) this.gapIntersection.disconnect();

        var _iterator64 = _createForOfIteratorHelper(this.scrollTargets),
            _step64;

        try {
          for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
            var dom = _step64.value;
            dom.removeEventListener("scroll", this.onScroll);
          }
        } catch (err) {
          _iterator64.e(err);
        } finally {
          _iterator64.f();
        }

        window.removeEventListener("scroll", this.onScroll);
        clearTimeout(this.parentCheck);
      }
    }]);

    return DOMObserver;
  }();

  function findChild(cView, dom, dir) {
    while (dom) {
      var curView = ContentView.get(dom);
      if (curView && curView.parent == cView) return curView;
      var parent = dom.parentNode;
      dom = parent != cView.dom ? parent : dir > 0 ? dom.nextSibling : dom.previousSibling;
    }

    return null;
  }

  function safariSelectionRangeHack(view) {
    var found = null;

    function read(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      found = event.getTargetRanges()[0];
    }

    view.contentDOM.addEventListener("beforeinput", read, true);
    document.execCommand("indent");
    view.contentDOM.removeEventListener("beforeinput", read, true);
    if (!found) return null;
    var anchorNode = found.startContainer,
        anchorOffset = found.startOffset;
    var focusNode = found.endContainer,
        focusOffset = found.endOffset;
    var curAnchor = view.docView.domAtPos(view.state.selection.main.anchor);

    if (isEquivalentPosition(curAnchor.node, curAnchor.offset, focusNode, focusOffset)) {
      var _ref15 = [focusNode, focusOffset, anchorNode, anchorOffset];
      anchorNode = _ref15[0];
      anchorOffset = _ref15[1];
      focusNode = _ref15[2];
      focusOffset = _ref15[3];
    }

    return {
      anchorNode: anchorNode,
      anchorOffset: anchorOffset,
      focusNode: focusNode,
      focusOffset: focusOffset
    };
  }

  function applyDOMChange(view, start, end, typeOver) {
    var change, newSel;
    var sel = view.state.selection.main;

    if (start > -1) {
      var bounds = view.docView.domBoundsAround(start, end, 0);
      if (!bounds || view.state.readOnly) return;
      var from = bounds.from,
          to = bounds.to;
      var selPoints = view.docView.impreciseHead || view.docView.impreciseAnchor ? [] : selectionPoints(view);
      var reader = new DOMReader(selPoints, view);
      reader.readRange(bounds.startDOM, bounds.endDOM);
      newSel = selectionFromPoints(selPoints, from);
      var preferredPos = sel.from,
          preferredSide = null;

      if (view.inputState.lastKeyCode === 8 && view.inputState.lastKeyTime > Date.now() - 100 || browser.android && reader.text.length < to - from) {
        preferredPos = sel.to;
        preferredSide = "end";
      }

      var diff = findDiff(view.state.sliceDoc(from, to), reader.text, preferredPos - from, preferredSide);
      if (diff) change = {
        from: from + diff.from,
        to: from + diff.toA,
        insert: view.state.toText(reader.text.slice(diff.from, diff.toB))
      };
    } else if (view.hasFocus || !view.state.facet(editable)) {
      var domSel = view.observer.selectionRange;
      var _view$docView = view.docView,
          iHead = _view$docView.impreciseHead,
          iAnchor = _view$docView.impreciseAnchor;
      var head = iHead && iHead.node == domSel.focusNode && iHead.offset == domSel.focusOffset || !contains(view.contentDOM, domSel.focusNode) ? view.state.selection.main.head : view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
      var anchor = iAnchor && iAnchor.node == domSel.anchorNode && iAnchor.offset == domSel.anchorOffset || !contains(view.contentDOM, domSel.anchorNode) ? view.state.selection.main.anchor : view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);
      if (head != sel.head || anchor != sel.anchor) newSel = EditorSelection.single(anchor, head);
    }

    if (!change && !newSel) return;
    if (!change && typeOver && !sel.empty && newSel && newSel.main.empty) change = {
      from: sel.from,
      to: sel.to,
      insert: view.state.doc.slice(sel.from, sel.to)
    };else if (change && change.from >= sel.from && change.to <= sel.to && (change.from != sel.from || change.to != sel.to) && sel.to - sel.from - (change.to - change.from) <= 4) change = {
      from: sel.from,
      to: sel.to,
      insert: view.state.doc.slice(sel.from, change.from).append(change.insert).append(view.state.doc.slice(change.to, sel.to))
    };

    if (change) {
      var startState = view.state;
      if (browser.ios && view.inputState.flushIOSKey(view)) return;

      var _text4 = change.insert.toString();

      if (view.state.facet(inputHandler).some(function (h) {
        return h(view, change.from, change.to, _text4);
      })) return;
      if (view.inputState.composing >= 0) view.inputState.composing++;
      var tr;

      if (change.from >= sel.from && change.to <= sel.to && change.to - change.from >= (sel.to - sel.from) / 3 && (!newSel || newSel.main.empty && newSel.main.from == change.from + change.insert.length)) {
        var before = sel.from < change.from ? startState.sliceDoc(sel.from, change.from) : "";
        var after = sel.to > change.to ? startState.sliceDoc(change.to, sel.to) : "";
        tr = startState.replaceSelection(view.state.toText(before + change.insert.sliceString(0, void 0, view.state.lineBreak) + after));
      } else {
        var changes = startState.changes(change);
        tr = {
          changes: changes,
          selection: newSel && !startState.selection.main.eq(newSel.main) && newSel.main.to <= changes.newLength ? startState.selection.replaceRange(newSel.main) : void 0
        };
      }

      var userEvent = "input.type";

      if (view.composing) {
        userEvent += ".compose";

        if (view.inputState.compositionFirstChange) {
          userEvent += ".start";
          view.inputState.compositionFirstChange = false;
        }
      }

      view.dispatch(tr, {
        scrollIntoView: true,
        userEvent: userEvent
      });
    } else if (newSel && !newSel.main.eq(sel)) {
      var scrollIntoView = false,
          _userEvent = "select";

      if (view.inputState.lastSelectionTime > Date.now() - 50) {
        if (view.inputState.lastSelectionOrigin == "select") scrollIntoView = true;
        _userEvent = view.inputState.lastSelectionOrigin;
      }

      view.dispatch({
        selection: newSel,
        scrollIntoView: scrollIntoView,
        userEvent: _userEvent
      });
    }
  }

  function findDiff(a, b, preferredPos, preferredSide) {
    var minLen = Math.min(a.length, b.length);
    var from = 0;

    while (from < minLen && a.charCodeAt(from) == b.charCodeAt(from)) {
      from++;
    }

    if (from == minLen && a.length == b.length) return null;
    var toA = a.length,
        toB = b.length;

    while (toA > 0 && toB > 0 && a.charCodeAt(toA - 1) == b.charCodeAt(toB - 1)) {
      toA--;
      toB--;
    }

    if (preferredSide == "end") {
      var adjust = Math.max(0, from - Math.min(toA, toB));
      preferredPos -= toA + adjust - from;
    }

    if (toA < from && a.length < b.length) {
      var move = preferredPos <= from && preferredPos >= toA ? from - preferredPos : 0;
      from -= move;
      toB = from + (toB - toA);
      toA = from;
    } else if (toB < from) {
      var _move = preferredPos <= from && preferredPos >= toB ? from - preferredPos : 0;

      from -= _move;
      toA = from + (toA - toB);
      toB = from;
    }

    return {
      from: from,
      toA: toA,
      toB: toB
    };
  }

  var DOMReader = /*#__PURE__*/function () {
    function DOMReader(points, view) {
      _classCallCheck(this, DOMReader);

      this.points = points;
      this.view = view;
      this.text = "";
      this.lineBreak = view.state.lineBreak;
    }

    _createClass(DOMReader, [{
      key: "readRange",
      value: function readRange(start, end) {
        if (!start) return;
        var parent = start.parentNode;

        for (var cur = start;;) {
          this.findPointBefore(parent, cur);
          this.readNode(cur);
          var next = cur.nextSibling;
          if (next == end) break;
          var view = ContentView.get(cur),
              nextView = ContentView.get(next);
          if (view && nextView ? view.breakAfter : (view ? view.breakAfter : isBlockElement(cur)) || isBlockElement(next) && (cur.nodeName != "BR" || cur.cmIgnore)) this.text += this.lineBreak;
          cur = next;
        }

        this.findPointBefore(parent, end);
      }
    }, {
      key: "readNode",
      value: function readNode(node) {
        if (node.cmIgnore) return;
        var view = ContentView.get(node);
        var fromView = view && view.overrideDOMText;
        var text;
        if (fromView != null) text = fromView.sliceString(0, void 0, this.lineBreak);else if (node.nodeType == 3) text = node.nodeValue;else if (node.nodeName == "BR") text = node.nextSibling ? this.lineBreak : "";else if (node.nodeType == 1) this.readRange(node.firstChild, null);

        if (text != null) {
          this.findPointIn(node, text.length);
          this.text += text;
          if (browser.chrome && this.view.inputState.lastKeyCode == 13 && !node.nextSibling && /\n\n$/.test(this.text)) this.text = this.text.slice(0, -1);
        }
      }
    }, {
      key: "findPointBefore",
      value: function findPointBefore(node, next) {
        var _iterator65 = _createForOfIteratorHelper(this.points),
            _step65;

        try {
          for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
            var point = _step65.value;
            if (point.node == node && node.childNodes[point.offset] == next) point.pos = this.text.length;
          }
        } catch (err) {
          _iterator65.e(err);
        } finally {
          _iterator65.f();
        }
      }
    }, {
      key: "findPointIn",
      value: function findPointIn(node, maxLen) {
        var _iterator66 = _createForOfIteratorHelper(this.points),
            _step66;

        try {
          for (_iterator66.s(); !(_step66 = _iterator66.n()).done;) {
            var point = _step66.value;
            if (point.node == node) point.pos = this.text.length + Math.min(point.offset, maxLen);
          }
        } catch (err) {
          _iterator66.e(err);
        } finally {
          _iterator66.f();
        }
      }
    }]);

    return DOMReader;
  }();

  function isBlockElement(node) {
    return node.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(node.nodeName);
  }

  var DOMPoint = /*#__PURE__*/_createClass(function DOMPoint(node, offset) {
    _classCallCheck(this, DOMPoint);

    this.node = node;
    this.offset = offset;
    this.pos = -1;
  });

  function selectionPoints(view) {
    var result = [];
    if (view.root.activeElement != view.contentDOM) return result;
    var _view$observer$select = view.observer.selectionRange,
        anchorNode = _view$observer$select.anchorNode,
        anchorOffset = _view$observer$select.anchorOffset,
        focusNode = _view$observer$select.focusNode,
        focusOffset = _view$observer$select.focusOffset;

    if (anchorNode) {
      result.push(new DOMPoint(anchorNode, anchorOffset));
      if (focusNode != anchorNode || focusOffset != anchorOffset) result.push(new DOMPoint(focusNode, focusOffset));
    }

    return result;
  }

  function selectionFromPoints(points, base2) {
    if (points.length == 0) return null;
    var anchor = points[0].pos,
        head = points.length == 2 ? points[1].pos : anchor;
    return anchor > -1 && head > -1 ? EditorSelection.single(anchor + base2, head + base2) : null;
  }

  var EditorView = /*#__PURE__*/function () {
    function EditorView() {
      var _this39 = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, EditorView);

      this.plugins = [];
      this.editorAttrs = {};
      this.contentAttrs = {};
      this.bidiCache = [];
      this.destroyed = false;
      this.updateState = 2;
      this.measureScheduled = -1;
      this.measureRequests = [];
      this.contentDOM = document.createElement("div");
      this.scrollDOM = document.createElement("div");
      this.scrollDOM.tabIndex = -1;
      this.scrollDOM.className = "cm-scroller";
      this.scrollDOM.appendChild(this.contentDOM);
      this.announceDOM = document.createElement("div");
      this.announceDOM.style.cssText = "position: absolute; top: -10000px";
      this.announceDOM.setAttribute("aria-live", "polite");
      this.dom = document.createElement("div");
      this.dom.appendChild(this.announceDOM);
      this.dom.appendChild(this.scrollDOM);

      this._dispatch = config.dispatch || function (tr) {
        return _this39.update([tr]);
      };

      this.dispatch = this.dispatch.bind(this);
      this.root = config.root || getRoot(config.parent) || document;
      this.viewState = new ViewState(config.state || EditorState.create());
      this.plugins = this.state.facet(viewPlugin).map(function (spec) {
        return new PluginInstance(spec).update(_this39);
      });
      this.observer = new DOMObserver(this, function (from, to, typeOver) {
        applyDOMChange(_this39, from, to, typeOver);
      }, function (event) {
        _this39.inputState.runScrollHandlers(_this39, event);

        if (_this39.observer.intersecting) _this39.measure();
      });
      this.inputState = new InputState(this);
      this.docView = new DocView(this);
      this.mountStyles();
      this.updateAttrs();
      this.updateState = 0;
      ensureGlobalHandler();
      this.requestMeasure();
      if (config.parent) config.parent.appendChild(this.dom);
    }

    _createClass(EditorView, [{
      key: "state",
      get: function get() {
        return this.viewState.state;
      }
    }, {
      key: "viewport",
      get: function get() {
        return this.viewState.viewport;
      }
    }, {
      key: "visibleRanges",
      get: function get() {
        return this.viewState.visibleRanges;
      }
    }, {
      key: "inView",
      get: function get() {
        return this.viewState.inView;
      }
    }, {
      key: "composing",
      get: function get() {
        return this.inputState.composing > 0;
      }
    }, {
      key: "dispatch",
      value: function dispatch() {
        var _this$state;

        this._dispatch(arguments.length == 1 && (arguments.length <= 0 ? undefined : arguments[0]) instanceof Transaction ? arguments.length <= 0 ? undefined : arguments[0] : (_this$state = this.state).update.apply(_this$state, arguments));
      }
    }, {
      key: "update",
      value: function update(transactions) {
        if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        var redrawn = false,
            update;
        var state = this.state;

        var _iterator67 = _createForOfIteratorHelper(transactions),
            _step67;

        try {
          for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
            var _tr = _step67.value;
            if (_tr.startState != state) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
            state = _tr.state;
          }
        } catch (err) {
          _iterator67.e(err);
        } finally {
          _iterator67.f();
        }

        if (this.destroyed) {
          this.viewState.state = state;
          return;
        }

        if (state.facet(EditorState.phrases) != this.state.facet(EditorState.phrases)) return this.setState(state);
        update = new ViewUpdate(this, state, transactions);
        var scrollTarget = null;

        try {
          this.updateState = 2;

          var _iterator68 = _createForOfIteratorHelper(transactions),
              _step68;

          try {
            for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
              var tr = _step68.value;
              if (scrollTarget) scrollTarget = scrollTarget.map(tr.changes);

              if (tr.scrollIntoView) {
                var main = tr.state.selection.main;
                scrollTarget = new ScrollTarget(main.empty ? main : EditorSelection.cursor(main.head, main.head > main.anchor ? -1 : 1));
              }

              var _iterator69 = _createForOfIteratorHelper(tr.effects),
                  _step69;

              try {
                for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
                  var e = _step69.value;
                  if (e.is(scrollTo)) scrollTarget = new ScrollTarget(e.value);else if (e.is(centerOn)) scrollTarget = new ScrollTarget(e.value, true);
                }
              } catch (err) {
                _iterator69.e(err);
              } finally {
                _iterator69.f();
              }
            }
          } catch (err) {
            _iterator68.e(err);
          } finally {
            _iterator68.f();
          }

          this.viewState.update(update, scrollTarget);
          this.bidiCache = CachedOrder.update(this.bidiCache, update.changes);

          if (!update.empty) {
            this.updatePlugins(update);
            this.inputState.update(update);
          }

          redrawn = this.docView.update(update);
          if (this.state.facet(styleModule) != this.styleModules) this.mountStyles();
          this.updateAttrs();
          this.showAnnouncements(transactions);
        } finally {
          this.updateState = 0;
        }

        if (redrawn || scrollTarget || this.viewState.mustEnforceCursorAssoc) this.requestMeasure();

        if (!update.empty) {
          var _iterator70 = _createForOfIteratorHelper(this.state.facet(updateListener)),
              _step70;

          try {
            for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
              var listener = _step70.value;
              listener(update);
            }
          } catch (err) {
            _iterator70.e(err);
          } finally {
            _iterator70.f();
          }
        }
      }
    }, {
      key: "setState",
      value: function setState(newState) {
        var _this40 = this;

        if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");

        if (this.destroyed) {
          this.viewState.state = newState;
          return;
        }

        this.updateState = 2;

        try {
          var _iterator71 = _createForOfIteratorHelper(this.plugins),
              _step71;

          try {
            for (_iterator71.s(); !(_step71 = _iterator71.n()).done;) {
              var plugin = _step71.value;
              plugin.destroy(this);
            }
          } catch (err) {
            _iterator71.e(err);
          } finally {
            _iterator71.f();
          }

          this.viewState = new ViewState(newState);
          this.plugins = newState.facet(viewPlugin).map(function (spec) {
            return new PluginInstance(spec).update(_this40);
          });
          this.docView = new DocView(this);
          this.inputState.ensureHandlers(this);
          this.mountStyles();
          this.updateAttrs();
          this.bidiCache = [];
        } finally {
          this.updateState = 0;
        }

        this.requestMeasure();
      }
    }, {
      key: "updatePlugins",
      value: function updatePlugins(update) {
        var prevSpecs = update.startState.facet(viewPlugin),
            specs = update.state.facet(viewPlugin);

        if (prevSpecs != specs) {
          var newPlugins = [];

          var _iterator72 = _createForOfIteratorHelper(specs),
              _step72;

          try {
            for (_iterator72.s(); !(_step72 = _iterator72.n()).done;) {
              var spec = _step72.value;
              var found = prevSpecs.indexOf(spec);

              if (found < 0) {
                newPlugins.push(new PluginInstance(spec));
              } else {
                var plugin = this.plugins[found];
                plugin.mustUpdate = update;
                newPlugins.push(plugin);
              }
            }
          } catch (err) {
            _iterator72.e(err);
          } finally {
            _iterator72.f();
          }

          var _iterator73 = _createForOfIteratorHelper(this.plugins),
              _step73;

          try {
            for (_iterator73.s(); !(_step73 = _iterator73.n()).done;) {
              var _plugin2 = _step73.value;
              if (_plugin2.mustUpdate != update) _plugin2.destroy(this);
            }
          } catch (err) {
            _iterator73.e(err);
          } finally {
            _iterator73.f();
          }

          this.plugins = newPlugins;
          this.inputState.ensureHandlers(this);
        } else {
          var _iterator74 = _createForOfIteratorHelper(this.plugins),
              _step74;

          try {
            for (_iterator74.s(); !(_step74 = _iterator74.n()).done;) {
              var _p = _step74.value;
              _p.mustUpdate = update;
            }
          } catch (err) {
            _iterator74.e(err);
          } finally {
            _iterator74.f();
          }
        }

        for (var _i91 = 0; _i91 < this.plugins.length; _i91++) {
          this.plugins[_i91] = this.plugins[_i91].update(this);
        }
      }
    }, {
      key: "measure",
      value: function measure() {
        var _this41 = this;

        var flush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        if (this.destroyed) return;
        if (this.measureScheduled > -1) cancelAnimationFrame(this.measureScheduled);
        this.measureScheduled = -1;
        if (flush) this.observer.flush();
        var updated = null;

        try {
          for (var _i92 = 0;; _i92++) {
            this.updateState = 1;
            var oldViewport = this.viewport;
            var changed = this.viewState.measure(this.docView, _i92 > 0);
            if (!changed && !this.measureRequests.length && this.viewState.scrollTarget == null) break;

            if (_i92 > 5) {
              console.warn("Viewport failed to stabilize");
              break;
            }

            var measuring = [];

            if (!(changed & 4)) {
              var _ref16 = [measuring, this.measureRequests];
              this.measureRequests = _ref16[0];
              measuring = _ref16[1];
            }

            var measured = measuring.map(function (m) {
              try {
                return m.read(_this41);
              } catch (e) {
                logException(_this41.state, e);
                return BadMeasure;
              }
            });
            var update = new ViewUpdate(this, this.state);
            update.flags |= changed;
            if (!updated) updated = update;else updated.flags |= changed;
            this.updateState = 2;

            if (!update.empty) {
              this.updatePlugins(update);
              this.inputState.update(update);
            }

            this.updateAttrs();
            if (changed) this.docView.update(update);

            for (var i2 = 0; i2 < measuring.length; i2++) {
              if (measured[i2] != BadMeasure) {
                try {
                  measuring[i2].write(measured[i2], this);
                } catch (e) {
                  logException(this.state, e);
                }
              }
            }

            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget);
              this.viewState.scrollTarget = null;
            }

            if (this.viewport.from == oldViewport.from && this.viewport.to == oldViewport.to && this.measureRequests.length == 0) break;
          }
        } finally {
          this.updateState = 0;
        }

        this.measureScheduled = -1;

        if (updated && !updated.empty) {
          var _iterator75 = _createForOfIteratorHelper(this.state.facet(updateListener)),
              _step75;

          try {
            for (_iterator75.s(); !(_step75 = _iterator75.n()).done;) {
              var listener = _step75.value;
              listener(updated);
            }
          } catch (err) {
            _iterator75.e(err);
          } finally {
            _iterator75.f();
          }
        }
      }
    }, {
      key: "themeClasses",
      get: function get() {
        return baseThemeID + " " + (this.state.facet(darkTheme) ? baseDarkID : baseLightID) + " " + this.state.facet(_theme);
      }
    }, {
      key: "updateAttrs",
      value: function updateAttrs() {
        var editorAttrs = combineAttrs(this.state.facet(editorAttributes), {
          "class": "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
        });

        _updateAttrs(this.dom, this.editorAttrs, editorAttrs);

        this.editorAttrs = editorAttrs;
        var contentAttrs = {
          spellcheck: "false",
          autocorrect: "off",
          autocapitalize: "off",
          translate: "no",
          contenteditable: !this.state.facet(editable) ? "false" : "true",
          "class": "cm-content",
          style: "".concat(browser.tabSize, ": ").concat(this.state.tabSize),
          role: "textbox",
          "aria-multiline": "true"
        };
        if (this.state.readOnly) contentAttrs["aria-readonly"] = "true";
        combineAttrs(this.state.facet(contentAttributes), contentAttrs);

        _updateAttrs(this.contentDOM, this.contentAttrs, contentAttrs);

        this.contentAttrs = contentAttrs;
      }
    }, {
      key: "showAnnouncements",
      value: function showAnnouncements(trs) {
        var first = true;

        var _iterator76 = _createForOfIteratorHelper(trs),
            _step76;

        try {
          for (_iterator76.s(); !(_step76 = _iterator76.n()).done;) {
            var tr = _step76.value;

            var _iterator77 = _createForOfIteratorHelper(tr.effects),
                _step77;

            try {
              for (_iterator77.s(); !(_step77 = _iterator77.n()).done;) {
                var effect = _step77.value;

                if (effect.is(EditorView.announce)) {
                  if (first) this.announceDOM.textContent = "";
                  first = false;
                  var div = this.announceDOM.appendChild(document.createElement("div"));
                  div.textContent = effect.value;
                }
              }
            } catch (err) {
              _iterator77.e(err);
            } finally {
              _iterator77.f();
            }
          }
        } catch (err) {
          _iterator76.e(err);
        } finally {
          _iterator76.f();
        }
      }
    }, {
      key: "mountStyles",
      value: function mountStyles() {
        this.styleModules = this.state.facet(styleModule);
        StyleModule.mount(this.root, this.styleModules.concat(baseTheme).reverse());
      }
    }, {
      key: "readMeasured",
      value: function readMeasured() {
        if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
        if (this.updateState == 0 && this.measureScheduled > -1) this.measure(false);
      }
    }, {
      key: "requestMeasure",
      value: function requestMeasure(request) {
        var _this42 = this;

        if (this.measureScheduled < 0) this.measureScheduled = requestAnimationFrame(function () {
          return _this42.measure();
        });

        if (request) {
          if (request.key != null) for (var _i93 = 0; _i93 < this.measureRequests.length; _i93++) {
            if (this.measureRequests[_i93].key === request.key) {
              this.measureRequests[_i93] = request;
              return;
            }
          }
          this.measureRequests.push(request);
        }
      }
    }, {
      key: "pluginField",
      value: function pluginField(field) {
        var result = [];

        var _iterator78 = _createForOfIteratorHelper(this.plugins),
            _step78;

        try {
          for (_iterator78.s(); !(_step78 = _iterator78.n()).done;) {
            var plugin = _step78.value;
            plugin.update(this).takeField(field, result);
          }
        } catch (err) {
          _iterator78.e(err);
        } finally {
          _iterator78.f();
        }

        return result;
      }
    }, {
      key: "plugin",
      value: function plugin(_plugin) {
        var _iterator79 = _createForOfIteratorHelper(this.plugins),
            _step79;

        try {
          for (_iterator79.s(); !(_step79 = _iterator79.n()).done;) {
            var inst = _step79.value;
            if (inst.spec == _plugin) return inst.update(this).value;
          }
        } catch (err) {
          _iterator79.e(err);
        } finally {
          _iterator79.f();
        }

        return null;
      }
    }, {
      key: "blockAtHeight",
      value: function blockAtHeight(height, docTop) {
        this.readMeasured();
        return this.viewState.blockAtHeight(height, ensureTop(docTop, this.contentDOM));
      }
    }, {
      key: "visualLineAtHeight",
      value: function visualLineAtHeight(height, docTop) {
        this.readMeasured();
        return this.viewState.lineAtHeight(height, ensureTop(docTop, this.contentDOM));
      }
    }, {
      key: "viewportLines",
      value: function viewportLines(f, docTop) {
        var _this$viewport = this.viewport,
            from = _this$viewport.from,
            to = _this$viewport.to;
        this.viewState.forEachLine(from, to, f, ensureTop(docTop, this.contentDOM));
      }
    }, {
      key: "visualLineAt",
      value: function visualLineAt(pos) {
        var docTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.viewState.lineAt(pos, docTop);
      }
    }, {
      key: "contentHeight",
      get: function get() {
        return this.viewState.contentHeight;
      }
    }, {
      key: "moveByChar",
      value: function moveByChar(start, forward, by) {
        return skipAtoms(this, start, _moveByChar(this, start, forward, by));
      }
    }, {
      key: "moveByGroup",
      value: function moveByGroup(start, forward) {
        var _this43 = this;

        return skipAtoms(this, start, _moveByChar(this, start, forward, function (initial) {
          return byGroup(_this43, start.head, initial);
        }));
      }
    }, {
      key: "moveToLineBoundary",
      value: function moveToLineBoundary(start, forward) {
        var includeWrap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        return _moveToLineBoundary(this, start, forward, includeWrap);
      }
    }, {
      key: "moveVertically",
      value: function moveVertically(start, forward, distance) {
        return skipAtoms(this, start, _moveVertically(this, start, forward, distance));
      }
    }, {
      key: "scrollPosIntoView",
      value: function scrollPosIntoView(pos) {
        this.dispatch({
          effects: scrollTo.of(EditorSelection.cursor(pos))
        });
      }
    }, {
      key: "domAtPos",
      value: function domAtPos(pos) {
        return this.docView.domAtPos(pos);
      }
    }, {
      key: "posAtDOM",
      value: function posAtDOM(node) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.docView.posFromDOM(node, offset);
      }
    }, {
      key: "posAtCoords",
      value: function posAtCoords(coords) {
        var precise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        this.readMeasured();
        return _posAtCoords(this, coords, precise);
      }
    }, {
      key: "coordsAtPos",
      value: function coordsAtPos(pos) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        this.readMeasured();
        var rect = this.docView.coordsAt(pos, side);
        if (!rect || rect.left == rect.right) return rect;
        var line = this.state.doc.lineAt(pos),
            order = this.bidiSpans(line);
        var span = order[BidiSpan.find(order, pos - line.from, -1, side)];
        return flattenRect(rect, span.dir == Direction.LTR == side > 0);
      }
    }, {
      key: "defaultCharacterWidth",
      get: function get() {
        return this.viewState.heightOracle.charWidth;
      }
    }, {
      key: "defaultLineHeight",
      get: function get() {
        return this.viewState.heightOracle.lineHeight;
      }
    }, {
      key: "textDirection",
      get: function get() {
        return this.viewState.heightOracle.direction;
      }
    }, {
      key: "lineWrapping",
      get: function get() {
        return this.viewState.heightOracle.lineWrapping;
      }
    }, {
      key: "bidiSpans",
      value: function bidiSpans(line) {
        if (line.length > MaxBidiLine) return trivialOrder(line.length);
        var dir = this.textDirection;

        var _iterator80 = _createForOfIteratorHelper(this.bidiCache),
            _step80;

        try {
          for (_iterator80.s(); !(_step80 = _iterator80.n()).done;) {
            var entry = _step80.value;
            if (entry.from == line.from && entry.dir == dir) return entry.order;
          }
        } catch (err) {
          _iterator80.e(err);
        } finally {
          _iterator80.f();
        }

        var order = computeOrder(line.text, this.textDirection);
        this.bidiCache.push(new CachedOrder(line.from, line.to, dir, order));
        return order;
      }
    }, {
      key: "hasFocus",
      get: function get() {
        var _a;

        return (document.hasFocus() || browser.safari && ((_a = this.inputState) === null || _a === void 0 ? void 0 : _a.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
      }
    }, {
      key: "focus",
      value: function focus() {
        var _this44 = this;

        this.observer.ignore(function () {
          focusPreventScroll(_this44.contentDOM);

          _this44.docView.updateSelection();
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _iterator81 = _createForOfIteratorHelper(this.plugins),
            _step81;

        try {
          for (_iterator81.s(); !(_step81 = _iterator81.n()).done;) {
            var plugin = _step81.value;
            plugin.destroy(this);
          }
        } catch (err) {
          _iterator81.e(err);
        } finally {
          _iterator81.f();
        }

        this.plugins = [];
        this.inputState.destroy();
        this.dom.remove();
        this.observer.destroy();
        if (this.measureScheduled > -1) cancelAnimationFrame(this.measureScheduled);
        this.destroyed = true;
      }
    }], [{
      key: "domEventHandlers",
      value: function domEventHandlers(handlers2) {
        return ViewPlugin.define(function () {
          return {};
        }, {
          eventHandlers: handlers2
        });
      }
    }, {
      key: "theme",
      value: function theme(spec, options) {
        var prefix = StyleModule.newName();
        var result = [_theme.of(prefix), styleModule.of(buildTheme(".".concat(prefix), spec))];
        if (options && options.dark) result.push(darkTheme.of(true));
        return result;
      }
    }, {
      key: "baseTheme",
      value: function baseTheme(spec) {
        return Prec.lowest(styleModule.of(buildTheme("." + baseThemeID, spec, lightDarkIDs)));
      }
    }]);

    return EditorView;
  }();

  EditorView.scrollTo = scrollTo;
  EditorView.centerOn = centerOn;
  EditorView.styleModule = styleModule;
  EditorView.inputHandler = inputHandler;
  EditorView.exceptionSink = exceptionSink;
  EditorView.updateListener = updateListener;
  EditorView.editable = editable;
  EditorView.mouseSelectionStyle = mouseSelectionStyle;
  EditorView.dragMovesSelection = dragMovesSelection$1;
  EditorView.clickAddsSelectionRange = clickAddsSelectionRange;
  EditorView.decorations = decorations;
  EditorView.contentAttributes = contentAttributes;
  EditorView.editorAttributes = editorAttributes;
  EditorView.lineWrapping = /* @__PURE__ */EditorView.contentAttributes.of({
    "class": "cm-lineWrapping"
  });
  EditorView.announce = /* @__PURE__ */StateEffect.define();
  var MaxBidiLine = 4096;

  function ensureTop(given, dom) {
    return given == null ? dom.getBoundingClientRect().top : given;
  }

  var resizeDebounce = -1;

  function ensureGlobalHandler() {
    window.addEventListener("resize", function () {
      if (resizeDebounce == -1) resizeDebounce = setTimeout(handleResize, 50);
    });
  }

  function handleResize() {
    resizeDebounce = -1;
    var found = document.querySelectorAll(".cm-content");

    for (var _i94 = 0; _i94 < found.length; _i94++) {
      var docView = ContentView.get(found[_i94]);
      if (docView) docView.editorView.requestMeasure();
    }
  }

  var BadMeasure = {};

  var CachedOrder = /*#__PURE__*/function () {
    function CachedOrder(from, to, dir, order) {
      _classCallCheck(this, CachedOrder);

      this.from = from;
      this.to = to;
      this.dir = dir;
      this.order = order;
    }

    _createClass(CachedOrder, null, [{
      key: "update",
      value: function update(cache, changes) {
        if (changes.empty) return cache;
        var result = [],
            lastDir = cache.length ? cache[cache.length - 1].dir : Direction.LTR;

        for (var _i95 = Math.max(0, cache.length - 10); _i95 < cache.length; _i95++) {
          var entry = cache[_i95];
          if (entry.dir == lastDir && !changes.touchesRange(entry.from, entry.to)) result.push(new CachedOrder(changes.mapPos(entry.from, 1), changes.mapPos(entry.to, -1), entry.dir, entry.order));
        }

        return result;
      }
    }]);

    return CachedOrder;
  }();

  var currentPlatform = browser.mac ? "mac" : browser.windows ? "win" : browser.linux ? "linux" : "key";
  var CanHidePrimary = !browser.ios;
  var themeSpec = {
    ".cm-line": {
      "& ::selection": {
        backgroundColor: "transparent !important"
      },
      "&::selection": {
        backgroundColor: "transparent !important"
      }
    }
  };
  if (CanHidePrimary) themeSpec[".cm-line"].caretColor = "transparent !important";
  var UnicodeRegexpSupport = /x/.unicode != null ? "gu" : "g"; // ../../node_modules/@codemirror/tooltip/dist/index.js

  var ios2 = typeof navigator != "undefined" && ! /* @__PURE__ */ /Edge\/(\d+)/.exec(navigator.userAgent) && /* @__PURE__ */ /Apple Computer/.test(navigator.vendor) && ( /* @__PURE__ */ /Mobile\/\w+/.test(navigator.userAgent) || navigator.maxTouchPoints > 2);
  var Outside = "-10000px";

  var TooltipViewManager = /*#__PURE__*/function () {
    function TooltipViewManager(view, facet, createTooltipView) {
      _classCallCheck(this, TooltipViewManager);

      this.facet = facet;
      this.createTooltipView = createTooltipView;
      this.input = view.state.facet(facet);
      this.tooltips = this.input.filter(function (t) {
        return t;
      });
      this.tooltipViews = this.tooltips.map(createTooltipView);
    }

    _createClass(TooltipViewManager, [{
      key: "update",
      value: function update(_update6) {
        var input = _update6.state.facet(this.facet);

        var tooltips2 = input.filter(function (x) {
          return x;
        });

        if (input === this.input) {
          var _iterator82 = _createForOfIteratorHelper(this.tooltipViews),
              _step82;

          try {
            for (_iterator82.s(); !(_step82 = _iterator82.n()).done;) {
              var t = _step82.value;
              if (t.update) t.update(_update6);
            }
          } catch (err) {
            _iterator82.e(err);
          } finally {
            _iterator82.f();
          }

          return false;
        }

        var tooltipViews = [];

        for (var _i96 = 0; _i96 < tooltips2.length; _i96++) {
          var tip = tooltips2[_i96],
              known = -1;
          if (!tip) continue;

          for (var i2 = 0; i2 < this.tooltips.length; i2++) {
            var other = this.tooltips[i2];
            if (other && other.create == tip.create) known = i2;
          }

          if (known < 0) {
            tooltipViews[_i96] = this.createTooltipView(tip);
          } else {
            var tooltipView = tooltipViews[_i96] = this.tooltipViews[known];
            if (tooltipView.update) tooltipView.update(_update6);
          }
        }

        var _iterator83 = _createForOfIteratorHelper(this.tooltipViews),
            _step83;

        try {
          for (_iterator83.s(); !(_step83 = _iterator83.n()).done;) {
            var _t = _step83.value;
            if (tooltipViews.indexOf(_t) < 0) _t.dom.remove();
          }
        } catch (err) {
          _iterator83.e(err);
        } finally {
          _iterator83.f();
        }

        this.input = input;
        this.tooltips = tooltips2;
        this.tooltipViews = tooltipViews;
        return true;
      }
    }]);

    return TooltipViewManager;
  }();

  function _tooltips() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return tooltipConfig.of(config);
  }

  function windowSpace() {
    return {
      top: 0,
      left: 0,
      bottom: innerHeight,
      right: innerWidth
    };
  }

  var tooltipConfig = /* @__PURE__ */Facet.define({
    combine: function combine(values) {
      var _a, _b, _c;

      return {
        position: ios2 ? "absolute" : ((_a = values.find(function (conf) {
          return conf.position;
        })) === null || _a === void 0 ? void 0 : _a.position) || "fixed",
        parent: ((_b = values.find(function (conf) {
          return conf.parent;
        })) === null || _b === void 0 ? void 0 : _b.parent) || null,
        tooltipSpace: ((_c = values.find(function (conf) {
          return conf.tooltipSpace;
        })) === null || _c === void 0 ? void 0 : _c.tooltipSpace) || windowSpace
      };
    }
  });
  var tooltipPlugin = /* @__PURE__ */ViewPlugin.fromClass( /*#__PURE__*/function () {
    function _class(view) {
      var _this45 = this;

      _classCallCheck(this, _class);

      var _a;

      this.view = view;
      this.inView = true;
      this.lastTransaction = 0;
      this.measureTimeout = -1;
      var config = view.state.facet(tooltipConfig);
      this.position = config.position;
      this.parent = config.parent;
      this.classes = view.themeClasses;
      this.createContainer();
      this.measureReq = {
        read: this.readMeasure.bind(this),
        write: this.writeMeasure.bind(this),
        key: this
      };
      this.manager = new TooltipViewManager(view, _showTooltip, function (t) {
        return _this45.createTooltip(t);
      });
      this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver(function (entries) {
        if (Date.now() > _this45.lastTransaction - 50 && entries.length > 0 && entries[entries.length - 1].intersectionRatio < 1) _this45.measureSoon();
      }, {
        threshold: [1]
      }) : null;
      this.observeIntersection();
      (_a = view.dom.ownerDocument.defaultView) === null || _a === void 0 ? void 0 : _a.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this));
      this.maybeMeasure();
    }

    _createClass(_class, [{
      key: "createContainer",
      value: function createContainer() {
        if (this.parent) {
          this.container = document.createElement("div");
          this.container.style.position = "relative";
          this.container.className = this.view.themeClasses;
          this.parent.appendChild(this.container);
        } else {
          this.container = this.view.dom;
        }
      }
    }, {
      key: "observeIntersection",
      value: function observeIntersection() {
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();

          var _iterator84 = _createForOfIteratorHelper(this.manager.tooltipViews),
              _step84;

          try {
            for (_iterator84.s(); !(_step84 = _iterator84.n()).done;) {
              var tooltip = _step84.value;
              this.intersectionObserver.observe(tooltip.dom);
            }
          } catch (err) {
            _iterator84.e(err);
          } finally {
            _iterator84.f();
          }
        }
      }
    }, {
      key: "measureSoon",
      value: function measureSoon() {
        var _this46 = this;

        if (this.measureTimeout < 0) this.measureTimeout = setTimeout(function () {
          _this46.measureTimeout = -1;

          _this46.maybeMeasure();
        }, 50);
      }
    }, {
      key: "update",
      value: function update(_update7) {
        if (_update7.transactions.length) this.lastTransaction = Date.now();
        var updated = this.manager.update(_update7);
        if (updated) this.observeIntersection();
        var shouldMeasure = updated || _update7.geometryChanged;

        var newConfig = _update7.state.facet(tooltipConfig);

        if (newConfig.position != this.position) {
          this.position = newConfig.position;

          var _iterator85 = _createForOfIteratorHelper(this.manager.tooltipViews),
              _step85;

          try {
            for (_iterator85.s(); !(_step85 = _iterator85.n()).done;) {
              var t = _step85.value;
              t.dom.style.position = this.position;
            }
          } catch (err) {
            _iterator85.e(err);
          } finally {
            _iterator85.f();
          }

          shouldMeasure = true;
        }

        if (newConfig.parent != this.parent) {
          if (this.parent) this.container.remove();
          this.parent = newConfig.parent;
          this.createContainer();

          var _iterator86 = _createForOfIteratorHelper(this.manager.tooltipViews),
              _step86;

          try {
            for (_iterator86.s(); !(_step86 = _iterator86.n()).done;) {
              var _t2 = _step86.value;
              this.container.appendChild(_t2.dom);
            }
          } catch (err) {
            _iterator86.e(err);
          } finally {
            _iterator86.f();
          }

          shouldMeasure = true;
        } else if (this.parent && this.view.themeClasses != this.classes) {
          this.classes = this.container.className = this.view.themeClasses;
        }

        if (shouldMeasure) this.maybeMeasure();
      }
    }, {
      key: "createTooltip",
      value: function createTooltip(tooltip) {
        var tooltipView = tooltip.create(this.view);
        tooltipView.dom.classList.add("cm-tooltip");

        if (tooltip.arrow && !tooltipView.dom.querySelector("cm-tooltip > cm-tooltip-arrow")) {
          var arrow = document.createElement("div");
          arrow.className = "cm-tooltip-arrow";
          tooltipView.dom.appendChild(arrow);
        }

        tooltipView.dom.style.position = this.position;
        tooltipView.dom.style.top = Outside;
        this.container.appendChild(tooltipView.dom);
        if (tooltipView.mount) tooltipView.mount(this.view);
        return tooltipView;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _a, _b;

        (_a = this.view.dom.ownerDocument.defaultView) === null || _a === void 0 ? void 0 : _a.removeEventListener("resize", this.measureSoon);

        var _iterator87 = _createForOfIteratorHelper(this.manager.tooltipViews),
            _step87;

        try {
          for (_iterator87.s(); !(_step87 = _iterator87.n()).done;) {
            var dom = _step87.value.dom;
            dom.remove();
          }
        } catch (err) {
          _iterator87.e(err);
        } finally {
          _iterator87.f();
        }

        (_b = this.intersectionObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
        clearTimeout(this.measureTimeout);
      }
    }, {
      key: "readMeasure",
      value: function readMeasure() {
        var _this47 = this;

        var editor = this.view.dom.getBoundingClientRect();
        return {
          editor: editor,
          parent: this.parent ? this.container.getBoundingClientRect() : editor,
          pos: this.manager.tooltips.map(function (t) {
            return _this47.view.coordsAtPos(t.pos);
          }),
          size: this.manager.tooltipViews.map(function (_ref17) {
            var dom = _ref17.dom;
            return dom.getBoundingClientRect();
          }),
          space: this.view.state.facet(tooltipConfig).tooltipSpace(this.view)
        };
      }
    }, {
      key: "writeMeasure",
      value: function writeMeasure(measured) {
        var editor = measured.editor,
            space = measured.space;
        var others = [];

        for (var _i97 = 0; _i97 < this.manager.tooltips.length; _i97++) {
          var tooltip = this.manager.tooltips[_i97],
              tView = this.manager.tooltipViews[_i97],
              dom = tView.dom;
          var pos = measured.pos[_i97],
              size = measured.size[_i97];

          if (!pos || pos.bottom <= Math.max(editor.top, space.top) || pos.top >= Math.min(editor.bottom, space.bottom) || pos.right <= Math.max(editor.left, space.left) || pos.left >= Math.min(editor.right, space.right)) {
            dom.style.top = Outside;
            continue;
          }

          var arrow = tooltip.arrow ? tView.dom.querySelector(".cm-tooltip-arrow") : null;
          var arrowHeight = arrow ? 7 : 0;
          var width = size.right - size.left,
              height = size.bottom - size.top;
          var offset = tView.offset || noOffset,
              ltr = this.view.textDirection == Direction.LTR;
          var left = size.width > space.right - space.left ? ltr ? space.left : space.right - size.width : ltr ? Math.min(pos.left - (arrow ? 14 : 0) + offset.x, space.right - width) : Math.max(space.left, pos.left - width + (arrow ? 14 : 0) - offset.x);
          var above = !!tooltip.above;
          if (!tooltip.strictSide && (above ? pos.top - (size.bottom - size.top) - offset.y < space.top : pos.bottom + (size.bottom - size.top) + offset.y > space.bottom) && above == space.bottom - pos.bottom > pos.top - space.top) above = !above;
          var top2 = above ? pos.top - height - arrowHeight - offset.y : pos.bottom + arrowHeight + offset.y;
          var right = left + width;

          if (tView.overlap !== true) {
            var _iterator88 = _createForOfIteratorHelper(others),
                _step88;

            try {
              for (_iterator88.s(); !(_step88 = _iterator88.n()).done;) {
                var _r2 = _step88.value;
                if (_r2.left < right && _r2.right > left && _r2.top < top2 + height && _r2.bottom > top2) top2 = above ? _r2.top - height - 2 - arrowHeight : _r2.bottom + arrowHeight + 2;
              }
            } catch (err) {
              _iterator88.e(err);
            } finally {
              _iterator88.f();
            }
          }

          if (this.position == "absolute") {
            dom.style.top = top2 - measured.parent.top + "px";
            dom.style.left = left - measured.parent.left + "px";
          } else {
            dom.style.top = top2 + "px";
            dom.style.left = left + "px";
          }

          if (arrow) arrow.style.left = "".concat(pos.left + (ltr ? offset.x : -offset.x) - (left + 14 - 7), "px");
          if (tView.overlap !== true) others.push({
            left: left,
            top: top2,
            right: right,
            bottom: top2 + height
          });
          dom.classList.toggle("cm-tooltip-above", above);
          dom.classList.toggle("cm-tooltip-below", !above);
          if (tView.positioned) tView.positioned();
        }
      }
    }, {
      key: "maybeMeasure",
      value: function maybeMeasure() {
        if (this.manager.tooltips.length) {
          if (this.view.inView) this.view.requestMeasure(this.measureReq);

          if (this.inView != this.view.inView) {
            this.inView = this.view.inView;

            if (!this.inView) {
              var _iterator89 = _createForOfIteratorHelper(this.manager.tooltipViews),
                  _step89;

              try {
                for (_iterator89.s(); !(_step89 = _iterator89.n()).done;) {
                  var tv = _step89.value;
                  tv.dom.style.top = Outside;
                }
              } catch (err) {
                _iterator89.e(err);
              } finally {
                _iterator89.f();
              }
            }
          }
        }
      }
    }]);

    return _class;
  }(), {
    eventHandlers: {
      scroll: function scroll() {
        this.maybeMeasure();
      }
    }
  });
  var baseTheme2 = /* @__PURE__ */EditorView.baseTheme({
    ".cm-tooltip": {
      zIndex: 100
    },
    "&light .cm-tooltip": {
      border: "1px solid #bbb",
      backgroundColor: "#f5f5f5"
    },
    "&light .cm-tooltip-section:not(:first-child)": {
      borderTop: "1px solid #bbb"
    },
    "&dark .cm-tooltip": {
      backgroundColor: "#333338",
      color: "white"
    },
    ".cm-tooltip-arrow": {
      height: "".concat(7, "px"),
      width: "".concat(7 * 2, "px"),
      position: "absolute",
      zIndex: -1,
      overflow: "hidden",
      "&:before, &:after": {
        content: "''",
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "".concat(7, "px solid transparent"),
        borderRight: "".concat(7, "px solid transparent")
      },
      ".cm-tooltip-above &": {
        bottom: "-".concat(7, "px"),
        "&:before": {
          borderTop: "".concat(7, "px solid #bbb")
        },
        "&:after": {
          borderTop: "".concat(7, "px solid #f5f5f5"),
          bottom: "1px"
        }
      },
      ".cm-tooltip-below &": {
        top: "-".concat(7, "px"),
        "&:before": {
          borderBottom: "".concat(7, "px solid #bbb")
        },
        "&:after": {
          borderBottom: "".concat(7, "px solid #f5f5f5"),
          top: "1px"
        }
      }
    },
    "&dark .cm-tooltip .cm-tooltip-arrow": {
      "&:before": {
        borderTopColor: "#333338",
        borderBottomColor: "#333338"
      },
      "&:after": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent"
      }
    }
  });
  var noOffset = {
    x: 0,
    y: 0
  };

  var _showTooltip = /* @__PURE__ */Facet.define({
    enables: [tooltipPlugin, baseTheme2]
  });

  var showHoverTooltip = /* @__PURE__ */Facet.define();

  var HoverTooltipHost = /*#__PURE__*/function () {
    function HoverTooltipHost(view) {
      var _this48 = this;

      _classCallCheck(this, HoverTooltipHost);

      this.view = view;
      this.mounted = false;
      this.dom = document.createElement("div");
      this.dom.classList.add("cm-tooltip-hover");
      this.manager = new TooltipViewManager(view, showHoverTooltip, function (t) {
        return _this48.createHostedView(t);
      });
    }

    _createClass(HoverTooltipHost, [{
      key: "createHostedView",
      value: function createHostedView(tooltip) {
        var hostedView = tooltip.create(this.view);
        hostedView.dom.classList.add("cm-tooltip-section");
        this.dom.appendChild(hostedView.dom);
        if (this.mounted && hostedView.mount) hostedView.mount(this.view);
        return hostedView;
      }
    }, {
      key: "mount",
      value: function mount(view) {
        var _iterator90 = _createForOfIteratorHelper(this.manager.tooltipViews),
            _step90;

        try {
          for (_iterator90.s(); !(_step90 = _iterator90.n()).done;) {
            var hostedView = _step90.value;
            if (hostedView.mount) hostedView.mount(view);
          }
        } catch (err) {
          _iterator90.e(err);
        } finally {
          _iterator90.f();
        }

        this.mounted = true;
      }
    }, {
      key: "positioned",
      value: function positioned() {
        var _iterator91 = _createForOfIteratorHelper(this.manager.tooltipViews),
            _step91;

        try {
          for (_iterator91.s(); !(_step91 = _iterator91.n()).done;) {
            var hostedView = _step91.value;
            if (hostedView.positioned) hostedView.positioned();
          }
        } catch (err) {
          _iterator91.e(err);
        } finally {
          _iterator91.f();
        }
      }
    }, {
      key: "update",
      value: function update(_update8) {
        this.manager.update(_update8);
      }
    }], [{
      key: "create",
      value: function create(view) {
        return new HoverTooltipHost(view);
      }
    }]);

    return HoverTooltipHost;
  }();

  var showHoverTooltipHost = /* @__PURE__ */_showTooltip.compute([showHoverTooltip], function (state) {
    var tooltips2 = state.facet(showHoverTooltip).filter(function (t) {
      return t;
    });
    if (tooltips2.length === 0) return null;
    return {
      pos: Math.min.apply(Math, _toConsumableArray(tooltips2.map(function (t) {
        return t.pos;
      }))),
      end: Math.max.apply(Math, _toConsumableArray(tooltips2.filter(function (t) {
        return t.end != null;
      }).map(function (t) {
        return t.end;
      }))),
      create: HoverTooltipHost.create,
      above: tooltips2[0].above,
      arrow: tooltips2.some(function (t) {
        return t.arrow;
      })
    };
  });

  var HoverPlugin = /*#__PURE__*/function () {
    function HoverPlugin(view, source, field, setHover, hoverTime) {
      _classCallCheck(this, HoverPlugin);

      this.view = view;
      this.source = source;
      this.field = field;
      this.setHover = setHover;
      this.hoverTime = hoverTime;
      this.hoverTimeout = -1;
      this.restartTimeout = -1;
      this.pending = null;
      this.lastMove = {
        x: 0,
        y: 0,
        target: view.dom,
        time: 0
      };
      this.checkHover = this.checkHover.bind(this);
      view.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this));
      view.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
    }

    _createClass(HoverPlugin, [{
      key: "update",
      value: function update() {
        var _this49 = this;

        if (this.pending) {
          this.pending = null;
          clearTimeout(this.restartTimeout);
          this.restartTimeout = setTimeout(function () {
            return _this49.startHover();
          }, 20);
        }
      }
    }, {
      key: "active",
      get: function get() {
        return this.view.state.field(this.field);
      }
    }, {
      key: "checkHover",
      value: function checkHover() {
        this.hoverTimeout = -1;
        if (this.active) return;
        var hovered = Date.now() - this.lastMove.time;
        if (hovered < this.hoverTime) this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - hovered);else this.startHover();
      }
    }, {
      key: "startHover",
      value: function startHover() {
        var _this50 = this;

        var _a;

        clearTimeout(this.restartTimeout);
        var lastMove = this.lastMove;
        var pos = this.view.contentDOM.contains(lastMove.target) ? this.view.posAtCoords(lastMove) : null;
        if (pos == null) return;
        var posCoords = this.view.coordsAtPos(pos);
        if (posCoords == null || lastMove.y < posCoords.top || lastMove.y > posCoords.bottom || lastMove.x < posCoords.left - this.view.defaultCharacterWidth || lastMove.x > posCoords.right + this.view.defaultCharacterWidth) return;
        var bidi = this.view.bidiSpans(this.view.state.doc.lineAt(pos)).find(function (s) {
          return s.from <= pos && s.to >= pos;
        });
        var rtl = bidi && bidi.dir == Direction.RTL ? -1 : 1;
        var open = this.source(this.view, pos, lastMove.x < posCoords.left ? -rtl : rtl);

        if ((_a = open) === null || _a === void 0 ? void 0 : _a.then) {
          var pending = this.pending = {
            pos: pos
          };
          open.then(function (result) {
            if (_this50.pending == pending) {
              _this50.pending = null;
              if (result) _this50.view.dispatch({
                effects: _this50.setHover.of(result)
              });
            }
          }, function (e) {
            return logException(_this50.view.state, e, "hover tooltip");
          });
        } else if (open) {
          this.view.dispatch({
            effects: this.setHover.of(open)
          });
        }
      }
    }, {
      key: "mousemove",
      value: function mousemove(event) {
        var _a;

        this.lastMove = {
          x: event.clientX,
          y: event.clientY,
          target: event.target,
          time: Date.now()
        };
        if (this.hoverTimeout < 0) this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime);
        var tooltip = this.active;

        if (tooltip && !isInTooltip(this.lastMove.target) || this.pending) {
          var _ref18 = tooltip || this.pending,
              pos = _ref18.pos,
              end = (_a = tooltip === null || tooltip === void 0 ? void 0 : tooltip.end) !== null && _a !== void 0 ? _a : pos;

          if (pos == end ? this.view.posAtCoords(this.lastMove) != pos : !isOverRange(this.view, pos, end, event.clientX, event.clientY, 6)) {
            this.view.dispatch({
              effects: this.setHover.of(null)
            });
            this.pending = null;
          }
        }
      }
    }, {
      key: "mouseleave",
      value: function mouseleave() {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = -1;
        if (this.active) this.view.dispatch({
          effects: this.setHover.of(null)
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        clearTimeout(this.hoverTimeout);
        this.view.dom.removeEventListener("mouseleave", this.mouseleave);
        this.view.dom.removeEventListener("mousemove", this.mousemove);
      }
    }]);

    return HoverPlugin;
  }();

  function isInTooltip(elt) {
    for (var cur = elt; cur; cur = cur.parentNode) {
      if (cur.nodeType == 1 && cur.classList.contains("cm-tooltip")) return true;
    }

    return false;
  }

  function isOverRange(view, from, to, x, y, margin) {
    var range = document.createRange();
    var fromDOM = view.domAtPos(from),
        toDOM = view.domAtPos(to);
    range.setEnd(toDOM.node, toDOM.offset);
    range.setStart(fromDOM.node, fromDOM.offset);
    var rects = range.getClientRects();
    range.detach();

    for (var _i98 = 0; _i98 < rects.length; _i98++) {
      var rect = rects[_i98];
      var dist = Math.max(rect.top - y, y - rect.bottom, rect.left - x, x - rect.right);
      if (dist <= margin) return true;
    }

    return false;
  }

  function _hoverTooltip(source) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var setHover = StateEffect.define();
    var hoverState = StateField.define({
      create: function create() {
        return null;
      },
      update: function update(value, tr) {
        if (value && options.hideOnChange && (tr.docChanged || tr.selection)) return null;

        var _iterator92 = _createForOfIteratorHelper(tr.effects),
            _step92;

        try {
          for (_iterator92.s(); !(_step92 = _iterator92.n()).done;) {
            var effect = _step92.value;
            if (effect.is(setHover)) return effect.value;
            if (effect.is(closeHoverTooltipEffect)) return null;
          }
        } catch (err) {
          _iterator92.e(err);
        } finally {
          _iterator92.f();
        }

        if (value && tr.docChanged) {
          var newPos = tr.changes.mapPos(value.pos, -1, MapMode.TrackDel);
          if (newPos == null) return null;
          var copy = Object.assign( /* @__PURE__ */Object.create(null), value);
          copy.pos = newPos;
          if (value.end != null) copy.end = tr.changes.mapPos(value.end);
          return copy;
        }

        return value;
      },
      provide: function provide(f) {
        return showHoverTooltip.from(f);
      }
    });
    var hoverTime = options.hoverTime || 600;
    return [hoverState, ViewPlugin.define(function (view) {
      return new HoverPlugin(view, source, hoverState, setHover, hoverTime);
    }), showHoverTooltipHost];
  }

  function _getTooltip(view, tooltip) {
    var plugin = view.plugin(tooltipPlugin);
    if (!plugin) return null;
    var found = plugin.manager.tooltips.indexOf(tooltip);
    return found < 0 ? null : plugin.manager.tooltipViews[found];
  }

  function _hasHoverTooltips(state) {
    return state.facet(showHoverTooltip).some(function (x) {
      return x;
    });
  }

  var closeHoverTooltipEffect = /* @__PURE__ */StateEffect.define();

  var _closeHoverTooltips = /* @__PURE__ */closeHoverTooltipEffect.of(null);

  function _repositionTooltips(view) {
    var _a;

    (_a = view.plugin(tooltipPlugin)) === null || _a === void 0 ? void 0 : _a.maybeMeasure();
  } // includes.js


  joo_global_object.__CM__tooltip = dist_exports;
})();
