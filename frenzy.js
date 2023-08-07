'use strict';

const links = document.querySelector(`.links`)

const dishlink = document.querySelectorAll(`.dish-link`)
const dishlinks = document.querySelector(`.dish-links`)
const dishta = document.querySelectorAll(`.dish-cards`)

links.addEventListener('click', function (el) {
     el.preventDefault();
     if(!el.target.classList.contains('nav-li')) return
    if (el.target.classList.contains('nav-li')) {
      const id = el.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

dishlinks.addEventListener(`click`, function(e){
    e.preventDefault()
    const clicked = e.target.closest(`.dish-link`);
    console.log(clicked);
    if(!clicked) return
    dishlink.forEach(l=> l.classList.remove(`dish-active`))
  dishta.forEach(l => l.classList.remove(`dish-cards-active`))
    clicked.classList.add(`dish-active`)
    document
    .querySelector(`.dish-cards-${clicked.dataset.tab}`)
    .classList.add('dish-cards-active');

})

  