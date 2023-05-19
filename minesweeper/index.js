// Create header
class Header {
    constructor() {
        this.stepsCounter = 0;
        this.headerElement = this.createHeader();
    }

    createHeader() {
        const headerElement = document.createElement("header");
        headerElement.classList.add("header");
        document.body.prepend(headerElement);

        const title = createElement("h1", "header__title", headerElement, "MINESWEEPER");
        const stepsCounter = createElement("article", "header__steps", headerElement, "00");
        const tryAgainButton = createElement("button", "header__button", headerElement, "New game");
        tryAgainButton.addEventListener("click", board.restartTheGame);
        const timer = createElement("article", "header__timer", headerElement, "00");

        return headerElement;
    }

    rerenderStepsCounter() {
        document.querySelector(".header__steps").innerText = this.stepsCounter.toString().length === 1
            ? `0${this.stepsCounter}`
            : `${this.stepsCounter}`;
    }
}

// Create board class
class Board {
    constructor() {
        this.rowCount = 10;
        this.minesCount = 10;
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
            addSoundEffect("./assets/sounds/add-flag.mp3");
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
        return createElement("section", "board", document.body, "");
    }

    localizeMines() {
        for (let i = 0; i < this.minesCount; i++) {
            const randomNumber = Math.floor(Math.random() * (this.rowCount * this.rowCount));
            const rowIndex = Math.floor(randomNumber / this.rowCount);
            const colIndex = randomNumber % this.rowCount;

            // Check if the cell is already mined
            this.board[rowIndex][colIndex].mine ? i-- : this.board[rowIndex][colIndex].mine = true;
        }
    }

    checkClickedCell = e => {
        const row = Number(e.target.id.split("-")[0]);
        const column = Number(e.target.id.split("-")[1]);
        const chosenCell = this.board[row][column];

        if (chosenCell.mine) {
            chosenCell.opened = true;
            chosenCell.cellElement.classList.add("board__cell_mined");
            addSoundEffect("./assets/sounds/explosion.mp3");
            setTimeout(() => {
                this.endTheGame();
                addSoundEffect("./assets/sounds/game-over.mp3");
            }, 1000);
        } else {
            this.openAndCheckNeighbours(row, column, chosenCell);
        }
        header.stepsCounter += 1;
        header.rerenderStepsCounter();
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
        const row = e.target.id.split("-")[0];
        const column = e.target.id.split("-")[1];
        const chosenCell = this.board[row][column];

        if (chosenCell.flagged) {
            chosenCell.cellElement.classList.remove("board__cell_flagged");
            chosenCell.flagged = false;
        } else {
            chosenCell.cellElement.classList.remove("board__cell_opened");
            chosenCell.cellElement.classList.add("board__cell_flagged");
            chosenCell.flagged = true;
        }
    }

    endTheGame() {
        this.showScoreboard();
    }

    showScoreboard() {
        this.boardElement.classList.add("hidden");
        const scoreboard = createElement("section", "scoreboard", document.body, "");
        const scoreboardTitle = createElement("h2", "scoreboard__title", scoreboard, "GAME OVER!");
        const scoreboardParagraph = createElement("h3", "scoreboard__paragraph", scoreboard, `Steps and time info`);
    }

    restartTheGame = () => {
        document.querySelector(".scoreboard") && document.querySelector(".scoreboard").remove();
        document.querySelector(".board").classList.remove("hidden");

        for (const cells of this.board) {
            for (const cell of cells) {
                cell.reset();
            }
        }
        this.localizeMines();
        addSoundEffect("./assets/sounds/restart.mp3")
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
        cell.setAttribute("style", `flex-basis: ${100 / this.board.rowCount - 0.5}%`);
        cell.setAttribute("id", this.id);
        this.board.boardElement.append(cell);
        return cell;
    }

    reset() {
        this.opened = false;
        this.mine = false;
        this.flagged = false;
        this.cellElement.className = "board__cell";
        this.cellElement.innerHTML = "";
    }
}

function createElement(elemType, style, parent, text = "") {
    const elem = document.createElement(elemType);
    elem.classList.add(style);
    elem.innerText = text;
    parent.append(elem);
    return elem;
}

function addSoundEffect(path) {
    const audio = new Audio(path);
    audio.play();
}

let board = new Board();
board.localizeMines();
const header = new Header();