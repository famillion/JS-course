
    let money = +prompt('Ваш бюджет на месяц?','')
        time = prompt('Введите дату в формате YYYY-MM-DD', '');


    let appData = {
        appMoney: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };


    for (let i = 0; i < 2;){
        let a = prompt('Введите обязательную статью расходов в этом месяце',''),
            b = +prompt('Во сколько обойдется?','');
        if( ((typeof(a)) === 'string') && ((typeof(a)) != null) && ((typeof(b)) === 'number') && ((typeof(b)) != null) &&
                a != '' && b != '' && a.length <= 50){
            appData.expenses[a] = b;
            i++;
        }
        else{
            alert("Введите корректный и внятный ответ!");
        }
    }

    appData.moneyPerDay = appData.appMoney / 30;

    if(appData.moneyPerDay < 100){
        alert(appData.moneyPerDay + " - ЭТО Мизерный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        alert(appData.moneyPerDay + " - ЭТО средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000){
        alert(appData.moneyPerDay + " - ДА ТЫ БОГАЧ!");
    } else {
        alert('шось пішло не так!');
    }