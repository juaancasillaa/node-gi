const fs = require('fs');
const path = require('path'); 
const dirPath = process.argv[2];
const fileExtension = '.' + process.argv[3]; 
function listFiles(err, files) {
    if (err) {
        console.error('Error listing files:', err);
        return;
    }
    const filteredFiles = files.filter(file => path.extname(file) === fileExtension);
    filteredFiles.forEach(file => console.log(file));
}
fs.readdir(dirPath, listFiles);