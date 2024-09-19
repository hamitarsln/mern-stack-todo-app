const express = require('express');
const router = express.Router();
const { join } = require('path');
const { sendMessage } = require(join(__dirname, '..', 'help', 'help.js'));
const Text = require(join(__dirname, '..', 'schema', 'textSchema.js'));


router.post('/', async (req, res) => {
    try {
        const text = await Text.find().exec();
        return sendMessage(res, true, text); 
    } catch (error) {
        console.log(error);
        return sendMessage(res, false, "An error occurred while sending a request to the Main Page");
    }
});

module.exports = router;