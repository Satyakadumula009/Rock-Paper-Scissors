const score = JSON.parse(localStorage.getItem
    ('scoreBoard')) || {
        wins : 0,
        loses : 0,
        ties : 0
    };
    
    const jsWinLose = document.querySelector('.js-win');
    const jsScore = document.querySelector('.js-score');

    updateScoreElement();
    

    // if(!score || score === null){
    //     score.wins = 0,
    //     score.loses = 0,
    //     score.ties = 0
    // };


    let isAutoPlaying = false;
    let intervalId;

    

// -----------------------------
    let result = '';
    function rpsWinner(playerMove){ 
        if (playerMove == 'Rock'){
            if (computerChoice === 'Rock'){
                result = 'Tie.'
            }
            else if(computerChoice === 'Paper'){
                result = 'You lose.'
            }
            else{
                result = 'You Win.'
            }
        }
        else if (playerMove == 'Paper'){
            if (computerChoice === 'Rock'){
                result = 'You Win.'
            }
            else if (computerChoice === 'Paper'){
                result = 'Tie.'
            }
            else{
                result = 'You lose.'
            }
        }
        else if (playerMove == 'Scissors'){
            if (computerChoice === 'Rock'){
                result = 'You lose.'
            }
            else if(computerChoice === 'Paper'){
                result = 'You Win.'
            }
            else{
                result = 'Tie.'
            }
        }


        if(result == 'You Win.'){
            score.wins += 1;
        }
        else if(result == 'You lose.'){
            score.loses += 1;
        }
        else if(result == 'Tie.'){
            score.ties += 1;
        }

        // You chose ${playerMove}. Computer chose ${computerChoice}
        console.log(localStorage.setItem('scoreBoard',JSON.stringify(score)));
        updateWinLose();
        document.querySelector('.comp-user').innerHTML = `You <img src="${playerMove}.png" class="compUserImg"> -  <img src="${computerChoice}.png" class="compUserImg"> Comp`;
        updateScoreElement();
    }
// ----------------------------
    function updateWinLose(){
        jsWinLose.innerHTML = `${result}`;
    }
// ----------------------------
    function updateScoreElement(){
        jsScore.innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
    }
// ----------------------------
    let computerChoice = '';
    function computerMove() {
        const rpsArray = ['Rock','Paper','Scissors'] ;
        const rpsIndex = Math.floor(Math.random()*3);
        computerChoice = rpsArray[rpsIndex];
    }

// -----------------------------
    let count = 0;
    function reset(){
        if(count>3){
            alert("Too much attempts u idiot.");
            count=0;
            return;
        }
        if(score.wins === 0 && score.loses === 0 && score.ties === 0 ){
            alert(`Either you already cleared the score Or You haven't started the match yet you idiot.`);
        }
        else if(score.wins != 0 || score.loses != 0 || score.ties != 0){
            jsWinLose.innerHTML = '';
            document.querySelector('.comp-user').innerHTML = '';
            score.wins = 0;
            score.loses = 0;
            score.ties = 0;
            console.log(localStorage.setItem('scoreBoard',JSON.stringify(score)));
            updateScoreElement();
        }
        count+=1;
    }