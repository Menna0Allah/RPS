let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    loses : 0,
    ties : 0
}   

// let score = JSON.parse(localStorage.getItem('score'));

// if (score === null){
//     score = {
//         wins : 0,
//         loses : 0,
//         ties : 0
//     };
// }



updateScore();

let result = '';

function playGame(x){
    c =play();
    
    if(x === 'rock'){
        if (c === 'rock'){
            result='tie';
        }else if (c === 'paper'){
            result='you lose';
        }else if (c === 'scissors'){
            result='you win';
        }
    }
    else if(x === 'paper'){
        if (c === 'rock'){
            result='you win';
        }else if (c === 'paper'){
            result='tie';
        }else if (c === 'scissors'){
            result='you lose';
        }
    }
    else if (x === 'scissors'){
        if (c === 'rock'){
            result='you lose';
        }else if (c === 'paper'){
            result='you win';
        }else if (c === 'scissors'){
            result='tie';
        }
    }

    if(result === 'you win'){
        score.wins += 1;
    }else if(result === 'you lose'){
        score.loses += 1;
    }else if(result === 'tie'){
        score.ties +=1;
    }
    
    localStorage.setItem('score',JSON.stringify(score));
    
    updateScore();
    document.querySelector('.moves').innerHTML = `you select  <img src="imgs/${x}.png" class="i">  and the computer select   <img src="imgs/${c}.png" class="i">`;
    document.querySelector('.result').innerHTML = `${result}`;

}

function updateScore(){
    document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function play(){
    let c = '';
    const x = Math.random();
    if(x>=0 && x<1/3){
        c = 'rock';
    }else if(x>=1/3 && x<2/3){
        c = 'paper';
    }else if(x>=2/3 && x<=1){
        c = 'scissors';
    }
    return c;
}