import './sources.css';
import { ISource } from '../../app/types';

export class Sources {
    draw(data: Array<ISource>): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp) {
                const sourceClone: Element = sourceItemTemp.content.cloneNode(true) as Element;

                const sourceItemName = sourceClone.querySelector('.source__item-name');
                if (sourceItemName) {
                    sourceItemName.textContent = item.name;
                }
                const sourceItem = sourceClone.querySelector('.source__item');
                if (sourceItem) {
                    sourceItem.setAttribute('data-source-id', item.id);
                }

                fragment.append(sourceClone);
            }
        });

        const sourcesElem: HTMLElement | null = document.querySelector('.sources');
        sourcesElem && sourcesElem.append(fragment);
    }
}
