const express = require('express');

const friendsRouter = require('./routes/friends.route');
const messagesRouter = require('./routes/messages.route');


const app = express();

const PORT = 3000;


//it's a initial middleware
app.use((req, res, next) =>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;

    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);

})

//it's a middlware it parses requests json payloads
app.use(express.json()); 

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);





app.get('/', (req, res) =>{
    res.send('Hellooo Raju');
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
});



