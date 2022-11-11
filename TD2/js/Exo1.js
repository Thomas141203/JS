function saisieInt(mes){
    var n0;
    do{
        n0=(prompt(mes ));
    }while(isNaN(n0) || n0<=0 || n0!=Math.floor(n0));
    
    return n0;
    }
    var n=saisieInt("entrez votre entier strictement pos itif");
    var tab=new Array(6);
    for(var i=0;i<tab.length;i++)
        tab[i]=0;

    for(var i=0;i< n;i++)
        tab[Math.floor(Math.random()*6)]++

    message ="Resultats des tirages <br />";
    for(var i=0;i<tab.length;i++)
        message +="la face "+(i+1)+" est sorti "+tab[i]+" fois <br />";

    document.getElementById("de").innerHTML = message;
    message+="<table><tr>";
    for(var i=0;i<tab.length;i++)
        message+="<td> face"+(i+1)+"</td>";

    message+="</tr><tr>";
    for(var i=0;i<tab.length;i++)
        message+="<td>"+tab[i]+"</td>";

    message +="</tr></table>";


document.getElementById("de").innerHTML = message;