function showDivOrange2() {
   document.getElementById('info').style.display = "block";
   document.getElementById('info').style.background = "rgba(255, 154, 0, 1)";
   document.getElementById('titleInfo').innerHTML = "Qual a importância da educação financeira para os jovens?";
   document.getElementById('infotxt').innerHTML ="A educação financeira na juventude é fundamental para aprender a cuidar de seu dinheiro desde cedo. Isso não só beneficia seu próprio futuro, mas também os capacita a passar esse conhecimento para as próximas gerações, influenciando positivamente o bem-estar financeiro de suas famílias.";
   document.getElementById('titleInfo').style.fontSize = "5em";
   document.getElementById('titleInfo').style.marginLeft = "60px";
   document.getElementById('myChart').style.marginTop = "-377px"
   document.getElementById('titleInfo').scrollIntoView

}
function showDivOrange() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(255, 154, 0, 1)";
    document.getElementById('titleInfo').scrollIntoView
 }
 function showDivYellow() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(208, 222, 33, 1)";
    document.getElementById('titleInfo').scrollIntoView
 }
 function showDivGreen() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(79, 220, 74, 1)";
    document.getElementById('titleInfo').scrollIntoView
    document.getElementById('titleInfo').innerHTML = "Controle sobre ganhos e gastos"
    document.getElementById('infotxt').innerHTML = "Acompanhar com atenção todo o dinheiro recebido e todos os gastos realizados permite entender como funciona esse fluxo de entradas e saídas e, mesmo que os valores não sejam muito altos em um primeiro momento. Esse conceito contribui para uma tomada de decisão mais consciente conforme ganhar mais e mais responsabilidades.";
    document.getElementById('titleInfo').style.fontSize = "5em";
    document.getElementById('titleInfo').style.marginLeft = "60px";
    document.getElementById('myChart').style.marginTop = "-1277px";
    document.getElementById('infotxt2').style.display = 'block';
   document.getElementById('infotxt2').innerHTML = "Para ajudar na contenção e na organização de gastos, o primeiro passo para você que precisa começar é tabelar as receitas e as despesas para assim, você alcançar seu principal objetivo: O <span class='negrito'>SUCESSO FINANCEIRO!</span> <BR> Para organizar os seus ganhos e gastos, o recomendável é utilizar tabelas, que podem ser feitas utilizando plataformas digitais ou até mesmo no papel, para todos que se sentem mais confortáveis com papel e caneta na mão.<br>O mais importante dessa parte é aprender a gerir o seu dinheiro para conseguir controlar o quanto você ganha e o quanto gasta. A maioria das pessoas gasta muito mais do que pode pagar e se perdem nas finanças. Nas piores situações, empréstimos, cheque especial e dívidas no cartão de crédito viram rotina daqueles que perdem o controle.<br>A partir do momento que você organiza suas finanças em tabelas, você tem uma melhor visão de quanto custa o seu estilo de vida e o quanto se pode gastar.Organize sua tabela em meses e preencha cada gasto,se facilitar divida por tipos: comida, lazer, roupas, etc.<br>Essa parte é muito mais pessoal, afinal cada um deve organizar sua tabela e sua vida financeira da forma que achar melhor e que faz mais sentido para o seu entendimento. É garantido que a partir do momento que você tiver uma visão abrangente e detalhada do que gasta e ganha, o seu dinheiro renderá mais e será muito mais fácil de chegar a sua independência financeira.<br> <span class='meio'>Não desista, mantenha as planilhas e se controle.<span>"
    
 }

 function showDivGreen2() {
   document.getElementById('info').style.display = "block";
   document.getElementById('info').style.background = "rgba(79, 220, 74, 1)";
   document.getElementById('titleInfo').scrollIntoView
}
 function showDivLean() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(95, 21, 242, 1)";
    document.getElementById('titleInfo').scrollIntoView
    document.getElementById('titleInfo').innerHTML = "Planejamento Financeiro Pessoal"
    document.getElementById('titleInfo').style.marginLeft = "60px"
    document.getElementById('infotxt').innerHTML = "Acompanhar com atenção todo o dinheiro recebido e todos os gastos realizados permite entender como funciona esse fluxo de entradas e saídas e, mesmo que os valores não sejam muito altos em um primeiro momento. Esse conceito contribui para uma tomada de decisão mais consciente conforme ganhar mais e mais responsabilidades.";
    document.getElementById('titleInfo').style.fontSize = "4em";
    document.getElementById('myChart').style.marginTop = "-377px"
 }
 function showDivLean2() {
   document.getElementById('info').style.display = "block";
   document.getElementById('info').style.background = "rgba(95, 21, 242, 1)";
   document.getElementById('titleInfo').scrollIntoView
}
 function showDivBlue() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(28, 127, 238, 1)";
    document.getElementById('titleInfo').scrollIntoView
 }
 function showDivPurple() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(186, 12, 248, 1)";
    document.getElementById('titleInfo').scrollIntoView
 }
 function showDivBlueSky() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(47, 201, 226, 1)";
    document.getElementById('titleInfo').scrollIntoView
 }
 function showDivBluesao() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(63, 218, 216, 1)";
    document.getElementById('titleInfo').scrollIntoView
 }
 function showDivRed() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(255, 0, 0, 1)";
    document.getElementById('titleInfo').innerHTML = "O que é a educação financeira?";
    document.getElementById('titleInfo').style.fontSize = "5em"
    document.getElementById('titleInfo').style.marginLeft = "60px";
   document.getElementById('infotxt').innerHTML = "A educação financeira aborda conceitos essenciais para organizar as finanças, permitindo o melhor uso do dinheiro e preparação para imprevistos. Ela ajuda a tomar decisões conscientes sobre o dinheiro, melhorando a qualidade de vida. Não exige expertise em investimentos, mas sim compreensão de conceitos básicos e práticas simples para a saúde financeira."

 }
 function showDivRed2() {
   document.getElementById('info').style.display = "block";
   document.getElementById('info').style.background = "rgba(255, 0, 0, 1)";
}
 //Graficos usando ChartJS

const xValues = ["Falido", "Pobre", "Classe Media", "Classe Media alta", "Burgues"];
const yValues = [55, 49, 44, 24, 5];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,

    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
     
    },
    plugins: { 
      legend: {
        labels: {
         fontColor: "white"
               },
            }
         }
    
  }
});