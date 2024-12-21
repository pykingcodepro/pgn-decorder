// const pgnParser = require('pgn-parser');

document.getElementById('btn').addEventListener('click', () => {
  const fileInput = document.getElementById('pgnFileInput');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = async(event) => {
      const fileContent = event.target.result;
      console.log(fileContent); 
      const parsed = await electron.pgnParser(fileContent);
      const parsedString = JSON.stringify(parsed, null, 2);
      document.getElementById('decodedContent').value = parsedString;
    };
    reader.readAsText(file);
  } else {
    console.log('No file selected');
  }
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const copyText = document.getElementById('decodedContent');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  console.log('Copied the text: ' + copyText.value);
});

document.getElementById('clearBtn').addEventListener('click', () => {
  document.getElementById('decodedContent').value = '';
  document.getElementById('pgnFileInput').value = '';
});