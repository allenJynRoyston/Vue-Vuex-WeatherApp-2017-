<template lang='pug'>
  div
    v-container(grid-list-xl)
      h2 Weekly Forecast
      v-layout(row wrap align-center)
          v-flex.xs12.md3(v-for='(day, index) in forecastData.daily.data' :key='day.time')
            v-card.elevation-3
              v-card-text.text-xs-center
                | {{day.icon}}
              v-card-title.layout.justify-center(primary-title)
                .headline.text-xs-center
                  a(@click='setDailyData(day, index)') {{convertToDay(day.time, 'dddd')}}
                  br
                  | {{convertToDay(day.time, 'MMM')}} {{convertToDay(day.time, 'DD')}}
              v-card-text.text-xs-center
                | Highs & Lows:
                br
                a(@click='convertTemperature()') {{ convertDegrees(day.temperatureHigh) }}{{degreeType}}  &nbsp;&nbsp; {{ convertDegrees(day.temperatureLow) }} {{degreeType}}
                br
                br
                p {{day.summary}}
</template>

<script>
  export default {
    name: 'forecast-chart',
    props: ['forecastdata'],
    data () {
      return {
        router: this.$router,
        store: this.$store,
        forecastData: this._props.forecastdata,
        degreeType: '°C'
      }
    },
    methods: {
      setDailyData(data, index){
        this.store.commit('setDailyData', {data: data, index: index})
        this.router.push(`/daily/${this.$route.params.city}/${this.convertToDay(data.time, 'dddd')}`)
      },
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
