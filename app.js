$(document).ready(function () {
    var friends = ["Will", "Kj", "Davion", "Jamal", "Cartier"];
    var locations = ["Bessemer", "Fairfield", "Orlando", "Pleasant grove", "Verdansk", "Nuketown", "Storage town", "Sunset Beach", "McCalla", "Bucksville"];
    var weapons = ["Wam Bam", "Ray gun", "scar", "ak-47", "mp5", "poison darts", "spear", "potatoe shooter", "missle", "bow", "crossbow", "taser", "gut buster", "Kar98k", "head butt", "flame thrower", "tetsusaiga", "nunchucks", "ninja stars", "knife"];

    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>Accusation " + i + "</h3>");
        $($h3).appendTo("body");
        $($h3).click(getAlert(i));
    }

    function getAlert(i) {
        var friend = friends[Math.floor(Math.random() * friends.length)];
        var location = locations[Math.floor(Math.random() * locations.length)];
        var weapon = weapons[Math.floor(Math.random() * weapons.length)];
        function accuseAlert() {
            alert("Accusation " + i + ": I accuse " + friend + " with the " + weapon + " in " + location + "!");
        }
        return accuseAlert;
    }
});