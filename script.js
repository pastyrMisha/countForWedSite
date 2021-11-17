window.addEventListener("DOMContentLoaded", () => {
    let timer = document.getElementById('timer'),
        years = timer.querySelector('.years'),
       
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    const wed = '2019-03-02T19:30:00.000Z',
        structTime = (t) => {
            let seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60) % 24),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                
                years = Math.floor(t / (1000 * 60 * 60 * 24 * 365));

            return {
                years: years,

                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        };

    function updateClock() {
        let currentDate = Date.parse(new Date()),
            pastDays = (currentDate - Date.parse(wed)),
            res = structTime(pastDays);

        years.textContent = res.years;
   
        days.textContent = res.days;
        hours.textContent = res.hours;
        minutes.textContent = res.minutes;
        seconds.textContent = res.seconds;

        if (res.hours < 10) {
            hours.textContent = "0" + res.hours;
        }
        if (res.minutes < 10) {
            minutes.textContent = "0" + res.minutes;
        }
        if (res.seconds < 10) {
            seconds.textContent = "0" + res.seconds;
        }

    }
    setInterval(updateClock, 1000);



})