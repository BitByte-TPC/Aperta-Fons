<template>
  <div class="home">
    <div class="container">
      <p id="heading">Aperta-Fons</p>
      <p id="subH">A Month Long Open Source Challenge</p>
      <p id="text">Presented by The Programming Club, IIITDMJ</p>
      <div class="buttonContainer">
        <button class="button hvr-grow">
          <img src="../assets/register.svg" alt="register" />Register
        </button>
        <button class="button hvr-grow">
          <img src="../assets/discord.svg" alt="discord" />Discord
        </button>
      </div>
      <p id="start">Starts in</p>
      <div class="timer">
        <span><span>{{days}}</span> Days</span><span> <span>{{hours}}</span> Hours</span><span> <span>{{mins}}</span> Minutes</span><span> <span>{{secs}}</span> Seconds</span>
      </div>
    </div>
  </div>
  <div class="about-section">
    <div class="about">
      <h1 class="about-heading">About</h1>
      <div class="about-content">
        <p>
          Lorem ipsum dolor sit amet,
          <span class="highlight">consectetur</span> adipiscing elit. Eget lacus
          pellentesque purus ornare fermentum. Imperdiet consectetur nibh nec
          euismod dignissim malesuada cum. Nisl volutpat nisi, tempus vel
          nunc.Volutpat, adipiscing sed aliquet potenti at. Nisi montes, amet
          feugiat pellentesque aliquet volutpat ut ornare. Ridiculus ullamcorper
          pharetra, in proin odio nisl in id nunc.
        </p>
        <p>
          Tellus tincidunt massa ullamcorper lectus ipsum dui. Blandit nullam
          lorem amet leo vestibulum malesuada. Netus maecenas a nisl vehicula
          quis nulla. Odio pulvinar erat dolor vulputate feugiat fringilla
          aliquam magna. Nec elementum lacinia eu, risus eget. Maecenas morbi
          eget viverra egestas velit. Amet habitasse vel porttitor eros
          malesuada vitae quis.
        </p>
        <p>
          Eget ultricies enim gravida elit mi sed blandit id. Luctus non quisque
          amet tellus. Aenean mattis id quam porttitor imperdiet in ultricies.
          Ullamcorper neque elit lorem facilisi nibh.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";


export default {
  name: 'Home',
  setup(){
    const days=ref(0)
    const hours=ref(0)
    const mins=ref(0)
    const secs=ref(0)
    const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
    const x = setInterval(function() {

      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      mins.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      secs.value = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

    return{days,hours,mins,secs}
  }
}
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
  font-size: 12vh;
  line-height: 14vh;
  color: #fff;
  background: none;
  text-align: left;
}

#subH {
  font-family: 'Poppins', sans-serif;
  font-size: 4.4vh;
  line-height: 5.2vh;
  color: #fff;
  font-weight: initial;
  text-align: left;
  margin: 2vh 0 0 0;
}

#text {
  font-family: 'Poppins', sans-serif;
  font-size: 2.3vh;
  line-height: 3.3vh;
  color: #ffffff;
  text-align: left;
  margin: 1.2vh 0 0 0;
}

.button {
  background: #3770FF;
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
  margin: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0;
}
.about-heading {
  font-family: Stargaze;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 5.5vw;
  line-height: 10.6vh;
  align-items: center;
  text-align: center;
}
.about-content {
  font-family: Poppins;
  line-height: 4vh;
  font-size: 1.2vw;
}
.about-content p {
  padding: 10px 0;
}
.highlight {
  position: relative;
  background-color: #3770ff;
}
.timer{
  width: 45vw;
  display: flex;
  justify-content: space-between;
}
#start{
  font-family: 'Poppins', sans-serif;
  font-size: 2vh;
  color: #ffffff;
  margin: 5vh 0 0 0;
}
.timer span {
  font-size: 2vh;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}
.timer span span{
  font-family: Stargaze,sans-serif;
  color: #ffffff;
  font-size: 8vh;
}
</style>
