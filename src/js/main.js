
const screenWidth = window.screen.width
let cards = document.querySelectorAll('.card')

if(screenWidth > 1850) {
    for (let index = 8; index < cards.length; index++) {
        cards[index].style.display = 'none'
    }
} else {
    for (let index = 6; index < cards.length; index++) {
        cards[index].style.display = 'none'
    }
}


let catsPrice = document.querySelector('.cats__price')
let catsAge = document.querySelector('.cats__age')
let catsMenuPrice = document.querySelector('.cats__sorting-wrapper-price')
let catsMenuAge = document.querySelector('.cats__sorting-wrapper-age')

catsPrice.addEventListener('click', function(){toggleMenu(catsMenuPrice)})
catsAge.addEventListener('click', function(){toggleMenu(catsMenuAge)})


function toggleMenu(element) {
    element.classList.toggle('cats__sorting-wrapper-price_active')
}


document.addEventListener('click', e => {
    let target = e.target
    let it_is_menuCatsPrice = target == catsMenuPrice || catsMenuPrice.contains(target);
    let its_catsPrice = target == catsPrice;
    let catsMenuPrice_is_active = catsMenuPrice.classList.contains('cats__sorting-wrapper-price_active');

    if (!it_is_menuCatsPrice && !its_catsPrice && catsMenuPrice_is_active) {
        toggleMenu(catsMenuPrice)
    }
})

document.addEventListener('click', e => {
    let target = e.target
    let it_is_menuCatsAge = target == catsMenuAge || catsMenuPrice.contains(target);
    let its_catsAge = target == catsAge;
    let catsMenuAge_is_active = catsMenuAge.classList.contains('cats__sorting-wrapper-price_active');

    if (!it_is_menuCatsAge && !its_catsAge && catsMenuAge_is_active) {
        toggleMenu(catsMenuAge)
    }
})


let cardsContainer = document.querySelector('.cards-container')
let catPricesArray = document.querySelectorAll('.card-name-price')
let descriptionCatAge = document.querySelectorAll('.description__cat-age')


function byIncreasingPrice() {
    let sortedCatPricesArray = Array.from(catPricesArray).sort((a,b) => parseInt(a.innerHTML,10) - parseInt(b.innerHTML,10))

    for (let index = 0; index < sortedCatPricesArray.length; index++) {
        cardsContainer.append(sortedCatPricesArray[index].parentNode.parentNode.parentNode)
    }
    return sortedCatPricesArray
}

function byDecreasingPrice() {
    let reversedSortedCatPricesArray = byIncreasingPrice().reverse()

    for (let index = 0; index < reversedSortedCatPricesArray.length; index++) {
        cardsContainer.append(reversedSortedCatPricesArray[index].parentNode.parentNode.parentNode)
    }
}

function byIncreasingAge() {
    let sortedCatAge = Array.from(descriptionCatAge).sort((a,b) => parseInt(a.innerHTML,10) - parseInt(b.innerHTML,10))

    for (let index = 0; index < sortedCatAge.length; index++) {
        cardsContainer.append(sortedCatAge[index].parentNode.parentNode.parentNode.parentNode.parentNode)
    }
    return sortedCatAge
}

function byDecreasingAge() {
    let reversedSortedCatAge = byIncreasingAge().reverse()

    for (let index = 0; index < reversedSortedCatAge.length; index++) {
        cardsContainer.append(reversedSortedCatAge[index].parentNode.parentNode.parentNode.parentNode.parentNode)
    }
}

let catsAscendingPrice = document.querySelector('.cats__ascending_price')
let catsDescendingPrice = document.querySelector('.cats__descending_price')
let catsAscendingAge = document.querySelector('.cats__ascending_age')
let catsDescendingAge = document.querySelector('.cats__descending_age')

catsAscendingPrice.addEventListener('click', byIncreasingPrice)
catsDescendingPrice.addEventListener('click', byDecreasingPrice)
catsAscendingAge.addEventListener('click', byIncreasingAge)
catsDescendingAge.addEventListener('click', byDecreasingAge)



let buttonUp = document.querySelector('.button-up')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
}

let regexp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i

let mail = document.querySelector('.footer__input-mail')

if(regexp.test(mail.value)) {
    alert('Неверный адрес электронной почты')
}

let favorites = document.querySelectorAll('.favorite')


Array.from(favorites).forEach(function(item) {
    item.addEventListener('click', function(){heartChangeColor(item)})
})

function heartChangeColor(item) {
    item.classList.toggle('favorite-white')
    if(item.classList.contains('favorite-white')) {
        alert('Добавили котика в избранное')
    } else {
        alert('Убрали котика из избранного')
    }
}