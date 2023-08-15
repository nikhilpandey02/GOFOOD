const express = require('express');
const router = express.Router();
const connectToMongoDB = require('../db');

router.post('/foodData', async (req, res) => {
    try {
        const { foodData,foodCategory } = await connectToMongoDB();
        res.send([foodData,foodCategory]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
