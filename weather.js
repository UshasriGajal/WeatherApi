let place=document.getElementById('place')
let temp=document.getElementById('placeTemp')
let climate=document.getElementById('climate')
let rise=document.getElementById('rise')
let set=document.getElementById('set')
var grid=document.getElementById('gridDiv')
document.addEventListener('DOMContentLoaded',()=>{
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Hyderabad&units=metric&appid=1cb42b0649b087c3a32f622c54043f4e').
    then((response)=>response.json()).
    then((data)=>{
        // let 
        console.log(data)
        console.log(data.city.name)
        // let place=document.getElementById('place')
        place.append(data.city.name)

        // let temp=document.getElementById('placeTemp')
        
        
        temp.append(data.list[0].main.temp,"\u00B0C")
        // let climate=document.getElementById('climate')
        climate.textContent=data.list[0].weather[0].description

        let sunrise=data.city.sunrise
        const time = new Date(sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        // let rise=document.getElementById('rise')
        rise.append(time)
        console.log(time)
        
        let sunset=data.city.sunset
        const Settime = new Date(sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        // let set=document.getElementById('set')
        set.append(Settime)
        console.log(Settime)

        var date=data.list[0].dt_txt.slice(8,10)
        // console.log(date)
        // var grid=document.getElementById('gridDiv')
        for(var i=0;i<Object.keys(data.list).length;i++){
            if(data.list[i].dt_txt.slice(8,10)!=date){
                let otherDates=document.createElement('div')    
                otherDates.setAttribute('class','NextDates')    
                let temperature=document.createElement('p') 
                temperature.style.color='darkBlue'
                temperature.style.marginLeft='35px'
                temperature.style.fontSize='20px'
                temperature.textContent=`${data.list[i].main.temp}"\u00B0C"`  
                                                            
                let NextDates=data.list[i].dt_txt.slice(0,10)
                const day = new Date(NextDates); // Replace with your desired date
                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const dayName = daysOfWeek[day.getDay()].slice(0,3);
                
                let dayDate=document.createElement('p')
                dayDate.textContent=`${data.list[i].dt_txt.slice(8,10)}/${dayName}`
                dayDate.style.marginLeft='20px'
                const icon = document.createElement('i')
                icon.style.marginLeft='10px'
                icon.classList.add('fas', 'fa-cloud-sun')
                dayDate.append(icon)

                let rain=document.createElement('p')
                rain.style.marginLeft='15px'
                rain.textContent=(data.list[i].weather[0].description)
                // 
                console.log(rain==['overcast clouds'])
                // rain.append(data.list[i].weather[0].description)
                otherDates.append(temperature,dayDate,rain)
                grid.append(otherDates)

                console.log(data.list[i].dt_txt.slice(8,10))
                date=data.list[i].dt_txt.slice(8,10)
            }
        }
        
    })
    

    
})

function submit(){
    let location=document.getElementById('loc').value
    console.log(location)
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+location+'&units=metric&appid=1cb42b0649b087c3a32f622c54043f4e').
    then((response)=>response.json()).
    then((data)=>{
        // let 
        console.log(data)
        console.log(data.city.name)
        // let place=document.getElementById('place')
        place.innerText=" "
        place.append(data.city.name)

        let temp=document.getElementById('placeTemp')
        temp.innerText=" "
        temp.append(data.list[0].main.temp,"\u00B0C")

        let sunrise=data.city.sunrise
        const time = new Date(sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        rise.innerText=" "
        rise=document.getElementById('rise')
        
        rise.append(`Sunrise ${time}`)
        console.log(time)
        
        let sunset=data.city.sunset
        const Settime = new Date(sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        set.innerText=" "
        set=document.getElementById('set')
        
        set.append(`Sunset ${Settime}`)
        console.log(Settime)

        var date=data.list[0].dt_txt.slice(8,10)
        // console.log(date)
        // var grid=document.getElementById('gridDiv')
        grid.innerText=" "
        for(var i=0;i<Object.keys(data.list).length;i++){
            if(data.list[i].dt_txt.slice(8,10)!=date){
                let otherDates=document.createElement('div')    
                otherDates.setAttribute('class','NextDates')    
                let temperature=document.createElement('p') 
                temperature.style.color='darkBlue'
                temperature.style.marginLeft='35px'
                temperature.style.fontSize='20px'
                temperature.textContent=`${data.list[i].main.temp}"\u00B0C"`  
                                                            
                let NextDates=data.list[i].dt_txt.slice(0,10)
                const day = new Date(NextDates); // Replace with your desired date
                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const dayName = daysOfWeek[day.getDay()].slice(0,3);
                
                let dayDate=document.createElement('p')
                dayDate.textContent=`${data.list[i].dt_txt.slice(8,10)}/${dayName}`
                dayDate.style.marginLeft='20px'
                const icon = document.createElement('i')
                icon.style.marginLeft='10px'
                icon.classList.add('fas', 'fa-cloud-sun')
                dayDate.append(icon)

                let rain=document.createElement('p')
                rain.style.marginLeft='15px'
                rain.textContent=(data.list[i].weather[0].description)
                // 
                console.log(rain==['overcast clouds'])
                if(rain=='overcast clouds'){
                    
                    console.log('cloudy')
                    rain.append('Cloudy')
                }
                // rain.append(data.list[i].weather[0].description)
                otherDates.append(temperature,dayDate,rain)
                grid.append(otherDates)

                console.log(data.list[i].dt_txt.slice(8,10))
                date=data.list[i].dt_txt.slice(8,10)
            }
        }
        
    })

}
