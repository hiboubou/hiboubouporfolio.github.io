function calculatrice() {
        //Trouve les données dans le formulaire
        var operationChoisi = document.getElementsByName("choix");
        var operation = "";
        for(var i = 0; i < operationChoisi.length; i++) {
          if(operationChoisi[i].checked){
            operation = operationChoisi[i].value;
          }
        }
        console.log(operation);
        var nombreUn = parseFloat(document.getElementById("nombre1").value);
        var nombreDeux = parseFloat(document.getElementById("nombre2").value);
        var affiche = document.getElementById("divAffiche");
        
        //Calcule basé sur l'opération choisi
        var calcule = 0;
        switch(operation) {
          case "+":
            calcule = nombreUn + nombreDeux;
            break;
          case "-":
            calcule = nombreUn - nombreDeux;
            break;
          case "*":
            calcule = nombreUn * nombreDeux;
            break;
          case "/":
            calcule = nombreUn / nombreDeux;
            break;
          case "%":
            calcule = nombreUn % nombreDeux;
            break;
          case "**":
            calcule = nombreUn ** nombreDeux;
            break;
        }
        
        //Affiche le résultat
        var resultat = "Le résultat de " +nombreUn +operation +nombreDeux +" est de : " +calcule;
        affiche.innerHTML = resultat;
        }
