const fs = require('fs');
const filePath = process.argv[2];
const fileContent = fs.readFileSync(filePath);
const fileString = fileContent.toString();
const newlineCount = fileString.split('\n').length - 1; 
console.log(newlineCount);