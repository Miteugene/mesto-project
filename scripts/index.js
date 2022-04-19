const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const page = document.querySelector('.page');

// ----------------------------------------------------
// Popup profile
const profilePopup        = page.querySelector('#popup-profile');
const profileEditButton   = page.querySelector('.profile__button_edit');
const profileCloseButton  = page.querySelector('#popup-profile__close');
const profileSubmitButton = page.querySelector('#popup-profile__submit');
const profileNameInput    = page.querySelector('#popup-profile__name');
const profileJobInput     = page.querySelector('#popup-profile__job');

profileEditButton.addEventListener('click', showProfileHandler);
profileCloseButton.addEventListener('click', closeProfileHandler);
profileSubmitButton.addEventListener('click', submitProfileHandler);

// ----------------------------------------------------
// Popup place
const placePopup        = page.querySelector('#popup-place');
const placeAddButton    = page.querySelector('.profile__button_add');
const placeCloseButton  = page.querySelector('#popup-place__close');
const placeSubmitButton = page.querySelector('#popup-place__submit');
const placeNameInput    = page.querySelector('#popup-place__name');
const placeLinkInput    = page.querySelector('#popup-place__link');

placeAddButton.addEventListener('click', showPlaceHandler);
placeCloseButton.addEventListener('click', closePlaceHandler);
placeSubmitButton.addEventListener('click', submitPlaceHandler);

// ----------------------------------------------------
// Common
const cards = page.querySelector('.cards');

// ----------------------------------------------------
// ----------------------------------------------------

// ----------------------------------------------------
// Popup profile functions

function showProfileHandler() {
  profilePopup.classList.toggle('popup_opened');

  let profileName = page.querySelector('.profile__info-name');
  let profileJob  = page.querySelector('.profile__info-job');

  profileNameInput.value = profileName.textContent;
  profileJobInput.value  = profileJob.textContent;
}

function closeProfileHandler() {
  profilePopup.classList.remove('popup_opened');
}

function submitProfileHandler(evt) {
  evt.preventDefault();

  if ( profileNameInput.value === "" || profileJobInput.value === "" )
    return false;

  let profileName = page.querySelector('.profile__info-name');
  let profileJob  = page.querySelector('.profile__info-job');

  profileName.textContent = profileNameInput.value;
  profileJob.textContent  = profileJobInput.value;

  profilePopup.classList.toggle('popup_opened');
}



// ----------------------------------------------------
// Popup place functions

function showPlaceHandler() {
  placePopup.classList.toggle('popup_opened');
}

function closePlaceHandler() {
  placePopup.classList.remove('popup_opened');
}

function submitPlaceHandler(evt) {
  evt.preventDefault();

  if ( placeNameInput.value === "" || placeLinkInput.value === "" )
    return false;

  addCard({
    'name': placeNameInput.value,
    'link': placeLinkInput.value
  });

  placePopup.classList.remove('popup_opened');

  placeNameInput.value = '';
  placeLinkInput.value = '';
}


// ----------------------------------------------------
// Common functions

function addCard(card) {
  const placeTemplate = document.querySelector('#card-template').content;
  const placeElement  = placeTemplate.querySelector('.cards__item').cloneNode(true);

  placeElement.querySelector('.cards__image').src = card.link;
  placeElement.querySelector('.cards__title').textContent = card.name;

  placeElement.querySelector('.cards__like-button').addEventListener('click', function(evt){
    evt.target.classList.toggle('cards__like-button_active');
  });

  placeElement.querySelector('.cards__delete-button').addEventListener('click', function(evt){
    evt.target.closest('.cards__item').remove();
  });

  cards.prepend(placeElement);
}

function initCards(initialCards) {
  for (let i = 0; i < initialCards.length; i++)
    addCard(initialCards[i]);
}

initCards(initialCards);
