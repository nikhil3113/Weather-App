

 const api = {
    key: "b2b2a38d32c15956a02116780cf51f5b",
    base: "http://api.openweathermap.org/data/2.5/"
  }

  const hover = document.querySelector(".temp")

  const mouseover = () =>{
    hover.style.textShadow = '1px 1px';
   
  }

  const mouseout = () =>{
    hover.style.textShadow = 'none';
  }

  hover.addEventListener("mouseover", mouseover)
  hover.addEventListener("mouseout", mouseout)
  
  const searchbox = document.querySelector(".search-box");
  searchbox.addEventListener("keypress", setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  

  const  getResults =  (query)  => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }

  const change = document.getElementById('change');

  /*const bg = () =>{
    if(weather_el === 'Sunny')
    {
      change.style.backgroundImage = "url('https://images.unsplash.com/photo-1604228741406-3faa38f4907a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3Vubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60')";
    }
    else if(weather_el ==='Clouds')
    {
      change.style.border = '2px solid yellow'
      change.style.backgroundImage = "url('https://media.istockphoto.com/photos/white-clouds-on-blues-sky-picture-id1325888847?b=1&k=20&m=1325888847&s=170667a&w=0&h=9qnpCkDWu-ekl3wiJf2T9qGuTZp-66CTSAQZTghS6os=')";
    }
    else if(weather_el === 'Fog')
    {
      change.style.backgroundImage = "url('https://media.istockphoto.com/photos/crossing-the-bridge-picture-id497117606?b=1&k=20&m=497117606&s=170667a&w=0&h=qnyewri_gHi-xCnWozIMcZjMI-FEUbcN4UNL_giuS6c=')";
    }
    else{
      change.style.backgroundImage = "url('./bg.jpg')";
    }

  }*/

  //searchbox.addEventListener("keypress", bg);//
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }