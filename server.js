// node server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DATA_FILE = path.join(__dirname, 'data.json');

// ensure file exists
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]', 'utf8');

app.post('/submit', (req, res) => {
  try {
    const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8') || '[]');
    existing.push({ ...req.body, created_at: new Date().toISOString() });
    fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2), 'utf8');
    res.json({ ok: true, saved: req.body });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'gagal menyimpan' });
  }
});

// serve static (opsional)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan: http://localhost:${PORT}`));