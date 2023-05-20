// Create board class
class Board {
    constructor() {
        this.rowCount = 10;
        this.minesCount = 10;
        this.boardElement = this.createBoardElement();
        this.board = this.createBoard();
        this.headerElement = this.createHeaderElement();
        this.openedCellsCount = 0;
        this.loose = false;
        this.stepsCounter = 0;
        this.secondsCounter = 0;
        this.stopwatchInterval = null;
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
        this.boardElement.addEventListener("click", this.checkClickedCell.bind(this));
        this.boardElement.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            this.flagClickedCell(e);
            addSoundEffect("./assets/sounds/add-flag.mp3");
        });
    }

    showModal(start = true, title = "Welcome to minesweeper!", paragraph = "Chose board size and number of mines") {
        this.boardElement.classList.add("board_hidden");

        const modalOverlay = createElement("div", ["modal__overlay"], document.body);
        const welcomeModal = createElement("div", ["modal"], modalOverlay);

        createElement("h2", ["modal__title"], welcomeModal, title);
        createElement("h3", ["modal__paragraph"], welcomeModal, paragraph);

        if (start) {
            // Create board size select
            const boardSizeSelect = createElement("select", ["select"], welcomeModal);
            createElement("option", ["select__option"], boardSizeSelect, "10x10", 10);
            createElement("option", ["select__option"], boardSizeSelect, "15x15", 15);
            createElement("option", ["select__option"], boardSizeSelect, "25x25", 25);
            boardSizeSelect.addEventListener('change', () => {
                this.rowCount = boardSizeSelect.value;
            });

            // Create mines number select
            const minesNumberSelect = createElement("select", ["select"], welcomeModal);
            for (let i = 10; i <= 99; i++) {
                createElement("option", ["select__option"], minesNumberSelect, i, i);
            }
            minesNumberSelect.addEventListener('change', () => {
                this.minesCount = minesNumberSelect.value;
            });
        }
        // Create submit button
        const startGameBtn = createElement("button", ["button", "button_start"], welcomeModal, "Play");
        startGameBtn.addEventListener("click", () => {
            modalOverlay.remove();
            this.restartTheGame();
        })
    }

    createBoardElement() {
        return createElement("section", ["board"], document.body, "");
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
    createHeaderElement() {
        const headerElement = document.createElement("header");
        headerElement.classList.add("header");
        document.body.prepend(headerElement);

        createElement("h1", ["header__title"], headerElement, "MINESWEEPER");
        createElement("article", ["header__steps"], headerElement, "000");
        const tryAgainButton = createElement("button", ["button", "button_restart"], headerElement, "New game");
        tryAgainButton.addEventListener("click", this.showModal.bind(this));
        createElement("article", ["header__stopwatch"], headerElement, "000");

        return headerElement;
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

    checkClickedCell(e) {
        const row = Number(e.target.id.split("-")[0]);
        const column = Number(e.target.id.split("-")[1]);
        const chosenCell = this.board[row][column];

        if (this.stepsCounter === 0) {
            this.startStopwatch();
            this.localizeMines(row, column);
        }

        if (chosenCell.mine) {
            this.loose = true;
            chosenCell.opened = true;
            this.openedCellsCount += 1;

            chosenCell.cellElement.classList.add("cell_mined");
            addSoundEffect("./assets/sounds/explosion.mp3");

            setTimeout(() => {
                this.endTheGame(false);
            }, 1000);
        } else {
            this.openAndCheckNeighbours(row, column, chosenCell);

        }
        this.rerenderStepsCounter();
        this.openedCellsCount === Math.pow(this.rowCount, 2) - this.minesCount
        && this.loose === false
        && this.endTheGame(true);
    }
    openAndCheckNeighbours(row, column, chosenCell) {
        chosenCell.cellElement.classList.add("cell_opened");
        chosenCell.opened = true;
        this.openedCellsCount += 1;

        const counter = this.countMinedNeighbours(row, column);

        if (counter === 0) {
            this.checkNeighbours(row, column);
        } else {
            const currentCell = this.board[row][column].cellElement;
            currentCell.innerHTML = `${counter}`;
            if (counter === 1) {
                currentCell.classList.add("cell_1mine");
            } else if (counter === 2) {
                currentCell.classList.add("cell_2mines");
            } else if (counter === 3) {
                currentCell.classList.add("cell_3mines");
            } else if (counter === 4) {
                currentCell.classList.add("cell_4mines");
            } else if (counter === 5) {
                currentCell.classList.add("cell_5mines");
            }
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
            chosenCell.cellElement.classList.remove("cell_flagged");
            chosenCell.flagged = false;
        } else {
            chosenCell.cellElement.classList.remove("cell_opened");
            chosenCell.cellElement.classList.add("cell_flagged");
            chosenCell.flagged = true;
        }
    }

    endTheGame(win) {
        if (win) {
            const text = `You found all mines in ${this.secondsCounter} ${this.secondsCounter === 1 ? "second" : "seconds"}
            and ${this.stepsCounter} ${this.stepsCounter === 1 ? "move" : "moves"}!`
            this.showModal(false, "HOORAY!", `${text}`);
            addSoundEffect("./assets/sounds/win.mp3");
        } else {
            this.showModal(false, "GAME OVER!", "Try again");
            addSoundEffect("./assets/sounds/game-over.mp3");
        }
        this.stopStopwatch();
    }
    restartTheGame = () => {
        document.querySelector(".board").classList.remove("board_hidden");
        this.reset();
        for (const cells of this.board) {
            for (const cell of cells) {
                cell.reset();
            }
        }
        addSoundEffect("./assets/sounds/restart.mp3")
    }
    reset() {
        this.stepsCounter = 0;
        document.querySelector(".header__steps").innerText = "000";
        this.secondsCounter = 0;
        document.querySelector(".header__stopwatch").innerText = "000";
        clearInterval(this.stopwatchInterval);
        this.openedCellsCount = 0;
        this.loose = false;
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
        const cell = createElement("div", ["cell"], this.board.boardElement);
        cell.setAttribute("style", `flex-basis: ${100 / this.board.rowCount - 0.5}%`);
        cell.setAttribute("id", this.id);
        return cell;
    }
    reset() {
        this.opened = false;
        this.mine = false;
        this.flagged = false;
        this.cellElement.className = "cell";
        this.cellElement.innerHTML = "";
    }
}

function createElement(elemType, styles, parent, text, value, id) {
    const elem = document.createElement(elemType);
    elem.classList.add(...styles);
    parent.append(elem);
    if (text) {
        elem.innerText = text;
    }
    value && elem.setAttribute("value", value);
    return elem;
}
function addSoundEffect(path) {
    const audio = new Audio(path);
    audio.play();
}

// Initialize
const board = new Board();
board.showModal();