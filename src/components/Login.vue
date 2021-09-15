<template>
  <div class="content">
    <div class="login">
      <div class="signInGoogle">
        <img src="../assets/google-icon.png" class="google-icon">
        <span>Sign up with Google</span>
      </div>
      <div class="signInForm">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
.content {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #3770FF;
}
.signInGoogle {
  width: 30vw;
  height: 64px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  background: #E8EEFF;
  box-shadow: 4px 4px 64px 8px #466ED1;
  border-radius: 8px;
}
.signInGoogle img {
  height: 35px;
  margin-left: 30px;
}
.signInGoogle span {
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-right: 30px;

  display: flex;
  align-items: center;

  color: #000000;
}
</style>