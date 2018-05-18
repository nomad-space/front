<template>

  <div v-if="data.prices.length" class="cat-list-item fly-in appeared" :id="'hotel_'+data.hotel.id">
    <div class="cat-list-item-l">
      <a href="#"><img alt="" :src="data.hotel.photo"></a>
    </div>
    <div class="cat-list-item-r">
      <div class="cat-list-item-rb">
        <div class="cat-list-item-p">
          <div class="cat-list-content">
            <div class="cat-list-content-a">
              <div class="cat-list-content-l">
                <div class="cat-list-content-lb">
                  <div class="cat-list-content-lpadding">
                    <div class="offer-slider-link"><a href="#">{{ data.hotel.name }}</a></div>
                    <div class="offer-slider-location">{{ data.hotel.address }}</div>
                    <div class="prices">

                      <div class="prices" v-if="data.prices.length">
                        <div class="tour-i-holder">
                          <div class="tour-item-icons"></div>
                          <div class="tour-icon-txt"></div>
                          <div class="clear"></div>
                        </div>
                        <div class="tour-duration width50">price</div>
                        <div class="tour-duration width50">cashback</div>
                        <div class="tour-duration width50">final&nbsp;price</div>
                        <div class="clear"></div>

                        <label v-for="(proposal, index) in data.prices" class="price_label" @click="selected = proposal" :for="'h-'+proposal.hotel_id+'-'+proposal.gate_id">
                          <div class="tour-i-holder">
                            <div class="tour-item-icons">
                              <!--:checked="selected.gate_id == proposal.gate_id && selected.is_nomad == proposal.is_nomad" -->
                              <input type="radio" v-model="selected" :value="proposal" :id="'h-'+proposal.hotel_id+'-'+proposal.gate_id+'-'+(proposal.is_nomad ? 1 : 0)" :name="'hotel_'+proposal.hotel_id" value="nomad" :data-hotelid="proposal.hotel_id" :data-gateid="proposal.gate_id" data-gate="nomad" :data-price="'$'+proposal.price_final">
                            </div>
                            <div v-if="proposal.is_nomad" class="tour-icon-txt"><img src="../assets/img/nomad.png" style="height: 15px; vertical-align: top;"/>nomad</div>
                            <div v-if="!proposal.is_nomad" class="tour-icon-txt"><img :src="proposal.gate_logo" style="height: 15px;"></div>
                            <div class="clear"></div>
                          </div>
                          <div class="tour-duration width50">${{ proposal.price }}</div>
                          <div class="tour-duration width50">{{ proposal.price_cashback ? '$' + proposal.price_cashback + '*' : '' }}</div>
                          <div class="tour-duration width50" :style="proposal.is_nomad ? 'color: #ff7200' : null">${{ proposal.price_final }}</div>
                          <div class="clear"></div>
                        </label>

                        <div class="tour-i-holder">
                          <div class="tour-icon-txt" style="width: 300px; font-size: 10px;">* - OTA/DAO loyality programm</div>
                          <div class="clear"></div>
                        </div>
                      </div>

                    </div>
                    <div class="cat-icons">
                      <span class="cat-icon-01 active"></span>
                      <span class="cat-icon-02"></span>
                      <span class="cat-icon-03"></span>
                      <span class="cat-icon-04"></span>
                      <span class="cat-icon-05"></span>
                      <span class="cat-icon-06"></span>
                      <div class="clear"></div>
                    </div>
                  </div>
                </div>
                <br class="clear">
              </div>
            </div>
            <div class="cat-list-content-r">
              <div class="cat-list-content-p">
                <nav class="stars">
                  <ul>
                    <li><a href="#"><img alt="" src="../assets/img/star-b.png"></a></li>
                    <li><a href="#"><img alt="" src="../assets/img/star-b.png"></a></li>
                    <li><a href="#"><img alt="" src="../assets/img/star-b.png"></a></li>
                    <li><a href="#"><img alt="" src="../assets/img/star-b.png"></a></li>
                    <li><a href="#"><img alt="" src="../assets/img/star-a.png"></a></li>
                  </ul>
                  <div class="clear"></div>
                </nav>
                <div class="cat-list-review">{{ data.hotel.reviews }} reviews</div>
                <div class="offer-slider-r" v-if="data.prices.length">
                  <b class='min-price'>${{ selected.price_final }}</b>
                  <span class='gate'>{{ selected.gate_name }}</span>
                </div>
                <a v-if="data.prices.length && !selected.is_nomad" :href="host_search+'/redirect/'+data.search_id+'/'+selected.hotel_id+'/'+selected.gate_id" target="_blank" class="cat-list-btn">book now</a>
                <router-link v-if="data.prices.length && selected.is_nomad" :to="{ name: 'Booking', params: {
                  search_id: data.search_id,
                  location_id: data.form.location_id,
                  hotel_id: selected.hotel_id,
                  gate_id: selected.gate_id,
                  room_id: selected.hotel_room_id,
                  checkin: data.form.checkin,
                  checkout: data.form.checkout,
                  adults: data.form.adults,
                   }}" class="cat-list-btn">book now</router-link>
                <div v-if="data.prices.length && selected.is_nomad" class="cat-list-text">
                  * Consent for instant booking / or 3-day confirmation of the hotel
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <br class="clear"/>
    </div>
    <div class="clear"></div>
  </div>

</template>

<script>
  /* eslint-disable */
  import HotelPrices from '@/components/HotelPrices'
  export default {
    name: 'Hotel',
    components: {
      HotelPrices,
    },
    props: ['hotel', 'proposals', 'gates', 'search_id', 'form'],
    data () {
      return {
        data: {
          hotel: {
            id: this.hotel.id,
            name: this.hotel.name,
            address: this.hotel.address,
            reviews: this.hotel.reviews_count,
            stars: this.hotel.stars,
            photo: this.$config('api.search') + '/image/' + this.hotel.photos_ids[0] + '.jpg',
          },
          prices: null,
          form: this.form,
          search_id: this.search_id
        },
        host_search: this.$config('api.search'),
        selected: null,
      }
    },
    methods: {

      func1(asd) {

        var self = this,
          data = [],
          priceAmount = 0,
          priceCount = 0,
          minPrice = 0,
          minPriceData

        $.each (self.proposals, function (key, proposal) {
          if (proposal.gate_id === 67) { // zenhotels
            return
          }

          var priceData = {
            is_nomad: false,
            hotel_id: self.hotel.id,
            hotel_room_id: proposal.key,
            gate_id: proposal.gate_id,
            gate_name: self.gates[proposal.gate_id].name,
            gate_logo: 'https://pics.avs.io/hl_gates/180/48/' + proposal.gate_id + '--west@2x.png',
            gate_class: 'gate_' + proposal.gate_id,
            price: proposal.price,
            price_cashback: null,
            price_final: proposal.price,
          }

          if (!minPrice || minPrice > proposal.price) {
            minPrice = proposal.price
            minPriceData = priceData
          }

          data.push(priceData)
          priceAmount += proposal.price
          priceCount++
        })

        var selected

        if ( priceCount > 0 ) {

          var priceAvg = priceAmount / priceCount

          selected = {
            is_nomad: true,
            hotel_id: self.hotel.id,
            hotel_room_id: minPriceData.hotel_room_id,
            gate_id: minPriceData.gate_id,
            gate_name: 'nomad',
            gate_logo: null,
            gate_class: 'nomad',
            price: Number((priceAvg).toFixed(1)),
            price_cashback: Number((priceAvg * 0.225).toFixed(1)),
            price_final: Number((priceAvg * 0.775).toFixed(1))
          }

          data.unshift(selected)
        }

        this.$set(this.data, 'prices', data)
        if (!this.selected) {
          this.$set(this, 'selected', selected)
        } else if (this.selected.is_nomad){
          this.$set(this, 'selected', selected)
        }
      }
    },
    created: function () {
      this.func1('created')
    },
    watch: {
      'proposals': function (val, oldVal) {
        this.func1('watch')
      }
    }
  }
</script>

<style>

</style>
