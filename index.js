const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5007;

const corsOptions = {
    origin: [ 
        'http://localhost:5173',
    ],
    optionsSuccessStatus: 200 
  };
  
app.use(cors(corsOptions));

app.use(express.json());


app.post('/add_book',(req,res)=>{
    const data = req.body;
    console.log(data)
})

app.get('/',(req,res)=>{
    res.send('This is working !!!!')
})

app.listen(port,() =>{
    console.log(`server is running at ${port}`)
})