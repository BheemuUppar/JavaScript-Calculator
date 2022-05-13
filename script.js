let screen = document.getElementById('screen');
let screenValue = '';
buttons = document.querySelectorAll('button');

for (btn of buttons) {
    btn.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = '';
            screen.value = '';
        } else if (buttonText == '=') {
            screen.value = eval(screenValue)
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });

}