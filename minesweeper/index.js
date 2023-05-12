// Create board class
class Board {
    constructor() {
        this.rowCount = 10;
        this.minesCount = 10;
        this.boardElement = this.createBoardElement();
        this.board = this.createBoard();
    }

    createBoard() {
        let board = [];
        for (let i = 0; i < this.rowCount; i++) {
            board.push([]);
            for (let j = 0; j < this.rowCount; j++) {
                const cell = new Cell(this);
                board[i].push(cell);
            }
        }
        return board;
    }

    createBoardElement() {
        let boardElement = document.createElement("section");
        boardElement.classList.add("board");
        document.body.append(boardElement);
        return boardElement;
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
        this.board = board;
        this.cell = this.createCell();
    }

    createCell() {
        let cell = document.createElement("div");
        cell.classList.add("board__cell");
        cell.setAttribute("style", `flex-basis: ${100 / this.board.rowCount}%`);
        this.board.boardElement.append(cell);
        return cell;
    }

    addMine() {
        this.mine = true;
        this.cell.classList.add("board__cell_mined");
    }
}

const board = new Board();
board.localizeMines();

