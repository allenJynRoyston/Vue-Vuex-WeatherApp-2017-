const express = require('express'),
      request = require('request'),
      fs = require('fs'),
      path = require('path'),
      index = fs.readFileSync(path.join(__dirname, './index.html'), 'utf8'),
      compression = require('compression'),
      app = express(),
      {darkSkiesKey, googleApiKey} = JSON.parse(fs.readFileSync('apiKeys.json', 'utf8'));


// setup compression
app.use(compression())

// set cache headers
app.use((req, res, next) => {
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
  // first, I need to get long/latitude
  request(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.city}&key=${googleApiKey}`, (error, response, body) => {
    // now get darksky information
    payload = JSON.parse(body).results[0];
    if(payload === undefined){
      res.send({success: false})
    }
    else{
      let {lat, lng} = payload.geometry.location
      request(`https://api.darksky.net/forecast/${darkSkiesKey}/${lat},${lng}`, (error, response, body) => {
        res.send({success: true, payload: JSON.parse(body)})
      })
    }
  })
})

app.get('*', (req, res) => {
  res.send(index)
})



// Serve the files on port 3000.
app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port ' + (process.env.PORT || 3000) + '\n' );
});
