// requires
let express = require('express');
let app = express();
let http = require('http');
let httpServer = http.Server(app);
let io = require("socket.io")(httpServer);

// Get request
//app.get("/", (req, res) => {

    //let _path = '/Users/pacpro/WebstormProjects/web_games/get_to_heaven/';
   // res.sendFile(_path +  '/index.html');

  // console.log("Connected")

//});

app.use(express.static('public'));



io.on("connection", (socket)  => {
      console.log("connection made " + socket.id);

    socket.on('answers', (data) =>{
       io.sockets.emit('answers', data);
        console.log(data)
    });

    // handle messages
    socket.on('messages', (messages) => {
       io.sockets.emit('messages', messages)

    });
   // handle users
    socket.on('user', (user) => {
        socket.broadcast.emit('user', user)

    });

    // handle user score
    socket.on('userScore', (score) => {
       socket.broadcast.emit('userScore', score);


    });

    // handle user Life
    socket.on('userLife', (life) => {
        socket.broadcast.emit('userLife', life)

    });



});








let port = 5000;
httpServer.listen(port, () =>{
console.log("listening on port " + port);
});
