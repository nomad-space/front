<template>
  <div>
    <input id="birds" type="text" value="" placeholder="Example:paris"/>
    <input v-model="location_id" id="location_id" name="location_id" type="hidden" />
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'InputLocation',
    data () {
      return {
        location_id: null
      }
    },
    methods: {
      clickHandler (item) {
        // items are selected by default on click, but you can add some more behavior here!
        console.log('clickHandler', item)

      },
      selectHandler (item) {
        // items are selected by default on click, but you can add some more behavior here!
        console.log('selectHandler', item)
      },
      onSelected (item) {
        console.log('onSelected', item)
        this.selected = item
      },
      onInputChange (item) {
        console.log('onInputChange', item)
        this.selected = item
      },
    },
    mounted(){
      var self = this;

      $(self.$el).find('input[type="text"]').autocomplete({
        source: this.$config('api.search') + '/autocomplete',
        minLength: 2,
        focus: function(event, ui) {
          console.log('focus ui:', ui)
          // console.log('focus ui.item:', ui.item)
          return false;
        },
        select: function(event, ui) {
          self.location_id = ui.item.Id
          self.$emit("change", ui.item.Id)
          $(this).val(ui.item.LatinFullName)
          return false;
        },
        menufocus: function(e, i) {
          console.log('e, i:', e, i)
        }
      }).autocomplete('instance')._renderItemData = function(ul, item) {

        if (item[0].Fullname !== undefined) {
          // $( '<li><div>Города</div></li>').appendTo( ul );
        }
        if (item[0].HotelFullName !== undefined) {
          // $( '<li><div>Отели</div></li>').appendTo( ul );
        }

        $.each(item, function (k, v) {
          if (v.Fullname !== undefined) {
            $( '<li><div>' + v.LatinFullName + '</div></li>').data('ui-autocomplete-item', v).appendTo(ul)
          }
          if (v.HotelFullName !== undefined) {
            // $( '<li><div>'+v.HotelFullName+'</div></li>').data('ui-autocomplete-item', v).appendTo( ul );
          }
        })

        return ul
      }

    },
    destroyed () {
      $(self.$el).find('input[type="text"]').autocomplete('destroy')
    }
  }
</script>

<style>

</style>
