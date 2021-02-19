<template>
  <div class="main-page">
    <collapse-box :collapseList="collapseList" @clickTag="handleClickTag"></collapse-box>
  </div>
</template>
<script>
import collapseBox from "@/components/JsDemo/collapse-box/collapse-box.vue";
export default {
  components: {
    collapseBox,
  },
  data() {
    return {
        routePath:'/',
      collapseList: [
        {
          id: 1,
          title: "逻辑",
          items: [
            { type: "", label: "tryCatch",url: '1_1'},
            { type: "", label: "promise",url: '1_2'}
          ],
        },
        {
          id: 2,
          title: "操作dom2",
          items: [
            { type: "success", label: "标签二", url: '2' },
          ],
        },
          {
          id: 3,
          title: "canvas",
          items: [
            { type: "success", label: "画图基础", url: '1_3' },
            { type: "success", label: "canvas自定义绘画", url: '1_4' },
          ],
        },
      ],
    };
  },
  created() {
    this.routePath = this.$route.path
  },
  methods: {
    handleClickTag(val) {
      this.$router.push({
        path: this.routePath + '/' + val.url,
        mate: val.label
      })
    }
  }
};
</script>