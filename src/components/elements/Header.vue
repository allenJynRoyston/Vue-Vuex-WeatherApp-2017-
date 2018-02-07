<template lang='pug'>
  v-toolbar
    v-toolbar-title
      router-link(to="/") Forecast Weather App Demo
    v-spacer
    v-toolbar-side-icon.hidden-md-and-up
    v-toolbar-items.hidden-sm-and-down
        router-link(to="/")
          .flat
            img.title-logo(src='src/assets/weather.png')
  </template>

  <script>
  export default {
    name: 'app'
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="sass" scoped>
    .title-logo
      width: 50px
      height: 50px
  </style>
