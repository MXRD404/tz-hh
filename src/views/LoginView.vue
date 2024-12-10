<script setup lang="ts">
import { ref } from "vue";
import {useRouter} from "vue-router";
import useUserStore from "@/stores/user.store.ts";

const router = useRouter()
const userStore = useUserStore()

const loginInput = ref("")
const passwordInput = ref("")

const signIn = () => {
  userStore.user = {username: 'Maxim'}
  router.push('/')
}
</script>

<template>
<div class="login-page">
  <div class="login-container">
    <span class="title">Войти в панель</span>
    <input v-model="loginInput" type="text" class="finput" placeholder="Введите логин">
    <input v-model="passwordInput" type="text" class="finput" placeholder="Введите пароль">
    <button @click="signIn()" :disabled="passwordInput.length < 6 || loginInput.length < 5" class="btn">
      <span>Войти</span>
    </button>
  </div>
</div>
</template>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
}
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 230px;
}
.title {
  font-size: 19px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  margin-bottom: 20px;
}
.finput {
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 8px;
  padding-inline: 16px;
  padding-block: 8px;
  margin-bottom: 12px;
  outline: none;
  &:focus {
    border: 1px solid rgba(0,0,0,0.6);
  }
}
.btn {
  background-color: black;
  color: white;
  width: 68px;
  height: 31px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  &:disabled {
    opacity: 60%;
  }
}
</style>