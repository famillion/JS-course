let startBtn = document.getElementById('start'),
    divEl = document.getElementsByTagName('div'),
    resDivEl = addArrValuees(),
    inputExpItems = document.getElementsByClassName('expenses-item'),
    approveBtns = document.getElementsByTagName('button'),
    approveExpBtn = addApproveBtns('expenses-item-btn', approveBtns),
    approveOptionalBtn = addApproveBtns('optionalexpenses-btn', approveBtns),
    countBtn = addApproveBtns('count-budget-btn', approveBtns),
    optionalExpItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncomeField = document.querySelector('#income'),
    savingsCheckbox = document.querySelector('#savings'),
    chooseSumField = document.querySelector('#sum'),
    choosePercentField = document.querySelector('#percent'),
    yearField = document.querySelector('.year-value'),
    monthField = document.querySelector('.month-value'),
    dyaField = document.querySelector('.day-value');


function addArrValuees() {
    let arr = [];
    for (let i = 0; i < divEl.length; i++) {
        let strValue = divEl[i].classList.value,
            splitVal = strValue.split('-');

        if (splitVal.length > 1 && splitVal[1] === 'value') {
            arr.push(divEl[i]);
        }
    }
    return arr;
}

function addApproveBtns(className, arrBtns) {
    let btn;
    for (let i = 0; i < arrBtns.length; i++) {
        if (arrBtns[i].classList.value === className) {
            btn = arrBtns[i];
        }
    }
    return btn;
}