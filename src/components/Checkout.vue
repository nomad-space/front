<template>

  <div class="checkout-coll">

    <div v-if="loading">
      loading...
    </div>

    <div v-if="!loading" class="checkout-head">
      <div class="checkout-headl">
        <a href="#"><img alt="" width="94" :src="this.data.hotel.photos_ids.length ? (this.host_search + '/image/' + this.data.hotel.photos_ids[0] + '.jpg') : ''"></a>
      </div>
      <div class="checkout-headr">
        <div class="checkout-headrb">
          <div class="checkout-headrp">
            <div class="chk-left">
              <div class="chk-lbl"><a href="#">{{ this.data.hotel.name }}</a></div>
              <div class="chk-lbl-a">{{ this.data.hotel.address }}</div>
              <nav class="chk-stars">
                <ul>
                  <li><img alt="" src="../assets/img/chk-star-b.png"></li>
                  <li><img alt="" src="../assets/img/chk-star-b.png"></li>
                  <li><img alt="" src="../assets/img/chk-star-b.png"></li>
                  <li><img alt="" src="../assets/img/chk-star-b.png"></li>
                  <li><img alt="" src="../assets/img/chk-star-a.png"></li>
                </ul>
                <div class="clear"></div>
              </nav>

            </div>
            <div class="chk-right">
              <!--<a href="#"><img alt="" src="../assets/img/chk-edit.png"></a>-->
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <div v-if="!loading" class="chk-lines">
      <div class="chk-line">
        <span class="chk-nights">{{ this.data.nights }} Nights</span>
        <span class="chk-dates">{{ this.data.check_in }}  /  {{ this.data.check_out }}</span>
      </div>
      <div class="chk-line">
        {{ this.data.room_name }} <span class="chk-persons">{{ this.data.persons }} PERSONS</span>
      </div>
    </div>

    <div v-if="!loading" class="chk-details">
      <h2>Details</h2>
      <div class="chk-detais-row">
        <div class="chk-line">
          <span class="chk-l">Room type</span>
          <span class="chk-r">{{ this.data.room_type }}</span>
          <div class="clear"></div>
        </div>
        <!--<div class="chk-line">-->
          <!--<span class="chk-l">price</span>-->
          <!--<span class="chk-r">200$</span>-->
          <!--<div class="clear"></div>-->
        <!--</div>-->
        <div class="chk-line">
          <span class="chk-l">{{ this.data.nights }} nights stay</span>
          <span class="chk-r">${{ this.data.price }}</span>
          <div class="clear"></div>
        </div>
        <div class="chk-line">
          <span class="chk-l">cashback</span>
          <span class="chk-r">${{ Number((this.data.price * 0.225).toFixed(1)) }}</span>
          <div class="clear"></div>
        </div>
      </div>
      <div class="chk-total">
        <div class="chk-total-l">Total Price</div>
        <div class="chk-total-r">${{ Number((this.data.price * 0.775).toFixed(1)) }}</div>
        <div class="clear"></div>
      </div>
    </div>

  </div>

</template>

<script>
  /* eslint-disable */
  export default {
    props: ['asd', 'searchParams'],
    data () {
      return {
        context: 'need help context',
        data: {},
        params: this.searchParams,
        error: null,
        // host_search: 'http://localhost:7782',
        host_search: this.$config('api.search'),
        loading: true
      }
    },
    methods: {
      send (data) {
        this.$emit('send', data)
      }
    },
    mounted () {
      console.log('this.params', this.params)
    //   console.log('this.$http', this.$http)
    //
    //
    //   // router.HandleFunc("/booking/{searchId}/{locationId}/{hotelId}/{gateId}/{roomId}/{checkIn}/{checkOut}/{adults}", Hotellook.Booking)
    //
    //   $.getJSON( searchAPI + '/booking/' + this.params.search_id + '/' + this.params.location_id + '/' + this.params.hotel_id + '/' + this.params.gate_id + '/' + this.params.room_id + '/' + this.params.checkin + '/' + this.params.checkout + '/' + this.params.adults, function (data) {
    //     console.log('data', data)
    //   })
    },
    created: function() {

      var self = this
      // console.log('this.params', this.params)
      // console.log('this.params.search_id', this.params.search_id)
      // console.log('url', searchAPI + '/booking/' + this.params.search_id + '/' + this.params.location_id + '/' + this.params.hotel_id + '/' + this.params.gate_id + '/' + this.params.room_id + '/' + this.params.checkin + '/' + this.params.checkout + '/' + this.params.adults)

      this.$http.get(this.$config('api.search') + '/booking/' + this.params.search_id + '/' + this.params.location_id + '/' + this.params.hotel_id + '/' + this.params.gate_id + '/' + this.params.room_id + '/' + this.params.checkin + '/' + this.params.checkout + '/' + this.params.adults).then(
        function (response) { // Success.
          console.log(response.data);
          self.data = response.data;
          self.loading = false
          self.$set(self, 'data', response.data)
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

<style lang="css" scoped>

.checkout-coll {padding:22px 20px 20px 20px; font-family:'Raleway'; background:#fff; margin-bottom:28px;}
.checkout-head {width:100%; margin-bottom:18px;}
.checkout-headl {width:94px; margin-top:4px; float:left; overflow:hidden;}
.checkout-headr {margin:0px 0px 0px 94px;}
.checkout-headrb {width:100%; float:left; overflow:hidden;}
.checkout-headrp {padding:0px 0px 0px 15px;}

.chk-logo {margin-top:10px;}
.chk-lbl {margin-bottom:7px;}
.chk-lbl a {text-decoration:none; text-transform:uppercase; font-weight:normal; font-family:'Montserrat'; font-size:13px; color:#4c4c4c;}
.chk-lbl-a {font-weight:500; margin-bottom:7px; font-size:11px; text-transform:uppercase; color:#747d7e;}
.chk-stars li {float:left; margin-right:1px;}
.chk-left {float:left;}
.chk-right {float:right; margin-top:2px;}
.chk-lines {margin-bottom:21px;}
.chk-line {font-weight:500; font-size:11px; padding:15px 0px 15px 0px; text-transform:uppercase; color:#777777; border-top:1px solid #f2f2f2;}
.chk-line.chk-fligth-info {padding:8px 0px 8px 0px;}
.chk-line:last-child {border-bottom:1px solid #f2f2f2;}
.chk-nights {background:url('../assets/img/icon-nights.png') left top no-repeat; margin-right:16px; color:#4a90a4; padding:0px 0px 0px 16px; background-position:left 2px;}
.chk-persons {color:#ff6739;}
.chk-details h2 {font-weight:600; margin-bottom:14px; text-transform:uppercase; font-size:12px; color:#3a4142;}
.chk-l {float:left; color:#4a90a4;}
.chk-r {float:right;}
.chk-detais-row {margin-bottom:17px;}
.chk-total-l {float:left; font-size:12px; color:#3a4142; font-weight:600; text-transform:uppercase; margin-top:4px;}
.chk-total-r {float:right; font-size:15px; color:#ff7200; font-weight:normal; font-family:'Montserrat';}
.chk-departure span {font-size:10px; font-weight:600; color:#848484; display:block; margin-right:9px; margin-top:1px; float:left;}
.chk-departure b {display:block; font-size:10px; font-family:'Open Sans'; font-weight:700; color:#4a90a4; float:left;}
.chk-arrival {float:right;}
.chk-arrival span {font-size:10px; font-weight:600; color:#848484; display:block; margin-right:9px; margin-top:1px; float:left;}
.chk-arrival b {display:block; font-size:10px; font-family:'Open Sans'; font-weight:700; color:#4a90a4; float:left;}
.chk-fligth-devider {float:left; width:1px; height:22px; background:#ebebeb; margin:4px 16px 0px 17px;}
.chk-fligth-time {float:left; margin:10px 0px 0px 2px;}

</style>
