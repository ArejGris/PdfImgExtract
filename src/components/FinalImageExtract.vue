<template>
<div id="main">   
        <div id="form"  class="bg-image">
            <div>
                <img src="../assets/img/logo.svg" alt="">
                <p>
                    Extract your images from any PDF
                </p>
                <form action="">
                    <div class="form-gorup">
                       <div class="custom-file">
                        <input class="custom-file-input" type="file" placeholder="upload your PDF here">
                       </div>
                    </div>
                    <div class="form-group">
                        <button class="confirmBtn">
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
            <div class="collect">
                <ul>
                    <a v-for="image in 15"
                    :key="image" >
                    <img src="" placeholder="src" style="width:34px;height: 45px;"/>

                    </a>


                </ul>
            </div>
        </div>
        </div>
</template>
<script>
export default{
    data(){
        return{
            
    arrayImages :[],
    image:  {
          src: '../assets/img/Vectordownload.svg',
          alt: '',
          thumbnailWidth: 'auto',
          thumbnailHeight: 'auto',
          thumbnail: '',
          autoplay: false,
          controls: true,
          description: ''
        
      }

        }
    }
}


</script>
<style>
#main{
    margin: 0;
    padding: 0;
    /* position: relative;     */
    width: 100%;
    height: 100%;


}
#form{
    position: absolute;
    margin: 0 auto;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/img/bacground.png');
    background-repeat: no-repeat;
    background-size: cover;

}
.confirmBtn{
    width: 261px;
    height: 50px;
    background: linear-gradient(90deg, #4568DC -77.64%, #B06AB3 177.64%);
    border-radius: 5px;
    margin-top: 10px;
    
}
.custom-file-input::-webkit-file-upload-button{
    visibility: hidden;

}
.custom-file{
    width:100%;
    height: 3rem;
    border:1px solid #ccc;
    display:inline-block;
    padding: 6px 12px;
    cursor:pointer;
}
@media screen and (max-width: 750px){
    #form{
    position: absolute;
    margin: 0;
    display: flex;
    width: 100%;
    height: 70vh;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/img/bacground.png') ;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

}
}
</style>