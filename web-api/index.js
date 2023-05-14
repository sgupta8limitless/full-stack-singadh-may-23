const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

// connecct to mongo server 

mongoose.connect("mongodb://localhost:27017/demo-api")
.then(function(){
    console.log("Database server connected")
})


// creating a schema 

const productSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    }
})

const productModel=mongoose.model('products',productSchema)



const app=express()

app.use(cors())
app.use(express.json())



app.post("/products",function(req,res){

    productModel.create(req.body)
    .then(function(){
        res.status(201).send({message:"Product Created"})
    })
    .catch(function(err){
        console.log(err)
        res.status(422).send({message:"Some Problem"})
    })

    

})





app.get('/products',function(req,res){

    productModel.find()
    .then(function(products){
        res.send(products)
    })
    .catch(function(err){
        console.log(err)
        res.send({message:"Some Problem"})
    })
    

})

app.get("/products/:id",function(req,res){
    const id=req.params.id;

    productModel.findOne({_id:id})
    .then(function(product){
        res.send(product)
    })
    .catch(function(err){
        console.log(err)
        res.send({message:"Some Problem"})
    })

    
})




app.delete("/products/:id",function(req,res){

    const id= req.params.id;

    productModel.findByIdAndDelete(id)
    .then(function(){
        res.send({message:"Product Deleted Successfully"})
    })
    .catch(function(err){
        console.log(err)
        res.send({message:"Some Problem"})
    })


})







app.listen(8000)