document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('formulario');
    const containerResultados = document.getElementById('container-resultados');

    if (form) {
        form.addEventListener('submit', function(evento) {
            evento.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const ods = document.getElementById('ods').value;
            const ideia = document.getElementById('ideia').value;

            const novaIdeia = { nome, email, ods, ideia };

            let bancoDeIdeias = JSON.parse(localStorage.getItem('ideiasSalvas')) || [];

            bancoDeIdeias.push(novaIdeia);

            localStorage.setItem('ideiasSalvas', JSON.stringify(bancoDeIdeias));

            alert('Ideia cadastrada com sucesso! Redirecionando o usuário...')

            window.location.href = 'resultados.html';
        });
    }

    if (containerResultados) {

        let bancoDeIdeias = JSON.parse(localStorage.getItem('ideiasSalvas')) || [];

        if (bancoDeIdeias.length === 0) {
            containerResultados.innerHTML = '<p>Nenhuma ideia foi cadastrada ainda. Seja o primeiro!</p>';
            return;
        }

        containerResultados.innerHTML = '';

        bancoDeIdeias.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('card-resultado');
            card.innerHTML = `
                <br>
                <h2>${item.nome}</h2>
                <p><strong>E-mail:</strong> ${item.email}</p>
                <p><strong>ODS Escolhido:</strong> ${item.ods}</p>
                <p><strong>Ideia Sustentável:</strong></p>
                <p>${item.ideia}</p>
                <br/>
                <hr>
            `;
            containerResultados.appendChild(card);
        });
    }
});