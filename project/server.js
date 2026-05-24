const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,resp)=>{
    let data ="./project/PROJECT/views/"

    switch (req.url) {
        case "/":
            data +="home.html"
            break;
        case "/about.html":
             data +="about.html"
            break;
        case "/contact.html":
            data +="contact.html"
            break;
    
        default:
            data +="error.html"
            break;
    }

    fs.readFile(data,(err,results)=>{
        if (err) {
            console.log(err);
        } else {
            resp.end(results)
            
        }
    })

})

    app.listen(2000,(req,resp)=>{
        console.log("Running");
        
    })