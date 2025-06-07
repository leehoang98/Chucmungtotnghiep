const express = require('express');
const path = require('path');
const app = express();

// Trỏ tới thư mục chứa file tĩnh (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Lắng nghe cổng 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại: http://localhost:${PORT}`);
});
