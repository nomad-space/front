<template>

  <div class="prices" v-if="data.length">
    <div class="tour-i-holder">
      <div class="tour-item-icons"></div>
      <div class="tour-icon-txt"></div>
      <div class="clear"></div>
    </div>
    <div class="tour-duration width50">price</div>
    <div class="tour-duration width50">cashback</div>
    <div class="tour-duration width50">final&nbsp;price</div>
    <div class="clear"></div>

    <label v-for="(proposal, index) in data" class="price_label" @click="selected = proposal.gate_id" :for="'h-'+proposal.hotel_id+'-'+proposal.gate_id">
      <div class="tour-i-holder">
        <div class="tour-item-icons">
          <input type="radio" :checked="selected == proposal.gate_id" :id="'h-'+proposal.hotel_id+'-'+proposal.gate_id" :name="'hotel_'+proposal.hotel_id" value="nomad" :data-hotelid="proposal.hotel_id" :data-gateid="proposal.gate_id" data-gate="nomad" :data-price="'$'+proposal.price_final">
        </div>
        <div v-if="proposal.gate_id == 999" class="tour-icon-txt"><img src="../assets/img/nomad.png" style="height: 15px; vertical-align: top;"/>nomad</div>
        <div v-if="proposal.gate_id != 999" class="tour-icon-txt"><img :src="proposal.gate_logo" style="height: 15px;"></div>
        <div class="clear"></div>
      </div>
      <div class="tour-duration width50">${{ proposal.price }}</div>
      <div class="tour-duration width50">{{ proposal.price_cashback ? '$' + proposal.price_cashback + '*' : '' }}</div>
      <div class="tour-duration width50" :style="proposal.gate_id == 999 ? 'color: #ff7200' : null">${{ proposal.price_final }}</div>
      <div class="clear"></div>
    </label>

    <div class="tour-i-holder">
      <div class="tour-icon-txt" style="width: 300px; font-size: 10px; padding-top: 10px">* - OTA/DAO loyality programm</div>
      <div class="clear"></div>
    </div>
  </div>

</template>

<script>
  /* eslint-disable */
  export default {
    name: 'HotelPrices',
    props: ['data'],
    data () {
      return {
        data: this.data,
        selected: 999
      }
    },
    methods: {
    },
    mounted () {
      // var self = this
    }
  }
</script>

<style>

</style>
