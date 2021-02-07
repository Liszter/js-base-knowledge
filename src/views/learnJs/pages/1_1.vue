<template>
  <div class="main-page">
    <page-fram title="tryCatch用法">
      <el-button @click="handleClick">点击测试</el-button>
    </page-fram>
  </div>
</template>

<script>
import pageFram from "@/components/common/page-fram.vue";
export default {
  components: {
    pageFram
   },
  data () {
    return {
    };
  },
 created () {
 },
  methods: {

    handleClick () {

      try {
        get(1)
      } catch (error) {
        console.log(2);
      } finally {
        console.log(3);
      }
    }
    
  }
}

</script>
<style lang='less' scoped>

</style>