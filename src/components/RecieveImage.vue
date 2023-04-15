<template>
    <h1>
    this is load page</h1>
    <img ref="image" :src="bolbUrl" alt="img">
</template>
<script>
import axios from 'axios'
async function load(){
    console.log('hello')
    axios({
    url: 'https://jsonplaceholder.typicode.com/photos/1', //your url
    method: 'GET', // important
}).then((response) => {
    // create file link in browser's memory
    const url=new Blob(response.data['url'])
    console.log(response.data)
    const href = URL.createObjectURL(url);

    // create "a" HTML element with href to file & click
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', 'file.svg'); //or any other extension
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
});
}
export default{
    data(){
        return{
            bolbUrl:null
        }
    },
    created(){
        load()
    }
 
 
/*   watch:{
    src:{
        immediate:true,
        handler(src){
            if(!src) return
            load(src).then(bolb=>{
                this.bolbUrl=URL.createObjectURL(bolb)
            })
        },
    },
  }, */
}
</script>