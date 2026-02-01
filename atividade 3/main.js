const campoValor = document.getElementById("valor-adicional");
const botaoInformar = document.getElementById("botao-informar");
const caixaCartao = document.getElementById("cartao");
const caixaPix = document.getElementById("pix");
const campoCpf = document.getElementById("cpf-pix");
const campoCartaoNumero = document.getElementById("cartao-numero");
const campoCartaoTitular = document.getElementById("cartao-titular");
const campoCodigoSeguranca = document.getElementById("codigo-seguranca");
const campoVencimentoCartao = document.getElementById("vencimento-cartao");
const formatoValido = /^\d{2}\/\d{2}$/;


document.getElementById("pix").addEventListener("change", function () {
    document.getElementById("caixaPix").classList.add("ativa");
    document.getElementById("caixaCartao").classList.remove("ativa");
});

document.getElementById("cartao").addEventListener("change", function () {
    document.getElementById("caixaPix").classList.remove("ativa");
    document.getElementById("caixaCartao").classList.add("ativa");
});

botaoInformar.addEventListener("click", function () {
    if (campoValor.value.trim() == "") {
        alert("Por favor, insira o valor.");

        return
    }

    if (caixaPix.checked) {
        if (campoCpf.value.trim() == "") {
            alert("Por favor, insira o CPF para pagamento via Pix.");
        }
        else {
            alert("Pagamento via Pix realizado com sucesso!");
        }
    } else if (caixaCartao.checked) {
        if (campoCartaoNumero.value.trim() == "") {
            alert("Por favor, insira o número do cartão para pagamento via Cartão.");
            return;
        }
        if (campoCartaoTitular.value.trim() == "") {
            alert("Por favor, insira o nome do titular do cartão.");
            return;
        }
        if (campoCartaoNumero.value.length < 16) {
            alert("O número do cartão deve ter 16 dígitos.");
            return;
        }
        if (isNaN(campoCartaoNumero.value)) {
            alert("O número do cartão deve conter apenas números.");
            return;
        }
        if (campoCartaoNumero.value.includes(" ")) {
            alert("O número do cartão não deve conter espaços.");
            return;
        }
        if (campoCodigoSeguranca.value.trim() == "") {
            alert("Por favor, insira o código de segurança do cartão");
            return;
        }
        if (campoCodigoSeguranca.value.length < 3) {
            alert("O código de segurança deve ter 3 dígitos.");
            return;
        }
        if (campoVencimentoCartao.value.trim() == "") {
            alert("Por favor, insira o vencimento do cartão.");
            return;
        }
        if (!formatoValido.test(campoVencimentoCartao.value)) {
            alert("O vencimento do cartão deve estar no formato MM/AA.");
            return;
        } else {
            alert("Pagamento via Cartão realizado com sucesso!");
        }
    }
});