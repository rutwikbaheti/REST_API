const mongoose =require('mongoose')
const url = "mongodb+srv://rutwikbaheti:Pass@123@hotel.uv3wg.mongodb.net/hotel-api?retryWrites=true&w=majority";
mongoose.connect(url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connection Successful")
}).catch(()=>{
    console.log("DB connection Unsuccessful")
})
