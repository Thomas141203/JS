function saisieInt(mes){
    var n0;
    do{
        n0=(prompt(mes ));
    }while(isNaN(n0) || n0<=0 || n0!=Math.floor(n0));
    
    return n0;
}

var nbcases = saisieInt("nombre de cases du jeu");
var i = 0;
var fini = 0;
var nbc = 0;

while(!fini){
    var r = Math.random();
    var face = Math.floor(r*6+1);
    if(face == 6){
        document.getElementById("tortue").innerHTML="Le lièvre a gagné";
        fini = 1;
    }
    else{
        nbc++;
        if (nbc == nbcases){
            document.getElementById("tortue").innerHTML="La tortue a gagné";
            fini = 1;
        }
    }
}