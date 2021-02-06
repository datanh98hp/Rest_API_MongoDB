const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true,
        default:Date.now
    }
});

// mongoose.Schema({
//     username:String,
//     password:String,
// })

module.exports = mongoose.model('Post',PostSchema)