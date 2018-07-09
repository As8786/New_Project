const express= require('express')
const bodyParser= require('body-parser')
const assert= require('assert')

const {mongoose}= require('./connection/Connection')
const ApplicantsRoutes= require('./Routes/ApllicantRoute')

const app= express()
app.use(bodyParser.json())

app.get('/all-applicants', ApplicantsRoutes.getAllApplicants)
app.get('/applicants/:id', ApplicantsRoutes.getOneApplicant)
app.post('/add-applicant', ApplicantsRoutes.addApplicant)
app.delete('/applicants/:id', ApplicantsRoutes.deleteApplicant)



app.listen(3007, (err) => {
    if(err) console.log('server problem')
    else console.log('server is running on port 3007')
})


