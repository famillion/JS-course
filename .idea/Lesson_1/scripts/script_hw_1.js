let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

//--------------------------------------------------------------------------------------------------------------------

start();

let appData = {
    appMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    chooseOptExpenses: function () {
        for(let i = 0; i < 3; i++){
            let count = 0;
            let exp = prompt("Статья необязательных расходов?", "");
            if(exp == "" || exp == null){
                continue;
            }
            appData.optionalExpenses[count + 1] = exp;
            count++;
        }
    },

    chooseExpenses: function () {
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
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.appMoney / 30).toFixed(2);
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            alert(appData.moneyPerDay + " - ЭТО Мизерный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert(appData.moneyPerDay + " - ЭТО средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            alert(appData.moneyPerDay + " - ДА ТЫ БОГАЧ!");
        } else {
            alert('шось пішло не так!');
        }
    },

    checkSavings: function () {
        if(appData.savings){
            let saves = +prompt("Какова сумма накоплений?");
            percent = prompt("Под какой процент?");
            appData.monthIncome = (saves/100/12*percent).toFixed(2);
            alert("Ваш доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },

    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (введите через запятую)", "");

        while (typeof(items) != 'string' || items == '' || items == null){
            items = prompt("Что принесет дополнительный доход? (введите через запятую)", "");
        }

        appData.income = items.split(',');

        for (let i = 0; i < appData.income.length; i++){
            appData.income[i] = appData.income[i].trim();
        }

        appData.income.sort();

        let msg = 'Способы доп. заработка: \n';

        appData.income.forEach((val,ind) => {
             msg += (ind + 1) + '. ' + val + ';\n';
        });

        alert(msg);
    },

    thisInfo: function () {
        let infoMsg = 'Наша программа включает в себя данные: \n';
        for (let key in appData){
            infoMsg += key + '\n';
        }
        alert(infoMsg);
    }
};

