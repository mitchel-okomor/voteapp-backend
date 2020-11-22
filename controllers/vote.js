const mongoose = require('mongoose');
require('../models/vote');

const Vote = mongoose.model("vote");

const user ={


  saveVote: (req,res)=>{
    console.log(req.body.vote)
        const vote = new Vote({
         name : req.body.name,
         voteType:req.body.type
        })
        vote.save()
        .then(data=>{
          console.log(data);
          res.status(200).json(
      {
       message:"success",
       data: data 
      }
          );
        }).catch(err=>{
          console.log(err);
          res.status(400).json(
            {
             message:"error",
             data: err 
            }
                );
        })
      },
      

     getVote: (req, res, id)=>{
        Vote.findById(req.params.id).then(
          data=>{
            res.status(200).json(
              {
               message:"success",
               data: data 
              }
                  );          }
        ).catch(err=>{
          console.log(err);
          res.status(400).json(
            {
             message:"error",
             data: err 
            }
                );
        })
      },


      getAllVotes: (req, res)=>{
        Vote.find({}).then(
          data=>{
            res.status(200).json(
              {
               message:"success",
               data: data 
              }
                  );          }
        ).catch(err=>{
          console.log(err);
          res.status(400).json(
            {
             message:"error",
             data: err 
            }
                );
        })
      },

    deleteUser: (req,res)=>{
        Vote.findByIdAndRemove(req.params.id).
        then(data=>{
          res.status(200).json(
            {
             message:"success",
             data: data 
            }
                );
        }).catch(err=>{
          console.log(err);
          res.status(400).json(
            {
             message:"error",
             data: err 
            }
                );
        })
      },
      
updateUser: (req, res)=>{
        Vote.findByIdAndUpdate(req.params.id, {
          vote: req.body.vote
        }).
        then(data=>{
          res.status(200).json(
            {
             message:"success",
             data: data 
            }
                );
        }).catch(err=>{
          console.log(err);
          res.status(400).json(
            {
             message:"error",
             data: err 
            }
                );
        })
      },
}


module.exports = user;
