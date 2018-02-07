<template lang='pug'>
  v-app#app
    page-header
    router-view
    page-footer
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang='css'>
  @import './assets/vuetify.min.css';
</style>

<style lang='scss'>
#app {
   a {
     cursor: pointer!important;
     text-decoration: none!important
   }
}
</style>
