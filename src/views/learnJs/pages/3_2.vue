<template>
  <div class="main-page">
    <page-fram title="canvas自定义绘画">

      <div class="nav-box">
          <div @click="operate(begin)">画笔</div>
          <!-- <div @click="operate(touch)">矩形</div> -->
          <div>圆形</div>
          <div>线段粗细</div>
          <div>画笔颜色</div>
          <div @click="output">导出</div>
      </div>
      <div class="canvas-box" :style="{width: canvasWidth+'px', height: canvasHeight+'px'}" >
        <canvas
          ref="canvas"
          :width="canvasWidth"
          :height="canvasHeight"
          ></canvas>
        
      </div>

      <div>
        <img :src="img" alt="" srcset="">
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
      canvasHeight: 300,
      canvasWidth: 400,
      imageSrc: '@/assets/canvas/m.jpg',
      img: '', // 导出
      drawFont: {
        size: 3
      }
    };
  },
 created () {
 },
 mounted() {
   this.getinit()
 },
  methods: {
    getinit() {
      let canvas = this.$refs.canvas;
      if (!canvas.getContext) return;
      this.ctx = canvas.getContext("2d");
    },
    clear() {
      let ctx = this.ctx;
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    },
        // 执行操作
    operate(callback) {
      // 先清空画布
      this.clear();
      // 在执行函数
      callback();
    },
    drawingBoaed (x, y) {
      let ctx = this.ctx;
      ctx.beginPath()

      let { size } = this.drawFont
      // 画个圆
      ctx.arc(x, y, size, Math.PI * 2, false);
      
      ctx.fllStyle = "red"
      ctx.fill()
    },
    // 开始写字
    begin () {
      let self = this
      // 获取当前的鼠标指针 
       let canvas = this.$refs.canvas; // 获取dom
       
      //  canvas.onmousedown = function(e) {
      //    console.log(e);
      //   canvas.onmousemove = function (e) {
      //     let x = e.offsetX
      //     let y = e.offsetY
      //     self.drawingBoaed(x, y)
      //   }
      //  }
      //  canvas.onmouseup = function (e) {
      //    canvas.onmousemove = function (e) {}
      //  }


      canvas.ontouchstart = function(e) {
        console.log(111123);
        canvas.ontouchmove = function (e) {
          console.log(111, e);
          let x = e.touches[0].clientX
          let y = e.touches[0].clientX


          console.log(x, y);
          self.drawingBoaed(x, y)

        }
       }
       canvas.ontouchend  = function (e) {
         canvas.touchmove = function (e) {}
       }

    },
    // touch () {
    //    let canvas = this.$refs.canvas; // 获取dom
    //   canvas.ontouchstart = function (event) {
    //     console.log(event);
    //   }
    // },
    // 输出
    output () {
      let canvas = this.$refs.canvas; // 获取dom
      let dataURL = canvas.toDataURL()


       console.log(dataURL);

       this.img = dataURL
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
  // width: 90vw;
  // height: calc(100vh-90px);
  border: solid 1px #d6d6d6;
  // background: url('../../../assets/canvas/m.jpg') no-repeat;
  background-size: 400px 300px;
}
</style>