
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

let catPricesArray = document.querySelectorAll('.card-name-price')


let catPricesArrayValues = []

catPricesArray.forEach(
    function getText(currentValue) {
        catPricesArrayValues.push(currentValue.textContent)
    }
)

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

catPricesArrayValues.sort(compareNumeric);

console.log(catPricesArrayValues);