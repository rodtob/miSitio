const express = require('express')

const app = express()

app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/home.html')
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/error.html')
})


app.listen(3000,()=>{
    console.log('Servidor funcionando')
})