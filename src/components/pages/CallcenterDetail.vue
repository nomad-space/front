<template>

  <div>

    <div v-if="loading">
      loading...
    </div>

    <div v-if="!loading" class="body-wrapper">
      <div class="wrapper-padding">
        <div class="page-head">
          <div class="page-title"><span>Booking #{{ data.id }}</span></div>
          <div class="breadcrumbs">
            <a href="/ms/callcenter">Callcenter</a> / <span>edit booking</span>
          </div>
          <div class="clear"></div>
        </div>

        <div class="sp-page">
          <div class="sp-page-a">
            <div class="sp-page-l">
              <div class="sp-page-lb">
                <div class="sp-page-p">
                  <div class="booking-left">
                    <h2>Booking detail</h2>

                    <div v-if="data.status != 3 && data.status != 4" class="comlete-alert">
                      <div class="comlete-alert-a">
                        <b style="color: #ff0000">This Order is Processed.</b>
                        <span>We have a maximum of {{ days }} days to confirm the booking. {{ confirmProgressHours() }} hours left</span>
                        <div class="about-percent" style="padding-top: 5px;margin-bottom: 0px">
                          <div :data-percentage="confirmProgressStyle()" class="about-percent-a"><span :style="confirmProgressStyle()"></span></div>
                        </div>
                      </div>
                    </div>
                    <div v-if="data.status == 3" class="comlete-alert">
                      <div class="comlete-alert-a">
                        <b style="color: #ff0000">This Order is Not Confirmed.</b>
                        <span>Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</span>
                      </div>
                    </div>
                    <div v-if="data.status == 4" class="comlete-alert">
                      <div class="comlete-alert-a">
                        <b>This Order is Confirmed.</b>
                        <span>Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</span>
                      </div>
                    </div>

                    <div class="complete-info">
                      <h2>Personal Information</h2>
                      <div class="complete-info-table">
                        <!--<div class="complete-info-i">-->
                          <!--<div class="complete-info-l">Number:</div>-->
                          <!--<div class="complete-info-r">521-645-6</div>-->
                          <!--<div class="clear"></div>-->
                        <!--</div>-->
                        <div class="complete-info-i">
                          <div class="complete-info-l">First Name:</div>
                          <div class="complete-info-r">{{ data.firstname }}</div>
                          <div class="clear"></div>
                        </div>
                        <div class="complete-info-i">
                          <div class="complete-info-l">Last Name:</div>
                          <div class="complete-info-r">{{ data.lastname }}</div>
                          <div class="clear"></div>
                        </div>
                        <div class="complete-info-i">
                          <div class="complete-info-l">E-Mail Adress:</div>
                          <div class="complete-info-r">{{ data.email }}</div>
                          <div class="clear"></div>
                        </div>
                        <!--<div class="complete-info-i">-->
                          <!--<div class="complete-info-l">Country:</div>-->
                          <!--<div class="complete-info-r">Austria</div>-->
                          <!--<div class="clear"></div>-->
                        <!--</div>-->
                        <div class="complete-info-i">
                          <div class="complete-info-l">Phone Number:</div>
                          <div class="complete-info-r">{{ data.phone }}</div>
                          <div class="clear"></div>
                        </div>
                      </div>

                      <div class="complete-devider"></div>


                    </div>

                    <div class="booking-complete">
                      <h2>Сonnection status to Nomad Space: {{ getStatusName() }}</h2>
                      <p>
                        You need to contact the hotel and connect to the Nomad Spa<br/>
                        When you change the user will receive a notification
                      </p>
                      <button v-if="data.status == 1" @click="changeStatus(2)" class="booking-complete-btn">contacted the hotel</button>
                      <button v-if="data.status != 3 && data.status != 4" @click="changeStatus(3)" class="booking-complete-btn refusal">refusal to connect</button>
                      <button v-if="data.status != 3 && data.status != 4" @click="changeStatus(4)" class="booking-complete-btn consent">consent to connect</button>
                    </div>

                  </div>
                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>

          <div class="sp-page-r">

            <div class="checkout-coll">
              <div class="checkout-head">
                <div class="checkout-headl">
                  <a href="#"><img alt="" src="../../assets/img/check-img.png"></a>
                </div>
                <div class="checkout-headr">
                  <div class="checkout-headrb">
                    <div class="checkout-headrp">
                      <div class="chk-left">
                        <div class="chk-lbl"><a href="#">Andrassy Thai Hotel </a></div>
                        <div class="chk-lbl-a">Paris, france</div>
                        <nav class="chk-stars">
                          <ul>
                            <li><img alt="" src="../../assets/img/chk-star-b.png"></li>
                            <li><img alt="" src="../../assets/img/chk-star-b.png"></li>
                            <li><img alt="" src="../../assets/img/chk-star-b.png"></li>
                            <li><img alt="" src="../../assets/img/chk-star-b.png"></li>
                            <li><img alt="" src="../../assets/img/chk-star-a.png"></li>
                          </ul>
                          <div class="clear"></div>
                        </nav>

                      </div>
                      <div class="chk-right">
                        <a href="#"><img alt="" src="../../assets/img/chk-edit.png"></a>
                      </div>
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>

              <div class="chk-lines">
                <div class="chk-line">
                  <span class="chk-nights">3 Nights</span>
                  <span class="chk-dates">feb 05, 2015  /  feb 08, 2015</span>
                </div>
                <div class="chk-line">
                  1 STANDARD FAMILY ROOM FOR <span class="chk-persons">3 PERSONS</span>
                </div>
              </div>

              <div class="chk-details">
                <h2>Details</h2>
                <div class="chk-detais-row">
                  <div class="chk-line">
                    <span class="chk-l">Room type</span>
                    <span class="chk-r">Standard family</span>
                    <div class="clear"></div>
                  </div>
                  <div class="chk-line">
                    <span class="chk-l">price</span>
                    <span class="chk-r">200$</span>
                    <div class="clear"></div>
                  </div>
                  <div class="chk-line">
                    <span class="chk-l">3 nights stay</span>
                    <span class="chk-r">600$</span>
                    <div class="clear"></div>
                  </div>
                  <div class="chk-line">
                    <span class="chk-l">taxes and fees per night</span>
                    <span class="chk-r">3.52$</span>
                    <div class="clear"></div>
                  </div>
                </div>
                <div class="chk-total">
                  <div class="chk-total-l">Total Price</div>
                  <div class="chk-total-r">$603.52</div>
                  <div class="clear"></div>
                </div>
              </div>

            </div>


          </div>
          <div class="clear"></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  /* eslint-disable */
  import moment from 'moment'
  export default {
    data () {
      return {
        context: 'need help context',
        data: {},
        params: this.searchParams,
        error: null,
        // host_search: 'http://localhost:7782',
        host_search: this.$config('api.search'),
        loading: true,
        days: 3
      }
    },
    methods: {
      send (data) {
        this.$emit('send', data)
      },
      changeStatus (status) {

        var self = this

        this.$http.patch(this.$config('api.base') + '/v1/booking/' + this.$route.params.booking_id, {status: status}).then(
          function (response) { // Success.
            console.log(response.data);

            self.data = response.data.data;
            self.data.created_at = new Date(self.data.created_at)

            self.$set(self, 'data', response.data.data)
          },
          function (response) { // Error.
            console.log('An error occurred.');
          }
        );
      },
      getStatusName () {
        switch (this.data.status) {
          case 1:
            return 'New'
          case 2:
            return 'Contacted'
          case 3:
            return 'Refusal'
          case 4:
            return 'Consent'
          default:
            return ''
        }
      },
      confirmProgressHours () {
        var currTime = moment()
        var endTime = moment(this.data.created_at).add(this.days, 'days')
        var duration = Math.round(moment.duration(endTime.diff(currTime)).asHours())
        return duration > 0 ? duration : 0
      },
      confirmProgressStyle () {
        var duration = this.confirmProgressHours()
        return 'width: '+Math.round(duration*100/(24*this.days))+'%'
      }
    },
    mounted () {
      console.log('this.params', this.params)
    },
    created: function() {

      var self = this

      this.$http.get(this.$config('api.base') + '/v1/booking/' + this.$route.params.booking_id).then(
        function (response) { // Success.
          console.log(response.data);

          self.data = response.data.data;
          self.data.created_at = new Date(self.data.created_at)


          var createAt = moment(self.data.created_at)
          console.log('moment(self.data.created_at)', createAt.format('LLLL'))

          // createAt.add(3, 'days')
          console.log('now', moment().format('LLLL'))
          // console.log('createAt.add(3, \'days\')', createAt.add(3, 'days').format('LLLL'))
          // console.log('startOf(\'hour\')', createAt.add(3, 'days').startOf('hour').fromNow())
          // console.log('a.subtract(b).days()', createAt.add(5, 'days').subtract(moment()).hours())
          console.log('moment.duration(x.diff(y))', moment.duration(createAt.add(3, 'days').diff(moment())).asHours())
          // console.log('moment.duration(x.diff(y))', createAt.add(3, 'days').diff(moment()).asHours())

          self.loading = false
          self.$set(self, 'data', response.data.data)
          self.$set(self, 'loading', false)
        },
        function (response) { // Error.
          console.log('An error occurred.');
          // self.loading = false
          self.$set(self, 'loading', false)
        }
      );
    }
  }
</script>

<style>

  .CallCenterDetailBooking .booking-complete-btn {
    display: inline-block;
  }
  .CallCenterDetailBooking .booking-complete-btn.refusal {
    background: #ff0000;
  }
  .CallCenterDetailBooking .booking-complete-btn.refusal:hover {
    background: #ff3333;
  }
  .CallCenterDetailBooking .booking-complete-btn.consent {
    background: #008000;
  }
  .CallCenterDetailBooking .booking-complete-btn.consent:hover {
    background: #009322;
  }
  .CallCenterDetailBooking .body-wrapper {
    padding-top: 30px;
  }

</style>
