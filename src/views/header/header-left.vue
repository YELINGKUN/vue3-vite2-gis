<template>
  <div class="header">
    <div class="sys-logo">
<!--      <img width="60px" height="60px" :src="imgSrc">-->
      <el-image
          style="width: 3rem; height: 3rem"
          :src=imgSrc1
          fit="contain"
      >
      </el-image>
    </div>
    <div class="sys-title">
      <span class="title">{{ tss }}</span>
    </div>
  </div>
</template>

<script>
import {ref, toRef} from 'vue'
// import jpg from '../../assets/logo/logo.png' 同样可以

export default {
  name: "header-left",
  props: {
    title: String,
    imgSrc: String,
  },
  setup(props) {
    const tss = ref(props.title);
    const imgSrc1 = ref(props.imgSrc);
    return {
      tss,
      imgSrc1,
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  width: 20rem;
  height: 3rem;
  background-image:
  /*background-color: #bb5454;*/
}
.sys-logo{
  margin-right: 1rem;
}
</style>