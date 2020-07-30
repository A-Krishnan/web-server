const request=require('request')

const geocoding=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYWpheWtyaXNobmFuIiwiYSI6ImNrY3E2bzV4OTExeHEycnM2dnJ1OW8zMDYifQ.Wof8BczAXl3AAfldVZzJdA'
    
    request({url,json:true},(error,response)=>{
        if(error){
         callback('Unable to connect to Network..geocode',undefined)
        }else if(response.body.features.length === 0){
            callback('Incorrect location ...geocode ',undefined)
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }

    })

}

module.exports=geocoding