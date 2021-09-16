<template>
  <div class="navi">
    <span>Dashboard</span>
    <div class="inner">
      <router-link to="/" style="text-decoration: none; color: inherit;"><span>Home</span></router-link>
      <button @click="handleLogout">Logout</button>
    </div>
  </div>
  <div class="content">
    <div class="joke-box">
      <p>Glad to see you here, but the challenge hasn't started yet.<br />Here is a programming joke for you...</p>
      <p><b>{{joke}}</b></p>
      <button @click="getJoke" class="bold">Another joke?</button>
    </div>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";

export default {
  name: "Dashboard",
  setup() {
    const { error, logout} = useLogout()
    const router = useRouter()

    const joke = ref("")

    axios.get("https://v2.jokeapi.dev/joke/Programming?type=single").then((res) => {
      joke.value = res.data.joke
    })

    const getJoke = () => {
      axios.get("https://v2.jokeapi.dev/joke/Programming?type=single").then((res) => {
        joke.value = res.data.joke
      })
    }

    const handleLogout = () => {
      logout()
      if(!error.value) {
        router.push({name: "Home"})
      }
      else {
        console.log(error.value)
      }
    }

    return { handleLogout, joke, getJoke }
  }
}
</script>

<style scoped>
.navi {
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(4, 50, 94, 0.2);

  background: #F0F0F3;
}
.navi span {
  margin: 0 3vw;

  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 48px;

  color: #04325E;
}
.navi button {
  background: #3770FF;
  border-radius: 8px;
  width: fit-content;
  margin: 1vh 3vw;
  font-size: 1.2vw;
  padding: 1vh 2.5vw;
  color: #ffffff;
  display: flex;
  font-family: "Poppins", sans-serif;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
}
.content {
  height: 90vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #F0F0F3;
}
.joke-box {
  padding-bottom: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.joke-box button {
  background: #3770FF;
  border-radius: 8px;
  width: fit-content;
  margin: 1vh 3vw;
  font-size: 1.2vw;
  padding: 1vh 2.5vw;
  color: #ffffff;
  display: flex;
  font-family: "Poppins", sans-serif;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
}
.joke-box p {
  font-family: 'Poppins', sans-serif;
  font-size: 2vh;
  line-height: 3vh;
}
.inner {
  display: flex;
  align-items: center;
}
</style>