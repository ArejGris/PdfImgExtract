<template>
  <div class="silentbox-gallery">
    <div class="collect center">
    
    </div>
  

    <slot/>
  
  </div>
  <V-space/>
<div class="silentbox-gallery">
  <silentbox-overlay
      v-if="overlay.visible"
      :overlay-item="overlay.item"
      :visible="overlay.visible"
      :total-items="totalItems"
      @closeSilentboxOverlay="hideOverlay"
      @requestNextSilentBoxItem="showNextItem"
      @requestPreviousSilentBoxItem="showPreviousItem"
    />
</div>
   


</template>

<script>
import overlay from './overlay.vue'


export default {
  name: 'silentboxGallery',

  props: {
    removeItem:{
      type:Object,
    },
    previewCount: {
      type: Number,
      default: null
    },
    lazyLoading: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    gallery: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  components: {
    'silentbox-overlay': overlay
  },
  //emits:['remove'],
  data () {
    return {
      overlay: {
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
      }
    }
  },
  computed: {
    totalItems () {
      return this.gallery.length 
    },
    previewGallery () {
      if (Number.isInteger(this.previewCount)) {
        return this.gallery.slice(0, this.previewCount).map(item => {
          return {
            ...this.overlay.item,
            ...item,
            thumbnail: this.setThumbnail(item),
            autoplay: this.setAutoplay(item)
          }
        })
      }
      return this.galleryItems
    },
    galleryItems () {
      if (this.gallery.length > 0) {
        return this.gallery.map(item => {
          return {
            ...this.overlay.item,
            ...item,
            thumbnail: this.setThumbnail(item),
            autoplay: this.setAutoplay(item)
          }
        })
      }
      return [{
        ...this.overlay.item,
        ...this.image,
        thumbnail: this.setThumbnail(this.image)
      }]
    }
  },
  methods: {
  /*   removeItem(event,item1){
        event.preventDefault()
        console.log(item1.type)
        this.$emit('remove',item1)
        this.previewGallery=this.galleryItems.filter((item)=>{
        return item.id!==Number(4)}) 
        }, */
    openOverlay (image, index = 0) {
      this.overlay.visible = true
      this.overlay.item = image
      this.overlay.currentItem = index
      this.$emit('silentbox-overlay-opened', { item: image })
    },
    hideOverlay () {
      this.overlay.visible = false
      this.$emit('silentbox-overlay-hidden', { item: this.overlay.item })
    },
    showNextItem () {
      let newItemIndex = this.overlay.currentItem + 1
      newItemIndex = newItemIndex <= this.gallery.length - 1
        ? newItemIndex : 0

      this.overlay.item = this.gallery[newItemIndex]
      this.overlay.currentItem = newItemIndex
      this.$emit('silentbox-overlay-next-item-displayed', { item: this.overlay.item })
    },
    showPreviousItem () {
      let newItemIndex = this.overlay.currentItem - 1
      newItemIndex = newItemIndex > -1
        ? newItemIndex : this.gallery.length - 1

      this.overlay.item = this.gallery[newItemIndex]
      this.overlay.currentItem = newItemIndex
      this.$emit('silentbox-overlay-previous-item-displayed', { item: this.overlay.item })
    },
    setAutoplay (item) {
      return item.autoplay ? 'autoplay' : ''
    },
    setThumbnail (item) {

      return item.thumbnail || item.src
    }
  }
}
</script>

<style >
.silentbox-gallery{
display: flex;
align-items: center;
justify-content: center;
width:450px
}
  .silentbox-item {
    justify-content: center;
      cursor: pointer;
      display: inline-block;
      text-decoration: underline;
      align-items: center;
  }
  .main{
    margin: .6rem;
    padding:1rem;
    border: 3px;
    box-shadow: 0 1px 8px rgba(0,0,0,.6);
  }

</style>
