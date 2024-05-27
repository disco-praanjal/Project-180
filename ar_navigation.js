var coordinates = {}

$(document).ready(function(){
    getCoordinates()
})

function getCoordinates(){
    var searchParams = new URLSearchParams(window.location.search)
    if(searchParams.has("source") && searchParams.has("destination")){
        var source = searchParams.get("source")
        var destination = searchParams.get("destination")
        coordinates.sourcelat = source.split(";")[0]
        coordinates.sourcelng = source.split(";")[1]
        coordinates.destinationlat = destination.split(";")[0]
        coordinates.destinationlng = destination.split(";")[1]
        console.log(coordinates)
    }
    else{
        alert("Please select the coordinates")
        window.history.back()
    }
}

function getWeather(){

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.source_lat}&lon=${coordinates.source_lon}&appid=94212e971d0ca9`,
        type:'get',
        success:function(response){
            let name = response.name
            let weather = response.weather[0].main
            $("#scene_container").append(
                `
                    <a-entity gps-entity-place="latitude: ${steps[i].maneuver.location[1]}; longitude: ${steps[i].maneuver.location[0]};">
                        <a-entity>
                            <a-text height="50" value="Weather forcast is${weather} at ${name}"><\a-text>
                        <\a-entity>
                    <\a-entity>
                `
            )
        }
       })

}