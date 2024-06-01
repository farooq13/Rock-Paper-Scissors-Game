const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
}


function playGame(playerMove) {
  let computerMove = pickComputerMove();
  let result = '';

  if (computerMove === 'rock') {
    if (playerMove === 'rock') {
      result = 'Tie';
    } else if (playerMove === 'paper') {
      result = 'You win';
    } else if (playerMove === 'scissors') {
      result = 'You lose';
    }
  } else if (computerMove === 'paper') {
    if (playerMove === 'rock') {
      result = 'You lose';
    } else if (playerMove === 'paper') {
      result = 'Tie';
    } else if (playerMove === 'scissors') {
      result = 'You win';
    }
  } else if (computerMove === 'scissors') {
    if (playerMove === 'rock') {
      result = 'You win';
    } else if (playerMove === 'paper') {
      result = 'You lose';
    } else if (playerMove === 'scissors') {
      result = 'Tie';
    }
  };

  if (result === 'You win') {
    score.wins ++;
  } else if (result === 'You lose') {
    score.loses ++;
  } else if (result === 'Tie') {
    score.ties
  };

  document.querySelector('.js-result').innerHTML = result;
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-move')
  .innerHTML = `You  <img src="${playerMove}-emoji.png" class="move-icon"> <img src="${computerMove}-emoji.png" class="move-icon"> Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}` 
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}