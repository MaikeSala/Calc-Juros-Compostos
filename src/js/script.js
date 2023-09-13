const botao = document.querySelector(".simular");

function elementosNaTela (aporteInical, aporteMensal, juros, anos) {

    const minhaDiv = document.getElementById('meu_calculo');
    const spans = minhaDiv.querySelectorAll('span');

    if(aporteInical.length === 0 || juros.length === 0 || anos.length === 0){
        return;
    }else{
        spans.forEach((span) => {
            minhaDiv.removeChild(span);
        });
    }

    const aporteInicialSpan = document.createElement('span');
    const aporteMensalSpan = document.createElement('span');
    const jurosSpan = document.createElement('span');
    const anosSpan = document.createElement('span');
    
    aporteInicialSpan.textContent = `Valor inicial: R$ ${aporteInical}`;
    aporteMensalSpan.textContent = `Valor do aporte: R$${aporteMensal}`;
    jurosSpan.textContent = `Taxa de juros: ${juros}% ao mês`;
    anosSpan.textContent = `Período: ${anos} meses`;

    minhaDiv.appendChild(aporteInicialSpan);
    minhaDiv.appendChild(aporteMensalSpan);
    minhaDiv.appendChild(jurosSpan);
    minhaDiv.appendChild(anosSpan);
}

function resultadoNaTela(valorTotalFinal, valorTotalInvestido, jurosTotal) {
    const minhaDiv = document.getElementById('resultado');
    const spans = minhaDiv.querySelectorAll('span');

    spans.forEach((span) => {
        minhaDiv.removeChild(span);
    });

    const valorTotalFinalSpan = document.createElement('span');
    const valorTotalInvestidoSpan = document.createElement('span');
    const jurosTotalSpan = document.createElement('span');

    valorTotalFinalSpan.textContent = `Valor total final: R$ ${valorTotalFinal.toFixed(2)}`;
    valorTotalInvestidoSpan.textContent = `Valor total investido: R$${valorTotalInvestido.toFixed(2)}`;
    jurosTotalSpan.textContent = `Total de juros: ${jurosTotal.toFixed(2)}`;

    minhaDiv.appendChild(valorTotalFinalSpan);
    minhaDiv.appendChild(valorTotalInvestidoSpan);
    minhaDiv.appendChild(jurosTotalSpan);

}


botao.addEventListener('click', (e) => {

    const juros = document.querySelector("#invest_porcentagen").value;
    const anos = document.querySelector('#tempo').value;
    const aporteInical = document.querySelector('#aporte_inicial').value;
    const aporteMensal = document.querySelector('#aporte_mensal').value;

    C = parseFloat(aporteInical);
    PM = parseFloat(aporteMensal);
    i = parseFloat(juros)/100;
    t = parseFloat(anos);  

    let M = 0;

    for(let j = 0; j < t; j++){
        if(isNaN(PM)) PM = 0;

        M = C * (1 + i)**1;
        C = M + PM;
    }

    let totalInvestido = parseFloat(aporteInical) + (PM * t);
    let totalJuros = C - totalInvestido;

    console.log(C.toFixed(2),totalInvestido,totalJuros); 

    elementosNaTela(aporteInical, aporteMensal, juros, anos);
    resultadoNaTela(C, totalInvestido, totalJuros);
});
