<template>
  <div class="main-page">
    <page-fram title="max和min">
     <el-button @click="getMaxAndMin">ArrayMaxAndMin</el-button>
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
    getMaxAndMin () {
      console.log(Array);
      
      Array.prototype.max = function() {
        let array = this
        if (array.length === 0) return

        let max = array[0]
        for (let i = 0; i < array.length; i++) {
          if (max < array[i]) {
            max = array[i]
          }
        }
        return max
      }
     Array.prototype.min = function() {
        // this
        let array = this
        if (array.length === 0) return

        let min = array[0]
        for (let i = 0; i < array.length; i++) {
          if (min > array[i]) {
            min = array[i]
          }
        }
        return min
      }

      let a = [1, 2,3,444,5,1,2,0.2]
      console.log(a.max() + '-----------' + a.min())

      

    }
  }
}

</script>
<style lang='less' scoped>

</style>