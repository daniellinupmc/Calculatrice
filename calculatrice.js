document.getElementsByClassName("calculer")[0].addEventListener("click", function (e) {
    e.preventDefault();

    let value1 = null;
    let op = "";
    let value2 = null;
    let res = null;
    let msg = "";

    // Expression régulière pour avoir un nombre négatif ou positif qui commence par un chiffre autre que 0
    const reg = /^-?[1-9][0-9]*$/;

    if (document.getElementById("nombre1").value == "") {
      msg += "Le premier input est vide\n";

      // match() vérifie si la valeur dans l'input respecte l'expression régulière (renvoie null si non respect)
    } else if (document.getElementById("nombre1").value.match(reg) == null) {
      msg += "Le premier nombre est incompatible\n";
    } else {
      value1 = parseInt(document.getElementById("nombre1").value);
    }

    op = document.getElementById("operateur").value;

    if (document.getElementById("nombre2").value == "") {
      msg += "Le deuxième input est vide\n";

      // match() vérifie si la valeur dans l'input respecte l'expression régulière (renvoie null si non respect)
    } else if (document.getElementById("nombre2").value.match(reg) == null) {
      msg += "Le deuxième nombre est incompatible\n";
    } else {
      value2 = parseInt(document.getElementById("nombre2").value);
    }

    if (value1 != null && value2 != null) {
      switch (op) {
        case "addition":
          res = value1 + value2;
          break;
        case "soustraction":
          res = value1 - value2;
          break;
        case "multiplication":
          res = value1 * value2;
          break;
        case "division":
          res = value1 / value2;
          break;
        default:
          msg += "Pas d'opérateur séléctionné\n";
          break;
      }
    }

    // S'il y a eu des erreurs auparavant, msg a stocké certains messages à afficher
    if (msg != "") {
      alert(msg);
    } else {
      var select = document.getElementById("operateur");
      alert(document.getElementById("nombre1").value+select.options[select.selectedIndex].innerHTML+document.getElementById("nombre2").value +"="+res.toString());
    }
});

document.getElementById("visible").addEventListener("click", function (e) {
  e.preventDefault;
  document.getElementById("form").style.visibility = "visible";
});

document.getElementById("hidden").addEventListener("click", function (e) {
  e.preventDefault;
  document.getElementById("form").style.visibility = "hidden";
});

const msgNombre = "Saisir un chiffre";
const msgOperation = "Séléctionner un opérateur: + - * /";

// affiche le message lorsque la souris est sur l'input/le select
document.getElementById("nombre1").addEventListener("mouseover", function () {
  document.getElementById("information").innerHTML = msgNombre;
});

document.getElementById("operateur").addEventListener("mouseover", function () {
  document.getElementById("information").innerHTML = msgOperation;
});

document.getElementById("nombre2").addEventListener("mouseover", function () {
  document.getElementById("information").innerHTML = msgNombre;
});

// affiche plus rien lorsque la souris n'est plus sur l'input/le select
document.getElementById("nombre1").addEventListener("mouseout", function () {
  document.getElementById("information").innerHTML = "";
});

document.getElementById("operateur").addEventListener("mouseout", function () {
  document.getElementById("information").innerHTML = "";
});

document.getElementById("nombre2").addEventListener("mouseout", function () {
  document.getElementById("information").innerHTML = "";
});
