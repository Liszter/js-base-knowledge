<template>
    <div>
    <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="一致性 Consistency" name="1">
    <div>
1   


        <router-link to="/home">tohome</router-link>
        <router-link to="/home">tohome</router-link>

        <router-view/>

    </div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="2">
    <div>212</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>2</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <div></div>
  </el-collapse-item>
</el-collapse>

    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style lang="less" scoped>

</style>