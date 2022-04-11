const express = require('express'); 
const path = require('path');


const friendsRouter = require('./routes/friends.route');
const messagesRouter = require('./routes/messages.route');


const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

//it's a initial middleware
app.use((req, res, next) =>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);

})

//serving website with node
app.use('/site', express.static(path.join(__dirname, 'public')));

//it's a middlware it parses requests json payloads
app.use(express.json()); 

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.get('/', (req, res) =>{
    res.render('index', {
        title: "My Friends Are Very Clever",
        caption: "Let\'s go skiing", 
    })
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
});



