<template>
<!--  <Login />-->
  <Signup></Signup>

</template>

<script>
import Login from "@/components/Login";
import Signup from "../components/Signup";
export default {
  name: "Auth",
  components: {Signup, Login}
}
</script>

<style scoped>

</style>