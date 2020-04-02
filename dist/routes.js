"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('./config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _Post = require('./models/Post'); var _Post2 = _interopRequireDefault(_Post);

const routes = new (0, _express.Router)();

routes.get('/posts', async (req, res) => {
  const posts = await _Post2.default.find();

  return res.json(posts);
});

routes.post('/posts', _multer2.default.call(void 0, _multer4.default).single('file'), async (req, res) => {
  const { originalname: name, size, key, location: url = '' } = req.file;
  const post = await _Post2.default.create({
    name,
    size,
    key,
    url,
  });
  res.json(post);
});

routes.delete('/posts/:id', async (req, res) => {
  const post = await _Post2.default.findById(req.params.id);

  await post.remove();

  return res.send();
});

exports. default = routes;
