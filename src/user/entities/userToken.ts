
import mongoose from "mongoose";

const UserTokenSchema = new mongoose.Schema({
    id: {
      type: String,
      require: true,
    },
  
    user_id: {
      type: String,
      require: true,
    },
  
    refreshToken: {
      type: String,
      required: true,
      
    },
  
    expires_date: {
        type: Date,
    },
    
      createdAt: {
      type: Date,
      default: Date.now(),
    },
   
  });
  
  const UserToken = mongoose.model('UserToken', UserTokenSchema);
  
  
  export { UserToken };