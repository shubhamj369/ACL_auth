const express =  require("express");
const app = express();
const bodyparser =  require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/Authrouter');
const ProductRouter = require('./routes/ProductRouter')
require('dotenv').config();
require('./models/DB');

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res)=>{
    res.send('PONG');
})
app.use(bodyparser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, ()=>{
    console.log(`Server is Running on ${PORT}`)
})
