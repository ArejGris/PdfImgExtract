<template>
<div id="main"> 
    <div id="form"  class="form" @click="removeclass">
            <div>
                
                <img src="../assets/img/logo.svg" alt="" >
                <p >
                    Extract your images from any PDF
                </p>
                <form @submit="addItem" action="/">
                    <div class="form-gorup" style="z-index: 1;">
                        <div class="custom-input-file">
                            <div class="custom-file">
                        <input class="custom-file-input" type="file" accept="application/pdf" ref="file" placeholder="upload you pdf here" @blur="addclass"  @pointerleave="removeclass" @change="uploadFile" />
                        
                        <img src="../assets/img/Vectordownload.svg" class="upload"/>
                       </div>

                        </div>
                      
                    </div>
                    <div class="form-group " >
                        <button class="confirmBtn" type="submit" >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
            <div v-if="show " ><RouterLink class="download" :to="{name:'view'}">
                <img src="../assets/img/frame.png"  /></RouterLink>
            <div class="collect">
                <ul class="list">
                    <a v-for="(image,index) in images"
                    :key="index" >
                     <div class="warp">
                    <img :src="require(`../assets/img/${image.img}`)" class="item2" placeholder="" style="width:45px;height: 45px;"/>
                       
                    <img src="../assets/img/closebtn.svg" class="item1" @click="removeItem(image.id)"/>
                        
                     </div>
                    </a>
                </ul>
            </div>
            </div>
           </div> 
        
        </div>
</template>
<script setup>
import {ref} from 'vue'
import axios from 'axios'
    const show=ref(false);
    const hide=ref(false);
    const file=ref(null);
    const myfile=ref(null);
    const base64=ref('')
    //const filename='image.svg';
    //const s=()=>{return '../assets/img/image.svg'};
    const images=ref( [
        {
            id:1,
            img:'image.svg'
        },
        {
            id:2,
            img:'image.svg'
        }, {
            id:3,
            img:'image.svg'
        }, {
            id:4,
            img:'image.svg'
        }, {
            id:5,
            img:'image.svg'
        }, {
            id:6,
            img:'image.svg'
        }, {
            id:7,
            img:'image.svg'
        }, {
            id:8,
            img:'image.svg'
        }, {
            id:9,
            img:'image.svg'
        }, {
            id:10,
            img:'image.svg'
        }, {
            id:11,
            img:'image.svg'
        }, {
            id:12,
            img:'image.svg'
        }, {
            id:13,
            img:'logo.svg'
        }
      ])
       function addItem(e){
        e.preventDefault();
        console.log(myfile.value)
        var fileReader=new FileReader();
    
        fileReader.onload=(fileLoadEvent)=>{
            base64.value=fileLoadEvent.target.result;
            console.log(base64.value)
        }
        fileReader.readAsDataURL(myfile.value)
        let formData=new FormData();
        formData.append("file",base64.value);
        axios.post('https://localhost:4500/upload',formData).then((response) => 
        console.log(response)).catch(err=>{console.log(err)})
        show.value=true;
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
        function removeItem(item1){
            console.log(item1.type)
            images.value= images.value.filter((item)=>{
                return item.id!==Number(item1)
            })
            

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
position: fixed;

}
.form{
    position: absolute;
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

}
.newform{
    position: absolute;
    margin: 0 auto;
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
    margin-left: 22rem;
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
    display: flex;
}
.custom-file{
    width:100%;
    height: 3rem;
    background:  rgb(240, 241, 241,.7);
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
    flex-shrink: 5;
    flex-wrap: wrap;
}
.list{
    float:center;
    height:200px;
    width: 300px;
    margin: 0 auto;
}
.collect{
    /* box-shadow: 0  2px 8px rgba(0,0,0,0.3); */
    background:  rgb(240, 241, 241,.7);
    border-radius: 12px;
    border-width: 2px;
    margin:0 2rem ;
    padding:  5px 10px;
    
}
.warp{
    padding: 2px auto;
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
        margin-top: -7rem;
        top:0;
        bottom: 0;
        position: fixed;
        padding-top: 13rem ;
        padding-bottom: 2rem;
    background: url(../assets/img/mobilebg.jpg) no-repeat ;
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size: cover;
    height: auto;
    
   }
    
}
</style>