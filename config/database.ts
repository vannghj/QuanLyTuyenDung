import mongoose from 'mongoose'
export const connect = async ():Promise<void> => {
    try {
        // @ts-ignore
        await mongoose.connect("mongodb+srv://vannghj:123nghi123ff1@cluster0.cgascrw.mongodb.net/QuanLyTuyenDung");
        console.log("Connected to MongoDB");
    }catch(err){
        console.error(err);
    }
}