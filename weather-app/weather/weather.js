const request = require('request')

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/cdb879d50cb4242b2c790d5797a2fc03/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather data');
    }
  })
}

module.exports = {
  getWeather
}
