const logo = document.querySelectorAll('#logo path');
console.log(logo.length)

for(let i = 0; i<logo.length; i++){
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

function copyToClipboard(text) {
  const elem = document.createElement('textarea');
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
}
