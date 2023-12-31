function Perguntas() {

    Questions =
        [
            {
                tema: "Conhecimentos Gerais",
                pergunta: "Qual é a capital do Canadá?",
                imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
                resp1: "Montreal",
                resp2: "Ottawa",
                resp3: "Toronto",
                resp4: "Quebec",
                correta: "2"
            },

            {
                tema: "Conhecimentos Gerais",
                pergunta: "Quais o menor e o maior país do mundo?",
                imagem: "https://s2.glbimg.com/Jgsq-k5JFgnv4bzHkqWPMkCg-oU=/620x430/e.glbimg.com/og/ed/f/original/2015/12/09/thinkstockphotos-161574983.jpg",
                resp1: "Nauru e China",
                resp2: "Malta e Estados Unidos",
                resp3: "Mônaco e Canadá",
                resp4: "Vaticano e Rússia",
                correta: "4"
            },

            {
                tema: "Conhecimentos Gerais",
                pergunta: "Qual a função da ONU?",
                imagem: "https://livredetrabalhoinfantil.org.br/wp-content/uploads/2016/09/ONU.jpg",
                resp1: "Financiar países em desenvolvimento",
                resp2: "Gerenciar acordos de comércio entre os países",
                resp3: "Unir as nações com o objetivo de manter a paz e a segurança a nível internacional.",
                resp4: "Zelar pela cultura em todas as nações",
                correta: "3"
            },

            {
                tema: "Conhecimentos Gerais",
                pergunta: "Quanto tempo a luz do Sol demora para chegar à Terra?",
                imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/2-sol.jpg",
                resp1: "12 minutos",
                resp2: "12 horas",
                resp3: "8 minutos",
                resp4: "30 minutos",
                correta: "3"
            },

            {
                tema: "Conhecimentos Gerais",
                pergunta: "Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?",
                imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/03/visao-aproximada-da-lua.jpg",
                resp1: "Buzz Aldrin, em 1955",
                resp2: "Charles Conrad, em 1969",
                resp3: "Neil Armstrong, em 1969.",
                resp4: "Neil Armstrong, em 1955.",
                correta: "3"
            }

        ]

    localStorage.setItem('bdQuiz', JSON.stringify(Questions))
    return Questions
}

var Sorteado = []

var correto = ''

var Perguntatela = ''

var Questions = Perguntas()

do {
    var Sorte = parseInt(Math.random() * Questions.length)
} while (Sorteado.indexOf(Sorte) != -1)
Sorteado.push(Sorte)



function carregarjogo() {

    if (Sorteado.length == Questions.length) {
        alert('Você já respondeu todas as perguntas')
        return
    }

    correto = Questions[Sorte].correta
    Perguntatela = Questions[Sorte].pergunta
    document.getElementById('perguntar').innerHTML = Questions[Sorte].pergunta
    document.getElementById('image').innerHTML = `<img class="imagem" src="${Questions[Sorte].imagem}">`
    document.getElementById('resposta1').innerHTML = Questions[Sorte].resp1
    document.getElementById('resposta2').innerHTML = Questions[Sorte].resp2
    document.getElementById('resposta3').innerHTML = Questions[Sorte].resp3
    document.getElementById('resposta4').innerHTML = Questions[Sorte].resp4

    document.getElementById('resposta1').addEventListener('click', function () {
        validarResposta('1');
    });

    document.getElementById('resposta2').addEventListener('click', function () {
        validarResposta('2');
    });

    document.getElementById('resposta3').addEventListener('click', function () {
        validarResposta('3');
    });

    document.getElementById('resposta4').addEventListener('click', function () {
        validarResposta('4');
    });

}

function comecar() {

    var user = document.getElementById('usuario').value

    if (user == "") {
        alert('Digite seu nome!')
        document.getElementById('comecando').removeAttribute("href")
    } else {
        location.href = 'quiz.html'
    }

}

function validarResposta(resposta) {
    if (resposta == correto) {
        alert('Resposta correta! Parabéns!')
        location.href = 'quiz.html'
    } else {
        alert('Que pena, você errou.')
        location.href = 'quiz.html'
    }
}
