<?php
// Définir le type de contenu comme JSON
header('Content-Type: application/json');

// Vérifier si les données ont été envoyées en POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : '';
    $lastname = isset($_POST['lastname']) ? $_POST['lastname'] : '';
    $country = isset($_POST['country']) ? $_POST['country'] : '';
    $subject = isset($_POST['subject']) ? $_POST['subject'] : '';
    
    // Vérifier que toutes les données nécessaires sont présentes
    if (!empty($firstname) && !empty($lastname) && !empty($country) && !empty($subject)) {
        // Préparation de l'email
        $to = "moranastudio.contact@gmail.com";
        $email_subject = "Nouveau message de formulaire de contact: " . $subject;
        $email_body = "Vous avez reçu un nouveau message.\n\n".
                      "Détails:\n\nPrénom: $firstname\n".
                      "Nom: $lastname\n".
                      "Pays: $country\n".
                      "Message:\n$subject\n";
        $headers = "From: noreply@votredomaine.com\n";
        $headers .= "Reply-To: noreply@votredomaine.com";
        
        // Envoi de l'email
        if(mail($to, $email_subject, $email_body, $headers)) {
            // Email envoyé avec succès
            echo json_encode(['success' => true, 'message' => 'Votre message a été envoyé avec succès']);
        } else {
            // Échec de l'envoi de l'email
            echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi de l\'email']);
        }
    } else {
        // Certaines données sont manquantes
        echo json_encode(['success' => false, 'message' => 'Données incomplètes']);
    }
} else {
    // Méthode HTTP incorrecte
    echo json_encode(['success' => false, 'message' => 'Méthode HTTP non autorisée']);
}
?>