const mongoose = require('mongoose');
const { empModel } = require('./students');
app.use(express.json)
const connectdb=()=>{
    mongoose.connect("mongodb://localhost:27017/stud1").then(() => {
        console.log("connected..");
        
    }).catch((err) => {
        console.log(err);
    });
}
connectdb()

const empSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        require:true
    },
    age:{
        type:Number,
        unique:true,
        require:true
    },
    course:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
})
const studentModel = mongoose.model("std",empSchema)

async function insertdata(sname,sage,scourse,semail) {
    try {
        const data = new studentModel({
        name:sname,
        age:sage,
        course:scourse,
        email:semail

        })
        const result = await data.save()
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}
async function displaystd() {
    try {
        const result= await studentModel.find()
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }   

}
app.patch("/update/:id",async(req,resp) =>{
    try {
        const result= await empModel.findBy
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }   

}

//insertdata("sahil",23,"it","sahilmehta");
//displaystd()