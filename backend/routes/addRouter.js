const express = require('express');
const router = express.Router();
const { join } = require('path');
const { sendMessage } = require(join(__dirname, '..', 'help', 'help.js'));
const Text = require(join(__dirname, '..', 'schema', 'textSchema.js'));


router.post('/', (req, res) => {
    try {
        if(!req.body) {
            return sendMessage(res, false, "Request body is empty");
        }

        const { text } = req.body; // This is the text that the user entered
        if(!text) {
            return sendMessage(res, false, "Text is empty");
        }

        const addText = new Text({ 
            text
        });
        
        addText.save().then((e) => {
            console.log(e);
            return sendMessage(res, true, e);
        }).catch((error) => {
            console.log(error);
            return sendMessage(res, false, "An error occurred while adding text");
        });
    } catch (error) {
        console.log(error);
        return sendMessage(res, false, "An error occurred while sending a request to the Add Page");
    }
});

module.exports = router;