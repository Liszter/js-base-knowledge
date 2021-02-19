<template>
  <div class="main-page">
    <page-fram title="canvas自定义绘画">

      <div class="nav-box">
          <div>画笔</div>
          <div>矩形</div>
          <div>圆形</div>
          <div>线段粗细</div>
          <div>画笔颜色</div>
      </div>
      <div class="canvas-box">
        <canvas ref="canvas" ></canvas>
        
      </div>      
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

    handleCdivck () {


    }
    
  }
}

</script>
<style lang='less' scoped>

.nav-box {
  height: 60px;
  width: 90vw;
  display: flex;
  justify-content: flex-start;
  div {
    padding-right: 10px;
    cursor: pointer;
  }
}
.canvas-box {
  width: 90vw;
  height: calc(100vh-90px);
  border: solid 1px #d6d6d6;
}
</style>