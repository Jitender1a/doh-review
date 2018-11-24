const express = require('express')
,bodyParser=require('body-parser')
,controllers=require('./controllers/controllers.js')
,app=express()
,port=3005

app.use(bodyParser.json())

app.get('/api/todos',controllers.getTodos)
app.post('/api/todos',controllers.createTodos)
app.delete('/api/todos/:id', controllers.deleteTodo) // 27

app.listen(port,()=>{
    console.log('hey its working',port)
})



