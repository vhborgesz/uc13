const campoValor = document.getElementById("valor-adicional");
const botaoInformar = document.getElementById("botao-informar");
const caixaCartao = document.getElementById("cartao");
const caixaPix = document.getElementById("pix");
const campoCpf = document.getElementById("cpf-pix");
const campoCartaoNumero = document.getElementById("cartao-numero");
const campoCartaoTitular = document.getElementById("cartao-titular");
const campoCodigoSeguranca = document.getElementById("codigo-seguranca");
const campoVencimentoCartao = document.getElementById("vencimento-cartao");


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
            if (campoCartaoTitular.value.trim() == "") {
                alert("Por favor, insira o nome do titular do cartão.");
            }
            if (campoCartaoNumero.value.length < 16) {
                alert("O número do cartão deve ter 16 dígitos.");
            }
            if (isNaN(campoCartaoNumero.value)) {
                alert("O número do cartão deve conter apenas números.");
            }
            if (campoCartaoNumero.value.includes(" ")) {
                alert("O número do cartão não deve conter espaços.");
            }
            if (campoCodigoSeguranca.value.trim() == "") {
                alert("Por favor, insira o código de segurança do cartão.");
            }
            if (campoCodigoSeguranca.value.length < 3) {
                alert("O código de segurança deve ter 3 dígitos.");
            }
            if (campoVencimentoCartao.value.trim() == "") {
                alert("Por favor, insira o vencimento do cartão.");
            }
        } else {
            alert("Pagamento via Cartão realizado com sucesso!");
        }
    }
});