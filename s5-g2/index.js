
const allImg = document.getElementsByTagName('img');
[...allImg].forEach((img) => {
    img.addEventListener('mouseenter', (event) => {
        event.target.classList.add('grayscale');
    });

    img.addEventListener('mouseleave', (event) => {
        event.target.classList.remove('grayscale');
    });
});



window.addEventListener('keydown', (event) => {
    if (event.key == '1') {
        document.body.classList.add('theme1');
    }
    if (event.key == '2') {
        document.body.classList.add('theme2');
    }
    if (event.key == '3') {
        document.body.classList.add('theme3');
    }
    if (event.key == 'Escape') {
        document.body.classList.remove('theme1', 'theme2', 'theme3');
    }
});

const input = document.querySelector('input');
const btn = document.querySelector('button');
input.addEventListener('input', (event) => {
    event.target.value = event.target.value.toUpperCase();
    if (event.target.value.length > 5) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

const form = document.querySelector('form');
const sub = document.querySelector('#submitResult');
const inpText = document.querySelector('input');
const kydtbtn = document.querySelector('.footer button');
form.addEventListener('submit', (event) => {
    const value = inpText.value;
    sub.textContent = `${value} başarı ile kaydedildi...`;
    inpText.value = '';
    kydtbtn.disabled = true;
});
