AOS.init();
const birthDate = new Date('Nov 02, 2024 18:00:00');
const timeStampDoEvento = birthDate.getTime();

const timeRunning = setInterval(() =>{
    const now = new Date();
    const currentDate = now.getTime();
    const timeUntilBirthday = timeStampDoEvento - currentDate;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;

    const daysUntilBirthday = Math.floor(timeUntilBirthday / dayInMs);
    const hoursUntilBirthday = Math.floor((timeUntilBirthday % dayInMs) / hourInMs);
    const minutesUntilBirthday = Math.floor((timeUntilBirthday % hourInMs) / minuteInMs);
    const secondsUntilBirthday = Math.floor((timeUntilBirthday % minuteInMs) / 1000);

    document.querySelector('.counter').innerHTML = `${daysUntilBirthday}d ${hoursUntilBirthday}h ${minutesUntilBirthday}m ${secondsUntilBirthday}s`;

    if(timeUntilBirthday < 0){
        clearInterval(timeRunning);
        document.querySelector(".phrase").innerHTML = `O aniversário foi no dia 02/11/2024`;
        document.querySelector(".counter").innerHTML = '';
    }
}, 1000);
