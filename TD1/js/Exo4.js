var vdiv = document.getElementById("rectangle");
var LR,lR,l1,l2,l3,M,m,mil;

function saisieReelPositif(mes ){
    var val;
    do
        val=parseFloat(prompt(unescape("Entrez un réel strictement positif\n")+mes ));
    while(isNaN(val) || val<=0);
    return val;
}
LR=saisieReelPositif('Entrez la longeur du rectangle');
lR=saisieReelPositif('Entrez la largeur du rectangle');

var mes ="Les dimensions du rectangle sont de "+lR+" cm et de "+LR+" cm.<br />";

mes +=unescape("Le périmètre du rectangle est de ")+(2*(lR+LR))+" cm.<br />";
mes +="L'aire du rectangle est de "+(lR*LR)+' cm<span class="ex">2</span>.'
vdiv.innerHTML+=mes;

do {
    l1=saisieReelPositif(unescape("Entrez la largeur du premier côté du triangle"));
    l2=saisieReelPositif(unescape("Entrez la largeur du deuxième côtés du triangle"));
    l3=saisieReelPositif(unescape("Entrez la largeur du troisième côtés du triangle"));
    M = Math.max(l1,l2,l3);
    m = Math.min(l1,l2,l3);
    mil=l1+l2+l3-M-m;
}while (M>=m+mil);

var p=(M+m+mil)/2;
var aire;

with(Math){
    if (abs (pow(M,2)-pow(m,2)-pow(mil,2))<0.001)
        aire=mil*m/2;
    else 
        aire=sqrt(p*(p-M)*(p-m)*(p-mil));
}
vdiv = document.getElementById("triangle");
mes =unescape("Les côtés du triangle sont ")+ l1 +' cm, '+l2+' cm et '+l3+' cm.<br />';
mes +=unescape("Le périmètre du triangle est de ")+(2*p)+" cm.<br />";
mes +="L'aire du triangle es t de "+aire+' cm<span class="ex">2</span>.'
vdiv.innerHTML += mes ;