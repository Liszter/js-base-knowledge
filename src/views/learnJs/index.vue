<template>
  <div class="main-page">
    <collapse-box
      :collapseList="collapseList"
      @clickTag="handleClickTag"
    ></collapse-box>
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
      routePath: "/",
      collapseList: [
        {
          id: 1,
          title: "逻辑",
          items: [
            { type: "", label: "tryCatch", url: "1_1" },
            { type: "", label: "promise", url: "1_2" },
          ],
        },
        {
          id: 2,
          title: "面向对象js",
          items: [
            { type: "success", label: "原型链", url: "2_1" },
            { type: "success", label: "eventLoop", url: "2_2" },
            { type: "success", label: "继承", url: "2_3" },
            { type: "success", label: "max和min", url: "2_4" },
          ],
        },
        {
          id: 3,
          title: "canvas",
          items: [
            { type: "success", label: "画图基础", url: "3_1" },
            { type: "success", label: "canvas自定义绘画", url: "3_2" },
          ],
        },
        {
          id: 4,
          title: "algorithm",
          items: [{ type: "success", label: "算法入门", url: "4_1" }],
        },
        {
          id: 5,
          title: "classic",
          items: [{ type: "success", label: "经典试题", url: "5_1" }],
        },
      ],
    };
  },
  created() {
    this.routePath = this.$route.path;
  },
  methods: {
    handleClickTag(val) {
      this.$router.push({
        path: this.routePath + "/" + val.url,
        mate: val.label,
      });
    },
  },
};
</script>