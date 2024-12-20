import mongoose from "mongoose";
const isConnected = {
    connected: 0
};
export async function dbConnected() {
    if (isConnected.connected) {
        console.log("database is already connected");
        return;
    }
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        dbName: "ultraUber"
    });
    isConnected.connected = conn.connection.readyState;
    console.log(`databas is connected host: ${conn.connection.host}`);
}
