<template>
  <div class="main-page">
    <page-fram :title="title">
      <el-button @click="handleClick1">异步执行</el-button>
      <el-button @click="handleClick2">同步执行</el-button>
      <el-button @click.once="handleClick3">同步执行</el-button>
      <el-button @click="handleClick4">使用finally</el-button>
      <el-button @click="handleClick5">返回一个promise</el-button>
      <el-button @click="handleClick6">promise执行顺序</el-button>
      <el-button @click="handleClick7">图片加载</el-button>
      <el-button @click="handleClick8">模拟登录</el-button>

    </page-fram>

    <page-article>
      <p>
        resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved)
      </p>
      <p>Promise新建后就会立即执行。</p>
    </page-article>

    <page-fram title="async">
        <el-button @click="handleClick8">async</el-button>
    </page-fram>
  </div>
</template>

<script>
import PageFram from "@/components/common/page-fram.vue";
import PageArticle from "@/components/common/page-article.vue";
export default {
  components: {
    PageFram,
    PageArticle
  },
  data() {
    return {
      title: "",
      appid: "",
    };
  },
  created() {
    this.title = this.$route.name;
  },
  methods: {
    // 888888888
    // 模拟登录

   async handleClick8() {
      let getAppid = new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(123);
        }, 2000);
      });

      // 拿到id 
     

      let appid = await getAppid;
      // // 打印 appid
      console.log(appid);

       let login = new Promise((resolve, reject) => {
        if (appid = 123 ) {
          resolve('ok')
        } else {
          reject('error')
        }
      });
      login.then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })



    },
    // 


    //
    loadImageAsync(url) {
      return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
          resolve(image);
        };
        image.onerror = function () {
          reject(new Error("Could not load image at " + url));
        };
        image.src = url;
      });
    },

    handleClick7() {
      try {
        this.loadImageAsync("https://s1.ax1x.com/2020/11/07/B4Yx1A.png")
      } catch(err) {
          console.log(err);
      }
    },
    // 执行顺序
    handleClick6() {
      let promise = new Promise(function (resolve, reject) {
        console.log("Promise");
        resolve(123123);
      });

      promise.then((res) => {
        console.log(12111);
        console.log(111, res);
      });

      console.log(123);
    },
    // 5
    timeout(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, "done");
      });
    },
    handleClick5() {
      this.timeout(100).then((value) => {
        console.log(value);
      });
    },
    // 模拟接口 使用finally
    handleClick4() {
      let getAppid = new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(123);
        }, 2000);
      });
      
      getAppid
        .then((res) => {
          console.log(res, new Date().toString());
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            console.log("关闭！！！！", new Date().toString());
          }, 3000);
        });
    },
    // ，其中调用 resolve 代表一切正常，reject 是出现异常时所调用的：
    handleClick3() {
      new Promise(function (resolve, reject) {
        var a = 0;
        var b = 1;
        if (b == 0) {
          reject("Diveide zero");
        } else {
          resolve(a / b);
        }
      })
        .then(function (value) {
          setTimeout(()=> {
            console.log(1);
          console.log("a / b = " + value);

          }, 1000)
        })
        .catch(function (err) {
          console.log(err);
        })
        .finally(function () {
          console.log("End");
        });
    },

    handleClick2() {
      // 起始函数会被异步执行：
      // new Promise(function (resolve, reject) {
      //   setTimeout(function () {
      //     console.log("First");
      //     resolve();
      //   }, 1000);
      // })
      //   .then(function () {
      //     return new Promise(function (resolve, reject) {
      //       setTimeout(function () {
      //         console.log("Second");
      //         resolve();
      //       }, 4000);
      //     });
      //   })
      //   .then(function () {
      //     setTimeout(function () {
      //       console.log("Third");
      //     }, 3000);
      //   });
    
    let arr= [1, 1, 1, 1]

    new Promise(function(resolve, reject) {
      setTimeout(()=> {
        console.log(1);
        if (arr[0] == 0) {
          resolve('1.ok')
        } else {
          reject('1.err')
        }
      }, 1000)
    }).then(function (res) {
      return new Promise(function(resolve, reject) {
        setTimeout(()=> {
          if (arr[1] == 1) {
            resolve(res+'2.ok')
          } else {
            reject('2.err')
          }
        }, 4000)
      })
    }).then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
    
    
    
    },

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    // 异步执行
    handleClick1() {
      console.log(new Date().toString());
      this.log1();
      this.log3();
      this.log4();
    },
    // 获取appId
    getAppId() {
      let that = this;
      that.appid = "123123123";
    },
    log1() {
      setTimeout(() => {
        console.log(1);
        console.log(new Date().toString());
      }, 1000);
    },
    log3() {
      setTimeout(() => {
        console.log(3);
        console.log(new Date().toString());
      }, 3000);
    },
    log4() {
      setTimeout(() => {
        console.log(new Date().toString());
        console.log(4);
      }, 4000);
    },
  },
};
</script>
<style lang='less' scoped>
</style>