<template>
    <div class="paragraph">
      <div class="content">
        <h2>{{ msg }}</h2>
      </div>
         <div class="date">
          <p>{{ date }}</p>
         </div>
    </div>
</template>

<script>
export default{
    name: 'Shortparagraph',
    props: ['msg', 'date']
}
</script>
<style scoped>
.paragraph{
  height: 60vh;
  width: 100%;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  padding: 5% 15%;
}

.paragraph h2{
  font-size: 27px;
}
.paragraph .date{
  margin-top: 4vh;
}

.pictures{
  height: 30vh;
}
</style>