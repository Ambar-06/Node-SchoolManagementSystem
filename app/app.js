const express = require('express');
const morgan = require('morgan');    // This is to get the activity on terminal

const app = express();

// =======MIDDLEWARE=========
app.use(morgan("dev"));

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

module.exports = app