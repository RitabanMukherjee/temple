const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const identitySchema = new Schema({   
        username: {type: String, required:true},
        identity: {type : String, required: true}
    },
    {
        timestamps: true,
    }
);

const Identity = mongoose.model('Identity', identitySchema);

module.exports = Identity;