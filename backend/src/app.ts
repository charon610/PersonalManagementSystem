import express, { Request, Response } from "express";
import path from "path";
import mysql from 'mysql';

const app = express();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'Xptmxm1212!@',
    port: 3306,
    database: 'pmproject'
});

con.connect(function(err){
    if (err) console.log("MySQL 연결 실패 : ", err);
    else console.log('Connected!');
});


app.use(express.static(path.join(__dirname, '../public')));

// 테스트
app.get('/test', (req, res) => {
    console.log('enter OK1 >>>>');
    let sql = 'SELECT * FROM employee WHERE name=?'
    con.query(sql, '강민수', function (err, results) {
        if (err) console.log(err);
        else res.send(results);
    });
})

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen('8001', () => {
    console.log('Server started');
});