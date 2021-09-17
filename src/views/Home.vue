<template>
  <!--  Navigation Section-->


  <Nav></Nav>


  <!--  Landing Section-->



  <div class="home" id="home">
    <div class="container">
      <p id="heading">Aperta Fons</p>
      <p id="subH">A Month Long Open Source Challenge</p>
      <p id="text">Presented by The Programming Club, IIITDMJ</p>
      <div class="buttonContainer">
        <router-link to="/auth" style="text-decoration: none; color: inherit;">
          <button class="button hvr-grow">
            <img src="../assets/register.svg" alt="register"/><p>{{user ? "Dashboard" : "Register"}}</p>
          </button>
        </router-link>
        <a href="https://discord.gg/rdQ9ezYE" style="text-decoration: none">
          <button class="button hvr-grow">
            <img src="../assets/discord.svg" alt="discord"/><p>Discord</p>
          </button>
        </a>
      </div>
      <p id="start">Starts in</p>
      <div class="timer">
        <span
        ><span>{{ days }}</span> Days</span
        ><span>
          <span>{{ hours }}</span> Hours</span
      ><span>
          <span>{{ mins }}</span> Minutes</span
      ><span>
          <span>{{ secs }}</span> Seconds</span
      >
      </div>
    </div>
  </div>

  <!--  About Section-->



  <div class="about-section" id="about">
    <div class="about">
      <h1 class="about-heading">About</h1>
      <div class="about-content">
        <p>
          Aperta Fons is a
          <span class="highlight">month-long open source event</span>, that is
          aimed at encouraging you towards the world of open-source and taking
          the first step towards licentious open-source programs like
          <span class="highlight">Outreach, Google Summer of Code, MLH,</span>
          etc. This event is managed by BitByte, The Programming Club and Google
          DSC of IIITDM Jabalpur.
        </p>
        <p>
          This event is aimed at matching you with open source, free software,
          and technology-related organizations to write code and become part of
          these communities. The organizations provide mentors who act as guides
          through the entire process, from learning about the community to
          contributing code.
        </p>
        <p>
          The goals of our Event are to:
          <br/>
          - <span class="highlight">Inspire</span> you to begin participating in
          open source development.
          <br/>
          - <span class="highlight">Identifying</span> open-source projects and
          bring in new developers.
          <br/>
          - <span class="highlight">Provide</span> you the opportunity to do
          work and give you industry experience.
          <br/>
          - <span class="highlight">Give</span> you more exposure to real-world
          software development
        </p>
      </div>
    </div>
  </div>

  <!--  Prize Section-->



  <div class="prize-section" id="prize">
    <div class="prize">
      <h1 class="prize-heading">
        What's in it for you?
      </h1>
      <div class="prizes">
        <div class="list">
          <p>
            &bull; <span class="bolder">TOP 20 CONTRIBUTOR</span> can win
            exclusive club t-shirts.
          </p>
          <p>
            &bull;
            <span class="bolder">EVERY CONTRIBUTOR</span> who has got at least 3
            easy-level and 1 medium-level PR merged to repositories with 100+⭐
            will get exclusive club stickers.
          </p>
          <p style="margin: 0 0 10px;">
            <span class="bolder">NOT ENOUGH?</span>
          </p>
          <p style="margin: 0">
            &bull; All participants with at least 1 PR merged will get a
            <span class="bolder"
            >Google Developer Student Club certificate</span
            >
            for their participation in the event.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!--  FAQ Section-->

  <div class="faq" id="faq">
    <p class="faq_head">FAQS</p>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item bg-black">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button bg-black collapsed" type="button" style="color: #ffffff;"
                  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                  aria-controls="collapseOne">
            Why should I participate?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Ans. </strong>Participating in such events provides an amazing learning experience, helps in
            improving your development skills, getting involved in big organizations and helping to build networks. This
            is a great place to get you jump-started and up to speed with various industry-demanded technologies and
            getting involved with some great Open Source communities.

          </div>
        </div>
      </div>
      <div class="accordion-item bg-black">
        <h2 class="accordion-header">
          <button class="accordion-button bg-black collapsed" type="button" style="color: #ffffff; outline: none"
                  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                  aria-controls="collapseTwo">
            Why is Open Source important?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Ans. </strong> Open source provides you first-hand experience with working on big and real-world
            projects, on which many top companies depend, which will give a huge boost in your development career. Not
            only this, but you also get to work with and learn from some of the most talented developers around the
            world.
          </div>
        </div>
      </div>
      <div class="accordion-item bg-black">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button bg-black collapsed" type="button" style="color: #ffffff"
                  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                  aria-controls="collapseThree">
            Are there any placement opportunities available?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Ans. </strong>Not directly, however, you will gain important experience which will surely help you
            later down the road in this domain.
          </div>
        </div>
      </div>
      <div class="accordion-item bg-black">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button bg-black collapsed" type="button" style="color: #ffffff"
                  data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                  aria-controls="collapseFour">
            Can we work in groups to participate in this event?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Ans. </strong>No, team participation is not allowed in this event. Everyone must participate individually. But you can collaborate with each other if contributing to the same organization.
          </div>
        </div>
      </div>
      <div class="accordion-item bg-black">
        <h2 class="accordion-header" id="headingFive">
          <button class="accordion-button bg-black collapsed" type="button" style="color: #ffffff"
                  data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                  aria-controls="collapseFour">
            How do I submit my pull requests on Event Website?
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Ans. </strong>Head over to the Submit PR tab on your dashboard and fill the form accordingly.
          </div>
        </div>
      </div>
      <div class="accordion-item bg-black">
        <h2 class="accordion-header" id="headingSix">
          <button class="accordion-button bg-black collapsed" type="button" style="color: #ffffff"
                  data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                  aria-controls="collapseSix">
            I am stuck. How do I get help?
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Ans. </strong>. Join our discord server (link here) and the mentors would be glad to help you there.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {ref} from "vue";
import Nav from "@/components/Nav";
import {projectAuth} from "@/firebase/config";


export default {
  name: "Home",
  components: {Nav},

  setup() {

    const days = ref(0);
    const hours = ref(0);
    const mins = ref(0);
    const secs = ref(0);
    const countDownDate = new Date("Sep 21, 2021 10:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours.value = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      mins.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      secs.value = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

    const user = projectAuth.currentUser

    return {days, hours, mins, secs, user};
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  background-image: url("../assets/home-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  margin-left: 38vw;
  padding: 23vh 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#heading {
  margin: 0;
  font-family: "Stargaze", serif;
  font-size: 12.4vh;
  line-height: 14vh;
  color: #fff;
  background: none;
  text-align: left;
}

#subH {
  font-family: "Stargaze", sans-serif;
  font-size: 4.2vh;
  line-height: 5.2vh;
  color: #fff;
  font-weight: initial;
  text-align: left;
  margin: 2vh 0 0 0;
}

#text {
  font-family: "Poppins", sans-serif;
  font-size: 2.3vh;
  line-height: 3.3vh;
  color: #ffffff;
  text-align: left;
  margin: 1.2vh 0 0 0;
}

.button {
  background: #3770ff;
  border-radius: 8px;
  width: fit-content;
  margin-right: 5vw;
  font-size: 1.5vw;
  padding: 1vh 2.5vw;
  color: #ffffff;
  display: flex;
  font-family: "Poppins", sans-serif;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
}

.buttonContainer button p{
  margin-bottom: 0rem ;
}

.hvr-grow {
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.03);
}

.button img {
  margin-right: 1vw;
}

.buttonContainer {
  padding-top: 10vh;
  display: inline-flex;
  text-align: left;
}

.about-section {
  width: 100vw;
  background-color: #040509;
}

.about {
  overflow-x: hidden;
  color: #fff;
  height: 100vh;
  width: 72%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto auto 0;
}

.about-heading {
  font-family: Stargaze, sans-serif;
  margin: 0;
  padding: 5vh 0;
  font-style: normal;
  font-weight: normal;
  font-size: 5.5vw;
  line-height: 10.6vh;
  align-items: center;
  text-align: center;
}

.about-content {
  font-family: Poppins, sans-serif;
  line-height: 4vh;
  font-size: 1.2vw;
}

.about-content p {
  padding: 10px 0;
}

.highlight {
  padding: 0 3px;
  position: relative;
  background-color: #3770ff;
}

.timer {
  width: 45vw;
  display: flex;
  justify-content: space-between;
}

#start {
  font-family: "Poppins", sans-serif;
  font-size: 2vh;
  color: #ffffff;
  margin: 5vh 0 0 0;
}

.timer span {
  font-size: 2vh;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
}

.timer span span {
  font-family: Stargaze, sans-serif;
  color: #ffffff;
  font-size: 8vh;
}

.prize-section {
  width: 100vw;
  height: 100vh;
  background-color: #3770ff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prize {
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 80vw;
  justify-content: space-evenly;
}

.prize-heading {
  padding: 0;
  margin: 0;
  font-size: 5.6vw;
  letter-spacing: 2px;
  line-height: 7.36vw;
  font-family: Stargaze, sans-serif;
  color: #ffffff;
}

.list {
  width: 70%;
  margin: auto;
  text-align: left;
  color: #ffffff;
}

.list p {
  line-height: 2.6vw;
  font-size: 1.8vw;
  font-family: Poppins, sans-serif;
}

.bolder {
  font-family: Stargaze, sans-serif;
}

.faq {
  min-height: 100vh;
  width: 100%;
  background: #000000;
  padding-bottom: 10vh;
}

.faq_head {
  font-family: Stargaze, serif;
  font-size: 6vw;
  margin: 0;
  padding-top: 7vh;
  color: #ffffff;
}

.accordion {
  width: 55vw;
  margin: 12vh auto 0;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}

.accordion-header {
  border-bottom: 0.3vh solid #ffffff;
}

.accordion-item {
  border: none;
}

.accordion-button {
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  font-size: 1.5vw;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .125);
}

.accordion-body {
  text-align: left;
}

@media(max-width:900px)
{
  .container[data-v-fae5bece] {
    margin-left: 0px;
    padding: 8rem 2rem 0 2rem;
    text-align: center;
  }
  #heading{
    text-align: center;
    font-size: 4rem;
    line-height:initial;
  }
  #subH{
    text-align: center;
  }
  #text{
    text-align: center;
  }
  .buttonContainer{
    margin: auto;
  }
  .buttonContainer button{
    text-align: center;
    width:8rem;
  }
  .buttonContainer button p{
    margin: auto;
    font-size:0.8rem;
  }
  .timer{
    width: initial;
  }
  /* #sidebarMenu[data-v-65af85a3]{
    width: 100%;
  }
  #sidebarMenuInner[data-v-65af85a3] li{
    padding: 1rem;
  } */

  .about{
    height:initial;
  }
  .about-heading{
    margin: initial;
    margin-top: 4rem;
    font-size:3rem;
    line-height:initial;
  }
  .about-content p{
    font-size: 1rem;
  }

}
</style>
