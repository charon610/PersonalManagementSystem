import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
const PORT = process.env.PORT || 4000; // 포트번호 설정

const db = mysql.createPool ({
    host: "127.0.0.1", // 호스트
    user: "admin",      // 데이터베이스 계정
    password: '1111',      // 데이터베이스 비밀번호
    database: "pmpproject",  // 사용할 데이터베이스
})

app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});