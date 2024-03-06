<template>
  <Header />
  <div class="firstface">
    <div class="mainface">
      <div class="image">
        <img src="/firstface background.jpg" alt="" />
      </div>
      <div class="content">
        <h3>Tactile facination</h3>
        <h1>A touch of the future with cars</h1>
        <button>Read more</button>
      </div>
    </div>
    <div class="otherface">
      <!-- Otherface div contains ONLY second and third face. -->
      <div class="secondface">
        <div class="image2" id="background">
          <img src="/secondface background.jpg" alt="" id="img" />
        </div>
        <div class="content-space">
          <div class="content">
            <h1>Acccept no Imitations</h1>
            <button id="otherface-button">Read more</button>
          </div>
        </div>
      </div>
      <div class="thirdface">
        <div class="image3" id="background">
          <img src="/thirdface background.jpg" alt="" id="img" />
        </div>
        <div class="content-space">
          <div class="content">
            <h3>Car film</h3>
            <h1>Third face</h1>
            <button id="otherface-button">Read more</button>
          </div>
        </div>
      </div>
    </div>
    <!-- The fourth face is NOT in the otherface div -->
    <div class="fourthface">
      <div class="learn-more">
        <div class="video">
          <video  autoplay loop muted src="/car logo loop 1.mp4"></video>
        </div>
        <div class="fourthface-content">
          <h2>Learn everything about cars here</h2>
            <button>Cars Explained</button>
        </div>
      </div>
    </div>
    <div class="h1">
      <h1>jkghuyhyg</h1>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Homeview',
  components: { Header }
}
</script>

<style scoped>
.firstface {
  height: 80vh;
  width: 100%;
  background-color: green;
  position: relative;
  cursor: pointer;
}
.firstface .image {
  width: 100%;
  height: 80vh;
  position: relative;
  transition: 8s;
}
.firstface .image::after {
  content: '';
  color: white;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  transition: all 5s;
}

.firstface .image img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
.mainface {
  overflow: hidden;
}
/*The mainface div was just created to help in the background moving */
.mainface:hover .image {
  transform: scale(1.2);
}
.firstface .mainface:hover .image::after {
  background: rgba(0, 0, 0, 0.7);
}
.firstface .content {
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 80%;
  color: white;
  position: absolute;
  top: 78%;
  left: 25%;
  transform: translate(-25%, -78%);
}

.firstface .content h3 {
  font-size: 30px;
}
.firstface .content h1 {
  margin-top: 3vh;
  font-size: 60px;
}
.firstface .content button {
  margin-top: 3vh;
  height: 8vh;
  width: 15%;
  border: 2px solid white;
  background: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
  transition: 0.4s;
  cursor: pointer;
}
.firstface .content button:hover {
  background-color: white;
  color: black;
}
.otherface {
  display: grid;
  height: 105vh;
  width: 100%;
  background-color: white;
  position: relative;
  top: 80;
  left: 0;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'secondface'
    'thirdface';
  grid-gap: 3px;
  padding-top: 3px;
}
.otherface #background {
  /* background-color: rgb(243, 4, 223); */
  height: 104vh;
  position: relative;
  width: 100%;
  transition: 8s;
}
.otherface #img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.secondface .image2::after {
  content: '';
  color: white;
  height: 100%;
  width: 108.6%;
  position: absolute;
  top: 0%;
  left: 0;
  transform: translate(-8%, 0%);
  background: rgba(0, 0, 0, 0.3);
  transition: all 5s;
  /* background-color: blue; */
}
.secondface:hover .image2 {
  transform: scale(1.2);
}
.secondface:hover .image2::after {
  background: rgba(0, 0, 0, 0.6);
}
.secondface {
  overflow: hidden;
}
.secondface .content-space {
  display: flex;
  flex-direction: column;
  /* background-color: blueviolet; */
  height: 40vh;
  width: 54.2%;
  position: absolute;
  top: 99%;
  left: 0;
  transform: translate(-8%, -99%);
}
.secondface .content {
  height: 35vh;
  width: 68%;
  /* background-color: blue; */
  margin-left: 60px;
}
.content-space .content h1 {
  font-size: 7vh;
}
/*!!!!!!!!  Thirdface begins here !!!!!!!!!!!*/
.thirdface .image3::after {
  content: '';
  color: white;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0%;
  left: 8%;
  transform: translate(-8%, 0%);
  background: rgba(0, 0, 0, 0.3);
  transition: all 5s;
  /* background-color: blue; */
}
.thirdface:hover .image3 {
  transform: scale(1.2);
}
.thirdface:hover .image3::after {
  background: rgba(0, 0, 0, 0.6);
}
.thirdface .content-space {
  display: flex;
  flex-direction: column;
  /* background-color: brown; */
  position: absolute;
  height: 50vh;
  width: 50%;
  top: 99%;
  left: 99.8%;
  transform: translate(-99.8%, -99%);
}
.thirdface {
  overflow: hidden;
}
.thirdface .content {
  height: 38vh;
  width: 68%;
  /* background-color: rgb(157, 255, 0); */
}

.otherface #otherface-button {
  width: 30vh;
  margin-top: 4vh;
}
.fourthface{
  height: 68vh;
  width: 100%;
  background-color: white;
  position: absolute;
  top: 231%;
  left: 0;
  padding: 35px 100px;
 

}  
.fourthface .learn-more{
  /* background-color: rgb(32, 126, 234); */
  height: 100%;
  display: flex;
  /* flex-direction: column; */
}
.learn-more .video{
  /* background-color: black; */
  height: 100%;
  width: 60%;
}
.learn-more .video video{
  height: 100%;
  width: 100%;
}
.fourthface-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 40%;
  /* background-color: blueviolet; */
  margin-top: 8vh;
  margin-left: 8%;
  
}
.fourthface-content h2{
  /* background-color: rgb(0, 49, 92); */
  width: 100%;
  height: 20vh;
  font-size: 42px;
  color: rgb(34, 33, 43);
}
.fourthface-content button{
  /* margin-top: 3vh; */
  height: 8vh;
  width: 100%;
  border: 2px solid rgb(34, 33, 43);
  background: none;
  font-size: 18px;
  font-weight: bold;
  color: rgb(34, 33, 43);
  transition: 0.4s;
  cursor: pointer;
  text-transform: uppercase;

}
.fourthface-content button:hover{
  background-color: rgb(34, 33, 43);
  color: white;
  border: solid rgb(34, 33, 43);
}
.h1{
  position: absolute;
  top: 316%;
  background-color: rgb(34, 33, 43);
  height: 50vh;
  width: 100%
}
</style>
