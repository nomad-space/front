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
                        <InputDatepicker @change="changeCheckin" :position="'right bottom'" :mindate="currdate" :maxdate="data.form.checkout"/>
                        <span class="date-icon"></span>
                      </div>
                    </div>
                    <div class="srch-tab-right">
                      <label>Check out</label>
                      <div class="input-a">
                        <InputDatepicker @change="changeCheckout" :position="'left bottom'" :mindate="data.form.checkin"/>
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
  import moment from 'moment'
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
        currdate: moment().format('YYYY-MM-DD'),
        item_selected: null,
        search_id: null,
        timer_id: null,
        data: {
          form: {
            adults: '2',
            checkin: null,
            checkout: null,
            childs: '1',
            location_id: 15542,
            sort: 'popularity',
            page: 0
          },
          result: {},
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

        $.getJSON( $self.getSearchUrl(), function( data ) {

          $self.$http.get($self.$config('api.base') + '/v1/location/' + $self.data.form.location_id).then(
            function (response) { // Success.
              console.log('ga event', 'booking_geo', response.data.data.country, response.data.data.city)
              $self.$ga.event('booking_geo', response.data.data.country, response.data.data.city);
            },
            function (response) { // Error.
            }
          );

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
</style>
