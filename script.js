let textbold = document.getElementById('textbold');
let textcolor = document.getElementById('textcolor');
let textarea = document.getElementById('textarea');

textbold.addEventListener('click', function() {
  if (textarea.style.fontWeight === 'bold') {
    textarea.style.fontWeight = 'normal';
  } else {
    textarea.style.fontWeight = 'bold';
  }
});

textarea.addEventListener('change', function(){
  localStorage.setItem('Japplan', textarea.value);
})