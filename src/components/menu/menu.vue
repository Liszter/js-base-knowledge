<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-submenu v-for="item1 of menuList" :key="item1.index" :index="item1.index">
          <template slot="title"><i class="el-icon-message"></i>{{item1.name}}</template>
          <el-menu-item-group >
            <el-menu-item v-for="item2 of item1.children" :key="item2.index" :index="item2.index" @click="handleLink(item2.path)">{{item2.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </el-container>
</template>
<script>
export default {
    props: {
        menuList: {
            type: Array,
            default: () => []
        }
    },
  data() {
    return {
    };
  },
  methods: {
      handleLink(val) {
        this.$emit('handleLink', val)
    }

    // handleLink(path) {
    //   console.log(path);
    //   this.$router.push({
    //       path: '/about'
    //   })
    // }
  }
};
</script>
<style lang="less" scoped>
* {
  text-align: left;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 40px;
}

.el-aside {
  color: #333;
}

// 修改组件样式

.initHeight {
  height: 40px;
  line-height: 40px;
}
& /deep/.el-menu-item-group__title {
  padding: 0 0 0 20px;
}
& /deep/ .el-submenu__title {
  .initHeight();
}
& /deep/ .el-menu-item {
  .initHeight();
}
</style>

