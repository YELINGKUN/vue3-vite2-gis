<template>
  <div class="header-mid">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="rgb(96,98,102)"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
      <!--      <router-link to="home">Home</router-link>-->
      <!--      <router-link to="/A"  >去到A</router-link>-->
      <!--      <router-link to="/B"  >去到B</router-link>-->

      <el-menu-item index="1">
        <router-link to="/map">首页</router-link>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>空间查询</template>
        <el-menu-item index="2-1">
          <router-link to="/A">去到A</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/B">去到B</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">圆域选择</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>分析</template>
        <el-menu-item index="3-1">分析</el-menu-item>
        <el-menu-item index="3-2">多边形选择</el-menu-item>
        <el-menu-item index="3-3">圆域选择</el-menu-item>
        <el-sub-menu index="3-4">
          <template #title>item four</template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
          <el-menu-item index="3-4-2">item two</el-menu-item>
          <el-menu-item index="3-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>XXX</template>
        <el-menu-item index="4-1">xxx</el-menu-item>
        <el-menu-item index="4-2">xxx</el-menu-item>
        <el-menu-item index="4-3">xxxxx</el-menu-item>
        <el-sub-menu index="4-4">
          <template #title>item four</template>
          <el-menu-item index="4-4-1">item one</el-menu-item>
          <el-menu-item index="4-4-2">item two</el-menu-item>
          <el-menu-item index="4-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="5">Orders</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

import {ref, toRef, toRaw, getCurrentInstance} from "vue";
import {useRoute} from 'vue-router'
// import {llll} from "../../common/global/func";
// import jpg from '../../assets/logo/logo.png' 同样可以
export default {
  name: "header-mid",
  props: {
    title: String,
    imgSrc: String,
  },
  setup(props, conttex) {
    const tss = ref(props.title);
    const imgSrc1 = ref(props.imgSrc);
    const {proxy} = getCurrentInstance();
    console.log(proxy.$appMethods);
    console.log(proxy.$api);
    // console.log("44444444:" +    console.log( proxy.$api.api.config.getConfig()));
    // proxy.$appMethods.config.getConfig;
    // appMethods.https();
    // console.log(appMethods.llll.local_key);
    // const route1 = proxy.$root.$router.currentRoute.value;
    // console.log(proxy.$root.$router);
    // 第二种方法：获取路由对象 router 的方法2

    // const sss = function () {
    //   $func.https()
    // }
    // sss();

    return {
      tss,
      imgSrc1,
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/less/common.less';

.header-mid {
  display: flex;
  justify-content: flex-start;
  width: 20rem;
  height: 3rem;
}

.sys-logo {
  margin-right: 1rem;
}

//去掉底部的白条颜色
:deep(.el-menu--horizontal) {
  border-bottom: none;
}
</style>