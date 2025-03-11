import mongoose,{ Schema,model } from "mongoose";



const donationSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"users"
    },
    ngo:{
        type:mongoose.Types.ObjectId,
        ref:"ngos"
    },
    donationType:{
        type:String,
        enum:["monetary","items"]
    },
    amount:{
        type:mongoose.Decimal128,
        required:[function(){return this.donationType == "monetary"},"Money Is not item type"]
    },
    items:{
        type:[new Schema({itemName:String, quantity:Number, tagId:String})],
        required:[function(){return this.donationType == "items"},"Item Is not monetary type"]
    }
},{timestamps:true});

export const donation =  model("donations",donationSchema);