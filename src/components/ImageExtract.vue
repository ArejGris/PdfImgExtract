<template>
  <div id="main">
    <div id="form" class="form" >
      <!-- main card section -->
      <div class="card1" v-if="!hide">
        <img src="../assets/img/logo.svg" alt="" />
        <p>Extract Your Images From Any PDF</p>
        <form @submit.prevent="addItem" action="">
                <div class="uploadFileBox" 
                  @click="addclass"
                 >
                   <div class="inputCard">
                       <div class="visible">
                        <div class="inputText">
                          <span> Upload Your PDF here
                        </span>
                         <img src="../assets/img/Vectordownload.svg" class="upload" />
                        </div>
                         
                      
                    <img class="close" src="../assets/img/close.svg" />
                       </div>
                       <div class="hidden">
                          <input type="file" ref="file"  
                          @change="uploadFile" 
                          style="height: 100%;width: 100%;"  
                          @input="removeclass"
                          @abort="removeclass"
                                 />
                      </div>
                      
                    </div>
                    
                 </div>

          <div class="form-group">
            <button class="confirmBtn">Confirm</button>
          </div>
        </form>
      </div>
       <!-- alternative card section -->
      <div class="card1" v-else>
        <div class="logo2">
        <img src="../assets/img/Vector.png"  alt="" />
        <img src="../assets/img/title.png" style="margin-left: 1rem;" alt="" />
      </div>
      <div class="uploadFileBox" 
                  @click="addclass"
                 >
                   <div class="inputCard">
                       <div class="visible">
                        <div class="inputText" style="background-color: white;">
                          <span> Upload Your PDF here
                        </span>
                         <img src="../assets/img/Vectordownload.svg" class="upload" />
                    </div>
                       </div>
                       <div class="hidden">
                          <input type="file" ref="file"  
                          @change="uploadFile" 
                          style="height: 100%;width: 100%;"  
                          @input="removeclass"
                          @abort="removeclass"
                         
                                 />
                      </div>
                      
                    </div>
                    
                 </div>
      </div>
      <!-- image collect section -->
      <div v-if="show" class="collect1">
        
        <img src="../assets/img/frame.png" class="download" />
        <div class="collect">
          <ul class="list">
            <a v-for="(image, index) in images" :key="index">
              <div class="warp">
                <img
                  :src="require(`../assets/img/${image.img}`)"
                  class="item2"
                  placeholder=""
                  style="width: 45px; height: 45px"
                />

                <img
                  src="../assets/img/closebtn.svg"
                  class="item1"
                  @click="removeItem(image.id)"
                />
              </div>
            </a>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
const show = ref(false);
const hide = ref(false);
const file = ref(null);
const myfile = ref("");
//const filename='image.svg';
//const s=()=>{return '../assets/img/image.svg'};
const images = ref([
  {
    id: 1,
    img: "image.svg",
  },
  {
    id: 2,
    img: "image.svg",
  },
  {
    id: 3,
    img: "image.svg",
  },
  {
    id: 4,
    img: "image.svg",
  },
  {
    id: 5,
    img: "image.svg",
  },
  {
    id: 6,
    img: "image.svg",
  },
  {
    id: 7,
    img: "image.svg",
  },
  {
    id: 8,
    img: "image.svg",
  },
  {
    id: 9,
    img: "image.svg",
  },
  {
    id: 10,
    img: "image.svg",
  },
  {
    id: 11,
    img: "image.svg",
  },
  {
    id: 12,
    img: "image.svg",
  },
  {
    id: 13,
    img: "logo.svg",
  },
]);
function addItem(e) {
  e.preventDefault();
  console.log(myfile.value);
  let formData = new FormData();
  formData.append("file", myfile.value);
  axios
    .post("https://jsonplaceholder.typicode.com/albums/1/photos", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => console.log(response));

  show.value = !show.value;
}
function addclass() {
  document.querySelector("#main").classList.add("newMain");
  console.log(document.querySelector("#main").classList.contains("newMain"))
  hide.value=true
 
}
function removeclass() {
  if(hide.value)
  document.querySelector("#main").classList.remove("newMain");
  hide.value=false
}

function removeItem(item1) {
  console.log(item1.type);
  images.value = images.value.filter((item) => {
    return item.id !== Number(item1);
  });
}
function uploadFile() {
  myfile.value = file.value.value.file.files[0];
  console.log(myfile);
}
</script>
<style lang="scss">
#main {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  /* position: relative;     */
  width: 100%;
  height: 100%;
}
.newMain {
  background: url("../assets/img/effect.jpg") no-repeat;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size:cover;
  -webkit-background-repeat:no-repeat;
        -moz-background-size:cover;
        -o-background-size:cover;
  image-resolution: 300dpi;
  
}
.form {
  /* position: absolute; */
  top:0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  
}

.form p {
    font-family: 'Hubballi', cursive;
    font-weight: 400;
    line-height: 21px;
    font-size: 22px;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  -webkit-align-items:center;
  margin:  0 auto;
}
.confirmBtn {
  width: 261px;
  height: 50px;
  background: linear-gradient(90deg, #4568dc -77.64%, #b06ab3 177.64%);
  color: #FFFFFF;
    border-radius: 5px;
  border-style: none;
  margin-top: 10px;
  font-family: "Hubballi";
  font-weight: 400;
  line-height: 21px;
  font-size: 22px;
  font-style: normal;
  text-transform: capitalize;
}
// main card section
.card1{display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align:center;
        width:auto;
        position: relative;
        vertical-align: middle;
      
      }
.uploadFileBox{
    align-content: center;
    justify-content: space-between;
    height: 58px;
    padding-left: 20px;
    padding-right: 20px;
    padding: 10px auto;
    display: flex;


   
}
.inputCard{
  margin: 0 auto;
  width:400px;
  display: block;
  justify-content: center;
  align-items: center;
}
.close{
 display: inline;
  margin: auto;
 
    }

.hidden{
  width: 100%;
  position: absolute;
  margin-top:0;
  z-index: 2;
  height: 58px;
  opacity: 0;
}
.hidden::-webkit-file-upload-button{
  visibility: hidden;
}
.visible{
  position: absolute;
  display: flex;
  margin: 0 auto;
  height: 54px;
 width: 100%;
}
.inputText{
  display: flex;
  margin: 0 auto ;
  height: 100%;
  width: 450px;
  justify-content: space-between;
    border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.067);
  vertical-align: middle;
  img{
    vertical-align: middle;
        height:50%;
        margin:auto 1rem 1rem;
    }
    
    span{
      vertical-align: middle;
      height: 50%;
      font-family:  'Hubballi', cursive;
      font-size: 20px;
      margin:1rem 1rem 6rem;
    
   
  }
  
  
}

.upload {
  padding-top: 5px;
}
// alternative card section


.logo2{
  display: flex;
  vertical-align: middle;
  margin: 5rem auto;
}
// collect section

ul {
  display: flex;
  flex-shrink: 5;
  flex-wrap: wrap;
}
.list {
  float: center;
  height: 200px;
  width: 300px;
  margin: 0 auto;
}

.download{
        margin-bottom: -40px;
        margin-left: 21rem;
        align-self: start;
      display: inline-block;
        left: 2px;
    }
.collect {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  border-width: 2px;
  margin: 0 2rem;
  padding: 5px 8px;
}
.collect1{
  padding: 5px 10px;
  margin: 0 2rem;
  background-color: #FFFFFF;
}
.warp {
  padding: 2px auto;
}
.item1 {
  position: inherit;
  margin-left: -5px;
  margin-bottom: 36px;
  z-index: 1;
}
.item2 {
  position: initial;
  z-index: 2;
}
@media screen and (max-width: 900px) {
  .list {
    float: center;
    height: 200px;
    width: 300px;
    margin:4px 0;
  }
  ul {
    display: flex;
    flex-shrink: 4;
    flex-wrap: wrap;
  }
  .inputCard{
    width: 300px;
  }
  .inputText{
    width: 300px;
  }
  
}
</style>