const express = require('express')
const app = express()
const bodyParser = require('body-parser')
    // 处理静态资源
app.use(express.static('public'))
    //处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置允许跨域访问
app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'PUT,GET,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", 'Content-Type');
        next()
    })
    //路由
app.get('/fdata', (req, res) => {
    res.send('fetch!')
})

app.get('/a1', (req, res) => {
    setTimeout(function() {
        res.send('Hello tom!')
    }, 1000)

})
app.get('/a2', (req, res) => {
    setTimeout(function() {
        res.send('Hello tom!')
    }, 2000)

})
app.get('/a3', (req, res) => {
    setTimeout(function() {
        res.send('Hello tom!')
    }, 3000)

})

app.get('/data', (req, res) => {
    res.send('Hello World!')
})
app.get('/data1', (req, res) => {
    setTimeout(function() {
        res.send('Hello tom!')
    }, 1000)

})
app.get('/data2', (req, res) => {
    res.send('Hello jerry!')
})



// 启动监听
app.listen(3000, () => {
    console.log('run')
})