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
        ]
        this.boardElement.addEventListener("click", this.checkClickedCell);
        this.boardElement.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            this.onDoubleClick(e);
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
            this.getMinedNeighboursCount(row, column, chosenCell);
        }

    }

    getMinedNeighboursCount(row, column, chosenCell) {
        // Add opened cell style
        chosenCell.cellElement.classList.add("board__cell_opened");
        chosenCell.opened = true;

        // Count mined neighbours
        let counter = 0;

        for (let direction of this.closestCellsDirections) {
            const rowNumber = row + direction[0];
            const colNumber = column + direction[1];

            if (rowNumber >= 0 && colNumber >= 0 && rowNumber <= this.rowCount - 1
                && colNumber <= this.rowCount - 1 && this.board[rowNumber][colNumber].mine) {
                counter += 1;
            }
        }

        // Show number of mined neighbours or check each neighbour
        if (counter === 0) {
            for (const direction of this.closestCellsDirections) {
                const rowNumber = row + direction[0];
                const colNumber = column + direction[1];

                if (rowNumber >= 0 && colNumber >= 0 && rowNumber <= this.rowCount - 1 && colNumber <= this.rowCount - 1
                    && !this.board[rowNumber][colNumber].opened) {
                    this.getMinedNeighboursCount(rowNumber, colNumber, this.board[rowNumber][colNumber]);
                }
            }
        } else {
            this.board[row][column].cellElement.innerHTML = `${counter}`;
        }
    }

    onDoubleClick = e => {
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
        // todo: add time and steps count, fix overlay
        const modal = document.createElement("div");
        modal.classList.add("modal");

        const modalOverlay = document.createElement("div");
        modalOverlay.classList.add("modal__overlay");

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


const board = new Board();
board.localizeMines();