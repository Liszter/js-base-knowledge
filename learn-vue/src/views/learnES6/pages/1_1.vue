<template>
  <div class="main-page">
    <page-fram title="class用法">
      <div>
         <pdf src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"></pdf>
     </div>
    </page-fram>
  </div>
</template>

<script>
import pageFram from "@/components/common/page-fram.vue";

import pdf from 'vue-pdf'

export default {
  components: {
    pageFram,
    pdf
   },
  data () {
    return {
    };
  },
 created () {
 },
  methods: {
    
  }
}

</script>
<style lang='less' scoped>

</style>