<template>
  <div class="main">
    <Header />
    <mainBgLinks msg="Circular World" vid="/CW main background.mp4"/>
    <Shortparagraph msg="Sustainability and circular thinking go hand in hand. Technologies and entrepreneurship 
        help develop solutions that lead us harmoniously into the future. Recycling and conserving resources
         are an integeral part of this journey. 
        All under the motto: RE:DUCE, RE:USE, RE:CYCLE, RE:THINK. Join us on our search for the thrends and 
        drivers that are shaping our future while protecting the environment." date="18 April 2023"/>
  </div>
  
</template>

<script>
import Header from '@/components/Header.vue'
import MainBgLinks from '@/components/Mainbglinks.vue'
import Shortparagraph from '@/components/Shortparagraph.vue'

export default {
  name: 'Circular World',
  components: { Header, MainBgLinks, Shortparagraph }
}
</script>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  /* background-color: aqua; */
  position: relative;
}

</style>
