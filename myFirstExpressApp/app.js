var express = require("express");
//la primera importa la libreria, la segunda es para usarla
var app = express();

app.get("/", function(req,res){
    res.send("Hello There!");
});

app.listen(3000, function(){
   console.log("server is running") 
    
});

