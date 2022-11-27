const express=require('express')
const mysql=require('mysql')
const myconn=require('express-myconnection')
const routes=require('./routes')
const cors = require('cors')


const app=express()
app.set('port',9000)
app.use(cors())


const dbOptions={
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456789',
    database:'library'
}

/// middelwars --------------------
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())///formato de entrega y de recepcion 

app.get('/',(red,res)=>{
    res.send('Welcome to my App 2022')

})

app.use('/api',routes)


app.listen(app.get('port'),()=>{
    console.log(`server runing to port ${app.get('port')}`)
})
