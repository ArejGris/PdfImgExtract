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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
