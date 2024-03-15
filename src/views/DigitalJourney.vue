<template>
  <div>
    <Header />
    <Mainbglinks msg="Digital Journey" vid="/DJ main background.mp4" />
    <Shortparagraph msg="Never before has the spectrum of mobility been so facinating and 
    automotive progress promised so much. We take you on a digital journey to the exciting topics 
    of out time and through the CAR universe. Sheer driving pleasure is transposed to the digital future. 
    At CARS, digitalization is a path that serves people's well-being, enables networking, and makes
     it even easier to experience joy" date="18 April 2023"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Mainbglinks from '@/components/Mainbglinks.vue'
import Shortparagraph from '@/components/Shortparagraph.vue'

export default {
  name: 'Digital Journey',
  components: { Header, Mainbglinks, Shortparagraph }
}
</script>

<style scoped></style>
