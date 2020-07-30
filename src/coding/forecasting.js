const request=require('request')

const forecasting=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=47839e390861acff34ff424510cf0f18&query='+latitude+','+longitude+'&unit=f'

    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect Network...forecast',undefined)
        }else if(response.body.error){
            callback('Incorrect location coordinates...forecast',undefined)

        }else{
            callback(undefined,{
               forecast:response.body.current.weather_descriptions[0],
               humidity:response.body.current.humidity,
               temperature:response.body.current.temperature
            })
        }

    })

}
module.exports=forecasting