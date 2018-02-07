<template lang="pug">
  .container.weather-container(v-if='dailyData !== null && dailyData.data !== undefined')
    v-container(grid-list-xl)
      a(@click='goBackOne()') Back
      v-layout(row wrap align-center)
        v-flex(xs12)
          v-card.elevation-3
            v-card-text.text-xs-center
              h2 {{ convertToDay(dailyData.data.time, 'dddd') }}, {{ convertToDay(dailyData.data.time, 'LL') }}
            v-card-title.layout.justify-center(primary-title)
              .headline.text-xs-center
                .black--text
            v-card-text
              p.black--text(v-for="(value, key) in dailyData.data")
                | {{parseText(key)}} : {{value}}
      v-chip.red.cursor.right(@click='backToTop()')
        a.right.white--text Back to top
</template>

<script>

export default {
  name: 'dailycast',
  data () {
    return {
      router: this.$router,
      store: this.$store,
      dailyData: this.$store.getters._dailyData()
    }
  },
  mounted: function () {
    this.backToTop()
    if(this.dailyData === null){
      this.router.push('/')
    }
  },
  methods: {
    goBackOne(){
      this.backToTop()
      this.router.push(`/forecast/${this.$route.params.city}`)
    },
    convertToDay(value, format){
      return moment(value*1000).format(format);
    },
    parseText(text){
      let result = text.replace( /([A-Z])/g, " $1" );
      return result.charAt(0).toUpperCase() + result.slice(1);
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
