const mongoose=require('mongoose');

const itemschema=new mongoose.Schema({



    id: Number,
    price: Number,
    brand:String,
    size:String,
    img:String,
    amount: Number,
    type:String,
    useremail:String

})



const itemmodel=mongoose.model('items',itemschema)

module.exports=itemmodel;
