const path = require('path');

function getMessages (req, res) {

    res.render('messages', {
        title: 'Messages to my Friends!',
        friend: 'Raju Dhoni'
    })
    //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
    //res.send('<ul><li>Hello Raju Dhoni</li></ul>')
}

function postMessages(req, res) {
    console.log('updating messages....')
}

module.exports = {
    getMessages,
    postMessages
}