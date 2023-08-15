const mongoose = require("mongoose");

const password = encodeURIComponent("MO12mo@#");
const mongoURL = `mongodb+srv://nikhilpandey0002:${password}@nikhil.rzvwdlb.mongodb.net/gofoodmern?retryWrites=true&w=majority`;

module.exports = async function () {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.db.collection("food_items");
        const foodData = await foodCollection.find({}).toArray();

        // Log the foodData
     //   console.log("Food Data:", foodData);
     
        const categoryCollection = mongoose.connection.db.collection("food_Category");
        const foodCategory = await categoryCollection.find({}).toArray();

        return { foodData, foodCategory};
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
};
