function saisieInt(mes){
    var n0;
    do{
        n0=(prompt(mes ));
    }while(isNaN(n0) || n0<=0 || n0!=Math.floor(n0));
    
    return n0;
}

let fini = 0;
let i=0;
let n=saisieInt("nombre de lancers");

while((i < n) && (!fini)){
    var r= Math.random();
    var ch1 = Math.floor(r*6+1);
    r= Math.random();
    var ch2 = Math.floor(r*6+1);
    r= Math.random();
    var ch3 = Math.floor(r*6+1);
    document.getElementById("421").innerHTML += ch1+" "+ch2+" "+ch3+"<br />";
    if (Math.max(ch1,ch2,ch3)==4)
        if (Math.min(ch1,ch2,ch3)==1)
            if (ch1+ch2+ch3 == 7){
                document.getElementById("421").innerHTML+="vous avez gagne";
                fini = 1;
            }
    i++;
}
if (!fini)
    document.getElementById("421").innerHTML+="vous avez perdu !";