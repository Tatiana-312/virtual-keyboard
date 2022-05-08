import { KeyButton, ControlButton } from './button.js';

let buttons = [
    new KeyButton('`', 'ё', 'Ё', '`', 'Backquote'), new KeyButton('1', '1', '!', '!', 'Digit1'), new KeyButton('2', '2', '"', '@', 'Digit2'),
    new KeyButton('3', '3', '№', '#', 'Digit3'), new KeyButton('4', '4', ';', '$', 'Digit4'), new KeyButton('5', '5', '%', '%', 'Digit5'), 
    new KeyButton('6', '6', ':', '^', 'Digit6'), new KeyButton('7', '7', '?', '&', 'Digit7'), new KeyButton('8', '8', '*', '*', 'Digit8'), 
    new KeyButton('9', '9', '(', '(', 'Digit9'), new KeyButton('0', '0', ')', ')', 'Digit0'), new KeyButton('-', '-', '_', '_', 'Minus'),
    new KeyButton('=', '=', '+', '+', 'Equal'), new ControlButton('Backspace', '', '', '', 'Backspace', ['backspace-key']), new ControlButton('Tab', '', '', '', 'Tab', ['tab-key']),
    new KeyButton('q', 'й', 'Й', 'Q'), new KeyButton('w', 'ц', 'Ц', 'W'), new KeyButton('e', 'у', 'У', 'E'),
    new KeyButton('r', 'к', 'К', 'R'), new KeyButton('t', 'е', 'Е', 'T'), new KeyButton('y', 'н', 'Н', 'Y'),
    new KeyButton('u', 'г', 'Г', 'U'), new KeyButton('i', 'ш', 'Ш', 'I'), new KeyButton('o', 'щ', 'Щ', 'O'),
    new KeyButton('p', 'з', 'З', 'P'), new KeyButton('[', 'х', 'Х', '{', 'BracketLeft'), new KeyButton(']', 'ъ', 'Ъ', '}', 'BracketRight'),
    new KeyButton('\\', '\\', '/', '|', 'Backslash'), new ControlButton('Del', '', '', '', 'Delete', ['del-key']), new ControlButton('CapsLock', '', '', '', 'CapsLock', ['caps-key']),
    new KeyButton('a', 'ф', 'Ф', 'A'), new KeyButton('s', 'ы', 'Ы', 'S'), new KeyButton('d', 'в', 'В', 'D'),
    new KeyButton('f', 'а', 'А', 'F'), new KeyButton('g', 'п', 'П', 'G'), new KeyButton('h', 'р', 'Р', 'H'),
    new KeyButton('j', 'о', 'О', 'J'), new KeyButton('k', 'л', 'Л', 'K'), new KeyButton('l', 'д', 'Д', 'L'),
    new KeyButton(';', 'ж', 'Ж', ':', 'Semicolon'), new KeyButton('&apos;', 'э', 'Э', '"', 'Quote'), new ControlButton('Enter', '', '', '', 'Enter', ['enter-key']),
    new ControlButton('Shift', '', '', '', 'ShiftLeft', ['left-shift-key']), new KeyButton('z', 'я', 'Я', 'Z'), new KeyButton('x', 'ч', 'Ч', 'X'),
    new KeyButton('c', 'с', 'С', 'C'), new KeyButton('v', 'м', 'М', 'V'), new KeyButton('b', 'и', 'И', 'B'),
    new KeyButton('n', 'т', 'Т', 'N'), new KeyButton('m', 'ь', 'Ь', 'M'), new KeyButton(',', 'б', 'Б', '<', 'Comma'),
    new KeyButton('.', 'ю', 'Ю', '>', 'Period'), new KeyButton('/', '.', ',', '?', 'Slash'), new ControlButton('&#9650;', '', '', '', 'ArrowUp'),
    new ControlButton('Shift', '', '', '', 'ShiftRight', ['right-shift-key']), new ControlButton('Ctrl', '', '', '', 'ControlLeft', ['left-ctrl-key']), new ControlButton('Win', '', '', '', 'MetaLeft'),
    new ControlButton('Alt', '', '', '', 'AltLeft'), new KeyButton('', '', '', '', 'Space', ['space-key']), new ControlButton('Alt', '', '', '', 'AltRight'),
    new ControlButton('&#9668;', '', '', '', 'ArrowLeft'), new ControlButton('&#9660;', '', '', '', 'ArrowDown'), new ControlButton('&#9658;', '', '', '', 'ArrowRight'), new ControlButton('Ctrl', '', '', '', 'ControlRight', ['right-ctrl-key']),
];
document.body.onload = addElements;

function addElements() {
    const CONTAINER = document.createElement('div');
    const TITLE = document.createElement('h1');
    const INPUT_FIELD = document.createElement('textarea');
    const KEYBOARD = document.createElement('div');
    const HINT_SYS = document.createElement('p');
    const HINT_SWITCH_LANG = document.createElement('p');
    for (let i = 0; i < buttons.length; i++) {
        const KEY = document.createElement('div');

        // console.log(buttons[i] instanceof ControlButton);

        if (buttons[i] instanceof ControlButton) {
            buttons[i].ru = buttons[i].en;
            buttons[i].shiftRu = buttons[i].en;
            buttons[i].shiftEn = buttons[i].en;
            // console.log(buttons[i]);
        }

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
    CONTAINER.append(HINT_SYS);
    CONTAINER.append(HINT_SWITCH_LANG);

    TITLE.innerText = 'Виртуальная клавиатура';
    HINT_SYS.innerText = 'Клавиатура создана в операционной системе Windows';
    HINT_SWITCH_LANG.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';

    CONTAINER.classList.add('container');
    TITLE.classList.add('title');
    INPUT_FIELD.classList.add('textarea');
    KEYBOARD.classList.add('keyboard');
}

function addHighlight(event) {
    const code = event.code;
    // console.log(code);
    document.getElementById(`${code}`).classList.add('key-active');
}

function removeHighlight(event) {
    const code = event.code;
    // console.log(code);
    document.getElementById(`${code}`).classList.remove('key-active');
}

function printValue(event) {
    const INPUT_FIELD = document.querySelector('.textarea');
    const code = event.code;

    // if (event.shiftKey) {
        
    // }

    INPUT_FIELD.setRangeText(document.getElementById(`${code}`).querySelector('span').innerText, INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, "end");
    // INPUT_FIELD.textContent += document.getElementById(`${code}`).querySelector('span').innerText;
    // console.log(INPUT_FIELD.value);
}

let lang = 'en';

document.addEventListener('keydown', printValue);
document.addEventListener('mousedown', (event) => {
    const INPUT_FIELD = document.querySelector('.textarea');
    let target = event.target;
    let KEY = target.closest('.key');
    if (KEY == null) {
        return false;
      }
    INPUT_FIELD.setRangeText(KEY.querySelector('span').innerText, INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, "end");
});


document.addEventListener('keydown', addHighlight);
document.addEventListener('keyup', removeHighlight);
// document.addEventListener('keypress', (event) => {
//     if (event.getModifierState('CapsLock')) {
//         document.getElementById(`${code}`).classList.add('key-active');
//     }
// })

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.code == 'AltLeft' || event.altKey && event.code == 'ControlLeft') {
        if (lang === 'en') {
            for (let i = 0; i < buttons.length; i++) {
                document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru}</span>`;
            }
            lang = 'ru';
        } else {
            for (let i = 0; i < buttons.length; i++) {
                document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en}</span>`;
            }
            lang = 'en';
        }
    }
});

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.getModifierState('CapsLock')) {
        document.getElementById('CapsLock').classList.add('caps-active');
        if (lang === 'en') {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].en.length === 1) {
                    document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en.toUpperCase()}</span>`;
                }
            }
        } else {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].ru.length === 1) {
                    document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru.toUpperCase()}</span>`;
                }
            }
        } 
    } else {
        document.getElementById('CapsLock').classList.remove('caps-active');
        if (lang === 'en') {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].en.length === 1) {
                    document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en.toLowerCase()}</span>`;
                }
            }
        } else {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].ru.length === 1) {
                    document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru.toLowerCase()}</span>`;
                }
            }
        } 
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        if (lang === 'en') {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].en.length === 1) {
                    document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].shiftEn}</span>`;
                }
            }
        } else {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].ru.length === 1) {
                    document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].shiftRu}</span>`;
                }
            }
        } 
    } 
})

document.addEventListener('keyup', (event) => {
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        if (lang === 'en') {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].en.length === 1) {
                    document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en}</span>`;
                }
            }
        } else {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].ru.length === 1) {
                    document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru}</span>`;
                }
            }
        } 
    }
})


