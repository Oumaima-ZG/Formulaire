 //Script JavaScript pour la validation du formulaire 
   
        // Fonction de validation du formulaire
        function validateForm() {
            var password = document.getElementById('inputPassword').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            // Vérification si les mots de passe correspondent
            if (password !== confirmPassword) {
                alert("Les mots de passe ne correspondent pas.");
                return false;
            }

            return true;
        }

        // Fonction d'inscription
        function inscription() {
            // Vérifier si tous les champs obligatoires sont remplis
            var nom = document.getElementById('inputNom').value;
            var mail = document.getElementById('inputMail').value;
            var password = document.getElementById('inputPassword').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            if (!nom || !mail || !password || !confirmPassword) {
                alert("Veuillez remplir tous les champs obligatoires.");
                return;
            }

          
            alert("Inscription réussie !");
        }
    