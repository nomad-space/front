<template>
  <div>
    <div class="overlay" style="display: block;"></div>
    <transition name="modal">
      <div class="autorize-popup" v-if="show" v-bind:style="{ top: view == 'register' ? '30%' : '50%'}">
        <div class="autorize-tabs">
          <a href="#" class="autorize-tab-a" v-bind:class="{ current: view == 'login' }" @click.prevent.stop="view = 'login'">Sign in</a>
          <a href="#" class="autorize-tab-b" v-bind:class="{ current: view == 'register' }" @click.prevent.stop="view = 'register'">Register</a>
          <a href="#" class="autorize-close" @click.prevent.stop="$emit('close')"></a>
          <div class="clear"></div>
        </div>
        <section class="autorize-tab-content" style="display: block;" v-if="view == 'login'"> <!--style="display: block;"-->
          <div class="autorize-padding">
            <form v-on:submit.prevent="login()">
              <h6 class="autorize-lbl">Welocome! Login in to Your Accont</h6>
              <div class="autorize-lbl error" v-show="error.login">
                <span>Error: {{ error.login }}</span>
              </div>
              <input v-model="data.body.email" type="text" value="" placeholder="Email"/>
              <input v-model="data.body.password" type="password" value="" placeholder="Password"/>
              <label><input v-model="data.rememberMe" type="checkbox" /> Remember Me</label>
              <!--<label><input v-model="data.fetchUser" type="checkbox" /> Fetch User (test)</label>-->
              <footer class="autorize-bottom">
                <button class="authorize-btn" type="submit">Login</button>
                <a href="#" class="authorize-forget-pass">Forgot your password?</a>
                <div class="clear"></div>
              </footer>
            </form>
          </div>
        </section>
        <section class="autorize-tab-content" style="display: block;" v-if="view == 'register'"> <!--style="display: none;">-->
          <div class="autorize-padding">
            <form v-on:submit.prevent="register()">
              <h6 class="autorize-lbl">Register for Your Account</h6>
              <div class="autorize-lbl error" v-show="error.register">
                <span>Error: {{ error.register }}</span>
              </div>
              <input v-model="data.body.email" type="text" value="" placeholder="Email"/>
              <input v-model="data.body.password" type="password" value="" placeholder="Password"/>
              <!--<input v-model="data.body.username" type="text" value="" placeholder="Username"/>-->
              <input v-model="data.body.firstname" type="text" value="" placeholder="Firstname"/>
              <input v-model="data.body.lastname" type="text" value="" placeholder="Lastname"/>
              <input v-model="data.body.phone" type="text" value="" placeholder="Phone"/>
              <!--<input v-on:change="setAvatar" type="file" />-->
              <label><input v-model="data.autoLogin" type="checkbox" /> Auto Login</label>
              <label><input v-model="data.rememberMe" type="checkbox" /> Remember Me</label>
              <footer class="autorize-bottom">
                <button class="authorize-btn" type="submit">Registration</button>
                <div class="clear"></div>
              </footer>
              <div v-show="error" style="color:red; word-wrap:break-word;">{{ error.msg }}</div>
            </form>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'AuthPopup',
    data () {
      return {
        context: 'AuthPopup context',
        show: false,
        view: 'login',
        data: {
          body: {
            email: 'admin777@admin.admin',
            password: 'admin'
          },
          rememberMe: false,
          fetchUser: true
        },

        error: {
          login: null,
          register: null
        }
      }
    },

    mounted () {
      console.log(2222)
      this.show = true
      // console.log(this.$auth.redirect())

      // Can set query parameter here for auth redirect or just do it silently in login redirect.
    },

    methods: {
      login () {
        var redirect = this.$auth.redirect()

        this.$auth.login({
          body: this.data.body, // Vue-resource
          data: this.data.body, // Axios
          rememberMe: this.data.rememberMe,
          redirect: {name: redirect ? redirect.from.name : 'account'},
          fetchUser: this.data.fetchUser
        })
          .then((res) => {
            console.log('success ' + this.context)

            console.log('this.$auth.watch', this.$auth.watch)
            console.log('this.$auth.user()', this.$auth.user())
            this.$emit('close')
          }, (res) => {
            console.log('error ' + this.context)
            console.log('res.response.data ', res.response.data)
            console.log('res.response.data.msg ', res.response.data.msg)
            console.log('res.data ', res.data)

            this.error.login = res.response.data.msg
            // this.error = res.data
          })
      },

      setAvatar (e) {
        var _this = this
        var file = (e.target.files || e.dataTransfer.files)[0]
        var reader = new FileReader()

        reader.onload = (e) => {
          _this.data.body.avatar = e.target.result
        }

        reader.readAsDataURL(file)
      },

      register () {
        var formData = new FormData()

        console.log('this.data.body', this.data.body)

        if (this.data.body.avatar) {
          formData.append('avatar', this.data.body.avatar)
        }

        formData.append('username', this.data.body.username)
        formData.append('password', this.data.body.password)
        formData.append('firstname', this.data.body.firstname)
        formData.append('lastname', this.data.body.lastname)
        formData.append('phone', this.data.body.phone)
        formData.append('email', this.data.body.email)

        // this.error.register = null

        this.$auth.register({
          // body: formData, // Vue-resoruce
          body: this.data.body, // Vue-resoruce
          // data: formData, // Axios
          data: this.data.body, // Axios
          autoLogin: this.data.autoLogin,
          rememberMe: this.data.rememberMe,
          success: function () {
            console.log('success ' + this.context)

            this.$emit('close')
          },
          error: function (res, a, b) {
            console.log('error ' + this.context)
            console.log('this ', this)
            console.log('res ', res)
            console.log('a ', a)
            console.log('b ', b)
            console.log('error res' + res)
            console.log('error res.data' + res.data)
            console.log('error res.response.data', res.response.data)

            this.error.register = res.response.data.msg
          }
        })
      },
      showAuthPopup () {
        console.log(1111)
        this.show = true
      }
    }
  }
</script>
<style scoped>

  .overlay {display:none;width:100%;height:100%;background:rgba(20,29,30,0.19);position:fixed;left:0px;top:0px;z-index:9999;}

  .autorize-popup {
    z-index: 9999;
    width: 444px;
    /*height: 255px;*/
    position: fixed;
    left: 50%;
    top: -300px;
    margin-top: -128px;
    margin-left: -222px;
    background: rgb(255, 255, 255);
    transition: opacity .3s ease;
  }
  .autorize-padding {
    padding: 22px 20px 20px 21px;
  }
  .autorize-lbl {
    font-family: Raleway;
    font-size: 13px;
    color: rgb(109, 109, 109);
    margin: 0px 0px 18px;
  }
  h6 {
    display: block;
    font-size: 0.67em;
    -webkit-margin-before: 2.33em;
    -webkit-margin-after: 2.33em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
  }
  .autorize-tab-content input[type="text"], .autorize-tab-content input[type="password"], .autorize-tab-content input[type="file"] {
    width: 381px;
    font-size: 11px;
    text-transform: uppercase;
    font-family: Raleway;
    font-weight: 600;
    color: rgb(138, 138, 138);
    margin-bottom: 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(235, 235, 235);
    border-image: initial;
    background: rgb(255, 255, 255);
    border-radius: 3px;
    padding: 10px 8px;
  }
  .autorize-tab-content input[type="checkbox"] {
    /*width: 381px;*/
    /*font-size: 11px;*/
    /*text-transform: uppercase;*/
    /*font-family: Raleway;*/
    /*font-weight: 600;*/
    color: rgb(138, 138, 138);
    margin-bottom: 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(235, 235, 235);
    border-image: initial;
    background: rgb(255, 255, 255);
    border-radius: 3px;
    padding: 10px 8px;
  }
  .autorize-tab-content label {
    display: block;
  }
  .authorize-btn {
    display: block;
    width: 118px;
    height: 34px;
    padding-top: 3px;
    cursor: pointer;
    text-align: center;
    font-size: 11px;
    color: rgb(255, 255, 255);
    float: left;
    font-family: Montserrat;
    font-weight: normal;
    text-transform: uppercase;
    background: rgb(255, 114, 0);
    border-radius: 2px;
    text-decoration: none;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
  }
  .authorize-forget-pass {
    float: left;
    font-family: Raleway;
    font-size: 12px;
    color: rgb(109, 109, 109);
    text-decoration: none;
    margin: 12px 0px 0px 15px;
  }

  .autorize-tabs a.current {
    color: rgb(41, 40, 40);
    cursor: default;
    background: rgb(255, 255, 255);
  }
  .autorize-tab-a {
    display: block;
    float: left;
    width: 82px;
    height: 27px;
    text-align: center;
    font-family: Raleway;
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    padding-top: 12px;
    text-decoration: none;
    background: rgb(20, 29, 30);
  }
  .autorize-tab-b {
    display: block;
    float: left;
    width: 303px;
    height: 27px;
    font-family: Raleway;
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    padding-top: 12px;
    padding-left: 20px;
    text-decoration: none;
    background: rgb(20, 29, 30);
  }
  .autorize-close {
    display: block;
    width: 39px;
    height: 39px;
    float: right;
    background: url(../assets/img/popup-close.png) left top no-repeat;
  }
  .autorize-close:hover {
    background-position: left -39px;
  }

  .error {
    color: red;
  }

  /** animate **/

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
