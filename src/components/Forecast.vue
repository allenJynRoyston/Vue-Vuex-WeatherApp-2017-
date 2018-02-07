<template lang="pug">
  .container.weather-container
      v-card.grey.lighten-4.elevation-2
          v-card-text
              v-container
                v-layout.row
                  v-flex.xs4
                    v-subheader.black--text
                      v-icon(large) keyboard
                  |
                  v-flex.xs8
                    v-text-field.black--text(v-model="cityName" @keyup="keymonitor" label='Enter a city name (i.e. Edinburgh, London, Glasgow)')
      div(v-if='isReady')
        br
        p
          span.left
            v-chip.red.cursor
              a(@click='clearResults()').white--text Clear Results
          span.right
            | {{count}} results found for&nbsp;
            strong {{forecastResults.city.name.toUpperCase()}}
        br
        div(v-for='(value, key) in dateObject')
          br
          br
          h4 {{key}}
            small.right.text-orange {{convertToDay(dateObject[key][0].dt_txt, "MMM Do YYYY")}}
          v-data-table.elevation-3(v-bind:headers='tableHeaders' :items='dateObject[key]')
              template(slot='items', slot-scope="props")
                td.text-xs-right {{ convertToDay(props.item.dt_txt, 'hh:mm A') }}
                td.text-xs-right(v-for='weather in props.item.weather') {{ weather.description.toUpperCase() }}
                td.text-xs-right {{props.item.main.humidity}}
                td.text-xs-right {{props.item.main.pressure}}
                td.text-xs-right
                  a(@click='convertTemperature()') {{ convertDegrees(props.item.main.temp) }}{{degreeType}}
                td.text-xs-right
                  a(@click='convertTemperature()') {{ convertDegrees(props.item.main.temp_max) }} / {{ convertDegrees(props.item.main.temp_min) }}{{degreeType}}

      div(v-if='forecastResults !== null')
        br
        br
        br
        v-chip.red.cursor.right
          a.right(@click='backToTop()').white--text Back to top
        br
        br
        br
</template>

<script>

export default {
  name: 'forecast',
  data () {
    return {
      store: this.$store,
      isReady: false,
      cityName: null,
      searchResults: null,
      degreeType: '°F',
      dateObject: {},
      count: null,
      forecastResults: null,
      tableHeaders: [
        {text: 'Time', value: 'time'},
        {text: 'Description', value: 'description'},
        {text: 'Humidity', value: 'humidity'},
        {text: 'Pressure', value: 'pressure'},
        {text: 'Temperature', value: 'temp'},
        {text: 'Max / Min', value: 'maxmin'}
      ]
    }
  },
  created: function () {
    console.log(this.store)
  },
  methods: {
    async getForecast(cityName){
      try{
        this.clearResults()
        /* ENABLE FOR LIVE DATA */
        //let res = await this.$http.get(`/api/forecast/${cityName}`);

        /* ENABLE FOR TEST DATA */
        let res = await this.$http.get(`/src/assets/testdata.json`);
        console.log(res.body)

        let _dateObj = this.formatResults(res.body.list);
        this.forecastResults = res.body;
        this.dateObject = _dateObj.results;
        this.count = _dateObj.count;
        this.isReady = true;
      } catch (reason) {

      }
    },
    formatResults(data){
      let _results = {};
      let count = 0;
      for (let item of data){
        let key = moment(item.dt_txt).format('dddd');
        if(!_results.hasOwnProperty(key)){
          _results[key] = []
        }
        count++;
        _results[key].push(item)
      }
      return {results: _results, count: count};
    },
    clearResults(){
      this.forecastResults = null;
      this.dateObject = {};
      this.count = 0;
      this.isReady = false;
    },
    keymonitor(event) {
      if(event.keyCode === 13){
        if(this.cityName.length > 0){
			    this.getForecast(this.cityName)
        }
      }
    },
    convertTemperature(){
      if(this.degreeType == '°F'){
        this.degreeType = '°C'
      } else {
        this.degreeType = '°F'
      }
      this.convertDegrees(this.degreeType)
    },
    convertDegrees(value){
      if(this.degreeType === '°C'){
        return Math.round(parseInt(value) - 273.15).toFixed(0);
      }
      if(this.degreeType === '°F'){
        return Math.round( parseInt(value) * 9/5 - 459.67 ).toFixed(0)
      }
    },
    convertToDay(value, format){
      return moment(value).format(format);
    },
    backToTop(){
      document.body.scrollTop = 0;            // For Chrome, Safari and Opera
      document.documentElement.scrollTop = 0; // For IE and Firefox
    }
  }
}
</script>


<style lang="sass" scoped>
  p
    color: darkorange

  .cursor
    border: 2px solid green
    cursor: pointer
    color: white

  .weather-container
      min-height: 1000px
</style>
