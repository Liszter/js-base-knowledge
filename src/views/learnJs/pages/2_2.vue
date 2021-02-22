<template>
  <div class="main-page">
    <page-fram title="evenloop">
      <el-button @click="handleClick">点击测试</el-button>
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
    return {};
  },
  created() {
    // console.log("a");

    // setTimeout(function () {
    //   console.log("b");
    //   process.nextTick(function () {
    //     console.log("c");
    //   });
    //   new Promise(function (resolve) {
    //     console.log("d");
    //     resolve();
    //   }).then(function () {
    //     console.log("e");
    //   });
    // });
    // process.nextTick(function () {
    //   console.log("f");
    // });
    // new Promise(function (resolve) {
    //   console.log("g");
    //   resolve();
    // }).then(function () {
    //   console.log("h");
    // });

    // setTimeout(function () {
    //   console.log("i");
    //   process.nextTick(function () {
    //     console.log("j");
    //   });
    //   new Promise(function (resolve) {
    //     console.log("k");
    //     resolve();
    //   }).then(function () {
    //     console.log("l");
    //   });
    // });

    /**
 * 第一轮事件循环：

1.第一个宏任务(整体script)进入主线程，console.log('a')，打印a。

2.遇到setTimeout，其回调函数进入宏任务队列，暂定义为setTimeout1。

3.遇到process.nextTick()，其回调函数被分发到微任务队列，暂定义为process1。

4.遇到Promise，new Promise直接执行，打印g。then进入微任务队列，暂定义为then1。

5.遇到setTimeout，其回调函数进入宏任务队列，暂定义为setTimeout2。

此时我们看一下两个任务队列中的情况：

宏任务队列：setTimeout1、setTimeout2

微任务队列：process1、then1

第一轮宏任务执行完毕，打印出a和g。

查找微任务队列中有process1和then1。全部执行，打印f和h。

第一轮事件循环完毕，打印出a、g、f和h。

第二轮事件循环：

1.从setTimeout1宏任务开始，首先是console.lob('b')，打印b。

2.遇到process.nextTick()，进入微任务队列，暂定义为process2。

3.new Promise直接执行，输出d，then进入微任务队列，暂定义为then2。

此时两个任务队列中

宏任务队列：setTimeout2

微任务队列：process2、 then2

第二轮宏任务执行完毕，打印出b和d。

查找微任务队列中有process2和then2。全部执行，打印c和e。

第二轮事件循环完毕，打印出b、d、c和e。

第三轮事件循环：

1.执行setTimeout2，遇到console.log('i')，打印i。

2.遇到process.nextTick()，进入微任务队列，暂定义为process3。

3.new Promise直接执行，打印k。

4.then进入微任务队列，暂定义为then3。

此时两个任务队列中

宏任务队列：空

微任务队列：process3、then3

第三轮宏任务执行完毕，打印出i和k。

查找微任务队列中有process3和then3。全部执行，打印j和l。

第三轮事件循环完毕，打印出i、k、j和l。

到此为止，三轮事件循环完毕，最终输出结果为：

a、g、f、h、b、d、c、e、i、k、j、l
*/








console.log('1');
async function async1() {
    console.log('2');
    await async2();
    console.log('3');
}
async function async2() {
    console.log('4');
}

process.nextTick(function() {
    console.log('5');
})
setTimeout(function() {
    console.log('6');
    process.nextTick(function() {
        console.log('7');
    })
    new Promise(function(resolve) {
        console.log('8');
        resolve();
    }).then(function() {
        console.log('9')
    })
})

async1();
new Promise(function(resolve) {
    console.log('10');
    resolve();
}).then(function() {
    console.log('11');
});
console.log('12');

/**


console.log('1');
async function async1() {
    console.log('2');
    await async2();
    console.log('3');
}
async function async2() {
    console.log('4');
}

process.nextTick(function() {
    console.log('5');
})

setTimeout(function() {
    console.log('6');
    process.nextTick(function() {
        console.log('7');
    })
    new Promise(function(resolve) {
        console.log('8');
        resolve();
    }).then(function() {
        console.log('9')
    })
})

async1();

new Promise(function(resolve) {
    console.log('10');
    resolve();
}).then(function() {
    console.log('11');
});
console.log('12');




**/
  },
  methods: {},
};
</script>
<style lang='less' scoped>
</style>