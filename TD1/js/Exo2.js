var n1, n2,n3,S,M,min,max;
do{
    n1=parseInt(prompt(unescape("1ère note")));
}while(n1<0 || n1>20);
do{
    n2=parseInt(prompt(unescape("2ème note")));
}while(n2<0 || n2>20);
do{
    n3=parseInt(prompt(unescape("3ème note")));
}while(n3<0 || n3>20);
    S=n1+n2+n3;
    M=S/3;
    var mes="Les notes sont "+n1+","+n2+","+n3;
    mes+="<br/> somme = "+S;
    mes+="<br/> moyenne = "+M;
    document.getElementById("moy").innerHTML=mes;

    min=Math.min(n1,n2,n3)
    max=Math.max(n1,n2,n3)
    dernote= S-max-min;
    
    var mes1="Les nombres sont"+n1+","+n2+","+n3;
    mes1+="<br/> Min "+min;
    mes1+="<br/> Max "+max;
    mes1+="<br/> Dernière Note "+dernote;
    document.getElementById("tri").innerHTML=mes1;
