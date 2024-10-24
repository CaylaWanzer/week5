

// yic tac toe 

const line = [".", ".", "."];
line[1] = "X"
console.log(line)


const board = [
    ["X", ".", "."],
    [".", ".", "."],
    [".", ".", "X"],

];

board[1][1] = "X"
function printBoard(board){
    for(r=0; r<board.length; r++){
        rowOutput =""
        for(c=0; c<board[r].length; c++){
            let value = board[r][c];
            rowOutput += value + " ";
        };
        console.log(r, rowOutput);
    };
};
printBoard(board);

const rowCount = 9
const colCount = 9
goBoard = []

for(let r = 0; r < rowCount; r++){
    let row = []
    for (let c = 0; c < colCount; c++){
        row.push(".");
    }
    goBoard.push(row);

};
printBoard(goBoard);
