import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const uri = 'mongodb://localhost:27017/db';
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

export const connect = () => {
  mongoose.connect(uri, options)
    .then(conn => {
      console.log(`db connected on port #${conn.connections[0].port}`);
    })
    .catch(e => {
      console.log(e);
    });
};
