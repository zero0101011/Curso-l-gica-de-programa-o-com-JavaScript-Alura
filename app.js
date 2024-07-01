
alert("Olá seja bem vindo ao jogo do número.");
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1)
let chute 
let tentativas = 1


    while (chute != numeroSecreto) {
        chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);
        
        if (chute == numeroSecreto) {
            
            break
        } else {
            if (chute < numeroSecreto) {
                alert(`Chuta mais alto, o número secreto é maior que ${chute}`)
            } else {
                alert(`Chuta mais baixo, o número secreto é menor que ${chute}`)
            } tentativas ++
        }
            }

            /*
            if (tentativas > 1){
            alert(`Parabéns você acertou! o número correto é ${numeroSecreto} e você tentou ${tentativas} vezes`)
            } else {
                alert(`Parabéns você acertou! o número correto é ${numeroSecreto} e você tentou ${tentativas} vez`)
            }*/

                let palavratentatvas = tentativas >1 ? "tentativas" : "tentativa"
                alert(`Parabéns o número correto é ${numeroSecreto} você acertou com ${tentativas} ${palavratentatvas} `)


