<template>
  <div>
    <el-menus :menuList="menuList" @handleLink="handleClickTag"></el-menus>
  </div>
</template>
<script>
import elMenus from '@/components/menu/menu.vue'

export default {
  components: {
    elMenus
  },
  data() {
    return {
      routePath: '/',
      menuList: [
        {
        name: 'class用法',
        index: '1',
        path: '',
        children: [
          {
            name: 'class用法-1',
            index: '1-1',
            path: '1_1'
          },
              {
            name: '导航一1-2',
            index: '1-2',
            path: '1_2'
          }
        ]
        }
      ]
    }
  },
  created() {
     this.routePath = this.$route.path
  },
  methods: {
     handleClickTag(val) {
      console.log(this.$route);

       console.log(val);
      this.$router.push({
        path: this.routePath + '/' + val,
        mate: val.label
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>