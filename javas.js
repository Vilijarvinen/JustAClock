var nappi = document.getElementById("paina");

nappi.addEventListener("click", function () {

    function kello() {
        var kello = document.getElementById("kello");
        var justnyt = new Date();
        var tunnitnyt = justnyt.getHours();
        if (tunnitnyt < 10) {
            tunnitnyt = "0" + tunnitnyt;
        }
        var minuutitnyt = justnyt.getMinutes();
        if (minuutitnyt < 10) {
            minuutitnyt = "0" + minuutitnyt;
        }
        var sekunnitnyt = justnyt.getSeconds();
        if (sekunnitnyt < 10) {
            sekunnitnyt = "0" + sekunnitnyt;
        }
        var kellonaikanyt = tunnitnyt + ":" + minuutitnyt + ":" + sekunnitnyt;
        kello.innerHTML = kellonaikanyt;
    }
    window.setInterval(kello, 100);

    $.get("https://ipinfo.io", function (sijainti) {
        var kaupunkimaa = document.getElementById("kaupunkimaa");
        kaupunkimaa.append(sijainti.city + ", " + sijainti.country);
    }, "jsonp");

    async function esille() {
        $("#paina").attr("id", "painettu");
        $("#kaupunkimaa").fadeIn({ duration: 2500 });
        await new Promise(resolve => setTimeout(resolve, 850));
        $("#kello").fadeIn({ duration: 2500 });
    }
    esille();
});


$("footer").click(function (tekija) { 
    tekija.location.href = '...';
});