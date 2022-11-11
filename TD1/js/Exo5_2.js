function pgcd(n,p){
    var a=Math.abs(n),b=Math.abs(p),q,r;
    if(a<b){
        var swap=b;
        b=a;
        a=swap;
    }
    do{
        r=a%b;
        a=b;
        if (r!=0){
            b=r;
        }
    }while(r!=0);
return b;
}
var n1, d1, n2, d2,p1,p2,psom,pdiff,pprod,pdiv;
do{
    n1 = prompt(unescape("Numérateur de la fraction numéro 1 "));
}while(isNaN(n1));
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
    if (!isNaN(d2)) 
        if (d2!=0)
            bol2=0;
}while(bol2);

p1=pgcd(n1,d1);
p2=pgcd(n2,d2);
if(p1!=1)
{
    n1=n1/p1;
    d1=d1/p1;
}
if(p2!=1)
{
    n2=n2/p2;
    d2=d2/p2;
}
nsomme=n1*d2 + d1*n2;
dsomme=d1*d2;
psom=pgcd(nsomme,dsomme);
if(psom!=1)
{
    nsomme=nsomme/psom;
    dsomme=dsomme/psom;
}
ndiff=n1*d2 - d1*n2;
ddiff=d1*d2;
pdiff=pgcd(ndiff,ddiff)
if (pdiff!=1)
{
    ndiff=ndiff/pdiff;
    ddiff=ddiff/pdiff;
}
nprod=n1*n2;
dprod=d1*d2;
pprod=pgcd(nprod,dprod)
if (pprod!=1)
{
    nprod=nprod/pprod;
    dprod=dprod/pprod;
}
var message=unescape("La première fraction est : ")+n1+"\/"+d1+'<br />';
message+="La seconde fraction est : "+n2+"\/"+d2+'<hr />';
message += unescape("Résultats : <br/>Somme : ")+nsomme+"\/"+dsomme;
message += unescape("<br/>Différence : ")+ndiff+"\/"+ddiff;
message += "<br />Produit : "+nprod+"\/"+dprod;
if (n2!=0){
    nquot=n1*d2;
    dquot=d1*n2;
    pdiv=pgcd(nquot,dquot)
    if (pprod!=1)
    {
        nquot=nquot/pdiv;
        dquot=dquot/pdiv;
    }
    message += "<br />Quotient : "+nquot+"\/"+dquot;
    }
    else 
        message+=" <br />Le quotient n'existe pas ."
document.getElementById("phrase").innerHTML = message;