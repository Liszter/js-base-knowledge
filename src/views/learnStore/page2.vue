<template>
  <div>
    <router-link to="/page1">11111111111111</router-link>
    <div>
      {{ userInfo }}
    </div>
    <div>
        {{list}}
    </div>
    <el-button @click="login">login</el-button>
    <el-button @click="loginOut">loginOut</el-button>
  </div>
</template>
<script>

import { mapState } from 'vuex'

export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$store.commit("login", {name: 1, age: 23});
      console.log(this.$store.state.userInfo);
    },
    loginOut() {
      this.$store.commit("loginOut");
    },
  },
  computed: {
    ...mapState([
  'userInfo','list'
])
  } 
 
};
</script>
<style lang="less" scoped>
</style>