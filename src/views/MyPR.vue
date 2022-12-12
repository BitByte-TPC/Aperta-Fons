<template>
    <div class="navi">
        <span>My PR's</span>
        <div class="inner">
            <router-link to="/dashboard" style="text-decoration: none; color: inherit;">
                <button>Dashboard</button>
            </router-link>
            <router-link to="/submit" style="text-decoration: none; color: inherit;">
                <button>Submit PR</button>
            </router-link>
            <router-link to="/view" style="text-decoration: none; color: inherit;">
                <button>My PR's</button>
            </router-link>
            <button @click="handleLogout">Logout</button>
        </div>
    </div>
    <div v-if="started" class="pr-outer">
        <div class="pr-container">
            <div class="table-heading">
                <div class="heading1"><span>Name</span></div>
                <div class="heading3"><span>Latest PR</span></div>
                <div class="heading4"><span>Time Added</span></div>
            </div>
            <div v-for="user in formattedDetails" :key="user.time">
                <div class="table-content">
                    <div class="heading1">
                        <span>{{ user.displayName }}</span>
                    </div>
                    <div class="heading3">
                        <span><a :href="user.link" target="_blank">{{ user.message }}</a>
                        </span>
                    </div>
                    <div class="heading4">
                        <span>{{ user.time }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import getCollection from "../composables/getCollection";
import getUserCollection from "../composables/getUserCollection";

export default {
    setup() {
        const { error, logout } = useLogout();
        const router = useRouter();
        const { userDetails } = getUserCollection("dashboard-2022");
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
                router.push({ name: "Home" });
            } else {
                console.log(error.value);
            }
        };


        const formattedDetails = computed(() => {
            if (userDetails.value) {
                return userDetails.value.map((user) => {
                    let time = formatDistanceToNow(user.time.toDate());
                    return { ...user,time_sec: user.time, time: time };
                }).sort((a, b) => {    
                    return b.time_sec - a.time_sec;
                });
            }
        });

        return { handleLogout, joke, getJoke, started, formattedDetails };
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

.navi button:hover {
    transform: scale(1.03);
    background-color: #0745e2;
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
    width: 80vw;
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
    text-align: center;
}

.table-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0px;
    padding: 25px 0;
    font-weight: 400;
    font-size: 1.38vw;
    color: #04325e;
    text-align: center;
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
        font-size: 70%;
    }

    .joke-box button {
        font-size: initial;
    }

    .pr-container {
        margin: auto;
        width: 90%;
        text-align: center;
    }

    .table-heading {
        padding: 1rem 0;
    }

    .table-heading span {
        font-size: 0.9rem;
        text-align: center;
    }

    .heading3 {
        text-align: center;
    }

    .table-content {
        font-size: 0.8rem;
    }
}
</style>
