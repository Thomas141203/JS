var divnote=document.getElementById("note");
do{
    note=parseInt(prompt("entrez votre note"));
    if (note == ""){
        alert("Vous n'avez taper aucune valeur");
        note='a';
    }
    else if(isNaN(note))
        alert("vous devez taper un nombre !");
    else if((note < 0)|| (note > 20))
        alert(unescape("votre note doit être comprise entre 0 et20"));
}while(isNaN(note) || (note < 0) || (note > 20));

divnote.innerHTML = "Votre note de "+note+" vous permet d'obtenir le commentaire suivant: <br/>";
switch(parseInt(note)){
    case 0: divnote.innerHTML += "Il faut vraiment vous y mettre";break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: divnote.innerHTML += "Manque de travail";break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10: divnote.innerHTML += "Doit faire quelques efforts";break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15: divnote.innerHTML += "C'est bien"; break;
    case 16:
    case 17:
    case 18:
    case 19: divnote.innerHTML += unescape("C'est très bien"); break;
    default: divnote.innerHTML += "Excellent !";
}