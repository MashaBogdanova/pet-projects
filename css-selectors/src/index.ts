import { Game } from './modules/game';
import { levelCountType } from './types/types';

const currentLevel = localStorage.getItem('level');
if (!currentLevel) {
    localStorage.setItem('level', '0');
}

new Game(Number(currentLevel) as levelCountType);
