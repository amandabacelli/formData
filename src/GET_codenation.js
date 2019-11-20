const request = require("request")
const url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=fa452203efa6d2b31f94fee053fa11ed02635606'

request(url, function (error,response, body){
    console.log('error: ', error)
    console.log('statusCode: ', response && response.statusCode)
    let data = JSON.parse(body)
    console.log('body: ', data)
    
})
