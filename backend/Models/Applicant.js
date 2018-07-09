const mongoose= require('mongoose')



const ApplicantSchema= new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true  
    },
    lastName: {
        type: String,
        trim: true,
        required: true  
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        trim: true,
    },
    facebookLink: {
        type: String,
        trim: true,
    },
    LinkedinLink: {
        type: String,
        trim: true,
    },
    birthDate: {
        type: String,
        trim: true
    },
    school: {
        type: String,
        trim: true,
    },
    university: {
        type: String,
        trim: true,
    },
    studyCourse: {
        type: String,
        trim: true,
    },
    lastProfileUpdate: {
        type: String,
        trim:true
    },
    lastEmailContact: {
        type: String,
        trim: true
    },
    qualities : [
        {
            type: String,
            trim: true,
        }
    ],
    programs: [
        {
            programName : {
                type: String,
                trim: true,
                required: true
            },
            programEdition : {
                type: String,
                trim: true,
                required: true
            },
            programRating : {
                type: Number,
                trim: true,
            },
            programFeedback: {
                type: String,
                trim: true,
            }
        }
    ],
    tokens : [{
        token : {
            type: String,
            required: true 
        },
        access : {
            type: String,
            required: true
        }
    }]

}
)

const Applicant= mongoose.model('Applicant', ApplicantSchema)

module.exports= {Applicant}