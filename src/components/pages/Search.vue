<template>
  <div class="wrapper-a-holder full-width-search">
    <div class="page-search full-width-search search-type-b" style="padding-top: 170px">
      <div class="search-type-padding">
        <div class="page-search-content">

          <!-- // tab content hotels // -->
          <div class="search-tab-content">
            <form method="post" v-on:submit.prevent.stop="search()">
              <div class="page-search-p">
                <div class="search-large-i">
                  <div class="srch-tab-line no-margin-bottom">
                    <label>Place / hotel name</label>
                    <div class="input-a">
                      <InputLocation @change="changeLocation"/>
                    </div>
                  </div>
                </div>
                <div class="search-large-i">
                  <div class="srch-tab-line no-margin-bottom">
                    <div class="srch-tab-left">
                      <label for="from">Check in</label>
                      <div class="input-a">
                        <InputDatepicker @change="changeCheckin"/>
                        <span class="date-icon"></span>
                      </div>
                    </div>
                    <div class="srch-tab-right">
                      <label>Check out</label>
                      <div class="input-a">
                        <InputDatepicker @change="changeCheckout"/>
                        <span class="date-icon"></span>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
                <div class="search-large-i">
                  <div class="srch-tab-line no-margin-bottom">
                    <div class="srch-tab-3c">
                      <label>adult</label>
                      <div class="select-wrapper">
                        <select v-model="data.form.adults" name="adults" class="custom-select hasCustomSelect" style="-webkit-appearance: menulist-button; width: 95px; position: absolute; opacity: 100; height: 34px; font-size: 11px;">
                          <option>--</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select><span class="customSelect custom-select" style="display: inline-block;"><span class="customSelectInner" style="width: 91px; display: inline-block;">--</span></span>
                      </div>
                    </div>
                    <div class="srch-tab-3c">
                      <label>Child</label>
                      <div class="select-wrapper">
                        <select v-model="data.form.childs" name="childs" class="custom-select hasCustomSelect" style="-webkit-appearance: menulist-button; width: 95px; position: absolute; opacity: 100; height: 34px; font-size: 11px;">
                          <option>--</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select><span class="customSelect custom-select" style="display: inline-block;"><span class="customSelectInner" style="width: 91px; display: inline-block;">--</span></span>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
                <div class="clear"></div>

              </div>
              <footer class="search-footer">
                <button class="srch-btn">Search</button>
                <div class="clear"></div>
              </footer>
            </form>
          </div>
          <!-- // tab content hotels // -->

          <div v-if="searching || searched" id="sort_form" class="catalog-head large fly-in appeared srch-tab-line" style="margin-top: 20px">
            <label>Sorting results by:</label>
            <div class="search-select222 select-wrapper srch-tab-3c" style="width: 100px;">
              <select @change="changeSort" v-model="data.form.sort" class="custom-select hasCustomSelect" name="sort">
                <option v-for="option in data.sort.values" :value="option.value" :key="option.value">{{option.name}}</option>
              </select>
            </div>
            <a href="#" class="show-list"></a>
            <a href="#" class="show-table"></a>
            <a href="#" class="show-thumbs chosen"></a>
            <div class="clear"></div>
          </div>

          <div v-if="searching || searched" class="catalog-row list-rows" id="results">
            <Hotel v-for="hotel in data.result.hotels" :key="hotel.id" :hotel="hotel" :form="data.form" :search_id="data.result.search_id" :proposals="data.result.proposals[hotel.id] != undefined ? data.result.proposals[hotel.id].proposals : null" :gates="data.result.gates"/>
            <button v-if="searched" v-on:click.prevent.stop="search()" id="show_more_hotels" style="margin: 0 auto; width: 250px;" class="booking-complete-btn">SHOW MORE HOTELS</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import InputLocation from '@/components/InputLocation'
  import InputDatepicker from '@/components/InputDatepicker'
  import Hotel from '@/components/Hotel'
  export default {
    name: 'SearchPage',
    components: {
      InputLocation,
      InputDatepicker,
      Hotel
    },
    data () {
      return {
        msg: 'Hotel search',
        parentMessage: 'parent',
        item_selected: null,
        search_id: null,
        timer_id: null,
        data: {
          form: {
            // location_id: null,
            // checkin: null,
            // checkout: null,
            // adults: null,
            // childs: null

            adults: '2',
            checkin: '2018-06-04',
            checkout: '2018-06-06',
            childs: '1',
            location_id: 15542,
            sort: 'popularity',
            page: 0
          },
          result:
            {}
            // {
            //   "search_id": "1b0a3cfc-db74-4e02-a7f2-0d05632ba819",
            //   "stop": false,
            //   "hotels": [{
            //     "room_count": 0,
            //     "check_in": "",
            //     "check_out": "",
            //     "distance_to_center": 3007,
            //     "address": "69 rue Blanche",
            //     "name": "Hotel Joke - Astotel",
            //     "location_id": 15542,
            //     "photos_ids": ["8071550345", "6653633643", "6653633658", "6324403503", "6324403506", "6324403509", "6324403511", "6653633648", "6653633650", "6653633652", "6653633653", "6324403513", "6653633655", "6324403517", "6653633659", "6653633640", "7009328860", "6653633642", "6324403514", "6653633657", "8071550320", "6653633654", "6653633645", "7743099022"],
            //     "minprice": 105,
            //     "property_type": "HOTEL",
            //     "rating": 9.2,
            //     "stars": 3,
            //     "year_opened": 0,
            //     "year_renovated": 0,
            //     "locations_ids": [],
            //     "popularity2": 5,
            //     "reviews_count": 799,
            //     "chain": "Utell",
            //     "id": 47306031,
            //     "popularity": 167123,
            //     "latin_name": "",
            //     "is_rentals": false,
            //     "has_rentals": false,
            //     "photos_count": 24,
            //     "latin_full_name": "",
            //     "full_name": "",
            //     "property_type_id": 1,
            //     "price_group": 1,
            //     "median_minprice": 161
            //   }, {
            //     "room_count": 0,
            //     "check_in": "",
            //     "check_out": "",
            //     "distance_to_center": 3297,
            //     "address": "6 Rue Constance",
            //     "name": "Le Relais Montmartre",
            //     "location_id": 15542,
            //     "photos_ids": ["6663215545", "7331250857", "6663215548", "6663215549", "7700575650", "7700575654", "7700575655", "7700575658", "7700575659", "7700575665", "7700575668", "6663215546", "6663215547", "4819117260", "6346439892", "6346439893", "6346439894", "6346439897", "6346439900", "6346439902", "6346439903", "6346439906", "6346439898", "6346439899"],
            //     "minprice": 109,
            //     "property_type": "HOTEL",
            //     "rating": 9.2,
            //     "stars": 4,
            //     "year_opened": 0,
            //     "year_renovated": 0,
            //     "locations_ids": [],
            //     "popularity2": 16,
            //     "reviews_count": 1015,
            //     "chain": "Reconline",
            //     "id": 299011,
            //     "popularity": 161336,
            //     "latin_name": "",
            //     "is_rentals": false,
            //     "has_rentals": false,
            //     "photos_count": 24,
            //     "latin_full_name": "",
            //     "full_name": "",
            //     "property_type_id": 1,
            //     "price_group": 1,
            //     "median_minprice": 192
            //   }, {
            //     "room_count": 0,
            //     "check_in": "",
            //     "check_out": "",
            //     "distance_to_center": 875,
            //     "address": "1 Place De La Sorbonne",
            //     "name": "Select Hotel",
            //     "location_id": 15542,
            //     "photos_ids": ["1724741049", "6654466817", "4156019738", "7009474014", "6654466834", "6654466816", "7009474031", "6654466803", "6654466836", "6654466833", "6654466830", "6654466815", "6654466809", "7009474012", "7009474013", "4156019744", "4156019748", "6654466829", "6654466832", "4156019741", "6654466805", "6654466827", "7331257921", "4839238093"],
            //     "minprice": 138,
            //     "property_type": "HOTEL",
            //     "rating": 9,
            //     "stars": 4,
            //     "year_opened": 0,
            //     "year_renovated": 0,
            //     "locations_ids": [],
            //     "popularity2": 11,
            //     "reviews_count": 2273,
            //     "chain": "",
            //     "id": 212235,
            //     "popularity": 157387,
            //     "latin_name": "",
            //     "is_rentals": false,
            //     "has_rentals": false,
            //     "photos_count": 24,
            //     "latin_full_name": "",
            //     "full_name": "",
            //     "property_type_id": 1,
            //     "price_group": 1,
            //     "median_minprice": 211
            //   }, {
            //     "room_count": 0,
            //     "check_in": "",
            //     "check_out": "",
            //     "distance_to_center": 1727,
            //     "address": "28 place des Vosges",
            //     "name": "Le Pavillon de la Reine \u0026 Spa",
            //     "location_id": 15542,
            //     "photos_ids": ["7936512200", "7331258243", "4488504605", "6345712235", "6345712231", "4488504602", "6345712236", "6345712220", "6345712230", "6656434524", "6656434533", "6656434525", "6656434532", "6656434531", "6656434519", "7711560450", "6345712227", "6345712221", "6528355526", "7711560446", "6656434520", "6656434510", "6345712214", "7331258244"],
            //     "minprice": 346,
            //     "property_type": "HOTEL",
            //     "rating": 9.1,
            //     "stars": 5,
            //     "year_opened": 0,
            //     "year_renovated": 0,
            //     "locations_ids": [],
            //     "popularity2": 2,
            //     "reviews_count": 542,
            //     "chain": "Ihotelier",
            //     "id": 298259,
            //     "popularity": 157362,
            //     "latin_name": "",
            //     "is_rentals": false,
            //     "has_rentals": false,
            //     "photos_count": 24,
            //     "latin_full_name": "",
            //     "full_name": "",
            //     "property_type_id": 1,
            //     "price_group": 1,
            //     "median_minprice": 562
            //   }, {
            //     "room_count": 0,
            //     "check_in": "",
            //     "check_out": "",
            //     "distance_to_center": 2392,
            //     "address": "11-15 Rue De Lyon",
            //     "name": "Holiday Inn Paris Gare de Lyon Bastille",
            //     "location_id": 15542,
            //     "photos_ids": ["4487159162", "4487159164", "4487159167", "4487159176", "6682224281", "4487159178", "6343370970", "4487159161", "4487159174", "4487159168", "6343370971", "7016596192", "4487159169", "7765985026", "7765985027", "7765985030", "7967415051", "7967415074", "7967415070"],
            //     "minprice": 106,
            //     "property_type": "HOTEL",
            //     "rating": 8.4,
            //     "stars": 4,
            //     "year_opened": 0,
            //     "year_renovated": 0,
            //     "locations_ids": [],
            //     "popularity2": 3,
            //     "reviews_count": 2589,
            //     "chain": "Holiday Inn",
            //     "id": 298878,
            //     "popularity": 154069,
            //     "latin_name": "",
            //     "is_rentals": false,
            //     "has_rentals": false,
            //     "photos_count": 19,
            //     "latin_full_name": "",
            //     "full_name": "",
            //     "property_type_id": 1,
            //     "price_group": 1,
            //     "median_minprice": 187
            //   }, {
            //     "room_count": 0,
            //     "check_in": "",
            //     "check_out": "",
            //     "distance_to_center": 2079,
            //     "address": "6, rue Buffault",
            //     "name": "Hotel Eugène en Ville",
            //     "location_id": 15542,
            //     "photos_ids": ["6329938160", "2281515705", "6329938164", "8009384710", "7865824181", "7796706584", "766735273", "6658021052", "6329938158", "6658021039", "6329938183", "6658021051", "7709323717", "7709323716", "7331279267", "7095645888", "6329938169", "2281515701", "2281515703", "6658021054", "6658021045", "2281515714", "2281515712", "2281515710"],
            //     "minprice": 97,
            //     "property_type": "HOTEL",
            //     "rating": 8.4,
            //     "stars": 4,
            //     "year_opened": 0,
            //     "year_renovated": 0,
            //     "locations_ids": [],
            //     "popularity2": 5,
            //     "reviews_count": 1610,
            //     "chain": "Hotusa",
            //     "id": 298189,
            //     "popularity": 153652,
            //     "latin_name": "",
            //     "is_rentals": false,
            //     "has_rentals": false,
            //     "photos_count": 24,
            //     "latin_full_name": "",
            //     "full_name": "",
            //     "property_type_id": 1,
            //     "price_group": 1,
            //     "median_minprice": 187
            //   }, {
            //     "room_count": 0,
            //     "check_in": "",
            //     "check_out": "",
            //     "distance_to_center": 403,
            //     "address": "4 rue Danton",
            //     "name": "Holiday Inn Paris Notre Dame",
            //     "location_id": 15542,
            //     "photos_ids": ["2287062683", "2287062684", "2287062682", "781826827", "781826512", "781826400"],
            //     "minprice": 161,
            //     "property_type": "HOTEL",
            //     "rating": 8.3,
            //     "stars": 4,
            //     "year_opened": 0,
            //     "year_renovated": 0,
            //     "locations_ids": [],
            //     "popularity2": 8,
            //     "reviews_count": 1790,
            //     "chain": "Holiday Inn",
            //     "id": 298450,
            //     "popularity": 153345,
            //     "latin_name": "",
            //     "is_rentals": false,
            //     "has_rentals": false,
            //     "photos_count": 6,
            //     "latin_full_name": "",
            //     "full_name": "",
            //     "property_type_id": 1,
            //     "price_group": 1,
            //     "median_minprice": 266
            //   }, {
            //     "room_count": 0,
            //     "check_in": "",
            //     "check_out": "",
            //     "distance_to_center": 3042,
            //     "address": "16 rue d'Edimbourg",
            //     "name": "Idol Hotel",
            //     "location_id": 15542,
            //     "photos_ids": ["7331281594", "7331281593", "7331281592", "7331281595", "6330089962", "6330089992", "6656162470", "3819285547", "6330089978", "6330089968", "6330089964", "6656162473", "6656162474", "6656162486", "6656162478", "6656162481", "6656162483", "6330089922", "6330089952", "6330089967", "6330089972", "6330089994", "6330089999", "6656162467"],
            //     "minprice": 124,
            //     "property_type": "HOTEL",
            //     "rating": 9,
            //     "stars": 4,
            //     "year_opened": 0,
            //     "year_renovated": 0,
            //     "locations_ids": [],
            //     "popularity2": 3,
            //     "reviews_count": 1171,
            //     "chain": "",
            //     "id": 430465,
            //     "popularity": 150327,
            //     "latin_name": "",
            //     "is_rentals": false,
            //     "has_rentals": false,
            //     "photos_count": 24,
            //     "latin_full_name": "",
            //     "full_name": "",
            //     "property_type_id": 1,
            //     "price_group": 1,
            //     "median_minprice": 212
            //   }, {
            //     "room_count": 0,
            //     "check_in": "",
            //     "check_out": "",
            //     "distance_to_center": 3266,
            //     "address": "13 Rue De Reuilly",
            //     "name": "Aparthotel Adagio Access Paris Reuilly",
            //     "location_id": 15542,
            //     "photos_ids": ["1950940298", "1950940299", "2268940289", "3823383422", "1950940295", "3479474626"],
            //     "minprice": 77,
            //     "property_type": "APARTHOTEL",
            //     "rating": 8.1,
            //     "stars": 3,
            //     "year_opened": 0,
            //     "year_renovated": 0,
            //     "locations_ids": [],
            //     "popularity2": 7,
            //     "reviews_count": 2267,
            //     "chain": "Amerihost Inn",
            //     "id": 4974573,
            //     "popularity": 149768,
            //     "latin_name": "",
            //     "is_rentals": false,
            //     "has_rentals": false,
            //     "photos_count": 6,
            //     "latin_full_name": "",
            //     "full_name": "",
            //     "property_type_id": 2,
            //     "price_group": 1,
            //     "median_minprice": 117
            //   }],
            //   "total_hotels": 4910,
            //   "filtered_hotels": 4910,
            //   "proposals": {},
            //   "gates": {},
            //   "proposals_options": {},
            //   "room_types": {}
            // }
          ,
          sort: {
            values: [
              {value: "price", name: "Price"},
              {value: "popularity", name: "Popularity"},
              {value: "rating", name: "Guest rating"},
              {value: "stars", name: "Star rating"},
              {value: "distance", name: "Distance from city center"},
              {value: "discount", name: "Discount"},
            ]
          }
        },
        searching: false,
        searched: false,
      }
    },
    methods: {

      changeLocation (locationId) {
        this.data.form.location_id = locationId
      },
      changeCheckin (date) {
        this.data.form.checkin = date
      },
      changeCheckout (date) {
        this.data.form.checkout = date
      },
      changeSort (sort) {
        this.stopProgress()
        this.search(true)
      },

      stopProgress() {
        clearInterval(this.timer_id);
        console.log('стоп2');
        // this.data.page++

        // this.data.searched = true
        // this.data.searching = false
        this.$set(this, 'searched', true)
        this.$set(this, 'searching', false)

        NProgress.done();

        // if (!$("#show_more_hotels").length) {
        //   $("<button id=\"show_more_hotels\" style=\"margin: 0 auto; width: 250px;\" class=\"booking-complete-btn\">SHOW MORE HOTELS</button>").appendTo("#results");
        // }
      },

      getSearchUrl () {

        var data = [
          this.$config('api.search'),
          'search',
          this.data.form.location_id,
          this.data.form.checkin,
          this.data.form.checkout,
          this.data.form.adults,
          this.data.form.sort,
          this.search_id ? this.search_id : 'new'
        ]

        if (this.data.form.page > 1) {
          data.push(this.data.form.page)
        }
        return data.join('/')
      },

      search (isNewSearch) {

        var $self = this

        if (isNewSearch) {
          $self.search_id = null
          $self.data.form.page = 0
          $self.data.result = {}
        }

        NProgress.start();
        $self.data.form.page++

        $self.searched = false
        $self.searching = true

        // setTimeout(function() {
        //   $self.data.result = {"search_id":"6919c7e0-f7da-4604-b3b9-ffcb998eb595","stop":false,"hotels":[{"room_count":0,"check_in":"","check_out":"","distance_to_center":3007,"address":"69 rue Blanche","name":"Hotel Joke - Astotel","location_id":15542,"photos_ids":["8071550345","6653633643","6653633658","6324403503","6324403506","6324403509","6324403511","6653633648","6653633650","6653633652","6653633653","6324403513","6653633655","6324403517","6653633659","6653633640","7009328860","6653633642","6324403514","6653633657","8071550320","6653633654","6653633645","7743099022"],"minprice":105,"property_type":"HOTEL","rating":9.2,"stars":3,"year_opened":0,"year_renovated":0,"locations_ids":[],"popularity2":5,"reviews_count":799,"chain":"Utell","id":47306031,"popularity":167123,"latin_name":"","is_rentals":false,"has_rentals":false,"photos_count":24,"latin_full_name":"","full_name":"","property_type_id":1,"price_group":1,"median_minprice":161},{"room_count":0,"check_in":"","check_out":"","distance_to_center":3297,"address":"6 Rue Constance","name":"Le Relais Montmartre","location_id":15542,"photos_ids":["6663215545","7331250857","6663215548","6663215549","7700575650","7700575654","7700575655","7700575658","7700575659","7700575665","7700575668","6663215546","6663215547","4819117260","6346439892","6346439893","6346439894","6346439897","6346439900","6346439902","6346439903","6346439906","6346439898","6346439899"],"minprice":109,"property_type":"HOTEL","rating":9.2,"stars":4,"year_opened":0,"year_renovated":0,"locations_ids":[],"popularity2":16,"reviews_count":1015,"chain":"Reconline","id":299011,"popularity":161336,"latin_name":"","is_rentals":false,"has_rentals":false,"photos_count":24,"latin_full_name":"","full_name":"","property_type_id":1,"price_group":1,"median_minprice":192},{"room_count":0,"check_in":"","check_out":"","distance_to_center":2079,"address":"6, rue Buffault","name":"Hotel Eugène en Ville","location_id":15542,"photos_ids":["6329938160","2281515705","6329938164","8009384710","7865824181","7796706584","766735273","6658021052","6329938158","6658021039","6329938183","6658021051","7709323717","7709323716","7331279267","7095645888","6329938169","2281515701","2281515703","6658021054","6658021045","2281515714","2281515712","2281515710"],"minprice":97,"property_type":"HOTEL","rating":8.4,"stars":4,"year_opened":0,"year_renovated":0,"locations_ids":[],"popularity2":5,"reviews_count":1610,"chain":"Hotusa","id":298189,"popularity":157431,"latin_name":"","is_rentals":false,"has_rentals":false,"photos_count":24,"latin_full_name":"","full_name":"","property_type_id":1,"price_group":1,"median_minprice":187},{"room_count":0,"check_in":"","check_out":"","distance_to_center":875,"address":"1 Place De La Sorbonne","name":"Select Hotel","location_id":15542,"photos_ids":["1724741049","6654466817","4156019738","7009474014","6654466834","6654466816","7009474031","6654466803","6654466836","6654466833","6654466830","6654466815","6654466809","7009474012","7009474013","4156019744","4156019748","6654466829","6654466832","4156019741","6654466805","6654466827","7331257921","4839238093"],"minprice":138,"property_type":"HOTEL","rating":9,"stars":4,"year_opened":0,"year_renovated":0,"locations_ids":[],"popularity2":11,"reviews_count":2273,"chain":"","id":212235,"popularity":157387,"latin_name":"","is_rentals":false,"has_rentals":false,"photos_count":24,"latin_full_name":"","full_name":"","property_type_id":1,"price_group":1,"median_minprice":211},{"room_count":0,"check_in":"","check_out":"","distance_to_center":1727,"address":"28 place des Vosges","name":"Le Pavillon de la Reine \u0026 Spa","location_id":15542,"photos_ids":["7936512200","7331258243","4488504605","6345712235","6345712231","4488504602","6345712236","6345712220","6345712230","6656434524","6656434533","6656434525","6656434532","6656434531","6656434519","7711560450","6345712227","6345712221","6528355526","7711560446","6656434520","6656434510","6345712214","7331258244"],"minprice":346,"property_type":"HOTEL","rating":9.1,"stars":5,"year_opened":0,"year_renovated":0,"locations_ids":[],"popularity2":2,"reviews_count":542,"chain":"Ihotelier","id":298259,"popularity":157362,"latin_name":"","is_rentals":false,"has_rentals":false,"photos_count":24,"latin_full_name":"","full_name":"","property_type_id":1,"price_group":1,"median_minprice":562},{"room_count":0,"check_in":"","check_out":"","distance_to_center":2392,"address":"11-15 Rue De Lyon","name":"Holiday Inn Paris Gare de Lyon Bastille","location_id":15542,"photos_ids":["4487159162","4487159164","4487159167","4487159176","6682224281","4487159178","6343370970","4487159161","4487159174","4487159168","6343370971","7016596192","4487159169","7765985026","7765985027","7765985030","7967415051","7967415074","7967415070"],"minprice":106,"property_type":"HOTEL","rating":8.4,"stars":4,"year_opened":0,"year_renovated":0,"locations_ids":[],"popularity2":3,"reviews_count":2589,"chain":"Holiday Inn","id":298878,"popularity":154069,"latin_name":"","is_rentals":false,"has_rentals":false,"photos_count":19,"latin_full_name":"","full_name":"","property_type_id":1,"price_group":1,"median_minprice":187},{"room_count":0,"check_in":"","check_out":"","distance_to_center":403,"address":"4 rue Danton","name":"Holiday Inn Paris Notre Dame","location_id":15542,"photos_ids":["2287062683","2287062684","2287062682","781826827","781826512","781826400"],"minprice":161,"property_type":"HOTEL","rating":8.3,"stars":4,"year_opened":0,"year_renovated":0,"locations_ids":[],"popularity2":8,"reviews_count":1790,"chain":"Holiday Inn","id":298450,"popularity":153345,"latin_name":"","is_rentals":false,"has_rentals":false,"photos_count":6,"latin_full_name":"","full_name":"","property_type_id":1,"price_group":1,"median_minprice":266},{"room_count":0,"check_in":"","check_out":"","distance_to_center":3042,"address":"16 rue d'Edimbourg","name":"Idol Hotel","location_id":15542,"photos_ids":["7331281594","7331281593","7331281592","7331281595","6330089962","6330089992","6656162470","3819285547","6330089978","6330089968","6330089964","6656162473","6656162474","6656162486","6656162478","6656162481","6656162483","6330089922","6330089952","6330089967","6330089972","6330089994","6330089999","6656162467"],"minprice":124,"property_type":"HOTEL","rating":9,"stars":4,"year_opened":0,"year_renovated":0,"locations_ids":[],"popularity2":3,"reviews_count":1171,"chain":"","id":430465,"popularity":150327,"latin_name":"","is_rentals":false,"has_rentals":false,"photos_count":24,"latin_full_name":"","full_name":"","property_type_id":1,"price_group":1,"median_minprice":212},{"room_count":0,"check_in":"","check_out":"","distance_to_center":3266,"address":"13 Rue De Reuilly","name":"Aparthotel Adagio Access Paris Reuilly","location_id":15542,"photos_ids":["1950940298","1950940299","2268940289","3823383422","1950940295","3479474626"],"minprice":77,"property_type":"APARTHOTEL","rating":8.1,"stars":3,"year_opened":0,"year_renovated":0,"locations_ids":[],"popularity2":7,"reviews_count":2267,"chain":"Amerihost Inn","id":4974573,"popularity":149768,"latin_name":"","is_rentals":false,"has_rentals":false,"photos_count":6,"latin_full_name":"","full_name":"","property_type_id":2,"price_group":1,"median_minprice":117}],"total_hotels":4906,"filtered_hotels":4906,"proposals":{"1224987158":{"proposals":[{"gate_id":97,"internal_type_id":1,"name":"Classic Double Room","price":1146.4,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=1224987158\u0026gate_id=97\u0026room_id=0","set_options":{"24":false,"28":false,"29":true,"5":true,"6":true,"7":false},"key":1485716734,"num_rooms":1},{"gate_id":20,"internal_type_id":0,"name":"Accomodation","price":1146.75,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=1224987158\u0026gate_id=20\u0026room_id=0","set_options":{"13":false,"2":false},"key":3641584161,"num_rooms":1}]},"212235":{"proposals":[{"gate_id":97,"internal_type_id":4,"name":"Deluxe Double Room","price":509.42,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=212235\u0026gate_id=97\u0026room_id=0","set_options":{"24":false,"28":false,"29":true,"5":true,"6":true,"7":false},"key":1397876407,"num_rooms":1},{"gate_id":17,"internal_type_id":4,"name":"Deluxe Double Room","price":509.42,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=212235\u0026gate_id=17\u0026room_id=0","set_options":{},"key":2467667498,"num_rooms":1},{"gate_id":1,"internal_type_id":4,"name":"Deluxe Double Room","price":566.66,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=212235\u0026gate_id=1\u0026room_id=0","set_options":{"13":false,"2":false,"28":false,"29":true,"5":false,"6":true},"key":261730796,"num_rooms":1}]},"298189":{"proposals":[{"gate_id":1,"internal_type_id":2,"name":"Superior Double or Twin Room","price":406.7,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298189\u0026gate_id=1\u0026room_id=0","set_options":{"13":false,"2":false,"28":false,"29":true,"5":true,"6":false},"key":4214741594,"num_rooms":1},{"gate_id":92,"internal_type_id":0,"name":"Superior Room Twin or Double","price":407.52,"room_id":5,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298189\u0026gate_id=92\u0026room_id=5","set_options":{"28":false,"29":true,"6":false},"key":4149668262,"num_rooms":1},{"gate_id":62,"internal_type_id":2,"name":"Superior Double Room","price":437.86,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298189\u0026gate_id=62\u0026room_id=0","set_options":{},"key":2971697121,"num_rooms":1},{"gate_id":4,"internal_type_id":2,"name":"Superior","price":456.63,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298189\u0026gate_id=4\u0026room_id=0","set_options":{"13":false,"2":false,"6":false},"key":3066077676,"num_rooms":1},{"gate_id":17,"internal_type_id":2,"name":"Double Superior","price":467.09,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298189\u0026gate_id=17\u0026room_id=0","set_options":{},"key":4180877339,"num_rooms":1},{"gate_id":20,"internal_type_id":15,"name":"Business double room","price":582.93,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298189\u0026gate_id=20\u0026room_id=0","set_options":{"13":false,"2":false,"28":true,"29":false,"6":true},"key":3239555101,"num_rooms":1}]},"298259":{"proposals":[{"gate_id":97,"internal_type_id":2,"name":"Superior Room","price":1206.12,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298259\u0026gate_id=97\u0026room_id=0","set_options":{"24":false,"28":false,"29":true,"5":true,"6":true,"7":false},"key":963973625,"num_rooms":1},{"gate_id":20,"internal_type_id":0,"name":"Accomodation","price":1206.47,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298259\u0026gate_id=20\u0026room_id=0","set_options":{"13":false,"2":false},"key":3641584161,"num_rooms":1}]},"298878":{"proposals":[{"gate_id":44,"internal_type_id":1,"name":"Standard Room","price":497.16,"room_id":30,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298878\u0026gate_id=44\u0026room_id=30","set_options":{"10":true,"6":false,"7":false},"key":791848337,"num_rooms":1},{"gate_id":97,"internal_type_id":1,"name":"Standard Room","price":505.13,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298878\u0026gate_id=97\u0026room_id=0","set_options":{"24":false,"28":false,"29":true,"6":false,"7":false},"key":3191588931,"num_rooms":1},{"gate_id":17,"internal_type_id":1,"name":"STANDARD ROOM","price":511.8,"room_id":10,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298878\u0026gate_id=17\u0026room_id=10","set_options":{"7":false},"key":1894904096,"num_rooms":1},{"gate_id":1,"internal_type_id":1,"name":"Standard","price":511.94,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298878\u0026gate_id=1\u0026room_id=0","set_options":{"13":false,"2":false,"28":false,"29":true,"5":false,"6":false,"7":false},"key":3964128986,"num_rooms":1},{"gate_id":20,"internal_type_id":0,"name":"Accomodation","price":517.37,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298878\u0026gate_id=20\u0026room_id=0","set_options":{"13":false,"2":false},"key":3641584161,"num_rooms":1},{"gate_id":92,"internal_type_id":0,"name":"Room standard","price":540.53,"room_id":6,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=298878\u0026gate_id=92\u0026room_id=6","set_options":{"2":false,"28":false,"29":true,"6":false},"key":2273810999,"num_rooms":1}]},"299011":{"proposals":[{"gate_id":97,"internal_type_id":1,"name":"Classic Double Room","price":487.21,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=299011\u0026gate_id=97\u0026room_id=0","set_options":{"24":false,"28":false,"29":true,"5":true,"6":true,"7":false},"key":1485716734,"num_rooms":1},{"gate_id":20,"internal_type_id":1,"name":"Standard double room","price":487.37,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=299011\u0026gate_id=20\u0026room_id=0","set_options":{"13":false,"2":false,"28":true,"29":false,"6":true},"key":1448665817,"num_rooms":1},{"gate_id":62,"internal_type_id":1,"name":"Classic Double Room","price":489.48,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=299011\u0026gate_id=62\u0026room_id=0","set_options":{},"key":2590532486,"num_rooms":1}]},"430465":{"proposals":[{"gate_id":1,"internal_type_id":1,"name":"Double Room","price":425.54,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=430465\u0026gate_id=1\u0026room_id=0","set_options":{"13":false,"2":false,"28":false,"29":true,"5":true,"6":false},"key":2033079402,"num_rooms":1},{"gate_id":97,"internal_type_id":0,"name":"Double Room (Lady soul)","price":530.93,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=430465\u0026gate_id=97\u0026room_id=0","set_options":{"24":false,"28":false,"29":true,"5":true,"6":false,"7":false},"key":3411977333,"num_rooms":1},{"gate_id":62,"internal_type_id":0,"name":"Double Room (Lady soul)","price":530.93,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=430465\u0026gate_id=62\u0026room_id=0","set_options":{},"key":438383098,"num_rooms":1},{"gate_id":20,"internal_type_id":1,"name":"Standard double room","price":531.56,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=430465\u0026gate_id=20\u0026room_id=0","set_options":{"13":false,"2":false,"28":false,"29":true,"6":false},"key":93027184,"num_rooms":1}]},"47306031":{"proposals":[{"gate_id":92,"internal_type_id":1,"name":"Twin standard","price":489.53,"room_id":1,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=47306031\u0026gate_id=92\u0026room_id=1","set_options":{"2":false,"28":false,"29":true,"6":false},"key":3636691744,"num_rooms":1},{"gate_id":20,"internal_type_id":1,"name":"Standard double room","price":489.76,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=47306031\u0026gate_id=20\u0026room_id=0","set_options":{"13":false,"2":false,"28":false,"29":true,"6":false},"key":93027184,"num_rooms":1},{"gate_id":1,"internal_type_id":1,"name":"Standard Twin","price":490.14,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=47306031\u0026gate_id=1\u0026room_id=0","set_options":{"13":false,"2":false,"28":false,"29":true,"5":true,"6":false},"key":2319846008,"num_rooms":1},{"gate_id":62,"internal_type_id":1,"name":"Standard Twin Room","price":506.5,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=47306031\u0026gate_id=62\u0026room_id=0","set_options":{},"key":2829935016,"num_rooms":1},{"gate_id":17,"internal_type_id":1,"name":"STANDARD Twin","price":512.79,"room_id":0,"options":"","deeplink":"/wl_search/click?search_id=6919c7e0-f7da-4604-b3b9-ffcb998eb595\u0026hotel_id=47306031\u0026gate_id=17\u0026room_id=0","set_options":{"6":false},"key":1112985196,"num_rooms":1}]}},"gates":{"1":{"name":"Agoda","beauty_name":""},"10":{"name":"Splendia","beauty_name":""},"16":{"name":"Accor","beauty_name":""},"17":{"name":"GetARoom","beauty_name":""},"20":{"name":"Hotel.info","beauty_name":""},"21":{"name":"LateRooms","beauty_name":""},"37":{"name":"HRS","beauty_name":""},"4":{"name":"Otel.com","beauty_name":""},"44":{"name":"IHG","beauty_name":""},"45":{"name":"Travelclick","beauty_name":""},"62":{"name":"Roomer","beauty_name":""},"92":{"name":"HotelQuickly","beauty_name":""},"97":{"name":"Hotellook","beauty_name":""},"98":{"name":"Hotellook","beauty_name":""}},"proposals_options":{"2":"Breakfast included","28":"Pay at the hotel","29":"Pay now","5":"Free WiFi","6":"Free cancellation","7":"Smoking allowed"},"room_types":{}}
        // }, 1000);
        //
        // return

        $.getJSON( $self.getSearchUrl(), function( data ) {

          $self.$set($self, 'search_id', data.search_id)

          if ($self.data.form.page > 1) {
            $self.data.result.hotels = $self.data.result.hotels.concat(data.hotels)
            $self.data.result.gates = Object.assign({}, $self.data.result.gates, data.gates);
            $self.data.result.proposals = Object.assign({}, $self.data.result.proposals, data.proposals);
            $self.data.result.proposals_options = Object.assign({}, $self.data.result.proposals_options, data.proposals_options);
            $self.data.result.room_types = Object.assign({}, $self.data.result.room_types, data.room_types);

            console.log('stopProgress() $self.data.form.page > 1')
            $self.stopProgress()
            return
          } else {
            $self.$set($self.data, 'result', data)
          }

          if (data.stop == true) {
            console.log('stopProgress()')
            $self.stopProgress()
            return
          }

          $self.timer_id = setInterval(function() {

            $.getJSON( $self.getSearchUrl(), function( data ) {

              $self.$set($self, 'search_id', data.search_id)

              if ($self.data.result.gates == undefined || Object.keys($self.data.result.gates).length <= Object.keys(data.gates).length) {
                $self.$set($self.data, 'result', data)
              }

              if (data.stop == true) {
                console.log('stopProgress()')
                $self.stopProgress()
                return
              }
            });
          }, 2000);

          setTimeout(function() {
            $self.stopProgress()
          }, 60000);
        });
      },
    }
  }
</script>

<style>

  .clear {
    clear: both;
  }

  .dp-highlight .ui-state-default {
    background: #ff7200!important;
    color: #FFF;
  }
  .cat-list-text {
    font-size: 10px;
    color: #747d7e;
    font-family: Raleway;
    font-weight: 500;
    margin-top: 10px;
  }

  span.ui-spinner {
    width: 40px;
  }

  .prices {
    margin-top: 20px;
  }
  .prices .gate {
    float: left;
    font-family: 'Montserrat';
    font-size: 12px;
    text-transform: uppercase;
    color: #141d1e;
    font-weight: normal;
  }
  .prices .gate_price {
    float: right;
    /*text-transform: uppercase;*/
    font-size: 12px;
    color: #828282;
    font-family: 'Raleway';
    font-weight: 600;
  }

  .width50 {width: 50px}
  .price_label {margin-bottom: 0px !important;}
  .price_label .tour-item-icons {height: 22px;}


</style>
<style scoped>
  /*h1, h2 {*/
    /*font-weight: normal;*/
  /*}*/
  /*ul {*/
    /*list-style-type: none;*/
    /*padding: 10px;*/
  /*}*/
  /*li {*/
    /*display: inline-block;*/
    /*margin: 0 10px;*/
  /*}*/
  /*a {*/
    /*color: #42b984;*/
  /*}*/

  /*.wrap {*/
    /*display: flex;*/
  /*}*/

  /*.column {*/
    /*flex: 1;*/
    /*flex-grow: 4;*/
  /*}*/

  /*.column--wide {*/
    /*flex-grow: 6;*/
  /*}*/
</style>
