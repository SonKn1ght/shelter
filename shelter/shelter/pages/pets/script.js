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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pets/js/pets.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pets/js/mock.js":
/*!*****************************!*\
  !*** ./src/pets/js/mock.js ***!
  \*****************************/
/*! exports provided: petsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petsList", function() { return petsList; });
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
// парсим json конкретно тут положил сюда, но источник данных непринципиален
const pets = JSON.parse(petsJson);


let fullPetsList = (() => {
  let tempArr = [];

    for (let i = 0; i < 6; i++) {
      const newPets = pets;

      for (let j = pets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);
        const randElem = newPets.splice(randInd, 1)[0];
        newPets.push(randElem);
      }
      tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
  })();

const sort863 = (list) => {
  let unique8List = [];
  let length = list.length;
  for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (let j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;


  list = sort6recursively(list);

  return list;
}

const sort6recursively = (list) => {
  const length = list.length;

  for (let i = 0; i < (length / 6); i++) {
    const stepList = list.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find((item, ind) => {
        return item.name === stepList[j].name && (ind !== j);
      });

      if (duplicatedItem !== undefined) {
        const ind = (i * 6) + j;
        const which8OfList = Math.trunc(ind / 8);

        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

        sort6recursively(list);
      }
    }
  }

  return list;
}
// сортируем для получения нужной опследовательности элементов
let petsList = sort863(fullPetsList);

// кусок кода для тестирования на повторы в интервалах
//
// let interval = 6;
// console.log(petsList.reduce((acc, cur) => {
//   acc.push(`${cur.name}`)
//   if (acc.length === interval) {
//     // через Set получуем только уникальные значения
//     const uniq = new Set(acc);
//     console.log(uniq)
//     acc = []
//   }
//   return acc
// }, []))




















/***/ }),

/***/ "./src/pets/js/pagination.js":
/*!***********************************!*\
  !*** ./src/pets/js/pagination.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
class Pagination {
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
    // this._setPopupHandler();

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

  _clearContainer() {
    this._sliderContainer.innerHTML = ``;
  }

  _getTemplateContent() {
    // запрос сюда нужных карточек в зависимости от текущих
    let startPoint = this._numberPage * this._countPetsPerPage - this._countPetsPerPage;
    let endPoint = this._numberPage * this._countPetsPerPage;

    let pets = this._petsList.slice(startPoint, endPoint);

    // проходим по массиву выдаем нужную разметку строкой для её передачи в отрисовку
    return pets.reduce((acc, current) => {
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

  // _getTemplatePopup(pet) {
  //   const {
  //     name,
  //     age,
  //     breed,
  //     description,
  //     diseases,
  //     img,
  //     inoculations,
  //     parasites,
  //     type
  //   } = pet;
  //
  //   return `
  //     <div class="pets-popup__wrapper">
  //       <img
  //         src="${img}"
  //         alt="${name}"
  //         class="pets-popup__image"
  //       >
  //       <div class="pets-popup__content">
  //         <h3 class="pets-popup__title">
  //           ${name}
  //         </h3>
  //         <h4 class="pets-popup__subtitle">
  //           ${type} - ${breed}
  //         </h4>
  //         <p class="pets-popup__description">
  //           ${description}
  //         </p>
  //         <ul class="pets-popup__list">
  //           <li class="pets-popup__list-item">
  //             <span class="pets-popup__item-title">Age: </span>
  //             <span class="pets-popup__item-text">${age}</span>
  //           </li>
  //           <li class="pets-popup__list-item">
  //             <span class="pets-popup__item-title">Inoculations: </span>
  //             <span class="pets-popup__item-text">${inoculations.join(`, `)}</span>
  //           </li>
  //           <li class="pets-popup__list-item">
  //             <span class="pets-popup__item-title">Diseases: </span>
  //             <span class="pets-popup__item-text">${diseases.join(`, `)}</span>
  //           </li>
  //           <li class="pets-popup__list-item">
  //             <span class="pets-popup__item-title">Parasites: </span>
  //             <span class="pets-popup__item-text">${parasites.join(`, `)}</span>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //     <div class="pets-popup__close-button button__navigation">
  //       <img
  //       class="pets-popup__close-button-img"
  //       src="../../assets/images/cross.svg"
  //       alt="croos close"
  //       width="12"
  //       height="12">
  //     </div>
  //   `
  // }
  //
  // _setPopupHandler() {
  //   this._sliderContainer.addEventListener(`click`, (evt) => {
  //     if (evt.target.tagName === `BUTTON`) {
  //       const currentPet = this._petsList.find((element) => {
  //         return element.name === evt.target.dataset.name
  //       });
  //       this._petsPopupOverlay.classList.remove(`visually-hidden`);
  //       this._petsPopup.innerHTML = this._getTemplatePopup(currentPet);
  //
  //       this._petsPopup.classList.add(`pets-popup__animation`);
  //       // с таким блоком скролла связана проблемма с поддергивание контента из-за исчезновения полосы скролла.
  //       this._body.classList.add(`not-scroll`);
  //
  //       console.log(evt.target.dataset.name)
  //     }
  //   });
  //
  //   this._petsPopupOverlay.addEventListener(`click`, (evt) => {
  //     if (evt.target.className === `pets-popup__overlay` ||
  //       evt.target.className === `pets-popup__close-button-img` ||
  //       evt.target.className === `pets-popup__close-button button__navigation`
  //     ) {
  //       this._petsPopup.classList.remove(`pets-popup__animation`);
  //       // длительность таймаута равна длительности css анимации
  //       setTimeout(() => {
  //         this._petsPopupOverlay.classList.add(`visually-hidden`)
  //         this._body.classList.remove(`not-scroll`);
  //       }, 300);
  //     }
  //
  //   })
  // }

  _widthWindowHandler() {
    window.addEventListener('resize',() => {

      if (this._body.offsetWidth >= 1280) {
        this._countPetsPerPage = 8;
        this._numberPageMax = 6;

        // блок отвечающий за отслеживание смены типа брекпоинта и сброса пагинации на первую страницу при прохождении брекпоинта
        if (this._devicePointer !== `desktop`) {
          this._devicePointer = `desktop`;
          console.log(this._devicePointer)

          this._numberPage = 1;
          this._pageCount.innerHTML = this._numberPage;
          this._petsCardsContainer.innerHTML = this._getTemplateContent();
        }
      }

      if (this._body.offsetWidth < 1280 && this._body.offsetWidth >= 768) {
        this._countPetsPerPage = 6;
        this._numberPageMax = 8;

        if (this._devicePointer !== `tablet`) {
          this._devicePointer = `tablet`;
          console.log(this._devicePointer)

          this._numberPage = 1;
          this._pageCount.innerHTML = this._numberPage;
          this._petsCardsContainer.innerHTML = this._getTemplateContent();
        }
      }

      if (this._body.offsetWidth < 768) {
        this._countPetsPerPage = 3;
        this._numberPageMax = 16;

        if (this._devicePointer !== `mobile`) {
          this._devicePointer = `mobile`;

          this._numberPage = 1;
          this._pageCount.innerHTML = this._numberPage;
          this._petsCardsContainer.innerHTML = this._getTemplateContent();

          console.log(this._devicePointer)
        }
      }

    });


  }
}


/***/ }),

/***/ "./src/pets/js/pets.js":
/*!*****************************!*\
  !*** ./src/pets/js/pets.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ "./src/pets/js/pagination.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock */ "./src/pets/js/mock.js");



const pagination = new _pagination__WEBPACK_IMPORTED_MODULE_0__["default"](_mock__WEBPACK_IMPORTED_MODULE_1__["petsList"]);
pagination.init();

const body = document.querySelector(`body`);
const headerPage = body.querySelector(`.header-page`);
const hamburger = headerPage.querySelector(`.header__hamburger`);
const headerPageNavigation = headerPage.querySelector(`.header-page__navigation`);
const headerPageWrapper = headerPage.querySelector(`.header-page__wrapper`);
const navigationLinkActive = headerPage.querySelector(`.navigation__item .navigation__link_active`);
const modalOverlay = body.querySelector(`.modal-overlay`);

const switchMenu = () => {
  body.classList.toggle(`not-scroll`);
  headerPage.classList.toggle(`header-page__mobile-show-menu`);
  hamburger.classList.toggle(`hamburger_rotate`);
  modalOverlay.classList.toggle(`modal-show`);
  headerPageWrapper.classList.toggle(`header-page__wrapper_mobile-active`);
  headerPageNavigation.classList.toggle(`header-page__navigation_show`);

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


/***/ })

/******/ });
//# sourceMappingURL=script.js.map