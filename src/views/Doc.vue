<template>
  <TopNav />
  <div class="topnav">
    <div class="logo"></div>
    <div class="menu"></div>
  </div>
  <div class="content">
    <aside>边栏</aside>
    <main>主内容</main>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>