// Create board class
class Board {
    constructor() {
        this.rowCount = 10;
        this.minesCount = 90;
        this.boardElement = this.createBoardElement();
        this.board = this.createBoard();
        this.closestCellsDirections = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ];
        this.boardElement.addEventListener("click", this.checkClickedCell);
        this.boardElement.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            this.flagClickedCell(e);
        });
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

    checkClickedCell = e => {
        const row = Number(e.target.id.split("-")[0]);
        const column = Number(e.target.id.split("-")[1]);
        const chosenCell = this.board[row][column];

        if (chosenCell.mine) {
            chosenCell.opened = true;
            chosenCell.cellElement.classList.add("board__cell_mined");
            this.endTheGame();
        } else {
            this.openAndCheckNeighbours(row, column, chosenCell);
        }
    }
    openAndCheckNeighbours(row, column, chosenCell) {
        chosenCell.cellElement.classList.add("board__cell_opened");
        chosenCell.opened = true;

        const counter = this.countMinedNeighbours(row, column);

        if (counter === 0) {
           this.checkNeighbours(row, column);
        } else {
            this.board[row][column].cellElement.innerHTML = `${counter}`;
        }
    }
    countMinedNeighbours(row, column) {
        let counter = 0;

        for (let direction of this.closestCellsDirections) {
            const rowNumber = row + direction[0];
            const colNumber = column + direction[1];

            if (rowNumber >= 0 && colNumber >= 0 && rowNumber <= this.rowCount - 1
                && colNumber <= this.rowCount - 1 && this.board[rowNumber][colNumber].mine) {
                counter += 1;
            }
        }
        return counter;
    }
    checkNeighbours(row, column) {
        for (const direction of this.closestCellsDirections) {
            const rowNumber = row + direction[0];
            const colNumber = column + direction[1];

            if (rowNumber >= 0 && colNumber >= 0 && rowNumber <= this.rowCount - 1 && colNumber <= this.rowCount - 1
                && !this.board[rowNumber][colNumber].opened) {
                this.openAndCheckNeighbours(rowNumber, colNumber, this.board[rowNumber][colNumber]);
            }
        }
    }
    flagClickedCell = e => {
        // todo: extract method
        const row = e.target.id.split("-")[0];
        const column = e.target.id.split("-")[1];
        const chosenCell = this.board[row][column];

        if (chosenCell.flagged) {
            chosenCell.cellElement.classList.remove("board__cell_flagged");
            chosenCell.flagged = false;
        } else {
            chosenCell.cellElement.classList.remove("board__cell_opened");
            chosenCell.cellElement.classList.add("board__cell_flagged");
            console.log(chosenCell.cellElement);
            chosenCell.flagged = true;
        }
    }

    endTheGame() {
        this.createEndGameModal();
        this.startTimer();
        this.startStepsCounter();
    }
    createEndGameModal() {
        const modalOverlay = createElement("div", "modal__overlay", document.body, "");
        const modal = createElement("section", "modal", modalOverlay, "");
        const stepsCounter = createElement("article", "modal__steps", modal, "");
        const tryAgainButton = createElement("button", "modal__try-again-btn", modal, "Try again");
        const timer = createElement("article", "modal__timer", modal, "");
        const gameOver = createElement("h1", "modal__game-over", modal, "GAME OVER");
    }
    startTimer() {

    }
    startStepsCounter() {

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
}

function createElement (elemType, style, parent, text) {
    const elem = document.createElement(elemType);
    elem.classList.add(style);
    elem.innerText = text;
    parent.append(elem);
    return elem;
}

const board = new Board();
board.localizeMines();