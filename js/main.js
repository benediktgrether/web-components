(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCard = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement('template');
template.innerHTML = "\n<style>\n    .user-card {\n        background: #f4f4f4;\n        width: 500px;\n        display: grid;\n        grid-template-columns: 1fr 2fr;\n        grid-gap: 10px;\n        margin-bottom: 15px;\n        border-bottom: darkorchid 5px solid;\n    }\n\n    .user-card img {\n        width: 100%;\n    }\n\n    .user-card button {\n        cursor: pointer;\n        background: darkorchid;\n        color: #fff;\n        border: 0;\n        border-radius: 5px;\n        padding: 5px 10px;\n    }\n</style>\n<div class=\"user-card\">\n    <img/>\n    <div>\n        <h3></h3>\n        <div class=\"info\">\n            <p>EMAIL: <slot name=\"email\"/></p>\n            <p>PHONE: <slot name=\"phone\"/></p>\n        </div>\n        <button id=\"toggle-info\">Hide Info</button>\n    </div>\n</div>\n";

var UserCard = /*#__PURE__*/function (_HTMLElement) {
  _inherits(UserCard, _HTMLElement);

  var _super = _createSuper(UserCard);

  function UserCard() {
    var _this;

    _classCallCheck(this, UserCard);

    _this = _super.call(this);
    _this.showInfo = true;

    _this.attachShadow({
      mode: 'open'
    });

    _this.shadowRoot.appendChild(template.content.cloneNode(true));

    _this.shadowRoot.querySelector('h3').innerText = _this.getAttribute('name');
    _this.shadowRoot.querySelector('img').src = _this.getAttribute('avatar');
    return _this;
  }

  _createClass(UserCard, [{
    key: "toggleInfo",
    value: function toggleInfo() {
      this.showInfo = !this.showInfo;
      var info = this.shadowRoot.querySelector('.info');
      var toggleBtn = this.shadowRoot.querySelector('#toggle-info');

      if (this.showInfo) {
        info.style.display = 'block';
        toggleBtn.innerText = 'Hide Info';
      } else {
        info.style.display = 'none';
        toggleBtn.innerText = 'Show Info';
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.shadowRoot.querySelector('#toggle-info').addEventListener('click', function () {
        _this2.toggleInfo();
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }
  }]);

  return UserCard;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

exports.UserCard = UserCard;

},{}],2:[function(require,module,exports){
"use strict";

var _userCard = require("./components/userCard");

document.addEventListener('readystatechange', function (event) {
  if (document.readyState === "complete") {
    console.log(document.readyState);
    window.customElements.define('user-card', _userCard.UserCard);
  }
});

},{"./components/userCard":1}]},{},[2]);
