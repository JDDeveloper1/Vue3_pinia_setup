
<script setup>
import { use } from "chai";
import { ref } from "vue";
import { useUserStore } from "../stores/user";
/* import { useRouter } from "vue-router"; */

const userStore = useUserStore();
/* const router = useRouter(); */

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert('Llena los Campos del Formulario');
  }
    await userStore.registerUser(email.value, password.value);
  /* router.push('/') */
};
</script>

<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Ingresar Email" v-model.trim="email" />
      <input type="password" placeholder="Ingrese Contrasela" v-model.trim="password" />
      <button type="submit" :disabled="userStore.loadinUser">Crear Usuario</button>
    </form>
  </div>
</template>

<style scoped>
</style>

