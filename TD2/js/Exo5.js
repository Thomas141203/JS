var vnavi = document.getElementById("div1");
var n=prompt(unescape("0 : code standard, 1 : code Etendu"))
var cas ="standard";

if (n!=0){
    n = 128;
    cas = unescape("etendu");
}

var tabNom='';
var message ="<hr/><p>Le tableau "+cas +"<br/></p><table><tr>";
for(var i=n; i< n+128; i++){
    message +="<td>"+i+": <span>"+ String.fromCharCode(i);+"</span></td>";
    if((i+1)%8==0) 
        message +="</tr><tr> ";
}

message +="</tr></table>";
vnavi.innerHTML += message ;