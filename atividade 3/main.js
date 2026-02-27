document.addEventListener("DOMContentLoaded", function () {
    
    const campoValor = document.getElementById("valor-adicional");
    const botaoInformar = document.getElementById("botao-informar");
    const radioPix = document.getElementById("pix");
    const radioCartao = document.getElementById("cartao");
    const caixaPix = document.getElementById("caixaPix");
    const caixaCartao = document.getElementById("caixaCartao");
    const campoCpf = document.getElementById("cpf-pix");
    const campoCartaoNumero = document.getElementById("cartao-numero");
    const iconeBandeira = document.getElementById("iconeBandeira");
    const selectParcelas = document.getElementById("select-parcelas");
    const parcelasInfo = document.getElementById("parcelas-info");

    
    radioPix.addEventListener("change", function () {
        caixaPix.classList.add("ativa");
        caixaCartao.classList.remove("ativa");
    });

    radioCartao.addEventListener("change", function () {
        caixaCartao.classList.add("ativa");
        caixaPix.classList.remove("ativa");
    });

    
    campoCartaoNumero.addEventListener("input", function() {
        const numero = campoCartaoNumero.value;
        if (numero.startsWith("1234")) {
            iconeBandeira.src = "icone1.png";
            iconeBandeira.style.display = "block";
        } else if (numero.startsWith("4321")) {
            iconeBandeira.src = "icone2.png";
            iconeBandeira.style.display = "block";
        } else {
            iconeBandeira.style.display = "none";
        }
    });

    
    function atualizarParcelas() {
        const valorTotal = parseFloat(campoValor.value);
        const qtd = parseInt(selectParcelas.value);
        if (!isNaN(valorTotal) && valorTotal > 0) {
            const valorParcela = valorTotal / qtd;
            parcelasInfo.innerText = `${qtd}x de R$ ${valorParcela.toFixed(2)}`;
        } else {
            parcelasInfo.innerText = "";
        }
    }
    campoValor.addEventListener("input", atualizarParcelas);
    selectParcelas.addEventListener("change", atualizarParcelas);

    
    botaoInformar.addEventListener("click", function () {
        const valor = parseFloat(campoValor.value);
        
        if (isNaN(valor) || valor <= 0) {
            alert("Por favor, insira o valor.");
            return;
        }

        if (radioPix.checked) {
            if (campoCpf.value.trim() == "") {
                alert("Por favor, insira o CPF para pagamento via Pix.");
            } else {
                const valorComDesconto = valor * 0.9; 
                alert("Pagamento via Pix realizado com sucesso! Valor com desconto: R$ " + valorComDesconto.toFixed(2));
            }
        } else if (radioCartao.checked) {
            if (campoCartaoNumero.value.trim() == "" || campoCartaoNumero.value.length < 16) {
                alert("Verifique os dados do cartão.");
                return;
            }
            alert("Pagamento via Cartão realizado com sucesso!");
        } else {
            alert("Selecione um método de pagamento.");
        }
    });
});