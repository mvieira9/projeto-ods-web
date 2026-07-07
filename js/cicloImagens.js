const odsInfo = [
    {text: "ODS 4 - Educação de Qualidade", image:"img/sala de aula.jpg"},
    {text: "ODS 6 - Água Potável e Saneamento", image:"img/agua.jpg"},
    {text: "ODS 7 - Energia Limpa e Acessível", image:"img/energia.jpg"},
    {text: "ODS 11 - Cidades Sustentáveis", image:"img/cidade.jpg"},
    {text: "ODS 12 - Consumo Responsável", image:"img/consumo.jpg"},
    {text: "ODS 13 - Ação Contra as Mudanças Climáticas", image:"img/clima.jpg"},
    {text: "ODS 14 - Vida na Água", image:"img/oceano.jpg"},
    {text: "ODS 15 - Vida Terrestre", image:"img/floresta.jpg"}

    ];
        
    let i = 0;

    setInterval(() => {
        i = (i + 1) % odsInfo.length;

        document.getElementById("ods-texto").textContent = odsInfo[i].text;
        document.getElementById("ods-imagem").src = odsInfo[i].image;
    }, 2000);