const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/preindex.html")
})

app.get('/index', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/error.html')
})


app.listen(3000,()=>{
    console.log('Servidor funcionando')
})