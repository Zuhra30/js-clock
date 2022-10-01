// HTML code
let elTodayWrapper = document.querySelector("#today-wrapper");
let elBody = document.querySelector("body");
let elTodayDays = document.querySelector(".today-days");
let elTodayDate = document.querySelector("#today-date");
let elTodayMonth = document.querySelector("#today-month");
let elTodayYear = document.querySelector("#today-year");
let elTodayClock = document.querySelector(".today-clock");
let elTodatHours = document.querySelector("#today-hours");
let elTodatMinutes = document.querySelector("#today-minutes");
let elTodatSeconds = document.querySelector("#today-seconds");
let elClockType = document.querySelector("#clock-type");


const now = new Date();

// Months

const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

// Days

const date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
// console.log(`Date:`, date);

const month = now.getMonth();
const months = Months[month];
// console.log(`Month:`, Months[month]);

const year = now.getFullYear();
// console.log(`FullYear:`, year);


//The days of output to HTML

// elTodayDate.textContent = date;
// elTodayMonth.textContent = months;
// elTodayYear.textContent = year;

elTodayDays.innerHTML = `${date} ${months} ${year}`;

function timer() {
    const now = new Date();

    // Clock

    const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    // console.log(`Hours:`, hours);

    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    // console.log(`Minutes:`, minutes);

    const seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
    // console.log(`Seconds:`, seconds);


    //The clock of output to HTML

    // elTodatHours.textContent = hours;
    // elTodatMinutes.textContent = minutes;
    // elTodatSeconds.textContent = seconds;

    elTodayClock.innerHTML = `${hours} : ${minutes} : ${seconds} `;

        
        if (hours <= 12) {
            elClockType.textContent = "AM";
        } else {
            elClockType.textContent = "PM";
        }
        elTodayClock.appendChild(elClockType);

}


function identifier() {
    if (now.getHours() <= 12) {
        elBody.classList.add("wrapper__img1");
        elBody.classList.remove("wrapper__img2");
    } else {
        elBody.classList.remove("wrapper__img1");
        elBody.classList.add("wrapper__img2");
    }
}

identifier()


setInterval(() => {
    timer()
}, 1000);


