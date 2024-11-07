const mongoose= require('mongoose');
const mongo_url = process.env.MONGO_CON;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('MongoDB Connected');

    }).catch((err)=>{
        console.log('MogoDB Connection Error', err);
    })

