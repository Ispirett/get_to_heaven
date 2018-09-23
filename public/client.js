//let io = require("socket.io");
//let socket = io.connect("https://localhost:3000


$(function () {
    let socket = io();
    let answers = $('#answers');

    $('#answer-button').click(() => {
        socket.emit('answers', answers.val());
        reply();

    });

    socket.on('answers', (data) => {
        $('#gameOver').text(data);

    });

});
