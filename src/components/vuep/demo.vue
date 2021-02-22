<template>
  <div class="main-page">
    <page-fram title="继承">
      <vuep :template="code"></vuep>
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
    return {
      code: ''
    };
  },
  created() {
    this.code = `<template><div>
    11112313211
    </div>
  </template>
   
    `
  },
  methods: {},
};
</script>
<style lang='less' scoped>
</style>