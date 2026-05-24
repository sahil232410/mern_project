const espress = require('espress');
const path = require('path');
const app = express()

app.use(express.urlencoded({extended:true}))

app.get("/form",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"views","form.html"))

})
app.post("/stud",(req,resp)=>{
    const data =req.body()
    resp.json(data)
    
})

app.listen(4000,()=>{
    console.log("Running");
    
})