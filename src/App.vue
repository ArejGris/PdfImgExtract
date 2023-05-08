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
@media screen and (min-height:800px)
 {
#app{
  background: url('../src/assets/img/700-900.svg') no-repeat center center /cover;
}
  
}
@media screen and (max-height:800px) and (min-width: 1100px) 
 {
#app{
  background: url('../src/assets/img/background.svg') no-repeat center center /cover;
}
  
}

@media screen and (max-width:1100px) and (min-width:771px) and (max-height:900px){
#app{
  background: url('../src/assets/img/900-700.svg') no-repeat center center /cover;
}
  
}
@media screen and (max-width:950px) and (min-width:771px) and (max-height:700px){
#app{
  background: url('../src/assets/img/800-500.svg') no-repeat center center /cover;
}
  
}
@media screen and (max-width:770px ) and (min-width: 551px) 
{
  #app{
  background-image: url("./assets/img/700-900.svg");
  background-attachment: fixed;
  position: fixed;
  background-position: center;
  background-size: cover;
  }
}
@media screen and (max-width:770px ) and (min-width: 551px) and (max-height:750px)
{
  #app{
  background-image: url("./assets/img/800-900.svg");
  background-attachment: fixed;
  position: fixed;
  background-position: center;
  background-size: cover;
  }
}
@media screen and (max-width: 770px) and (min-width: 551px) and (max-height:600px)
{
  #app{
    background: url("./assets/img/900-700.svg")no-repeat center center /cover;
    background-attachment: fixed;
    position: fixed;
  }
}
@media screen and (max-width:550px ) {
  #app{
  background: url("./assets/img/mobilebg.svg") no-repeat center center /cover;
  background-attachment: fixed;
  position: fixed;

  }
}

@media screen and (max-width:550px ) and (max-height:820px)
{
  #app{
  background: url("./assets/img/600-900.svg") no-repeat center center /cover;
  background-attachment: fixed;
  position: fixed;

  }
}
@media screen and (max-width:550px ) and (max-height:520px)
{
  #app{
  background: url("./assets/img/700-900.svg") no-repeat center center /cover;
  background-attachment: fixed;
  position: fixed;

  }
}
@media screen and (max-width:550px ) and (max-height:400px)
{
  #app{
  background: url("./assets/img/600-600.svg") no-repeat center center /cover;
  background-attachment: fixed;
  position: fixed;

  }
}
</style>
