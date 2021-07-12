const express = require("express")
require("./db/connection")
const Hotel = require("./models/hotels")
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

// create user
app.post("/hotel",(req,res)=>{
    console.log(req.body)
    const user = new Hotel(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})


// display all or by id or by name or by location 
app.get("/hotel",async(req,res)=>{
    try{
        const _id = req.params.id;
        const name = req.params.name;
        const location = req.params.location;
        const HotelData= await Hotel.find() || await Hotel.findById(_id) || await Hotel.find({name:name}) || await Hotel.find({location:location})
        if(!HotelData){
            return res.status(404).send()
        }else{
            res.send(HotelData)
        }
    }catch(e){
        res.send(e)
    }
})

// Upadate user by id
app.patch("/hotel/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const updateHotel = await Hotel.findByIdAndUpdate(_id,req.body )
        res.send(updateHotel)
    }catch(e){
        res.status(400).send(e)
    }
})

//Delete User
app.delete("/hotel/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteHotel = await Hotel.findByIdAndDelete(_id)
        if(!_id){
            return res.status(400).send()
        }
        res.send(deleteHotel)
    }catch(e){
        res.status(500).send(e)
        }
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})