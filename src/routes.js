import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import Post from './models/Post';

const routes = new Router();

routes.get('/posts', async (req, res) => {
  const posts = await Post.find();

  return res.json(posts);
});

routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
  const { originalname: name, size, key, location: url = '' } = req.file;
  const post = await Post.create({
    name,
    size,
    key,
    url,
  });
  res.json(post);
});

routes.delete('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);

  await post.remove();

  return res.send();
});

export default routes;
