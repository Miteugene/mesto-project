const initialCards = [
  {
    name: 'Архыз',
    link: './images/places/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: './images/places/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: './images/places/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/places/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: './images/places/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: './images/places/baikal.jpg'
  }
];

const profileNameTitleElement = document.querySelector('.profile__info-name');
const profileJobTitleElement  = document.querySelector('.profile__info-job');

const profilePopup            = document.querySelector('.popup_type_profile');
const formProfile             = document.querySelector('.popup__form_type_profile');
const formProfileNameInput    = document.querySelector('.popup__input-text_type_name');
const formProfileJobInput     = document.querySelector('.popup__input-text_type_job');

const viewPopup               = document.querySelector('.popup_type_view');
const viewImage               = document.querySelector('.popup__view-image');
const viewTitle               = document.querySelector('.popup__view-title');

const placePopup              = document.querySelector('.popup_type_place');
const formPlace               = document.querySelector('.popup__form_type_place');
const formPlaceNameInput      = document.querySelector('.popup__input-text_type_place');
const formPlaceLinkInput      = document.querySelector('.popup__input-text_type_link');

const cardsContainer          = document.querySelector('.cards');
const placeTemplate           = document.querySelector('#card-template').content;


formProfile.addEventListener('submit', submitPopupProfile);
formPlace.addEventListener('submit', submitPopupPlace);


document.querySelector('.profile__button_type_add').addEventListener('click', openPopupPlace);
document.querySelector('.profile__button_type_edit').addEventListener('click', openPopupProfile);

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.querySelector('.popup__button-close').addEventListener('click', () => {
    closePopup(popup);
  });
});


initCards(initialCards);

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopupProfile() {
  formProfileNameInput.value = profileNameTitleElement.textContent;
  formProfileJobInput.value  = profileJobTitleElement.textContent;
  openPopup(profilePopup);
}

function openPopupPlace() {
  openPopup(placePopup);
}

function openPopupView(cardObj) {
  viewImage.src = cardObj.link;
  viewImage.alt = cardObj.name;
  viewTitle.textContent = cardObj.name;
  openPopup(viewPopup);
}

function submitPopupProfile(evt) {
  evt.preventDefault();

  profileNameTitleElement.textContent = formProfileNameInput.value;
  profileJobTitleElement.textContent  = formProfileJobInput.value;

  profilePopup.classList.remove('popup_opened');
}

function submitPopupPlace(evt) {
  evt.preventDefault();

  addCard({
    'name': formPlaceNameInput.value,
    'link': formPlaceLinkInput.value
  });

  formPlace.reset();

  placePopup.classList.remove('popup_opened');
}


// -------------------------------------------------------
// Функции карточек

function likeCard(evt) {
  evt.target.classList.toggle('cards__like-button_active');
}

function deleteCard(evt) {
  evt.target.closest('.cards__item').remove();
}

function createCard(cardObj) {
  const cardElement  = placeTemplate.querySelector('.cards__item').cloneNode(true);

  cardElement.querySelector('.cards__title').textContent = cardObj.name;

  const cardImage = cardElement.querySelector('.cards__image');
  cardImage.src = cardObj.link;
  cardImage.alt = cardObj.name;
  cardImage.addEventListener('click', () => { openPopupView(cardObj); });

  cardElement.querySelector('.cards__like-button').addEventListener('click', likeCard);
  cardElement.querySelector('.cards__delete-button').addEventListener('click', deleteCard);

  return cardElement;
}

function addCard(cardObj) {
  const cardElement = createCard(cardObj);
  cardsContainer.prepend(cardElement);
}

function initCards(initialCards) {
  initialCards.forEach(cardObj => {
    addCard(cardObj);
  });
}
