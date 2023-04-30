<template>
  <ImageExtract/>
</template>

<script>
import ImageExtract from './components/ImageExtract.vue';

export default {
  name: 'App',
  components: {
    ImageExtract
    
  },
  data(){
    return{
      show:'true'
    }
  },
  methods:{
    clic(){
      this.show='false'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Hubballi', cursive;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  /* margin-top: 60px; */
  background-image: url("./assets/img/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
@media screen and (max-width: 1200px ) and (min-width: 751px){
  #app{
  background-image: url("./assets/img/midbacground.png");
  background-attachment: fixed;
  position: fixed;
  background-position: center;
  background-size: cover;
  }
}
@media screen and (max-width:750px ) {
  #app{
  background: url("./assets/img/mobilebg.svg") no-repeat center center /cover;
  background-attachment: fixed;
  position: fixed;

  }
}
</style>
