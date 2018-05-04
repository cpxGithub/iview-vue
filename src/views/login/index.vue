<template>
  <div class="login-container">
    <Form ref="loginForm" :model="loginData" class="login-box">
      <FormItem>
        <Input v-model="loginData.username" placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem>
        <Input v-model="loginData.password" placeholder="请输入密码"></Input>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/lgb.jpg') no-repeat top/cover;
  .login-box {
    display: flex;
    margin-top: 300px;
  }
}
</style>
