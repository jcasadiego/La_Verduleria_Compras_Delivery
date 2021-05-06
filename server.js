const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const app = express()


app.use(myconn(mysql, {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'productos'
}))

app.listen(9000, () => {
    console.log('server running on', 'http://localhost:' + 9000)
})

app.use(require('./router/router'))