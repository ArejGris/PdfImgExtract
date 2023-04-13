<template>
  <div class="container=fluid d-block ">
    <div class="card text-center mx-5">
        <div class="card-title p-7">view all images</div>
        <div class="card-body">
            <div class="row g-3 justify-content-center">
        <div v-for="(img,index) in images" :key="index" :class="`col-${zoom}`">
            <img :src="require(`../assets/img/${img.src}`)" @click="openOverlay(img,index)"  alt="" class="w-50" max-width="100px">
            <img src="../assets/img/closebtn.svg" class="item1" @click="removeItem(img.id)"/>
                        
        </div>
    </div>
    <div class="text-center p-9 mt-5 ">
        <button @click="zoomingin" class="btn btn-info d-inline-block mx-md-5 ms-1">zoom in</button>
        <button class="mx-md-5 ms-1 d-inline-block btn btn-warning" @click="zoomingout">zoom out</button>
    <button class="mx-md-5 ms-1 d-inline-block btn btn-danger" @click="view">view</button>
    </div>
       </div>
    </div>
    <div class="card mx-5">
        <div class="card-body" >
            <div class="silentbox-gallery">
  <Overview
      v-if="overlay.visible"
      :overlay-item="overlay.item"
      :visible="overlay.visible"
      @closeSilentboxOverlay="hideOverlay"
      @requestNextSilentBoxItem="showNextItem"
      @requestPreviousSilentBoxItem="showPreviousItem"
    />
</div>
        </div>
    </div>
  </div>
</template>
<script setup>
import Overview from './Oveview.vue'
import {ref} from 'vue'

const zoom =ref(2)
const   overlay=ref({
        item: {
          src: 'image.svg',
          alt: 'nrr',
          thumbnailWidth: 'auto',
          thumbnailHeight: 'auto',
          thumbnail: '',
          autoplay: false,
          controls: true,
          description: 'this is beautiful'
        },
        visible: true,
        currentItem: 0
      }) 

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

    ])
 
function zoomingin(){
 
    zoom.value=zoom.value+1
}
function zoomingout(){
    if(zoom.value>1){
zoom.value=zoom.value-1}
}
function view(){
    overlay.value.visible=true
}
function removeItem(itemId){
            console.log(itemId)
         images.value= images.value.filter((item)=>{
                return item.id!==Number(itemId)})

        }
       function hideOverlay () {
      overlay.value.visible = false
    }
    function showNextItem () {
      let newItemIndex = overlay.value.currentItem + 1
      newItemIndex = newItemIndex <= images.value.length - 1
        ? newItemIndex : 0

     overlay.value.item =images.value[newItemIndex]
      overlay.value.currentItem = newItemIndex
    }
    function showPreviousItem () {
      let newItemIndex = overlay.value.currentItem - 1
      newItemIndex = newItemIndex > -1
        ? newItemIndex : images.value.length - 1

     overlay.value.item = images.value[newItemIndex]
     overlay.value.currentItem = newItemIndex
    }
    function openOverlay (image, index = 0) {
     overlay.value.visible = true
      overlay.value.item = image
      overlay.value.currentItem = index
    }
</script>