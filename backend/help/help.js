// help.js
function sendMessage(res, success, message) {
    res.json({
        success,
        message
    });
}

module.exports = { sendMessage };