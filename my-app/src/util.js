export function isEndgame(stacks){
    return stacks.reduce((r, e) => r + (e > 1), 0) < 2;
}

// -1 computer wins, if 0 undecided, if 1 user wins.
export function calculateWinner(history,userIsNext){
    var stacks = history.map(x => x.reduce((a,b) => a-b,(x.length)))
    if (IsOnlyOnePopLeft(stacks)){
        if (userIsNext){
            return -1;
        }
        return 1;
    }
    return 0;
}

// Returns the optimal move or undefined if no winning move is possible:
export function optimalMove(history) {
    var stacks = history.map(x => x.reduce((a,b) => a-b,(x.length)))
    var stacks_xor = stacks.reduce((r, e) => r ^ e, 0);
    var isEnd = isEndgame(stacks)
    var move = stacks.reduce((move, stack, i) => {  
      var take = stack - (isEnd ^ stack ^ stacks_xor);
      return take > move[1] ? [i, take] : move;
    }, [0, 0]);
    return move[1] > 0 ? move : undefined;
}

function IsOnlyOnePopLeft(stacks){
    var ones = 0;
    for(let i = 0; i < stacks.length; i++){
        if(stacks[i] > 1){
            return false;
        }
        if(stacks[i] == 1){
            ones++;
        }
    }
    return ones == 1;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }