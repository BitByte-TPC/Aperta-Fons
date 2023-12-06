<template>
  
</template>
  
  <script>
  import confetti from "canvas-confetti";
  
  export default {
    name: "Confetti",
    data() {
      return {
        colors: ["#8b5642", "#6a696b"],
      };
    },
    methods: {
      frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 100,
          origin: { x: 0,y : 1 },
          colors: this.colors,
        });
        confetti({
          particleCount: 3,
          angle: 90,
          spread: 100,
          origin: { x: 0.5,y:1.1},
          colors: this.colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 100,
          origin: { x: 1,y:1},
          colors: this.colors,
        });
      }
    }
  };
  </script>
  