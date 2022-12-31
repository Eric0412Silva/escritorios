var myVar = setInterval(myTimer ,1000);
function myTimer() {
    var d = new Date(), displayDate;
   if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      displayDate = d.toLocaleTimeString('pt-BR');
   } else {
      displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
   }
      document.getElementById("demo").innerHTML = displayDate;
}

const span = document.querySelector (".span");
const navMenu = document.querySelector (".nav-menu");

span.addEventListener("click", () => {
    span.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const slider = document.querySelector(".slider")

const trail = document.querySelector(".trail").querySelector("div")

let value = 0

let trailValue = 0

let interval = 4000