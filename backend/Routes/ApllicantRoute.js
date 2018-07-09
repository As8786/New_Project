const {Applicant}= require('../Models/Applicant')

module.exports= {
   
    getAllApplicants: (req, res) => {
        Applicant.find((err, data) => {
            if(err) res.status(401).send(err)
            else res.send(data)
        })  
    },

    getOneApplicant: (req, res) => {
        let applicantId = req.params.id 
        Applicant.findOne({_id:applicantId}, (err, data) => {
            if(err) res.status(401).send(err)
            else res.send(data)
        })
    },

    addApplicant : (req, res) => {
        let newApplicant= new Applicant({...req.body})
        newApplicant.save(newApplicant, (err, data) => {
            if(err) res.status(401).send(err)
            else res.send(data)
        })
    },

    deleteApplicant : (req, res) => {
        let applicantId= req.params.id
        Applicant.deleteOne({_id:applicantId}, (err, data) => {
            if(err) res.status(401).send(err)
            else res.send(data)
        })
    },
    
    addNewProgramToApplicant: (req, res) => {
        let applicantId= req.paramas.id
        let newProgram= req.body
        Applicant.findOneAndUpdate({_id:applicantId}, {...newProgram}, (err, data) => {
            if(err) console.log(err)
        })
    }

}
