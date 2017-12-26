/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
__webpack_require__(29).polyfill();
__webpack_require__(30);

var get = function get(url) {
  var result = fetch(url, {
    // 允许跨域时发出cookie
    headers: {
      Accept: "application/json, text/plain, */*"
    },
    method: "GET"
  });
  var headers = result.headers || new Headers();
  headers.append("Access-Control-Allow-Credentials", true);
  result.headers = headers;
  return result;
};
exports.default = get;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(7);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _home = __webpack_require__(24);

var _home2 = _interopRequireDefault(_home);

var _Album = __webpack_require__(27);

var _Album2 = _interopRequireDefault(_Album);

var _product = __webpack_require__(31);

var _product2 = _interopRequireDefault(_product);

var _detail = __webpack_require__(33);

var _detail2 = _interopRequireDefault(_detail);

var _zoom = __webpack_require__(34);

var _zoom2 = _interopRequireDefault(_zoom);

var _postcss = __webpack_require__(40);

var _postcss2 = _interopRequireDefault(_postcss);

var _listinfo = __webpack_require__(45);

var _listinfo2 = _interopRequireDefault(_listinfo);

var _sagas = __webpack_require__(46);

var _sagas2 = _interopRequireDefault(_sagas);

var _dva = __webpack_require__(47);

var _dva2 = _interopRequireDefault(_dva);

var _get = __webpack_require__(8);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: "/dvas",
  component: _dva2.default,
  loadData: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _get2.default)("http://jsonplaceholder.typicode.com/albums").then(function (response) {
                return response.json();
              }).catch(function (e) {
                return console.log("数据错误:", e);
              });

            case 2:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function loadData() {
      return _ref.apply(this, arguments);
    };
  }()
}, {
  path: "/",
  exact: true,
  component: _home2.default,
  loadData: function loadData() {
    return console.log(1);
  }
}, {
  path: "/albums",
  component: _Album2.default,
  loadData: function loadData() {
    return console.log(2);
  }
}, {
  path: "/product",
  component: _product2.default,
  loadData: function loadData() {
    return console.log(3);
  }
}, {
  path: "/detail/:id",
  component: _detail2.default,
  loadData: function loadData() {
    return console.log(4);
  }
}, {
  path: "/Zoom",
  component: _zoom2.default,
  loadData: function loadData() {
    return console.log(5);
  }
}, {
  path: "/postcss",
  component: _postcss2.default,
  loadData: function loadData() {
    return console.log(6);
  }
}, {
  path: "/list",
  component: _listinfo2.default,
  loadData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _get2.default)("http://jsonplaceholder.typicode.com/albums").then(function (response) {
                return response.json();
              }).catch(function (e) {
                return console.log("数据错误:", e);
              });

            case 2:
              data = _context2.sent;
              return _context2.abrupt("return", data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function loadData() {
      return _ref2.apply(this, arguments);
    };
  }()
}, {
  path: "/sagas",
  component: _sagas2.default,
  loadData: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var data;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _get2.default)("http://jsonplaceholder.typicode.com/albums").then(function (response) {
                return response.json();
              }).catch(function (e) {
                return console.log("数据错误:", e);
              });

            case 2:
              data = _context3.sent;
              return _context3.abrupt("return", data);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function loadData() {
      return _ref3.apply(this, arguments);
    };
  }()
}];
exports.default = routes;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = "";

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "GETALL":
      return action;
    case "GETUSER":
      return action;
    default:
      return state;
  }
}
function GETALL() {
  return {
    type: "GETALL"
  };
}
function GETUSER() {
  return {
    type: "GETUSER"
  };
}

exports.GETALL = GETALL;
exports.GETUSER = GETUSER;
exports.default = reducer;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("dva");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("dva/router");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _enter = __webpack_require__(18);

var _enter2 = _interopRequireDefault(_enter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//server相关
var Koa = __webpack_require__(60);
var app = new Koa();
var koaStatic = __webpack_require__(61);
var path = __webpack_require__(62);
var favicon = __webpack_require__(63);
var logger = __webpack_require__(64);

// 配置项相关
var PORT = 3000;
var faviocnPath = path.join(__dirname, "../src", "favicon.ico");
// 中间件使用
app.use(koaStatic(path.join(__dirname, "..", "public")));
app.use(koaStatic(path.join(__dirname, "..", "static")));
app.use(logger());
app.use(favicon(faviocnPath));

// 服务端渲染服务

app.use(_enter2.default);

app.listen(PORT, function () {
  return console.log("running on port " + PORT);
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(19);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(7);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(10);

var _reactRouterConfig = __webpack_require__(21);

var _Router = __webpack_require__(22);

var _Router2 = _interopRequireDefault(_Router);

var _render = __webpack_require__(51);

var _render2 = _interopRequireDefault(_render);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(9);

var _store = __webpack_require__(53);

var _store2 = _interopRequireDefault(_store);

var _history = __webpack_require__(65);

var _model = __webpack_require__(66);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// redux相关
var _require = __webpack_require__(16),
    routerRedux = _require.routerRedux,
    Route = _require.Route,
    Switch = _require.Switch;
//react组件相关
//react相关


var ConnectedRouter = routerRedux.ConnectedRouter;

var dva = __webpack_require__(15).default;


var ServerRender = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
    var context, loadBranchData, data, renderHtml;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            renderHtml = function renderHtml(htmlData) {
              var store = (0, _store2.default)(htmlData); //生成store
              var initialState = { users: { userList: htmlData } };
              var history = (0, _history.createMemoryHistory)();
              var app = dva({
                history: history,
                initialState: initialState
              });
              app.model(_model2.default);
              var context = {};
              app.router(function (options) {
                return _react2.default.createElement(
                  _reactRouterDom.StaticRouter,
                  { location: ctx.url, context: options.context },
                  _react2.default.createElement(_Router2.default, null)
                );
              });
              console.log(context);
              var html = (0, _server.renderToString)(app.start()({ context: context }));
              ctx.status = 200;
              ctx.body = (0, _render2.default)(html, htmlData);
            };

            context = {};
            /**
             * 获取数据函数，from "react-router-config"api
             * @param {any} location
             * 请求的路径
             **/

            loadBranchData = function loadBranchData(location) {
              var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, location); //寻找匹配的路由

              // 获取匹配路由里loadData函数;
              var promises = branch.map(function (_ref2) {
                var route = _ref2.route,
                    match = _ref2.match;

                return route.loadData ? route.loadData(match) : _promise2.default.resolve(null);
              });
              // 执行promise函数;
              return _promise2.default.all(promises);
            };

            // 异步获取到的数据


            _context.next = 5;
            return loadBranchData(ctx.url);

          case 5:
            data = _context.sent;


            // 暂时写死，值传入第一个promise的数据
            if (data.length) {
              renderHtml(data[0]);
            }

            /**
             * @param {any} htmlData
             * @object
             * 返回渲染页面
             */

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function ServerRender(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = ServerRender;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

var _Header = __webpack_require__(48);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Route, Switch } from "react-router-dom";
var _require = __webpack_require__(16),
    Route = _require.Route,
    Switch = _require.Switch;

var App = function App() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      Switch,
      null,
      _routes2.default.map(function (route, idx) {
        return _react2.default.createElement(Route, (0, _extends3.default)({}, route, { key: idx }));
      })
    )
  );
};

exports.default = App;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

var _page = __webpack_require__(26);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "Home pages"
    ),
    _react2.default.createElement(
      "p",
      null,
      "\u6D4B\u8BD5\u56FE\u7247"
    ),
    _react2.default.createElement("div", { className: "bg-back" }),
    _react2.default.createElement("img", { src: _page2.default, style: { width: 300, height: 300 } })
  );
};

exports.default = HomePage;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
	"bg-back": "_3-TaVqpUi85FsJ_c-e0Iby"
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/page2.jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(12);

var _card2 = _interopRequireDefault(_card);

var _table = __webpack_require__(28);

var _table2 = _interopRequireDefault(_table);

var _spin = __webpack_require__(13);

var _spin2 = _interopRequireDefault(_spin);

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(7);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _get = __webpack_require__(8);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var album = function (_Component) {
  (0, _inherits3.default)(album, _Component);

  function album() {
    (0, _classCallCheck3.default)(this, album);

    var _this = (0, _possibleConstructorReturn3.default)(this, (album.__proto__ || (0, _getPrototypeOf2.default)(album)).call(this));

    _this.state = {
      databash: []
    };
    _this.columns = [{
      title: "id",
      dataIndex: "id",
      key: "1"
    }, {
      title: "姓名",
      dataIndex: "name",
      key: "2"
    }, {
      title: "网址",
      dataIndex: "url",
      key: "3"
    }, {
      title: "语言",
      dataIndex: "language",
      key: "4"
    }, {
      title: "公司地址",
      dataIndex: "officialSite",
      key: "5"
    }, {
      title: "注册时间",
      dataIndex: "premiered",
      key: "6"
    }, {
      title: "状态",
      dataIndex: "type",
      key: "7"
    }, {
      title: "Action",
      key: "action",
      render: function render(text, record) {
        return _react2.default.createElement(
          "a",
          { href: "/detail/" + record.id },
          "\u67E5\u770B\u8BE6\u60C5"
        );
      }
    }];
    return _this;
  }

  (0, _createClass3.default)(album, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data, databash;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _get2.default)("http://api.tvmaze.com/search/shows?q=girls").then(function (response) {
                  return response.json();
                }).catch(function (e) {
                  return console.log("数据错误:", e);
                });

              case 2:
                data = _context.sent;
                databash = [];

                if (data.length > 0) {
                  data.map(function (item, idx) {
                    if (item.show) {
                      item.show.key = idx;
                      databash.push(item.show);
                    }
                  });
                  this.setState({
                    databash: databash
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var databash = this.state.databash;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          null,
          "\u6D4B\u8BD5\u5217\u8868"
        ),
        _react2.default.createElement(
          _card2.default,
          {
            title: "\u5217\u8868",
            extra: _react2.default.createElement(
              "a",
              { href: "#" },
              "More"
            ),
            style: { margin: 50, marginTop: 0 }
          },
          databash.length === 0 ? _react2.default.createElement(_spin2.default, { size: "large" }) : _react2.default.createElement(_table2.default, { columns: this.columns, dataSource: databash })
        )
      );
    }
  }]);
  return album;
}(_react.Component);

exports.default = album;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calendar = __webpack_require__(32);

var _calendar2 = _interopRequireDefault(_calendar);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onPanelChange(value, mode) {
  console.log(value, mode);
}

var product = function product() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "\u6D4B\u8BD5antd"
    ),
    _react2.default.createElement(_calendar2.default, { onPanelChange: onPanelChange })
  );
};

exports.default = product;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/calendar");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(12);

var _card2 = _interopRequireDefault(_card);

var _spin = __webpack_require__(13);

var _spin2 = _interopRequireDefault(_spin);

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(7);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _get = __webpack_require__(8);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailPage = function (_Component) {
  (0, _inherits3.default)(DetailPage, _Component);

  function DetailPage() {
    (0, _classCallCheck3.default)(this, DetailPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DetailPage.__proto__ || (0, _getPrototypeOf2.default)(DetailPage)).call(this));

    _this.state = {
      data: null
    };
    return _this;
  }

  (0, _createClass3.default)(DetailPage, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var params, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = this.props.match.params.id;
                _context.next = 3;
                return (0, _get2.default)("http://api.tvmaze.com/shows/" + params).then(function (response) {
                  return response.json();
                }).catch(function (e) {
                  return console.log("数据错误:", e);
                });

              case 3:
                data = _context.sent;

                this.setState({
                  data: data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;

      return data == null ? _react2.default.createElement(_spin2.default, { size: "large" }) : _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          null,
          "\u8BE6\u60C5\u9875\u9762"
        ),
        _react2.default.createElement(
          "p",
          null,
          "\u6D4B\u8BD5\u8BE6\u60C5"
        ),
        _react2.default.createElement(
          _card2.default,
          { title: "\u8BE6\u7EC6\u4FE1\u606F", style: { width: 300 } },
          _react2.default.createElement(
            "div",
            { className: "custom-image" },
            data.image.medium ? _react2.default.createElement("img", { alt: "example", width: "100%", src: data.image.medium }) : _react2.default.createElement("img", {
              alt: "example",
              width: "100%",
              src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "custom-card" },
            _react2.default.createElement(
              "h3",
              null,
              data.name
            ),
            _react2.default.createElement(
              "p",
              null,
              data.url
            )
          )
        )
      );
    }
  }]);
  return DetailPage;
}(_react.Component);

exports.default = DetailPage;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _LineChart = __webpack_require__(35);

var _LineChart2 = _interopRequireDefault(_LineChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _LineChart2.default;

// window.renderPCSize && window.renderPCSize();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recharts = __webpack_require__(36);

var _ZoomContainer = __webpack_require__(37);

var _ZoomContainer2 = _interopRequireDefault(_ZoomContainer);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data03 = [{ date: 'Jan 04 2016', price: 105.35 }, { date: 'Jan 05 2016', price: 102.71 }, { date: 'Jan 06 2016', price: 100.7 }, { date: 'Jan 07 2016', price: 96.45 }, { date: 'Jan 08 2016', price: 96.96 }, { date: 'Jan 11 2016', price: 98.53 }, { date: 'Jan 12 2016', price: 99.96 }, { date: 'Jan 13 2016', price: 97.39 }, { date: 'Jan 14 2016', price: 99.52 }, { date: 'Jan 15 2016', price: 97.13 }, { date: 'Jan 19 2016', price: 96.66 }, { date: 'Jan 20 2016', price: 96.79 }, { date: 'Jan 21 2016', price: 96.3 }, { date: 'Jan 22 2016', price: 101.42 }, { date: 'Jan 25 2016', price: 99.44 }, { date: 'Jan 26 2016', price: 99.99 }, { date: 'Jan 27 2016', price: 93.42 }, { date: 'Jan 28 2016', price: 94.09 }, { date: 'Jan 29 2016', price: 97.34 }, { date: 'Feb 01 2016', price: 96.43 }, { date: 'Feb 02 2016', price: 94.48 }, { date: 'Feb 03 2016', price: 96.35 }, { date: 'Feb 04 2016', price: 96.6 }, { date: 'Feb 05 2016', price: 94.02 }, { date: 'Feb 08 2016', price: 95.01 }, { date: 'Feb 09 2016', price: 94.99 }, { date: 'Feb 10 2016', price: 94.27 }, { date: 'Feb 11 2016', price: 93.7 }, { date: 'Feb 12 2016', price: 93.99 }, { date: 'Feb 16 2016', price: 96.64 }, { date: 'Feb 17 2016', price: 98.12 }, { date: 'Feb 18 2016', price: 96.26 }, { date: 'Feb 19 2016', price: 96.04 }, { date: 'Feb 22 2016', price: 96.88 }, { date: 'Feb 23 2016', price: 94.69 }, { date: 'Feb 24 2016', price: 96.1 }, { date: 'Feb 25 2016', price: 96.76 }, { date: 'Feb 26 2016', price: 96.91 }, { date: 'Feb 29 2016', price: 96.69 }, { date: 'Mar 01 2016', price: 100.53 }, { date: 'Mar 02 2016', price: 100.75 }, { date: 'Mar 03 2016', price: 101.5 }, { date: 'Mar 04 2016', price: 103.01 }, { date: 'Mar 07 2016', price: 101.87 }, { date: 'Mar 08 2016', price: 101.03 }, { date: 'Mar 09 2016', price: 101.12 }, { date: 'Mar 10 2016', price: 101.17 }, { date: 'Mar 11 2016', price: 102.26 }, { date: 'Mar 14 2016', price: 102.52 }, { date: 'Mar 15 2016', price: 104.58 }, { date: 'Mar 16 2016', price: 105.97 }, { date: 'Mar 17 2016', price: 105.8 }, { date: 'Mar 18 2016', price: 105.92 }, { date: 'Mar 21 2016', price: 105.91 }, { date: 'Mar 22 2016', price: 106.72 }, { date: 'Mar 23 2016', price: 106.13 }, { date: 'Mar 24 2016', price: 105.67 }, { date: 'Mar 28 2016', price: 105.19 }, { date: 'Mar 29 2016', price: 107.68 }, { date: 'Mar 30 2016', price: 109.56 }, { date: 'Mar 31 2016', price: 108.99 }, { date: 'Apr 01 2016', price: 109.99 }, { date: 'Apr 04 2016', price: 111.12 }, { date: 'Apr 05 2016', price: 109.81 }, { date: 'Apr 06 2016', price: 110.96 }, { date: 'Apr 07 2016', price: 108.54 }, { date: 'Apr 08 2016', price: 108.66 }, { date: 'Apr 11 2016', price: 109.02 }, { date: 'Apr 12 2016', price: 110.44 }, { date: 'Apr 13 2016', price: 112.04 }, { date: 'Apr 14 2016', price: 112.1 }, { date: 'Apr 15 2016', price: 109.85 }, { date: 'Apr 18 2016', price: 107.48 }, { date: 'Apr 19 2016', price: 106.91 }, { date: 'Apr 20 2016', price: 107.13 }, { date: 'Apr 21 2016', price: 105.97 }, { date: 'Apr 22 2016', price: 105.68 }, { date: 'Apr 25 2016', price: 105.08 }, { date: 'Apr 26 2016', price: 104.35 }, { date: 'Apr 27 2016', price: 97.82 }, { date: 'Apr 28 2016', price: 94.83 }, { date: 'Apr 29 2016', price: 93.74 }, { date: 'May 02 2016', price: 93.64 }, { date: 'May 03 2016', price: 95.18 }, { date: 'May 04 2016', price: 94.19 }, { date: 'May 05 2016', price: 93.24 }, { date: 'May 06 2016', price: 92.72 }, { date: 'May 09 2016', price: 92.79 }, { date: 'May 10 2016', price: 93.42 }, { date: 'May 11 2016', price: 92.51 }, { date: 'May 12 2016', price: 90.34 }, { date: 'May 13 2016', price: 90.52 }, { date: 'May 16 2016', price: 93.88 }, { date: 'May 17 2016', price: 93.49 }, { date: 'May 18 2016', price: 94.56 }, { date: 'May 19 2016', price: 94.2 }, { date: 'May 20 2016', price: 95.22 }, { date: 'May 23 2016', price: 96.43 }, { date: 'May 24 2016', price: 97.9 }, { date: 'May 25 2016', price: 99.62 }, { date: 'May 26 2016', price: 100.41 }, { date: 'May 27 2016', price: 100.35 }, { date: 'May 31 2016', price: 99.86 }, { date: 'Jun 01 2016', price: 98.46 }, { date: 'Jun 02 2016', price: 97.72 }, { date: 'Jun 03 2016', price: 97.92 }, { date: 'Jun 06 2016', price: 98.63 }, { date: 'Jun 07 2016', price: 99.03 }, { date: 'Jun 08 2016', price: 98.94 }, { date: 'Jun 09 2016', price: 99.65 }, { date: 'Jun 10 2016', price: 98.83 }, { date: 'Jun 13 2016', price: 97.34 }, { date: 'Jun 14 2016', price: 97.46 }, { date: 'Jun 15 2016', price: 97.14 }, { date: 'Jun 16 2016', price: 97.55 }, { date: 'Jun 17 2016', price: 95.33 }, { date: 'Jun 20 2016', price: 95.1 }, { date: 'Jun 21 2016', price: 95.91 }, { date: 'Jun 22 2016', price: 95.55 }, { date: 'Jun 23 2016', price: 96.1 }, { date: 'Jun 24 2016', price: 93.4 }, { date: 'Jun 27 2016', price: 92.04 }, { date: 'Jun 28 2016', price: 93.59 }, { date: 'Jun 29 2016', price: 94.4 }, { date: 'Jun 30 2016', price: 95.6 }, { date: 'Jul 01 2016', price: 95.89 }, { date: 'Jul 05 2016', price: 94.99 }, { date: 'Jul 06 2016', price: 95.53 }, { date: 'Jul 07 2016', price: 95.94 }, { date: 'Jul 08 2016', price: 96.68 }, { date: 'Jul 11 2016', price: 96.98 }, { date: 'Jul 12 2016', price: 97.42 }, { date: 'Jul 13 2016', price: 96.87 }, { date: 'Jul 14 2016', price: 98.79 }, { date: 'Jul 15 2016', price: 98.78 }, { date: 'Jul 18 2016', price: 99.83 }, { date: 'Jul 19 2016', price: 99.87 }, { date: 'Jul 20 2016', price: 99.96 }, { date: 'Jul 21 2016', price: 99.43 }, { date: 'Jul 22 2016', price: 98.66 }, { date: 'Jul 25 2016', price: 97.34 }, { date: 'Jul 26 2016', price: 96.67 }, { date: 'Jul 27 2016', price: 102.95 }, { date: 'Jul 28 2016', price: 104.34 }, { date: 'Jul 29 2016', price: 104.21 }, { date: 'Aug 01 2016', price: 106.05 }, { date: 'Aug 02 2016', price: 104.48 }, { date: 'Aug 03 2016', price: 105.79 }, { date: 'Aug 04 2016', price: 105.87 }, { date: 'Aug 05 2016', price: 107.48 }, { date: 'Aug 08 2016', price: 108.37 }, { date: 'Aug 09 2016', price: 108.81 }, { date: 'Aug 10 2016', price: 108 }, { date: 'Aug 11 2016', price: 107.93 }, { date: 'Aug 12 2016', price: 108.18 }, { date: 'Aug 15 2016', price: 109.48 }, { date: 'Aug 16 2016', price: 109.38 }, { date: 'Aug 17 2016', price: 109.22 }, { date: 'Aug 18 2016', price: 109.08 }, { date: 'Aug 19 2016', price: 109.36 }, { date: 'Aug 22 2016', price: 108.51 }, { date: 'Aug 23 2016', price: 108.85 }, { date: 'Aug 24 2016', price: 108.03 }, { date: 'Aug 25 2016', price: 107.57 }, { date: 'Aug 26 2016', price: 106.94 }, { date: 'Aug 29 2016', price: 106.82 }, { date: 'Aug 30 2016', price: 106 }, { date: 'Aug 31 2016', price: 106.1 }, { date: 'Sept 01 2016', price: 106.73 }, { date: 'Sept 02 2016', price: 107.73 }, { date: 'Sept 06 2016', price: 107.7 }, { date: 'Sept 07 2016', price: 108.36 }, { date: 'Sept 08 2016', price: 105.52 }, { date: 'Sept 09 2016', price: 103.13 }, { date: 'Sept 12 2016', price: 105.44 }, { date: 'Sept 13 2016', price: 107.95 }, { date: 'Sept 14 2016', price: 111.77 }, { date: 'Sept 15 2016', price: 115.57 }, { date: 'Sept 16 2016', price: 114.92 }, { date: 'Sept 19 2016', price: 113.58 }, { date: 'Sept 20 2016', price: 113.57 }, { date: 'Sept 21 2016', price: 113.55 }, { date: 'Sept 22 2016', price: 114.62 }, { date: 'Sept 23 2016', price: 112.71 }, { date: 'Sept 26 2016', price: 112.88 }, { date: 'Sept 27 2016', price: 113.09 }, { date: 'Sept 28 2016', price: 113.95 }, { date: 'Sept 29 2016', price: 112.18 }, { date: 'Sept 30 2016', price: 113.05 }, { date: 'Oct 03 2016', price: 112.52 }, { date: 'Oct 04 2016', price: 113 }, { date: 'Oct 05 2016', price: 113.05 }, { date: 'Oct 06 2016', price: 113.89 }, { date: 'Oct 07 2016', price: 114.06 }, { date: 'Oct 10 2016', price: 116.05 }, { date: 'Oct 11 2016', price: 116.3 }, { date: 'Oct 12 2016', price: 117.34 }, { date: 'Oct 13 2016', price: 116.98 }, { date: 'Oct 14 2016', price: 117.63 }, { date: 'Oct 17 2016', price: 117.55 }, { date: 'Oct 18 2016', price: 117.47 }, { date: 'Oct 19 2016', price: 117.12 }, { date: 'Oct 20 2016', price: 117.06 }, { date: 'Oct 21 2016', price: 116.6 }, { date: 'Oct 24 2016', price: 117.65 }, { date: 'Oct 25 2016', price: 118.25 }, { date: 'Oct 26 2016', price: 115.59 }, { date: 'Oct 27 2016', price: 114.48 }, { date: 'Oct 28 2016', price: 113.72 }, { date: 'Oct 31 2016', price: 113.54 }, { date: 'Nov 01 2016', price: 111.49 }, { date: 'Nov 02 2016', price: 111.59 }, { date: 'Nov 03 2016', price: 109.83 }, { date: 'Nov 04 2016', price: 108.84 }, { date: 'Nov 07 2016', price: 110.41 }, { date: 'Nov 08 2016', price: 111.06 }, { date: 'Nov 09 2016', price: 110.88 }, { date: 'Nov 10 2016', price: 107.79 }, { date: 'Nov 11 2016', price: 108.43 }, { date: 'Nov 14 2016', price: 105.71 }, { date: 'Nov 15 2016', price: 107.11 }, { date: 'Nov 16 2016', price: 109.99 }, { date: 'Nov 17 2016', price: 109.95 }, { date: 'Nov 18 2016', price: 110.06 }, { date: 'Nov 21 2016', price: 111.73 }, { date: 'Nov 22 2016', price: 111.8 }, { date: 'Nov 23 2016', price: 111.23 }, { date: 'Nov 25 2016', price: 111.79 }, { date: 'Nov 28 2016', price: 111.57 }, { date: 'Nov 29 2016', price: 111.46 }, { date: 'Nov 30 2016', price: 110.52 }, { date: 'Dec 01 2016', price: 109.49 }, { date: 'Dec 02 2016', price: 109.9 }, { date: 'Dec 05 2016', price: 109.11 }, { date: 'Dec 06 2016', price: 109.95 }, { date: 'Dec 07 2016', price: 111.03 }, { date: 'Dec 08 2016', price: 112.12 }, { date: 'Dec 09 2016', price: 113.95 }, { date: 'Dec 12 2016', price: 113.3 }, { date: 'Dec 13 2016', price: 115.19 }, { date: 'Dec 14 2016', price: 115.19 }, { date: 'Dec 15 2016', price: 115.82 }, { date: 'Dec 16 2016', price: 115.97 }, { date: 'Dec 19 2016', price: 116.64 }, { date: 'Dec 20 2016', price: 116.95 }, { date: 'Dec 21 2016', price: 117.06 }, { date: 'Dec 22 2016', price: 116.29 }, { date: 'Dec 23 2016', price: 116.52 }, { date: 'Dec 27 2016', price: 117.26 }, { date: 'Dec 28 2016', price: 116.76 }, { date: 'Dec 29 2016', price: 116.73 }, { date: 'Dec 30 2016', price: 115.82 }];

var initilaState = {};

var Demo = function (_Component) {
  (0, _inherits3.default)(Demo, _Component);

  function Demo(props) {
    (0, _classCallCheck3.default)(this, Demo);
    return (0, _possibleConstructorReturn3.default)(this, (Demo.__proto__ || (0, _getPrototypeOf2.default)(Demo)).call(this, props));
  }

  (0, _createClass3.default)(Demo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _recharts.ResponsiveContainer,
        null,
        _react2.default.createElement(
          _ZoomContainer2.default,
          { ref: function ref(component) {
              component.initBrushComponent(_this2.brushComponent);
            } },
          _react2.default.createElement(
            _recharts.LineChart,
            {
              width: 800, height: 360, data: data03,
              margin: { top: 40, right: 40, bottom: 20, left: 20 }
            },
            _react2.default.createElement(_recharts.CartesianGrid, { vertical: false }),
            _react2.default.createElement(_recharts.XAxis, { dataKey: 'date' }),
            _react2.default.createElement(_recharts.YAxis, { domain: ['auto', 'auto'] }),
            _react2.default.createElement(_recharts.Tooltip, null),
            _react2.default.createElement(_recharts.Line, { dataKey: 'price', stroke: '#ff7300', dot: false }),
            _react2.default.createElement(
              _recharts.Brush,
              { dataKey: 'date', startIndex: 0, ref: function ref(component) {
                  _this2.brushComponent = component;
                } },
              _react2.default.createElement(
                _recharts.AreaChart,
                null,
                _react2.default.createElement(_recharts.CartesianGrid, null),
                _react2.default.createElement(_recharts.YAxis, { hide: true, domain: ['auto', 'auto'] }),
                _react2.default.createElement(_recharts.Area, { dataKey: 'price', stroke: '#ff7300', fill: '#ff7300', dot: false })
              )
            )
          )
        )
      );
    }
  }]);
  return Demo;
}(_react.Component);

Demo.displayName = 'LineChartDemo';
exports.default = Demo;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZoomContainer = function (_Component) {
	(0, _inherits3.default)(ZoomContainer, _Component);

	function ZoomContainer(props) {
		(0, _classCallCheck3.default)(this, ZoomContainer);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ZoomContainer.__proto__ || (0, _getPrototypeOf2.default)(ZoomContainer)).call(this, props));

		_this.onZoom = _this.onZoom.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(ZoomContainer, [{
		key: 'onZoom',
		value: function onZoom(e) {
			e.stopPropagation();
			e.preventDefault();

			if (this.leaveTimer) {
				clearTimeout(this.leaveTimer);
				this.leaveTimer = null;
			}

			var deltaX = e.deltaX,
			    deltaY = e.deltaY,
			    deltaZ = e.deltaZ;

			var delta = 0;
			if (Math.abs(deltaX) > 0) {
				delta = deltaX;
			} else if (Math.abs(deltaY) > 0) {
				delta = deltaY;
			} else if (Math.abs(deltaZ) > 0) {
				delta = deltaZ;
			} else {
				return;
			}
			delta = delta / 100;
			if (this.brushComponent) {
				this.handleSlideWheel(delta);
			}
		}
	}, {
		key: 'handleSlideWheel',
		value: function handleSlideWheel(delta) {
			var _brushComponent$state = this.brushComponent.state,
			    slideMoveStartX = _brushComponent$state.slideMoveStartX,
			    startX = _brushComponent$state.startX,
			    endX = _brushComponent$state.endX;
			var _brushComponent$props = this.brushComponent.props,
			    x = _brushComponent$props.x,
			    width = _brushComponent$props.width,
			    travellerWidth = _brushComponent$props.travellerWidth,
			    startIndex = _brushComponent$props.startIndex,
			    endIndex = _brushComponent$props.endIndex,
			    onChange = _brushComponent$props.onChange;


			if (Math.abs(delta) > 0) {
				delta = delta * 10;
			} else {
				delta = 10;
			}
			if (startX > endX) {
				// debugger;
				endX = Math.max(x, endX - delta);
				startX = Math.min(x + width - travellerWidth, startX + delta);
			} else {
				startX = Math.max(x, startX + delta);
				endX = Math.min(x + width - travellerWidth, endX - delta);
			}
			var newIndex = this.brushComponent.getIndex({
				startX: startX,
				endX: endX
			});
			if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
				onChange(newIndex);
			}
			this.brushComponent.setState({
				startX: startX,
				endX: endX
			});
		}
	}, {
		key: 'initBrushComponent',
		value: function initBrushComponent(component) {
			this.brushComponent = component;
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.leaveTimer) {
				clearTimeout(this.leaveTimer);
				this.leaveTimer = null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var children = this.props.children;

			return _react2.default.createElement(
				'div',
				{ className: 'zoom-container', onWheel: this.onZoom },
				children
			);
		}
	}]);
	return ZoomContainer;
}(_react.Component);

ZoomContainer.displayName = 'ZoomContainer';
exports.default = ZoomContainer;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(39);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {
	"zoom-container": "_26KCBpVHzDd9OkNx3e4uAM"
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(41);

var _classnames2 = _interopRequireDefault(_classnames);

var _indexP = __webpack_require__(42);

var _indexP2 = _interopRequireDefault(_indexP);

__webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hello = function Hello() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            '\u6D4B\u8BD5postcss'
        ),
        _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(_indexP2.default.title1, 'bg-gray', 'text-blue') },
            '666666'
        ),
        _react2.default.createElement(
            'div',
            { className: _indexP2.default.title2 },
            '888'
        ),
        _react2.default.createElement(
            'div',
            { className: _indexP2.default.titleTest3 },
            '888'
        )
    );
};

exports.default = Hello;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	"bg-yellow": "_2xobktvYdU_MvwxXYujTp_",
	"title1": "_1yRxQrQujiIbIjMPFUvkwI",
	"title2": "_1hhktCjQGFS5usz07RTX3m _2xobktvYdU_MvwxXYujTp_",
	"title-test3": "_1HempcD3qzeYR1_kEyEpc6 " + __webpack_require__(43)["bg-blue"] + "",
	"menu": "_33JeaDDNxLEbJiZxQjo6I0",
	"menu_link": "_6mpSBUEnOtQ3NCg2GY9KM"
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
	"bg-gray": "_1I9bVhK3yfd4nt6tbQrcQx",
	"text-blue": "_1ITvBe56GQnDqOBsFDNzmm",
	"text-grey": "_2yb1f2KEBAA2PjaKvb1Edh",
	"bg-blue": "_1qxYqIUR0nG-R-M8V3d5Sv"
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
	"bg-gray": "_1I9bVhK3yfd4nt6tbQrcQx",
	"text-blue": "_1ITvBe56GQnDqOBsFDNzmm",
	"text-grey": "_2yb1f2KEBAA2PjaKvb1Edh",
	"bg-blue": "_1qxYqIUR0nG-R-M8V3d5Sv"
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(7);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _get = __webpack_require__(8);

var _get2 = _interopRequireDefault(_get);

var _reactRedux = __webpack_require__(9);

var _reducers = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List(props) {
    (0, _classCallCheck3.default)(this, List);

    var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));

    _this.state = {
      data: null
    };
    // this.fetchData = async callback => {
    //   // let data = await FetchGet("data/test.json")
    //   //   .then(response => response.json())
    //   //   .catch(e => console.log("数据错误:", e));
    //   let data = window.INITIAL_STATE;
    //   console.log(data);
    //   callback.call(null, data);
    // };
    return _this;
  }

  (0, _createClass3.default)(List, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.fetchData(function (data) {
                  _this2.setState({
                    data: data
                  });
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      var data = this.props.data_base;
      var dataList = void 0;
      if (data) {
        dataList = data.map(function (item, idx) {
          return _react2.default.createElement(
            "li",
            { key: idx },
            _react2.default.createElement(
              "h3",
              null,
              item.title
            ),
            _react2.default.createElement(
              "span",
              null,
              item.id
            )
          );
        });
      }
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "p",
          null,
          "\u6D4B\u8BD5\u8BF7\u6C42\u6570\u636E"
        ),
        _react2.default.createElement(
          "ul",
          null,
          dataList
        )
      );
    }
  }]);
  return List;
}(_react.Component);

function mapStateToProps(state) {
  console.log(state);
  var data_base = state;

  return { data_base: data_base };
}

var mapDispatchToProps = { GETALL: _reducers.GETALL };
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(List);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _reducers = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SagasComponent = function (_Component) {
  (0, _inherits3.default)(SagasComponent, _Component);

  function SagasComponent() {
    (0, _classCallCheck3.default)(this, SagasComponent);
    return (0, _possibleConstructorReturn3.default)(this, (SagasComponent.__proto__ || (0, _getPrototypeOf2.default)(SagasComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(SagasComponent, [{
    key: "render",
    value: function render() {
      var result = this.props.result;

      var dataList = null;
      if (result) {
        dataList = result.map(function (item, idx) {
          return _react2.default.createElement(
            "li",
            { key: idx },
            _react2.default.createElement(
              "h3",
              null,
              item.title
            ),
            _react2.default.createElement(
              "span",
              null,
              item.id
            )
          );
        });
      }
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          null,
          "\u6D4B\u8BD5sagas"
        ),
        _react2.default.createElement(
          "ul",
          null,
          dataList
        )
      );
    }
  }]);
  return SagasComponent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { result: state };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(SagasComponent);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DvaComponent = function (_Component) {
  (0, _inherits3.default)(DvaComponent, _Component);

  function DvaComponent() {
    (0, _classCallCheck3.default)(this, DvaComponent);
    return (0, _possibleConstructorReturn3.default)(this, (DvaComponent.__proto__ || (0, _getPrototypeOf2.default)(DvaComponent)).call(this));
  }

  (0, _createClass3.default)(DvaComponent, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      var userList = this.props.userList;

      var dataList = null;
      if (userList) {
        dataList = userList.map(function (item, idx) {
          return _react2.default.createElement(
            "li",
            { key: idx },
            _react2.default.createElement(
              "h3",
              null,
              item.title
            ),
            _react2.default.createElement(
              "span",
              null,
              item.id
            )
          );
        });
      }
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          null,
          "hehe"
        ),
        _react2.default.createElement(
          "ul",
          null,
          dataList
        )
      );
    }
  }]);
  return DvaComponent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var users = state.users;

  return users || {};
};
exports.default = (0, _dva.connect)(mapStateToProps)(DvaComponent);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(49);

var _layout2 = _interopRequireDefault(_layout);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _layout2.default.Header;

var MainMenu = function MainMenu() {
  return _react2.default.createElement(
    _layout2.default,
    null,
    _react2.default.createElement(
      Header,
      { className: "common_header" },
      _react2.default.createElement(
        "nav",
        null,
        _react2.default.createElement(
          "a",
          { href: "/" },
          "Home"
        ),
        _react2.default.createElement(
          "a",
          { href: "/albums" },
          "albums"
        ),
        _react2.default.createElement(
          "a",
          { href: "/product" },
          "product"
        ),
        _react2.default.createElement(
          "a",
          { href: "/zoom" },
          "zoom"
        ),
        _react2.default.createElement(
          "a",
          { href: "/postcss" },
          "postcss"
        ),
        _react2.default.createElement(
          "a",
          { href: "/list" },
          "list"
        ),
        _react2.default.createElement(
          "a",
          { href: "/sagas" },
          "sagas"
        ),
        _react2.default.createElement(
          "a",
          { href: "/dvas" },
          "dva"
        )
      )
    )
  );
};

exports.default = MainMenu;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = {
	"common_header": "_2-fBXp-5am6DPKRSIgh5_J"
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(52);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (html, data) {
    return "\n<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>\u670D\u52A1\u6BB5\u6E32\u67D3\u6D4B\u8BD5</title>\n        <link rel='stylesheet' type='text/css' href='/css/main.css' />\n    </head>\n    <body>\n        <div id=\"root\">" + html + "</div>\n        <script>\n          window.INITIAL_STATE =" + (0, _stringify2.default)(data) + "\n        </script>\n        <script src=\"/js/bundle.js\"></script>\n    </body>\n</html>\n";
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(54);

var _sagas = __webpack_require__(55);

var _sagas2 = _interopRequireDefault(_sagas);

var _userReduces = __webpack_require__(58);

var _userReduces2 = _interopRequireDefault(_userReduces);

var _reduxSaga = __webpack_require__(59);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStoreWithState(initialState) {
  var sagaMiddleware = (0, _reduxSaga2.default)();
  var store = (0, _redux.createStore)(_userReduces2.default, initialState, (0, _redux.applyMiddleware)(sagaMiddleware));
  sagaMiddleware.run(_sagas2.default);
  return store;
}

exports.default = createStoreWithState;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(56);

var _user = __webpack_require__(57);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(fetchUser),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(mySaga),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(mySaga);

function fetchUser(action) {
  return _regenerator2.default.wrap(function fetchUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.select)(function (a, b) {
            console.log(a, b);
          });

        case 3:
          _context.next = 10;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);

          console.log(_context.t0);
          _context.next = 10;
          return (0, _effects.put)({ type: "USER_FETCH_FAILED" });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 5]]);
}

function mySaga() {
  return _regenerator2.default.wrap(function mySaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)("USER_FETCH_REQUESTED", fetchUser);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function mySaga() {
  return _regenerator2.default.wrap(function mySaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeLatest)("USER_FETCH_REQUESTED", fetchUser);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

exports.default = mySaga;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = __webpack_require__(8);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function query() {
  return (0, _get2.default)("http://jsonplaceholder.typicode.com/albums");
}

exports.default = {
  query: query
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = {};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  var result = action.result;

  switch (action.type) {
    case "USER_FETCH_SUCCEEDED":
      return {
        type: "success",
        state: state
      };
    case "USER_FETCH_FAILED":
      return {
        type: "fail",
        state: state
      };
    default:
      return state;
  }
}

exports.default = reducer;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("koa-favicon");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: "users",
  state: {},
  reducers: {
    updateState: function updateState(state, _ref) {
      var payload = _ref.payload;

      return (0, _extends3.default)({}, state, payload);
    }
  },
  effects: {
    login: /*#__PURE__*/_regenerator2.default.mark(function login(action, _ref2) {
      var call = _ref2.call,
          put = _ref2.put;
      var login;
      return _regenerator2.default.wrap(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              login = true;
              _context.next = 3;
              return put({ type: "updateState", payload: { login: login } });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, login, this);
    })
  },
  subscriptions: {
    setup: function setup(_ref3) {
      var dispatch = _ref3.dispatch;

      dispatch({ type: "login" });
    }
  }
};

/***/ })
/******/ ]);