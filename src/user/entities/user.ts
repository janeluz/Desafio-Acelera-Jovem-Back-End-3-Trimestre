import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },

  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model('User', UserSchema);


export { User };
