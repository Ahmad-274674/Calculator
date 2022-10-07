const outputScreen = document.getElementById('outputScreen'),
    inputScreen = document.getElementById('inputScreen'),
    clearAll = document.getElementById('clearAll'),
    clearOneChar = document.getElementById('clearOneChar'),
    equlSolve = document.getElementById('equlSolve'),
    buttonsValueAble = document.querySelectorAll('.btn-js');

const arraySpecialSymbols = ['+', '-', '*', '/', '%'];

let str = '';

Array.from(buttonsValueAble).forEach((buttonsValueAble) => {
    buttonsValueAble.addEventListener('click', (e) => {
        str = str + buttonsValueAble.innerHTML;
        inputScreen.innerHTML = str;
    })
})

clearAll.addEventListener('click', () => {
    str = '';
    inputScreen.innerHTML = str;
    outputScreen.innerHTML = str;
})

equlSolve.addEventListener('click', () => {
    try {
        if (str == '') {
            outputScreen.innerHTML = '0';
        }
        else {
            if(eval(str) % 1 != 0){
                outputScreen.innerHTML = eval(str).toFixed(5);
            }
            else{
                outputScreen.innerHTML = eval(str);
            }
        }
    }
    catch (error) {
        outputScreen.innerHTML = 'Error';
    }
})

clearOneChar.addEventListener('click', () => {
    str = str.slice(0, -1);
    inputScreen.innerHTML = str;
})

var element = document.getElementById("output");
if (/[+-\/*]/.test(this.value) && /[+-\/*]$/.test(element.innerHTML)) {
    element.innerHTML = element.innerHTML.replace(element.innerHTML[element.innerHTML.length - 1], '');
}