<template>
  <div class="header-right">
    <el-badge :value="20" class="item" type="warning">
      <!--      <el-button>replies</el-button>-->
      <div>
        <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </el-badge>

    <el-dropdown>
    <span class="el-dropdown-link">
      用户：lincoln
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户详情</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
          <!--          <el-dropdown-item>Action 3</el-dropdown-item> -->
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import {ref, toRef} from 'vue'
// import jpg from '../../assets/logo/logo.png' 同样可以

export default {
  name: "header-right",
  props: {
    user: String,
    imgSrc: String,
  },
  setup(props) {
    const user = ref(props.user);
    const imgSrc1 = ref(props.imgSrc);
    return {
      user,
      imgSrc1,
    }
  }
}
</script>

<style scoped>
.header-right {
  display: flex;
  justify-content: flex-end;
  width: 20rem;
  height: 3rem;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}


.el-dropdown {
  margin-top: 1.1rem;
  color: white;
}

.el-icon  {
  /*margin-top: 1.1rem;*/
  color: white;
}

.sys-logo {
  margin-right: 1rem;
}
</style>