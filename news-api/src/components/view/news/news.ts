import './news.css';
import { IArticle } from '../../app/types';

export class News {
    draw(data: Array<IArticle>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            if (newsItemTemp) {
                const newsClone: Element = newsItemTemp.content.cloneNode(true) as Element;

                if (idx % 2) {
                    const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');
                    newsItem && newsItem.classList.add('alt');
                }

                (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;
                const newsMetaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
                if (newsMetaAuthor) {
                    newsMetaAuthor.textContent = item.author || item.source.name;
                }
                const newsMetaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
                if (newsMetaDate) {
                    newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }
                const newsDescriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
                if (newsDescriptionTitle) {
                    newsDescriptionTitle.textContent = item.title;
                }
                const newsDescriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
                if (newsDescriptionSource) {
                    newsDescriptionSource.textContent = item.source.name;
                }
                const newsDescriptionContent: HTMLElement | null = newsClone.querySelector(
                    '.news__description-content'
                );
                if (newsDescriptionContent) {
                    newsDescriptionContent.textContent = item.description;
                }
                const newsReadMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
                if (newsReadMore) {
                    newsReadMore.setAttribute('href', item.url);
                }

                fragment.append(newsClone);
            }
        });

        const newsElem = <HTMLElement>document.querySelector('.news');
        newsElem.innerHTML = '';
        newsElem.appendChild(fragment);
    }
}
