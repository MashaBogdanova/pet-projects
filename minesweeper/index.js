// Create header
class Header {
    constructor() {
        this.stepsCounter = 0;
        this.secondsCounter = 0;
        this.headerElement = this.createHeader();
        this.stopwatchInterval = null;
    }

    createHeader() {
        const headerElement = document.createElement("header");
        headerElement.classList.add("header");
        document.body.prepend(headerElement);

        const title = createElement("h1", "header__title", headerElement, "MINESWEEPER");
        const stepsCounter = createElement("article", "header__steps", headerElement, "000");
        const tryAgainButton = createElement("button", "header__button", headerElement, "New game");
        tryAgainButton.addEventListener("click", board.restartTheGame);
        const timer = createElement("article", "header__stopwatch", headerElement, "000");

        return headerElement;
    }

    rerenderStepsCounter() {
        this.stepsCounter += 1;
        document.querySelector(".header__steps").innerText = this.showCorrectNumber(this.stepsCounter);
    }

    startStopwatch() {
        this.stopwatchInterval = setInterval(() => {
            this.secondsCounter += 1;
            document.querySelector(".header__stopwatch").innerText = this.showCorrectNumber(this.secondsCounter);
        }, 1000);
    }

    stopStopwatch() {
        clearInterval(this.stopwatchInterval);
    }

    reset() {
        this.stepsCounter = 0;
        document.querySelector(".header__steps").innerText = "000";
        this.secondsCounter = 0;
        document.querySelector(".header__stopwatch").innerText = "000";
        clearInterval(this.stopwatchInterval);
        board.openedCellsCount = 0;
        document.querySelectorAll('audio').forEach(el => el.pause());
    }

    showCorrectNumber(num) {
        if (num < 10) {
            return `00${num}`
        } else if (num < 100) {
            return `0${num}`
        } else {
            return `${num}`
        }
    }
}

// Create board class
class Board {
    constructor() {
        this.rowCount = 10;
        this.minesCount = 3;
        this.openedCellsCount = 0;
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

    localizeMines(firstClickRow, firstClickCol) {
        for (let i = 0; i < this.minesCount; i++) {
            const randomNumber = Math.floor(Math.random() * (this.rowCount * this.rowCount));
            const rowIndex = Math.floor(randomNumber / this.rowCount);
            const colIndex = randomNumber % this.rowCount;

            // Check if first users click is on the mined cell or if the cell is already mined
            this.board[rowIndex][colIndex] === this.board[firstClickRow][firstClickCol]
            || this.board[rowIndex][colIndex].mine
                ? i--
                : this.board[rowIndex][colIndex].mine = true;
        }
    }

    checkClickedCell = e => {
        const row = Number(e.target.id.split("-")[0]);
        const column = Number(e.target.id.split("-")[1]);
        const chosenCell = this.board[row][column];

        if (header.stepsCounter === 0) {
            header.startStopwatch();
            this.localizeMines(row, column);
        }

        if (chosenCell.mine) {
            chosenCell.opened = true;
            this.openedCellsCount += 1;
            chosenCell.cellElement.classList.add("board__cell_mined");
            addSoundEffect("./assets/sounds/explosion.mp3");
            setTimeout(() => {
                this.endTheGame(false);
            }, 1000);
        } else {
            this.openAndCheckNeighbours(row, column, chosenCell);

        }
        header.rerenderStepsCounter();
        this.openedCellsCount === Math.pow(this.rowCount, 2) - this.minesCount && this.endTheGame(true);
    }

    openAndCheckNeighbours(row, column, chosenCell) {
        chosenCell.cellElement.classList.add("board__cell_opened");
        chosenCell.opened = true;
        this.openedCellsCount += 1;

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

    endTheGame(win) {
        if (win) {
            const text = `You found all mines in ${header.secondsCounter}
            ${header.secondsCounter === 1 ? "second" : "seconds"} and ${header.stepsCounter}
            ${header.stepsCounter === 1 ? "move" : "moves"}!`
            this.showScoreboard("HOORAY!", `${text}`);
            addSoundEffect("./assets/sounds/win.mp3");
        } else {
            this.showScoreboard("GAME OVER!", "Try again");
            addSoundEffect("./assets/sounds/game-over.mp3");
        }
        header.stopStopwatch();
    }

    showScoreboard(title, text) {
        this.boardElement.classList.add("hidden");
        const scoreboard = createElement("section", "scoreboard", document.body, "");
        const scoreboardTitle = createElement("h2", "scoreboard__title", scoreboard, title);
        const scoreboardParagraph = createElement("h3", "scoreboard__paragraph", scoreboard, text);
    }

    restartTheGame = () => {
        document.querySelector(".scoreboard") && document.querySelector(".scoreboard").remove();
        document.querySelector(".board").classList.remove("hidden");
        header.reset();

        for (const cells of this.board) {
            for (const cell of cells) {
                cell.reset();
            }
        }
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
        const cell = createElement("div", "board__cell", this.board.boardElement);
        cell.setAttribute("style", `flex-basis: ${100 / this.board.rowCount - 0.5}%`);
        cell.setAttribute("id", this.id);
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

const board = new Board();
const header = new Header();