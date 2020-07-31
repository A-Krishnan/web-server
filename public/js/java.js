


const form=document.querySelector('form')
const input=document.querySelector('input')
const msg1=document.querySelector('#para1')
const msg2=document.querySelector('#para2')
const msg3=document.querySelector('#para3')
const msg4=document.querySelector('#para4')
const msg5=document.querySelector('#para5')
const msg6=document.querySelector('#para6')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
   const val=input.value
   msg1.textContent='Loading....'
   msg2.textContent=' '
   msg3.textContent=' '
   msg4.textContent=' '
   msg5.textContent=' '
   msg6.textContent=' '
   fetch('/weather?address='+val).then((response)=>{
    response.json().then((data)=>{
      if(data.error)
      {
       msg1.textContent=data.error
      }else{
          console.log(data.location)
          console.log(data.temperature)
          console.log(data.forecast)
          console.log(data.humidity)
          msg1.textContent='Place :'+data.location
          msg2.textContent='Forecast :'+data.forecast
          msg3.textContent='Temperature: '+data.temperature
          msg4.textContent='Humidity :'+data.humidity
          msg5.textContent='Observation Time :'+data.time
          msg6.textContent='Feels Like :'+data.feelslike
      }
    })

})

})