var a,b,c;
var info="";
function saisieFloat(mes ){
    var n;
    do{
        n=parseFloat(prompt(mes ));
    }while(isNaN(n));
    return parseFloat(n);
}
do{
    a=saisieFloat(unescape('Entrer le coefficient non nul du monôme du second degré'));
}while(a==0);

b=saisieFloat(unescape('Entrer le coefficient du monôme du premier degré'));
c=saisieFloat('Entrer la constante');
delta= b*b-4*a*c;
var message="";
if (delta < 0){
    var re = -b/(2*a);
    var im=Math.sqrt(-delta)/(2*a);
    message +="deux solutions complexes conjuguees : <br />";
    message+='x<span class ="indice">1</span> = '+re+'+ i * '+im+'<br />x<span class = "indice">2</span>= '+re+'- i * '+im;
}
    else
        if(delta == 0){
            var x1 = -b/(2*a);
            message +="une solution double : "+x1+"<br />";
        }
        else{
            var x1 = (-b+Math.sqrt(delta))/(2*a);
            var x2 = (-b-Math.sqrt(delta))/(2*a);
            message +="deux solutions reelles distinctes : <br />";
            message+='x<span class ="indice">1</span> = '+x1+'<br />x<span class ="indice">2</span>= '+x2;
}
document.getElementById("solution").innerHTML = message;