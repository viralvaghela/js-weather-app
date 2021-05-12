window.onload = function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    document.querySelector(".date").textContent = today;
    // var d = new Date().format('m-d-Y h:i:s');
    // dateData.textContent = d;
};
function getDetails() {


    var city = document.querySelector(".city");
    var date = document.querySelector(".date");
    var temperature = document.querySelector(".temp");
    var weather = document.querySelector(".weather");
    var hi_low = document.querySelector(".hi-low");

    var key = "7010e29efb5c5e0165282fa8e4e71669";
    var id = document.getElementById("search-box").value;


    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + id + "&appid=7010e29efb5c5e0165282fa8e4e71669&units=metric")
        .then(res => res.json())
        .then((data) => {
            // var pokemonName = data.pokemon[id].name;
            // console.log(data.main.temp);

            temperature.textContent = data.main.temp;

            city.textContent = data.name + " " + data.sys.country;
            weather.textContent = data.weather[0].description;
            var minTemp = data.main.temp_min;
            var maxTemp = data.main.temp_max;
            hi_low.textContent = maxTemp + "-" + maxTemp;

        })
        .then(err => console.log(err));
}