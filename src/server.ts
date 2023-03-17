import { app } from './app';
import mongoose from 'mongoose';

async function start() {
  try {
     mongoose.set("strictQuery", true);

 await mongoose
  .connect(
    `mongodb+srv://jane:wyWCyb215YjL5FYQ@apicluster.ncjxjuq.mongodb.net/tasks?retryWrites=true&w=majority
    `
  );
  
    console.log('connect sucess mongodb');
    app.listen(3002, () => console.log('listeng on port 3002!!'));
  } catch (err) {
    console.log(err);
  }
}

start();

 
