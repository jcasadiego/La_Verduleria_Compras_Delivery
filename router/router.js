const express = require('express')

const router = express.Router()

router.get('/frutas/get', (req, res) => {
    
    req.getConnection((err, conn) => {
        if(err)return res.status(500).send('error de servidor')
        
        conn.query('SELECT Cantidad FROM Frutas', (err, rows) => {
            if(err)return res.status(500).send('error de servidor')

            res.send('Pedido Realizado')
        })
    })
})

router.get('/Verduras/get', (req, res) => {
    
    req.getConnection((err, conn) => {
        if(err)return res.status(500).send('error de servidor')
        
        conn.query('SELECT Cantidad FROM Verduras', (err, rows) => {
            if(err)return res.status(500).send('error de servidor')

            res.send('Pedido Realizado')
        })
    })
})

router.post('/verduleria/post', fileupload, (req, res) => {
    
    req.getConnection((err, conn) => {
        if(err)return res.status(500).send('error de servidor')
        
        const type = req.file.mimetype
        const name = req.file.originalname
        const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))
        
        conn.query('INSERT INTO image set ?', [{type, name, data}], (err, rows) => {
            if(err)return res.status(500).send('error de servidor')

            res.send('image saved!')
        })
    })
})

router.get('/', (req, res) => {
    res.send('Welcome to my image app')
})

module.exports = router