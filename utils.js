const getParameterFromMessage = (message) => message.text.split(' ')[1];

module.exports = {
    getParameterFromMessage,
};
