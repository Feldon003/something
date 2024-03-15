<template>
  <div>
    <Header />
    <Mainbglinks msg="Electric Future" vid="/CW main background.mp4" />
    <Shortparagraph msg="The engine of the furure will be powered by electricity. And the future starts here and now. We invite you to
    take a glimpse at the innovations that will define our mobility. In doing so, we span the spectrum from today's 
    technologies to hydrogen and upcoming technologies. This electric future offers tremendous oppourtunities for a greener and more sustainable society." date="18 April 2023"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Mainbglinks from '@/components/Mainbglinks.vue'
import Shortparagraph from '@/components/Shortparagraph.vue';

export default {
  name: 'Electric Future',
  components: { Header, Mainbglinks, Shortparagraph }
}
</script>
