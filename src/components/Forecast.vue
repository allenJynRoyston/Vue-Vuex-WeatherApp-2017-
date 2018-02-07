<template lang="pug">
    .container.weather-container
        city-input(v-bind:cityName='cityName' v-bind:autoSearch='true')
        br
        a.right(v-if='forecastData !== null && forecastData.alerts !== undefined' @click='changeWarningState(!show.warnings)')
          span(v-if='show.warnings') Hide&nbsp;
          span(v-if='!show.warnings') Show&nbsp;
          | Warnings &nbsp;&nbsp;
        v-progress-linear(v-if='isLoading' indeterminate=true )

        div(v-show='!isLoading')
          p.left(v-if='forecastData !== null')
            | Search results for:&nbsp;&nbsp;{{$route.params.city}}&nbsp;&nbsp;({{forecastData.timezone}})&nbsp;&nbsp;Lat/long:{{forecastData.latitude}} | {{forecastData.longitude}}
          br
          forecast-warnings(v-if='forecastData !== null && forecastData.alerts !== undefined && show.warnings' v-bind:forecastdata='forecastData')
          forecast-hourly(v-if='forecastData !== null' v-bind:forecastdata='forecastData')
          forecast-weekly(v-if='forecastData !== null' v-bind:forecastdata='forecastData')
          .backToTop(v-if='forecastData !== null')
            v-chip.red.cursor.right(@click='backToTop()')
              a.right.white--text Back to top
</template>

<script>

export default {
  name: 'forecast',
  data () {
    return {
      router: this.$router,
      store: this.$store,
      cityName: this.$route.params.city ? this.$route.params.city : 'Edinburgh',
      forecastData: null,
      isLoading: this.$store.getters._isLoading(),
      show: {
        warnings: this.$store.getters._showWarnings(),
      }
    }
  },
  mounted: function () {
    this.backToTop();
    this.store.watch(this.store.getters._weatherData, (val) => {
      this.forecastData = val.success ? val.data : null;
    })
    this.store.watch(this.store.getters._isLoading, (val) => {
      this.isLoading = val;
      console.log()
    })
  },
  methods: {
    changeWarningState(newState){
      this.show.warnings = newState;
      this.store.commit('setShowWarnings', newState)
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

  .backToTop
    padding: 50px
</style>
