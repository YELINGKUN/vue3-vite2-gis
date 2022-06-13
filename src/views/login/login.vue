<!--https://www.csdn.net/tags/NtjaggysMjM5ODEtYmxvZwO0O0OO0O0O.html-->
<template>
  <div class="login_container" id="login_container">
    <div class="box">
      <form action="">
        <h4>用户登录中心</h4>
        <div class="acc">
          <input type="text" v-model="data.username" placeholder="请输入用户名">
          <input type="password" v-model="data.password" placeholder="请输入密码">
        </div>
        <!--        <a href="javascript:;" class="btn fff">点击验证</a>-->
        <div class="fn">
          <label for="check"><input id="check" type="checkbox" :checked="data.rememberme" @click="rememberMe"><span><span></span></span>记住我</label>
          <a href="javascript:;" class="ccc">忘记密码</a>
        </div>
        <div class="login">
          <input type="submit" value="登录" @click="gotoMain" class="fff">
        </div>

        <!--        <div class="login">-->
        <!--          <input type="submit" value="登录" class="fff">-->
        <!--          <span>或</span>-->
        <!--          <a href="javascript:;" class="fff">使用其他登录</a>-->
        <!--        </div>-->
        <div class="reg">
          <p>还没有账号？
            <a href="javascript:;" class="ccc">立即注册</a>
          </p>
        </div>
      </form>
    </div>
    <!--    <div class="login_box" id="login_box">-->
    <!--      <el-button @click="gotoMain">跳转</el-button>-->
    <!--    </div>-->
  </div>
</template>


<script>
import {ref, onMounted, reactive, toRaw, getCurrentInstance} from "vue";
import {useRoute} from 'vue-router'

export default {
  name: "login",
  setup() {
    const {proxy} = getCurrentInstance();
    const route1 = proxy.$root.$router.currentRoute.value;
    console.log(proxy.$root.$router);
    // 第二种方法：获取路由对象 router 的方法2
    const route2 = useRoute();
    const data = reactive({
      localStorageKey: "userinfoefdjak",
      remembermeKey: "remembermefdhjkasfh",
      rememberme: false,
      username: "",
      password: ""

    });
    onMounted(() => {
      getRememberInfo();
    });
    const gotoMain = () => {
      proxy.$root.$router.push({path: "/map", replace: true});
      console.log("名称:", data.username);
      console.log("名称:", data.password);
      // console.log("this.router:",this.$router.push('map'))
      // console.log("this.router:",$router);
    }
    const rememberMe = () => {
      // 记住我
      data.rememberme = !data.rememberme;
      if (data.rememberme) {
        localStorage.setItem(data.remembermeKey, true);
        localStorage.setItem(data.localStorageKey, JSON.stringify({
          username: data.username,
          password: data.password,
        }));
        data.rememberme = true;
      } else {
        localStorage.setItem(data.remembermeKey, false);
        data.rememberme = false;
        localStorage.removeItem(data.localStorageKey);
      }
    }
    const getRememberInfo = () => {
      let t = null;
      if (data.remembermeKey) {
        t = JSON.parse(localStorage.getItem(data.localStorageKey));
        if(t){
          data.username = t.username;
          data.password = t.password;
          data.rememberme = true;
        }else{
          localStorage.setItem(data.remembermeKey, false);
          localStorage.removeItem(data.localStorageKey);
          data.rememberme = false;
        }
      }
      return t;
    }
    return {
      data,
      gotoMain,
      rememberMe,
      getRememberInfo
    }
  }
}
</script>

<style lang="less" scoped>
#login_container {
  position: fixed;
  margin: 0rem;
  padding: 0rem;
  height: 100%;
  width: 100%;
  //background: url("../../assets/bg/bg.png") no-repeat;
  //background-position: center;
  background: linear-gradient(120deg, rgb(6, 129, 140) 0%, rgb(16, 70, 115) 100%) no-repeat;
  background-size: cover;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

//html {
//  font-size: 16px;
//  height: 100%;
//  background: linear-gradient(120deg,rgb(6,129,140) 0%,rgb(16,70,115) 100%) no-repeat;
//}
//
a {
  text-decoration: none;
  color: #eee;
  font-size: 1rem;
}

.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
}

.box form {
  width: 100%;
  max-width: 400px;
  margin-top: 13%;
}

.box form h4 {
  color: #eee;
  font-weight: 100;
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.box form .acc input,
.box form .btn {
  outline: none;
  display: block;
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  margin-bottom: 1.5rem;
  color: #eee;
  background-color: rgba(0, 0, 0, 20%);
  border: none;
  border-radius: 2.5rem;
  text-indent: 1rem;
  transition: background-color .3s;
}

.box form .btn {
  text-align: center;
  border: 1px solid #eee;
  background-color: transparent;
}

.box form .acc input::placeholder {
  color: #bbb;
}

.box form .acc input:hover {
  background-color: rgba(0, 0, 0, 30%);
}

.box form .acc input:focus {
  background-color: rgba(0, 0, 0, 40%);
}

.fn label {
  font-size: 0.8rem;
}

.fn label input[type="checkbox"] {
  display: none;
}

.fn label input[type="checkbox"] + span {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  padding: 2.3px;
  border: 1px solid #eee;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 5px;
}

.fn label input[type="checkbox"] + span > span {
  float: left;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #eee;
  border-radius: 50%;
  opacity: 0;
}

.fn label input[type="checkbox"]:checked + span {
  border-color: #eee;
}

.fn label:hover input[type="checkbox"] + span > span {
  opacity: .5;
}

.fn label input[type="checkbox"]:checked + span > span {
  opacity: 1;
}

.fn, .login {
  color: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem !important;
}

.login a, .login input {
  overflow: hidden;
  height: 2.5rem;
  line-height: 2.5rem;
  border: 1px solid #eee;
  border-radius: 2.5rem;
  margin: 0.5rem 0;
  color: #eee;
  background-color: transparent;
  text-align: center;
}

.login a {
  width: 40%;
}

.login input {
  width: 100%;
}

.login span {
  margin: 0.5rem;
  font-size: 0.8rem;
  line-height: 2.5rem;
}

.fn {
  margin: 0 1rem;
}

.login {
  margin: 0.08rem;

}

.reg {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 60%);
  text-align: center;
}

.ccc {
  transition: color .5s;
}

.ccc:hover {
  color: #ccc;
}

.fff {
  width: 100%;
  transition: color .3s, background-color .3s;
}

.fff:hover {
  color: #333 !important;
  background-color: rgba(255, 255, 255, 80%) !important;
}


</style>
