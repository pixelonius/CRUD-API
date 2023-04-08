const express=require('express')
const router = express.Router()
const Contact=require('../models/contact')

//get all
router.get('/',async (req,res)=>{
try{
const contacts=await Contact.find()
res.json(contacts)
} catch(err){
  res.status(500).json({message:err.message})
}
})
//get one
router.get('/:id',(req,res)=>{
  res.send(req.params.id)
})
//create
router.post('/', async (req,res)=>{
  const contact=new Contact({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    address:req.body.address,
    notes:req.body.notes,

  })

  try{
    const newContact=await contact.save()
    res.status(201).json(newContact)
  }catch(err){
    res.status(400).json({message:err.message})
  }
})
//update
router.put('/',(req,res)=>{
  
})
//delete
router.delete('/:id',(req,res)=>{
  
})

module.exports=router