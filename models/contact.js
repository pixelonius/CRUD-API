const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: {
  type: String,
  required: true
  },
  email:{
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone:{
    type: String,
    required: true
  },
  address:{
    type: String
  },
  notes:{
    type:String
  },

})

module.exports=mongoose.model('Contact', contactSchema)