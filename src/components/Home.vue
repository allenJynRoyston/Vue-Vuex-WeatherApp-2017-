<template lang="pug">
  div
    main
      section
        v-parallax(src='src/assets/hero.jpg', height='600')
          v-layout.white--text(column='', align-center='', justify-center='')
            h1.white--text.mb-2.display-3 Weather Demo
            .headline.mb-3.text-xs-center Powered by Vue | Vuetify | ES6 | Webpack | Express4 
            a(@click='backToTop()')
              router-link(@click='backToTop()' to="/forecast")
                v-btn.blue.lighten-2.mt-5.dark.large Forecast
    section
      v-layout.my-5.column.wrap.align-center
        v-flex.my-3.xs12.sm4
          .text-xs-center
            h2.headline Who doesn't love a good weather realted pun?
            span.subheading
              | The brightest day of the week is Sun-day!
        v-flex(xs12='')
          v-container(grid-list-xl='')
            v-layout(row='', wrap='', align-center='')
              v-flex(xs12='', md4='')
                v-card.elevation-0.transparent
                  v-card-text.text-xs-center
                    v-icon.blue--text.text--lighten-2(x-large='') color_lens
                  v-card-title.layout.justify-center(primary-title='')
                    .headline.text-xs-center Vue & Vuetify
                  v-card-text
                    | Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    | Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    | Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              v-flex(xs12='', md4='')
                v-card.elevation-0.transparent
                  v-card-text.text-xs-center
                    v-icon.blue--text.text--lighten-2(x-large='') flash_on
                  v-card-title.layout.justify-center(primary-title='')
                    .headline Express & Heroku
                  v-card-text
                    | Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    | Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    | Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              v-flex(xs12='', md4='')
                v-card.elevation-0.transparent
                  v-card-text.text-xs-center
                    v-icon.blue--text.text--lighten-2(x-large='') build
                  v-card-title.layout.justify-center(primary-title='')
                    .headline.text-xs-center ES6 & Webpack
                  v-card-text
                    | Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    | Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    | Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
    section
      v-parallax(src='src/assets/road.jpg', height='380')
        v-layout(column='', align-center='', justify-center='')
          .headline.white--text.mb-3 Weather checking is literally as simple as clicking this button
          a(@click='backToTop()')
            router-link(to="/forecast")
              v-btn.blue.lighten-2.mt-5.dark.large Forecast

    section
      v-container(grid-list-xl='')
        v-layout.my-5(row='', wrap='', justify-center='')
          v-flex(xs12='', sm4='')
            v-card.elevation-0.transparent
              v-card-title.layout.justify-center(primary-title='')
                .headline Company info
              v-card-text
                | Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                | Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                | Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
          v-flex(xs12='', sm4='', offset-sm1='')
            v-card.elevation-0.transparent
              v-card-title.layout.justify-center(primary-title='')
                .headline Contact us
              v-card-text
                | Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              v-list.transparent
                v-list-tile
                  v-list-tile-action
                    v-icon.blue--text.text--lighten-2 phone
                  v-list-tile-content
                    v-list-tile-title 555-555-5555
                v-list-tile
                  v-list-tile-action
                    v-icon.blue--text.text--lighten-2 place
                  v-list-tile-content
                    v-list-tile-title Edinburgh, UK
                v-list-tile
                  v-list-tile-action
                    v-icon.blue--text.text--lighten-2 email
                  v-list-tile-content
                    v-list-tile-title allen.royston.uk@gmail.com
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Hello World'
    }
  },
  created: function () {

  },
  methods: {
    backToTop(){
      document.body.scrollTop = 0;            // For Chrome, Safari and Opera
      document.documentElement.scrollTop = 0; // For IE and Firefox
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .title-logo
    width: 50px
    height: 50px
</style>
