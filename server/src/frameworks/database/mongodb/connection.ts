import mongoose from 'mongoose';
import configKeys from '../../../config';
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    // await mongoose.connect(configKeys.DB_CLUSTER_URL, {
    //   dbName: configKeys.DB_NAME
    // });
    await mongoose.connect('mongodb://localhost:27017/edu_online');

    console.log(`Database connected successfully`.bg_green);
  } catch (error: any) {
    console.error(error);
    process.exit(1);
  }
};
export default connectDB;
