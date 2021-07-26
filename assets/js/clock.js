const anaSecond = document.querySelector('[data-second-hand]');
const anaMinits = document.querySelector('[data-minute-hand]');
const anaHours = document.querySelector('[data-hour-hand]');

function setClock() {
    const curentDate = new Date();

    const second = curentDate.getSeconds();
    const minites = curentDate.getMinutes();
    const hours = curentDate.getHours();

    const secondRatio = second / 60;
    const minitesRatio = (secondRatio + minites) / 60;
    const hoursRatio = (minitesRatio + hours) / 12;

    setRatio(anaSecond, secondRatio);
    setRatio(anaMinits, minitesRatio);
    setRatio(anaHours, hoursRatio);
};

function setRatio(Ele, rotRatio) {
    Ele.style.setProperty('--rotation', rotRatio * 360);
};

setClock();
setInterval(setClock, 1000);