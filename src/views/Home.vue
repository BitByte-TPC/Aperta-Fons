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
      <div class="timer">
        <p id="demo"></p>
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
export default {
  name: "Home",
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
  padding: 23vh 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#heading {
  margin: 0;
  font-family: "Stargaze", serif;
  font-size: 80px;
  line-height: 103px;
  color: #fff;
  background: none;
  text-align: left;
}

#subH {
  font-family: "Poppins", sans-serif;
  font-size: 35px;
  line-height: 52px;
  color: #fff;
  font-weight: initial;
  text-align: left;
  margin: 2vh 0 0 0;
}

#text {
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  line-height: 33px;
  color: #ffffff;
  text-align: left;
  margin: 1.2vh 0 0 0;
}

.button {
  background: #3770ff;
  border-radius: 11px;
  width: fit-content;
  margin-right: 5vw;
  font-size: 24px;
  line-height: 36px;
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

.timer {
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
</style>
