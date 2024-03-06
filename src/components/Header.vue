<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/circularWorld">Circular World</RouterLink>
        </li>
        <li>
          <RouterLink to="/digitaljourney">Digital Journey</RouterLink>
        </li>
        <li>
          <RouterLink to="/electricfuture">Electric Future</RouterLink>
        </li>
        <li>
          <RouterLink to="/freude">Freude</RouterLink>
        </li>
        <li>
          <RouterLink to="/models">Models</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  height: 10vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  /* background: rgba(0, 0, 0, 0.2); */
}
nav {
  height: 100%;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
ul {
  padding: 20px;
  list-style: none;
  width: 60%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
}
li {
  text-decoration: none;
}
a {
  text-decoration: none;
  color: white;
  transition: 0.4s;
}
a:hover {
  color: yellow;
}
</style>
