
let money = prompt('Ваш бюджет на месяц?','')
    time = prompt('Введите дату в формате YYYY-MM-DD', ''),
    rashod = prompt('Введите обязательную статью расходов в этом месяце',''),
    summ = prompt('Во сколько обойдется?','');

    let appData = {
        appMoney: money,
        timeData: time,
        expenses: { rashod, summ },
        optionalExpenses: {undefined},
        income: [undefined],
        savings: false
    };

    alert(money / 30);