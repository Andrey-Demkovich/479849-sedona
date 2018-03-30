var button = document.querySelector('.searh-button');
var popup = document.querySelector('.search-form');
var dateArrival = popup.querySelector('input[name="arrival"]');
var dateDeparture = popup.querySelector('input[name="departure"]');
var numberAdult = popup.querySelector('input[name="adult"]');
var numberChildren = popup.querySelector('input[name="children"]');
var findButton = popup.querySelector('.find-button');

var isStorageSupport = true;
var storageArrival = '';
var storageDeparture = '';
var storageAdult = '';
var storageChildren = '';

try {
  storageArrival = localStorage.getItem("arrival");
  storageDeparture = localStorage.getItem('departure');
  storageAdult = localStorage.getItem('adult');
  storageChildren = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
};

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('Клик по кнопке');
  popup.classList.toggle('modal-close');
  if (storageArrival && storageDeparture && storageAdult && storageChildren) {
    dateArrival.value = storageArrival;
    dateDeparture.value = storageDeparture;
    numberAdult.value = storageAdult;
    numberChildren.value = storageChildren;
    findButton.focus();
  } else {
    dateArrival.focus();
  }
});

popup.addEventListener('submit', function(evt) {
    if (!dateArrival.value || !dateDeparture.value) {
      evt.preventDefault();
      console.log('Введите даты заезда и выезда');
  } else if (numberAdult.value == 0 || !numberAdult.value) {
      evt.preventDefault();
      console.log('Введите хотябы одного взрослого');
  } else {
      if (isStorageSupport) {
        localStorage.setItem('arrival', dateArrival.value);
        localStorage.setItem('departure', dateDeparture.value);
        localStorage.setItem('adult', numberAdult.value);
        localStorage.setItem('children', numberChildren.value);
      }
  }
});
