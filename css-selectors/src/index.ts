import {Game} from "./modules/game";
import {levelCountType} from "./types/types";

const currentLevel = localStorage.getItem('level');
console.log(currentLevel);
if (!currentLevel) {
    localStorage.setItem('level', '0');
}

const game = new Game(Number(currentLevel) as levelCountType);
