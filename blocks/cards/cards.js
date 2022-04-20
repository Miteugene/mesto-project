
const cardsContainer = document.querySelector('.cards');
const placeTemplate = document.querySelector('#card-template').content;

function initCards(initialCards) {
  initialCards.forEach(cardObj => {
    addCard(cardObj);
  });
}

function addCard(card) {
  const placeElement  = placeTemplate.querySelector('.cards__item').cloneNode(true);

  placeElement.querySelector('.cards__title').textContent = card.name;

  const cardImage = placeElement.querySelector('.cards__image');
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardImage.addEventListener('click', showViewPopup);

  placeElement.querySelector('.cards__like-button').addEventListener('click', function(evt){
    evt.target.classList.toggle('cards__like-button_active');
  });

  placeElement.querySelector('.cards__delete-button').addEventListener('click', function(evt){
    evt.target.closest('.cards__item').remove();
  });

  cardsContainer.prepend(placeElement);
}

