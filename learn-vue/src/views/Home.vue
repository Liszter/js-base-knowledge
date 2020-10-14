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
        <h3>
        <router-link to="About">page1</router-link>

        </h3>
        <h3>
        <router-link to="Home">page2</router-link>
          
        </h3>


        <router-view/>
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
    return {
      // 菜单宽度
      asideWidth: "220px",
      showfold: true
    };
  },
  created() {},
  methods: {
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

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.header-tag {
  position: fixed;
  top: 10px;
  right: 10px;

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
  h3 {
    text-align: left;
    padding: 10px 0 0 10px;
  }
}
</style>