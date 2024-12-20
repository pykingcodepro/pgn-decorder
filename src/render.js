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
      // const parsedString = JSON.stringify(parsed);
      document.getElementById('decodedContent').innerText = parsed[0].result;
    };
    reader.readAsText(file);
  } else {
    console.log('No file selected');
  }
});