const key='593eba9d18d85f5c9c2d273b05bd74ce';


var Kel=273;
const getWeather=async (city)=>{
    const baseurl='https://api.openweathermap.org/data/2.5/weather';
    const query=`?q=${city}&appid=${key}`;
  

    const response=await fetch(baseurl+query);
   const data=await response.json();
    return data;
};

const getCurrentLocation=async(position)=>{
const baseurl='https://api.openweathermap.org/data/2.5/weather';
const query=`?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}`;
const response=await fetch(baseurl+query);
   const data=await response.json();
   console.log(position.coords.latitude,position.coords.longitude);
   localStorage.setItem('city',data.name);
};





