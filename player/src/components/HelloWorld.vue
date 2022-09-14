<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      <router-link to="/">{{ msg }}</router-link>
    </h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h1 a {
  text-decoration: none;
  color: #2c3e50;
}

/*h3 {*/
/*  font-size: 1.2rem;*/
/*}*/

/*.greetings h1,*/
/*.greetings h3 {*/
/*  text-align: center;*/
/*}*/

/*@media (min-width: 1024px) {*/
/*  .greetings h1,*/
/*  .greetings h3 {*/
/*    text-align: left;*/
/*  }*/
/*}*/
</style>
