/* script.js */
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

    Telegram.WebApp.ready();

    // Kullanıcıdan etkileşim bekleyen bir uyarı
    alert("Tam ekrana geçmek için tıklayın.");
    // Bu etkileşimden sonra tam ekran modunu aç
    Telegram.WebApp.expand();
});
