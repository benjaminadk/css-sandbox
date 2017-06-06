
var inputs = document.querySelectorAll('input');
var e = document.getElementById('testBox');

function godSwitch(){
  var suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  var Span = document.querySelector(`[id*= ${this.name}]`);
  Span.innerHTML =  this.value + suffix;

output.innerHTML ="<pre>HTML [ ] = < > <br><br>[div id='cssSandbox']<br>[p id='cssSandboxText']" + text.value + "[/p]<br>[/div]<br><br>CSS<br><br>#cssSandbox {<br>height: "+ height.value + "px;<br>width: "+ width.value + "px;<br>padding: "+ padding.value + "px;<br>border-radius: "+ borderR.value +"px;<br>border: "+ borderW.value +"px " + borderS.value +" "+ borderC.value +";<br>background-color: "+ bgColor.value +";<br>opacity: "+ opacity.value + ";<br>box-shadow: "+ boxShadow.value +"px " + boxShadow.value + "px " + boxShadowBlur.value + "px " + boxShColor.value + ";<br>overflow: auto;<br>outline: "+ outlineSize.value + "px " + outlineStyle.value + " " + outlineColor.value + ";<br>outline-offset: " + outlineOffset.value + "px;}<br><br> #cssSandboxText{<br>font-size: " + fontSize.value + "px;<br>font-family: " + fontFamily.value + ";<br>color: " + color.value + ";<br>text-align: " + textAlign.value + ";<br>line-height: " + lineH.value + ";<br>text-shadow: " + textOutlineColor.value +" 1px 0px 0px,<br> "+ textOutlineColor.value + " 0.540302px 0.841471px 0px,<br> "+ textOutlineColor.value +" -0.416147px 0.909297px 0px,<br> " + textOutlineColor.value + " -0.989992px 0.14112px 0px,<br> " + textOutlineColor.value +" -0.653644px -0.756802px 0px,<br> " + textOutlineColor.value + " 0.283662px -0.958924px 0px,<br> "+ textOutlineColor.value + " 0.96017px -0.279415px 0px,<br> " +textShadowSize.value + "px " + textShadowSize.value + "px " + textShadowBlur.value + "px " + textShadowColor.value + ";}</pre>";

}
//CHANGES THE ACTUAL CONTENT
function changeText(){
  var a = document.getElementById('testType');
  var b =document.getElementById('text');
  a.innerHTML = b.value;
}
//CHANGES THE ALIGNMENT
function alignText(){
  var e = document.getElementById('textAlign');
  var f = e.options[e.selectedIndex].text;
  document.documentElement.style.setProperty('--textAlign',f);
}
//CHANGES THE BORDER STYLE
function borderStyle(){
  var c = document.getElementById('borderS');
  var d = c.options[c.selectedIndex].text;
  document.documentElement.style.setProperty('--borderS',d);
}
//CHANGES THE OUTLINE STYLE
function outlineStyler(){
  var k = document.getElementById('outlineStyle');
  var l = k.options[k.selectedIndex].text;
  document.documentElement.style.setProperty('--outlineStyle',l);
}
//CHANGES THE FONT FAMILY
function fontFamilyAsign(){
  var g = document.getElementById('fontFamily');
  var h = g.options[g.selectedIndex].text;
  document.documentElement.style.setProperty('--fontFamily',h);
}
//TOGGLES TEXT-OUTLINE
function outlineDis(){
  var m = document.getElementById('textOutlineColor');
  var n = document.getElementById('textOutlineButton');
  if(m.getAttribute('disabled')){
  m.removeAttribute('disabled');
  n.textContent='TOGGLE-ON';
  document.documentElement.style.setProperty('--textOutlineColor', m.value);
  }
  else{
    m.setAttribute('disabled',true);
    n.textContent = 'TOGGLE-OFF';
    document.documentElement.style.setProperty('--textOutlineColor','transparent');
  }
  }
//TOGGLES OUTPUT CODE OPACITY
function toggleCode(){
  var codeButton = document.getElementById('codeButton');
  var output = document.getElementById('output');

  if(codeButton.value === "SHOW CODE"){
    codeButton.value = "HIDE CODE";
    output.style.setProperty("opacity",1);
    testBox.style.setProperty("visibility","hidden");
  }
  else{
    codeButton.value = "SHOW CODE";
    output.style.setProperty("opacity",0);
    testBox.style.setProperty("visibility","visible");
  }
}

//TOGGLES HELP DIALOG
function toggleHelp(){
  var help = document.getElementById('help'),
      controls = document.getElementById('wrapper'),
      helpButton = document.getElementById('helpButton'),
      modalButton = document.getElementById('modalButton'),
      output = document.getElementById('output');
  
  if(helpButton.value === 'SHOW HELP'){
    helpButton.value = 'HIDE HELP';
    help.style.setProperty('opacity',1);
    help.style.setProperty('z-index',2);
    controls.style.setProperty('opacity',0);
    output.style.setProperty('opacity',0);

  }
  else if(modalButton.value === 'HIDE HELP'){
    helpButton.value = 'SHOW HELP';
    help.style.setProperty('opacity',0);
    help.style.setProperty('z-index',-1);
    controls.style.setProperty('opacity',1);
  }
      
  
}

//EVENT LISTENERS FOR CHANGE AND MOUSE ON INPUTS
inputs.forEach(input => input.addEventListener('change', godSwitch));
inputs.forEach(input => input.addEventListener('mousemove', godSwitch));