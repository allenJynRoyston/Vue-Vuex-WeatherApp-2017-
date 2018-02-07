# Forecast Weatherapp + Darksky's API

### What the funk?!


### Preview
Live preview can be found [here](https://darkski-weather-api.herokuapp.com/#/)
<br>
*Could take a minute - the server sleeps when not in use*
 
### Prerequisites
- npm
- Darkski's API key
- Google API key
Don't forget, two secret keys are required for this to work:  one from Google and one form Darksky.  Both are free.  
You'll need to place them in the file apiKeys.json in the root folder.
```
{
  "darkSkiesKey": "<yourSecretKey>",
  "googleApiKey": "<yourSecretKey>"
}
```

### Full local install (server + webpack):
Install, start server with live reload when editing.
```sh
$ git clone https://github.com/allenRoyston/designX-weather-app.git
$ cd designX-weather-app
$ npm install
$ npm run build
$ gulp
```

### Webpack and HotReload (webpack only):
This is faster then the Gulp build, but the server is unavailable.  To get this working with webpack, you'll have to simulate a response.  Do this by making one simple edit in the src/components/elements/CityInput.vue and uncomment the following line:
```sh
let jsn = await this.$http.get(`/src/assets/testdata.json`); let res = {body: {success: true, payload: jsn.body}}
```

Then start Webpack with the following.
```sh
$ npm run dev
```

### Deploy to Live Environment (Heroku Example):
```sh
// run npm install, gulp, and make your changes
$ npm run build
$ git push heroku master
```

