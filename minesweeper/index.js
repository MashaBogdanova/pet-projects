// Create board class
class Board {
    constructor() {
        this.boardElement = document.createElement("section");
        this.board = [];
        this.rowCount = 10;
        this.minesCount = 10;
    }
    createBoard() {
        this.boardElement.classList.add("board");
        document.body.append(this.boardElement);

        for (let i = 0; i < this.rowCount; i++) {
            this.board.push([]);
            for (let j = 0; j < this.rowCount; j++) {
                const cell = new Cell(this);
                this.board[i].push(cell);
                cell.createCell(this.boardElement);
            }
        }
    }
    localizeMines() {
        for (let i = 0; i < this.minesCount; i++) {
            const randomNumber = Math.floor(Math.random() * (this.rowCount * this.rowCount));
            const rowIndex = Math.floor(randomNumber / this.rowCount);
            const colIndex = randomNumber % this.rowCount;

            // Check if the cell is already mined
            this.board[rowIndex][colIndex].mine ? i-- : this.board[rowIndex][colIndex].addMine();
        }
    }
}

// Create cell class
class Cell {
    constructor(board) {
       this.opened = false;
       this.mine = false;
       this.flagged = false;
       this.cell = null;
       this.board = board;
    }
    createCell() {
        this.cell = document.createElement("div");
        this.cell.classList.add("board__cell");
        this.cell.setAttribute("style", `flex-basis: ${100/this.board.rowCount}%`)
        this.board.boardElement.append(this.cell);
    }
    addMine() {
        this.mine = true;
        this.cell.classList.add("board__cell_mined");
    }
}

const board = new Board();
board.createBoard();
board.localizeMines();

