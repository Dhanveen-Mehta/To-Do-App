// Yaha Par ham sara express aur mongoose ko require karenge
const express = require("express");
const app = express();
const mongoose = require('mongoose');
//------------------------------------------------------------------------------------------------

// yaha ham database connect karenge
try{
    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/todo');
    }
    main()
    .then(console.log("Connected to DB"));
}catch(err){
    alert("Some Error occured Contact Developer");
    console.log(err);
};
//------------------------------------------------------------------------------------------------

// yaha ham schema ko require karenge aur ek collection banayenge
const schema = require("./schema");
const Task = new mongoose.model("Task",schema);
// ------------------------------------------------------------------------------------------------

// yaha ham method overide aur path ko require karenge
const port = 8080;
const path = require("path"); 
const methodOverride = require("method-override");
//---------------------------------------------------------------------------------------------------

// yaha main sab set karenge
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extented:true}));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set("public",path.join(__dirname,"public"));
app.use(methodOverride("_method"));
//-----------------------------------------------------------------------------------------------------

// yaha ham server start ka confirmation lenge 
app.listen(port, function(){
    console.log("Server Started")
    
});
//-------------------------------------------------------------------------------------------------------

// yaha ham home page par get req bhejenge aur saare task listed honge
app.get("/", async function(req,res){
    try{
        let tasks = await Task.find();
        res.render("index.ejs",{tasks});
    }catch(err){
        alert("Some Error Occured Contact Developer");
        console.log(err);
    };
    
});
//---------------------------------------------------------------------------------------------------------

// yaha par ham post req bhejenge new task ko database mei add karne ke liye
app.post("/task", async function(req,res){
    try{
        const task = new Task(req.body);
        await task.save();
        console.log("Data Saved");
        res.redirect("/");
    }
    catch(err){
        alert("Some Error Occured Contact Developer");
        console.log(err);
    }
    
});
//---------------------------------------------------------------------------------------------------------

// yaha par ham delete req ko handel karenge aur task ko delete karenge
app.delete("/task/:id/delete", async function(req,res){
    try{
        let {id} = req.params;
        await Task.findByIdAndDelete(`${id}`);
        console.log("Data Deleted");
        res.redirect("/");
    }catch(err){
        alert("Some Error Occured Contact Developer");
        console.log(err);
    };
});
//---------------------------------------------------------------------------------------------------------

// ham yaha par get req bhejenge taaki edit form load hoo jaaye 
app.get("/task/:id/edit", async function(req,res){
    try{
        let {id} = req.params;
        let searchedChat = await Task.findById(`${id}`);
        res.render("edit.ejs",{searchedChat,id});
    }catch(err){
        alert("Some error occured contact Developer");
        console.log(err);
    };
});
//----------------------------------------------------------------------------------------------------------

// yaha ham put req bhejenge taaki joh form se data aaye woh database mei update hoo jaaye 
app.put("/task/:id/edit", async function(req,res){
    try{
        let {id} = req.params;
        let {task}= req.body;
        let updatedChat = await Task.findByIdAndUpdate(`${id}`,{task:task},{runValidators:true, new:true});
        console.log("Data Updated to",updatedChat);
        res.redirect("/");
    }catch(err){
        alert("Some Error Occured Contact Developer");
        console.log(err);
    };
});
//-----------------------------------------------------------------------------------------------------------