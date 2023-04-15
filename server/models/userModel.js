const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userModel = mongoose.Schema(
    {
        username: { type:String, required: true, unique: true},
        password: { type:String, required: true },
        profilePicture: {
            type: String,
            required: true,
            default: "😀"
        },
    },
    {
        timestamps: true,
    }
)

userModel.methods.checkPassword = async function (pass) {
    return bcrypt.compare(pass, this.password)
}

// encrypt password before saving
userModel.pre('save', async function (next){
    if (this.modified) next();
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
})


const User = mongoose.model("User", userModel);

module.exports = User;