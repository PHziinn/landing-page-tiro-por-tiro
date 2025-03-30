const filterButtons = document.querySelector('#filter-btns').children;
const items = document.querySelector('.gallery').children;
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener('click', function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove('active');
    }
    this.classList.add('active');
    const target = this.getAttribute('data-target');
    for (let k = 0; k < items.length; k++) {
      items[k].style.display = 'none';
      if (target == items[k].getAttribute('data-id') || target == 'all') {
        items[k].style.display = 'block';
      }
    }
  });
}

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;
  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector('header').classList.add('fixed');
    } else {
      document.querySelector('header').classList.remove('fixed');
    }
  }
};

const navbar = document.querySelector('.navbar');
const navLinks = navbar.querySelectorAll('a');
const hamBurger = document.querySelector('.ham-burger');

hamBurger.addEventListener('click', function () {
  navbar.classList.toggle('show');
});

navLinks.forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();
    navLinks.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');

    if (window.innerWidth <= 991) {
      navbar.classList.remove('show');
    }

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  });
});
