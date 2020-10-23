import {getRandomPets} from "./mock";


export default class Slider {
  constructor(petsList) {
    this._petsList = petsList

    this._isEnable = true;
    this._slider = document.querySelector(`.slider`);
    this._sliderButtonLeft = this._slider.querySelector(`.slider__button-left`);
    this._sliderButtonRight = this._slider.querySelector(`.slider__button-right`);
    this._sliderContainer = this._slider.querySelector(`.slider__container`);
    this._petsPopup = document.querySelector(`.pets-popup`);
    this._petsPopupOverlay = document.querySelector(`.pets-popup__overlay`);

    this._body = document.querySelector(`body`);

  }

  init() {
    this._setHandlers();
    this._setPopupHandler();

    // первые три слайда размеченными лежат в htmle
  }

  _setHandlers() {
    this._sliderButtonLeft.addEventListener(`click`, () => {
      if (this._isEnable) {
        this._sliderContainer.classList.add(`slider__container_hide`);
        setTimeout(() => {
          this._sliderContainer.innerHTML = this._getTemplateSlide();
          this._sliderContainer.classList.remove(`slider__container_hide`)
        }, 500);
      }
    })

    this._sliderButtonRight.addEventListener(`click`, () => {
      if (this._isEnable) {
        this._sliderContainer.classList.add(`slider__container_hide`);
        setTimeout(() => {
          this._sliderContainer.innerHTML = this._getTemplateSlide();
          this._sliderContainer.classList.remove(`slider__container_hide`)
        }, 500);

      }
    })
  }

  _clearContainer() {
    this._sliderContainer.innerHTML = ``;
  }

  _getTemplateSlide() {
    let countPet;

    // отдаем количество слайдов в зависимости от разрешения экрана,
    // есть подлаг => если увеличивать разрешение экрана и пройти брекпоинт снизу вверх автоматической перерисовки слайдера нет, но при нажатии кнопки будет выдано правильное количество питомцев.
    if (this._body.offsetWidth >= 1280) {
      countPet = 3;
    }

    if (this._body.offsetWidth < 1280 && this._body.offsetWidth >= 768) {
      countPet = 2;
    }

    if (this._body.offsetWidth < 768) {
      countPet = 1;
    }
  // выдача уницальных питомцев при каждом пролистывании реализована в mock
    this._pets = getRandomPets(countPet);

  // проходим по массиву выдаем нужную разметку строкой для её передачи в отрисовку
    return this._pets.reduce((acc, current) => {
      return acc + `
      <div class="pets__card">
        <img
          src="${current.img}"
          alt="${current.name}"
          class="pets__image"
        >
        <h4 class="pets_pet-name">${current.name}</h4>
        <button
        class="button button__secondary"
        data-name="${current.name}"
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
    this._sliderContainer.addEventListener(`click`, (evt) => {
      if (evt.target.tagName === `BUTTON`) {
        const currentPet = this._petsList.find((element) => {
          return element.name === evt.target.dataset.name
          });
        this._petsPopupOverlay.classList.remove(`visually-hidden`);
        this._petsPopup.innerHTML = this._getTemplatePopup(currentPet);

        this._petsPopup.classList.add(`pets-popup__animation`);
        // с таким блоком скролла связана проблемма с поддергивание контента из-за исчезновения полосы скролла.
        this._body.classList.add(`not-scroll`);

        console.log(evt.target.dataset.name)
      }
    });

    this._petsPopupOverlay.addEventListener(`click`, (evt) => {
      if (evt.target.className === `pets-popup__overlay` ||
        evt.target.className === `pets-popup__close-button-img` ||
        evt.target.className === `pets-popup__close-button button__navigation`
      ) {
        this._petsPopup.classList.remove(`pets-popup__animation`);
        // длительность таймаута равна длительности css анимации
        setTimeout(() => {
          this._petsPopupOverlay.classList.add(`visually-hidden`)
          this._body.classList.remove(`not-scroll`);
        }, 300);
      }

    })
  }

}
