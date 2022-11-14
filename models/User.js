import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required:[true, 'Please provide name'], 
        minlength: 2, 
        maxlength: 20, 
        trim: true,
    },
    email: { 
        type: String, 
        required:[true, 'Please provide email'], 
        validate:{
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true,
    },
    password: { 
        type: String, 
        required:[true, 'Please provide password'], 
        minlength: 6,
    },
    last_name: { 
        type: String, 
        minlength: 2, 
        maxlength: 20, 
        default: 'Last Name',
        trim: true,
    },
    location: { 
        type: String, 
        maxlength: 20,
        default: 'Location',
    },
})

export default mongoose.model('User', UserSchema)