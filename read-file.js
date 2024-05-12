const fs = require('fs');

// Lecture du fichier "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu de welcome.txt :', data);
});
