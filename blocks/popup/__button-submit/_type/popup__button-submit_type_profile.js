document.querySelector('.popup__button-submit_type_profile').addEventListener('click', submitPopupProfile);

function submitPopupProfile(evt) {
  evt.preventDefault();

  if ( formProfileNameInput.value === "" || formProfileJobInput.value === "" )
    return false;

  profileNameTitleElement.textContent = formProfileNameInput.value;
  profileJobTitleElement.textContent  = formProfileJobInput.value;

  profilePopup.classList.toggle('popup_opened');
}
