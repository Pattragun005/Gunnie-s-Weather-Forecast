$(function () {

    $("#loaddata").click(function () {

        $.get("data.json", function (data) {
            console.log(data);
            $.each(data, function (index, item) {
                var row = "<h3>" + data.weather[0].description + "</h3>";
                $("#datapanel").append(row);
            });

        });
    });

    $("#loadwebapi").click(function () {

        $("#wpanel").empty();

        var city = $("#city").val();

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
        url = "&APPID=4c32373ac55eb2cecd27c83ac44bc488";

        $.get(url, function (data) {
            console.log(data);
            var row = "<h3>" + data.weather[0].description + "</h3>";
            row += "<h3>" + data.main.temp/10 + "C</h3>";
            $("#wpanel").append(row);


        });
    });
});