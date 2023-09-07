const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProgrammesSchema = new Schema(
    {
        programmeName : {
            type : String,
            required : true
        },
        duration : {
            type : String,
            required : true,
            default : "4 years"
        },
        description : {
            type : String,
            required : true
        },
        instructor : {
            type : Schema.Types.ObjectId,
            ref : "Teachers",
            default : []
        },
        students : {
            type : Schema.Types.ObjectId,
            ref : "Students",
            default : []
        },
        course : {
            type : Schema.Types.ObjectId,
            ref : "Courses",
            default : []
        },
        programmeName : {
            type : String,
            required : true
        },
        code : {
            type : String,
            default : function () {
                return(
                this.name.split(" ").map(name => name[0]).join("").toUpperCase() + Math.floor(10 +  Math.random() * 90) + Math.floor(10 +  Math.random() * 90)
                );
            }
        },
        createdBy : {
            type : Schema.Types.ObjectId,
            ref : "Admin",
            required : true
        }
    },
    { timestamps: true}
);

const Programmes = mongoose.model("Programmes", ProgrammesSchema);

exports = Programmes