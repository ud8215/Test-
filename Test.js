let numBulbs = 0;
let bulbs = [];

document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('done-btn').addEventListener('click', () => {
    numBulbs = parseInt(document.getElementById('num-input').value);
    createBulbs();
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('reset-btn').addEventListener('click', () => {
    reset();
});

function createBulbs() {
    const bulbContainer = document.getElementById('bulb-container');
    bulbContainer.innerHTML = '';
    for (let i = 0; i < numBulbs; i++) {
        const bulb = document.createElement('div');
        bulb.className = 'bulb off';
        bulbContainer.appendChild(bulb);
        bulbs.push(bulb);
    }
}

function reset() {
    numBulbs = 0;
    bulbs = [];
    document.getElementById('bulb-container').innerHTML = '';
    document.getElementById('modal').style.display = 'none';
}

bulbs.forEach((bulb, index) => {
    bulb.addEventListener('click', () => {
        if (bulb.classList.contains('off')) {
            bulb.classList.remove('off');
            bulb.classList.add('on');
            setTimeout(() => {
                bulb.classList.remove('on');
                bulb.classList.add('off');
            }, 10000);
        }
    });
});

