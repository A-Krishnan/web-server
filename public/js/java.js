


const form=document.querySelector('form')
const input=document.querySelector('input')
const msg1=document.querySelector('#para1')
const msg2=document.querySelector('#para2')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
   const val=input.value
   msg1.textContent='Loading....'
   msg2.textContent=' '
   fetch('http://localhost:3000/weather?address='+val).then((response)=>{
    response.json().then((data)=>{
      if(data.error)
      {
       msg1.textContent=data.error
      }else{
          console.log(data.location)
          console.log(data.temperature)
          console.log(data.forecast)
          console.log(data.humidity)
          msg1.textContent=data.location
          msg2.textContent=data.forecast
          
          
      }
    })

})

})