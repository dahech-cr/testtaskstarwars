<template>
  <div id="home" onclick="" class="home">
    <Header />
    <Main />
    <Footer /> 

  </div>
</template>

<script>
import Header from "../components/vHeader"
import Main from "../components/Main/vMain.vue"
import Footer from "../components/vFooter"

export default {
  name: 'Home',
  components: {
    Header , Main , Footer
  },
  mounted(){
    console.log('helloworld')
  }
}
</script>
