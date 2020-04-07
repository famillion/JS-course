let menuEls = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu .menu-item'),
    fiveLiItem = document.createElement('li'),
    imgItem = document.querySelector('body'),
    txtTitle = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    promptItem = document.getElementById('prompt'),
    askPrompt = prompt('Как вы относитесь к технике apple?','');

// ex.1
fiveLiItem.classList.add(getItemClassNames(menuItems));
fiveLiItem.textContent = 'Пятый пункт';

//    ex. 2
imgItem.style.background = 'url(../HTML_js_less5/img/apple_true.jpg)';

//    ex. 3
txtTitle.textContent = 'Мы продаем только подлинную технику Apple';

//    ex. 4
adv.remove();

//  ex. 5
promptItem.textContent = askPrompt;


for (let i = 1; i < 4; i += 2) {
    menuEls.append(menuItems[i]);
}

menuEls.append(fiveLiItem);

function getItemClassNames(someItem) {
    return (someItem.item(0).className).toString();
}