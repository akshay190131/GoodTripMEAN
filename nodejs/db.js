const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/GoodTrip',(err)=>
{
if(!err)
console.log('MongoDB Connection Succeeded..');
else
console.log('Error in MongoDB Connection :'+JSON.stringify(err,undefined,2));

});
module.exports=mongoose;
