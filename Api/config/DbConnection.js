import mongoose from 'mongoose';

const dbConnection = async () => {
  // mongodb+srv://ryrahul12345:HqvPvUK3bvKFiQyy@cluster0.xhicr01.mongodb.net/

  await mongoose
    .connect(
      'mongodb+srv://ryrahul12345:HqvPvUK3bvKFiQyy@cluster0.xhicr01.mongodb.net/',
    )
    .then(() => {
      console.log('Database connection successful');
    })
    .catch(err => {
      console.log('Database connection failed');
    });
};

export default dbConnection;
