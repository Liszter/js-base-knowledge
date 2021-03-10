<template>
  <div class="main-page">
    <page-fram title="算法测试">
      <el-button @click="getMaxAndMin">arrMaxAndMin</el-button>
      <el-button @click="getThis">getThis</el-button>
      <el-button @click="handleFun(isPalindrome)">isABCCBA</el-button>
      <el-button @click="replacement('11112222200001123', '1', '0')">replacement(1, 0)</el-button>

      <el-divider content-position="left">算 法</el-divider>
 
    <div id="borderBox" class="box"></div>
    <div id="contentBox" class="box"></div>
    
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
  created() {},
  methods: {
    getMaxAndMin() {
      Array.prototype.max = function () {
        let arr = this;
        if (arr.length === 0) return;

        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
          if (max < arr[i]) {
            max = arr[i];
          }
        }
        return max;
      };
      Array.prototype.min = function () {
        // this
        let arr = this;
        if (arr.length === 0) return;

        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
          if (min > arr[i]) {
            min = arr[i];
          }
        }
        return min;
      };

      let a = [1, 2, 3, 444, 5, 1, 2, 0.2];
      console.log(a.max() + "-----------" + a.min());
    },

    handleFun(callback) {
      console.log(callback());
    },
    isPalindrome(str = "121") {
      // 1 去除非字母数字
      let reg = /[^a-zA-Z0-9]$/g;
      let arr = str.replace(reg, "").toLowerCase();
      return arr === arr.split("").reverse().join("");
    },

    replacement(str, replace1, replace2) {
      /**
       * str 字符串
       * replace1 需更换的第一个 str1
       * replace2 需更换的第二个 str2
       * @return 字符串
       * **/

      let arr = str.split("");
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == replace2) {
          arr[i] = replace1;
        } else if (arr[i] == replace1) {
          arr[i] = replace2;
        }
      }
      return arr.join("");
    },

    getThis() {
     
    }
  },
};
</script>
<style lang='less' scoped>
.el-button {
  margin-bottom: 10px;
}



   .box {
        width: 10px;
        height: 10px;
        border: 1px solid red;
        margin: 2px;
        padding: 2px;
        background: blue;
      }

      #borderBox {
        box-sizing: border-box;
      }

      #contentBox {
        box-sizing: content-box;
      }
</style>