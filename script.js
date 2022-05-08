import { Button } from './button.js';

let buttons = [
    new Button('`'), new Button('1'), new Button('2'),
    new Button('3'), new Button('4'), new Button('5'), 
    new Button('6'), new Button('7'), new Button('8'), 
    new Button('9'), new Button('0'), new Button('-'),
    new Button('='), new Button('Backspace', 'backspace-key'), new Button('Tab', 'tab-key'),
    new Button('q'), new Button('w'), new Button('e'),
    new Button('r'), new Button('t'), new Button('y'),
    new Button('u'), new Button('i'), new Button('o'),
    new Button('p'), new Button('['), new Button(']'),
    new Button('\\'), new Button('Del', 'del-key'), new Button('CapsLock', 'caps-key'),
    new Button('a'), new Button('s'), new Button('d'),
    new Button('f'), new Button('g'), new Button('h'),
    new Button('j'), new Button('k'), new Button('l'),
    new Button(';'), new Button('&apos;'), new Button('Enter', 'enter-key'),
    new Button('Shift', 'left-shift-key'), new Button('z'), new Button('x'),
    new Button('c'), new Button('v'), new Button('b'),
    new Button('n'), new Button('m'), new Button(','),
    new Button('.'), new Button('/'), new Button('&#9650;', 'up-arrow-key'),
    new Button('Shift', 'right-shift-key'), new Button('Ctrl', 'left-ctrl-key'), new Button('Win', 'win-key'),
    new Button('Alt', 'left-alt-key'), new Button('', 'space-key'), new Button('Alt', 'right-alt-key'),
    new Button('&#9668;', 'left-arrow-key'), new Button('&#9660;', 'down-arrow-key'), new Button('&#9658;', 'right-arrow-key'), new Button('Ctrl', 'right-ctrl-key'),
];
document.body.onload = addElements;

function addElements() {
    const CONTAINER = document.createElement('div');
    const TITLE = document.createElement('h1');
    const INPUT_FIELD = document.createElement('textarea');
    const KEYBOARD = document.createElement('div');
    for (let i = 0; i < buttons.length; i++) {
        const KEY = document.createElement('div');
        KEY.innerHTML = `<span>${buttons[i].en}</span>`;
        KEYBOARD.append(KEY);
        KEY.classList.add('key');
        buttons[i].id === undefined ? KEY.removeAttribute('id') : KEY.id = `${buttons[i].id}`;
    }

    document.body.append(CONTAINER);
    CONTAINER.append(TITLE);
    CONTAINER.append(INPUT_FIELD);
    CONTAINER.append(KEYBOARD);

    TITLE.innerText = 'Виртуальная клавиатура';

    CONTAINER.classList.add('container');
    TITLE.classList.add('title');
    INPUT_FIELD.classList.add('textarea');
    KEYBOARD.classList.add('keyboard');

}
