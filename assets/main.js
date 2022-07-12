let playerCount = 0;
let computerCount = 0;
let computerChoice;
let rounds = 0;
let game = ['Tail', 'Head'];
let index;

function player(value) {
    if (value == 'Head') {
        index = Math.floor(Math.random() * game.length)
        computerChoice = game[index];
        let outcome = outcomeFn();
        if (outcome == 'Head') {
            playerCount = playerCount + 1;
        }
        if (outcome == computerChoice) {
            computerCount = computerCount + 1;
        }

        rounds = rounds + 1;
        document.getElementById('rounds').innerHTML = rounds;
        document.getElementById('comp').innerHTML = computerChoice;
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerCount').innerHTML = playerCount;
        document.getElementById('computerCount').innerHTML = computerCount;

        if (rounds == 5) {
            if (playerCount > computerCount) {
                document.getElementById('result').innerHTML = 'Player Wins!';
            } else if (computerCount > playerCount) {
                document.getElementById('result').innerHTML = 'Computer Wins!'
            } else {
                document.getElementById('result').innerHTML = "A draw!"
            }
        } else if (rounds == 6) {
            restart();
        }

    } else if (value == 'Tail') {
        index = Math.floor(Math.random() * game.length)
        computerChoice = game[index];
        let outcome = outcomeFn();
        if (outcome == 'Tail') {
            playerCount = playerCount + 1;
        }
        if (outcome == computerChoice) {
            computerCount = computerCount + 1;
        }
        rounds = rounds + 1;
        document.getElementById('rounds').innerHTML = rounds;
        document.getElementById('comp').innerHTML = computerChoice;
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerCount').innerHTML = playerCount;
        document.getElementById('computerCount').innerHTML = computerCount;

        if (rounds == 5) {
            if (playerCount > computerCount) {
                document.getElementById('result').innerHTML = 'Player Wins!'
            } else if (computerCount > playerCount) {
                document.getElementById('result').innerHTML = 'Computer Wins!'
            } else {
                document.getElementById('result').innerHTML = " A draw!"
            }
        } else if (rounds == 6) {
            restart();
        }
    }
}

function outcomeFn() {
    let i = Math.floor(Math.random() * game.length);
    return game[i];
}

function restart() {
    rounds = 0;
    playerCount = 0;
    computerCount = 0;

    document.getElementById('rounds').innerHTML = '';
    document.getElementById('comp').innerHTML = '';
    document.getElementById('outcome').innerHTML = '';
    document.getElementById('playerCount').innerHTML = '';
    document.getElementById('computerCount').innerHTML = '';
    document.getElementById('result').innerHTML = '';

}