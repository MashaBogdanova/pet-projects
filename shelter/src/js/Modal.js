export class Modal {
    constructor() {
        this.overlay = '';
        this.modal = '';
        this.modalContent = '';
        this.modalCloseBtn = '';
    }

    buildModal(petContent) {
        this.overlay = document.createElement("div");
        this.overlay.classList.add("overlay");

        this.modal = document.createElement("div");
        this.modal.classList.add("modal");

        this.modalCloseBtn = document.createElement("button");
        this.modalCloseBtn.classList.add("button", "button_circle", "modal__close-button");
        this.modalCloseBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/></svg>'

        this.modalContent = document.createElement("div");
        this.modalContent.classList.add("modal__content");
        this.modalContent.innerHTML = this.createPetContentHtml(petContent);


        this.appendModalElements();
        this.bindEvents();
        this.openModal();
    }

    appendModalElements() {
        this.modal.append(this.modalCloseBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    bindEvents() {
        this.modalCloseBtn.addEventListener('click', this.closeModal);
        this.overlay.addEventListener('click', this.closeModal);
    }

    openModal() {
        document.body.append(this.overlay);
        document.body.style.overflow = 'hidden';
    }

    closeModal(e) {
        if (e.target.classList.contains('overlay') || e.target.closest(".modal__close-button")) {
            document.querySelector('.overlay').remove();
        }
        document.body.style.overflow = 'auto';
    }

    createPetContentHtml(petContent) {
        let template = "";
        template += `<img class="modal__puppy" src=${petContent.img} alt="sweet pet">`
        template += ` <div class="modal__pet-info">
                        <div>
                            <h3>${petContent.name}</h3>
                            <h4>${petContent.type} - ${petContent.breed}</h4>
                        </div>
                        <p>${petContent.description}</p>
                        <ul>
                            <li><span class="bold">Age: </span>${petContent.age}</li>
                            <li><span class="bold">Inoculations: </span>${petContent.inoculations}</li>
                            <li><span class="bold">Diseases: </span>${petContent.diseases}</li>
                            <li><span class="bold">Parasites: </span>${petContent.parasites}</li>
                        </ul>
                     </div>`

        return template;
    }

} 