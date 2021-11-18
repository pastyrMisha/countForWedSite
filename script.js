window.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById('timer'),
        yearsT = timer.querySelector('.yearsTitle'),
        daysT = timer.querySelector('.daysTitle'),
        hoursT = timer.querySelector('.hoursTitle'),
        minutesT = timer.querySelector('.minutesTitle'),
        secondsT = timer.querySelector('.secondsTitle'),
        yearsSub = timer.querySelector('.yearsSubtitle'),
        daysSub = timer.querySelector('.daysSubtitle'),
        hoursSub = timer.querySelector('.hoursSubtitle'),
        minutesSub = timer.querySelector('.minutesSubtitle'),
        secondsSub = timer.querySelector('.secondsSubtitle'),
        wed = 'Sat, 02 Mar 2019 19:30:00 +03',
        structTime = (t) => {
            let seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60) % 24),
                days = Math.floor(t / (1000 * 60 * 60 * 24) % 365.242),
                years = Math.floor(t / (1000 * 60 * 60 * 24 * 365.242));
            return {
                years: years,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        },
        declensionSub = (num, words) => words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];

    function updateClock() {
        let currentDate = Date.parse(new Date()),
            pastDays = (currentDate - Date.parse(wed)),
            res = structTime(pastDays);

        yearsT.textContent = res.years;
        daysT.textContent = res.days;
        hoursT.textContent = res.hours < 10 ? "0" + res.hours : res.hours;
        minutesT.textContent = res.minutes < 10 ? "0" + res.minutes : res.minutes;
        secondsT.textContent = res.seconds < 10 ? "0" + res.seconds : res.seconds;

        if (res.years === 1) yearsSub.textContent = "ГОД";
        if (res.years > 1 && res.years < 5) yearsSub.textContent = "ГОДА";
        daysSub.textContent = declensionSub(res.days, ['ДЕНЬ', 'ДНЯ', 'ДНЕЙ']);
        hoursSub.textContent = declensionSub(res.hours, ['ЧАС', 'ЧАСА', 'ЧАСОВ']);
        minutesSub.textContent = declensionSub(res.minutes, ['МИНУТА', 'МИНУТЫ', 'МИНУТ']);
        secondsSub.textContent = declensionSub(res.seconds, ['СЕКУНДА', 'СЕКУНДЫ', 'СЕКУНД']);
        // if (res.seconds === 1 || res.seconds === 21 || res.seconds === 31 || res.seconds === 41 || res.seconds === 51) {
        //     secondsSub.textContent = " СЕКУНДА";
        // } else if (res.seconds > 1 && res.seconds < 5 || res.seconds > 21 && res.seconds < 25 || res.seconds > 31 && res.seconds < 35 || res.seconds > 41 && res.seconds < 45 || res.seconds > 51 && res.seconds < 55) {
        //     secondsSub.textContent = " СЕКУНДЫ";
        // } else { secondsSub.textContent = " СЕКУНД" }
    };
    setInterval(updateClock, 1000);
})