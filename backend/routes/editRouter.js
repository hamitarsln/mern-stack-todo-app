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

        const { text, id } = req.body; // This is the text that the user entered
        if(!text, !id) {
            return sendMessage(res, false, "Data can not send");
        }

        if(id.length !== 24) {
            return sendMessage(res, false, "Invalid ID");
        }

        Text.findByIdAndUpdate(id, {
            text
        }, { new:true }).then((e) => {
            console.log(e);
            return sendMessage(res, true, e);
        }).catch((error) => {
            console.log(error);
            return sendMessage(res, false, "An error occurred while editing text");
        });

    } catch (error) {
        console.log(error);
        return sendMessage(res, false, "An error occurred while sending a request to the Edit Page");
    }
});

module.exports = router;