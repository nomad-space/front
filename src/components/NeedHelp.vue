<template>
  <div class="h-help">
    <div class="h-help-lbl">Need Nomad Help?</div>
    <div class="h-help-lbl-a">We would be happy to help you!</div>
    <div class="h-help-phone">1 - 555 - 555 - 555</div>
    <div class="h-help-email">support@nomad.space</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        context: 'need help context',

        data: {
        },

        error: null
      }
    },

    methods: {
    }
  }
</script>

<style>

.h-help {background:#fff; padding:21px 20px 21px 20px; margin-bottom:28px;}
.h-help-lbl {font-family:'Montserrat'; margin-bottom:8px; color:#4c4c4c; font-weight:normal; font-size:16px;}
.h-help-lbl-a {font-family:'Raleway'; margin-bottom:15px; font-weight:500; font-size:11px; text-transform:uppercase; color:#747d7e;}
.h-help-phone {font-family:'Open Sans'; font-size:20px; color:#4a90a4; background:url(../assets/img/h-phone.png) left top no-repeat; padding:0px 0px 0px 23px; background-position:left 5px;}
.h-help-email {font-family:'Raleway'; margin:6px 0px 0px 23px; font-size:13px; color:#888888;}

</style>
