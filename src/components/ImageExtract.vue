<template>
  <div id="main" >
    <div id="form" class="form " >
      <!-- main card section -->
      <div class="card1" v-if="!hide">
        <img class="logo" src="../assets/img/logo.svg" alt="" />
        <p >Extract Your Images From Any PDF</p>
        <form @submit.prevent="addItem" action="">
                <div class="uploadFileBox" >
                   <div class="inputCard">
                       <div class="visible"  >
                        <div class="inputText" >
                          <span> Upload Your PDF here
                        </span>
                         <img src="../assets/img/Vectordownload.svg" class="upload" />
                        </div>
                         
                       </div>
                       <div class="hidden" @click="addclass">
                          <input type="file" ref="file"  
                          @change="uploadFile" 
                          style="height: 100%;width: 100%;"  
                          @input="removeclass"
                          @abort="removeclass"
                                 />
                      </div>
                   </div>
                    <img class="close" src="../assets/img/close.svg" />
                    
                 </div>
                 <div class="clear" v-if="clear">
                        <p  ><img style="height:16px width:20px" src="../assets/img/clear.png" alt="">
                         Clear Selection</p>
                    
                      </div>

          <div class="form-group">
            <button class="confirmBtn">Confirm</button>
          </div>
        </form>
      </div>
       <!-- alternative card section -->
      <div class="card1 col-12" v-else>
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
        <div class="collect">
      <img class="download"  src="../assets/img/frame.png"  />
          <ul class="list">
            <a v-for="(image, index) in images" :key="index">
              <div class="warp">
                <img
                  :src="require(`../assets/img/${image.img}`)"
                  class="item2"
                  placeholder=""
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
const clear=ref(false);
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
    show.value = true;

}
function addclass() {
  clear.value=true;
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
  background: url("../assets/img/loddingeffect.jpg") no-repeat;
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
  margin:0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  
}

.form p {
    font-family: 'Hubballi', 'cursive';
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
  width: 442px;
}
.confirmBtn {
  width: 261px;
  height: 50px;
  margin-top: 30px;
  background: linear-gradient(90deg, #4568dc -77.64%, #b06ab3 177.64%);
  color: #FFFFFF;
    border-radius: 5px;
  border-style: none;
  font-family: "Hubballi";
  font-weight: 400;
  line-height: 21px;
  font-size: 22px;
  font-style: normal;
  text-transform: capitalize;
}
// main card section
.card1{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align:center;
        width:auto;
        height: auto;
        position: relative;
        vertical-align: middle;
        margin: 10px auto;
      
      }
      .card1{
        .logo{
          margin-top: 50px;
        }
      }
.uploadFileBox{
    align-content: center;
    justify-content: space-between;
    height: 58px;
    padding: 10px auto;
    display: flex;
    width:442px;
}
.clear{
  position: absolute;
  visibility: hidden;
}
.inputCard{
  margin: 0 auto;
  height: 58px;
width:442px;
  display: block;
  justify-content: center;
  align-items: center;
}
.close{
  left: 100%;
  position: absolute;
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
  width: 100%;
  justify-content: space-between;
    border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.067);
  vertical-align: middle;
  .upload{
    vertical-align: middle;
        height:70%;
        margin:auto 1rem 1rem;
    }
    
    span{
      vertical-align: middle;
      height: 50%;
      font-family:  'Hubballi', 'cursive';
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
  padding-bottom:110px;
  top:0;
}
// collect section

ul {
  display: flex;
  flex-shrink: 5;
  flex-wrap: wrap;
}
.list {
  background-color:#F4F4F4;
  float: center;
  height: auto;
  padding: 10px;
  width: 422px;
  border-radius: 10px;
}

.collect1{
  display: block;
 width:442px;
 height: 291px;
 margin: 10px 0px;
}

.collect {
  position: relative;
    border-radius: 10px;
    margin: 0 auto;

}
.download{
    position: absolute;
    left: 100%;
    display: inline
    }

.warp {
  padding: 2px auto;
}
.item1 {
  position: absolute;
  margin-left: -5px;
  margin-bottom: 36px;
  z-index: 1;
}
.item2 {
  position:initial;
margin-left: 9px;
margin-bottom:9px;
  z-index: 2;
  border-radius: 6px;
  width:60px;
  height:60px;
}
.form{
  overflow:scroll;
  overflow-x:hidden;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; 
}
.form::-webkit-scrollbar{
 display: none;
}

@media screen and (max-width:500px){

.confirmBtn{
  margin-top: 20px;
  font-size: 17px;
}

.form p{
  font-size: 18px;
}
form{
  display: grid;
  width: 100%;
}
.inputCard{
    width:260px;
  }

.uploadFileBox{
  width: 100%;
}
  .inputText{
    span{
      font-size: 17px;
    }
  }

  .item2{
  width:50px;
  height:50px;
 }

 .collect1{
  display:flex;
  width: 260px;
 }
 
.collect{
  width:250px;
}

  .list {
    float: center;
    height: auto;
    margin:4px 0px;
    margin-left: -14px;
    padding: 10px;
    padding-right:19px;
    width: 240px;
  }
.download{
  left: 93%;
  top:-10px;
}
 
  ul {
    display: flex;
    flex-shrink: 4;
    flex-wrap: wrap;
  }

  .close{
    visibility: hidden;
    position: absolute;
  }
  .clear{
    visibility: visible;
    color: red;
    justify-self: flex-end;
    position: relative;
    text-align:right;
  }


}
@media screen and (max-width: 900px) and (min-width: 501px){

.confirmBtn{
  margin-top: 20px;
}
form{
  display: grid;
  width: 100%;
}

.uploadFileBox{
  width: 100%;
}
.inputCard{
    width:313px;
  }
  
  .close{
    visibility: hidden;
    position: absolute;
  }
  .clear{
    visibility: visible;
    color: red;
    justify-self: flex-end;
    position: relative;
    text-align:right;
  }
  // collect section
  .list {
    float: center;
    width: 295px;
    height: auto;
    margin:4px 0;
    padding: 9px;
  }
  .collect{
    display: grid;
    width: 313px;
  }
  .download{
    left:98%;
    margin-top: 4px;
    justify-self: flex-end ;
  }
  ul {
    display: flex;
    flex-shrink: 4;
    flex-wrap: wrap;
  }

}
</style>