// const express = require('express')
// const app = express()
const app = require('express')()

app.get('/',(req,res) =>{
    console.log(req.query)
    console.log(req.headers)
    res.send('Hello <h1>World</h1>')
})

app.get('/abc',(req,res)=>{
    res.send('abc is accessed')
})
app.listen(400)
