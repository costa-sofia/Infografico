function showDivOrange() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "#ff4715";
 }
 function showDivYellow() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = " #d0bd1c";
 }
 function showDivGreen() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "#76ff2e";
 }
 function showDivGreenish() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "#00ff66";
 }
 function showDivCyan() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "#039494";
 }
 function showDivBlue() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "#0237ff";
 }
 function showDivPurple() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "#4300ff";
 }
 function showDivPinke() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "#d600f9";
 }
 function showDivRosao() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "#ff0047";
 }
 function showDivRosaceo() {
    document.getElementById('info').style.display = "block";
    document.getElementById('info').style.background = "#ff0042";
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
    labels: {
      fontColor: "white",
      display: true
    },
    
  }
});