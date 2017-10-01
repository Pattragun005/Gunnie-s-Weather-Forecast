$(function () {
    $("#loadwebapi").click(function () {
        $("#wpanel").empty();
        var city = $("#city").val();
        console.log(city);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=4c32373ac55eb2cecd27c83ac44bc488";
        $.get(url, function (data) {
            console.log(data);
            var show = "<h2>"+data.name+"</h2><table><tr><td>Temperature </td><td>"+(data.main.temp/10).toFixed(2)+"°C</td></tr><tr><td>Description </td><td>"+data.weather[0].description+"</td></tr><tr><td>Humidity </td><td>"+data.main.humidity+"%</td></tr><tr><td>Presure </td><td>"+data.main.pressure+" hPa</td></tr></table>";

           console.log(show);
            $("#wpanel").append(show);
        });
    });
});