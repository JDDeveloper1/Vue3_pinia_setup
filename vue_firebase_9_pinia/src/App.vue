<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "./stores/user";

const userStore = useUserStore();
</script>

<template>
  <div>
    <h1>App</h1>
    <nav v-if="userStore.loadingSession">
      <RouterLink to="/" v-if="userStore.userData">Home</RouterLink>
      <hr>
      <RouterLink to="/login" v-if="!userStore.userData">Login</RouterLink>
      <hr>
      <RouterLink to="/register" v-if="!userStore.userData">register</RouterLink>
      <hr>
      <button @click="userStore.logoutUser" v-if="userStore.userData">logout</button>
    </nav>
    <div v-else>
      loading user..
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
</style>
