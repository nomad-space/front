<template>

  <div>

    <div v-if="loading">
      loading...
    </div>

    <table v-if="!loading" class="table-a light">
      <thead>
        <tr>
          <th>Booking ID</th>
          <th>Username</th>
          <th>Location</th>
          <th>Hotel</th>
          <th>Dates</th>
          <th>Status</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data">
          <td>{{ row.id }}</td>
          <td>{{ row.firstname + ' ' + row.lastname }}</td>
          <td>{{ row.location.length ? row.location[0].country + ', ' + row.location[0].city : ''}}</td>
          <td>{{ row.hotel.length ? row.hotel[0].name : ''}}</td>
          <td>{{ row.checkin_date + '/' + row.checkout_date }}</td>
          <td>{{ row.status }}</td>
          <td>{{ row.created_at }}</td>
          <td>
            <router-link :to="{ name: 'CallCenterDetailBooking', params: { booking_id: row.id }}" class="cat-list-btn">detail</router-link>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  /* eslint-disable */
  export default {
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

      this.$http.get(this.$config('api.base') + '/v1/booking/list').then(
        function (response) { // Success.
          console.log(response.data);
          self.data = response.data.data;
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

  .tables {padding-bottom:20px;}
  .tables .typography-heading {margin-bottom:40px;}
  .table-a {width:100%; border-collapse:collapse;}
  .table-a th,.table-a td {border:1px solid #e6e6e6;  font-family:'Raleway';}
  .table-a th {font-weight:600; padding:13px 14px 13px 14px; text-transform:uppercase; font-size:12px; color:#2f3341; text-align:left;}
  .table-a td {font-family:'Open Sans'; padding:12px 14px 12px 14px; font-size:13px; color:#6b7373; vertical-align: middle;}
  .table-a tr:nth-child(2n+1) td {background:#fcfcfc;}
  .table-a.light tr th,.table-a.light tr td {border-left:0px; border-right:0px;}

</style>
