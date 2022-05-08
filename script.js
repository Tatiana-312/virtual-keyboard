import { KeyButton, ControlButton } from './button.js';

let buttons = [
    new KeyButton('`', 'Backquote'), new KeyButton('1', 'Digit1'), new KeyButton('2', 'Digit2'),
    new KeyButton('3', 'Digit3'), new KeyButton('4', 'Digit4'), new KeyButton('5', 'Digit5'), 
    new KeyButton('6', 'Digit6'), new KeyButton('7', 'Digit7'), new KeyButton('8', 'Digit8'), 
    new KeyButton('9', 'Digit9'), new KeyButton('0', 'Digit0'), new KeyButton('-', 'Minus'),
    new KeyButton('=', 'Equal'), new ControlButton('Backspace', 'Backspace', ['backspace-key']), new ControlButton('Tab', 'Tab', ['tab-key']),
    new KeyButton('q'), new KeyButton('w'), new KeyButton('e'),
    new KeyButton('r'), new KeyButton('t'), new KeyButton('y'),
    new KeyButton('u'), new KeyButton('i'), new KeyButton('o'),
    new KeyButton('p'), new KeyButton('[', 'BracketLeft'), new KeyButton(']', 'BracketRight'),
    new KeyButton('\\', 'Backslash'), new ControlButton('Del', 'Delete', ['del-key']), new ControlButton('CapsLock', 'CapsLock', ['caps-key']),
    new KeyButton('a'), new KeyButton('s'), new KeyButton('d'),
    new KeyButton('f'), new KeyButton('g'), new KeyButton('h'),
    new KeyButton('j'), new KeyButton('k'), new KeyButton('l'),
    new KeyButton(';', 'Semicolon'), new KeyButton('&apos;', 'Quote'), new ControlButton('Enter', 'Enter', ['enter-key']),
    new ControlButton('Shift', 'ShiftLeft', ['left-shift-key']), new KeyButton('z'), new KeyButton('x'),
    new KeyButton('c'), new KeyButton('v'), new KeyButton('b'),
    new KeyButton('n'), new KeyButton('m'), new KeyButton(',', 'Comma'),
    new KeyButton('.', 'Period'), new KeyButton('/', 'Slash'), new ControlButton('&#9650;', 'ArrowUp'),
    new ControlButton('Shift', 'ShiftRight', ['right-shift-key']), new ControlButton('Ctrl', 'ControlLeft', ['left-ctrl-key']), new ControlButton('Win', 'MetaLeft'),
    new ControlButton('Alt', 'AltLeft'), new KeyButton('', 'Space', ['space-key']), new ControlButton('Alt', 'AltRight'),
    new ControlButton('&#9668;', 'ArrowLeft'), new ControlButton('&#9660;', 'ArrowDown'), new ControlButton('&#9658;', 'ArrowRight'), new ControlButton('Ctrl', 'ControlRight', ['right-ctrl-key']),
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

        buttons[i].cssClasses.forEach(cssClass => {
            KEY.classList.add(cssClass);
        });

        buttons[i].code === undefined ? KEY.id = `Key${buttons[i].en.toUpperCase()}` : KEY.id = `${buttons[i].code}`;
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

function addHighlight(event) {
    const code = event.code;
    console.log(code);
    document.getElementById(`${code}`).classList.add('key-active');
}

function removeHighlight(event) {
    const code = event.code;
    document.getElementById(`${code}`).classList.remove('key-active');
}

document.addEventListener('keydown', addHighlight);
document.addEventListener('keyup', removeHighlight);
