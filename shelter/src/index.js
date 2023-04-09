import { Modal } from "./js/Modal"

const data = [
    {
        "id": "2",
        "name": "Jennifer",
        "img": "../../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "4",
        "name": "Sophia",
        "img": "../../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "3",
        "name": "Woody",
        "img": "../../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": "5",
        "name": "Scarlett",
        "img": "../../../assets/images/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "1",
        "name": "Katrine",
        "img": "../../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "6",
        "name": "Timmy",
        "img": "../../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": "7",
        "name": "Freddie",
        "img": "../../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "8",
        "name": "Charly",
        "img": "../../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

window.onload = function () {
    pickCardClickHandler();
}

const pickCardClickHandler = () => {
    addListenerToCard(".our-friends__cards")
    addListenerToCard(".our-pets__pets")
}

const openModalWindow = (petContent) => {
    let modal = new Modal();
    modal.buildModal(petContent);
}

const getPetContent = (petId) => {
    return data.find(pet => pet.id === petId);
}

const addListenerToCard = (selector) => {
    document.querySelector(selector)?.addEventListener("click", (e) => {
        if (e.target.closest(".pet-card")) {
            let petId = e.target.closest('.pet-card').getAttribute('data-id');
            let petContent = getPetContent(petId);
            openModalWindow(petContent);
        }
    })
};


// console.log(
//     "I. FIRST WEEK \n \n" +
//     "Оценка 100 / 100 \n" +
//     "\n" +
//     "\n" +
//     "1. Страница Main (60) \n" +
//     "\n" +
//     "Проверка верстки +7 \n" +
//     "- верстка страницы валидная +4 \n" +
//     "- логотип в хедере состоит из текстовых элементов +1 \n" +
//     "- страница содержит ровно один элемент h1 +1 \n" +
//     "- добавлен favicon +1 \n" +
//     "\n" +
//     "Вёрстка соответствует макету +35 \n" +
//     "- блок header +5 \n" +
//     "- блок Not only +5 \n" +
//     "- блок About +5 \n" +
//     "- блок Our Friends +5 \n" +
//     "- блок Help +5 \n" +
//     "- блок In addition +5 \n" +
//     "- блок footer +5 \n" +
//     "\n" +
//     "Требования к css +6 \n" +
//     "- для позиционирования элементов блока Help использована сеточная верстка (flexbox или grid) +2\n" +
//     "- при уменьшении масштаба страницы браузера или увеличении ширины страницы вёрстка размещается по центру +2\n" +
//     "- фоновый цвет тянется на всю ширину страницы +2\n" +
//     "\n" +
//     "Интерактивность элементов +12\n" +
//     "- элемент About the Shelter в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны +2\n" +
//     "- каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки +2\n" +
//     "- плавная прокрутка по якорям +2\n" +
//     "- выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Main +2\n" +
//     "- выполнена интерактивность ссылок и кнопок +2\n" +
//     "- обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике +2\n" +
//     "\n" +
//     "\n" +
//     "2. Страница Pets (40)\n" +
//     "\n" +
//     "Проверка верстки +7\n" +
//     "- верстка страницы валидная +4\n" +
//     "- логотип в хедере состоит из текстовых элементов +1\n" +
//     "- страница содержит ровно один элемент h1 +1\n" +
//     "- добавлен favicon +1\n" +
//     "\n" +
//     "Вёрстка соответствует макету +15\n" +
//     "- блок header +5\n" +
//     "- блок Our Friends +5\n" +
//     "- блок footer +5\n" +
//     "\n" +
//     "Требования к css +4\n" +
//     "- при уменьшении масштаба страницы браузера или увеличении ширины страницы вёрстка размещается по центру +2\n" +
//     "- фоновый цвет тянется на всю ширину страницы +2\n" +
//     "\n" +
//     "Интерактивность элементов +14\n" +
//     "- элемент Our pets в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны +2\n" +
//     "- доступные кнопки пагинации (вправо) активны, недоступные (влево) - неактивны (disabled) +2\n" +
//     "- каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки +2\n" +
//     "- плавная прокрутка по якорям +2\n" +
//     "- выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Pets +2\n" +
//     "- выполнена интерактивность ссылок и кнопок +2\n" +
//     "- обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике +2 \n \n \n" +
//
//     "SECOND WEEK \n \n" +
//     "Оценка 100 / 100 \n" +
//     "\n" +
//     "\n" +
//     "Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n" +
//     "блок header: +2\n" +
//     "блок Not only: +2\n" +
//     "блок About: +2\n" +
//     "блок Our Friends: +2\n" +
//     "блок Help: +2\n" +
//     "блок In addition: +2\n" +
//     "блок footer: +2\n \n" +
//     "Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n" +
//     "блок header: +2\n" +
//     "блок Not only: +2\n" +
//     "блок About: +2\n" +
//     "блок Our Friends: +2\n" +
//     "блок Help: +2\n" +
//     "блок In addition: +2\n" +
//     "блок footer: +2\n \n" +
//     "Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n" +
//     "блок header: +2\n" +
//     "блок Not only: +2\n" +
//     "блок About: +2\n" +
//     "блок Our Friends: +2\n" +
//     "блок Help: +2\n" +
//     "блок In addition: +2\n" +
//     "блок footer: +2\n \n" +
//     "Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n" +
//     "блок header: +2\n" +
//     "блок Our Friends: +2\n" +
//     "блок footer: +2\n \n" +
//     "Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n" +
//     "блок header: +2\n" +
//     "блок Our Friends: +2\n" +
//     "блок footer: +2\n \n" +
//     "Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n" +
//     "блок header: +2\n" +
//     "блок Our Friends: +2\n" +
//     "блок footer: +2\n \n" +
//     "Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n" +
//     "нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5\n" +
//     "нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5\n" +
//     "нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5\n" +
//     "нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5\n \n" +
//     "Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8\n" +
//     "на странице Main: +4\n" +
//     "на странице Pets: +4\n \n" +
//     "При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n \n" +
//     "Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8"
// )