
const placePopup            = document.querySelector('.popup_type_place');
const formPlaceNameInput    = document.querySelector('.popup__input-text_type_place');
const formPlaceLinkInput    = document.querySelector('.popup__input-text_type_link');

const profilePopup          = document.querySelector('.popup_type_profile');
const formProfileNameInput  = document.querySelector('.popup__input-text_type_name');
const formProfileJobInput   = document.querySelector('.popup__input-text_type_job');

const viewPopup             = document.querySelector('.popup_type_view');
const viewImage             = document.querySelector('.popup__view-image');
const viewTitle             = document.querySelector('.popup__view-title');

function showPlacePopup() {
  placePopup.classList.add('popup_opened');
}

function closePlacePopup() {
  placePopup.classList.remove('popup_opened');
}

function showProfilePopup() {
  profilePopup.classList.add('popup_opened');
  formProfileNameInput.value = profileNameTitleElement.textContent;
  formProfileJobInput.value  = profileJobTitleElement.textContent;
}

function closeProfilePopup() {
  profilePopup.classList.remove('popup_opened');
}

function showViewPopup(evt) {
  viewImage.src = evt.target.src;
  viewImage.alt = evt.target.alt;
  viewTitle.textContent = evt.target.alt;
  viewPopup.classList.add('popup_opened');
}

function closeViewPopup() {
  viewImage.src = '#';
  viewImage.alt = '';
  viewPopup.classList.remove('popup_opened');
}

