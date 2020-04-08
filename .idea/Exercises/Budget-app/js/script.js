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

let time, money;
let count = 0;
for (let i = 0; i < approveBtns.length - 1; i++){
    approveBtns[i].disabled = 'disabled';
}
startBtn.addEventListener('click', () => {

    let regTime = /\d{4}-\d{2}-\d{2}/g;
    let year, month, day;
    let flag = false;
    do {
        let dayPerMonth = 0;
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        if (regTime.test(time)) {
            year = time.split('-')[0];
            month = time.split('-')[1];
            day = time.split('-')[2];

            switch (month * 1) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    dayPerMonth = 31;
                    break;
                case 2:
                    if(Math.abs(2000 - year) % 4 == 0){
                        dayPerMonth = 29;
                    }else {
                        dayPerMonth = 28;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    dayPerMonth = 30;
                    break;
            }

            if(year > 1970 && (day * 1) <= dayPerMonth){
                flag = true;
            }
        }
    } while (!flag);

    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.appMoney = money;
    appData.timeData = time;
    resDivEl[0].textContent = money.toFixed(2);
    yearField.value = new Date(Date.parse(time)).getFullYear();
    monthField.value = new Date(Date.parse(time)).getMonth() + 1;
    dyaField.value = day;

    for (let i = 0; i < approveBtns.length - 1; i++) {
            approveBtns[i].disabled = '';
    }
});

approveExpBtn.addEventListener('click', () => {
    let sum = 0;
    for (let i = 0; i < inputExpItems.length;) {
        let a = inputExpItems[i].value,
            b = +inputExpItems[++i].value;
        if (((typeof (a)) === 'string') && ((typeof (a)) != null) && ((typeof (b)) === 'number') && ((typeof (b)) != null) &&
            a != '' && b != '' && a.length <= 50) {
            appData.expenses[a] = b;
            sum += b;
            i++;
        } else {
            alert("Введите корректный и внятный ответ!");
        }
    }
    resDivEl[3].textContent = sum.toFixed(2);
});

approveOptionalBtn.addEventListener('click', () => {
    let str = '';
    for (let i = 0; i < optionalExpItems.length; i++) {
        let exp = optionalExpItems[i].value;
        if (exp == "" || exp == null) {
            continue;
        }

        appData.optionalExpenses[count + 1] = exp;
        optionalExpItems[i].value = '';
        count++;
    }
    if (count >= optionalExpItems.length){
        approveOptionalBtn.disabled = 'disabled';
    }

    for (let k in appData.optionalExpenses){
        str += appData.optionalExpenses[k] + '; ';
    }
    resDivEl[4].textContent = str;
});

countBtn.addEventListener('click', () => {
    appData.moneyPerDay = (appData.appMoney / 30).toFixed(2);
    resDivEl[1].textContent = appData.moneyPerDay;
    detectLevel();
});

savingsCheckbox.addEventListener('click', () => {
    if(appData.savings){
        appData.savings = false;
    }else {
        appData.savings = true;
    }
});

chooseIncomeField.addEventListener('input', () => {
    resDivEl[5].textContent = chooseIncomeField.value;
});

chooseSumField.addEventListener('input', () => {
    if (appData.savings && (typeof(chooseSumField.value) == 'number') && (typeof(choosePercentField.value) == 'number') &&
        choosePercentField.value != '', chooseSumField.value != '') {
        resDivEl[6].textContent = (+chooseSumField.value / 100 / 12 * +choosePercentField.value).toFixed(2);
        resDivEl[7].textContent = (+chooseSumField.value / 100 * +choosePercentField.value).toFixed(2);
    }
});

choosePercentField.addEventListener('input', () => {
    if (appData.savings && (typeof(chooseSumField.value) == 'number') && (typeof(choosePercentField.value) == 'number') &&
    choosePercentField.value != '', chooseSumField.value != '') {
        resDivEl[6].textContent = (+chooseSumField.value / 100 / 12 * +choosePercentField.value).toFixed(2);
        resDivEl[7].textContent = (+chooseSumField.value / 100 * +choosePercentField.value).toFixed(2);
    }
});

let appData = {
    appMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

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


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        resDivEl[2].textContent = "Это мизерный уровень достатка!";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        resDivEl[2].textContent = "Это средний уровень достатка!";
    } else if (appData.moneyPerDay > 2000) {
        resDivEl[2].textContent = "Да ты богач!";
    } else {
        resDivEl[2].textContent = 'шось пішло не так!';
    }
}