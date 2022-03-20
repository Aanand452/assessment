const db = require("../models");
const User= db.user;
const Op = db.Sequelize.Op;
const { 
    
    v4: uuidv4,
  } = require('uuid');
//const uuidv4 = require('uuid/v4');
// Create and Save a user

//exports.create= (req, res) => {
   // console.log("this is anand")

    //let salt = crypto.randomBytes(16).toString('base64');
    //let hash = crypto.createHmac('sha512',salt)
                                    // .update(req.body.password)
                                    // .digest("base64");
    //req.body.password = salt + "$" + hash;
   
    //UserModel.createUser(req.body)
        //.then((result) => {
           // res.status(201).send({id: result._id});
       // });
 //};

 exports.create = (req, res) => {
     console.log("thisb is",req)
    // Validate request
    if (!req.body.firstname ||!req.body.lastname||!req.body.username||!req.body.password) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Tutorial
    const user = {
     
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password
      
    };
    // Save Tutorial in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
  };


  

exports.findAll = (req, res) => {
  
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};
