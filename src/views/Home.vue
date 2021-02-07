<template>
  <div class="home">
    <section class="home-container">
      <!-- header - start -->
       <el-collapse-transition>
        <home-header v-show="showfold"></home-header>
       </el-collapse-transition>
      <div class="header-tag">
        <i class="el-icon-s-fold" v-if="showfold" @click="handlefold"></i>
        <i class="el-icon-s-unfold" v-else @click="handlefold"></i>
      </div>
      <!-- header end -->

      <!-- body start  -->
      <section class="home-main">

        <div  class="grid-gutter" v-for="listItem of list" :key="listItem.index">
            <article  class="grid-box" v-for="item of listItem" :key="item.index">
              <p @click="toRouter(item.path)">{{item.name}}</p>
              <p>{{item.descript}}</p>
            </article>

        </div>
      </section>
      <!-- body end -->
    </section>
  </div>
</template>

<script>
import homeHeader from "@/components/header/home-header";

export default {
  name: "Home",
  components: {
    homeHeader,
  },
  data() {
      const listData = [[
        {
          name: 'Css',
          icon: '',
          descript: '样式'
        },
          {
          name: 'html',
          icon: '',
          descript: '标签'
        },
          {
          name: 'ES6',
          icon: '',
          descript: 'ES6',
          path: 'ES6'
        }],[
          {
          name: 'vue',
          icon: '',
          descript: ''
        },
        {
          name: 'Element',
          icon: '',
          descript: 'Element',
          path: 'Element'
        },
          {
          name: 'Javascript',
          icon: '',
          descript: 'Js',
          path: 'Js'
        }],[
          {
          name: 'html',
          icon: '',
          descript: '标签'
        },
          {
          name: 'Javascript',
          icon: '',
          descript: '脚本'
        },
        
          {
          name: 'Reg',
          icon: '',
          descript: '正则'
        }],[
          {
          name: 'Vue',
          icon: '',
          descript: '框架'
        },
          {
          name: 'node',
          icon: '',
          descript: '后台服务'
        },
          {
          name: 'mysql',
          icon: '',
          descript: '数据库'
        },
          {
          name: 'java',
          icon: '',
          descript: 'JAVA'
        }
      ]]

    return {
      // 菜单宽度
      asideWidth: "220px",
      showfold: true,
      list: listData
    };
  },
  created() {},
  methods: {
    // 跳转页面
    toRouter(val) {
      console.log(val);
      this.$router.push({
        path: '/learn' + val
      })
    },
    handlefold() {
      this.showfold = this.showfold == false ? true : false;
    },
  },
};
</script>
<style lang="less" scoped>
.home-container {
  min-height: 100vh;
  background-color: #ededed;
}


// 选中部分背景色不变
p::selection {
    background: transparent;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.header-tag {
  position: fixed;
  top: 10px;
  left: 10px;

  font-size: 14px;
  padding: 10px;
  text-align: right;
  border-radius: 50%;
  // border: solid 1px #ddd;
  // color: #ddd;
  background-color: #ddd;
}

.el-aside {
  color: rgb(185, 169, 169);
}


.home-main {
  text-align: left;
  padding: 10px 20px;
  

  .grid-gutter {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-row-gap: 20px;
      grid-column-gap: 20px;
    margin-bottom: 20px;

  }
  .grid-box {
    padding: 10px 25px;
    background-color: #008cff;
    height: 300px;

    p:first-child{
      height: 270px;
      line-height: 270px;
      font-size: 32px;
      font-weight: 700;
      color: #fff;
      text-align: center;

    }
    p:last-child {
      height: 30px;line-height: 30px;
      text-align: center;
      color: #333;
    }
  }
  .grid-box:nth-of-type(4n) { background-color:rgb(7,178, 91); }
  .grid-box:nth-of-type(4n+1) { background-color:rgb(114, 32, 114); }
  .grid-box:nth-of-type(4n+2) { background-color: rgb(197, 177, 64); }
  .grid-box:nth-of-type(4n+3) { background-color: rgb(57, 64, 119); }

}
</style>