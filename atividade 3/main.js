 document.getElementById("pix").addEventListener("change", function () {
            document.getElementById("caixaPix").classList.add("ativa");
            document.getElementById("caixaCartao").classList.remove("ativa");
        });

        document.getElementById("cartao").addEventListener("change", function () {
            document.getElementById("caixaPix").classList.remove("ativa");
            document.getElementById("caixaCartao").classList.add("ativa");
        });