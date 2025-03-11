import mongoose,{ Schema,model } from "mongoose";

const contactSchema = new Schema({
    phone: {
        type: String,
        validate: {
            validator: function (phone) {
                return phone.length === 10 || phone.length === 0 || phone === null;
            },
            message: "Phone number needs to be 10 digits long",
        },
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address1:String,
    address2:String,
    address3:String
});

const ngoSchema = new Schema({
    name:{
        type:String,
        required:[true,"NGO needs a Name"]
    },
    email:{
        type:String,
        required: [true, "Email Needed"]
    },
    username:{
        type:String,
        required: [true, "Username Required"]
    },
    password:{
        type:String,
        required: [true, "Password Required"]
    },
    description:{
        type:String,
        required:[true,"NGO needs a Description"]
    },
    cause:[String],
    certificate:String,
    verified:{
        type:Boolean,
        default:false
    },
    contact:{
        type:contactSchema,
        required:[true,"need email and phone number"]
    },
    donationNeed:{
        type: [String],
        enum:["financial","clothes","stationary","volunteers","tools"]
    },
    bankingDetails: {
        type: new Schema({
            accountHolderName: { type: String, required: true },
            accountNumber: { type: String, required: true },
            ifscCode: { type: String, required: true },
            bankName: { type: String, required: true },
            upiId: { type: String }
        }),
        required: true 
    }
},{timestamps:true});


ngoSchema.methods.checkPassword = async function(password) {
    return await bcrypt.compare(password,this.password);
}

ngoSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 13);
    next();
});

ngoSchema.methods.generateAccessToken = function (){
    const payload = {
        fullname : this.fullname,
        email : this.email,
        username : this.username,
        _id : this._id
    };
    const JWT = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.exp.ACCESS_TOKEN_EXPIRY});
    return JWT;
}

ngoSchema.methods.generateRefreshToken = function (){
    const payload = {
        _id : this._id
    };
    const JWT = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.exp.REFRESH_TOKEN_EXPIRY});
    return JWT;
}

export const Ngo = model("ngos",ngoSchema); 