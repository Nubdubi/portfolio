// app.js 또는 index.js 등의 파일 생성

const express = require("express");
const path = require("path");
const app = express();

// HTML 파일이 있는 디렉토리 설정
app.use(express.static(path.join(__dirname, "public")));

// 루트 경로로 접속시 index.html 렌더링
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 서버를 3000번 포트에서 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://www.localhost:${PORT}`);
});
