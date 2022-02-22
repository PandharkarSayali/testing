const express = require('express');
var router =new express.Router();

var jsondata=
[
    
   {
       "UserName":"Ada Lovelace",
       "Email":"Ada@xyz.com",
       "FirstName":" Ada",
       "LastName":"Lovelace",
       "Role":"Admin", 
       "Actions":50,
       "id":2
    },

    {
       "UserName":"Grace Hopper",
       "Email":"Grace@xyz.com",
       "FirstName":" Grace",
       "LastName":"LoveHopperlace",
       "Role":"Developer", 
       "Actions":94,
       "id":1
    },

    {
       "UserName":"Margarel Hamilton",
       "Email":"AMargarelda@xyz.com",
       "FirstName":" Margarel",
       "LastName":"Hamilton",
       "Role":"QA", 
       "Actions":80,
       "id":4
    },

    {
       "UserName":"Joan Clarke",
       "Email":"Joan@xyz.com",
       "FirstName":" Joan",
       "LastName":"Clarke",
       "Role":"Manager", 
       "Actions": null,
       "id":3
    }
]

router.get('/',(_req,res)=>{
                  res.json(jsondata);
               //res.send("Hello");
                
})

router.get('/:id',(req,res)=>{
        var id=req.params.id;
       console.log(id);
       try{
       var result=jsondata.filter(user=>user.id==id);
       console.log(jsondata);
       console.log(result);
       res.json(result); 
       }
        catch{(err=>{
            console.log(err);
            })} 
})


router.post('/', (req,res)=>{
    const newUser=req.body;
    if (jsondata.includes(newUser)){
        console.log("Record already exits");
        res.json({success:false});
    }
    else{
        jsondata.push(newUser);
         res.json({success:true});
         //res.json(jsondata);
            console.log(req.body);
        }
    })

router.delete('/:id',(req,res)=>
{
    var id=req.params.id;
            if(jsondata.id==id) {
                delete jsondata.at.id;
                console.log(jsondata);
                res.send(jsondata);
                
            } 
            else{
                    console.log("Error");
                }
        })

module.exports=router;


