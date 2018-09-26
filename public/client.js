//let io = require("socket.io");
//let socket = io.connect("https://localhost:3000


$(function () {
    // Getting Input
    let socket = io();
    let answers = $('#answers');
    let username = $('#user');
    let message = $('#message');
    let userScore = $('#score');
    let userLife = $('#life');


// EVENT LISTENERS


    $('#answer-button').click(() => {
        reply();


        // get user score
        socket.emit('userScore', {
            score: userScore.text(),
            user : username.val()
        });

        // get user Life
        socket.emit('userLife', {
            life: userLife.text(),
            user: username.val()
        });

        audioManager(gameConfig.gameAudio.ui.button[0],1);


    });
// handle game user messages .........
$('#user-send').click( () => {
      socket.emit('messages', {
          user : username.val(),
          message : message.val()
      });

      socket.emit('user',username.val());

      // get user score
      socket.emit('userScore', {
         score: userScore.text(),
         user : username.val()
      });

      // get user Life
        socket.emit('userLife', {
            life: userLife.text(),
            user: username.val()
      });


    audioManager(gameConfig.gameAudio.ui.button[0],1);

      $('#message').val('');
});







    // Display to users





    socket.on('user', (user) => {
        let logNewUser = '<a>' + user + '</a>';
        $('#display-users').append($('<li>').html(logNewUser));

    });



    socket.on('messages', (message) => {

        let logNewMessage = '<a>' + message.message + '</a>';

        $('#display-messages').append($('<li>').html(logNewMessage));
    });



     socket.on('userScore', (score) =>{
         let logNewScore = '<a>' + score.user + ": " + score.score + '</a>';

         $('#display-user-score').append($('<li>').html(logNewScore));

     });

    socket.on('userLife', (life) =>{
        let logNewLife = '<a>' + life.user + ": " + life.life + '</a>';

        $('#display-user-life').append($('<li>').html(logNewLife));

    });





});
