<template>
  <div class="preview">
    <!--<p>Источник: {{ news.Source }}</p>-->
    <p>Дата: {{ news.Published }}</p>
    <p>Файл: {{ news.SourcePath }}</p>
    <h3>{{ news.Title }}</h3>
    <p v-html="dateFormat"></p>
  </div>
</template>

<script>
  // import eventHub from '@/eventHub'
  export default {
    name: 'Preview',
    props: ['news'],
    methods: {
      // click (guid) {
      //   eventHub.$emit('item-selected', item)
      // }
    },
    computed: {
      dateFormat () {
        let text = this.news.Text
        text = text.replace(/\n/g, '</br>')
        text = text.replace(/[ ]{2}/g, '&nbsp;&nbsp;')
        return text
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .preview {
   /*font-family: Monospace;*/
   font-family: 'Roboto Mono', monospace;
   text-align: left;
 }
</style>
