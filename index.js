$(function () {
    $("#loadwebapi").click(function () {
        var city = $("#city").val();
        console.log(city);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=4c32373ac55eb2cecd27c83ac44bc488";
        $.get(url, function (data) {
            console.log(data);
            var show = "<h2>"+data.name+"</h2><p>"+data.main.temp+"</p><p>"+data.weather[0].description+"</p><p>Humidity : "+data.main.humidity+"%</p><p>Presure : "+data.main.pressure+" hPa</p>";
           console.log(show);
            $("#wpanel").append(show);
        });
    });
});