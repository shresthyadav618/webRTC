const app = require("express")(); //express will handle the https requests to https://localhost:3000
const httpServer = require("http").createServer(app);
const cors =  require('cors');
app.use(cors());
const options = { cors : {origin : "*",} };
const io = require("socket.io")(httpServer, options); // sokcet io server will listen to the web sockets requests to ws://localhost:3000

io.on("connection", socket => { /* ... */ 




console.log('connection established');

socket.on('message',(data)=>{
    console.log('The data recevied is : ',data);
});

socket.on('custom',(data)=>{
    console.log('The data recevied is : ',...data);
})

});




app.get('/',(req,res)=>{
    res.send('Hey')
})

httpServer.listen(3000,()=>{
    console.log('listening on port 3000');
});
// WARNING !!! app.listen(3000); will not work here, as it creates a new HTTP server