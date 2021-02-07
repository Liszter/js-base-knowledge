<template>
  <div class="main-page">
    <article>
        <slot></slot>
    </article>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.main-page {
    background-color: #fff;
}
article {
    margin: 32px 0;
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    line-height: 32px;
    text-align: left;
    padding-left: 25px;
    border: 1px solid #efefef;
}
</style>