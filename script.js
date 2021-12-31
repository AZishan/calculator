let display = document.getElementById('display');
let button = document.getElementsByClassName('btn');
let buttons = Array.from(button);


buttons.map(buttons => {
    buttons.addEventListener('click', (e) => {
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
        switch (e.target.innerText) {
            case 'C':
                display.innerText = ' ';
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Syntax Error!'
                }
                break

            default:
                display.innerText += e.target.innerText;
        }
    })
});

// console.log(buttons);