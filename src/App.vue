<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Efficient Kitchen 2.0" />
      <nav>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/home">Home</RouterLink>
<!--        <RouterLink to="/about">About</RouterLink>-->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
