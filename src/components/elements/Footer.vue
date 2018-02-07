<template lang='pug'>
  div.footer
    .footer-text
      | Made with &nbsp;&nbsp;
      v-icon.red--text favorite
      a(href='mailto:allen.royston.uk@gmail.com') &nbsp;&nbsp; Contact me at allen.royston.uk@gmail.com
</template>

<script>
  export default {
    name: 'page-footer'
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
