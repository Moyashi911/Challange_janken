// node.jsモジュールの読み込み
const http = require('http');
const fs = require('fs');

// ファイルの読み込み
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('index.cjs', 'utf8');

// HTTPサーバーの作成
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
  } else if (req.url === '/style.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(css);
  } else if (req.url === '/index.cjs') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.write(js);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
  }
  res.end();
});

// サーバーの起動
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});