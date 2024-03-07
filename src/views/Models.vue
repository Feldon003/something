<template>
  <div>
    <Header />
    <Mainbglinks msg="Models" vid="CW main background.mp4"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Mainbglinks from '@/components/Mainbglinks.vue';

export default {
  name: 'models',
  components: { Header, Mainbglinks }
}
</script>
