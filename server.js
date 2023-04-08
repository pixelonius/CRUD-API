require('dotenv').config()

const express=require('express')
const app=express()
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true,useUnifiedTopology: true})

const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=> console.log('Connected to database'))



const contactsRouter=require('./routes/contacts')
app.use('/contacts', contactsRouter)

app.listen(3000, ()=> console.log('Server started'))