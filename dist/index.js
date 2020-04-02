"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _morgan = require('morgan'); var _morgan2 = _interopRequireDefault(_morgan);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

const app = _express2.default.call(void 0, );

_mongoose2.default.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

app.use(_cors2.default.call(void 0, ));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_morgan2.default.call(void 0, 'dev'));
app.use(
  '/files',
  _express2.default.static(_path2.default.resolve(__dirname, '..', 'tmp', 'uploads'))
);

app.use(_routes2.default);

app.listen(process.env.PORT || 3333);
