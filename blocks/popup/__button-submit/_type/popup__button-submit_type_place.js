document.querySelector('.popup__button-submit_type_place').addEventListener('click', submitPopupPlace);

function submitPopupPlace(evt) {
  evt.preventDefault();

  if ( formPlaceNameInput.value === "" || formPlaceLinkInput.value === "" )
    return false;

  addCard({
    'name': formPlaceNameInput.value,
    'link': formPlaceLinkInput.value
  });

  placePopup.classList.remove('popup_opened');

  formPlaceNameInput.value = '';
  formPlaceLinkInput.value = '';
}
