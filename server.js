const express = require('express');


const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');

const app = express();

const PORT = 3000;



app.use((req, res, next) =>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;

    console.log(`${req.method}, ${req.url}, ${delta}ms`);

})

app.use(express.json());

app.post('/friends', friendsController.postfriends)


app.get('/', (req, res) =>{
    res.send('Hellooo Raju');
})

app.get('/friends', friendsController.getFriends)

app.get('/friends/:friendId', friendsController.getOneFriend)

app.get('/messages', messagesController.getMessages);

app.post('/messages', messagesController.postMessages);

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
});



