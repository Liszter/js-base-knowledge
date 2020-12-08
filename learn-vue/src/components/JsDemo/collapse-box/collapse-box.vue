<template>
<div>
  <div class="collapse-box">
    <el-collapse
      v-for="coll of collapseList"
      :key="coll.id"
      v-model="activeNames"
      @change="handleChange"
    >
      <el-collapse-item :title="coll.title" :name="coll.id">
        <div class="tag-group">
          <el-tag
            v-for="item in coll.items"
            :key="item.label"
            :type="item.type"
            @click="clickTag(item)"
            effect="dark"
          >
            {{ item.label }}
          </el-tag>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</div>

</template>
<script>
export default {
  props: {
    collapseList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    clickTag(val) {
      this.$emit('clickTag', val)
    },
    handleChange(val) {
    },
  },
};
</script>
<style lang="less" scoped>
.collapse-box {
  text-align: left;
  & /deep/ .el-collapse-item__header {
    font-size: 18px;
    padding: 0 20px;
  }
}
.tag-group {
  text-align: left;
  .el-tag {
    padding: 0 20px;
    margin: 10px 20px;
    cursor: pointer;
  }
}
</style>