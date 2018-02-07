<template lang='pug'>
  div(v-if='forecastData.alerts !== undefined')
    v-container(grid-list-xl)
      h2 Warning
      div(v-for='alert in forecastData.alerts').alert--bg
        h5.white--text {{alert.title}}
        p.white--text This is for the following areas:&nbsp;
          strong
            span(v-for='(region, index) in alert.regions') {{region}}
              span(v-if='index + 1 < region.length') ,&nbsp;
        p.white--text {{alert.description}}
</template>

<script>
  export default {
    name: 'forecast-warnings',
    props: ['forecastdata'],
    data () {
      return {
        forecastData: this._props.forecastdata,
      }
    },
    methods: {
      convertToDay(value, format){
        return moment(value*1000).format(format);
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
