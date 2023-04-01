<template>
<div id="main"> 
    <div id="form"  class="form" @click="removeclass" >
            <div>
                
                <img src="../assets/img/logo.svg" alt="" />
                <p >
                    Extract your images from any PDF
                </p>
                <form @submit.prevent="addItem" action="" >
                    <div class="form-gorup" >
                        <div class="custom-input-file">
                            <div class="custom-file">
                        <input class="custom-file-input" type="file" accept="application/pdf" ref="file" placeholder="upload you pdf here" @blur="addclass" @input="removeclass" @pointerleave="removeclass" @change="uploadFile">
                        
                        <img src="../assets/img/Vectordownload.svg" class="upload"/>
                       </div>

                        </div>
                      
                    </div>
                    <div class="form-group " >
                        <button class="confirmBtn">
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
            <div  >
    <img src="../assets/img/frame.png" class="download" />
           <gallery :gallery="images" :remove-item="removeItem"/>
            </div>
           </div> 
        
        </div>
</template>
<script setup>
import gallery from './gallery.vue';
import {ref} from 'vue'
import axios from 'axios'

    const show=ref(false);
    const hide=ref(false);
    const file=ref(null);
    const myfile=ref('');
    const resultFile=ref(null)
    //const filename='image.svg';
    //const s=()=>{return '../assets/img/image.svg'};
 
   
    const images=ref([
        {id:1,
          src:'image.svg',
          alt: 'pic2',
          thumbnailWidth: 'auto',
          thumbnailHeight: 'auto',
          autoplay: false,
          controls: true,
          description: 'this is my pic one'
        },{id:2,
          src: 'image.svg',
          alt: 'pic3',
          thumbnailWidth: 'auto',
          thumbnailHeight: 'auto',
          autoplay: false,
          controls: true,
          description: 'this is my pic two'
        },{id:3,
          src:'image.svg',
          alt: 'pic3',
          thumbnailWidth: 'auto',
          thumbnailHeight: 'auto',
          autoplay: false,
          controls: true,
          description: 'this is my pic three'
        },{id:4,
          src:'image.svg',
          alt: 'pic4',
          thumbnailWidth: 'auto',
          thumbnailHeight: 'auto',
          autoplay: false,
          controls: true,
          description: 'this is my pic four'
        },{id:5,
          src: 'image.svg',
          alt: 'pic5',
          thumbnailWidth: 'auto',
          thumbnailHeight: 'auto',
          autoplay: false,
          controls: true,
          description: 'this is my pic five'
        },

    ]);
       function addItem(e){
        e.preventDefault();
      const reader=new FileReader();
      reader.onload=(el)=>{
        resultFile.value=el.target.result;
        console.log(resultFile.value)
      
      };
      reader.readAsDataURL(myfile.value)
      
        console.log(myfile.value)
        let formData=new FormData();
        formData.append('file',resultFile.value);
        axios.post('https://jsonplaceholder.typicode.com/albums/1/photos',formData
        ,{headers:{'Content-Type':'application/json'}})
        .then((response) => console.log(response)).catch((err)=>{
                return Error(err.message)
            })



    show.value=true;
        }
        function removeItem(event,itemId){
            event.preventDefault();
            console.log(itemId)
         images.value= images.value.filter((item)=>{
                return item.id!==Number(itemId)})

        }
      function  addclass(){
            document.querySelector('#form').classList.remove('form');
            
            document.querySelector('#form').classList.add('newform');
            hide.value=true;


        }
        function  removeclass(){
            hide.value=false
           document.querySelector('#form').classList.remove('newform');
            
            document.querySelector('#form').classList.add('form');


        }
        function uploadFile(){
            myfile.value=file.value.files[0];
            console.log(myfile.value)
        }
    
    

</script>
<style>
#main{
    top:0;
    left:0;
    margin: 0;
    padding: 0;
    /* position: relative;     */
    width: 100%;
    height: 100%;
position:relative;
}
.form{
    position:relative;
    padding-top: 8rem;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100%;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/img/bacground.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

}
.newform{
    position: relative;
    margin: 2rem auto;
    padding-top: 8rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-image: none;
    background:url('../assets/img/effect.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    image-resolution: 300dpi;
    opacity: .7;

}

.confirmBtn{
    width: 261px;
    height: 50px;
    background: linear-gradient(90deg, #4568DC -77.64%, #B06AB3 177.64%);
   color: whitesmoke;
   border-radius: 3px;
   border-style: none;
    margin-top: 10px;
    font-family: 'Courier New', Courier, monospace;
    
}
.confirmBtn:hover{
    cursor:pointer
}
.custom-file-input::-webkit-file-upload-button{
    visibility: hidden;
    

}
.upload{
    padding-top: 5px;
}
.download{
    margin-bottom: -40px;
    margin-left: 20rem;
    align-self: start;
  display: inline-block;
    left: 2px;
}
.custom-file-input::before{
    content: 'Upload Your PDF here';
    display: inline-block;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select:none;
    cursor: pointer;
    font-weight: 20;
    font-size: 10pt;
    opacity: .4;
    width: 100%;
}

.custom-input-file{
    border-radius: 3px;
    margin-bottom: 2rem;
}
.custom-file{
    width:100%;
    height: 3rem;
    background-color:rgba(0,0,0,.057);
    z-index: 1;
    font-family:cursive;
    color: black;
    display:inline-block;
    border-radius: 3px;
  padding: 4px 10px;
    cursor:pointer;
}  
ul{
    display: flex;
    flex-shrink: 2;
    flex-wrap: wrap;
}
.list{
    float:center;
    height:200px;
    width: 260px;
    margin: 0 auto;
}
.collect{
    height:200px;
    width: 290px;
    box-shadow: 0  2px 8px rgba(0,0,0,0.3);
    background-color: rgba(0,0,0,0.05) ;
    border-radius: 12px;
    border-width: 2px;
    margin:0 1.5rem ;
    padding:  15px 10px;
    z-index:1;
    
}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.warp{
    padding: 2px ;
}
.item1{
    position:inherit;
    margin-left: -5px;
    margin-bottom: 36px;
    z-index: 1;
}
.item2{
    position: initial;
    z-index: 2;
}

@media screen and (max-width:900px) {
    .list{
    float:center;
    height:200px;
    width: 300px;
    margin: 0 ;
}
    ul{
    
    display: flex;
    flex-shrink: 4;
    flex-wrap: wrap;
   }
    .form{
        margin-top: -10rem;
        top:0;
        bottom: 0;
        position: relative;
        padding-top: 13rem ;
        padding-bottom: 2rem;
    background: url(../assets/img/mobilebg.jpg) no-repeat center;
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size: cover;
    background-attachment:inherit ;
    
    height: auto;
    z-index:2;
    left: auto;
    
   }
    
}
</style>