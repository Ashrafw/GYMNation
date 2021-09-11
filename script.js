const btnBurger = document.querySelector('#btn-hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElement = document.querySelectorAll('.has-fade');

btnBurger.addEventListener('click', function () {
  console.log('button pressed');
  if (header.classList.contains('open')) {
    //close
    header.classList.remove('open');
    fadeElement.forEach(function (element) {
      console.log('closeeeeee');
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    //open
    header.classList.add('open');
    fadeElement.forEach(function (element) {
      console.log('opennn');
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
