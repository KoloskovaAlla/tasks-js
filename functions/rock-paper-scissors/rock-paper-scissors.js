const rps = (p1, p2) => {
    if (p1 === 'scissors') {
        if (p2 === 'paper') return  "Player 1 won!";
        if (p2 === 'rock') return "Player 2 won!";
        if (p2 === 'scissors') return  "Draw!";
        
    }

    if (p1 === 'paper') {
        if (p2 === 'paper') return "Draw!";
        if (p2 === 'rock') return "Player 1 won!";
        if (p2 === 'scissors') return  "Player 2 won!";
        
    }

    if (p1 === 'rock') {
        if (p2 === 'paper') return "Player 2 won!";
        if (p2 === 'rock') return "Draw!";
        if (p2 === 'scissors') return  "Player 1 won!";
        
    }
};

// Rock beats Scissors,
// Scissors beat Paper,
// Paper beats Rock,
// Two identical moves are a draw.

// "scissors",     "paper"     --> "Player 1 won!"
// "scissors",     "rock"      --> "Player 2 won!"
// "paper",        "paper"     --> "Draw!"