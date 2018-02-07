const express = require('express')
const request = require('request')
const fs = require('fs')
const path = require('path')
const index = fs.readFileSync(path.join(__dirname, './index.html'), 'utf8')
const compression = require('compression');
const app = express()

// I'M SO EXPOOOSEED!!!
const darkSkiesKey = "e77dba0cdb84e26c9accd444053db3cf";
const googleApiKey = 'AIzaSyBXEkCer6TGy2QevaKV3n4Fokf5LC114N8'

// setup compression
app.use(compression())

// set cache headers
app.use(function (req, res, next) {
  let day = (86400000 / 1000),
      numberOfDays = 7;
  if (!res.getHeader('Cache-Control')) res.setHeader('Cache-Control', 'public, max-age=' + (day * numberOfDays));
  next()
})

// read from folder /dist
app.use('/src', express.static(path.join(__dirname, './src')))
app.use('/dist', express.static(path.join(__dirname, './dist')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

// for live data
app.get('/api/forecast/:city', (req, res) => {
  request(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.city}&key=${googleApiKey}`, (error, response, body) => {
    let {lat, lng} = JSON.parse(body).results[0].geometry.location
    request(`https://api.darksky.net/forecast/${darkSkiesKey}/${lat},${lng}`, (error, response, body) => {
      console.log(body)
      //res.send(JSON.parse(body))
    })
  })
  //
  // request("http://api.openweathermap.org/data/2.5/forecast?q=" + req.params.city + "&mode=json&appid=" + openWeatherAppKey, function (error, response, body) {
  //   res.send(JSON.parse(body))
  // })
})

app.get('*', (req, res) => {
  res.send(index)
})



// Serve the files on port 3000.
app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port ' + (process.env.PORT || 3000) + '\n' );
});
