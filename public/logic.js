// varriables
let score = 0;  let life = 3; let winScore = 49;


const gameConfig = {
  questions : [
      'In what city was Jesus born? ',
      'How many books are in the New Testament? ',
      'What type of insect did John the Baptist eat in the desert? ',
      'After Jesus was arrested, which apostle disowned him three times?',
      'Who recognized Jesus as the Messiah when he was presented at the Temple as a baby?',
      'Paul was shipwrecked on what island? ',
      'Matthew was a _________. ',
      'To what city was Saul traveling when he encountered a great and blinding light?',
      'By what name is Paul of Tarsus known before he begins his missionary activity? ',
      'Which Gospel is written by a doctor? ',
      'What does Paul say may “abound more and more in knowledge and in all judgment?” ',
      'What tribe is Paul from?',


  ],

  answers : [
      'Bethlehem',
      '27',
      'Locusts',
      'Peter',
      'Simeon',
      'Malta',
      'Tax collector',
      'Damascus',
      'Saul',
      'Luke',
      'Love',
      'Benjamin',

  ],

  response: {
      correct: 'I step closer to Heaven',
      incorrect: 'You have forsaken your God',

  }



};


// functions

// answer Reply

 reply = () => {

   testReply(0,0);
   testReply(1,1);
   testReply(2,2);
   testReply(3,3);
   testReply(4,4);
   testReply(5,5);
   testReply(6,6);
   testReply(7,7);
   testReply(8,8);
   testReply(9,9);
   testReply(10,10);
   testReply(11,11);


    gameOver();
    gameWon();
};


 // ********************** FUNCTIONS ****************************


// next question
 const nextQuestion = () => {
      $('#questions').html(randomQuestion())


};



// gets a random question
 let randomQuestion = () => {

   let random = Math.floor( Math.random() * gameConfig.questions.length  );

    return gameConfig.questions[random]

};

// pairs quesion with answers

let testReply = (questionIndex ,answerIndex) =>{
    // VARIABLES
    // get questions
   let questionChange =  setTimeout(clear = () => {
        if(life != 0) {
            $('#questions').html(randomQuestion())

        }

        },2000);


   let tryPair = $('#questions').html();
   let testQ = gameConfig.questions;
   let testAnswers = gameConfig.answers;
   let reply = $('#answers').val();
   //convert user input to lowercase
    reply.toLowerCase();

   //test
   if( tryPair === testQ[questionIndex] ) {
      if (testAnswers[answerIndex].toLowerCase() === reply) {

          $('#response').html(gameConfig.response.correct);
          $('#score').html(score += 7);
          audioManager('assets/audio/correct.ogg');
          questionChange;
          $('#answers').val("")



      }
      else {
          $('#response').html(gameConfig.response.incorrect);
          $('#score').html(score -= 6);
          $('#life').html(life -= 1);
          audioManager('assets/audio/knifeSlice2.ogg');
          $('#ScoreImage').attr("src", "https://media.giphy.com/media/NK1x68ZH6KojS/giphy.gif") ;
          $('#answers').val("")

      }


      }


};


// HINT
$('#hint').click(hintButton);

function hintButton () {
    $('#score').html(score -= 2);
    $('#life').html(life -= 1);
    audioManager('assets/audio/knifeSlice2.ogg');
    gameOver();
    // get questions
    let questions = $('#questions').html();
    let gameConfigQuestons = gameConfig.questions;
    let gameConfigAnswers = gameConfig.answers;
    for (key in gameConfigAnswers && gameConfigQuestons ) {
       // alert(gameConfigQuestons[key] + " " + gameConfigAnswers[key]);
        if (questions === gameConfigQuestons[key]) {
            alert(gameConfigAnswers[key] )
        }
    }
}

// Audio

audioManager = (audioSource) => {
     let audio = $('#audio').attr('src',audioSource );
        audio.prop('volume', 0.2);
        audio.trigger('play');

};


// GAMEOVER


gameOver = () => {


     if(life === 0) {
         audioManager('assets/audio/game_over.ogg');
         $('#gameOver').html('This is the end');
         $('#questions').html('This is the end you lost refresh browser to play again');


     }

 };

gameWon = () => {

    if(score === winScore) {
        $('#gameOver').html('You have made it to Heaven');
        audioManager('assets/audio/you_win.ogg')
    }

};


setInterval(clear = () => {  $('#ScoreImage').attr("src","") },3000);
setInterval(clear = () => {  $('#response').html('') },7000);



$(function () {
$('#questions').html(randomQuestion());
$('#life').html(life);


});





