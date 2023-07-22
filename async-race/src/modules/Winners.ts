import {createElem} from "../utils/createElem";
import {fetchData} from "../api/fetchData";
import {IWinner} from "../types/dataTypes";

export class Winners {
    data: any;
    winnersElem: HTMLElement | null;

    constructor() {
        this.data = this.getData();
        this.winnersElem = null;
    }

    private async getData(): Promise<void> {
        try {
            const data = await fetchData('winners');
            this.render(data);
        } catch (error) {
            console.error(error);
        }
    }

    private async getAdditionalData(id: number) {
        try {
            const data = await fetchData(`garage/${id}`);
            return {
                name: data.name,
                color: data.color
            }
        } catch (error) {
            console.error(error);
        }
    }

    private render(data: IWinner[]): void {
        const winnersPage = createElem({
            htmlTag: 'section',
            styles: ['winners'],
            parentClass: '.body'
        });
        createElem({
            htmlTag: 'h1',
            styles: ['winners__title'],
            parentNode: winnersPage,
            innerText: `Winners (${data.length})`
        });
        createElem({
            htmlTag: 'h2',
            styles: ['winners__pagination'],
            parentNode: winnersPage,
            innerText: `Page #${'1'}`
        });
        const table = createElem({htmlTag: 'table', styles: ['win-table'], parentNode: winnersPage});
        this.createTableRow(table, 'Number', 'Car', 'Name', 'Wins', 'Best time (seconds)');

        data.map((winner: IWinner, index: number) => {
            let carName: string | undefined;
            let carColor: string | undefined;

            this.getAdditionalData(winner.id)
                .then(data => {
                    if (data) {
                        carName = data.name;
                        carColor = data.color;
                    }
                    this.createTableRow(table, index.toString(), `${carColor}`, `${carName}`, winner.wins.toString(), winner.time.toString());
                })
                .catch(e => console.error(e));
        });

        this.winnersElem = winnersPage;
    }

    private createTableRow(table: HTMLElement, num: string, color: string, name: string, wins: string, time: string) {
        const row = createElem({htmlTag: 'tr', styles: ['win-table__row'], parentNode: table});
        createElem({htmlTag: 'td', styles: ['win-table__cell'], parentNode: row, innerText: num});
        createElem({htmlTag: 'td', styles: ['win-table__cell'], parentNode: row, innerText: color});
        createElem({htmlTag: 'td', styles: ['win-table__cell'], parentNode: row, innerText: name});
        createElem({htmlTag: 'td', styles: ['win-table__cell'], parentNode: row, innerText: wins});
        createElem({htmlTag: 'td', styles: ['win-table__cell'], parentNode: row, innerText: time});
    }

}
