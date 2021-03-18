<template>
  <div class="main-page">
    <page-fram title="经典">
            <el-divider content-position="left">1.javascript运行三部曲</el-divider>
      <el-card class="box-card">
        <template v-for="(item, index) of problems">
          <el-button :key="index" @click="array(item.value)">{{
            item.label
          }}</el-button>
        </template>
      </el-card>
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
      problems: []
    };
  },
 created () {
 },
  methods: {

    handleClick () {

    }
    
  }
}

</script>
<style lang='less' scoped>

</style>