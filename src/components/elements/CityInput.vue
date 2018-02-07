<template lang='pug'>
  div
    v-card.grey.lighten-4.elevation-2
        v-card-text
            v-container
              v-layout.row
                v-flex.xs12
                  v-text-field.black--text(v-model="search" @keyup="keymonitor" label='Enter a city name' :disabled='isLoading')
                  p.red--text(v-if='hasError') Invalid search
              v-layout.row(v-if='isLoading')
                  v-flex.text-xs-center
                    v-progress-circular.center(indeterminate color="amber")
              v-layout.row(v-if='!isLoading')
                v-flex.xs6
                  v-chip.blue.cursor(@click='getForecast(search)')
                    a.white--text Get Forecast
                v-flex.xs6
                  v-chip.red.cursor.right(@click='clearSearch()')
                    a.white--text Clear
</template>

<script>
  export default {
    name: 'city-input',
    props: ['cityName', 'autoSearch'],
    data () {
      return {
        router: this.$router,
        store: this.$store,
        search: this._props.cityName,
        initName: this._props.cityName ? this._props.cityName : null,
        startSearchAutomatically: this._props.autoSearch ? this._props.autoSearch : false,
        hasError: false,
        isLoading: false
      }
    },
    mounted(){
      if(this.initName !== null && this.startSearchAutomatically){
        this.getForecast(this.initName)
      }
    },
    methods: {
      keymonitor(event) {
        if(event.keyCode === 13 && this.search.length > 0){
  			   this.getForecast(this.search)
        }
      },
      async getForecast(search){
        try{
          this.hasError = false
          this.store.commit('setIsLoading', true)
          this.isLoading = true;

          /* ENABLE FOR LIVE DATA */
          let res = await this.$http.get(`/api/forecast/${search}`);
          /* ENABLE FOR TEST DATA */
          //let jsn = await this.$http.get(`/src/assets/testdata.json`); let res = {body: {success: true, payload: jsn.body}}

          this.store.commit('setIsLoading', false)
          this.isLoading = false;
          if(res.body.success){
            this.router.push({ path: `/forecast/${search}` })
            this.store.commit('setWeatherData', {success: true, city: this.search, data: res.body.payload})
          }
          else{
            this.hasError = true
          }

        } catch (reason) {
          this.store.commit('setIsLoading', false)
          this.isLoading = false;
          this.store.commit('setWeatherData', {success: false, data: reason})
        }
      },
      clearSearch(){
          this.store.commit('setWeatherData', {success: false, data: null})
      }
    }
  }
</script>

<style lang="sass" scoped>
  .footer
    width: 100%
    height: 90px
    background-color: black
    color: white
  .footer-text
    padding: 20px
</style>
