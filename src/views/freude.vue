<template>
  <div>
    <Header />
    <Mainbglinks msg="Freude" vid="/DJ main background.mp4" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Mainbglinks from '@/components/Mainbglinks.vue'

export default {
  name: 'freude',
  components: { Header, Mainbglinks }
}
</script>
