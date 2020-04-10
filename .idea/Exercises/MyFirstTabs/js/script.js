window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let info = document.querySelector('.info-header'),
        tabs = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

//    Timer

    let deadLine = '2020-05-02',
        timerId = document.getElementById('timer'),
        spanEl = document.createElement('span'),
        spanItems = timerId.getElementsByTagName('span');

    spanEl.className = 'days';

    timerId.appendChild(spanEl);


    for (let i = 0; i < spanItems.length-1; i++) {
        timerId.appendChild(spanItems[0]);
    }

    function getTimerRemaning(endTime) {
        let totalTime = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((totalTime / 1000) % 60),
            minutes = Math.floor((totalTime / 1000 / 60) % 60),
            hoursAll = Math.floor(totalTime / (1000 * 60 * 60)),
            days = Math.floor(hoursAll / 24),
            hours = hoursAll % 24;

        if (hoursAll < 24) {
            spanEl.hidden = true;
        }

        return {
            'totalTime': totalTime,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days,
            'hoursAll': hoursAll
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            seconds = timer.querySelector('.seconds'),
            minutes = timer.querySelector('.minutes'),
            hours = timer.querySelector('.hours'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimerRemaning(endTime, id);
            if(t.seconds < 10){
                seconds.textContent = '0' + t.seconds;
            }else {
                seconds.textContent = t.seconds;
            }

            if(t.minutes < 10){
                minutes.textContent = '0' + t.minutes;
            }else {
                minutes.textContent = t.minutes;
            }

            if(t.hours < 10){
                hours.textContent = '0' + t.hours;
            }else {
                hours.textContent = t.hours;
            }

            if (t.days === 1 || ((t.days % 10) == 1 && t.days != 11)) {
                days.textContent = t.days + ' день ';
            } else if ((t.days > 1 && t.days < 5) && ((t.days % 10) > 1 &&
                (t.days % 10) < 5) && (t.days != 11) && t.days != 12 && t.days != 13 &&
                t.days != 14) {
                days.textContent = t.days + ' дня ';
            } else {
                days.textContent = t.days + ' дней ';
            }

            if(t.hours === 0 && t.minutes === 0 && t.seconds === 0 && spanEl.hidden){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);
});