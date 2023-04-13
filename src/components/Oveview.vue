<template>
    <div
  
      id="silentbox-overlay"
      v-if="visible"
      @touchstart="touchStart"
      @touchmove="touchMove"
    >
      <transition :name="animationName" mode="out-in">
        <div
          id="silentbox-overlay__content"
          :key="overlayItem.src" >
          <img   :src="require(`../assets/img/${overlayItem.src}`)" :alt="overlayItem.alt" width="300" height="300">
            </div>
      </transition>
  <div class="container">
    <div id="silentbox-overlay__arrow-buttons" >
        <div
          class="arrow arrow-previous"
          role="button"
          tabindex="2"
          @click.stop="moveToPreviousItem"
          @keyup.enter="moveToPreviousItem"
        />
        <div
          class="arrow arrow-next"
          role="button"
          tabindex="1"
          @click.stop="moveToNextItem"
          @keyup.enter="moveToNextItem"
        />
      </div>
      <div
        id="silentbox-overlay__close-button"
        role="button"
        tabindex="3"
        @click.stop="closeSilentboxOverlay"
        @keyup.enter="closeSilentboxOverlay"
      >
        <div class="icon" />
      </div>
      <p id="silentbox-overlay__description" >
                {{ overlayItem.description }}
            </p>
  </div>
     
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'SilentboxOverlay',
  
    props: {
      overlayItem: {
        type: Object,
        default: () => {
          return {
            src: '',
            description: '',
            alt:''
          }
        }
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        touchHandling: {
          posX: 0,
          posY: 0
        },
        animationName: 'silentbox-animation__swipe-left'
      }
    },
    created () {
      // Listen to key events.
      window.addEventListener('keyup', (event) => {
        // Escape: 27
        if (event.which === 27) {
          this.closeSilentboxOverlay()
        }
        // Right arrow: 39
        if (event.which === 39) {
          this.moveToNextItem()
        }
        // Left arrow: 37
        if (event.which === 37) {
          this.moveToPreviousItem()
        }
      })
  
      // Disable browser scrolling.
      this.enableScrollLock()
    },
    methods: {
      /**
       * Registers the finger position on website so we can later calculate users
       * swipe direction.
       */
      touchStart (event) {
        const { clientX: x, clientY: y } = event.touches[0]
        this.touchHandling.posX = x
        this.touchHandling.posY = y
      },
      /**
       * Handles touch movement events, at the moment only swipe left and right
       * are supported, but later could be extended with up and down swipes.
       * It should be good to implement some kind of minimal swipe lenght support.
       */
      touchMove (event) {
        const { clientX: x, clientY: y } = event.touches[0]
        const { posX, posY } = this.touchHandling
  
        if (posX === 0 || posY === 0) {
          return
        }
  
        const xDiff = posX - x
        const yDiff = posY - y
  
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            // left
            this.moveToNextItem()
          } else {
            // right
            this.moveToPreviousItem()
          }
        } else {
          if (yDiff > 0) {
            // up
          } else {
            // down
            // this.closeSilentboxOverlay()
          }
        }
  
        // reset
        this.touchHandling.posX = 0
        this.touchHandling.posY = 0
      },
      /**
       * This method enables browser scrolling lock which prevent from horizontal
       * and vertical scrolling. This makes touch navigation less confusing.
       */
      enableScrollLock () {
        if (!document.body.classList.contains('silentbox-is-opened')) {
          return document.body.classList.add('silentbox-is-opened')
        }
      },
      /**
       * This method removes browser scrolling lock.
       */
      removeScrollLock () {
        if (document.body.classList.contains('silentbox-is-opened')) {
          return document.body.classList.remove('silentbox-is-opened')
        }
      },
      /**
       * Move to next item.
       */
      moveToNextItem () {
        this.animationName = 'silentbox-animation__swipe-left'
        this.$emit('requestNextSilentBoxItem')
      },
      /**
       * Move to previous item.
       */
      moveToPreviousItem () {
        this.animationName = 'silentbox-animation__swipe-right'
        this.$emit('requestPreviousSilentBoxItem')
      },
      /**
       * Hide silentbox overlay.
       */
      closeSilentboxOverlay () {
        this.removeScrollLock()
        this.$emit('closeSilentboxOverlay')
      },
   
    }
  }
  </script>
  
  <style >
  
  
  
  .silentbox-is-opened {
      overflow:visible;
  }
  
  #silentbox-overlay {
    display: block;
    justify-content: center;
    align-items: center;
      height: 19rem;
      position: relative;
     margin: auto;
     top:1rem;
      width: 70%;
      z-index: 999;
  }
     .silentbox-overlay__background{
          background: rgba(#000, .95);
          backdrop-filter: blur(10px);
          cursor: default;
          display: block;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          margin: auto;
          width: 100rem;
      }
  
    #silentbox-overlay__content{
      display: flex;
      align-items: center;
      justify-content: center;
          cursor: default;
          align-items: center;
          position: absolute;
  width: 100%;
  height: 100%;
  
      }
  
  
  
     #silentbox-overlay__description {
         display: inline;
          padding-top: 1rem;
          text-align: center;
          color:#420606;
          position: absolute;
          top: 80%;
      }
  .container{
    height: 100%;
    width: 100%;
    margin: 0rem auto;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
      #silentbox-overlay__close-button {
          background: rgba(#000, .0);
          border: none;
          cursor: pointer;
          height: 2.5rem;
          position: absolute;
          right:  3rem;
          top: 0;
          margin-bottom: 12rem;
          transition: background-color 250ms ease-out;
         width: 2.5rem;
        }
          #silentbox-overlay__close-button:hover,
          #silentbox-overlay__close-button:focus {
              background-color: rgba(#000, .5);
              outline: none;
          }
  
          .icon {
              color: #f0a6a6;
              cursor: pointer;
              height: 1rem;
              margin: 50% 50% 0 0;
              width: 1rem;
             }
              .icon:before,
              .icon:after {
                  background:#10a2a7;
                  content: "";
                  height: 2px;
                  left: 5%;
                  position: absolute;
                  top: 50%;
                  transition: 250ms ease;
                  width: 100%;
              }
              .icon:before {
                  transform: rotate(-45deg);
              }
              .icon:after {
                  transform: rotate(45deg);
              }
              .icon:hover::before,
              .icon:focus::before,
              .icon:hover::after,
              .icon:focus::after {
                 
                      background: #d3283f;
                      left: 25%;
                      width: 50%;
                  
              }
          
      
  
   #silentbox-overlay__arrow-buttons .arrow{
         position: absolute;
         top:50%;
              border-left: 2px solid #10a2a7;
              border-top: 2px solid #10a2a7;
              cursor: pointer;
              height: 1.5rem;
              width: 1.5rem;}
              #silentbox-overlay__arrow-buttons .arrow:hover,
              #silentbox-overlay__arrow-buttons .arrow:focus {
                  outline: none;
                  border-color: #e8ba58;
              }
          
              #silentbox-overlay__arrow-buttons .arrow-previous {
              left: 1rem;
             
              transform: rotate(-45deg);}
          
              #silentbox-overlay__arrow-buttons .arrow-next {
              right: 1rem;
        
              transform: rotate(135deg);}
          
      
      .silentbox-video__frame {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
  
  @media  screen and (max-width: 1024px) {
    #silentbox-overlay{
      width: 70%;
    }
  }
  .silentbox-animation__swipe-left-enter-active {
    transition: all .3s ease;
    opacity: 0;
    transform: translateX(25vw);
  }
  .silentbox-animation__swipe-left-leave-active {
    transition: all .3s ease;
    transition: opacity .5s;
  }
  .silentbox-animation__swipe-left-enter-to {
    opacity: 1;
    transition: all .3s ease;
    transform: translateX(0);
  }
  .silentbox-animation__swipe-left-leave-to {
    opacity: 0;
    transition: all .3s ease;
    transform: translateX(-25vw);
  }
  .silentbox-animation__swipe-right-enter-active {
    transition: all .3s ease;
    opacity: 0;
    transform: translateX(-25vw);
  }
  .silentbox-animation__swipe-right-leave-active {
    transition: all .3s ease;
    transition: opacity .5s;
  }
  .silentbox-animation__swipe-right-enter-to {
    opacity: 1;
    transition: all .3s ease;
    transform: translateX(0);
  }
  .silentbox-animation__swipe-right-leave-to {
    opacity: 0;
    transition: all .3s ease;
    transform: translateX(25vw);
  }
  
  
  @keyframes pulsingNext {
      0%   {
          animation-timing-function: ease-in;
          right: 2rem;
      }
      25%  {
          animation-timing-function: ease-in;
          right: 1.75rem;
      }
      75%  {
          animation-timing-function: ease-in;
          right: 2.25rem;
      }
      100% {
          animation-timing-function: ease-in;
          right: 2rem;
      }
  }
  @keyframes pulsingPrevious {
      0%   {
          animation-timing-function: ease-in;
          left: 2rem;
      }
      25%  {
          animation-timing-function: ease-in;
          left: 1.75rem;
      }
      75%  {
          animation-timing-function: ease-in;
          left: 2.25rem;
      }
      100% {
          animation-timing-function: ease-in;
          left: 2rem;
      }
  }
  </style>
  