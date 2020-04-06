let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}



function chooseOptExpenses() {
    for(let i = 0; i < 3; i++){
        let count = 0;
        let exp = prompt("Статья необязательных расходов?", "");
        if(exp == "" || exp == null){
            continue;
        }
        appData.optionalExpenses[count + 1] = exp;
        count++;
    }
}

function chooseExpenses(){
    for (let i = 0; i < 2;) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдется?', '');
        if (((typeof (a)) === 'string') && ((typeof (a)) != null) && ((typeof (b)) === 'number') && ((typeof (b)) != null) &&
            a != '' && b != '' && a.length <= 50) {
            appData.expenses[a] = b;
            i++;
        } else {
            alert("Введите корректный и внятный ответ!");
        }
    }
}

function detectDayBudget(){
    appData.moneyPerDay = (appData.appMoney / 30).toFixed(2);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert(appData.moneyPerDay + " - ЭТО Мизерный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert(appData.moneyPerDay + " - ЭТО средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        alert(appData.moneyPerDay + " - ДА ТЫ БОГАЧ!");
    } else {
        alert('шось пішло не так!');
    }
}

function checkSavings() {
    if(appData.savings){
        let saves = +prompt("Какова сумма накоплений?");
            percent = prompt("Под какой процент?");
            appData.monthIncome = (saves/100/12*percent).toFixed(2);
            alert("Ваш доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

//--------------------------------------------------------------------------------------------------------------------

start();

let appData = {
    appMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

chooseExpenses();

chooseOptExpenses();

detectDayBudget();

detectLevel();

checkSavings();