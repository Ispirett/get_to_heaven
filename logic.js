// varriables
let score = 0;  let life = 3; let winScore = 49;


const gameConfig = {
  questions : [
       'In what city was Jesus born? ' ,
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

  answers : {
     1 : 'Bethlehem',
     2 : '27',
     3 : 'Locusts',
     4 : 'Peter',
     5 : 'Simeon',
     6 : 'Malta',
     7 : 'Tax collector',
     8 :  'Damascus',
     9 :  'Saul',
     10 : 'Luke',
     11 : 'Love',
     12 : 'Benjamin',

  },

  response: {
      correct: 'I step closer to Heaven',
      incorrect: 'You have forsaken your God',

  }



};


// functions

// answer Reply

 reply = () => {

    testReply(0,'1');
    testReply(1,'2');
    testReply(2,'3');
    testReply(3,'4');
   testReply(4,'5');
   testReply(5,'6');
   testReply(6,'7');
   testReply(7,'8');
   testReply(8,'9');
   testReply(9,'10');
   testReply(10,'11');
   testReply(11,'12');


    gameOver();
    gameWon();
};

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
    // get questions
   let questionChange =  setTimeout(clear = () => { $('#questions').html(randomQuestion())  },2000);
   let tryPair = $('#questions').html();
   let testQ = gameConfig.questions;

   let testAnswers = gameConfig.answers;
    console.log(testAnswers);
   let reply = $('#answers').val();
   //convert user input to lowercase
    reply.toLowerCase();

   //test
   if( tryPair === testQ[questionIndex] ) {
      if (testAnswers[answerIndex].toLowerCase() === reply) {

          $('#response').html(gameConfig.response.correct);
          $('#score').html(score += 7);
          questionChange;
          $('#answers').val("")



      }
      else {
          $('#response').html(gameConfig.response.incorrect);
          $('#score').html(score -= 6);
          $('#life').html(life -= 1);
          $('#ScoreImage').attr("src", "https://media.giphy.com/media/NK1x68ZH6KojS/giphy.gif")
          $('#answers').val("")
      }


      }
     //$('#answers').val("");

};

 gameOver = () => {


     if(life === 0) {
         $('#gameOver').html('This is the end')

     }

 };

gameWon = () => {

    if(score === winScore) {
        $('#gameOver').html('You have made it to Heaven')

    }

};








setInterval(clear = () => {  $('#ScoreImage').attr("src","") },3000);
setInterval(clear = () => {  $('#response').html('') },7000);



$(function () {
$('#questions').html(randomQuestion());
$('#life').html(life);



});
