const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=sp&units=metric&appid=ec137061673efaf5d4c51330de76fa13';

async function datosClimaticos(){
    const respuesta = await fetch(apiUrl);
    const datos = await respuesta.json();   
    document.getElementById("ubi").innerHTML = datos.name;
    document.getElementById("temp").innerHTML = redondearUnDecimal(datos.main.temp)+'°C';
    document.getElementById("desc").innerHTML = datos.weather[0].description;
    console.log(datos);
}
function redondearUnDecimal(numero) {
    let dato=numero.toString();
    let regex=/(\d*.\d{0,1})/;
    return dato.match(regex)[0];
  }

datosClimaticos();