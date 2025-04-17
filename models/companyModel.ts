const mongoose = require("mongoose");
const companySchema = new mongoose.Schema(
    {
        _id: String,
        name:String,
        logo_url: String,
        description: String,
        address: String,
        website: String,
        recruiter_id: String,
        "deleted": {
            type: Boolean,
            default: false
        }

    }, {
        timestamps: true
    });

const Company = mongoose.model('Company', companySchema, "companies");

export default Company;