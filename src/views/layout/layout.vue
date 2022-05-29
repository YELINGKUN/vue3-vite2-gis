<template>
  <div class="common-layout">
    <el-container class="fill-box">
      <el-header class="headerStyle">
        <el-row>
          <el-col :span="8">
            <header_left class="header-left" title="XXXX地理信息系统" :imgSrc="logosrc"/>
          </el-col>
          <el-col :span="10">
            <header_mid class="header-mid"/>
          </el-col>
          <el-col :span="6">
            <header_right class="header-right" title="用户部分" :imgSrc="logosrc"/>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!--        // 中部区域用于轮换-->
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import {ref, reactive, toRaw, getCurrentInstance} from "vue";
import {useRoute} from 'vue-router'

// import HelloWorld from '../HelloWorld.vue'
import header_left from '../header/header-left.vue'
import header_mid from '../header/header-mid.vue'
import header_right from '../header/header-right.vue'
import logo from '../../assets/logo/logo.png'
import header_bg from '../../assets/bg/header_bg.png'

export default {
  name: "layout",
  components: {
    // HelloWorld,
    header_left,
    header_mid,
    header_right,
  },
  setup() {
    const logosrc = logo;
    const header_bg_ = header_bg;
    return {
      logosrc,
      header_bg_
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/less/common.less';

.fill-box {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}

/*//重点 重点 重点-------------------------------*/
:deep(.el-main) {
  padding: 0rem;
}

.el-header, .el-footer {
  /*display: flex;*/
  /*justify-content: flex-start;*/
  color: #ffffff;
  text-align: center;
  line-height: 3rem;
  background-color: #606266;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}


.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.header-left {
  /*background-color: #932828;*/
}

.header-mid {
  display: flex;
  justify-content: flex-end;
  /*background-color: rgba(1, 34, 140, 0.5);*/
}

.header-right {
  /*display: flex;*/
  /*justify-content: flex-end;*/
  /*background-color: rgba(78, 153, 229, 0.5);*/
}

</style>