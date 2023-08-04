setInterval(function() {
    let hour = document.querySelector('.hour');
    let second = document.querySelector('.second');
    let minute = document.querySelector('.minute');
    
    const date = new Date();
    
    hour.style.transform = `rotate(${(90+360*(date.getHours()/12))}deg)`;
    second.style.transform = `rotate(${(90+360*(date.getSeconds()/60))}deg)`;
    minute.style.transform = `rotate(${(90+360*(date.getMinutes()/60))}deg)`;
}, 1000);