(function () {
    var openingDate = Date.parse("01/20/2021 12:00");
    var spans = document.querySelectorAll(".time-units");

    function countdown() {
        var i = 0,
            d = new Date(),
            timeUnits = {
                days: Math.floor((openingDate - Date.now()) / 1000 / 60 / 60 / 24),
                hours: 23 - d.getHours(),
                minutes: 59 - d.getMinutes(),
                seconds: 59 - d.getSeconds()
            };

        for (var prop in timeUnits) {
            if (timeUnits.hasOwnProperty(prop)) {
                spans[i].innerHTML = "<span>" + (timeUnits[prop] < 10 ? "0" + timeUnits[prop] : timeUnits[prop]) + "</span>" + " " + prop;
                i += 1;
            }
        }

        setTimeout(countdown, 1000);
    }
    countdown();
})();