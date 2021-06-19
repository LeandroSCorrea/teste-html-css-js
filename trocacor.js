function mudaCorLightBlue()
{
  document.getElementById("alteraCor").style.background = "lightblue";
}
function mudaCorWhite()
{
  document.getElementById("alteraCor").style.background  = "white";
}
//invertenedo a cor do body
var inverteCor = document.getElementById("alteraCor");
inverteCor.addEventListener("click",mudaCorLightBlue);
inverteCor.addEventListener("dblclick",mudaCorWhite);


//teste 2
/*
document.addEventListener("click", function corLightBlue() {
  document.getElementById("alteraCor").style.background = "lightblue";
});
document.addEventListener("dblclick", function corWhite() {
  document.getElementById("alteraCor").style.background = "white";
});
*/
