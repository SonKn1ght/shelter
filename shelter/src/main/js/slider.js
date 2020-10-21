import {getRandomPets} from "./mock";

const twoSlide = `<div class="pets__card">
                  <img
                    src="../../assets/image/pets-katrine.png"
                    alt="Cat katrine"
                    class="pets__image"
                  >
                  <h4 class="pets_pet-name">Katrine</h4>
                  <button class="button button__secondary">Learn more</button>
                </div>
<div class="pets__card">
                  <img
                    src="../../assets/image/pets-woody.png"
                    alt="Dog woody"
                    class="pets__image"
                  >
                  <h4 class="pets_pet-name">Woody</h4>
                  <button class="button button__secondary">Learn more</button>
                </div>
<div class="pets__card">
                  <img
                    src="../../assets/image/pets-jennifer.png"
                    alt="Dog jennifer"
                    class="pets__image"
                  >
                  <h4 class="pets_pet-name">Jennifer</h4>
                  <button class="button button__secondary">Learn more</button>
                </div>`;

function left() {
  this._sliderContainer.classList.remove(`slider__container_left`);
  this._sliderContainer.innerHTML = twoSlide;
}


export default class Slider {
  constructor() {
    this._isEnable = true;
    this._slider = document.querySelector(`.slider`);
    this._sliderButtonLeft = this._slider.querySelector(`.slider__button-left`);
    this._sliderButtonRight = this._slider.querySelector(`.slider__button-right`);
    this._sliderContainer = this._slider.querySelector(`.slider__container`);
  }

  init() {
    this._setHandlers();
  }

  _setHandlers() {
    this._sliderButtonLeft.addEventListener(`click`, () => {
      if (this._isEnable) {
        this._sliderContainer.classList.add(`slider__container_hide`);
        setTimeout(() => {
          this._sliderContainer.innerHTML = this._getTemplate();
          this._sliderContainer.classList.remove(`slider__container_hide`)
        }, 500);
      }
    })

    this._sliderButtonRight.addEventListener(`click`, () => {
      if (this._isEnable) {
        this._sliderContainer.classList.add(`slider__container_hide`);
        setTimeout(() => {
          this._sliderContainer.innerHTML = this._getTemplate();
          this._sliderContainer.classList.remove(`slider__container_hide`)
        }, 500);

      }
    })
  }

  _clearContainer() {
    this._sliderContainer.innerHTML = ``;
  }

  _getTemplate() {
    this._pets = getRandomPets(0, 3);
    console.log(this._pets)

    return this._pets.reduce((acc, current) => {
      return acc + `
      <div class="pets__card">
        <img
          src="${current.img}"
          alt="${current.name}"
          class="pets__image"
        >
        <h4 class="pets_pet-name">${current.name}</h4>
        <button class="button button__secondary">Learn more</button>
      </div>
      `
    }, ``)
  }

}
