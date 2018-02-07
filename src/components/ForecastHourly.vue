<template lang='pug'>
  div
    v-container(grid-list-xl)
      h2 Hourly Forecast
      v-data-table.elevation-3(v-bind:headers='tableHeaders' :items="forecastData.hourly.data" )
        template(slot='items', slot-scope='props')
          td {{convertToDay(props.item.time, 'MMM')}} {{convertToDay(props.item.time, 'DD')}} &nbsp;&nbsp; {{ convertToDay(props.item.time, 'HH:mm') }}
          td.text-xs-right {{ props.item.summary }}
          td.text-xs-right {{ props.item.humidity }}
          td.text-xs-right {{ props.item.pressure }}
          td.text-xs-right
            a(@click='convertTemperature()') {{ convertDegrees(props.item.temperature) }}{{degreeType}}
          td.text-xs-right(v-if='props.item.precipProbability > 0') {{ (props.item.precipProbability * 100).toFixed(0) }}% of {{props.item.precipType}}
</template>

<script>
  export default {
    name: 'forecast-hourly',
    props: ['forecastdata'],
    data () {
      return {
        forecastData: this._props.forecastdata,
        tableHeaders: [
          {text: 'Time', value: 'time'},
          {text: 'Summary', value: 'description'},
          {text: 'Humidity', value: 'humidity'},
          {text: 'Pressure', value: 'pressure'},
          {text: 'Temperature', value: 'temperature'},
          {text: 'Notes', value: 'notes'}
        ],
        degreeType: '°C'
      }
    },
    methods: {
      convertToDay(value, format){
        return moment(value*1000).format(format);
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
          return value
        }
        if(this.degreeType === '°F'){
          return Math.round( parseInt(value) * 1.8 - 32 ).toFixed(0)
        }
      },
    }
  }
</script>

<style lang="sass" scoped>
  .alert--bg
    p
      font-size: 11px
    background-color: #e67e22
    padding: 10px 15px 15px 10px
    margin-bottom: 10px
    border-radius: 15px
</style>
