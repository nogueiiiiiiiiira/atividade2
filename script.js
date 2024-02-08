var nomeGlobal;
var mensagemGlobal;

function Conferir(){
    var nome = document.getElementById("nome").value
    var mensagem = document.getElementById("mensagem").value

    nomeGlobal = nome;
    mensagemGlobal = mensagem;

    document.getElementById("ConfirmeNome").textContent = nome;
    document.getElementById("ConfirmeMens").textContent = mensagem;
}

function enviar(){
    var numeroTelefone = "554195340694";
    var linkWhats = "https://wa.me/" + numeroTelefone + "?text=NOME: " + nomeGlobal + " - " + mensagemGlobal;

    window.open(linkWhats, "_blank")
    }