<template>
  <header id="top">
    <div class="header-a">
      <div class="wrapper-padding">
        <div class="header-phone"><span>1 - 555 - 555 - 555</span></div>
        <div class="header-account">
          <div v-if="$auth.ready() && loaded">
            <a v-if="!$auth.check()" href="#" @click.prevent.stop="$emit('openSignin')">Sign in</a>
            <a v-if="$auth.check()" href="#" @click.prevent.stop="logout()">logout {{ $auth.user().firstname }}</a>
          </div>
          <div v-if="!$auth.ready() || !loaded">
            <a>Loading...</a>
          </div>
        </div>
        <div class="header-social">
          <a href="#" class="social-twitter"></a>
          <a href="#" class="social-facebook"></a>
          <a href="#" class="social-vimeo"></a>
          <a href="#" class="social-pinterest"></a>
          <a href="#" class="social-instagram"></a>
        </div>
        <!--
        <div class="header-viewed">
          <a href="#" class="header-viewed-btn">recently viewed</a>
          <div class="viewed-drop" style="display: none;">
            <div class="viewed-drop-a">
              <div class="viewed-item">
                <div class="viewed-item-l">
                  <a href="#"><img alt="" src="./src/assets/img/v-item-01.jpg"></a>
                </div>
                <div class="viewed-item-r">
                  <div class="viewed-item-lbl"><a href="#">Andrassy Thai Hotel</a></div>
                  <div class="viewed-item-cat">location: thailand</div>
                  <div class="viewed-price">152$</div>
                </div>
                <div class="clear"></div>
              </div>
              <div class="viewed-item">
                <div class="viewed-item-l">
                  <a href="#"><img alt="" src="./src/assets/img/v-item-02.jpg"></a>
                </div>
                <div class="viewed-item-r">
                  <div class="viewed-item-lbl"><a href="#">Ermin's Hotel</a></div>
                  <div class="viewed-item-cat">location: dubai</div>
                  <div class="viewed-price">300$</div>
                </div>
                <div class="clear"></div>
              </div>
              <div class="viewed-item">
                <div class="viewed-item-l">
                  <a href="#"><img alt="" src="./src/assets/img/v-item-03.jpg"></a>
                </div>
                <div class="viewed-item-r">
                  <div class="viewed-item-lbl"><a href="#">Best Western Hotel Reither</a></div>
                  <div class="viewed-item-cat">location: berlin</div>
                  <div class="viewed-price">2300$</div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
        -->
        <div class="header-lang">
          <a href="#"><img alt="" src="../assets/img/en.gif"></a>
          <div class="langs-drop" style="display: none;">
            <div><a href="#" class="langs-item en">english</a></div>
            <div><a href="#" class="langs-item fr">francais</a></div>
            <div><a href="#" class="langs-item de">deutsch</a></div>
            <div><a href="#" class="langs-item it">italiano</a></div>
          </div>
        </div>
        <div class="header-curency">
          <a href="#">USD</a>
          <div class="curency-drop" style="display: none;">
            <div><a href="#">usd</a></div>
            <div><a href="#">Eur</a></div>
            <div><a href="#">GBR</a></div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </header>
</template>


<script>
  export default {
    name: 'app',
    data () {
      return {
        // showAuthPopup: false,
        loaded: false
      }
    },

    mounted () {
      var _this = this

      // Set up $auth.ready with other arbitrary loaders (ex: language file).
      setTimeout(function () {
        _this.loaded = true
      }, 500)
    },

    created () {
      var _this = this

      _this.$auth.ready(function () {
        console.log('ready ' + this.context)
      })
    },

    methods: {
      logout () {
        this.$auth.logout({
          makeRequest: true,
          success () {
            console.log('success ' + this.context)
          },
          error () {
            console.log('error ' + this.context)
          }
        })
      },

      unimpersonate () {
        this.$auth.unimpersonate({
          success () {
            console.log('success ' + this.context)
          },
          error () {
            console.log('error ' + this.context)
          }
        })
      }
    }

  }
</script>

<style>
  #top {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 999;
  }
  article, aside, footer, header, hgroup, main, nav, section {
    display: block;
  }
  .header-a {
    height: 40px;
    width: 100%;
    background: rgb(20, 29, 30);
  }
  .wrapper-padding {
    max-width: 1100px;
    margin: 0px auto;
  }
  .wrapper-padding {
    position: relative;
  }
  .header-phone {
    float: left;
    height: 29px;
    padding: 11px 16px 0px;
    border-left: 1px solid rgb(51, 51, 51);
    border-right: 1px solid rgb(51, 51, 51);
  }
  .header-phone span {
    font-size: 11px;
    color: rgb(255, 255, 255);
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    display: inline-block;
    min-height: 15px;
    background: url(../assets/img/icon-phone.png) left 1px no-repeat;
    background-position: left 1px;
    padding: 1px 0px 0px 25px;
  }
  .header-account {
    float: right;
  }
  .header-account a {
    color: rgb(255, 255, 255);
    font-size: 11px;
    text-transform: uppercase;
    font-family: Montserrat;
    font-weight: 700;
    display: inline-block;
    height: 26px;
    text-decoration: none;
    border-left: 1px solid rgb(51, 51, 51);
    border-right: 1px solid rgb(51, 51, 51);
    padding: 14px 22px 0px;
  }
  .header-social {
    float: right;
    height: 27px;
    border-left: 1px solid rgb(51, 51, 51);
    padding: 13px 22px 0px 25px;
  }
  .header-social a {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 0px 9px;
  }
  .header-social a:hover {
    background-position: left -14px;
  }
  .header-social .social-twitter {
    margin-left: 0px;
    background: url(../assets/img/head-twitter.png) left top no-repeat;
  }
  .header-social .social-facebook {
    background: url(../assets/img/head-facebook.png) left top no-repeat;
  }
  .header-social .social-vimeo {
    background: url(../assets/img/head-vimeo.png) left top no-repeat;
  }
  .header-social .social-pinterest {
    background: url(../assets/img/head-pinterest.png) left top no-repeat;
  }
  .header-social .social-instagram {
    margin-right: 0px;
    background: url(../assets/img/head-instargam.png) left top no-repeat;
  }
  .header-viewed {
    float: right;
    position: relative;
  }
  .header-viewed-btn {
    display: block;
    height: 26px;
    color: rgb(255, 255, 255);
    font-size: 11px;
    text-transform: uppercase;
    font-family: Montserrat;
    font-weight: 700;
    border-left: 1px solid rgb(51, 51, 51);
    padding: 14px 22px 0px 25px;
    text-decoration: none;
  }
  .viewed-drop {
    display: none;
    position: absolute;
    left: 0px;
    top: 40px;
    z-index: 999;
    width: 330px;
    border-top: 8px solid rgb(255, 255, 255);
    background: rgb(252, 248, 245);
  }
  .viewed-drop-a {
    padding: 17px 16px;
  }
  .viewed-item {
    padding-bottom: 13px;
    margin-bottom: 13px;
    border-bottom: 1px solid rgb(235, 231, 228);
  }
  .viewed-item-l {
    margin-top: 3px;
    width: 79px;
    float: left;
  }
  .viewed-item-r {
    width: 208px;
    float: right;
  }
  .viewed-item-lbl {
    margin-bottom: 7px;
  }
  .viewed-item-lbl a {
    font-family: Montserrat;
    font-weight: normal;
    font-size: 13px;
    text-transform: uppercase;
    color: rgb(37, 37, 37);
    text-decoration: none;
  }
  .viewed-item-cat {
    margin-bottom: 8px;
    font-size: 10px;
    text-transform: uppercase;
    color: rgb(147, 147, 147);
    font-family: Raleway;
    font-weight: 600;
  }
  .viewed-price {
    font-family: Montserrat;
    font-weight: normal;
    font-size: 17px;
    color: rgb(255, 114, 0);
  }
  .header-lang {
    float: right;
    position: relative;
  }
  .header-lang a {
    display: block;
    height: 27px;
    border-left: 1px solid rgb(51, 51, 51);
    padding: 13px 13px 0px;
  }
  .langs-drop {
    display: none;
    position: absolute;
    left: 0px;
    top: 41px;
    width: 125px;
    z-index: 999;
    border-top: 5px solid rgb(255, 255, 255);
    padding: 10px 10px 3px 15px;
    background: rgb(252, 248, 245);
  }
  .header-lang a {
    display: block;
    height: 27px;
    border-left: 1px solid rgb(51, 51, 51);
    padding: 13px 13px 0px;
  }
  .header-lang a.langs-item {
    display: inline-block;
    font-size: 10px;
    color: rgb(105, 115, 116);
    height: auto;
    font-family: Raleway;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 13px;
    margin: 0px 0px 11px;
    padding: 0px 0px 0px 24px;
    text-decoration: none;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
  }
  .header-lang a.langs-item.en {
    background: url(../assets/img/en.gif) left top no-repeat;
  }
  .header-lang a.langs-item.fr {
    background: url(../assets/img/fr.gif) left top no-repeat;
  }
  .header-lang a.langs-item.de {
    background: url(../assets/img/de.gif) left top no-repeat;
  }
  .header-lang a.langs-item.it {
    background: url(../assets/img/it.gif) left top no-repeat;
  }
  .header-curency {
    float: right;
    position: relative;
  }
  .header-curency a {
    display: block;
    height: 26px;
    color: rgb(255, 255, 255);
    font-size: 11px;
    text-transform: uppercase;
    font-family: Montserrat;
    font-weight: 700;
    border-left: 1px solid rgb(51, 51, 51);
    padding: 14px 14px 0px;
    text-decoration: none;
  }
  .curency-drop {
    position: absolute;
    left: 0px;
    display: none;
    top: 40px;
    z-index: 999;
    font-family: Raleway;
    font-weight: 700;
    width: 126px;
    border-top: 4px solid rgb(255, 255, 255);
    background: rgb(252, 248, 245);
    padding: 11px 10px 7px 14px;
  }
  .header-curency .curency-drop div {
    margin-bottom: 8px;
  }
  .header-curency a {
    display: block;
    height: 26px;
    color: rgb(255, 255, 255);
    font-size: 11px;
    text-transform: uppercase;
    font-family: Montserrat;
    font-weight: 700;
    border-left: 1px solid rgb(51, 51, 51);
    padding: 14px 14px 0px;
    text-decoration: none;
  }
  .header-curency .curency-drop a {
    font-size: 11px;
    color: rgb(105, 115, 116);
    height: auto;
    display: inline;
    text-transform: uppercase;
    margin: 0px;
    padding: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
  }
</style>
