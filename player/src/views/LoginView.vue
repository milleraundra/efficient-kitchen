<script lang="ts">
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

export default {

  methods: {
    login() {
      const email = '';
      const password = '';
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            console.log(userCredential);
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });

    }
  }

}
</script>

<template>
  <div class="about">
    <h1>This is where login will happen</h1>
    <button @click="login">Log In</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
