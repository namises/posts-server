require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

const postSchema = new mongoose.Schema({
  heading: String,
  paragraph: String,
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

app.get('/api/posts', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json({ success: true, count: posts.length, posts });
});

app.get('/api/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
  res.json({ success: true, post });
});

mongoose.connect(MONGO_URI, { tls: true }).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}).catch(err => {
  console.error('MongoDB connection failed:', err.message);
  process.exit(1);
});
