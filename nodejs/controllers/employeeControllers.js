const express = require('express');
var router=express.Router();
var {Employee} = require('../models/employee');
var ObjectId = require('mongoose').Types.ObjectId;

//localhost:3000/login/
router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in retriving Employees:'+JSON.stringify(err,undefined,2));}

    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No Record with given ID: $(req.params.id)');
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving Employee:'+JSON.stringify(err,undefined,2));}

    });

});

router.post('/',(req,res)=>{
    console.log(emp);
    var emp=new Employee(
        {
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
            //salary:req.body.salary
        }
    )
   
    


    emp.save((err,doc) => {
        if(!err){res.send(doc);}
        else{console.log('Error in retriving Employee Save:'+JSON.stringify(err,undefined,2));}

    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No Record with given ID: $(req.params.id)');

    var emp=
    {
        name: req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving Employee Save:'+JSON.stringify(err,undefined,2));}
    });
});
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No Record with given ID: $(req.params.id)');

    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving Employee Save:'+JSON.stringify(err,undefined,2));}

    })

})

    module.exports=router;