 const campoValor = document.getElementById("valor-adicional");
 const botaoInformar = document.getElementById("botao-informar");
 const caixaCartao = document.getElementById("cartao");
 const caixaPix = document.getElementById("pix");
 
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
                alert("Por favor, insira o valor do Pix.");

             return
        }

        if (caixaPix.checked) {
                alert("Pagamento via Pix realizado com sucesso!");
        }
    else if (caixaCartao.checked) {
        alert("Pagamento via Cartão realizado com sucesso!");
            } 
    else {
        alert("Por favor, selecione uma forma de pagamento (Pix ou Cartão).");
         }
    });