<!--https://www.csdn.net/tags/NtjaggysMjM5ODEtYmxvZwO0O0OO0O0O.html-->
<template>
  <div class="login_container" id="login_container">
    <div class="login_box" id="login_box">
      <el-button @click="gotomain">跳转</el-button>
    </div>
  </div>
</template>


<script>
import {ref, reactive, toRaw, getCurrentInstance} from "vue";
import {useRoute} from 'vue-router'

export default {
  name: "login",
  setup() {
    const {proxy} = getCurrentInstance();

    const route1 = proxy.$root.$router.currentRoute.value;
    console.log(proxy.$root.$router);
    // 第二种方法：获取路由对象 router 的方法2
    const route2 = useRoute();
    console.log(route2);
    const gotomain = () => {
      proxy.$root.$router.push({path: "/map", replace: true});
      // console.log("this.router:",this.$router.push('map'))
      // console.log("this.router:",$router);
    }

    return {
      gotomain,
    }
  }
}
</script>

<style lang="less" scoped>
#login_container {
  margin: 0rem;
  padding: 0rem;
  background: url("../../assets/bg/bg.png") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

.login_box {
  width: 30rem;
  height: 20rem;
  background-color: #fff;
  box-shadow: 0px 0.4px 2.7px rgba(0, 0, 0, 0.008),
  0.1px 1.1px 7.5px rgba(0, 0, 0, 0.012),
  0.1px 2px 14.9px rgba(0, 0, 0, 0.015),
  0.2px 3.6px 26.2px rgba(0, 0, 0, 0.018),
  0.4px 6.7px 43.8px rgba(0, 0, 0, 0.022),
  1px 16px 78px rgba(0, 0, 0, 0.03);
  /*定位*/
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0px 0px 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

</style>
