
const arr = ['rock','paper','scissors']; //array of possibilities
let randNum = Math.floor(Math.random() * 3);

addEventListener('DOMContentLoaded',gamePlay)

function gamePlay() {

    //all nodes to be used
    let gameInput = document.getElementById('userInput')
    let gameSubmit = document.getElementById('userSubmit')
    let game = document.getElementById('game');
    
    gameSubmit.addEventListener('click',function(event){

        let answer = document.createElement('h1');
        let wait = document.createElement('h1')
        let reload = document.createElement('h3');
        reload.innerText = 'Reload Page to Replay.'
        wait.innerText = `Computer got ${arr[randNum]}. . .`
        
            
        //if user chose rock
        if (gameInput.value === 'rock') {
            if (arr[randNum] === 'rock') {
                answer.innerText = 'You Tied.';
            } else if(arr[randNum] === 'paper') {
                answer.innerText = 'You Lost.';
            }else if (arr[randNum] === 'scissors') {
                answer.innerText = 'You Won!';
            };
            game.appendChild(wait);
            game.appendChild(answer);
            game.appendChild(reload);
        }
        //if user chose paper
        else if (gameInput.value === 'paper') {
            if (arr[randNum] === 'paper') {
                answer.innerText = 'You Tied.';
            } else if(arr[randNum] === 'rock') {
                answer.innerText = 'You Won!';
            }else if (arr[randNum] === 'scissors') {
                answer.innerText = 'You Lost.';
            };
            game.appendChild(wait);
            game.appendChild(answer);
            game.appendChild(reload);
        }
        //if user chose sissors
        else if (gameInput.value === 'scissors') {
            if (arr[randNum] === 'scissors') {
                answer.innerText = 'You Tied.';
            } else if(arr[randNum] === 'paper') {
                answer.innerText = 'You Won!';
            }else if (arr[randNum] === 'rock') {
                answer.innerText = 'You Lost.';
            };
            game.appendChild(wait);
            game.appendChild(answer);
            game.appendChild(reload);
        }
        else {
            answer.innerText = 'Invalid Response.';
            game.appendChild(answer);
            game.appendChild(reload);
        }
        event.preventDefault(); //prevent from reloading
    });

}
