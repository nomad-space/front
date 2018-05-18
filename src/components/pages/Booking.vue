<template>
  <div class="body-wrapper">
    <div class="wrapper-padding">
      <div class="page-head">
        <div class="page-title">Hotels - <span>booking</span></div>
        <div class="breadcrumbs">
          <a href="#">Home</a> / <a href="#">Hotel</a> / <span>hotel booking</span>
        </div>
        <div class="clear"></div>
      </div>

      <div class="sp-page">
        <div class="sp-page-a">
          <div class="sp-page-l">
            <div class="sp-page-lb">
              <div class="sp-page-p">
                <div class="booking-left">
                  <h2>Your Personal Information</h2>
                  <div class="booking-form">
                    <div class="booking-form-i">
                      <label>First Name:</label>
                      <div class="input"><input type="text" :value="$auth.user().firstname" value=""></div>
                    </div>
                    <div class="booking-form-i">
                      <label>Last Name:</label>
                      <div class="input"><input type="text" :value="$auth.user().lastname" value=""></div>
                    </div>
                    <div class="booking-form-i">
                      <label>Email Adress:</label>
                      <div class="input"><input type="text" :value="$auth.user().email" value=""></div>
                    </div>
                    <div class="booking-form-i">
                      <label>Confirm Email Adress:</label>
                      <div class="input"><input type="text" :value="$auth.user().email" value=""></div>
                    </div>
                    <div class="booking-form-i">
                      <label>Country code:</label>
                      <div class="input"><input type="text" value=""></div>
                    </div>
                    <div class="booking-form-i">
                      <label>Preferred Phone Number:</label>
                      <div class="input"><input type="text" :value="$auth.user().phone" value=""></div>
                    </div>
                    <div class="clear"></div>
                    <div class="checkbox">
                      <label>
                        <!--<input type="checkbox" value="" style="position: absolute; left: -9999px;"><span class="jq-checkbox" style="display: inline-block"><span></span></span>-->
                        <input type="checkbox" value="">
                        I want to receive Nomad news in the future
                      </label>
                    </div>
                    <div class="booking-devider"></div>
                  </div>
                  <h2>How would you like to pay?</h2>
                  <Payment/>
                  <div class="booking-complete">
                    <h2>Review and book your trip</h2>
                    <p>Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui voluptatem sequi nesciunt. </p>
                    <button class="booking-complete-btn">COMPLETE BOOKING</button>
                  </div>

                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>

        <div class="sp-page-r">
          <Checkout :asd="context" :searchParams="this.$route.params" @send="" />
          <NeedHelp/>
        </div>
        <div class="clear"></div>
      </div>

    </div>
  </div>
</template>

<script>
  import Checkout from '@/components/Checkout'
  import NeedHelp from '@/components/NeedHelp'
  import Payment from '@/components/Payment'
  export default {
    components: {
      Payment,
      NeedHelp,
      Checkout
    },
    data () {
      // console.log(this.$route)
      // console.log('this.$config', this.$config('api.search'))
      // console.log(this.$route.params)
      // console.log(this.$route.params.searchId)

      return {
        context: 'booking context',

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
  body {
    background-color: #fafafa;
  }
  nav ul, nav ul li {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }


  html { -webkit-text-size-adjust: auto; -ms-text-size-adjust: auto; }
  html, body, img, form {margin: 0px; padding: 0px; border: none; letter-spacing:normal;}
  html, body {height:100%;-webkit-font-smoothing: antialiased;}
  body {background-color:#fafafa;}
  body.inner-body {background-color:#fff;}
  body.gray-inner {background-color:#fafafa;}
  body, td {font: 14px Arial, sans-serif; color: #000;}
  a {color: #000;	text-decoration: underline;}
  a:hover {text-decoration: none;}
  td {vertical-align: top;}
  p {padding: 0px; margin: 0px 0px 14px 0px;}
  object {outline:none;}
  fieldset {border:0;}
  input,select,textarea,button {outline: none !important;}
  h1 {font-size:17px; padding: 0px; margin: 0px 0px 10px 0px;}
  h2 {font-size:15px; padding: 0px; margin: 0px 0px 10px 0px;}
  h3 {font-size:13px; padding: 0px; margin: 0px 0px 10px 0px;}
  .clear {clear:both;}
  .none {line-height:0;}
  .relative {width:100%; position:relative;}
  .img-marg {float:left; margin:0 10px 5px 0;}
  .float-l {float:left;}
  .float-r {float:right;}
  .highlight {font-weight: bold;}
  .hfeed .posts {margin-bottom:10px;}
  input,select,button,textarea {outline:none;}
  .body-padding {padding-bottom:30px;}
  .index-page .body-padding {padding-bottom:0px;}
  .body-wrapper {padding-bottom:110px;padding-top:30px;}
  #top {position:fixed;left:0px;top:0px;width:100%;z-index:999;}
  .mobile-menu {background:#141d1e; display:none; width:100%; position:absolute; left:0px; top:89px; padding-top:27px; padding-bottom:26px;}
  .mobile-menu li {display:block; padding:0px 60px 0px 60px;}
  .mobile-menu li a {font-size:12px; color:#fff; font-family:'Raleway'; display:block; padding:14px 0px 14px 0px; font-weight:600; text-transform:uppercase; text-decoration:none; border-bottom:1px solid #1a2526;}
  .mobile-menu li a:hover {color:#ff7200;}
  .mobile-menu li:last-child a {border-bottom:0px;}
  .mobile-menu li ul {display:none;}
  .mobile-menu li li {padding:0px;}
  .mobile-menu li li:last-child a {border-bottom:1px solid #1a2526;}
  .mobile-menu li li a {padding-left:10px; padding-right:10px; }
  .fixed .mobile-menu {top:59px;}

  .inpt-comment {width:100%; float: left;}
  .inpt-comment-l {margin:0px 79px 0px 0px;}
  .inpt-comment-lb {width:100%; float:left; overflow:hidden;}
  .inpt-comment-r {width:79px; float:left; overflow:hidden; margin:0 0 0 -79px;}
  .inpt-comment-r .padding {text-align:right; padding:7px 0px 0px 10px;}
  .inpt-comment-r a {text-decoration:none; font-size:11px; color:#626262;}
  .inpt-comment-r a:hover {color:#ff7200;}

  .page-title {float: left; font-family: 'Montserrat'; font-size: 15px; text-transform: uppercase; color:#141d1e; font-weight:normal;}
  .page-title span {color:#788687;}

  .breadcrumbs {float: right; text-transform: uppercase; font-size: 11px; color:#828282; font-family:'Raleway'; font-weight: 600;}
  .breadcrumbs a {text-decoration: none; margin:0px 7px 0px 7px; color:#828282;}
  .breadcrumbs span {color:#4a90a4; margin:0px 0px 0px 7px;}
  .page-head {padding-bottom: 30px;}

  .sp-page-a {width:100%; float: left;}
  .sp-page-l {margin:0px 348px 0px 0px;}
  .sp-page-lb {width:100%; float:left; overflow:hidden;}
  .sp-page-r {width:348px; float:left; overflow:hidden; margin:0 0 0 -348px;}
  .sp-page-p {padding-right:29px;}

  .booking-left {background:#fff; padding:22px 19px 29px 19px; font-family:'Raleway';}
  .booking-left h2 {font-weight:normal; font-family:'Montserrat'; margin-bottom:18px; font-size:16px; color:#4c4c4c;}
  .booking-form-i label {font-size:12px; display:block; margin-bottom:11px; color:#626262;}
  .booking-form-i {width:48.55%; margin-bottom:18px; float:left;}
  .booking-form-i:nth-child(2n) {float:right;}

  .booking-form-i .input {padding:6px 10px 6px 10px; border:1px solid #e3e3e3; -webkit-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.04);-moz-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.04); box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.04); border-radius:2px;}
  .booking-form-i .input input[type='text'] {border:0px; width:100%; font-size:14px; font-family:'Raleway';}
  .booking-form .checkbox {margin-top:2px;}
  .booking-form .checkbox label {font-size:12px; font-weight:500; color:#848484; font-family:'Raleway'; cursor:pointer;}
  .booking-form .checkbox .jq-checkbox {margin-right:7px;}
  .booking-form-i .textarea {padding:6px 10px 6px 10px; height:113px; border:1px solid #e3e3e3; -webkit-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.04);-moz-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.04); box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.04); border-radius:2px;}
  .booking-form-i .textarea textarea {resize:none; height:113px; border:0px; width:100%; font-size:14px; font-family:'Raleway';}

  .booking-devider {width:100%; height:1px; background:#ebebeb; margin:19px 0px 27px 0px;}
  .booking-devider.no-margin {margin-top:7px;}
  .booking-complete p {font-size:13px; color:#626262; line-height:21px;}
  .booking-left .booking-complete h2 {margin-bottom:16px;}
  .booking-complete-btn {display:block; margin-top:24px; width:189px; height:40px; background:#ff7200; color:#fff; text-transform:uppercase; border:0px; cursor:pointer; border-radius:2px; font-size:11px; font-family:'Raleway'; font-weight:bold;}
  .booking-complete-btn:hover {background:#ff8521;}

  .comlete-alert {border-top:1px solid #ebebeb; padding:18px 0px 18px 0px; margin:22px 0px 20px 0px; border-bottom:1px solid #ebebeb;}
  .comlete-alert-a {background:url(../../assets/img/icon-complete.png) left top no-repeat; background-position:left 4px; padding:0px 0px 0px 40px;}
  .comlete-alert-a b {display:block; font-weight:500; font-size:16px; color:#4a90a4;}
  .comlete-alert-a span {font-size:13px; color:#626262;}
  .complete-info h2 {margin-bottom:18px;}
  .complete-info-l {float:left; width:138px; }
  .complete-info-table {font-size:13px; color:#626262;}
  .complete-info-i {margin-bottom:19px;}
  .complete-info-table {margin-bottom:27px;}
  .complete-devider {height:1px; background:#ebebeb; margin-bottom:25px;}
  .complete-txt {margin-bottom:26px;}
  .complete-txt.final {margin-bottom:0px;}
  .complete-info .complete-txt h2 {margin-bottom:16px;}
  .complete-txt p {font-size:13px; margin-bottom:15px; color:#626262; line-height:21px;}
  .complete-txt-link a {font-size:13px; text-decoration:none; color:#ff7200;}

</style>
