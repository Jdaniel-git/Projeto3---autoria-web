const respostas = {
    q1: "c",
    q2: "a",
    q3: "b",
    q4: "c",
    q5: "a"
};

const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

quiz.addEventListener("submit", function(event) {

    event.preventDefault();

    let acertos = 0;

    for (let questao in respostas) {

        const resposta = document.querySelector(
            `input[name="${questao}"]:checked`
        );

        if (resposta && resposta.value === respostas[questao]) {
            acertos++;
        }
    }

    resultado.style.display = "block";

    resultado.innerHTML = `
        <h2>🏆 Você acertou ${acertos} de 5!</h2>
        <p>Gabarito: 1-B | 2-C | 3-D | 4-B | 5-C</p>
    `;

});