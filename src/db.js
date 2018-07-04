import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const uri = 'mongodb://';

export const connect = () => mongoose.connect(uri);
