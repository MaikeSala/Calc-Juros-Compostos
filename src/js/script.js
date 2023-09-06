const botao = document.querySelector(".simular");

botao.addEventListener('click', (e) => {

    e.preventDefault();

    const juros = document.querySelector("#invest_porcentagen").value;
    const anos = document.querySelector('#tempo').value;
    const aporteInical = document.querySelector('#aporte_inicial').value;
    const aporteMensal = document.querySelector('#aporte_mensal').value;

    C = parseFloat(aporteInical);
    PM = parseFloat(aporteMensal);
    i = parseFloat(juros)/100;
    t = parseFloat(anos);  

    console.log(i, t, C, PM);
    let M = 0;
    //Multiplicar por 12 para saber quantos meses sao
    t = t * 12;
    let aux = 0;

    for(let j = 0; j < t; j++){
        if(isNaN(PM)) PM = 0;

        M = C * (1 + i)**1;
        C = M + PM;

        console.log(C);
    }
});
