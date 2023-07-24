import { Game } from './modules/game';
import { levelCountType } from './types/types';

export function init(): void {
    const currentLevel = localStorage.getItem('level');
    if (!currentLevel) {
        localStorage.setItem('level', '0');
    }

    new Game(Number(currentLevel) as levelCountType);
}

init();
