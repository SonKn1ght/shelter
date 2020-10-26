export default class Pagination {
  constructor(petsList) {
    this._petsList = petsList;

    this._isEnable = true;

    this._numberPage = 1;

    this._numberPageMax;
    this._countPetsPerPage;


    this._petsCardsContainer = document.querySelector(`.pets__cards-container`);

    this._backPageStartBtn = document.querySelector(`#back-page-start`);
    this._backPageBtn = document.querySelector(`#back-page`);
    this._pageCount = document.querySelector(`#page-count`);
    this._forwardPage = document.querySelector(`#forward-page`);
    this._forwardPageEnd = document.querySelector(`#forward-page-end`);

    this._petsPopup = document.querySelector(`.pets-popup`);
    this._petsPopupOverlay = document.querySelector(`.pets-popup__overlay`);

    this._body = document.querySelector(`body`);
  }

  init() {
    this._setHandlers();
    this._setStartTerms();


    this._pageCount.innerHTML = `1`;
    this._petsCardsContainer.innerHTML = this._getTemplateContent();
  }

  _setStartTerms() {
    if (this._body.offsetWidth >= 1280) {
      this._countPetsPerPage = 8;
      this._numberPageMax = 6;
      this._devicePointer = `desktop`;
    }

    if (this._body.offsetWidth < 1280 && this._body.offsetWidth >= 768) {
      this._countPetsPerPage = 6;
      this._numberPageMax = 8;
      this._devicePointer = `tablet`;
    }

    if (this._body.offsetWidth < 768) {
      this._countPetsPerPage = 3;
      this._numberPageMax = 16;
      this._devicePointer = `mobile`;
    }
  }

  _setHandlers() {
    this._widthWindowHandler();
    this._setPopupHandler();
    // следим за шириной экрана
    this._forwardPage.addEventListener('click', (evt) => {
      evt.preventDefault()
      // отходим от начала открываем кнопки пролистывания назад
      if (this._numberPage === 1) {
        this._backPageStartBtn.classList.remove(`pagination__item_disabled`);
        this._backPageBtn.classList.remove(`pagination__item_disabled`);
      }

      this._numberPage += 1;
      this._pageCount.innerHTML = this._numberPage;
      this._petsCardsContainer.innerHTML = this._getTemplateContent();
      // доходим до конца закрываем кнопки пролистывания вперед
      if (this._numberPage === this._numberPageMax) {
        this._forwardPageEnd.classList.add(`pagination__item_disabled`);
        this._forwardPage.classList.add(`pagination__item_disabled`);
      }
    })
    this._forwardPageEnd.addEventListener('click',(evt) => {
      evt.preventDefault()
      if (this._numberPage === 1) {
        this._backPageStartBtn.classList.remove(`pagination__item_disabled`)
        this._backPageBtn.classList.remove(`pagination__item_disabled`)
      }

      this._numberPage = this._numberPageMax;
      this._pageCount.innerHTML = this._numberPage;

      this._petsCardsContainer.innerHTML = this._getTemplateContent();
      this._forwardPageEnd.classList.add(`pagination__item_disabled`)
      this._forwardPage.classList.add(`pagination__item_disabled`)
    })
    this._backPageBtn.addEventListener('click', (evt) => {
      evt.preventDefault()

      if (this._numberPage === this._numberPageMax) {
        this._forwardPageEnd.classList.remove(`pagination__item_disabled`);
        this._forwardPage.classList.remove(`pagination__item_disabled`);
      }

      this._numberPage -= 1;
      this._pageCount.innerHTML = this._numberPage;
      this._petsCardsContainer.innerHTML = this._getTemplateContent();

      if (this._numberPage === 1) {
        this._backPageStartBtn.classList.add(`pagination__item_disabled`);
        this._backPageBtn.classList.add(`pagination__item_disabled`);
      }
    })
    this._backPageStartBtn.addEventListener('click', (evt) => {
      evt.preventDefault()

      if (this._numberPage === this._numberPageMax) {
        this._forwardPageEnd.classList.remove(`pagination__item_disabled`)
        this._forwardPage.classList.remove(`pagination__item_disabled`)
      }

      this._numberPage = 1;
      this._pageCount.innerHTML = this._numberPage;
      this._petsCardsContainer.innerHTML = this._getTemplateContent();

      this._backPageStartBtn.classList.add(`pagination__item_disabled`)
      this._backPageBtn.classList.add(`pagination__item_disabled`)


    })
  }

  _getTemplateContent() {
    // запрос сюда нужных карточек в зависимости от текущих
    let startPoint = this._numberPage * this._countPetsPerPage - this._countPetsPerPage;
    let endPoint = this._numberPage * this._countPetsPerPage;

    let pets = this._petsList.slice(startPoint, endPoint);

    // проходим по массиву выдаем нужную разметку строкой для её передачи в отрисовку
    return pets.reduce((acc, current) => {
      return acc + `
      <div class="pets__card" data-name="${current.name}">
        <img
          src="${current.img}"
          alt="${current.name}"
          class="pets__image"
        >
        <h4 class="pets_pet-name">${current.name}</h4>
        <button
        class="button button__secondary"
        >
          Learn more
        </button>
      </div>
      `
    }, ``)
  }

  _getTemplatePopup(pet) {
    const {
      name,
      age,
      breed,
      description,
      diseases,
      img,
      inoculations,
      parasites,
      type
    } = pet;

    return `
      <div class="pets-popup__wrapper">
        <img
          src="${img}"
          alt="${name}"
          class="pets-popup__image"
        >
        <div class="pets-popup__content">
          <h3 class="pets-popup__title">
            ${name}
          </h3>
          <h4 class="pets-popup__subtitle">
            ${type} - ${breed}
          </h4>
          <p class="pets-popup__description">
            ${description}
          </p>
          <ul class="pets-popup__list">
            <li class="pets-popup__list-item">
              <span class="pets-popup__item-title">Age: </span>
              <span class="pets-popup__item-text">${age}</span>
            </li>
            <li class="pets-popup__list-item">
              <span class="pets-popup__item-title">Inoculations: </span>
              <span class="pets-popup__item-text">${inoculations.join(`, `)}</span>
            </li>
            <li class="pets-popup__list-item">
              <span class="pets-popup__item-title">Diseases: </span>
              <span class="pets-popup__item-text">${diseases.join(`, `)}</span>
            </li>
            <li class="pets-popup__list-item">
              <span class="pets-popup__item-title">Parasites: </span>
              <span class="pets-popup__item-text">${parasites.join(`, `)}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="pets-popup__close-button button__navigation">
        <img
        class="pets-popup__close-button-img"
        src="../../assets/images/cross.svg"
        alt="croos close"
        width="12"
        height="12">
      </div>
    `
  }

  _setPopupHandler() {
    this._petsCardsContainer.addEventListener(`click`, (evt) => {
      if (evt.target.className === 'pets__image' ||
          evt.target.className === 'pets__card' ||
          evt.target.className === 'pets_pet-name' ||
          evt.target.className === 'button button__secondary') {
        console.log(evt.target.closest('div').dataset.name)

        const currentPet = this._petsList.find((element) => {
          return element.name === evt.target.closest('div').dataset.name
        });
        this._petsPopupOverlay.classList.remove(`visually-hidden`);

        this._petsPopup.innerHTML = this._getTemplatePopup(currentPet);

        this._petsPopup.classList.add(`pets-popup__animation`);

        this._body.classList.add(`not-scroll`);
      }
    });

    this._petsPopupOverlay.addEventListener(`click`, (evt) => {
      if (evt.target.className === `pets-popup__overlay` ||
        evt.target.className === `pets-popup__close-button-img` ||
        evt.target.className === `pets-popup__close-button button__navigation`
      ) {
        this._petsPopup.classList.remove(`pets-popup__animation`);

        setTimeout(() => {
          this._petsPopupOverlay.classList.add(`visually-hidden`)
          this._body.classList.remove(`not-scroll`);
        }, 300);
      }

    })
  }

  _widthWindowHandler() {
    window.addEventListener('resize',() => {

      if (this._body.offsetWidth >= 1280) {
        this._countPetsPerPage = 8;
        this._numberPageMax = 6;

        // блок отвечающий за отслеживание смены типа брекпоинта и сброса пагинации на первую страницу при прохождении брекпоинта
        if (this._devicePointer !== `desktop`) {
          this._devicePointer = `desktop`;
          this._reset();
        }
      }

      if (this._body.offsetWidth < 1280 && this._body.offsetWidth >= 768) {
        this._countPetsPerPage = 6;
        this._numberPageMax = 8;

        if (this._devicePointer !== `tablet`) {
          this._devicePointer = `tablet`;
          this._reset();
        }
      }

      if (this._body.offsetWidth < 768) {
        this._countPetsPerPage = 3;
        this._numberPageMax = 16;

        if (this._devicePointer !== `mobile`) {
          this._devicePointer = `mobile`;
          this._reset();
        }
      }

    });


  }

  _reset() {
    this._numberPage = 1;
    this._pageCount.innerHTML = this._numberPage;
    this._petsCardsContainer.innerHTML = this._getTemplateContent();
    this._forwardPage.classList.remove('pagination__item_disabled');
    this._forwardPageEnd.classList.remove('pagination__item_disabled');
    this._backPageBtn.classList.add('pagination__item_disabled');
    this._backPageStartBtn.classList.add('pagination__item_disabled');
  }
}
