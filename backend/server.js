// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

// const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// multer - memory storage so we get buffer directly (no disk write)
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send('ClearShot backend is running');
});

// POST /api/enhance - receives single file (field name "image")
app.post('/api/enhance', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    // upload buffer to Cloudinary using upload_stream so we don't save file on disk
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'clearshot',
        fetch_format: 'auto',
        quality: 'auto',
        // transformation: you can tune these values. This example
        // uses a sharpening effect and slight upscaling via quality.
        transformation: [
          // apply an aggressive sharpen then auto-quality/format
          { effect: "sharpen:200" },
          { quality: "auto" }
        ],
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ error: 'Image processing failed', detail: error });
        }
        // result.secure_url has the processed image URL
        return res.json({ url: result.secure_url, raw: result });
      }
    );

    // write buffer to the stream
    uploadStream.end(req.file.buffer);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error!!' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
