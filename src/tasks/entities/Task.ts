import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    require: true,
  },
  user_id: {
    type: String,
    require: true,
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

const Task = mongoose.model('Task', TaskSchema);

export { Task };
