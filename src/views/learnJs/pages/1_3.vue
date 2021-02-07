<template>
  <div class="main-page">
    <page-fram title="canvas的用法">
      <el-button @click="clear">清空画布</el-button>

      <el-button @click="operate(rectangle)">矩形</el-button>
      <el-button @click="operate(rectBorder)">矩形加边框</el-button>
      <el-button @click="operate(drawline)">线条</el-button>
      <el-button @click="operate(lineStyle)">线条样式</el-button>
      <el-button @click="operate(drawCicle)">圆和弧</el-button>
      <el-button @click="operate(drawFont)">文字</el-button>
      <el-button @click="operate(barrage)">弹幕效果</el-button>
      <el-button @click="handleClick">矩形</el-button>
      <el-button @click="handleClick">矩形</el-button>




      <div class="canvas-box">
        <canvas ref="canvasDom" width="400" height="300"></canvas>
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
      ctx: {}
    };
  },
 mounted () {
   this.getinit()
 },
  methods: {
    getinit () {
      let canvas = this.$refs.canvasDom
      if (!canvas.getContext) return
      this.ctx = canvas.getContext('2d')
    },
    // 执行操作
    operate(callback) {
      // 先清空画布
      this.clear()
      // 在执行函数
      callback()
    },
    // 清空
    clear() {
       let ctx = this.ctx
       ctx.clearRect(0, 0, 400,300)
    },
    // 绘制矩形
    rectangle () {
      let ctx = this.ctx
      ctx.fillStyle ="red"
      ctx.fillRect(10, 10, 20, 20)
    },
    // 矩形边框
    rectBorder() {
      let ctx = this.ctx
      ctx.lineWidth = '6' // 线宽
      ctx.strokeRect(10, 10, 30, 30) // 镂空
    },
    // 画线
    drawline () {
      let ctx = this.ctx
      ctx.beginPath()
      ctx.moveTo(50, 10) // 移动
      ctx.lineTo(140, 66)
      ctx.lineTo(220, 90)
      ctx.closePath() // closepath 尾部自动连接首
      ctx.stroke() // 描边
    },
    // 线的样式
    lineStyle () {
      let ctx = this.ctx
      ctx.fillStyle = "red"
      ctx.strokeStyle ="yellow"
      ctx.lineWidth = '10'
      ctx.miterLimit = 1
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.beginPath()
      ctx.moveTo(10, 10)
      ctx.lineTo(10, 100)
      ctx.lineTo(40, 100)
      ctx.closePath()
      ctx.stroke()
      
      
      ctx.beginPath()
      ctx.moveTo(100,100)
      ctx.lineTo(250, 100)
      ctx.lineTo(250, 100)
      ctx.lineTo(130, 200)
      ctx.lineTo(175, 50)
      ctx.lineTo(225, 200)
      ctx.closePath()
      ctx.fill(); 

        // ctx.closePath() // closepath 尾部自动连接首
      ctx.stroke() // 描边
    },
    // 圆和弧
    drawCicle () {
      let ctx = this.ctx
      ctx.beginPath()
      ctx.arc(200, 150, 100, Math.PI*2, false)
      ctx.closePath()
      ctx.stroke()

       ctx.beginPath()
      ctx.arc(200, 150, 50, Math.PI, false)
      // ctx.closePath()
      ctx.stroke()
    },
    // 绘制文字
    drawFont () {
      let ctx = this.ctx
    ctx.font = "20px sans-serif"
    ctx.fillText("天若有情", 10, 100);
    ctx.strokeText("天若有情", 10, 200)
    },
    // 弹幕效果
    barrage () {
      let ctx = this.ctx
      ctx.font = "20px sans-serif"
      let i = 300
      let that = this
      let ccc = setInterval(function () {
        that.clear()
        i -= 3
        ctx.fillText("天若有情", i, 100);
        console.log(i);
      }, 17)
      ccc()
      setTimeout(function () {
        ccc.clearInterval()
      }, 1000)
      
    },

    handleClick () {

    }
    
  }
}

</script>
<style lang='less' scoped>
.el-button {
  margin: 0 10px 10px 0;
}
canvas {
  border: 1px solid #000;
}
</style>