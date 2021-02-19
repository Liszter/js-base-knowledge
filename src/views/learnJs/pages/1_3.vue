<template>
  <div class="main-page">
    <page-fram title="canvas的用法">
      <el-divider content-position="left">基础线条</el-divider>

      <el-button @click="clear">清空画布</el-button>
      <el-button @click="operate(rectangle)">矩形</el-button>
      <el-button @click="operate(rectBorder)">矩形加边框</el-button>
      <el-button @click="operate(drawline)">线条</el-button>
      <el-button @click="operate(lineStyle)">线条样式</el-button>
      <el-button @click="operate(drawCicle)">圆和弧</el-button>
      <el-button @click="operate(drawFont)">文字</el-button>
      <el-button @click="operate(barrage)">弹幕效果</el-button>

      <el-divider content-position="left">图片操作</el-divider>
      <el-button @click="operate(drawBaseImage)">绘制图片</el-button>
      <el-button @click="operate(watermark)">图片添加水印</el-button>
      <el-button @click="operate(imageScale)">图片缩放</el-button>
      <el-button @click="operate(imageCrop)">图片剪切</el-button>

      <el-divider content-position="left">例子</el-divider>
      <el-button @click="operate(drawClock)">钟表</el-button>
      <el-button @click="operate(Scratch)">刮刮乐</el-button>
      <el-button @click="operate(S)">下载</el-button>

      <div class="canvas-box">
        <div class="gg-hidden" v-if="isShowGGl">刮奖内容</div>
        <canvas class="gg-cover" ref="canvasDom" width="400" height="300"></canvas>
      </div>
    </page-fram>
  </div>
</template>

<script>
import pageFram from "@/components/common/page-fram.vue";
export default {
  components: {
    pageFram,
  },
  data() {
    return {
      isShowGGl: false,
      ctx: {},
    };
  },
  mounted() {
    this.getinit();
  },
  methods: {
    getinit() {
      let canvas = this.$refs.canvasDom;
      if (!canvas.getContext) return;
      this.ctx = canvas.getContext("2d");
    },
    // 执行操作
    operate(callback) {
      // 先清空画布
      this.clear();
      // 在执行函数
      callback();
    },
    // 清空
    clear() {
      let ctx = this.ctx;
      ctx.clearRect(0, 0, 400, 300);
    },
    // 绘制矩形
    rectangle() {
      let ctx = this.ctx;
      ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 20, 20);
    },
    // 矩形边框
    rectBorder() {
      let ctx = this.ctx;
      ctx.lineWidth = "6"; // 线宽
      ctx.strokeRect(10, 10, 30, 30); // 镂空
    },
    // 画线
    drawline() {
      let ctx = this.ctx;
      ctx.beginPath();
      ctx.moveTo(50, 10); // 移动
      ctx.lineTo(140, 66);
      ctx.lineTo(220, 90);
      ctx.closePath(); // closepath 尾部自动连接首
      ctx.stroke(); // 描边
    },
    // 线的样式
    lineStyle() {
      let ctx = this.ctx;
      ctx.fillStyle = "red";
      ctx.strokeStyle = "yellow";
      ctx.lineWidth = "10";
      ctx.miterLimit = 1;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(10, 100);
      ctx.lineTo(40, 100);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(250, 100);
      ctx.lineTo(250, 100);
      ctx.lineTo(130, 200);
      ctx.lineTo(175, 50);
      ctx.lineTo(225, 200);
      ctx.closePath();
      ctx.fill();

      // ctx.closePath() // closepath 尾部自动连接首
      ctx.stroke(); // 描边
    },
    // 圆和弧
    drawCicle() {
      let ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(200, 150, 100, Math.PI * 2, false);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(200, 150, 50, Math.PI, false);
      // ctx.closePath()
      ctx.stroke();
    },
    // 绘制文字
    drawFont() {
      let ctx = this.ctx;
      ctx.font = "20px sans-serif";
      ctx.fillText("天若有情", 10, 100);
      ctx.strokeText("天若有情", 10, 200);
    },
    // 弹幕效果
    barrage() {
      let ctx = this.ctx;
      ctx.font = "20px sans-serif";
      let i = 300;
      let that = this;
      let setInit = setInterval(function () {
        that.clear();
        i -= 3;
        ctx.fillText("666", i, 100);
      }, 17);
      setTimeout(function () {
        clearInterval(setInit);
      }, 5000);
    },
    // 画图
    drawBaseImage() {
      let ctx = this.ctx;
      let img = new Image();
      img.src =
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg";
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
      };
    },
    // 水印
    watermark() {
      let ctx = this.ctx;
      let img = new Image();
      img.src =
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg";
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
        ctx.fillText("Liszter", 360, 280);
      };
    },
    // 缩放
    imageScale() {
      let ctx = this.ctx;
      let img = new Image();
      img.src =
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg";
      img.onload = function () {
        ctx.drawImage(img, 0, 0, 400, 300); // 缩放  自定义大小
      };
    },
    // 图像裁剪
    imageCrop() {
      let ctx = this.ctx;
      let img = new Image();
      img.src =
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg";
      img.onload = function () {
        ctx.drawImage(img, 100, 100, 130, 130, 0, 0, 400, 300); // 缩放  自定义大小
      };
    },
    // 视频播放
    vadioPlayer() {},
    // 钟表
    drawClock() {
      let that = this;
      let ctx = this.ctx;
      ctx.save()

      draw(ctx);

      function draw(ctx) {
        setInterval(function () {
          drawDial(ctx); //绘制表盘
          drawAllHands(ctx); //绘制时分秒针
        }, 16);
        // requestAnimationFrame(function step() {
        //   drawDial(ctx); //绘制表盘
        //   drawAllHands(ctx); //绘制时分秒针
        //   requestAnimationFrame(step);
        // });
      }

      // //绘制表盘
      function drawDial(ctx) {
        let pi = Math.PI;

        // 清空模板
        that.clear();
        ctx.translate(200, 150); //一定坐标原点到原来的中心
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(0, 0, 145, 0, 2 * pi); //绘制圆周
        ctx.stroke();
        ctx.closePath();

        // 绘制刻度
        for (let i = 0; i < 60; i++) {
          ctx.save();
          ctx.rotate(-pi / 2 + (pi / 30) * i); //旋转坐标轴。坐标轴x的正方形从 向上开始算起
          ctx.beginPath();
          if (i % 5 === 0) {
            ctx.lineWidth = 6;
            ctx.moveTo(120, 0);
            ctx.lineTo(145, 0);
          } else {
            ctx.lineWidth = 2;
            ctx.moveTo(130, 0);
            ctx.lineTo(145, 0);
          }

          ctx.stroke();
          ctx.closePath();
          ctx.restore(); // 恢复
        }
        ctx.restore(); // 恢复
      }
      //绘制时分秒针
      function drawAllHands(ctx) {
        ctx.save();
        let pi = Math.PI;

        // 获取当前时分秒
        let now = new Date();
        let H = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        // 绘制针对应的角度
        let secondAngle = -pi / 2 + ((2 * pi) / 60) * s;
        let minuteAngle =
          -pi / 2 + ((2 * pi) / 60) * m + ((2 * pi) / 60) * (s / 60);
        let hourAngle =
          -pi / 2 + ((2 * pi) / 60) * H + ((2 * pi) / 12) * (m / 60);

        drawHand(hourAngle, 60, 6, "black", ctx); //绘制时针
        drawHand(minuteAngle, 106, 4, "black", ctx); //绘制分针
        drawHand(secondAngle, 129, 2, "red", ctx); //绘制秒针

        /***
         * 绘制针
         * @param name , length , color, canvas
         *
         **/
        function drawHand(angle, len, width, color, ctx) {
          ctx.save();
          ctx.translate(200, 150);
          ctx.rotate(-Math.PI / 2 + angle); //旋转坐标轴。 x轴就是针的角度
          ctx.beginPath();
          ctx.moveTo(-14, 0);
          ctx.lineTo(len, 0);
          ctx.lineWidth = width;
          ctx.strokeStyle = color;
          ctx.lineCap = "round";
          ctx.arc(0, 0, 3, 0, 2 * pi); //绘制圆周
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
        }
      }
    },
    // 刮刮乐
    Scratch() {
      // 展示刮刮乐的字样
      this.isShowGGl = true;
      // 刮奖状态
      let canvas = this.$refs.canvasDom; // 获取dom
      let ctx = this.ctx;
      ctx.beginPath();
      ctx.fillStyle = "grey";
      ctx.fillRect(0, 0, 200, 60);
      // 给canvas绑定事件
      // 鼠标按下
      canvas.onmousedown = function (e) {
        // 鼠标移动
        canvas.onmousemove = function (e) {
          // 滑动事件
          let x = e.offsetX
          var y = e.offsetY
          // 画圆
          // destination-out    显示原来的不在后来区域的部分
          ctx.globalCompositeOperation = "destination-out";
          ctx.beginPath();
          ctx.arc(x - 1, y, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.closePath()
        };
      },
      // 鼠标离开
      canvas.onmouseup = function (e) {
        // 函数置空
        canvas.onmousemove = null
      }
    },
    handleClick() {},
  },
};
</script>
<style lang='less' scoped>
.el-button {
  margin: 0 10px 10px 0;
}
.canvas-box {
  position: relative;
}
.gg-hidden {
  position: absolute;
  top: 20px;
  left: 120px;
  line-height: 30px;
}
.gg-cover {
  position: absolute;
  top: 20px;
  left: 20px;
}
canvas {
  border: 1px solid #000;
}
</style>