function mostraDica()
{
    document.getElementById("dicaTexto").style.display = "inline";
}
function escondeDica()
{
    document.getElementById("dicaTexto").style.display = "none";
}
function validalogin()
{
  var texto = "ALÔ!";
  var textoMinusculo = texto.toLowerCase();

}
function validaSenha()
{
    var campoSenha = document.getElementById("txtSenha");
    var valorSenha = txtSenha.value;
    if(valorSenha.length < 6)
    {
        e.preventDefault();
        alert("Senha precisa ter ao menos 6 caracteres");
        return false;
    }
    else
    {
        return true;
    }
}
/**Bloco global*/
escondeDica();
//associando evento blur no campo senha
var elSenha = document.getElementById("txtSenha");
//elSenha.addEventListener("blur",validaSenha);
//associando evento over no ícone de interrogação
var elIcone = document.getElementById("imgIcone");
elIcone.addEventListener("mouseover",mostraDica);
elIcone.addEventListener("mouseout",escondeDica);
var elForm = document.getElementById("formPrincipal");
elForm.addEventListener("submit",validaSenha);
