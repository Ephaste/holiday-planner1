import { mongoose} from "mongoose";
const{Schema}=mongoose;
const replaySchema = mongoose.Schema({
    contactId:{
        type:Schema.Types.ObjectId,
       
        required: true
    },
    adminEmail: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        default: "replaying your last contact received"
    },
    replay : {
        type: String,
        required: true
    }
});
export const replay = mongoose.model("replay", replaySchema)