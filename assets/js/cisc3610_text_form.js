const form = document.querySelector('form');
const text = document.querySelector('#text');

const resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener('click', () => {
    localStorage.clear();
    document.location.reload()
});

const name = localStorage.getItem('name');
if (name) {
    text.textContent = name;
    document.querySelector('#name').value = name;
}
const bgColor = localStorage.getItem('bg-color');
if (bgColor) {
    text.style.backgroundColor = bgColor;
    document.querySelector('#bg-color').value = bgColor;
}
const textColor = localStorage.getItem('text-color');
if (textColor) {
    text.style.color = textColor;
    document.querySelector('#text-color').value = textColor;
}
const textSize = localStorage.getItem('text-size');
if (textSize) {
    text.style.fontSize = `${textSize}px`;
    document.querySelector('#text-size').value = textSize;
}
const fontFamily = localStorage.getItem('font-family');
if (fontFamily) {
    text.style.fontFamily = fontFamily;
    document.querySelector('#font-family').value = fontFamily;
}

form.addEventListener('input', (event) => {
    event.preventDefault();
    const target = event.target;
     if (target.id === 'name') {
        text.textContent = target.value;
        localStorage.setItem('name', target.value);
    } else if (target.id === 'bg-color') {
        text.style.backgroundColor = target.value;
        localStorage.setItem('bg-color', target.value);
    } else if (target.id === 'text-color') {
        text.style.color = target.value;
        localStorage.setItem('text-color', target.value);
    } else if (target.id === 'text-size') {
        text.style.fontSize = `${target.value}px`;
        localStorage.setItem('text-size', target.value);
    } else if (target.id.startsWith('font-')) {
        text.style.fontFamily = target.value;
        localStorage.setItem('font-family', target.value);
    }
});