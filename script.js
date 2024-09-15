/* script.js */

Telegram.WebApp.ready(function(){
    Telegram.WebApp.expand();
});

document.getElementById('expand').addEventListener('click', function() {
    Telegram.WebApp.expand();
});

document.getElementById("spin-button").addEventListener("click", function() {
    var wheel = document.getElementById("wheel");
    var result = document.getElementById("result");

    // Rastgele bir dönüş açısı hesapla
    var degrees = Math.floor(Math.random() * 360);

    // Çarkı döndür
    wheel.style.transition = "transform 3s ease-out";
    wheel.style.transform = "rotate(" + degrees + "deg)";

    // Dönüş tamamlandıktan sonra sonucu hesapla
    setTimeout(function() {
        var segments = document.querySelectorAll(".wheel-segment");
        var segmentAngle = 360 / segments.length;
        var winningSegmentIndex = Math.floor((degrees % 360) / segmentAngle);
        var winningSegment = segments[winningSegmentIndex];
        result.textContent = "Kazandığınız Ödül: " + winningSegment.textContent;
    }, 3000);

});
