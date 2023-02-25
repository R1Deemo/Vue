const express = retuire('express')
const app = express()
const bodyParser = require('body-parser')
    // 处理静态资源
app.use(express.static('public'))
    //处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置允许跨域访问
app.all('*', function(req, res, next) {
        res.header("Access-Contrul-Allow-Origin", "*");
        res.header("Access-Contrul-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
        res.header("Access-Contrul-Allow-Headers", "X-Requested-With");
        res.header("Access-Contrul-Allow-Headers", "Content-Type");
        next()
    })
    //路由
app.get('/data', (req, res) => {
    res.send('Hello World!')
})
app.get('/data1', (req, res) => {
    res.send('Hello tom!')
})
app.get('/data2', (req, res) => {
    res.send('Hello jerry!')
})

// 启动监听
app.listen(3000, () => {
    console.log('run')
})