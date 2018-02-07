# Forecast Weatherapp + Darksky's API

### What the funk?!
Full disclosure, this is built off a very similar project I completed as a proof of concept a few months ago, located [here](https://github.com/allenRoyston/weather-forecast-demo).  It uses a lot of the same technologies.  However, this build is signifigantly different in terms of features and complexity and as such, much improved over its predecessor.  

### Technologies used
- VueJS
- Vuex
- Vuetify
- Webpack
- ExpressJS/Node
- Pug
- SASS
- Gulp
- DarkSky (just the API, not a library)

### About
This proof of concept is a SPA (single page app) built with the modern web component framework, Vue.  It also utilizes the "single source of truth" via Vuex to handle it's view/model bindings.  Pug is used as my HTML templating system because it's clean and concise (and much less a headache to look at than standard HTML) while SASS is used in much the same way to deal with CSS.  Webpack is used to bundle all the required resources into a single /dist/main.js file.  

The only tricky part was getting the DarkSky API to look up an weather dated with only a city name.  This can not be accomplished on its own since the API requiers a lat/long for it's services to work; therefore, Google's Geocode API is called first to get the lat/long and before passing that data onto Darksky's API.  Finally, the weather data payload is returned.  All this is done in a single GET, which is can be found in the server.js file and called in the src/components/element/CtyInput.vue component.

Lastly, it deserves to be mentioned that because this proof of concept requires API keys to reach both DarkSky and Google, for security reasons they won't be provided.  You'll have to supply your own.  See Prerequisites below for more information.

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

