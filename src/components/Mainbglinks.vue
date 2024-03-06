<!-- This is the Main Background for the links except Home -->
<template>
  <div class="main-view">
    <div class="video">
      <!-- /CW main background.mp4 -->
      <video class="bg-video" autoplay muted loop src="/CW main background.mp4" alt="hiuiii">
        {{ vid }}
      </video>
    </div>
    <div class="content">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainBgLinks',
  props: ['msg', 'vid']
}
</script>
<style scoped>
.main-view {
  height: 100vh;
  width: 100%;
  /* background-color: aqua; */
  position: relative;
}
.main-view .video {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.main-view .bg-video {
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
}
.main-view .content {
  /* background-color: blue; */
  height: 70vh;
  width: 90%;
  position: absolute;
  top: 10vh;
  left: 0;
  display: flex;
  margin-left: 5%;
  padding-top: 15vh;
  padding-left: 1%;
  color: white;
}
.content h1 {
  font-size: 70px;
}
</style>
