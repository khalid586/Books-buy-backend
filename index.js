const express = require('express');


const app = express();
const port = process.env.PORT || 5007;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('This is working !!!!')
})

app.listen(port,() =>{
    console.log(`server is running at ${port}`)
})