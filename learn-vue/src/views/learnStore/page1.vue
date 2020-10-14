<template>
  <div>
    <div>
      {{ userInfo }}
    </div>
    <el-button @click="login">login</el-button>
    <el-button @click="loginOut">loginOut</el-button>

    <el-button @click="hanleCCC">ccccc</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      hanleCCC() {
    this.$router.push({
        path: '/page2'
    })
      },
    login() {
      this.$store.commit("login", {name: 1, age: 2});

    },
    loginOut() {
      this.$store.commit("loginOut");
    },
  },
  computed: {
    userInfo: function () {
      return this.$store.state.userInfo;
    },
  },
};
</script>
<style lang="less" scoped>
</style>