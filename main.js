
function showDivOrange() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(255, 154, 0, 1)";
 }
 function showDivYellow() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(208, 222, 33, 1)";
 }
 function showDivGreen() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(79, 220, 74, 1)";
 }
 function showDivLean() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(95, 21, 242, 1)";
 }
 function showDivBlue() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(28, 127, 238, 1)";
 }
 function showDivPurple() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(186, 12, 248, 1)";
 }
 function showDivBlueSky() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(47, 201, 226, 1)";
 }
 function showDivBluesao() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "rgba(63, 218, 216, 1)";
 }
 function showDivRed() {
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
      display: true,
      text: "Classe social entre jovens de 20-30 anos",
      fontColor: "white"
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