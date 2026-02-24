document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formReserva');
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            const reserva = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                entrada: document.getElementById("data-entrada").value,
                saida: document.getElementById("data-saida").value,
                adultos: document.getElementById("numero-adultos").value,
                criancas: document.getElementById("numero-criancas").value,
                observacoes: document.getElementById("observacoes").value
            };

            enviarDados(reserva);
        });
    }

    if (document.getElementById("tabela-reservas")) {
        listarReservas();
    }
});

function enviarDados(reserva) {
    fetch("http://localhost:3000/reservas", {
        method: "POST",
        body: JSON.stringify(reserva),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then((json) => {
            alert("Reserva enviada com sucesso!");
            window.location.href = "reservas.html";
        })
        .catch(erro => console.error("Erro ao enviar:", erro));
}

function listarReservas() {
    fetch("http://localhost:3000/reservas")
        .then((response) => response.json())
        .then((reservas) => {
            const listaReservas = document.getElementById("tabela-reservas");
            listaReservas.innerHTML = "";

            reservas.forEach(reserva => {
                const linha = document.createElement("tr");
                linha.innerHTML = `
                    <td>${reserva.id}</td>
                    <td>${reserva.nome}</td>
                    <td>${reserva.email}</td>
                    <td>${reserva.entrada}</td>
                    <td>${reserva.saida}</td>
                    <td>${reserva.adultos}</td>
                    <td>${reserva.observacoes || ""}</td>
                `;
                listaReservas.appendChild(linha);
            });
        })
        .catch(erro => console.error("Erro ao listar reservas:", erro));
}