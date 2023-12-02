const nome = document.querySelector('#name')
const date = document.getElementById('birthdate');
const phrase = document.querySelector('.phrase');
const buttonAddDate = document.getElementById('putdate')
const form = document.querySelector('.hero__form');
const conterDate = document.querySelector('.hero__conterDate')
const clearDate = document.querySelector('#clearDate') 

const localName = localStorage.getItem('nome');
const localDate = localStorage.getItem('data');
JSON.stringify(localName)
JSON.stringify(localDate)
if(!localDate || !localName){
    addBirthday();
}else{
    timeRunning();
}

clearDate.addEventListener('click',(event)=>{
    localStorage.clear();
    window.location.reload();
})


function addBirthday(){
    buttonAddDate.addEventListener('click', (event) =>{
            localStorage.setItem("data", date.value);
            localStorage.setItem("nome", nome.value);
            timeRunning();
    })
}

function timeRunning(){
    const birthDate = new Date(localDate);
    const timeStampDoEvento = birthDate.getTime();
    form.classList.add('hidden');
    conterDate.classList.remove('hidden');
    
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
        phrase.innerHTML = `O Aniversário de ${localName} será em`
    
        setInterval(() =>{
            if(timeUntilBirthday < 0){
                clearInterval(timeRunning);
                document.querySelector(".phrase").innerHTML = `O aniversário foi no dia ${localDate}`;
                document.querySelector(".counter").innerHTML = '';
            }
        }, 2000)
    }, 1000);
}