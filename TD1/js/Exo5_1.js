var n1, d1, n2, d2;
do{
n1 = prompt(unescape("Numérateur de la fraction numéro 1 "));
} while(isNaN(n1));
do{
    var bol1=1;
    d1 = prompt(unescape("Dénominateur de la fraction numéro 1 "));
    if(!isNaN(d1)) 
        if(d1!=0) 
            bol1=0;
}while(bol1);

do{
    n2 = prompt(unescape("Numérateur de la fraction numéro 2 "));
}while(isNaN(n2));

do{
    var bol2=1;
    d2 = prompt(unescape("Dénominateur de la fraction numéro 2 "));
    if(!isNaN(d2)) 
        if(d2!=0) 
            bol2=0;
}while(bol2);

nsomme=n1*d2 + d1*n2;
dsomme=d1*d2;
ndiff=n1*d2 - d1*n2;
ddiff=d1*d2;
nprod=n1*n2;
dprod=d1*d2;

var message=unescape("La première fraction est : ")+n1+"\/"+d1+'<br />';

message+="La seconde fraction est : "+n2+"\/"+d2+'<hr />';
message += unescape("Résultats : <br/>Somme : ")+nsomme+"\/"+dsomme;
message += unescape("<br/>Différence : ")+ndiff+"\/"+ddiff;
message += "<br/>Produit : "+nprod+"\/"+dprod;
if (n2!=0){
    nquot=n1*d2;
    dquot=d1*n2;
    message += "<br/>Quotient : "+nquot+"\/"+dquot;
}
else 
    message+=" <br/>Le quotient n'existe pas ."
    
document.getElementById("phrase").innerHTML = message;