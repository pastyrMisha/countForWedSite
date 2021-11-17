// function timer() {
//     let t = setTime("Dec 25, 1995");
// console.log(t);
//     const structTime = () => {

//                 let seconds = Math.floor((t / 1000) % 60),
//                 minutes = Math.floor((t / 1000 / 60) % 60),
//                 hours = Math.floor((t / 1000 / 60 / 60) % 24),
//                 days = Math.floor((t / (1000 * 60 * 60 * 24))),
//                 months = Math.floor((t / (1000 * 60 * 60 * 24))),
//                 years = Math.floor((t / (1000 * 60 * 60 * 24 * 12)));

//             return {
//                 years: years,
//                 months: months,
//                 days: days,
//                 hours: hours,
//                 minutes: minutes,
//                 seconds: seconds
//             };

//         },

//         setClock = (t) => {
//             let timer = document.getElementById('timer'),
//                 years = timer.querySelector('.years'),
//                 months = timer.querySelector('.months'),
//                 days = timer.querySelector('.days'),
//                 hours = timer.querySelector('.hours'),
//                 minutes = timer.querySelector('.minutes'),
//                 seconds = timer.querySelector('.seconds'),
//                 updateClock = setInterval(() => {
//                     let wed = structTime(t);
//                     years.textContent = wed.years;
//                     months.textContent = wed.months;
//                     days.textContent = wed.days;
//                     hours.textContent = wed.hours;
//                     minutes.textContent = wed.minutes;
//                     seconds.textContent = wed.seconds;

//                     if (wed.hours < 10) {
//                         hours.textContent = "0" + wed.hours;
//                     }
//                     if (wed.minutes < 10) {
//                         minutes.textContent = "0" + wed.minutes;
//                     }
//                     if (wed.seconds < 10) {
//                         seconds.textContent = "0" + wed.seconds;
//                     }
//                 }, 1000);
//         };
//     setClock();
// }
// timer();


function timer() {
const wed = '2019-03-02T19:30:00.000Z';
let currentDate = Date.parse(new Date()),
    pastDays = (currentDate - Date.parse(wed));

   const structTime = () => {

    let seconds = Math.floor((pastDays / 1000) % 60),
        minutes = Math.floor((pastDays / 1000 / 60) % 60),
        hours = Math.floor((pastDays / 1000 / 60 / 60) % 24),
        days = Math.floor(pastDays / (1000 * 60 * 60 * 24)),
        years = Math.floor(pastDays / (1000 * 60 * 60 * 24 * 365));

    return {
        years: years,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
},

 setClock = (setTime) => {
    let timer = document.getElementById('timer'),
        years = timer.querySelector('.years'),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        updateClock = () => {
            let res = setTime();
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
           
        }, timeInterval = setInterval(updateClock, 1000);;
}
setClock(structTime);
}
timer();
