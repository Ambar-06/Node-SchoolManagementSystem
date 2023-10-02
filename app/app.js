const express = require('express');
const morgan = require('morgan');    // This is to get the activity on terminal

const app = express();

// =======MIDDLEWARE=========
app.use(morgan("dev"));

// Admin Registration 
app.post('/api/v1/admin/registration', (req, res) =>{
    try {
        res.status(201).json({
            status: "Success",
            data : "Admin has been registered."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Admin login
app.post('/api/v1/admin/login', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Admin has been LoggedIn."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Admin list
app.get('/api/v1/adminslist', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "All Admins."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Admin Data
app.get('/api/v1/admin/:id', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Single Admin."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

//  Update Admin
app.put('/api/v1/admin/:id', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Update Admin."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

//  Admin Delete
app.delete('/api/v1/admin/:id', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Delete Admin."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Teacher suspend by admin
app.put('/api/v1/admin/suspend/teacher/:id', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Teacher Suspended."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Teacher unsuspend by admin
app.put('/api/v1/admin/unsuspend/teacher/:id', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Teacher Unsuspended."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Teacher withdraw by admin
app.put('/api/v1/admin/withdraw/teacher/:id', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Teacher Withdrawn."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Teacher unwithdraw by admin
app.put('/api/v1/admin/unwithdraw/teacher/:id', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Teacher Unwithdrawn."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// admin publish exam
app.put('/api/v1/admin/publish/exam/:id', (req, res) =>{
    try {
        res.status(201).json({
            status: "Success",
            data : "Exam Published."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})
// admin punublish exam
app.put('/api/v1/admin/unpublish/exam/:id', (req, res) =>{
    try {
        res.status(201).json({
            status: "Success",
            data : "Exam Unpublished."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

//  Teacher Registration
app.post('/api/v1/teachers/registration', (req, res) =>{
    try {
        res.status(201).json({
            status: "Success",
            data : "Teacher has been registered."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Teacher login
app.post('/api/v1/teachers/login', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Teacher has been LoggedIn."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Teacher Data
app.get('/api/v1/teacher/:id', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Teacher Details."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Teacher Update
app.put('/api/v1/teacher/:id', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Teacher Updated."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})

// Teacher Delete
app.delete('/api/v1/teacher/:id', (req, res) =>{
    try {
        res.status(200).json({
            status: "Success",
            data : "Teacher Deleted."
        })
    } catch (error) {
        res.json({
            status: "Failed",
            data : `Error --> ${error.message}`
        })
    }
})


module.exports = app