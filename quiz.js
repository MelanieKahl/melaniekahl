const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

const quizQuestions = [
    {

        question: "Melanie Kahl is currently completing a PhD in:",
  
        answers: {
  
          a: "Computer coding",
  
          b: "Life Science Engineering",
  
          c: "Biomedicine",
  
          d: "Medical Engineering"
  
        },
  
        correctAnswer: "b"
  
      },
  
      {
  
        question: "Melanie Kahl works at:",
  
        answers: {
  
          a: "Friedrich-Alexander University (FAU) Erlangen-Nuremberg",
  
          b: "Queensland University of Technology (QUT)",
  
          c: "FAU and QUT",
  
          d: "University of Queensland"
  
        },
  
        correctAnswer: "c"
  
      },
  
      {
  
        question: "Melanie’s research skills include:",
  
        answers: {
  
          a: "Microscopy",
  
          b: "Programming languages",
  
          c: "Open-Source Prototyping",
  
          d: "All of the above"
  
        },
  
        correctAnswer: "d"
  
      },
  
      {
  
        question: "In her free time Melanie likes to do:",
  
        answers: {
  
          a: "Cycling",
  
          b: "Running",
  
          c: "Soccer",
  
          d: "Badminton"
  
        },
  
        correctAnswer: "a"
  
      }
  
]

function buildQuiz() {

    // variable to store the HTML output
    const output = [];

    for(i=0; i<quizQuestions.length; i++){
        // variable to store the list of possible answers
        const answers = [];

        // for each available answer to this question add a html radio button
        for(letter in quizQuestions[i].answers){

            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + quizQuestions[i].answers[letter]
                + '</label>'
                );
            }

        // add this question and its answers to the output

        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            );
    }

    // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');

}

function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var numCorrect = 0;

    // for each question...

    for(i=0; i<quizQuestions.length; i++){
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        // if answer is correct
        if(userAnswer===quizQuestions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;   
        
            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
            }
        
            // if answer is wrong or blank
            else{
        
            // color the answers red
                answerContainers[i].style.color = 'red';
            }
    }
    if (numCorrect === 0) { 

        resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
            }
     if (numCorrect === 1) { 

        resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
              }
        
    if (numCorrect === 2) { 
        
        resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
              }
        
    if (numCorrect === 3) { 
        
        resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Melanie pretty well!";
              }
        
    if (numCorrect === 4) { 
        
        resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Melanie so well!";
              }

}

//load quiz

buildQuiz();

submitButton.onclick = function() {

    showResults();
 
  }
