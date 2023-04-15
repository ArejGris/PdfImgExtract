<template>
    <h3>hello world</h3>
    <GoogleLogin :callback="callback" prompt/>
</template>
<script setup>
const callback=(response)=>{
    console.log('hello')
    console.log("handle the response",response)
}
</script>