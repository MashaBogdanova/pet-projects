import {Level} from "./level";

export class Game {
    levels: Array<Level>;
    currentLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

    constructor(levels: Array<Level>, currentLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) {
        this.levels = levels;
        this.currentLevel = currentLevel;
    }

    renderLevel() {
        const params = this.levels[this.currentLevel];
        return new Level(params);
    }
}
