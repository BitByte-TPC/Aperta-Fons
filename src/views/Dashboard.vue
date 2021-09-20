<template>
  <div class="navi">
    <span>Dashboard</span>
    <div class="inner">
      <router-link to="/" style="text-decoration: none; color: inherit;">
        <button>Home</button>
      </router-link>
      <router-link to="/submit" style="text-decoration: none; color: inherit;">
        <button>Submit PR</button>
      </router-link>
      <button @click="handleLogout">Logout</button>
    </div>
  </div>
  <div v-if="!started" class="content">
    <div class="joke-box">
      <p>
        Glad to see you here, but the challenge hasn't started yet.<br/>Here is
        a programming joke for you...
      </p>
      <p>
        <b>{{ joke }}</b>
      </p>
      <button @click="getJoke" class="bold">Another joke?</button>
    </div>
  </div>
  <div v-if="started" class="pr-outer">
    <div class="pr-container">
      <div class="table-heading">
        <div class="heading1"><span>Name</span></div>
        <div class="heading3"><span>Latest PR</span></div>
        <div class="heading4"><span>Time Added</span></div>
      </div>
      <div v-for="doc in formattedDocuments" :key="doc.id">
        <div class="table-content">
          <div class="heading1"><span>{{ doc.displayName }}</span></div>
          <div class="heading3">
            <span><a :href="doc.link">{{ doc.message }}</a> </span>
          </div>
          <div class="heading4"><span>{{ doc.time }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout";
import {useRouter} from "vue-router";
import {computed, ref} from "vue";
import axios from "axios";
import {formatDistanceToNow} from 'date-fns'
import getCollection from "../composables/getCollection";

export default {
  name: "Dashboard",
  data() {
    return {
      items: [
        {age: 40, first_name: "Dickerson", last_name: "Macdonald"},
        {age: 21, first_name: "Larsen", last_name: "Shaw"},
        {age: 89, first_name: "Geneva", last_name: "Wilson"},
        {age: 38, first_name: "Jami", last_name: "Carney"},
      ],
    };
  },
  setup() {
    const {error, logout} = useLogout();
    const router = useRouter();
    const {documents} = getCollection('dashboard')

    const joke = ref("");
    const started = ref(true);

    axios
        .get("https://v2.jokeapi.dev/joke/Programming?type=single")
        .then((res) => {
          joke.value = res.data.joke;
        });

    const getJoke = () => {
      axios
          .get("https://v2.jokeapi.dev/joke/Programming?type=single")
          .then((res) => {
            joke.value = res.data.joke;
          });
    };

    const handleLogout = () => {
      logout();
      if (!error.value) {
        router.push({name: "Home"});
      } else {
        console.log(error.value);
      }
    };

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.time.toDate())
          return {...doc, time: time}
        }).slice(0, 10)
      }
    })

    return {handleLogout, joke, getJoke, started, formattedDocuments};
  },
};
</script>

<style scoped>
.navi {
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(4, 50, 94, 0.2);

  background: #f0f0f3;
}

.navi span {
  margin: 0 3vw;

  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 48px;

  color: #04325e;
}

.inner {
  margin: 0 2vw;
}

.navi button {
  background: #3770ff;
  border-radius: 8px;
  width: fit-content;
  margin: 1vh 1vw;
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #f0f0f3;
}

.joke-box {
  padding-bottom: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.joke-box button {
  background: #3770ff;
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
  font-family: "Poppins", sans-serif;
  font-size: 2vh;
  line-height: 3vh;
}

.inner {
  display: flex;
  align-items: center;
}

.pr-outer {
  background: #f0f0f3;
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.pr-container {
  min-height: 80vh;
  max-width: 80vw;
  margin: 40px auto;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 16px;
}

.table-heading {
  display: grid;
  background: #eaeaef;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0px;
  padding: 25px 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 1.53vw;
  color: #04325e;
  border-bottom: 1px solid #04325e;
}

.table-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0px;
  padding: 25px 0;
  font-weight: 400;
  font-size: 1.38vw;
  color: #04325e;
}

.heading3 {
  text-align: left;
}

.heading3 a {
  text-decoration: none;
  color: #04325e;
}

@media (max-width: 900px) {
  .navi span {
    font-size: initial;
  }

  .navi button {
    font-size: initial;
  }

  .joke-box button {
    font-size: initial;
  }
}
</style>
