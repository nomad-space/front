<template>
  <div class="payment-wrapper">
    <div class="payment-tabs">
      <a href="#" v-bind:class="{ active: view == 'card' }" @click.prevent.stop="view = 'card'">Credit Card <span></span></a>
      <a href="#" v-bind:class="{ active: view == 'paypal' }" @click.prevent.stop="view = 'paypal'">Paypal <span></span></a>
    </div>
    <div class="clear"></div>
    <div class="payment-tabs-content">
      <div class="payment-tab" v-if="view == 'card'">
        <div class="payment-type">
          <label>Card Type:</label>
          <div class="card-type"><img alt="" src="../assets/img/paymentt-01.png"></div>
          <div class="card-type"><img alt="" src="../assets/img/paymentt-02.png"></div>
          <div class="card-type"><img alt="" src="../assets/img/paymentt-03.png"></div>
          <div class="clear"></div>
        </div>
        <div class="booking-form">
          <div class="booking-form-i">
            <label>Card Number:</label>
            <div class="input"><input type="text" value=""></div>
          </div>
          <div class="booking-form-i">
            <label>Card Holder Name:</label>
            <div class="input"><input type="text" value=""></div>
          </div>
          <div class="booking-form-i">
            <label>Expiration Date:</label>
            <div class="card-expiration">
              <select class="custom-select hasCustomSelect" style="-webkit-appearance: menulist-button; width: 151px; position: absolute; opacity: 0; height: 32px; font-size: 14px;">
                <option>Month</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select><span class="customSelect custom-select" style="display: inline-block;"><span class="customSelectInner" style="width: 63px; display: inline-block;">Month</span></span>
            </div>
            <div class="card-expiration">
              <select class="custom-select card-year hasCustomSelect" style="-webkit-appearance: menulist-button; width: 151px; position: absolute; opacity: 0; height: 32px; font-size: 14px;">
                <option>Year</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
              </select><span class="customSelect custom-select card-year" style="display: inline-block;"><span class="customSelectInner" style="width: 57px; display: inline-block;">Year</span></span>
            </div>
            <div class="clear"></div>
          </div>
          <div class="booking-form-i">
            <label>Card Indefication Number:</label>
            <div class="inpt-comment">
              <div class="inpt-comment-l">
                <div class="inpt-comment-lb">
                  <div class="input"><input type="text" value=""></div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <div class="inpt-comment-r">
              <div class="padding">
                <a href="#">What’s This?</a>
              </div>
              <div class="clear"></div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="">
            Im accept the rules <a href="#">Terms &amp; Conditions</a>
          </label>
        </div>
      </div>
      <div class="payment-tab" v-if="view == 'paypal'">
        <div class="payment-alert">
          <span>You will be redirected to PayPal's website to securely complete your payment.</span>
          <div class="payment-alert-close"><a href="#"><img alt="" src="../assets/img/alert-close.png"></a></div>
        </div>
        <a href="#" class="paypal-btn">proceed to paypall</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        context: 'payment context',

        view: 'card',
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

  .payment-wrapper {padding-top:3px; margin-bottom:27px;}
  .payment-tabs a {display:block; position:relative; height:26px; border-radius:2px 2px 0px 0px; padding:13px 20px 0px 20px; background:#f7f7f7; border:1px solid #fff; border-bottom:0px; text-decoration:none; float:left; margin:0px 1px 0px 0px; font-size:11px; color:#73716f; text-transform:uppercase; font-weight:700;}
  .payment-tabs a.active {border-color:#ebebeb; background:#fff; color:#ff7200;}
  .payment-tabs a.active span {display:block; width:100%; height:5px; background:#fff; position:absolute; left:0px; bottom:-2px;}
  .payment-tabs-content {padding:20px 18px 10px 18px; border:1px solid #ebebeb;}
  .payment-tab label {display:block; font-size:12px; color:#626262; margin-bottom:11px; font-family:'Raleway';}
  .payment-tab {display:none;}
  .payment-tab:first-child {display:block;}
  .payment-tab .checkbox label {cursor:pointer; font-weight:500;}
  .payment-tab .jq-checkbox {margin-top:-1px;}
  .payment-tab .checkbox label a {text-decoration:none; color:#4a90a4;}
  .payment-type {margin-bottom:18px;}

  .card-type {width:58px; height:23px; float:left; margin:0px 5px 0px 0px; padding-top:7px; text-align:center; border:1px solid #e3e3e3; -webkit-box-shadow: 0px 1px 1px 0px rgba(50, 50, 50, 0.05);-moz-box-shadow: 0px 1px 1px 0px rgba(50, 50, 50, 0.05); box-shadow: 0px 1px 1px 0px rgba(50, 50, 50, 0.05); border-radius:2px;}
  .card-expiration .customSelect {width:100%; padding:7px 0px 7px 0px; border:1px solid #e3e3e3; background:url(../assets/img/card-select.png) right top no-repeat; -webkit-box-shadow: 0px 1px 1px 0px rgba(50, 50, 50, 0.05);-moz-box-shadow: 0px 1px 1px 0px rgba(50, 50, 50, 0.05); box-shadow: 0px 1px 1px 0px rgba(50, 50, 50, 0.05); border-radius:2px;}
  .card-expiration select {cursor:pointer;}
  .card-expiration {float:left; width:47.5%;}
  .card-expiration:nth-child(2n) {float:right; margin-right:3px;}
  .card-expiration .customSelectInner {font-size:11px; color:#8a8a8a; padding-left:9px;}

  .payment-alert {line-height: 19px; position:relative; background:#f2f7f9; border:1px solid #d7e7ec; border-radius:2px; margin-top:3px; padding:18px 50px 18px 13px; font-size:12px; color:#4a90a4; font-weight:500;}
  .payment-alert-close {width:10px; height:10px; position:absolute; top:50%; margin-top:-7px; right:15px;}
  .payment-alert-close:hover {opacity:0.8;}
  .payment-alert span {background:url(../assets/img/alert-info.png) left top no-repeat; padding:1px 0px 0px 17px; background-position:left 2px;}
  .paypal-btn {width:155px; height:24px; padding-top:11px; font-size:11px; margin:20px 0px 12px 0px; text-transform:uppercase; font-weight:600; color:#839098; display:block; text-decoration:none; text-align:center; border:1px solid #e5e5e5; border-radius:2px; -webkit-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.04);-moz-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.04); box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.04);}
  .paypal-btn:hover {color:#5d676d;}

</style>
