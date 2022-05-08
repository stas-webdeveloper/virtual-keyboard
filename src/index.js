// shiftKey Win === OS X
// altKey Alt Win === Option OS X
// ctrlKey Ctrl Win === Command OS X
// on Windows 'metaKey' does not work? - keyCode, charCode, which instead;
// Control btn OS X sets the property in the keypress and keydown events, but not in the keyup

window.onload = function() {
    document.querySelector('.keyboard-container').innerHTML = `<div class="container">
  <div class="keyboard">
    <div class="keyboard-row">
      <div class="key"><span>~<br/>\`</span></div>
      <div class="key"><span>!<br/>1</span></div>
      <div class="key"><span>@<br/>2</span></div>
      <div class="key"><span>#<br/>3</span></div>
      <div class="key"><span>$<br/>4</span></div>
      <div class="key"><span>%<br/>5</span></div>
      <div class="key"><span>^<br/>6</span></div>
      <div class="key"><span>&amp;<br/>7</span></div>
      <div class="key"><span>*<br/>8</span></div>
      <div class="key"><span>(<br/>9</span></div>
      <div class="key"><span>)<br/>0</span></div>
      <div class="key"><span>_<br/>-</span></div>
      <div class="key"><span>+<br/>=</span></div>
      <div class="key extra-size lowercase lower-right"><span class="lower-row-text">delete</span></div>
    </div>
    <div class="keyboard-row">
      <div class="key extra-size lowercase lower-left"><span class="lower-row-text">tab</span></div>
      <div class="key">Q</div>
      <div class="key">W</div>
      <div class="key">E</div>
      <div class="key">R</div>
      <div class="key">T</div>
      <div class="key">Y</div>
      <div class="key">U</div>
      <div class="key">I</div>
      <div class="key">O</div>
      <div class="key">P</div>
      <div class="key"><span>{<br/>[</span></div>
      <div class="key"><span>}<br/>]</span></div>
      <div class="key"><span>|<br/>\\</span></div>
    </div>
    <div class="keyboard-row">
      <div class="key lowercase lower-left extra-size-two"><span class="lower-row-text">caps lock</span><span class="absolute-left caps-dot">&bull;</span></div>
      <div class="key">A</div>
      <div class="key">S</div>
      <div class="key">D</div>
      <div class="key">F</div>
      <div class="key">G</div>
      <div class="key">H</div>
      <div class="key">J</div>
      <div class="key">K</div>
      <div class="key">L</div>
      <div class="key"><span>:<br/>;</span></div>
      <div class="key"><span>"<br/>'</span></div>
      <div class="key extra-size-two lowercase lower-right"><span class="lower-row-text">return</span><span class="absolute-right">enter</span></div>
    </div>
    <div class="keyboard-row">
      <div class="key double-size lowercase lower-left"><span class="lower-row-text">shift</span></div>
      <div class="key">Z</div>
      <div class="key">X</div>
      <div class="key">C</div>
      <div class="key">V</div>
      <div class="key">B</div>
      <div class="key">N</div>
      <div class="key">M</div>
      <div class="key"><span>&lt;<br/>,</span></div>
      <div class="key"><span>&gt;<br/>.</span></div>
      <div class="key"><span>?<br/>/</span></div>
      <div class="key double-size lowercase lower-right"><span class="lower-row-text">shift</span></div>
    </div>
    <div class="keyboard-row bottom-row">
      <div class="key lower-left lowercase"><span class="lower-row-text">fn</span></div>
      <div class="key lower-left lowercase"><span class="lower-row-text">control</span></div>
      <div class="key lower-left lowercase"><span class="lower-row-text">option</span><span class="absolute-left">alt</span></div>
      <div class="key lower-center lowercase extra-size-two"><span class="lower-row-text">command</span><span class="absolute-right icon">&#8984;</span></div>
      <div class="key space-bar"></div>
      <div class="key lower-center lowercase extra-size-two"><span class="lower-row-text">command</span><span class="absolute-left icon">&#8984;</span></div>
      <div class="key lower-right lowercase"><span class="lower-row-text">option</span><span class="absolute-right">alt</span></div>
      <div class="arrows">
          <div class="key">&#9668;</div>
          <div class="up-down">
            <div class="key">&#9650;</div>
            <div class="key">&#9660;</div>
          </div>
          <div class="key">&#9658;</div>
        </div>
      </div>
  </div>
</div>`

}
