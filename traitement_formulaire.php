<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Adresse e-mail de destination
    $to = "oliveur.twist.again@proton.me";
    // Sujet de l'e-mail
    $sujet = "Nouveau message depuis le formulaire de contact";
    // Contenu de l'e-mail
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Message:\n$message";
    
    // En-têtes de l'e-mail
    $headers = "From: $email";

    // Envoyer l'e-mail
    mail($to, $sujet, $contenu, $headers);
    
    // Redirection vers une page de confirmation ou autre
    header("Location: confirmation.php");
    exit();
}
?>
