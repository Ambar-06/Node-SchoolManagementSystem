const mongoose = require('mongoose');

const { Schema } = mongoose;

const SubjectsSchema = new Schema(
    {
        name: {
            type : String
        },
        description: {
            type : String
        },
        teacher: {
            type : Schema.Types.ObjectId,
            ref : "Teachers"
        },
        academicTerm: {
            type : Schema.Types.ObjectId,
            ref : "AcademicTerm",
            required : true
        },
        createdBy: {
            type : Schema.Types.ObjectId,
            ref : "Admin",
            required : true
        },
        duration: {
            type : String,
            required : true
        },
    },
    { timestamps : true},
);

const Subjects = mongoose.model("Subjects", SubjectsSchema);

module.exports = Subjects;