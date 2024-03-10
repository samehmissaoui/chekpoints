const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const User = require ("./models/user.js");

// configure the .env file path
dotenv.config({ path: "./config/.env" });

// Set Up the Database connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Serveur connecting successfully..."))
.catch(err => console.log(err))


// create new instants from express
const app = express();

// applay midlware
app.use(express.json());


// GET ---> All USERS

app.get('/users',  async (req, res) => {

    try {
        const users = await User.find();
        res.json(users);
    }catch (error) {
        res.status(500).send(error);
    }
});


//POST ---> add a new user 

app.post('/users',  async (req, res) => {

    try { 
        const newUser = new User(req.body);
        const saveUser = await newUser.save();
        res.json(saveUser);
    }catch (error) {
        res.status(500).send(error);
    }
});

//PUT ---> update user by ID 

 app.put('/users/:id' , async (req,res,) => {

    try {
        const userEdited = await User.findOneAndUpdate(
            {_id : req.params.id},
            {$set : req.body}
        );
        res.send("user updated successfully");

    }catch (error) {
        res.status(500).send(error);
    }
 });



 //DELETE ---> Delete user by ID 

 app.delete('/users/:id' , async (req,res) => {


    try {
        const UserDEleted = await User.findByIdAndDelete(req.params.id);
        res.send(" user delet with success");
    }catch (error) {
            res.status(500).send(error);
    }
 });



 // Create Listener

 app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  });