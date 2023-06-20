"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var mysql_1 = __importDefault(require("mysql"));
var app = (0, express_1.default)();
var con = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'Xptmxm1212!@',
    port: 3306,
    database: 'pmproject'
});
con.connect(function (err) {
    if (err)
        console.log("MySQL 연결 실패 : ", err);
    else
        console.log('Connected!');
});
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// 테스트
app.get('/test', function (req, res) {
    console.log('enter OK1 >>>>');
    var sql = 'SELECT * FROM employee WHERE name=?';
    con.query(sql, '강민수', function (err, results) {
        if (err)
            console.log(err);
        else
            res.send(results);
    });
});
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.listen('8001', function () {
    console.log('Server started');
});
