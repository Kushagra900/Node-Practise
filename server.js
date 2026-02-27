const express = require('express')

const app = express()

app.get('/', function(req, res){
    res.send("Welcome to the server");
})

app.get('/detail', (req, res)=>{
    var deatil = {
        name: "Kushagra",
        age: 24,
        city: "Gorakhpur"
    }
    res.send(JSON.stringify(deatil))
})
app.listen(4000, () => {
    console.log("listening at 4000")
})