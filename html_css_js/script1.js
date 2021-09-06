const input1 = document.querySelector('input#nome');
const event0 = window.document.querySelector('#botao');

input1.addEventListener('keypress', function(event){
    if(event.keyCode > 47 && event.keyCode < 58){
        event.preventDefault();
    }
});

event0.addEventListener('click', function(e){
    if(input1.value.length==0){
        window.alert('[ERRO] Dados Inválidos !!!');
    }else{
        let result = document.getElementById('res');
        let palavra = input1.value;
        let qts = palavra.length;
        let contador = 0; 
        let vetor = [qts];

        for (let i= qts; i > -1; i--){
            vetor[contador] = palavra.charAt(i);
            contador++;
        }   
        result.innerHTML = `String invertida:  ${vetor.join('')}`;  
    }  
});


