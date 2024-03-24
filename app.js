let listadeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoTela(tag , texto){
 let campo = document.querySelector(tag);
 campo.innerHTML = texto;
 responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirmessagemInicial(){
     exibirTextoTela('h1', 'Jogo do numero secreto' );
     exibirTextoTela('p', 'Escolha os numero entre 1 e 10');
}
exibirmessagemInicial();



function verificarChute(){
      let chute = document.querySelector('input').value;
      
      if(chute == numeroSecreto){
            exibirTextoTela('h1' , 'Acertou');
            let palavras = tentativas >1 ? 'tentativas' : 'tentativa';
            let mensagemTentativa = `voce descobriu o numero secreto com ${tentativas}  ${palavras}`;
            exibirTextoTela('p' , mensagemTentativa);

            document.getElementById('reiniciar').removeAttribute('disabled');
      }else{
           if ( chute > numeroSecreto ){
            exibirTextoTela('p' ,'O número secreto é menor');
           }else{
            exibirTextoTela('p' ,'O número secreto é maior');
           }
           tentativas++;
            limparCampo();
      }
     }
     
 function gerarNumeroAleatorio(){
      let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
      let quantidadeElementoLista = listadeNumeroSorteado.length;
      if(quantidadeElementoLista == numeroLimite){
          listadeNumeroSorteado = [];
      }
      if(listadeNumeroSorteado.includes(numeroEscolhido)){
          return gerarNumeroAleatorio();
      }else{
          listadeNumeroSorteado.push(numeroEscolhido);
          console.log(listadeNumeroSorteado);
          return numeroEscolhido;
      }
     }
    

 function limparCampo(){
      chute = document.querySelector('input');
      chute.value = '';

}

function reiniciarJogo(){
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirmessagemInicial()
     document.getElementById('reiniciar').setAttribute('disabled', true)
}


