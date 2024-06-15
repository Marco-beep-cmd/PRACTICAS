const questions = [
    {
        question: "¿Cuál es el menú para ir a Guardar como?",
        image: "images/1.0.jpg",
        options: [
            { text: "Archivo", isCorrect: true },
            { text: "Inicio", isCorrect: false },
            { text: "Insertar", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Centrar?",
        image: "images/2.PNG",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Alineación a la izquierda?",
        image: "images/3.png",
        options: [
            { text: "A", isCorrect: true },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Alineación a la derecha?",
        image: "images/4.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Justificar?",
        image: "images/5.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Viñetas/Puntos?",
        image: "images/6.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Numeración?",
        image: "images/7.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Negrita?",
        image: "images/8.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Cursiva?",
        image: "images/9.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: true }
        ]
    },
    {
        question: "¿Qué ícono representa la opción Subrayar?",
        image: "images/10.png",
        options: [
            { text: "A", isCorrect: true },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué ícono representa la opción para cambiar color de letra?",
        image: "images/11.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: true }
        ]
    },
    {
        question: "¿Qué ícono representa la opción para cambiar tipo de fuente?",
        image: "images/12.png",
        options: [
            { text: "A", isCorrect: true },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: false }
        ]
    },
    {
        question: "¿Qué tipo de fuente es Arial?",
        image: "images/13.png",
        options: [
            { text: "Formal", isCorrect: true },
            { text: "Informal", isCorrect: false }
        ]
    },
    {
        question: "¿Qué tipo de fuente es Times New Roman?",
        image: "images/14.png",
        options: [
            { text: "Formal", isCorrect: true },
            { text: "Informal", isCorrect: false }
        ]
    },
    {
        question: "¿Qué tipo de fuente es?",
        image: "images/15.png",
        options: [
            { text: "Formal", isCorrect: false },
            { text: "Informal", isCorrect: true }
        ]
    },
    {
        question: "¿Qué tipo de fuente es?",
        image: "images/16.png",
        options: [
            { text: "Formal", isCorrect: true },
            { text: "Informal", isCorrect: false }
        ]
    },
    {
        question: "¿Cuál es el apartado *Fuente*?",
        image: "images/17.png",
        options: [
            { text: "A", isCorrect: true },
            { text: "B", isCorrect: false }
        ]
    },
    {
        question: "¿Cuál es el apartado *Párrafo*?",
        image: "images/18.png",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <img src="${currentQuestion.image}" alt="Question Image" style="width: 915px; height: auto;">
        <div>
            ${currentQuestion.options.map((option, index) => `
                <button class="option-btn" data-is-correct="${option.isCorrect}">${option.text}</button>
            `).join('')}
        </div>
    `;

    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (button.getAttribute('data-is-correct') === 'true') {
                button.style.backgroundColor = 'green';
                score += 1.1; // Cada pregunta vale 1.1 puntos
            } else {
                button.style.backgroundColor = 'red';
            }
            document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    let finalScore = Math.round(score); // Redondear el puntaje al número entero más cercano
                    let message = '';
                    if (finalScore <= 10) {
                        message = 'Hay que mejorar 😕. Repíte los ejercicios para que ganes tu caramelito 🍬';
                    } else if (finalScore <= 17) {
                        message = 'Poco a poco pero hay que seguir para adelante 💪🏻. Repíte los ejercicios para que ganes tu caramelito 🍬.';
                    } else if (finalScore <= 20) {
                        message = '¡FELICITACIONES, TÓMA TU CARAMELITO 🍬!';
                    }
                    quizContainer.innerHTML = `<h2>¡Has completado todas las preguntas!</h2><p>Tu puntaje es ${finalScore} de 20.</p><p>${message}</p>`;
                }
            }, 100); // Esperar 1 segundo antes de pasar a la siguiente pregunta
        });
    });
}

showQuestion();
