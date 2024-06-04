const fs = require('fs');
const filePath = process.argv[2];
function countNewlines(err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const fileString = data.toString();
    const newlineCount = fileString.split('\n').length - 1; 
    console.log(newlineCount);
}
fs.readFile(filePath, 'utf8', countNewlines);
