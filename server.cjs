// node.jsモジュールの読み込み
const http = require('http');
const fs = require('fs');
const iconv = require("iconv-lite")

//文字化け防止
fs.readFile('path-to/shift-jis.txt', function(err, data){
    if (err) throw err;
    // console.log( data.toString('UTF-8') );    // (参考)UTF-8の場合はtoString()メソッドで文字列を取り出せる
    var buf    = new Buffer(data, 'binary');     //バイナリバッファを一時的に作成する
    var retStr = iconv.decode(buf, "Shift_JIS"); //作成したバッファを使い、iconv-liteでShift-jisからutf8に変換
    console.log(retStr);
  });
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