<template>
  <Login v-if="toggle" @toggleAuth="toggleAuth"/>
  <Signup v-else @toggleAuth="toggleAuth"/>
</template>

<script>
import Login from "@/components/Login";
import Signup from "../components/Signup";
import {ref} from "vue";

export default {
  name: "Auth",
  components: {Signup, Login},
  setup() {
    const toggle = ref(false);

    const toggleAuth = () => {
      toggle.value = !toggle.value
    }

    return { toggle, toggleAuth }
  }
}
</script>

<style scoped>

</style>