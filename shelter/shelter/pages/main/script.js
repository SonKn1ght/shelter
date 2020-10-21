/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/js/main.js":
/*!*****************************!*\
  !*** ./src/main/js/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/main/js/slider.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock */ "./src/main/js/mock.js");



const slider = new _slider__WEBPACK_IMPORTED_MODULE_0__["default"]();
slider.init();

const headerPage = document.querySelector(`.header-page`);
const hamburger = headerPage.querySelector(`.header__hamburger`);
const headerPageNavigation = headerPage.querySelector(`.header-page__navigation`);
const headerPageWrapper = headerPage.querySelector(`.header-page__wrapper`);
const navigationLinkActive = headerPage.querySelector(`.navigation__item .navigation__link_active`);

const modalOverlay = document.querySelector(`.modal-overlay`);

const switchMenu = () => {
  hamburger.classList.toggle(`hamburger_rotate`);
  modalOverlay.classList.toggle(`modal-show`);
  headerPageWrapper.classList.toggle(`header-page__wrapper_mobile-active`);
  headerPageNavigation.classList.toggle(`header-page__navigation_show`)
}

hamburger.addEventListener('click', () => {
  switchMenu();
// своевременное наложение и удаление обработчика
  if (hamburger.classList.contains(`hamburger_rotate`)) {
    modalOverlay.addEventListener('click', switchMenu);
    navigationLinkActive.addEventListener('click', switchMenu);
  } else {
    modalOverlay.removeEventListener('click', switchMenu);
    navigationLinkActive.removeEventListener('click', switchMenu);
  }
});







/***/ }),

/***/ "./src/main/js/mock.js":
/*!*****************************!*\
  !*** ./src/main/js/mock.js ***!
  \*****************************/
/*! exports provided: getRandomPets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomPets", function() { return getRandomPets; });
const petsJson = `[
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]`

const pets = JSON.parse(petsJson);

const shuffleArray = (array) => {
  const mixedArray = array.slice();
  for (let i = mixedArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const tempValue = mixedArray[i];
    mixedArray[i] = mixedArray[randomIndex];
    mixedArray[randomIndex] = tempValue;
  }
  return mixedArray;
};

const getRandomPets = (numberStart, numberEnd) => {
  return shuffleArray(pets).slice(numberStart, numberEnd)
};



/***/ }),

/***/ "./src/main/js/slider.js":
/*!*******************************!*\
  !*** ./src/main/js/slider.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock */ "./src/main/js/mock.js");


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


class Slider {
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
    this._pets = Object(_mock__WEBPACK_IMPORTED_MODULE_0__["getRandomPets"])(0, 3);
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


/***/ })

/******/ });
//# sourceMappingURL=script.js.map