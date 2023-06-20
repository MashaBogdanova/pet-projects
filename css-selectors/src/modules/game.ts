import {Level} from "./level";

export class Game {
    levels: Array<Level>;
    currentLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

    constructor(levels: Array<Level>, currentLevel) {
        this.levels = levels;
        this.currentLevel = currentLevel;
    }

    renderLevel() {
        const params = levels[this.currentLevel];
        return new Level(params);
    }
}
