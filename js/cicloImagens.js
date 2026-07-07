const odsInfo = [
    {text: "ODS 4 - Educação de Qualidade", image:"img/sala de aula.jpg"},
    {text: "ODS 6 - Água Limpa e Saneamento", image:"img/agua.jpg"},
    {text: "ODS 7 - Energia Limpa e Acessível", image:"img/energia.jpg"},
    {text: "ODS 16 - Paz, Justiça e Instituições Fortes", image:"img/governo.jpg"}
    ];
        
    let i = 0;

    setInterval(() => {
        i = (i + 1) % odsInfo.length;

        document.getElementById("ods-texto").textContent = odsInfo[i].text;
        document.getElementById("ods-imagem").src = odsInfo[i].image;
    }, 2000);