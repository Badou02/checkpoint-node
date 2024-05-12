const generatePassword = require('generate-password');

function generateRandomPassword() {
    // Générer un mot de passe aléatoire avec generate-password
    const password = generatePassword.generate({
        length: 12, // Longueur du mot de passe
        numbers: true, // Inclure des chiffres
        symbols: true, // Inclure des symboles
        uppercase: true, // Inclure des lettres majuscules
        excludeSimilarCharacters: true, // Exclure les caractères similaires
    });

    // Afficher le mot de passe généré dans la console
    console.log('Mot de passe généré :', password);
}

// Appeler la fonction pour générer un mot de passe aléatoire
generateRandomPassword();
