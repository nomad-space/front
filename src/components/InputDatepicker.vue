<template>
  <input :name="name" type="text" value="" class="date-inpt" placeholder="yy-mm-dd" />
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'InputDatepicker',
    data () {
      return {
        name: null,
      }
    },
    methods: {

    },
    mounted(){
      var self = this;

      $(self.$el).datepicker({
        dateFormat: "yy-mm-dd",
        // defaultDate: "+1w",
        // changeMonth: true,
        numberOfMonths: 3,
        beforeShow: function(input, inst) {
          // inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth + 'px'});
          inst.dpDiv.css({width: 'auto'});
          var calendar = inst.dpDiv;

          // Dirty hack, but we can't do anything without it (for now, in jQuery UI 1.8.20)
          setTimeout(function() {
            calendar.position({
              my: 'center top',
              at: 'center bottom',
              collision: 'none',
              of: input
            });
            inst.dpDiv.css({width: 'auto'});
          }, 1);
        },
        onSelect: function (input, inst) {
          console.log('onSelect', this, input, inst)
          self.$emit("change", input)
        }
      })
    },
    destroyed () {
      $(self.$el).datepicker('destroy')
    }
  }
</script>

<style>

</style>
