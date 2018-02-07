# Forecast Weatherapp Demo


### Preview
[Click here](https://vue-weather-forecast.herokuapp.com/)
<br>
*Could take a minute - the server sleeps when not in use*
 

### Install instructions:
```sh
$ git clone https://github.com/allenRoyston/weather-forecast-demo.git
$ cd weather-forecast-demo
$ npm install
$ gulp  
OR
$ npm run dev 
```

### Okay, but why Gulp?
We're using Webpack, so why do we even need Gulp?  Well an interesting problem came up when I was trying to access an endpoint in my server.js file.  The route (api/forecast/:city) is only available when the server is running, but Webpack can't start the Express server since it essentially starts and serves itself.  In otherwords, to access my server AND utilize the benefits of Webpack, both need to be running in tandum.  

Gulp will ensure that three key things happen: 1.) that the server is started, 2.) changes that will effect the site will be trigger Webpack and be rebundled, and 3.) will reload the browser once all changes are complete.  The best of both worlds, so to speak.  

The cons of this approach are that Webpack builds can be kinda slow - usually around 3-10 seconds depending on your computer and the number of files that need to be bundled.  If you don't need to mess with the endpoints (or want to use mock data instead), then running *npm run dev* will ONLY start webpack and it's hotloading.  Whenever you hit an endpoint, it'll just return a 404.

This is NOT IDEAL and I'll need to find a better solution.  However, for the interim, it's recommended to build out components first via npm run dev, then touch things up with gulp.  

### So why even bother with Express?
This build is an all encompassing solution that makes developing AND deployming extremely simple.  It's literally what you see when you develop is what you'll get when you deploy - a facet that, quite frankly, is underappretiated.  A streamlined build/deploy can save time and money, plus you get all the benefits of GZIP compression, Cache-Control and easily customizable scripting that comes with the Express Engine.  Plus, adding a database and endpoints are also much easier compared to some of the other more (needlessly complex) frameworks available.

Also, if you're using a service like Heroku, deploying is SUPER simple.  (See below).

### Deploy to Live Environment (Heroku Example):
```sh
// run npm install, gulp, and make your changes
$ npm run build
$ git push heroku master
```

### Things that went well
- small final build at < ~~320kb~~ 263kb (without images)
- fast
- parallax scrolling always look neat (even in mobile)
- mobile friendly 
- easy dev to deployment process

### Optimization Score
https://gtmetrix.com/reports/vue-weather-forecast.herokuapp.com/UqajhjGM

### Future Implementations
- Mobile optimization
- ~~Server side rendering~~ I think this works now... *shrug*
- Image optimization
- ~~Cleaner/more reliable webpack build~~
- ~~Better visuals on Forecast page~~
- Unit testing
- ~~Fahrenheit/Celcius conversion (actually built in, just didn't add it in time - damnit)~~
- More robust API
- ~~Fix that damn footer~~
- ~~Instantiate server seperate from the webpack build~~


### Additional stuff
- ~~When running npm run builddev or buildserver, sometimes webpack will respond with a minification error.  There's still issues with Babels being unable to minifying some ES6 features.  Will need to wait for a patch before being able to resolve this. https://github.com/mishoo/UglifyJS2/issues/448~~  FIXED BECAUSE I'M AWESOME

