const mongoose = require("mongoose");

const connectDB = async () => {
    const conn = await mongoose.connect(
        "mongodb+srv://dapabp2710:dapabp2710@employee.8dzp3i8.mongodb.net/employees_db?retryWrites=true&w=majority&appName=employee"
    );

    console.log(`MongoDB connected ${conn.connection.host}`);
};

module.exports = connectDB;
