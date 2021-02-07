<template>
  <div class="main-page">
      <header>
        <span>{{title}}</span>
      </header>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
  components: {
   },
  data () {
    return {
    };
  },
  methods: {
    
  }
}

</script>
<style lang='less' scoped>
.main-page {
    background-color: #fff;
}
header {
    box-sizing: border-box;
    height: 60px;
    width: 100%;
    background-color: #dfdfdf;
    line-height: 60px;
    text-align: left;
    padding-left: 25px;
    margin-bottom: 20px;
}
header>span::before {
    content: '[[ ';
    color: #008fff;
}
</style>