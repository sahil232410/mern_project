const mongoose = require('mongoose');
const { timeStamp } = require('node:console');
const { type } = require('node:os');

const connectdb=()=>{
    mongoose.connect("mongodb://localhost:27017/demo").then((result) => {
        console.log("connected");
    }).catch((err) => {
        console.log(err);
    });
}

const empSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:10
    }
},
{timeStamp:true}
)
const empModel = mongoose.model("emp",empSchema)
module.exports={connectdb , empModel}
