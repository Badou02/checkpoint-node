const nodemailer = require('nodemailer');

// Configuration du transporteur SMTP pour l'envoi d'e-mails
const transporter = nodemailer.createTransport({
    service: 'gmail', // Service e-mail utilisé
    auth: {
        user: '', // Votre adresse e-mail
        pass: '', // Votre mot de passe pour l'adresse e-mail
    },
});

// Options pour l'e-mail à envoyer
const mailOptions = {
    from: 'votre_adresse_email@gmail.com', // Adresse e-mail de l'expéditeur
    to: 'adresse_email_destinataire@example.com', // Adresse e-mail du destinataire
    subject: 'Test d\'envoi d\'e-mail avec Node.js', // Sujet de l'e-mail
    text: 'Bonjour, ceci est un test d\'envoi d\'e-mail avec Node.js !', // Contenu texte de l'e-mail
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    } else {
        console.log('E-mail envoyé avec succès :', info.response);
    }
});
