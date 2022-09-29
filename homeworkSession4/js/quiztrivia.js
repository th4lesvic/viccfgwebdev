let userName = prompt('Enter your Name : ')
if(userName != null && userName != '')
{
    alert('Welcome to this SciFi quiz : '+userName);
}
else
{
    alert('Blank name...!')
}

let userStartQuiz = prompt('Are you Interested in books that explore moral, ethical, social, or intellectual questions set against a backdrop that is outside of everyday reality? \nY \nN ');

if(userStartQuiz === 'Y' )
{
    alert('Great! Lets start! =) \nYou have to choose only one option per question. Answer = Letter')
}
else
{
    alert('Thats not a cool answer. Sorry to hear that, bye then ' +userName)
}
//TO-DO: I dont know how to solve the loop if user answer N/other - and prevent to start the next block 

let questions =
[
    { question: 'Pick a topic that intrigues you \nA - The Human Brain\nB - Parallel Universe\nC - Outer Space', 
    answer: 
    {
        'A': 0,
        'B': 1,
        'C': 2,
    }},
    { question: 'Which of these feelings do you want to feel? \nA - Captivated\nB - Adventurous\nC - Amused',
     answer: 
     {
        'A': 3,
        'B': 4,
        'C': 5,
     }},
    { question: 'Pick a time machine \nA - DeLorean\nB - T.A.R.D.I.S.\nC - Time Turner', 
    answer: 
    {
        'A': 6,
        'B': 7,
        'C': 8,
    }},
];

function quiz() {
    let score = 0;
    
    questions.forEach((question) => 
    {
      let answer = prompt(question.question + '\nAnswer: ');
      
      if (answer.toUpperCase()) 
      {
        alert('Next Question');
      } else {
        alert('Wrong Answer! \n You have to choose only one option per question. Answer = Letter');
      }
    });
// It seems that the results are always the same "score=10", other conditions are not evaluated. I don't see how to solve this  
    if (score = 9) 
    {
      alert('Your book is: I, robot- Isaac Asimov');
    } 
    else if (score = 10) 
    {
      alert('Your book is: Childhoods end- Arthur C. Clarke');
    } 
    else if (score = 11) 
    {
      alert('Your book is: Neuromancer- Isaac Asimov');
    } 
    else if (score = 12) 
    {
      alert('Your book is: Ubik- Phlip K. Dick');
    } 
    else if (score = 13) 
    {
      alert('Your book is: Dune- Frank Herbert');
    } 
    else if (score = 14) 
    {
      alert('Your book is: The Hitchhikers Guide to the Galaxy- Douglas Adams');
    } 
    else if (score = 15) 
    {
      alert('Your book is: The Complete Roderick- John Sladek');
    } 
    else 
    {
      alert('Somenthing went wrong, please try again')
    }
  }

  quiz();

