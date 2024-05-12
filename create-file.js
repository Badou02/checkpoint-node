const fs = require('fs');

// Crée un fichier "welcome.txt" avec le contenu "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('Le fichier welcome.txt a été créé avec succès !');
});
