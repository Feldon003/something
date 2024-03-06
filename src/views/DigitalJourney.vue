<template>
  <div>
    <Header />
    <Mainbglinks msg="Digital Journey" vid::src="/DJ main background.mp4" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Mainbglinks from '@/components/Mainbglinks.vue'

export default {
  name: 'Digital Journey',
  components: { Header, Mainbglinks }
}
</script>

<style scoped></style>
