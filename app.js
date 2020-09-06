const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/preindex.html")
})

app.get('/index', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/error.html')
})


app.listen(3000,()=>{
    console.log('Servidor funcionando')
})