window.onload = function(){

    function soma(){
        
        const valor1 = document.querySelector("#box1");
        const valor2 = document.querySelector("#box2");


        let resultado = parseInt(valor1.value) + parseInt(valor2.value);

        const texto_new = document.createTextNode(`O resultado da operacao da adição é${resultado}`);

        alert(resultado);

    }

    function subtracao(){
        
        const valor1 = document.querySelector("#box1");
        const valor2 = document.querySelector("#box2");

        let resultado = parseInt(valor1.value) - parseInt(valor2.value);

        const texto_new = document.createTextNode(`O resultado da operacao da subtração é ${resultado}.`);

        alert(resultado);

    }

    function multiplicacao(){
        
        const valor1 = document.querySelector("#box1");
        const valor2 = document.querySelector("#box2");

        let resultado = parseInt(valor1.value) * parseInt(valor2.value);

        const texto_new = document.createTextNode(`O resultado da operacao da multiplicação é ${resultado}.`);

        alert(resultado);

    }

    function divisao(){
        
        const valor1 = document.querySelector("#box1");
        const valor2 = document.querySelector("#box2");

        let resultado = parseInt(valor1.value) / parseInt(valor2.value);

        const texto_new = document.createTextNode(`O resultado da operacao da divisão é ${resultado}.`);

        alert(resultado);

    }

    const B_soma = document.querySelector("#button_soma");
    B_soma.onclick = soma;

    const B_subt = document.querySelector("#button_subt");
    B_subt.onclick = subtracao;

    const B_mult = document.querySelector("#button_mult");
    B_mult.onclick = multiplicacao;

    const B_divis = document.querySelector("#button_div");
    B_divis.onclick = divisao;

    

}