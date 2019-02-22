document.addEventListener("DOMContentLoaded", function(){
    var container = document.querySelector(".rainContainer");
    var rainDelay = document.querySelector(".raindelay");
    for(let i =0; i<230; i++){
        let rain = document.createElement("div");
        let rain2 = document.createElement("div");

        rain.className = "rain";
        rain2.className = "rain";

        let leftPos=Math.floor(Math.random()*110) + "vw";
        rain.style.left = leftPos;
        rain2.style.left = leftPos;
        let topPos=Math.floor(Math.random()*100) + "vh";
        rain.style.top = topPos;
        rain2.style.top=topPos;
        rainDelay.appendChild(rain2);

        container.appendChild(rain);

    }

});
