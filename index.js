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



});








let port = 3000;
httpServer.listen(port, () =>{
console.log("listening on port " + port);
});
