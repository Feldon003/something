<template>
  <div class="main">
    <Header />
    <mainBgLinks msg="Circular World" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import MainBgLinks from '@/components/Mainbglinks.vue'

export default {
  name: 'Circular World',
  components: { Header, MainBgLinks }
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
