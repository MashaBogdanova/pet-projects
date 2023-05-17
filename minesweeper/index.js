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
                const cell = new Cell(this, i, j);
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

    endTheGame() {
        // todo: add modal window with time and steps count
        const modal = document.createElement("div");
        modal.classList.add("modal");
        const modalOverlay = document.createElement("div");
        modal.classList.add("modal_overlay");
        modalOverlay.append(modal);
        document.body.append(modalOverlay);
    }
}

// Create cell class
class Cell {
    constructor(board, row, column) {
        this.opened = false;
        this.mine = false;
        this.flagged = false;
        this.id = `${row}-${column}`;
        this.board = board;
        this.cellElement = this.createCell();
        this.board.boardElement.addEventListener("click", this.onClickCell);
        this.board.boardElement.addEventListener("dblclick", this.onDoubleClickCell);
    }

    createCell() {
        let cell = document.createElement("div");
        cell.classList.add("board__cell");
        cell.setAttribute("style", `flex-basis: ${100 / this.board.rowCount}%`);
        cell.setAttribute("id", this.id);
        this.board.boardElement.append(cell);
        return cell;
    }

    addMine() {
        this.mine = true;
    }

    onClickCell = e => {
        // todo: extract method
        const row = e.target.id.split("-")[0];
        const column = e.target.id.split("-")[1];
        const chosenCell = this.board.board[row][column];

        if (chosenCell.mine) {
            chosenCell.cellElement.classList.add("board__cell_mined")
            this.board.endTheGame();
        } else {
            chosenCell.cellElement.classList.add("board__cell_opened");
        }
        chosenCell.opened = true;
    }

    onDoubleClickCell = e => {
        // todo: extract method
        const row = e.target.id.split("-")[0];
        const column = e.target.id.split("-")[1];
        const chosenCell = this.board.board[row][column];

        // if (chosenCell.flagged) {
        //     chosenCell.cellElement.classList.remove("board__cell_flagged");
        //     chosenCell.flagged = false;
        // } else {
        // todo: nie działa
        chosenCell.cellElement.classList.remove("board__cell_opened");
        chosenCell.cellElement.classList.add("board__cell_flagged");
        console.log(chosenCell.cellElement);
        chosenCell.flagged = true;
        // }
    }
}


const board = new Board();
board.localizeMines();

