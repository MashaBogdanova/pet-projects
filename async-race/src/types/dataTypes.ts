import { carStatus } from '../modules/Car';

export interface ICar {
    name: string
    color: string
    id: number
}

export interface IWinner {
    id: number
    wins: number
    time: number
}

export interface IRaceResults {
    [key: string]: {
        time: number
        model: string
        status?: Promise<carStatus.stopped | carStatus.drive>
    }
}
