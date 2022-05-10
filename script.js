// eslint-disable-next-line
import { KeyButton, ControlButton } from './button.js';

const buttons = [
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

const layout = localStorage.getItem('layout');
let lang = layout || 'en';

function addElements() {
  const CONTAINER = document.createElement('div');
  const TITLE = document.createElement('h1');
  const INPUT_FIELD = document.createElement('textarea');
  const KEYBOARD = document.createElement('div');
  const HINT_SYS = document.createElement('p');
  const HINT_SWITCH_LANG = document.createElement('p');
  for (let i = 0; i < buttons.length; i += 1) {
    const KEY = document.createElement('div');

    if (buttons[i] instanceof ControlButton) {
      buttons[i].ru = buttons[i].en;
      buttons[i].shiftRu = buttons[i].en;
      buttons[i].shiftEn = buttons[i].en;
    }

    if (lang === 'en') {
      KEY.innerHTML = `<span>${buttons[i].en}</span>`;
    } else if (lang === 'ru') {
      KEY.innerHTML = `<span>${buttons[i].ru}</span>`;
    }

    KEYBOARD.append(KEY);

    buttons[i].cssClasses.forEach((cssClass) => {
      KEY.classList.add(cssClass);
    });

    KEY.id = buttons[i].code === undefined ? `Key${buttons[i].en.toUpperCase()}` : `${buttons[i].code}`;
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

document.body.onload = addElements;

function addHighlight(event) {
  const { code } = event;
  if (document.getElementById(`${code}`) === null) {
    return false;
  }
  document.getElementById(`${code}`).classList.add('key-active');

  return false;
}

function removeHighlight(event) {
  const { code } = event;
  if (document.getElementById(`${code}`) === null) {
    return false;
  }
  document.getElementById(`${code}`).classList.remove('key-active');

  return false;
}

function printValue(event) {
  const INPUT_FIELD = document.querySelector('.textarea');
  INPUT_FIELD.focus();
  const { code } = event;

  if (event.code === 'Delete') {
    INPUT_FIELD.setRangeText('', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd + 1, 'end');
  } else if (event.code === 'Backspace') {
    if (INPUT_FIELD.selectionStart === 0) {
      return false;
    }
    INPUT_FIELD.setRangeText('', INPUT_FIELD.selectionStart - 1, INPUT_FIELD.selectionEnd, 'end');
  } else if (event.code === 'Tab') {
    INPUT_FIELD.setRangeText('\t', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else if (event.code === 'CapsLock' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    INPUT_FIELD.setRangeText('', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else if (event.code === 'Enter') {
    INPUT_FIELD.setRangeText('\n', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else if (event.code === 'MetaLeft') {
    INPUT_FIELD.setRangeText('', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else if (event.code === 'Space') {
    INPUT_FIELD.setRangeText(' ', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else if (document.getElementById(`${code}`) !== null) {
    INPUT_FIELD.setRangeText(document.getElementById(`${code}`).querySelector('span').innerText, INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else {
    return false;
  }
  return false;
}

document.addEventListener('keydown', printValue);
document.addEventListener('mousedown', (event) => {
  const INPUT_FIELD = document.querySelector('.textarea');
  const { target } = event;
  const KEY = target.closest('.key');
  if (KEY === null) {
    return false;
  }
  const code = KEY.getAttribute('id');

  if (code === 'Delete') {
    INPUT_FIELD.setRangeText('', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd + 1, 'end');
  } else if (code === 'Backspace') {
    if (INPUT_FIELD.selectionStart === 0) {
      return false;
    }
    INPUT_FIELD.setRangeText('', INPUT_FIELD.selectionStart - 1, INPUT_FIELD.selectionEnd, 'end');
  } else if (code === 'Tab') {
    INPUT_FIELD.setRangeText('\t', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else if (code === 'CapsLock' || code === 'ControlLeft' || code === 'ControlRight' || code === 'AltLeft' || code === 'AltRight' || code === 'ShiftLeft' || code === 'ShiftRight') {
    INPUT_FIELD.setRangeText('', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else if (code === 'Enter') {
    INPUT_FIELD.setRangeText('\n', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else if (code === 'MetaLeft') {
    INPUT_FIELD.setRangeText('', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else if (code === 'Space') {
    INPUT_FIELD.setRangeText(' ', INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  } else {
    INPUT_FIELD.setRangeText(KEY.querySelector('span').innerText, INPUT_FIELD.selectionStart, INPUT_FIELD.selectionEnd, 'end');
  }
  INPUT_FIELD.focus();
  INPUT_FIELD.onblur = () => INPUT_FIELD.focus();
  return false;
});

document.addEventListener('keydown', addHighlight);
document.addEventListener('keyup', removeHighlight);

let SELECTED_MOUSE_KEY = 0;

document.addEventListener('mousedown', (event) => {
  const { target } = event;
  SELECTED_MOUSE_KEY = target.closest('.key');
  if (SELECTED_MOUSE_KEY == null) {
    return false;
  }
  SELECTED_MOUSE_KEY.classList.add('key-active');
  return false;
});

document.addEventListener('mouseup', () => {
  if (SELECTED_MOUSE_KEY == null) {
    return false;
  }
  SELECTED_MOUSE_KEY.classList.remove('key-active');
  return false;
});

document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey && event.code === 'AltLeft') || (event.altKey && event.code === 'ControlLeft')) {
    if (lang === 'en') {
      for (let i = 0; i < buttons.length; i += 1) {
        document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru}</span>`;
      }
      lang = 'ru';
      localStorage.setItem('layout', 'ru');
    } else {
      for (let i = 0; i < buttons.length; i += 1) {
        document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en}</span>`;
      }
      lang = 'en';
      localStorage.setItem('layout', 'en');
    }
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.getModifierState('CapsLock')) {
    document.getElementById('CapsLock').classList.add('caps-active');
    if (lang === 'en') {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].en.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en.toUpperCase()}</span>`;
        }
      }
    } else {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].ru.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru.toUpperCase()}</span>`;
        }
      }
    }
  } else {
    document.getElementById('CapsLock').classList.remove('caps-active');
    if (lang === 'en') {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].en.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en.toLowerCase()}</span>`;
        }
      }
    } else {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].ru.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru.toLowerCase()}</span>`;
        }
      }
    }
  }
});

document.addEventListener('mousedown', (event) => {
  const { target } = event;
  const KEY = target.closest('.key');

  if (KEY === null) {
    return false;
  }

  if (KEY.getAttribute('id') === 'CapsLock') {
    KEY.classList.toggle('caps-active');
    if (KEY.classList.contains('caps-active')) {
      if (lang === 'en') {
        for (let i = 0; i < buttons.length; i += 1) {
          if (buttons[i].en.length === 1) {
            document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en.toUpperCase()}</span>`;
          }
        }
      } else {
        for (let i = 0; i < buttons.length; i += 1) {
          if (buttons[i].ru.length === 1) {
            document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru.toUpperCase()}</span>`;
          }
        }
      }
    } else if (lang === 'en') {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].en.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en.toLowerCase()}</span>`;
        }
      }
    } else {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].ru.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru.toLowerCase()}</span>`;
        }
      }
    }
  }
  return false;
});

document.addEventListener('mousedown', (event) => {
  const { target } = event;
  const KEY = target.closest('.key');

  if (KEY === null) {
    return false;
  }
  if (KEY.getAttribute('id') === 'ShiftLeft') {
    KEY.classList.toggle('shift-active');
    if (KEY.classList.contains('shift-active')) {
      if (lang === 'en') {
        for (let i = 0; i < buttons.length; i += 1) {
          if (buttons[i].en.length === 1) {
            document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].shiftEn}</span>`;
          }
        }
      } else {
        for (let i = 0; i < buttons.length; i += 1) {
          if (buttons[i].ru.length === 1) {
            document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].shiftRu}</span>`;
          }
        }
      }
    } else if (lang === 'en') {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].en.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en}</span>`;
        }
      }
    } else {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].ru.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru}</span>`;
        }
      }
    }
  }
  return false;
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.shiftKey) {
    if (event.getModifierState('CapsLock')) {
      if (lang === 'en') {
        for (let i = 0; i < buttons.length; i += 1) {
          if (buttons[i].en.length === 1) {
            document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].shiftEn.toLowerCase()}</span>`;
          }
        }
      } else {
        for (let i = 0; i < buttons.length; i += 1) {
          if (buttons[i].ru.length === 1) {
            document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].shiftRu.toLowerCase()}</span>`;
          }
        }
      }
    } else if (lang === 'en') {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].en.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].shiftEn}</span>`;
        }
      }
    } else {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].ru.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].shiftRu}</span>`;
        }
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (event.getModifierState('CapsLock')) {
      if (lang === 'en') {
        for (let i = 0; i < buttons.length; i += 1) {
          if (buttons[i].en.length === 1) {
            document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en.toUpperCase()}</span>`;
          }
        }
      } else {
        for (let i = 0; i < buttons.length; i += 1) {
          if (buttons[i].ru.length === 1) {
            document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru.toUpperCase()}</span>`;
          }
        }
      }
    } else if (lang === 'en') {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].en.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].en}</span>`;
        }
      }
    } else {
      for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i].ru.length === 1) {
          document.querySelectorAll('.key')[i].innerHTML = `<span>${buttons[i].ru}</span>`;
        }
      }
    }
  }
});
