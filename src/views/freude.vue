<template>
  <div>
    <Header />
    <Mainbglinks msg="Freude" vid="/F main background.mp4" />
    <Shortparagraph msg="Joy can be so many things. A statement, driving 
    pleasure, enjoying life conscientiously.
     And joy is both a driver and a promise. Whatever else 
    it may be, joy is a powerful and intense feeling that lets us look positively to the future.
     With stories that stir your senses and tales that grab your attention, 
    we show you how joy detemins our lives and therefore also our mobility" date="18 April 2023" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Mainbglinks from '@/components/Mainbglinks.vue'
import Shortparagraph from '@/components/Shortparagraph.vue';

export default {
  name: 'freude',
  components: { Header, Mainbglinks, Shortparagraph }
}
</script>
