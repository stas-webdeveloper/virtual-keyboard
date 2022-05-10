import macos from './js/macos-layout';
import win from './js/windows-layout';

// shiftKey Win === OS X
// altKey Alt Win === Option OS X
// ctrlKey Ctrl Win === Command OS X
// on Windows 'metaKey' does not work? - keyCode, charCode, which instead;
// Control btn OS X sets the property in the keypress and keydown events, but not in the keyup

// const lang = localStorage.getItem('keyboard-lang')
// ? localStorage.getItem('keyboard-lang')
// : 'eng';

let os;
if (navigator.appVersion.indexOf('Mac') !== -1) {
  os = 'MacOS';
} else if (navigator.appVersion.indexOf('Win') !== -1) {
  os = 'Windows';
} else os = 'Windows';

let keyboard;
if (os === 'MacOS') {
  keyboard = macos;
} else if (os === 'Windows') {
  keyboard = win;
}
let text;

const keyboardHandler = (e) => {
  const btn = document.querySelector(`[data-code="${e.code}"]`);
  const cancelHighlite = () => {
    if (e.code === btn.dataset.code) {
      btn.style.backgroundColor = '#f7f7f7';
      document.removeEventListener('keyup', cancelHighlite);
    }
  };
  document.addEventListener('keyup', cancelHighlite);
  btn.style.backgroundColor = 'rgba(177, 232, 244, 0.4)';
  if (e.key !== undefined) {
    if (e.key === 'Tab') {
      e.preventDefault();
      text.innerHTML += '    ';
    } else if (e.key === 'Alt') {
      e.preventDefault();
    } else if (e.key === 'Control') {
      // e.preventDefault()

    } else if (e.key === ' ') {
      e.preventDefault();
      text.textContent += ' ';
    } else if (e.key === 'ArrowUp') {
      text.innerHTML += '&#9650;';
    } else if (e.key === 'ArrowDown') {
      text.innerHTML += '&#9660;';
    } else if (e.key === 'ArrowLeft') {
      text.innerHTML += '&#9668;';
    } else if (e.key === 'ArrowRight') {
      text.innerHTML += '&#9658;';
    } else if (e.key === 'Enter') {
      text.innerHTML += '\n';
    } else if (e.key !== 'Shift'
            && e.key !== 'CapsLock'
            && e.key !== 'Delete'
            && e.key !== 'Backspace'
            && e.key !== 'Insert'
            && e.key !== 'PageUp'
            && e.key !== 'PageDown'
            && e.key !== 'Home'
            && e.key !== 'End'
            && e.key !== 'ContextMenu'
            && e.key !== 'Meta') text.textContent += e.key;
  }
};

const btnPressHandler = (e) => {
  if (e.target.classList.contains('key') || e.target.parentElement.classList.contains('key')) {
    text.textContent += e.target.dataset.code;
  }
};

window.onload = () => {
  document.body
    .innerHTML = `<div class="app-container">
            <div class="text-container">
                <textarea class="text" readonly cols="160" rows="15" placeholder="Enter your wish..."></textarea>
            </div>
            <div class="keyboard-container">
                ${keyboard}
            </div>
        <div>`;
  text = document.querySelector('.text');

  window.addEventListener('keydown', keyboardHandler);
  document
    .querySelector('.keyboard-container')
    .addEventListener('mousedown', btnPressHandler);
};
