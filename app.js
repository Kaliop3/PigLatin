let rs = require("readline-sync");
let wyraz = rs.question("Podaj wyraz do zmiany ");
let spółgłoska = "c,b,d,f,g,h,j,k,l,m,n,o,p,r,s,t,w,z".split(",");
let odp = [];
if (spółgłoska.includes(wyraz[0])) {
    wyraz = wyraz.split("");
    let pierwsza = wyraz[0];
    wyraz.shift();
    odp = wyraz;
    odp.push("-" + pierwsza + "ay");
}
console.log(odp.join(""));