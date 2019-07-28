// varriables
let score = 0;  let life = 3; let winScore = 49;   let counter = 0;


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

    hint : [
        'B_t_le_e_',
        '2_',
        'L_cu_ts',
        'P_t_r',
        'S_m_on',
        'M_lt_',
        'Ta_ co_l_c_or',
        'D_ma_cus',
        'S_ul',
        'L_k_',
        'L_v_',
        'B_nj_m_n',

    ],




    response: {
      correct: 'I step closer to Heaven',
      incorrect: 'You have forsaken your God',

  },


  gameAudio : {

      intro: 'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_intro_2.mp3',
      win: 'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_win_1.mp3',
      lose: [
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_loss_1.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_loss_2.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_loss_3.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_loss_4.mp3',

      ],

      correct:[
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_correct_1.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_correct_2.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_correct_3.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_correct_4.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_correct_5.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_correct_6.mp3',
      ],

      wrong:[
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_wrong_1.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_wrong_2.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_wrong_3.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_wrong_4.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_wrong_5.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_wrong_6.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_wrong_7.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_wrong_8.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_wrong_9.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_wrong_10.mp3',
      ],

      taunt: [
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_taunt_1.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_taunt_2.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_taunt_3.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_taunt_4.mp3',
          'assets/Get_to_Heaven_Audio/Get_Heaven_voice_over_taunt_5.mp3',
      ],
      music:'assets/Get_to_Heaven_Audio/Get_Heaven_music.mp3',


      ui:{

          button: ['assets/audio/Tiny Button Push.mp3', ],
          update: ['assets/audio/Pin Drop.mp3'],

      }

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
    // pause taunt
   // pauseTaunt();

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
        if(life !== 0) {
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
          audioManager(audioSelector(gameConfig.gameAudio.correct),0.5,'#audio3');
          questionChange;
          $('#answers').val("");



      }
      else {
          $('#response').html(gameConfig.response.incorrect);
          $('#score').html(score -= 6);
          $('#life').html(life -= 1);
          audioManager(audioSelector(gameConfig.gameAudio.wrong),0.5,'#audio3');
          $('#ScoreImage').attr("src", "https://media.giphy.com/media/NK1x68ZH6KojS/giphy.gif") ;
          $('#answers').val("")

      }


      }


};


// HINT
$('#hint').click(hintButton);

function hintButton () {
    $('#score').html(score -= 6);


    audioManager(gameConfig.gameAudio.ui.button[0],1);
    gameOver();
    // get questions
    let questions = $('#questions').html();
    let gameConfigQuestons = gameConfig.questions;
    let gameConfigAnswers = gameConfig.answers;
    let gameConfigHints = gameConfig.hint;
    // loop through hints and questions
    for (key in gameConfigHints && gameConfigQuestons ) {

        if (questions === gameConfigQuestons[key]) {
            alert(gameConfigHints[key])
        }
    }

}

// Audio ************************

audioManager = (audioSource, volume = 0.5, id = '#audio', trigger = 'play' ) => {
     let audio = $(id).attr('src',audioSource );
        audio.prop('volume', volume);
        audio.trigger(trigger);

};

// take an array of audio and returns a random one.
audioSelector = (audioName) => {

    let random = Math.floor(Math.random() * audioName.length);
    return audioName[random];

};


function  playTaunt () { setInterval(() =>{
    if (life !== 0) {
        audioManager(audioSelector(gameConfig.gameAudio.taunt), 0.4, '#audio3')
    }
},14000);

}

// Start Playing taunt
setTimeout( () => {
    playTaunt();

}, 8000);


function pauseTaunt () {
    audioManager(audioSelector(gameConfig.gameAudio.taunt), 0.4, '#audio3', 'stop');

    setTimeout(() => {
        audioManager(audioSelector(gameConfig.gameAudio.taunt), 0.4, '#audio3', 'play');

    }, 9000);
}








//*************************************

//GAMESTART

gameStart = () =>{

    $('#life').html(life);
    $('#score').html(score);

    audioManager(gameConfig.gameAudio.intro, 1);
    audioManager(gameConfig.gameAudio.music, 0.3,'#audio2','play')


};




// GAMEOVER


gameOver = () => {


     if(life === 0) {
         audioManager(audioSelector(gameConfig.gameAudio.lose));
         $('#gameOver').html('This is the end');
         $('#questions').html('This is the end you lost refresh browser to play again');
         document.getElementById("overlay").style.display = "block";
         $('#replayButton').text("Replay");
         $('#replayButton').click( () =>{
             document.getElementById("overlay").style.display ="none";
             location.reload();
         });
     }

 };

gameWon = () => {

    if(score === winScore) {
        $('#gameOver').html('You have made it to Heaven');
        audioManager(gameConfig.gameAudio.win)
    }

};

// timers
setInterval(clear = () => {  $('#ScoreImage').attr("src","") },5000);
setInterval(clear = () => {  $('#response').html('') },7000);




$(document).ready(function () {


$('#questions').html(randomQuestion());
gameStart();
});



