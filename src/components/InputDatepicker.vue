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
        windowWidth: 0,
      }
    },
    props: ['position', 'mindate', 'maxdate'],
    methods: {

    },
    watch: {
      mindate: function (val) {
        console.log('watch mindate', val)
        $(this.$el).datepicker( "option", "minDate", val)
      },
      maxdate: function (val) {
        console.log('watch maxdate', val)
        $(this.$el).datepicker( "option", "maxDate", val)
      },
      windowWidth(newWidth, oldWidth) {

        var self = this

        if (newWidth < 1130) {
          $(self.$el).datepicker( "option", "numberOfMonths", 1 )
        } else {
          $(self.$el).datepicker( "option", "numberOfMonths", 3 )
          $(self.$el).css({width: 'auto'});
        }
      }
    },
    mounted(){
      var self = this;

      this.windowWidth = window.innerWidth
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.windowWidth = window.innerWidth
        });
      })

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
              at: self.position,
              collision: 'none',
              of: input
            });
            inst.dpDiv.css({width: 'auto'});
          }, 1);
        },
        onChangeMonthYear: function(year, month, inst) {
          setTimeout(function() {
            inst.dpDiv.css({width: 'auto'});
          }, 1);
        },
        onSelect: function (input, inst) {
          console.log('onSelect', this, input, inst)
          self.$emit("change", input)
        }
      })
      if (self.mindate) {
        $(this.$el).datepicker( "option", "minDate", self.mindate)
      }
      if (self.maxdate) {
        $(this.$el).datepicker( "option", "maxDate", self.maxdate)
      }
    },
    destroyed () {
      $(self.$el).datepicker('destroy')
    }
  }
</script>

<style>

</style>
